// src/App.jsx
import React from "react";

function App() {
  const profilePic = "/profile.jpg"; // <-- add your picture in public folder

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }}
        />
        <h1>Hi 👋, I'm Labib Taher Chowdhury</h1>
        <h3>CSE Undergraduate | Competitive Programmer | Aspiring Software Engineer</h3>
      </header>

      {/* Competitive Programming Journey */}
      <section style={{ marginBottom: "30px" }}>
        <h2>🚀 Competitive Programming Journey</h2>
        <ul>
          <li>
            🎯 Codeforces: <a href="https://codeforces.com/profile/Labibtc">Specialist (Max Rating 1539)</a>
          </li>
          <li>🧠 Solved 1200+ problems across Codeforces, Leetcode, LightOJ, CSES, etc.</li>
          <li>🕐 Participated in 150+ online contests</li>
          <li>🎖️ 2× ICPC Dhaka Regionalist | 9 National IUPCs</li>
        </ul>
      </section>

      {/* Achievements */}
      <section style={{ marginBottom: "30px" }}>
        <h2>🏆 Notable Achievements</h2>
        <ul>
          <li>🥈 ICPC Dhaka Regional 2024 – 30th</li>
          <li>🥉 KUET Inter-University IUPC 2025 – 32nd</li>
          <li>🏅 CUSS IT Fiesta 2024 – 4th</li>
          <li>🥇 Bangladesh Mathematical Olympiad, Chittagong Division – Champion</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section style={{ marginBottom: "30px" }}>
        <h2>🧰 Tech Stack</h2>
        <p>
          <strong>Languages:</strong> C++ · SQL · Python · Java · JavaScript · HTML
          <br />
          <strong>Frameworks & Libraries:</strong> React · Node.js · TensorFlow.js
          <br />
          <strong>Databases & APIs:</strong> MySQL · RESTful APIs · GraphQL
          <br />
          <strong>Dev Tools:</strong> Git · Expo
          <br />
          <strong>Domains:</strong> Competitive Programming · Web Development
        </p>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "30px" }}>
        <h2>📦 Projects</h2>
        <ul>
          <li>
            <strong>CleverCart – AI-Powered E-Commerce System:</strong> React.js · Redux Toolkit · Firebase.
            Summarizes user reviews using Gemini API. <a href="https://github.com/Labibt/CleverCart">GitHub</a>
          </li>
          <li>
            <strong>SmartPick – Coding Interview Assistant:</strong> React.js · Firebase · GraphQL.
            Recommends unsolved problems & compares applicant rating curves. <a href="https://github.com/Labibt/SmartPick">GitHub</a>
          </li>
        </ul>
      </section>

      {/* Academic Research */}
      <section style={{ marginBottom: "30px" }}>
        <h2>📜 Academic Research</h2>
        <p>
          <strong>Thesis:</strong> Depression Severity Classification with Lightweight Deep Transfer Learning Model.
          Developed transformer-based depression detection model. <a href="https://github.com/Labibt/Depression-Severity-Classification-with-Lightweight-Deep-Transfer-Learning-Model">GitHub</a>
        </p>
      </section>

      {/* Contact */}
      <section style={{ marginBottom: "30px" }}>
        <h2>🌐 Let's Connect</h2>
        <p>
          📧 <a href="mailto:labibt42@gmail.com">labibt42@gmail.com</a>
          <br />
          💼 <a href="https://www.linkedin.com/in/labibtaher/">LinkedIn</a>
          <br />
          💻 <a href="https://github.com/Labibt">GitHub</a>
          <br />
          🧮 <a href="https://codeforces.com/profile/Labibtc">Codeforces</a>
        </p>
      </section>
    </div>
  );
}

export default App;
