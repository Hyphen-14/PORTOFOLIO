import { portfolioData } from '../data.js';

export function renderSections() {
  renderAbout();
  renderExperience();
  renderProjects();
  renderCertifications();
  renderSkills();
  renderContact();
  initTabs();
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetId = e.target.getAttribute('data-target');
      
      // Remove active from all tabs in this container
      const container = e.target.closest('.status-screen');
      container.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.status-panel').forEach(p => p.classList.remove('active'));
      
      // Add active to clicked
      e.target.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

function renderAbout() {
  const container = document.getElementById('about');
  if (!container) return;

  const topSkills = portfolioData.skills["Cyber Security"].slice(0, 3).concat(
    portfolioData.skills["Software Development"].slice(0, 3)
  );

  container.innerHTML = `
    <style>
      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        align-items: stretch;
      }
      .hero-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(5, 10, 31, 0.75);
        backdrop-filter: blur(8px);
        padding: 30px;
        padding: 40px;
        border-radius: 12px;
        border: 1px solid rgba(5, 217, 232, 0.2);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
      .hero-term {
        font-family: var(--font-pixel);
        color: var(--neon);
        font-size: 0.8rem;
        margin-bottom: 15px;
      }
      .hero-term-cursor {
        display: inline-block;
        width: 8px;
        height: 12px;
        background: var(--neon);
        animation: blink 1s infinite;
        vertical-align: middle;
      }
      .hero-name {
        font-size: clamp(2rem, 4vw, 3.2rem);
        color: #fff;
        line-height: 1.1;
        margin-bottom: 20px;
        text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
      }
      .hero-desc {
        font-size: 0.95rem;
        line-height: 1.7;
        color: rgba(255,255,255,0.8);
        margin-bottom: 30px;
        max-width: 90%;
      }
      .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
      }
      .hero-tag {
        border: 1px solid rgba(255,255,255,0.1);
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 0.8rem;
        background: rgba(0,0,0,0.3);
      }
      .hero-actions {
        display: flex;
        gap: 15px;
        margin-bottom: 40px;
      }
      .btn-primary {
        background: var(--neon);
        color: #000;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-family: var(--font-pixel);
        font-size: 0.7rem;
        transition: transform 0.2s;
      }
      .btn-secondary {
        border: 1px solid var(--neon);
        color: var(--neon);
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-family: var(--font-pixel);
        font-size: 0.7rem;
        background: rgba(5,217,232,0.1);
      }
      .btn-primary:hover, .btn-secondary:hover {
        transform: translateY(-2px);
      }
      .term-box {
        background: #0d1117;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        padding: 20px;
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        color: rgba(255,255,255,0.8);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
      .term-header {
        display: flex;
        gap: 6px;
        margin-bottom: 15px;
      }
      .term-dot { width: 10px; height: 10px; border-radius: 50%; }
      .term-dot.red { background: #ff5f56; }
      .term-dot.yellow { background: #ffbd2e; }
      .term-dot.green { background: #27c93f; }
      .term-row { display: grid; grid-template-columns: 100px 1fr; margin-bottom: 8px; }
      .term-label { color: var(--cyan); }
      
      .hero-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        gap: 20px;
      }
      .hero-img-card {
        width: 100%;
        height: 100%;
        min-height: 400px;
        max-height: 520px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(5,217,232,0.3);
        box-shadow: 0 0 30px rgba(5,217,232,0.1);
        position: relative;
        background: #1a1c2c;
      }
      .hero-img-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
      }
      .hero-img-footer {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        background: rgba(13,17,23,0.85);
        backdrop-filter: blur(5px);
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        font-family: var(--font-pixel);
        font-size: 0.55rem;
        color: rgba(255,255,255,0.6);
        border-top: 1px solid rgba(255,255,255,0.1);
      }
      .term-box {
        background: #0d1117;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        padding: 20px;
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        color: rgba(255,255,255,0.8);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        width: 100%;
      }
      .term-header {
        display: flex;
        gap: 6px;
        margin-bottom: 15px;
      }
      .term-dot { width: 10px; height: 10px; border-radius: 50%; }
      .term-dot.red { background: #ff5f56; }
      .term-dot.yellow { background: #ffbd2e; }
      .term-dot.green { background: #27c93f; }
      .term-row { display: grid; grid-template-columns: 100px 1fr; margin-bottom: 8px; }
      .term-label { color: var(--cyan); }
      
      @media (max-width: 900px) {
        .hero-grid { grid-template-columns: 1fr; }
        .hero-img-card { min-height: 350px; max-height: 450px; }
      }
    </style>
    
    <div class="section-inner" style="padding-top: 40px;">
      <div class="hero-grid">
        <!-- Left Side -->
        <div class="hero-left">
          <div class="hero-term">$ whoami <span class="hero-term-cursor"></span></div>
          <h1 class="hero-name">${portfolioData.profile.name}</h1>
          
          <p class="hero-desc">
            Computer Science student at Binus University specializing in cyber security and software development. 
            I build robust applications and break them on purpose — assessing vulnerabilities and web exploitation — 
            bridging the gap between secure coding and penetration testing.
          </p>
          
          <div class="hero-tags">
            ${topSkills.filter(s => s !== 'C++').map(s => `<span class="hero-tag">${s === 'C' ? 'Python' : s}</span>`).join('')}
          </div>
          
          <div class="hero-actions">
            <a href="#projects" class="btn-primary">view projects &darr;</a>
            <a href="${portfolioData.profile.github}" target="_blank" class="btn-secondary">github &nearr;</a>
          </div>
        </div>
        
        <!-- Right Side -->
        <div class="hero-right">
          <div class="hero-img-card">
            <img src="/assets/portraits/profile-real.jpg" alt="${portfolioData.profile.name}" />
            <div class="hero-img-footer">
              <div><span style="color: #ff5f56;">&bull;</span> subject: yasin.taryaqil</div>
              <div>JKT &middot; UTC+7</div>
            </div>
          </div>
          
          <div class="term-box">
            <div class="term-header">
              <div class="term-dot red"></div>
              <div class="term-dot yellow"></div>
              <div class="term-dot green"></div>
              <div style="margin-left:10px; font-size:0.7rem; color:#666;">~/profile.cfg</div>
            </div>
            <div style="margin-bottom: 10px; color: var(--gold);">$ cat profile.cfg</div>
            <div class="term-row"><div class="term-label">role</div><div>penetration testing &middot; developer</div></div>
            <div class="term-row"><div class="term-label">education</div><div>Binus University (CS)</div></div>
            <div class="term-row"><div class="term-label">toolkit</div><div>Burp Suite &middot; Kali Linux &middot; Nmap</div></div>
            <div class="term-row"><div class="term-label">based</div><div>${portfolioData.profile.location}</div></div>
            <div style="margin-top:15px; color:#41f28b;">[ok] profile loaded <span class="hero-term-cursor"></span></div>
            <div style="color:rgba(255,255,255,0.4);">[ok] session established - 127.0.0.1</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderExperience() {
  const container = document.getElementById('experience');
  if (!container) return;

  const expHtml = portfolioData.experience.map((exp, index) => {
    // isOdd (index 0, 2): Image Left, Text Right
    // isEven (index 1): Text Left, Image Right
    const isOdd = index % 2 === 0; 
    
    const imageBlock = `
      <div class="timeline-img-block">
        <div class="card-img-placeholder rpg-window">
          ${exp.image ? `<img src="${exp.image}" alt="${exp.organization}" loading="lazy">` : `<div style="font-family: var(--font-pixel); font-size: 0.6rem; color: #555;">[ IMAGE<br>PLACEHOLDER ]</div>`}
        </div>
      </div>
    `;
    
    const textBlock = `
      <div class="timeline-text-block rpg-window">
        <h3 class="quest-role" style="color: var(--neon); text-shadow: 0 0 5px rgba(5,217,232,0.4); font-size: 1.2rem; margin-bottom: 5px;">${exp.role}</h3>
        <div class="quest-guild" style="font-weight: bold; margin-bottom: 5px;">${exp.organization} &middot; ${exp.location}</div>
        <div class="quest-period" style="color: var(--gold); font-family: var(--font-pixel); font-size: 0.7rem; margin-bottom: 15px;">[ ${exp.year} ]</div>
        <p style="font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.8);">${exp.description}</p>
      </div>
    `;

    return `
      <div class="timeline-row">
        <div class="timeline-half left-half">
          ${isOdd ? imageBlock : textBlock}
        </div>
        <div class="timeline-half right-half">
          ${isOdd ? textBlock : imageBlock}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <style>
      .split-timeline {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 40px 0;
        max-width: 1000px;
        margin: 0 auto;
      }
      
      /* Straight Fibrous Energy Beam */
      .split-timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 6px;
        background: linear-gradient(90deg, #05d9e8 1px, transparent 1px, transparent 2px, #b900ff 3px, transparent 3px, transparent 5px, #05d9e8 6px);
        transform: translateX(-50%);
        box-shadow: 0 0 10px #05d9e8, 0 0 20px #b900ff;
        z-index: 0;
        opacity: 0.9;
      }
      
      .timeline-row {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 1;
      }
      
      /* Energy Core Node with Purple Radiation */
      .timeline-row::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 22px;
        height: 22px;
        background: radial-gradient(circle, #fff 0%, #05d9e8 40%, #b900ff 80%, #0a0a0a 100%);
        border: 2px solid #b900ff;
        border-radius: 50%;
        z-index: 2;
        animation: energy-radiate 2s ease-out infinite;
      }

      @keyframes energy-radiate {
        0% {
          box-shadow: 0 0 10px #05d9e8, 0 0 0 0 rgba(185, 0, 255, 0.8);
        }
        70% {
          box-shadow: 0 0 20px #05d9e8, 0 0 0 25px rgba(185, 0, 255, 0);
        }
        100% {
          box-shadow: 0 0 10px #05d9e8, 0 0 0 0 rgba(185, 0, 255, 0);
        }
      }

      .timeline-half {
        flex: 1;
        display: flex;
      }
      .left-half {
        justify-content: flex-end;
        padding-right: 40px;
      }
      .right-half {
        justify-content: flex-start;
        padding-left: 40px;
      }

      .timeline-img-block, .timeline-text-block {
        width: 100%;
        max-width: 420px;
        transition: transform 0.3s, box-shadow 0.3s;
      }
      
      .timeline-text-block {
        background: rgba(13, 17, 23, 0.85);
        backdrop-filter: blur(5px);
        padding: 25px;
        border: 1px solid rgba(5, 217, 232, 0.3);
        box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
      }
      
      .card-img-placeholder {
        width: 100%;
        height: 220px;
        background: repeating-linear-gradient(45deg, #111, #111 10px, #1a1c2c 10px, #1a1c2c 20px);
        border: 2px solid rgba(5,217,232,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
      }
      .card-img-placeholder img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 1;
      }

      .timeline-text-block:hover, .card-img-placeholder:hover {
        transform: translateY(-5px);
        box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 10px 20px rgba(5,217,232,0.15);
        border-color: rgba(5, 217, 232, 0.8);
      }

      @media (max-width: 768px) {
        .split-timeline {
          padding: 20px 10px 20px 0;
          gap: 40px;
        }
        .split-timeline::before {
          left: 20px;
          transform: none;
        }
        .timeline-row {
          flex-direction: column;
          padding-left: 50px;
          gap: 20px;
          align-items: flex-start;
        }
        /* Make sure Image is always on top on mobile */
        .timeline-row:nth-child(even) {
          flex-direction: column-reverse;
        }
        .timeline-row::after {
          left: 22px; /* 20px + 2px center of 4px pipe */
          top: 0;
          transform: translate(-50%, 0);
        }
        .timeline-half {
          width: 100%;
        }
        .left-half {
          padding-right: 0;
          justify-content: flex-start;
        }
        .right-half {
          padding-left: 0;
          justify-content: flex-start;
        }
        .timeline-img-block, .timeline-text-block {
          max-width: 100%;
        }
      }
    </style>
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">02. EXPERIENCE</h2>
        <span class="section-kicker">TRACK RECORD</span>
      </div>
      <div class="split-timeline">
        ${expHtml}
      </div>
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById('projects');
  if (!container) return;

  const projHtml = portfolioData.projects.map(proj => `
    <div class="mission rpg-window">
      <div class="mission-rank">RANK A</div>
      <h3>${proj.name}</h3>
      <p>${proj.description}</p>
      <div class="tags">
        ${proj.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="mission-actions">
        <a href="${proj.link}" target="_blank" class="hud-btn">VIEW CODE</a>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">03. MISSION BOARD</h2>
        <span class="section-kicker">PROJECTS</span>
      </div>
      <div class="mission-grid">
        ${projHtml}
      </div>
    </div>
  `;
}

function renderCertifications() {
  const container = document.getElementById('certifications');
  if (!container) return;

  const certHtml = portfolioData.certifications.map(cert => {
    // Generate a small random rotation between -3 and 3 degrees for the paper effect
    const rot = (Math.random() * 6 - 3).toFixed(1);
    
    return `
      <div class="pinned-cert" style="transform: rotate(${rot}deg);">
        <div class="pin"></div>
        ${cert.image ? `
          <div class="cert-img-container">
            <img src="${cert.image}" alt="${cert.title} Certificate" loading="lazy" />
          </div>
        ` : `
          <div class="cert-img-container" style="background: #f8f9fa;">
            <span style="color:#aaa; font-family:var(--font-pixel); font-size:0.6rem;">[ PENDING CERTIFICATE ]</span>
          </div>
        `}
        <div class="cert-meta">
          <div class="cert-title">${cert.title}</div>
          <div class="cert-issuer">${cert.issuer} &middot; ${cert.date}</div>
          ${cert.note ? `<div style="font-size: 0.65rem; color: #d9534f; margin-bottom: 5px; font-weight: bold;">${cert.note}</div>` : ''}
        </div>
        ${cert.description ? `<div class="cert-desc">${cert.description}</div>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <style>
      .pin-board {
        background: #d4a373;
        border-radius: 8px;
        padding: 40px;
        border: 16px solid #8b5a2b;
        position: relative;
        box-shadow: inset 0 0 50px rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.5);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 30px 25px;
      }
      .pin-board::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(0,0,0,0.1) 2px, transparent 2px);
        background-size: 15px 15px;
        pointer-events: none;
      }
      .pinned-cert {
        background: #fdfdfd;
        color: #222;
        padding: 25px 15px 15px 15px;
        border-radius: 2px;
        position: relative;
        box-shadow: 3px 5px 15px rgba(0,0,0,0.4);
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
        display: flex;
        flex-direction: column;
      }
      .pinned-cert:hover {
        transform: rotate(0deg) scale(1.05) !important;
        box-shadow: 5px 15px 25px rgba(0,0,0,0.6);
        z-index: 10;
      }
      .pin {
        width: 14px;
        height: 14px;
        background: #ff3b30;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: inset -3px -3px 5px rgba(0,0,0,0.3), 1px 4px 4px rgba(0,0,0,0.4);
        z-index: 2;
      }
      .pin::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 10px;
        background: rgba(0,0,0,0.4);
        top: 10px;
        left: 8px;
        transform: rotate(-25deg);
        z-index: -1;
      }
      .cert-img-container {
        width: 100%;
        height: 170px;
        background: #eee;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cert-img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .cert-meta {
        text-align: center;
      }
      .cert-title {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 5px;
        font-family: 'Space Grotesk', sans-serif;
        color: #111;
      }
      .cert-issuer {
        font-size: 0.75rem;
        color: #666;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .cert-desc {
        font-size: 0.8rem;
        color: #444;
        line-height: 1.5;
        border-top: 1px dashed #ccc;
        padding-top: 12px;
        margin-top: auto;
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">04. ACHIEVEMENTS</h2>
        <span class="section-kicker">CERTIFICATIONS & RECOGNITION</span>
      </div>
      <div class="pin-board">
        ${certHtml}
      </div>
    </div>
  `;
}

function renderSkills() {
  const container = document.getElementById('skills');
  if (!container) return;

  const categories = Object.keys(portfolioData.skills);
  
  const skillIcons = {
    "Penetration Testing": "🔓",
    "Red Teaming": "⚔️",
    "Vulnerability Assessment": "🔍",
    "Web Exploitation (SQLi, XSS, RCE)": "🕷️",
    "Incident Analysis": "🔬",
    "SOC Fundamentals": "🛡️",
    "Network Traffic Analysis": "📡",
    "Subnetting": "🌐",
    "Security Monitoring": "👁️",
    "C": "🅲",
    "C++": "⚙️",
    "Java": "☕",
    "Python": "🐍",
    "PHP": "🐘",
    "JavaScript": "⚡",
    "SQL": "🗄️",
    "Web/Mobile App Architecture": "🏗️",
    "Kali Linux": "🐉",
    "Burp Suite": "🟠",
    "Nmap": "👁️‍🗨️",
    "Ghidra": "👾",
    "Wireshark": "🦈",
    "Docker": "🐳",
    "Git": "🔀",
    "VS Code": "💻"
  };

  const panelsHtml = categories.map((cat) => `
    <div class="status-panel" style="padding: 15px 25px; border-bottom: 1px solid rgba(5,217,232,0.2);">
      <h3 style="color: var(--neon); font-family: var(--font-pixel); font-size: 0.8rem; margin-bottom: 20px; text-shadow: 2px 2px 0px #000;">${cat.toUpperCase()}</h3>
      <div class="inv-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px;">
        ${portfolioData.skills[cat].map(s => `
          <div class="inv-item rpg-window" style="padding: 15px; text-align: center; border-radius: 8px; clip-path: none; border: 1px solid rgba(5,217,232,0.3); transition: transform 0.2s;">
            <div class="inv-glyph" style="font-size: 2rem; margin-bottom: 10px; text-shadow: 0 0 5px rgba(255,255,255,0.2);">${skillIcons[s] || "❖"}</div>
            <div class="inv-name" style="font-weight: 600; font-size: 0.9rem;">${s}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">05. MY SKILLS</h2>
        <span class="section-kicker">ABILITIES & KNOWLEDGE</span>
      </div>
      <div class="status-screen rpg-window" style="display: flex; flex-direction: column;">
        ${panelsHtml}
      </div>
    </div>
  `;
}

function renderContact() {
  const container = document.getElementById('contact');
  if (!container) return;

  container.innerHTML = `
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">06. POST OFFICE</h2>
        <span class="section-kicker">CONTACT & COMM</span>
      </div>
      <div class="post-grid">
        <div class="contact-menu rpg-window">
          <h3>Contact Channels</h3>
          <ul class="contact-list">
            <li><a href="mailto:${portfolioData.profile.email}">${portfolioData.profile.email}</a></li>
            <li><a href="${portfolioData.profile.linkedin}" target="_blank">LinkedIn Profile</a></li>
            <li><a href="${portfolioData.profile.github}" target="_blank">GitHub Profile</a></li>
          </ul>
        </div>
        <div class="letter">
          <h3>Write a Letter</h3>
          <p>Ready to collaborate or have an open position? Drop a message in the system.</p>
          <form onsubmit="event.preventDefault(); alert('Message sent to system logger!');">
            <input type="text" placeholder="Identity (Name)" style="width: 100%; margin-bottom: 10px; padding: 5px;" required />
            <textarea placeholder="Transmission body..." rows="4" style="width: 100%; margin-bottom: 10px; padding: 5px;" required></textarea>
            <button type="submit" class="hud-btn" style="background:#41f28b; color:#000;">SEND</button>
          </form>
        </div>
      </div>
    </div>
  `;
}
