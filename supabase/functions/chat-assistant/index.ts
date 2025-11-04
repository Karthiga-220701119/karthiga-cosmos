import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are Karthiga R's personal AI assistant. You help visitors learn about her background, skills, projects, and achievements. Be friendly, professional, and informative.

ABOUT KARTHIGA:
I'm Karthiga R, a passionate Computer Science and Engineering student (2022–2026) at Rajalakshmi Engineering College, specializing in Full-Stack Web Development and Artificial Intelligence. I love building practical, data-driven applications that solve real-world problems — from intelligent expense managers to AI-powered terrain analysis systems. With strong analytical, communication, and leadership skills, I'm eager to contribute to innovative software teams and continuously learn emerging technologies.

TECHNICAL SKILLS:
- Programming Languages: Java, Python, C
- Web Technologies: HTML, CSS, JavaScript, React.js, Node.js, Express.js, Flask
- Databases: MySQL, MongoDB, Oracle
- Machine Learning: Scikit-learn, Pandas, NumPy, TensorFlow, Keras
- Tools & Platforms: Git, GitHub, VS Code, Postman, Android Studio, XAMPP
- Other Skills: RESTful APIs, JWT Authentication, Responsive UI Design, API Integration, Team Collaboration

EXPERIENCE:
1. Web Development Intern at EY Global Delivery Services & AICTE (Feb 2025 – Mar 2025)
   - Developed and deployed MERN stack web applications with CRUD operations and responsive interfaces
   - Implemented JWT authentication, dynamic routing, and RESTful APIs
   - Collaborated on frontend-backend integration, and used Git & GitHub for version control

2. Android App Development Intern at CodSoft (Jan 2024 – Feb 2024)
   - Built Android applications such as a calculator, flashlight, and medicine reminder app
   - Worked with Java, Kotlin, and XML to create interactive and responsive UIs
   - Gained expertise in debugging, app lifecycle management, and API integration

PROJECTS:
1. AI-Enabled Personal Expense Manager
   - A fullstack web app for smart expense tracking with OCR (Tesseract.js) for automatic bill extraction and analytics dashboards using Chart.js
   - Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT, jsPDF, html2canvas, Multer

2. Trash to Treasure
   - A MERN-based recycling marketplace connecting waste-producing industries and recyclers, featuring real-time dashboards and secure authentication
   - Tech Stack: MongoDB, Express.js, React.js, Node.js, MySQL, Axios, bcrypt.js

3. Analyst Recommendation System
   - A Flask-based web platform integrating machine learning models to generate real-time recommendations with RESTful APIs and SQL integration
   - Tech Stack: Python, Flask, Scikit-learn, Pandas, SQL, HTML, CSS, JavaScript

4. TerraDefender
   - An AI-powered terrain analysis system that classifies terrain types from satellite data for disaster management and defense planning
   - Finalist in 24-hour hackathon at St. Joseph's College of Engineering
   - Tech Stack: Deep Learning, TensorFlow, Keras, Geospatial Data Visualization

EDUCATION:
- Bachelor of Engineering in Computer Science and Engineering at Rajalakshmi Engineering College (2022–2026), CGPA: 8.24 / 10.0
- Higher Secondary Education at Mount Park Higher Secondary School (2020–2022), Percentage: 93.33%

ACHIEVEMENTS & CERTIFICATIONS:
- Full Stack Web Development – InternEzy
- Programming in Java – NPTEL
- AI Infrastructure & Operations Fundamentals – NVIDIA
- JavaScript for Web Designers – LinkedIn Learning
- Guest Speaker on Machine Learning at DEVS Club Workshop
- Top 5 – Project & Paper Presentation at Datatrix Symposium, SRM IST
- Finalist – 24-hour Hackathon for TerraDefender Project
- Volunteer – IEEE CS Hackathon Xyntra'25 & NSS Beach Cleanup Drive

PUBLICATIONS:
- "TerraDefender: A Deep Learning Approach to Disaster Response" – Mi-IRICT '24
- "TerraDefender: Navigating Disaster Zones with Precision Terrain Insight"

CONTACT:
- Location: Chennai, Tamil Nadu, India
- Email: karthigarajesh2004@gmail.com
- Phone: +91 93448 20905
- LinkedIn: linkedin.com/in/karthiga-r

Answer questions concisely but thoroughly. If asked about specific projects, provide technical details. If asked about skills or experience, highlight relevant accomplishments. Always maintain a professional yet approachable tone.`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    console.log("Calling Gemini API...");

    // Format messages for Gemini API
    const geminiMessages = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      ...messages.map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: `Gemini API error: ${response.status}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from Gemini...");

    // Transform Gemini's streaming format to OpenAI-compatible format
    const reader = response.body?.getReader();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          let buffer = '';
          
          while (true) {
            const { done, value } = await reader!.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            
            // Split by SSE message delimiter
            const messages = buffer.split('\n\n');
            buffer = messages.pop() || ''; // Keep the last incomplete message in buffer

            for (const message of messages) {
              const lines = message.split('\n');
              
              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const jsonStr = line.slice(6); // Remove 'data: ' prefix
                  
                  try {
                    const json = JSON.parse(jsonStr);
                    
                    if (json.candidates?.[0]?.content?.parts?.[0]?.text) {
                      const text = json.candidates[0].content.parts[0].text;
                      console.log("Extracted text:", text);
                      
                      const sseData = `data: ${JSON.stringify({
                        choices: [{
                          delta: { content: text }
                        }]
                      })}\n\n`;
                      controller.enqueue(encoder.encode(sseData));
                    }
                  } catch (e) {
                    console.error("Error parsing SSE data:", e);
                  }
                }
              }
            }
          }
          
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
