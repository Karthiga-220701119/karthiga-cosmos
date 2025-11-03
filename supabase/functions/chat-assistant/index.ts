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
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
