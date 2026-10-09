(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const u={profile:{summary:"Computer Science student at Binus University with a strong focus on Cyber Security, Networking, and Software Development. Highly passionate about penetration testing, vulnerability assessment, and building secure systems. Equipped with practical knowledge from intensive cybersecurity bootcamps and proven leadership experience in developing technology-focused educational programs. Actively seeking an IT internship to apply technical skills in a dynamic professional environment.",linkedin:"https://www.linkedin.com/in/yasin-taryaqil-aghyar-3a9174326/",github:"https://github.com/Hyphen-14"},experience:[{organization:"Bina Nusantara (Binus) University",location:"Jakarta",role:"Computer Science Student (Cyber Security)",year:"2024 - Present",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/binus_student.jpg",description:"Currently pursuing a Bachelor's degree in Computer Science with a streaming focus on Cyber Security. Actively developing skills in secure software architecture, network defense, and system vulnerabilities."},{organization:"Yayasan SMK Swasta Mandiri Bersemi",location:"Cianjur",role:"SDC Program Educator & Co-founder",year:"2026",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/yayasan.jpg",description:"Co-founded and developed the Student Development Club (SDC), an extracurricular program designed to help students discover and hone practical skills specific to their fields of interest. Formulated the curriculum and learning systems to foster student achievement and technological literacy. Taught and mentored students in technology."},{organization:"Binus University",location:"Jakarta",role:"1st Place - Business Competition",year:"2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/business_plan.jpg",description:"Won first place in the university-wide business competition, demonstrating strong entrepreneurial and strategic planning skills."},{organization:"Rework Academy",location:"Online",role:"Cyber Security Trainee",year:"2026",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/rework.jpg",description:"Completed an intensive Cyber Security Bootcamp focusing on Red Teaming, Vulnerability Assessment, and SOC fundamentals. Gained hands-on experience in areas such as reconnaissance, API security, web exploitation (SQLi, XSS, RCE), SSRF, security monitoring, and bug bounty practices. Developed skills in pentest reporting and practical cybersecurity operations."},{organization:"Timedoor Academy",location:"Online",role:"JavaScript & Game Dev Student",year:"2023",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/timedoor.png",description:"Participated in coding classes focusing on JavaScript and Game Development. Applied programming logic, conditional loops, and JS methods to build mini-projects and case studies."},{organization:"Coding Studio",location:"Online",role:"Cyber Security & IT Student",year:"2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/experience/coding_studio.png",description:"Completed comprehensive online courses covering Fundamental Cyber Security, Linux Command Line, Computer Networking, and Algorithms, building a strong foundation in information technology and security."}],certifications:[{title:"Teaching & Educational Contribution",issuer:"Yayasan Mandiri Bersemi",date:"2026",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/cert-teaching.png",description:"Recognized for contributions as a Mentor & Instructor in the Student Development Club (SDC)."},{title:"Fundamental Cyber Security",issuer:"Coding Studio",date:"August 2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/cert-cybersecurity.png",description:"Successfully completed the Fundamental Cyber Security online course, learning the core concepts of information security."},{title:"Fundamental Command Linux",issuer:"Coding Studio",date:"July 2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/cert-linux.png",description:"Mastered fundamental Linux command-line operations essential for system administration and penetration testing."},{title:"Fundamental Jaringan Komputer",issuer:"Coding Studio",date:"May 2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/cert-jaringan.png",description:"Gained a solid understanding of computer networking principles, protocols, and architecture."},{title:"Fundamental Algoritma",issuer:"Coding Studio",date:"May 2025",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/cert-algoritma.png",description:"Developed strong foundational skills in programming logic, algorithms, and problem-solving techniques."},{title:"Cyber Security Bootcamp",issuer:"Rework Academy",date:"Aug 2026 – Oct 2026",note:"(Completed, Certificate Pending)",description:"Intensive training program focused on practical penetration testing and vulnerability assessment."},{title:"Technology Project Member (TPM) - Back-End",issuer:"BNCC x Traveloka",date:"2024",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/tpm.jpg",description:"Participated as a Backend Developer utilizing the Laravel framework for a web project sponsored by Traveloka."},{title:"Python Course",issuer:"Kaggle",date:"August 2026",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/certs/kaggle.png",description:"Successfully completed the Python course on Kaggle, mastering core programming concepts and logic."}],skills:{"Cyber Security":["Penetration Testing","Red Teaming","Vulnerability Assessment","Web Exploitation (SQLi, XSS, RCE)","Incident Analysis","SOC Fundamentals"],Networking:["Network Traffic Analysis","Subnetting","Security Monitoring"],"Software Development":["C","C++","Java","Python","PHP","JavaScript","SQL","Web/Mobile App Architecture"],"Tools & OS":["Kali Linux","Burp Suite","Nmap","Ghidra","Wireshark","Docker","Git","VS Code"]},projects:[{name:"QR-Phishing",description:"A proof-of-concept tool demonstrating the risks of malicious QR codes in phishing attacks.",tech:["Python","Cyber Security"],link:"https://github.com/Hyphen-14/QR-Phishing-Example-Generator-for-Scanner-App-Testing-/tree/main/scanner_helper_tool",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/projects/qr-phishing.png"},{name:"VOLO",description:"A comprehensive flight ticket booking application designed for seamless travel planning and management.",tech:["Web Development","JavaScript","PHP"],link:"https://github.com/Hyphen-14/VOLO",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/projects/volo.png"},{name:"Chloris AI",description:"An AI-powered diagnostic tool for detecting plant diseases and assessing plant health. Built with custom-trained data to provide accurate care recommendations and treatment solutions.",tech:["Python","AI"],link:"https://github.com/Hyphen-14/Chloris-ai",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/projects/chloris.png"},{name:"NutriCare AI",description:"An AI-powered application designed to help patients choose suitable meals and track their recovery progress. The app also connects patients directly with required specialist doctors.",tech:["AI","Web Development"],link:"https://github.com/Raynerqt/food-recomendation",image:"/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/projects/nutricare.png"}]};function A(){z(),O(),C(),E(),I(),P()}function z(){const i=document.getElementById("about");if(!i)return;i.style.padding="0";const e="Passionate about penetration testing, identifying system vulnerabilities, and building robust, secure digital architectures.";i.innerHTML=`
    <style>
      .neon-profile-container {
        position: relative;
        width: 100vw;
        margin-left: calc(-50vw + 50%); /* Full bleed */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: transparent;
        overflow: hidden;
        padding: 80px 5%;
        color: #fff;
      }

      /* Pulse Animation */
      @keyframes neon-pulse {
        0% { filter: drop-shadow(0 0 5px rgba(5,217,232,0.5)) drop-shadow(0 0 20px rgba(176,38,255,0.3)); opacity: 0.8; }
        100% { filter: drop-shadow(0 0 15px rgba(5,217,232,0.9)) drop-shadow(0 0 40px rgba(176,38,255,0.6)); opacity: 1; }
      }
      
      @keyframes neon-text-pulse {
        0% { text-shadow: 0 0 10px rgba(5,217,232,0.3), 0 0 20px rgba(176,38,255,0.2); opacity: 0.85; }
        100% { text-shadow: 0 0 20px rgba(5,217,232,0.8), 0 0 40px rgba(176,38,255,0.6); opacity: 1; }
      }

      /* Hero Entry Animation (Preserves Transforms) */
      .hero-entry {
        animation: hero-fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) backwards;
      }
      @keyframes hero-fade-in {
        0% { opacity: 0; filter: blur(10px); }
        100% { opacity: 1; filter: blur(0px); }
      }
      .hero-entry-left { animation: hero-slide-left 1s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
      @keyframes hero-slide-left {
        0% { opacity: 0; transform: translateX(-50px); filter: blur(10px); }
        100% { opacity: 1; transform: translateX(0); filter: blur(0px); }
      }
      .hero-entry-right { animation: hero-slide-right 1s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
      @keyframes hero-slide-right {
        0% { opacity: 0; transform: translateX(50px); filter: blur(10px); }
        100% { opacity: 1; transform: translateX(0); filter: blur(0px); }
      }
      .hero-entry-pop { animation: hero-pop 1s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
      @keyframes hero-pop {
        0% { opacity: 0; transform: translateY(50px) scale(0.95); filter: blur(10px); }
        100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
      }

      /* Background Text Pulse (Dimmer) */
      @keyframes neon-bg-text-pulse {
        0% { text-shadow: 0 0 5px rgba(5,217,232,0.1), 0 0 10px rgba(176,38,255,0.1); opacity: 0.5; }
        100% { text-shadow: 0 0 10px rgba(5,217,232,0.3), 0 0 20px rgba(176,38,255,0.2); opacity: 0.8; }
      }

      /* Background Text */
      .neon-bg-text {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(8rem, 20vw, 24rem);
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 900;
        line-height: 0.7; /* Creates the vertical overlap */
        color: transparent;
        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.08);
        white-space: nowrap;
        z-index: 1;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        animation: hero-fade-in 1s ease-out backwards, neon-bg-text-pulse 4s 1s ease-in-out infinite alternate;
      }
      .neon-bg-text span { display: block; }
      .neon-bg-text span:first-child { transform: translateX(-40%); }
      .neon-bg-text span:last-child { transform: translateX(15%); }

      /* Glowing Circle (More Prominent) */
      .neon-glow-circle {
        position: absolute;
        top: 45%;
        left: 54%;
        transform: translate(-50%, -50%);
        width: clamp(320px, 48vw, 650px);
        height: clamp(320px, 48vw, 650px);
        border-radius: 50%;
        border: 3px solid rgba(176, 38, 255, 0.6);
        box-shadow: 0 0 60px rgba(176, 38, 255, 0.5), inset 0 0 60px rgba(5, 217, 232, 0.4);
        z-index: 2;
        pointer-events: none;
        animation: hero-fade-in 1.2s ease-out backwards, pulse-ring 3s 1.2s ease-in-out infinite alternate;
      }
      .neon-glow-circle::after {
        content: '';
        position: absolute;
        top: -15px; left: -20px; right: -15px; bottom: -15px;
        border-radius: 50%;
        border: 1px solid rgba(5, 217, 232, 0.3);
        box-shadow: 0 0 30px rgba(5, 217, 232, 0.2);
        animation: pulse-ring 4s ease-in-out infinite alternate-reverse;
      }

      @keyframes pulse-ring {
        0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.8; filter: hue-rotate(0deg); }
        100% { transform: translate(-50%, -50%) scale(1.02); opacity: 1; filter: hue-rotate(15deg); }
      }

      /* Hero Image */
      .neon-hero-img {
        position: absolute;
        bottom: 80px; /* Space for stats bar */
        left: 55%;
        transform: translateX(-50%);
        height: 80%;
        z-index: 3;
        object-fit: contain;
        pointer-events: none;
        filter: drop-shadow(0 0 25px rgba(0,0,0,0.9));
      }

      /* Top Bar */
      .neon-top-bar {
        position: absolute;
        top: 40px;
        left: 5%;
        right: 5%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        z-index: 4;
      }
      .neon-logo { display: flex; align-items: center; gap: 15px; }
      .neon-logo-icon {
        font-family: 'Press Start 2P', monospace;
        font-size: 1.5rem;
        background: linear-gradient(45deg, var(--neon), var(--magenta));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .neon-logo-text { font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; letter-spacing: 2px; font-weight: 700; }
      .neon-logo-title { font-size: 0.65rem; color: rgba(255,255,255,0.6); letter-spacing: 1px; margin-top: 5px; }
      .neon-availability { font-size: 0.7rem; letter-spacing: 2px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 8px; text-transform: uppercase; }
      .neon-dot { width: 10px; height: 10px; background-color: var(--magenta); border-radius: 50%; box-shadow: 0 0 10px var(--magenta); animation: pulse 2s infinite alternate; }

      /* Content Area (Left and Right) */
      .neon-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 4;
        position: relative;
        flex: 1;
        padding-bottom: 40px;
      }

      /* Left Side */
      .neon-left { width: 35%; max-width: 400px; }
      .neon-subtitle { font-size: 0.7rem; letter-spacing: 2px; color: rgba(255,255,255,0.6); text-transform: uppercase; margin-bottom: 10px; border-left: 2px solid var(--neon); padding-left: 10px; }
      .neon-title {
        font-size: 3.5rem;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 900;
        line-height: 0.9;
        margin-bottom: 20px;
        background: linear-gradient(to right, var(--magenta), var(--neon));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        animation: neon-text-pulse 3s ease-in-out infinite alternate;
      }
      .neon-desc { font-size: 0.9rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 30px; }
      
      .neon-buttons { display: flex; gap: 15px; align-items: center; flex-wrap: wrap; }
      .neon-btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: transparent;
        border: 1px solid var(--neon);
        color: #fff;
        padding: 10px 25px;
        border-radius: 30px;
        text-decoration: none;
        font-size: 0.8rem;
        font-family: 'Space Grotesk', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s;
        box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.1);
      }
      .neon-btn-primary:hover { background: rgba(0, 240, 255, 0.1); box-shadow: inset 0 0 20px rgba(0, 240, 255, 0.2), 0 0 20px rgba(0,240,255,0.2); }
      .neon-btn-icon { background: var(--neon); color: #000; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
      
      .neon-btn-text {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.6);
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        background: none;
        border: none;
        font-family: 'Space Grotesk', sans-serif;
        padding: 5px;
        transition: color 0.3s;
      }
      .neon-btn-text:hover { color: var(--neon); text-shadow: 0 0 10px var(--neon); }

      /* Right Side */
      .neon-right { width: 35%; max-width: 400px; text-align: right; display: flex; flex-direction: column; align-items: flex-end; }
      .neon-cursive {
        font-family: 'Caveat', cursive;
        font-size: 4rem;
        color: var(--magenta);
        line-height: 1;
        margin-bottom: 40px;
        transform: rotate(-5deg);
        animation: neon-text-pulse 3s ease-in-out infinite alternate;
      }
      .neon-skill-list { list-style: none; padding: 0; margin: 0; text-align: right; display: flex; flex-direction: column; gap: 18px; }
      .neon-skill-list li { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; border-right: 2px solid var(--magenta); padding-right: 15px; }

      /* Bottom Stats (Study Places) */
      .neon-stats-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(5, 10, 31, 0.5);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 240, 255, 0.15);
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 40px;
        z-index: 5;
      }
      .neon-stat-item { display: flex; align-items: center; gap: 15px; }
      .neon-stat-icon { font-size: 1.8rem; color: var(--magenta); }
      .neon-stat-info { display: flex; flex-direction: column; }
      .neon-stat-val { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 700; color: #fff; text-transform: uppercase; }
      .neon-stat-label { font-size: 0.65rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; }

      /* Dossier Modal */
      .dossier-modal {
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(5, 10, 31, 0.95);
        border: 1px solid var(--neon);
        box-shadow: 0 0 40px rgba(5,217,232,0.3);
        padding: 40px; border-radius: 12px; color: #fff; z-index: 1000;
        width: 90%; max-width: 600px; backdrop-filter: blur(10px);
        font-family: 'Space Grotesk', sans-serif;
      }
      .dossier-modal::backdrop { background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); }
      .dossier-close { position: absolute; top: 15px; right: 15px; background: transparent; border: none; color: var(--neon); font-size: 1.5rem; cursor: pointer; transition: 0.3s; }
      .dossier-close:hover { text-shadow: 0 0 10px var(--neon); }
      .dossier-content h2 { color: var(--magenta); margin-bottom: 20px; font-size: 1.5rem; }
      .dossier-content p { line-height: 1.8; font-size: 0.95rem; color: rgba(255,255,255,0.8); }

      @media (max-width: 900px) {
        .neon-content { flex-direction: column; gap: 40px; align-items: flex-start; margin-top: 100px; padding-bottom: 120px; }
        .neon-left, .neon-right { width: 100%; text-align: left; align-items: flex-start; max-width: 100%; }
        .neon-skill-list { align-items: flex-start; }
        .neon-skill-list li { border-right: none; border-left: 2px solid var(--magenta); padding-right: 0; padding-left: 15px; }
        .neon-stats-bar { flex-wrap: wrap; gap: 20px; position: relative; border-radius: 12px; margin: 20px; border: 1px solid rgba(0,240,255,0.15); }
        .neon-bg-text { font-size: 4rem; }
        .neon-hero-img { height: 45%; opacity: 0.4; z-index: 0; }
        .neon-cursive { margin-bottom: 20px; }
      }
    </style>

    <div class="neon-profile-container">
      
      <!-- Background Text & Effects -->
      <div class="neon-bg-text">
        <span>YASIN</span>
        <span>AGHYAR</span>
      </div>
      <div class="neon-glow-circle"></div>
      
      <!-- Hero Photo -->
      <img src="/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/profile-hero.png" class="neon-hero-img hero-entry" style="animation-delay: 0.3s;" alt="Yasin Aghyar" />
      
      <!-- Top Bar -->
      <div class="neon-top-bar hero-entry-left" style="animation-delay: 0.4s;">
        <div class="neon-logo">
          <div class="neon-logo-icon">YA</div>
          <div>
            <div class="neon-logo-text">YASIN T. AGHYAR</div>
            <div class="neon-logo-title">CYBER SECURITY ENTHUSIAST</div>
          </div>
        </div>
        <div class="neon-availability">
          AVAILABLE FOR NEW PROJECTS <div class="neon-dot"></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="neon-content">
        <!-- Left Side -->
        <div class="neon-left hero-entry-left" style="animation-delay: 0.5s;">
          <div class="neon-subtitle">I design secure networks &</div>
          <div class="neon-title">CYBER<br>SECURITY</div>
          <div class="neon-desc">
            ${e}
          </div>
          <div class="neon-buttons">
            <a href="/PORTOFOLIO---Yasin-Taryaqil-Aghyar/assets/cv.pdf" target="_blank" class="neon-btn-primary">
              <span class="neon-btn-icon">&rarr;</span> DOWNLOAD CV
            </a>
            <button class="neon-btn-text" id="open-dossier-btn">[ READ DOSSIER ]</button>
          </div>
        </div>

        <!-- Right Side -->
        <div class="neon-right hero-entry-right" style="animation-delay: 0.5s;">
          <div class="neon-cursive">Fix &amp; Secure</div>
          <ul class="neon-skill-list">
            <li>Penetration Testing</li>
            <li>Vulnerability Assessment</li>
            <li>Web Exploitation</li>
            <li>SOC Fundamentals</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Stats (Study Places) -->
      <div class="neon-stats-bar hero-entry-pop" style="animation-delay: 0.6s;">
        <div class="neon-stat-item">
          <div class="neon-stat-icon">🎓</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">BINUS</div>
            <div class="neon-stat-label">University</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">🛡️</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">Rework</div>
            <div class="neon-stat-label">Academy</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">💻</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">Coding Studio</div>
            <div class="neon-stat-label">Cyber Course</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">⚙️</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">Timedoor</div>
            <div class="neon-stat-label">Academy</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dossier Modal Overlay -->
    <div id="dossier-overlay" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); z-index: 999; animation: hero-fade-in 0.3s ease-out;">
      <div id="dossier-modal" class="dossier-modal">
        <button class="dossier-close" id="close-dossier-btn">&times;</button>
        <div class="dossier-content">
          <h2>FULL DOSSIER</h2>
          <p>${u.profile.summary}</p>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const t=document.getElementById("dossier-overlay"),n=document.getElementById("open-dossier-btn"),a=document.getElementById("close-dossier-btn");n&&t&&n.addEventListener("click",()=>t.style.display="block"),a&&t&&a.addEventListener("click",()=>t.style.display="none"),t&&t.addEventListener("click",o=>{o.target===t&&(t.style.display="none")})},0)}function O(){const i=document.getElementById("experience");if(!i)return;const e=u.experience.map((t,n)=>{const a=n%2===0,o=t.image?`<img src="${t.image}" alt="${t.organization}" class="z-exp-img" loading="lazy">`:'<div class="z-exp-no-image">NO IMAGE DATA</div>';return`
      <div class="z-exp-row ${a?"":"reverse"} reveal-pop" style="transition-delay: ${n*.1}s;">
        <div class="z-exp-image-wrapper">
          <div class="target-corner tl-tl"></div>
          <div class="target-corner tl-tr"></div>
          <div class="target-corner tl-bl"></div>
          <div class="target-corner tl-br"></div>
          ${o}
        </div>
        <div class="z-exp-content">
          <div class="z-exp-year">[ ${t.year} ]</div>
          <h3 class="z-exp-role">${t.role}</h3>
          <div class="z-exp-org">${t.organization} <span class="z-exp-loc">// ${t.location}</span></div>
          <p class="z-exp-desc">${t.description}</p>
        </div>
      </div>
    `}).join("");i.innerHTML=`
    <style>
      .z-exp-container {
        display: flex;
        flex-direction: column;
        gap: 60px;
        max-width: 1000px;
        margin: 40px auto;
        font-family: 'Space Grotesk', sans-serif;
      }
      .z-exp-row {
        display: flex;
        align-items: center;
        gap: 40px;
        background: rgba(5, 10, 20, 0.4);
        border: 1px solid rgba(0, 240, 255, 0.1);
        border-radius: 12px;
        padding: 30px;
        transition: all 0.3s ease;
      }
      .z-exp-row:hover {
        background: rgba(0, 240, 255, 0.05);
        border-color: rgba(0, 240, 255, 0.3);
        transform: scale(1.02);
      }
      .z-exp-row.reverse {
        flex-direction: row-reverse;
      }
      
      /* Image Wrapper */
      .z-exp-image-wrapper {
        flex: 1;
        position: relative;
        height: 250px;
        border: 1px solid rgba(176, 38, 255, 0.4);
        background: #000;
        border-radius: 8px;
        overflow: hidden;
      }
      .z-exp-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        filter: grayscale(50%) contrast(1.2);
        transition: all 0.5s;
      }
      .z-exp-row:hover .z-exp-img {
        filter: grayscale(0%) contrast(1);
        opacity: 1;
        transform: scale(1.05);
      }
      .z-exp-no-image {
        width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
        font-family: 'Press Start 2P', monospace; font-size: 0.8rem; color: rgba(255,255,255,0.3);
        background: repeating-linear-gradient(45deg, #050a1f, #050a1f 10px, #0a0f25 10px, #0a0f25 20px);
      }
      
      /* Target Lock Corners */
      .target-corner { position: absolute; width: 15px; height: 15px; border-color: var(--neon); border-style: solid; z-index: 3; transition: all 0.3s; }
      .tl-tl { top: 10px; left: 10px; border-width: 2px 0 0 2px; }
      .tl-tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; }
      .tl-bl { bottom: 10px; left: 10px; border-width: 0 0 2px 2px; }
      .tl-br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }
      .z-exp-row:hover .tl-tl { top: 5px; left: 5px; }
      .z-exp-row:hover .tl-tr { top: 5px; right: 5px; }
      .z-exp-row:hover .tl-bl { bottom: 5px; left: 5px; }
      .z-exp-row:hover .tl-br { bottom: 5px; right: 5px; }

      /* Content */
      .z-exp-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .z-exp-year {
        color: var(--magenta);
        font-family: 'Press Start 2P', monospace;
        font-size: 0.7rem;
        margin-bottom: 5px;
      }
      .z-exp-role {
        font-size: 1.8rem;
        color: #fff;
        line-height: 1.2;
        font-weight: 900;
        text-transform: uppercase;
      }
      .z-exp-org {
        font-size: 1.1rem;
        color: var(--neon);
        font-weight: bold;
      }
      .z-exp-loc {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.5);
      }
      .z-exp-desc {
        color: rgba(255,255,255,0.7);
        font-size: 0.95rem;
        line-height: 1.6;
        border-left: 2px solid rgba(176, 38, 255, 0.4);
        padding-left: 15px;
        margin-top: 5px;
      }
      
      @media (max-width: 768px) {
        .z-exp-row, .z-exp-row.reverse {
          flex-direction: column;
        }
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head reveal-pop">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">EXPERIENCE</h2>
        <span class="section-kicker">TRACK RECORD</span>
      </div>
      
      <div class="z-exp-container">
        ${e}
      </div>
    </div>
  `}function C(){const i=document.getElementById("projects");if(!i)return;const t=u.projects.map((n,a)=>`
      <div class="proj-item ${a===0?"active":""}" data-index="${a}">
        <span class="proj-name">> ${n.name}</span>
        <span class="proj-tech-mini">${n.tech.slice(0,2).join(", ")}</span>
      </div>
    `).join("");i.innerHTML=`
    <style>
      .proj-container {
        display: flex;
        gap: 30px;
        max-width: 1100px;
        margin: 40px auto;
        min-height: 500px;
        font-family: 'Space Grotesk', sans-serif;
      }
      
      .proj-list-panel {
        width: 35%;
        border-right: 1px solid rgba(0, 240, 255, 0.2);
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-right: 20px;
      }
      .proj-item {
        padding: 15px;
        background: rgba(10, 15, 30, 0.5);
        border: 1px solid rgba(0, 240, 255, 0.1);
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
      }
      .proj-item::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--neon); transform: scaleY(0); transition: transform 0.3s; transform-origin: top;
      }
      .proj-item:hover, .proj-item.active {
        background: rgba(0, 240, 255, 0.05);
        border-color: rgba(0, 240, 255, 0.4);
        transform: translateX(10px);
      }
      .proj-item:hover::before, .proj-item.active::before {
        transform: scaleY(1);
      }
      .proj-name { font-size: 1.2rem; color: #fff; font-weight: bold; }
      .proj-tech-mini { font-family: 'Press Start 2P', monospace; font-size: 0.6rem; color: var(--magenta); line-height: 1.4; }
      
      .proj-dossier-panel {
        width: 65%;
        background: rgba(5, 10, 20, 0.8);
        border: 1px solid var(--neon);
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.1) inset;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .proj-image-frame {
        width: 100%;
        height: 350px;
        border: 1px solid rgba(176, 38, 255, 0.4);
        position: relative;
        overflow: hidden;
        background: #000;
        border-radius: 4px;
      }
      .proj-image-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .proj-scanline {
        position: absolute;
        top: 0; left: 0; right: 0; height: 5px;
        background: rgba(0, 240, 255, 0.8);
        box-shadow: 0 0 10px rgba(0, 240, 255, 1);
        animation: scan-down 3s linear infinite;
        z-index: 2;
        opacity: 0.6;
        pointer-events: none;
      }
      @keyframes scan-down {
        0% { transform: translateY(-10px); }
        100% { transform: translateY(350px); }
      }
      
      .target-corner { position: absolute; width: 20px; height: 20px; border-color: var(--neon); border-style: solid; z-index: 3; pointer-events: none; }
      .tl-tl { top: 10px; left: 10px; border-width: 2px 0 0 2px; }
      .tl-tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; }
      .tl-bl { bottom: 10px; left: 10px; border-width: 0 0 2px 2px; }
      .tl-br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }
      
      .proj-details { display: flex; flex-direction: column; gap: 10px; }
      .proj-title-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
      .proj-org { font-size: 1.5rem; color: var(--neon); font-weight: 900; text-transform: uppercase; letter-spacing: 1px; }
      .proj-link-btn { background: transparent; border: 1px solid var(--neon); color: var(--neon); padding: 5px 15px; border-radius: 20px; text-decoration: none; font-size: 0.8rem; transition: all 0.3s; }
      .proj-link-btn:hover { background: rgba(0, 240, 255, 0.1); box-shadow: 0 0 10px rgba(0, 240, 255, 0.3); color: #fff; }
      .proj-tech-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 5px; }
      .proj-tech-tags span { font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; color: #fff; background: rgba(176, 38, 255, 0.3); padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(176, 38, 255, 0.5); }
      .proj-desc { font-size: 0.95rem; color: rgba(255,255,255,0.8); line-height: 1.6; border-left: 2px solid rgba(255,255,255,0.2); padding-left: 15px; }
      
      .proj-no-image {
        width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
        font-family: 'Press Start 2P', monospace; font-size: 0.8rem; color: rgba(255,255,255,0.3);
        background: repeating-linear-gradient(45deg, #050a1f, #050a1f 10px, #0a0f25 10px, #0a0f25 20px);
      }
      
      @media (max-width: 768px) {
        .proj-container { flex-direction: column; }
        .proj-list-panel, .proj-dossier-panel { width: 100%; border-right: none; padding-right: 0; }
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head reveal-pop">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">PROJECTS</h2>
        <span class="section-kicker">PORTFOLIO</span>
      </div>
      
      <div class="proj-container reveal-pop">
        <div class="proj-list-panel">
          ${t}
        </div>
        
        <div class="proj-dossier-panel" id="proj-dossier-view">
          <!-- Rendered via JS -->
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const n=document.querySelectorAll(".proj-item"),a=document.getElementById("proj-dossier-view");if(!n.length||!a)return;let o=-1;const d=l=>{if(o===l)return;o=l;const s=u.projects[l];n.forEach(r=>r.classList.remove("active")),n[l].classList.add("active");const p=s.image?'<img src="'+s.image+'" alt="'+s.name+'" loading="lazy">':'<div class="proj-no-image">NO IMAGE DATA</div>',c=s.tech.map(r=>"<span>"+r+"</span>").join("");a.innerHTML=`
        <div class="proj-image-frame">
          <div class="proj-scanline"></div>
          <div class="target-corner tl-tl"></div>
          <div class="target-corner tl-tr"></div>
          <div class="target-corner tl-bl"></div>
          <div class="target-corner tl-br"></div>
          ${p}
        </div>
        <div class="proj-details">
          <div class="proj-title-row">
            <div class="proj-org">${s.name}</div>
            <a href="${s.link}" target="_blank" class="proj-link-btn">SOURCE CODE</a>
          </div>
          <div class="proj-tech-tags">${c}</div>
          <div class="proj-desc">${s.description}</div>
        </div>
      `,a.style.animation="none",a.offsetHeight,a.style.animation="hero-fade-in 0.3s ease-out backwards"};d(0),n.forEach((l,s)=>{l.addEventListener("mouseenter",()=>d(s))})},0)}function E(){const i=document.getElementById("certifications");if(!i)return;const e=u.certifications.map((t,n)=>`
      <div class="cert-orb-container reveal-pop" style="transition-delay: ${n*.1}s;">
        <!-- The Glowing Orb -->
        <div class="cert-orb">
          <div class="orb-core"></div>
          <div class="orb-radiation wave-1"></div>
          <div class="orb-radiation wave-2"></div>
          <div class="orb-title-wrapper">
            <span class="orb-title">${t.title}</span>
            <span class="orb-issuer">${t.issuer}</span>
          </div>
        </div>
        
        <!-- The Expanded Card (Hidden by default, shown on hover) -->
        <div class="cert-expanded-card">
          <div class="cert-exp-img">
            ${t.image?`<img src="${t.image}" alt="${t.title}" loading="lazy">`:'<div class="cert-no-img">NO IMAGE DATA</div>'}
          </div>
          <div class="cert-exp-info">
            <h4>${t.title}</h4>
            <div class="cert-exp-issuer">${t.issuer} <span style="color:rgba(255,255,255,0.3)">// ${t.date}</span></div>
            <p>${t.description}</p>
          </div>
        </div>
      </div>
    `).join("");i.innerHTML=`
    <style>
      .scifi-certs-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 80px;
        margin: 60px auto;
        max-width: 1200px;
        padding-bottom: 50px;
      }
      
      .cert-orb-container {
        position: relative;
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      
      /* Orb Base */
      .cert-orb {
        position: relative;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 2;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .orb-core {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(176,38,255,0.7) 0%, rgba(5,217,232,0.3) 70%, transparent 100%);
        box-shadow: 0 0 30px rgba(176,38,255,0.6), inset 0 0 20px rgba(5,217,232,0.8);
        z-index: -1;
        transition: all 0.3s;
      }
      .cert-orb-container:hover .orb-core {
        box-shadow: 0 0 50px rgba(176,38,255,1), inset 0 0 30px rgba(5,217,232,1);
      }
      
      /* Radiation Waves */
      .orb-radiation {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid rgba(5, 217, 232, 0.5);
        z-index: -2;
        pointer-events: none;
      }
      .wave-1 {
        width: 100%; height: 100%;
        animation: radiate 2.5s infinite ease-out;
      }
      .wave-2 {
        width: 100%; height: 100%;
        animation: radiate 2.5s infinite ease-out 1.25s;
      }
      
      @keyframes radiate {
        0% { width: 100%; height: 100%; opacity: 0.8; border-color: rgba(5,217,232,0.8); }
        100% { width: 220%; height: 220%; opacity: 0; border-color: rgba(176,38,255,0.1); }
      }
      
      .orb-title-wrapper {
        padding: 0 15px;
        z-index: 3;
      }
      .orb-title {
        display: block;
        color: #fff;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.9rem;
        font-weight: 900;
        text-shadow: 0 0 10px #000;
        line-height: 1.2;
      }
      .orb-issuer {
        display: block;
        color: var(--neon);
        font-size: 0.65rem;
        margin-top: 5px;
        text-shadow: 0 0 10px #000;
        font-family: 'Press Start 2P', monospace;
        letter-spacing: -0.5px;
      }
      
      /* Expanded Card (Holographic Transform) */
      .cert-expanded-card {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 340px;
        background: rgba(10, 15, 30, 0.95);
        backdrop-filter: blur(15px);
        border: 1px solid var(--neon);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 0 40px rgba(5, 217, 232, 0.4), inset 0 0 20px rgba(176, 38, 255, 0.2);
        opacity: 0;
        z-index: 10;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .cert-orb-container:hover .cert-expanded-card {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        pointer-events: auto;
      }
      .cert-orb-container:hover .cert-orb {
        transform: scale(0);
        opacity: 0;
      }
      
      .cert-exp-img {
        width: 100%;
        height: 200px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background: #000;
      }
      .cert-exp-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .cert-no-img {
        width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
        font-family: 'Press Start 2P', monospace; font-size: 0.8rem; color: rgba(255,255,255,0.3);
      }
      
      .cert-exp-info h4 {
        color: #fff;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.15rem;
        margin-bottom: 5px;
      }
      .cert-exp-issuer {
        color: var(--magenta);
        font-size: 0.75rem;
        font-family: 'Press Start 2P', monospace;
        margin-bottom: 10px;
        letter-spacing: -0.5px;
      }
      .cert-exp-info p {
        color: rgba(255,255,255,0.7);
        font-size: 0.85rem;
        line-height: 1.5;
        border-left: 2px solid var(--neon);
        padding-left: 10px;
      }
      
      @media (max-width: 768px) {
        .cert-expanded-card {
          width: 300px;
        }
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head reveal-pop">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">CERTIFICATIONS</h2>
        <span class="section-kicker">ACHIEVEMENTS</span>
      </div>
      
      <div class="scifi-certs-wrapper">
        ${e}
      </div>
    </div>
  `}function I(){const i=document.getElementById("skills");if(!i)return;const e=Object.entries(u.skills).map(([t,n],a)=>`
    <div class="scifi-skill-cat reveal-${a%2===0?"left":"right"}">
      <h3>${t}</h3>
      <div class="skill-tags">
        ${n.map(o=>`<span>${o}</span>`).join("")}
      </div>
    </div>
  `).join("");i.innerHTML=`
    <style>
      .scifi-skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      }
      .scifi-skill-cat {
        background: rgba(5, 10, 20, 0.8);
        border: 1px solid rgba(0, 240, 255, 0.2);
        padding: 25px;
        border-radius: 12px;
      }
      .scifi-skill-cat h3 {
        color: var(--neon);
        font-family: 'Space Grotesk', sans-serif;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(0,240,255,0.2);
        padding-bottom: 10px;
      }
      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .skill-tags span {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        color: #fff;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 0.85rem;
        transition: all 0.2s;
      }
      .skill-tags span:hover {
        background: var(--neon);
        color: #000;
        border-color: var(--neon);
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head reveal-pop">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">SKILLS</h2>
        <span class="section-kicker">CAPABILITIES</span>
      </div>
      
      <div class="scifi-skills-grid">
        ${e}
      </div>
    </div>
  `}function P(){const i=document.getElementById("contact");i&&(i.innerHTML=`
    <style>
      .contact-wrapper {
        display: flex;
        gap: 50px;
        max-width: 1200px;
        margin: 40px auto;
        font-family: 'Space Grotesk', sans-serif;
      }
      
      /* --- Terminal Mailbox --- */
      .terminal-mailbox {
        flex: 1;
        background: rgba(5, 10, 20, 0.9);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 30px rgba(0, 240, 255, 0.1);
        display: flex;
        flex-direction: column;
      }
      .term-header {
        background: rgba(0, 240, 255, 0.1);
        border-bottom: 1px solid rgba(0, 240, 255, 0.3);
        padding: 10px 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .term-dots { display: flex; gap: 6px; }
      .term-dots span { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); }
      .term-dots span:nth-child(1) { background: #ff5f56; }
      .term-dots span:nth-child(2) { background: #ffbd2e; }
      .term-dots span:nth-child(3) { background: #27c93f; }
      .term-title {
        color: var(--neon);
        font-family: 'Press Start 2P', monospace;
        font-size: 0.6rem;
        margin-left: 10px;
      }
      
      .term-body {
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .term-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .term-group label {
        color: var(--magenta);
        font-family: 'Press Start 2P', monospace;
        font-size: 0.65rem;
      }
      .term-group input, .term-group textarea {
        background: transparent;
        border: none;
        border-bottom: 1px dashed rgba(0, 240, 255, 0.4);
        color: #fff;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1rem;
        padding: 5px 0;
        outline: none;
        transition: border-color 0.3s;
      }
      .term-group textarea {
        resize: vertical;
        min-height: 80px;
      }
      .term-group input:focus, .term-group textarea:focus {
        border-bottom-color: var(--neon);
        border-bottom-style: solid;
      }
      
      .term-submit {
        align-self: flex-start;
        background: transparent;
        border: 1px solid var(--neon);
        color: var(--neon);
        padding: 10px 20px;
        font-family: 'Press Start 2P', monospace;
        font-size: 0.7rem;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 10px;
      }
      .term-submit:hover {
        background: var(--neon);
        color: #000;
        box-shadow: 0 0 15px var(--neon);
      }
      
      /* --- Cyber Nodes List --- */
      .nodes-panel {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-height: 400px;
      }
      .nodes-container {
        position: relative;
        width: 300px;
        height: 300px;
      }
      
      .tethers-svg {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      .tether {
        transition: stroke 0.3s, stroke-width 0.3s;
      }
      
      .node-display {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(10, 15, 30, 0.95);
        border: 1px solid rgba(176, 38, 255, 0.5);
        padding: 15px;
        border-radius: 8px;
        z-index: 10;
        text-align: center;
        min-width: 180px;
        box-shadow: 0 0 20px rgba(176, 38, 255, 0.2);
        transition: all 0.3s;
      }
      .nd-label {
        display: block;
        color: var(--magenta);
        font-family: 'Press Start 2P', monospace;
        font-size: 0.55rem;
        margin-bottom: 8px;
      }
      .nd-value {
        display: block;
        color: #fff;
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 1px;
      }
      
      .cyber-node {
        position: absolute;
        width: 50px; height: 50px;
        background: #000;
        border: 2px solid rgba(176, 38, 255, 0.5);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        text-decoration: none;
        z-index: 5;
        transition: border-color 0.3s, box-shadow 0.3s;
        color: #fff;
        font-size: 1.2rem;
        box-shadow: 0 0 10px rgba(176, 38, 255, 0.2) inset;
      }
      .cyber-node.active-node {
        border-color: var(--neon);
        box-shadow: 0 0 20px var(--neon), inset 0 0 10px var(--neon);
      }
      
      /* Floating keyframes for nodes */
      @keyframes float1 { 
        0%, 100% { transform: translate(0, 0); } 
        50% { transform: translate(20px, -20px); } 
      }
      @keyframes float2 { 
        0%, 100% { transform: translate(0, 0); } 
        50% { transform: translate(-20px, 20px); } 
      }
      @keyframes float3 { 
        0%, 100% { transform: translate(0, 0); } 
        50% { transform: translate(-20px, -20px); } 
      }
      @keyframes float4 { 
        0%, 100% { transform: translate(0, 0); } 
        50% { transform: translate(20px, 20px); } 
      }
      
      /* Manual placement of the 4 nodes */
      .node-1 { top: -20px; left: 50%; margin-left: -25px; animation: float1 4s infinite ease-in-out; } /* Github */
      .node-2 { bottom: -20px; left: 50%; margin-left: -25px; animation: float2 5s infinite ease-in-out; } /* Linkedin */
      .node-3 { left: -20px; top: 50%; margin-top: -25px; animation: float3 4.5s infinite ease-in-out; } /* Instagram */
      .node-4 { right: -20px; top: 50%; margin-top: -25px; animation: float4 5.5s infinite ease-in-out; } /* Phone */
      
      @media (max-width: 768px) {
        .contact-wrapper { flex-direction: column; }
        .nodes-panel { margin-top: 40px; }
      }
    </style>
    
    <div class="section-inner reveal-pop">
      <div class="section-head">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">INITIATE CONNECTION</h2>
        <span class="section-kicker">CONTACT PROTOCOL</span>
      </div>
      
      <div class="contact-wrapper">
        
        <!-- Mailbox -->
        <div class="terminal-mailbox">
          <div class="term-header">
            <div class="term-dots"><span></span><span></span><span></span></div>
            <div class="term-title">root@yasin_ta:~/secure_drop#</div>
          </div>
          <form class="term-body" onsubmit="event.preventDefault(); alert('Transmission sequence initiated. (Demo Only)');">
            <div class="term-group">
              <label>> Name</label>
              <input type="text" placeholder="Enter your name..." required>
            </div>
            <div class="term-group">
              <label>> Email</label>
              <input type="email" placeholder="Enter your email..." required>
            </div>
            <div class="term-group">
              <label>> Message</label>
              <textarea placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" class="term-submit">Send Message</button>
          </form>
        </div>
        
        <!-- Cyber Nodes List -->
        <div class="nodes-panel">
          <div class="nodes-container" id="nodes-container">
            <!-- Tethers -->
            <svg class="tethers-svg">
              <path id="tether-1" class="tether" stroke="rgba(176, 38, 255, 0.4)" stroke-width="2" fill="none" d="" />
              <path id="tether-2" class="tether" stroke="rgba(176, 38, 255, 0.4)" stroke-width="2" fill="none" d="" />
              <path id="tether-3" class="tether" stroke="rgba(176, 38, 255, 0.4)" stroke-width="2" fill="none" d="" />
              <path id="tether-4" class="tether" stroke="rgba(176, 38, 255, 0.4)" stroke-width="2" fill="none" d="" />
            </svg>
            
            <!-- Central Display -->
            <div class="node-display" id="node-disp">
              <span class="nd-label" id="nd-lbl">SYSTEM STATUS</span>
              <span class="nd-value" id="nd-val">AWAITING PING...</span>
            </div>
            
            <!-- Nodes -->
            <a href="${u.profile.github}" target="_blank" class="cyber-node node-1" data-id="1" data-lbl="GITHUB_REPO" data-val="github.com/Hyphen-14">
              <span class="node-icon">🐙</span>
            </a>
            <a href="${u.profile.linkedin}" target="_blank" class="cyber-node node-2" data-id="2" data-lbl="LINKEDIN_PROFILE" data-val="yasin-taryaqil-aghyar">
              <span class="node-icon">💼</span>
            </a>
            <a href="https://instagram.com/yasintaryaqil" target="_blank" class="cyber-node node-3" data-id="3" data-lbl="INSTAGRAM_HANDLE" data-val="@yasintaryaqil">
              <span class="node-icon">📸</span>
            </a>
            <a href="tel:+628561710800" class="cyber-node node-4" data-id="4" data-lbl="SECURE_COMMS" data-val="+62 856 1710 800">
              <span class="node-icon">📱</span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  `,setTimeout(()=>{const e=document.querySelectorAll(".cyber-node"),t=document.getElementById("node-disp"),n=document.getElementById("nd-lbl"),a=document.getElementById("nd-val"),o=document.getElementById("nodes-container");function d(){if(!o)return;const l=o.getBoundingClientRect(),s=l.width/2,p=l.height/2;e.forEach(c=>{const r=c.getAttribute("data-id"),m=document.getElementById("tether-"+r);if(!m)return;const g=c.getBoundingClientRect(),y=g.left-l.left+g.width/2,v=g.top-l.top+g.height/2,h=Math.sin(Date.now()/300+r*2)*20,T=(s+y)/2+h,S=(p+v)/2-h;m.setAttribute("d",`M ${s} ${p} Q ${T} ${S} ${y} ${v}`)}),requestAnimationFrame(d)}d(),e.forEach(l=>{l.addEventListener("mouseenter",()=>{const s=l.getAttribute("data-id"),p=l.getAttribute("data-lbl"),c=l.getAttribute("data-val");n.innerText="> "+p,a.innerText=c,t.style.borderColor="var(--neon)",t.style.boxShadow="0 0 30px rgba(0, 240, 255, 0.4)",l.classList.add("active-node");const r=document.getElementById("tether-"+s);r&&(r.style.stroke="var(--neon)",r.style.strokeWidth="4")}),l.addEventListener("mouseleave",()=>{const s=l.getAttribute("data-id");n.innerText="SYSTEM STATUS",a.innerText="AWAITING PING...",t.style.borderColor="rgba(176, 38, 255, 0.5)",t.style.boxShadow="0 0 20px rgba(176, 38, 255, 0.2)",l.classList.remove("active-node");const p=document.getElementById("tether-"+s);p&&(p.style.stroke="rgba(176, 38, 255, 0.4)",p.style.strokeWidth="2")})})},0))}let x=!0,f=null;function j(){const i=document.getElementById("audio-toggle");i&&(i.textContent="🔊",i.addEventListener("click",()=>{x=!x,i.textContent=x?"🔊":"🔇",x&&!f&&(f=new(window.AudioContext||window.webkitAudioContext)),x&&b("start")}),document.querySelectorAll("a, button, .tab-btn").forEach(e=>{e.addEventListener("mouseenter",()=>b("hover"))}))}function b(i){if(!x)return;f||(f=new(window.AudioContext||window.webkitAudioContext)),f.state==="suspended"&&f.resume();const e=f.createOscillator(),t=f.createGain();e.connect(t),t.connect(f.destination);const n=f.currentTime;i==="hover"?(e.type="square",e.frequency.setValueAtTime(400,n),e.frequency.exponentialRampToValueAtTime(600,n+.05),t.gain.setValueAtTime(.05,n),t.gain.exponentialRampToValueAtTime(.01,n+.05),e.start(n),e.stop(n+.05)):i==="blip"?(e.type="square",e.frequency.setValueAtTime(800,n),t.gain.setValueAtTime(.02,n),t.gain.exponentialRampToValueAtTime(.01,n+.02),e.start(n),e.stop(n+.02)):i==="decrypt"?(e.type="sawtooth",e.frequency.setValueAtTime(800,n),e.frequency.linearRampToValueAtTime(2e3,n+.1),e.frequency.linearRampToValueAtTime(800,n+.2),t.gain.setValueAtTime(.02,n),t.gain.exponentialRampToValueAtTime(.01,n+.2),e.start(n),e.stop(n+.2)):i==="start"?(e.type="square",e.frequency.setValueAtTime(300,n),e.frequency.setValueAtTime(400,n+.1),e.frequency.setValueAtTime(600,n+.2),t.gain.setValueAtTime(.1,n),t.gain.linearRampToValueAtTime(0,n+.4),e.start(n),e.stop(n+.4)):i==="achievement"&&(e.type="square",e.frequency.setValueAtTime(440,n),e.frequency.setValueAtTime(554.37,n+.1),e.frequency.setValueAtTime(659.25,n+.2),e.frequency.setValueAtTime(880,n+.3),t.gain.setValueAtTime(.1,n),t.gain.linearRampToValueAtTime(0,n+.6),e.start(n),e.stop(n+.6))}let w=!1;function L(){A(),B(),j();const i=document.getElementById("title-screen"),e=document.getElementById("app-content");if(w)return;w=!0;const t=$(),n=i.querySelector("h1"),a=i.querySelector(".press-start"),o=i.querySelector(".cyber-lock"),d=document.getElementById("shackle");a.style.animation="none",a.textContent="[ DECRYPTING... ]",a.style.color="var(--gold)",o.style.animationDuration="1s";const l="UNLOCK PROFILE",s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";let p=setInterval(()=>{n.textContent=l.split("").map(r=>r===" "?" ":s[Math.floor(Math.random()*s.length)]).join("")},50);setTimeout(()=>{clearInterval(p),n.textContent="ACCESS GRANTED",n.style.color="#41f28b",a.textContent="[ SYSTEM UNLOCKED ]",a.style.color="#41f28b",d&&(d.style.transform="translateY(-15px)"),b("start"),setTimeout(()=>{i.classList.add("hidden"),setTimeout(()=>{t(),i.style.display="none",e.style.display="block",R()},500)},400)},1e3),document.getElementById("crt-toggle").addEventListener("click",()=>{document.body.classList.toggle("crt"),b("blip")})}function R(){const i=document.querySelectorAll(".section"),e=new Set,t=new IntersectionObserver(a=>{a.forEach(o=>{if(o.isIntersecting){const d=o.target.id;!e.has(d)&&d!=="about"&&d!==""&&(e.add(d),q(`Explored: ${d.toUpperCase()}`)),o.target.querySelectorAll(".typed:not(.typing-done)").forEach(s=>{const p=s.getAttribute("data-text")||s.textContent;s.setAttribute("data-text",p),s.textContent="",s.classList.add("typing-done"),k(s,p,0)})}})},{threshold:.3});i.forEach(a=>t.observe(a));const n=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal-pop, .reveal-left, .reveal-right").forEach(a=>n.observe(a))}function k(i,e,t){t<e.length&&(i.textContent+=e.charAt(t),t%3===0&&b("blip"),setTimeout(()=>k(i,e,t+1),20))}function q(i){const e=document.getElementById("achievement-popup"),t=document.getElementById("achievement-text");t.textContent=i,e.classList.add("show"),b("achievement"),setTimeout(()=>{e.classList.remove("show")},4e3)}document.addEventListener("DOMContentLoaded",L);function B(){const i=document.createElement("style");i.innerHTML=`
    * { cursor: none !important; }
    .custom-cursor {
      position: fixed; top: 0; left: 0; pointer-events: none; z-index: 99999;
      transform: translate(0, 0); /* The tails will handle center offset via transform in CSS or JS */
    }
    .cursor-head {
      width: 12px; height: 12px;
      background: var(--neon, #00f0ff);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--neon, #00f0ff), 0 0 20px var(--neon, #00f0ff);
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .cursor-head::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid var(--magenta, #b026ff);
      border-radius: 50%;
      animation: cursorPulse 1.5s infinite ease-out;
    }
    @keyframes cursorPulse {
      0% {
        width: 12px; height: 12px;
        opacity: 1;
        border-width: 3px;
      }
      100% {
        width: 45px; height: 45px;
        opacity: 0;
        border-width: 1px;
      }
    }
    .cursor-tail {
      background: rgba(0, 240, 255, 0.6);
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
    }
  `,document.head.appendChild(i);const e=document.createElement("div");e.className="custom-cursor",document.body.appendChild(e);const t=document.createElement("div");t.className="cursor-head",e.appendChild(t);const n=[],a=8;for(let c=0;c<a;c++){const r=document.createElement("div");r.className="cursor-tail",r.style.opacity=1-c/a;const m=10-c;r.style.width=m+"px",r.style.height=m+"px",e.appendChild(r),n.push({el:r,x:window.innerWidth/2,y:window.innerHeight/2})}let o=window.innerWidth/2,d=window.innerHeight/2,l=o,s=d;document.addEventListener("mousemove",c=>{o=c.clientX,d=c.clientY});function p(){l+=(o-l)*.4,s+=(d-s)*.4,t.style.left=l+"px",t.style.top=s+"px";let c=l,r=s;for(let m=0;m<n.length;m++){const g=n[m];g.x+=(c-g.x)*.4,g.y+=(r-g.y)*.4,g.el.style.left=g.x+"px",g.el.style.top=g.y+"px",c=g.x,r=g.y}requestAnimationFrame(p)}p()}function $(){const i=document.getElementById("warp-canvas");if(!i)return()=>{};const e=i.getContext("2d");function t(){i.width=window.innerWidth,i.height=window.innerHeight}window.addEventListener("resize",t),t();const n=[],a=400;let o=1,d=!0;for(let s=0;s<a;s++)n.push({x:(Math.random()-.5)*i.width*2,y:(Math.random()-.5)*i.height*2,z:Math.random()*i.width,pz:0});function l(){if(!d)return;e.fillStyle="rgba(5, 10, 31, 0.4)",e.fillRect(0,0,i.width,i.height);const s=i.width/2,p=i.height/2;o+=.3,o>25&&(o=25);for(let c=0;c<a;c++){const r=n[c];r.pz=r.z,r.z-=o,r.z<=0&&(r.z=i.width,r.pz=i.width,r.x=(Math.random()-.5)*i.width*2,r.y=(Math.random()-.5)*i.height*2);const m=r.x/r.z*i.width+s,g=r.y/r.z*i.height+p,y=r.x/r.pz*i.width+s,v=r.y/r.pz*i.height+p,h=1-r.z/i.width;e.beginPath(),e.moveTo(y,v),e.lineTo(m,g),e.strokeStyle=c%3===0?`rgba(176, 38, 255, ${h})`:`rgba(0, 240, 255, ${h})`,e.lineWidth=1+(1-r.z/i.width)*4,e.stroke()}requestAnimationFrame(l)}return l(),()=>{d=!1,window.removeEventListener("resize",t)}}
