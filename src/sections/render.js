import { portfolioData } from '../data.js';

export function renderSections() {
  renderAbout();
  renderExperience();
  renderProjects();
  renderCertifications();
  renderSkills();
  renderContact();
  initTabs();
  initProjectsTerminal();
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

  container.innerHTML = `
    <style>
      .neon-profile-container {
        position: relative;
        width: 100%;
        min-height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: radial-gradient(circle at center, #100b2e 0%, #030514 100%);
        border-radius: 20px;
        border: 1px solid rgba(5, 217, 232, 0.2);
        box-shadow: 0 0 50px rgba(16, 11, 46, 0.8);
        overflow: hidden;
        padding: 40px;
        color: #fff;
      }

      /* Background Text */
      .neon-bg-text {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(8rem, 18vw, 24rem);
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 900;
        line-height: 0.8;
        color: transparent;
        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.05);
        white-space: nowrap;
        z-index: 1;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .neon-bg-text span {
        display: block;
      }
      .neon-bg-text span:first-child {
        transform: translateX(-10%);
      }
      .neon-bg-text span:last-child {
        transform: translateX(10%);
      }

      /* Glowing Circle */
      .neon-glow-circle {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: clamp(300px, 45vw, 600px);
        height: clamp(300px, 45vw, 600px);
        border-radius: 50%;
        border: 2px solid var(--magenta);
        box-shadow: 0 0 60px var(--magenta), inset 0 0 60px var(--magenta);
        z-index: 2;
        pointer-events: none;
        opacity: 0.8;
      }

      /* Hero Image */
      .neon-hero-img {
        position: absolute;
        bottom: 80px; /* Leave space for bottom bar */
        left: 50%;
        transform: translateX(-50%);
        height: 75%;
        z-index: 3;
        object-fit: cover;
        pointer-events: none;
        filter: drop-shadow(0 0 20px rgba(0,0,0,0.8));
      }

      /* Top Bar */
      .neon-top-bar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        z-index: 4;
        position: relative;
      }
      .neon-logo {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .neon-logo-icon {
        font-family: 'Press Start 2P', monospace;
        font-size: 1.5rem;
        background: linear-gradient(45deg, var(--neon), var(--magenta));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .neon-logo-text {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.9rem;
        letter-spacing: 2px;
      }
      .neon-logo-title {
        font-size: 0.65rem;
        color: rgba(255,255,255,0.6);
        letter-spacing: 1px;
        margin-top: 5px;
      }
      .neon-availability {
        font-size: 0.7rem;
        letter-spacing: 2px;
        color: rgba(255,255,255,0.8);
        display: flex;
        align-items: center;
        gap: 8px;
        text-transform: uppercase;
      }
      .neon-dot {
        width: 10px; height: 10px;
        background-color: var(--magenta);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--magenta);
        animation: pulse 2s infinite alternate;
      }

      /* Content Area (Left and Right) */
      .neon-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 4;
        position: relative;
        flex: 1;
        padding-bottom: 40px; /* Space for bottom bar */
      }

      /* Left Side */
      .neon-left {
        width: 35%;
        max-width: 400px;
      }
      .neon-subtitle {
        font-size: 0.7rem;
        letter-spacing: 2px;
        color: rgba(255,255,255,0.6);
        text-transform: uppercase;
        margin-bottom: 10px;
      }
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
      }
      .neon-desc {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.8);
        line-height: 1.6;
        margin-bottom: 30px;
      }
      .neon-buttons {
        display: flex;
        gap: 15px;
        align-items: center;
      }
      .neon-btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: transparent;
        border: 1px solid var(--magenta);
        color: #fff;
        padding: 10px 25px;
        border-radius: 30px;
        text-decoration: none;
        font-size: 0.8rem;
        font-family: 'Space Grotesk', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s;
        box-shadow: inset 0 0 10px rgba(255, 0, 255, 0.2);
      }
      .neon-btn-primary:hover {
        background: rgba(255, 0, 255, 0.1);
        box-shadow: inset 0 0 20px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255,0,255,0.2);
      }
      .neon-btn-icon {
        background: var(--magenta);
        color: #fff;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }
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
      .neon-btn-text:hover {
        color: var(--neon);
      }

      /* Right Side */
      .neon-right {
        width: 30%;
        max-width: 300px;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .neon-cursive {
        font-family: 'Caveat', cursive;
        font-size: 3rem;
        color: var(--magenta);
        line-height: 1;
        margin-bottom: 40px;
        transform: rotate(-5deg);
        text-shadow: 0 0 15px rgba(255,0,255,0.4);
      }
      .neon-skill-list {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .neon-skill-list li {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.85rem;
        color: rgba(255,255,255,0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        border-right: 2px solid var(--magenta);
        padding-right: 15px;
      }

      /* Bottom Stats */
      .neon-stats-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(10, 15, 45, 0.8);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(5, 217, 232, 0.3);
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 40px;
        z-index: 5;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      .neon-stat-item {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .neon-stat-icon {
        font-size: 1.8rem;
        color: var(--magenta);
      }
      .neon-stat-info {
        display: flex;
        flex-direction: column;
      }
      .neon-stat-val {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: #fff;
      }
      .neon-stat-label {
        font-size: 0.65rem;
        color: rgba(255,255,255,0.5);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Modal */
      .dossier-modal {
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(5, 10, 31, 0.95);
        border: 1px solid var(--neon);
        box-shadow: 0 0 30px rgba(5,217,232,0.3);
        padding: 40px;
        border-radius: 12px;
        color: #fff;
        z-index: 1000;
        width: 90%;
        max-width: 600px;
        backdrop-filter: blur(10px);
        font-family: 'Space Grotesk', sans-serif;
      }
      .dossier-modal::backdrop {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
      }
      .dossier-close {
        position: absolute;
        top: 15px; right: 15px;
        background: transparent;
        border: none;
        color: var(--neon);
        font-size: 1.5rem;
        cursor: pointer;
      }
      .dossier-content h2 {
        color: var(--magenta);
        margin-bottom: 20px;
      }
      .dossier-content p {
        line-height: 1.8;
        font-size: 0.95rem;
        color: rgba(255,255,255,0.8);
      }

      @media (max-width: 900px) {
        .neon-content { flex-direction: column; gap: 40px; align-items: flex-start; }
        .neon-left, .neon-right { width: 100%; text-align: left; align-items: flex-start; }
        .neon-skill-list { align-items: flex-start; }
        .neon-skill-list li { border-right: none; border-left: 2px solid var(--magenta); padding-right: 0; padding-left: 15px; }
        .neon-stats-bar { flex-wrap: wrap; gap: 20px; }
        .neon-bg-text { font-size: 4rem; }
        .neon-hero-img { height: 50%; }
        .neon-cursive { display: none; }
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
      <img src="/assets/profile-hero.png" class="neon-hero-img" alt="Yasin Aghyar" />
      
      <!-- Top Bar -->
      <div class="neon-top-bar">
        <div class="neon-logo">
          <div class="neon-logo-icon">YA</div>
          <div>
            <div class="neon-logo-text">YASIN TARYAQIL AGHYAR</div>
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
        <div class="neon-left">
          <div class="neon-subtitle">I design secure networks &</div>
          <div class="neon-title">CYBER<br>SECURITY</div>
          <div class="neon-desc">
            I break systems on purpose to build them stronger. Passionate about Penetration Testing, Vulnerability Assessment, and building robust digital architectures.
          </div>
          <div class="neon-buttons">
            <a href="/assets/cv.pdf" target="_blank" class="neon-btn-primary">
              <span class="neon-btn-icon">&rarr;</span> DOWNLOAD CV
            </a>
            <button class="neon-btn-text" id="open-dossier-btn">READ DOSSIER</button>
          </div>
        </div>

        <!-- Right Side -->
        <div class="neon-right">
          <div class="neon-cursive">Secure Everything</div>
          <ul class="neon-skill-list">
            <li>Penetration Testing</li>
            <li>Red Teaming</li>
            <li>Web Exploitation</li>
            <li>SOC Fundamentals</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Stats -->
      <div class="neon-stats-bar">
        <div class="neon-stat-item">
          <div class="neon-stat-icon">📜</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">4+</div>
            <div class="neon-stat-label">Certifications</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">📁</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">4+</div>
            <div class="neon-stat-label">Projects Completed</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">🏆</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">1st Place</div>
            <div class="neon-stat-label">Business Competition</div>
          </div>
        </div>
        <div class="neon-stat-item">
          <div class="neon-stat-icon">🎓</div>
          <div class="neon-stat-info">
            <div class="neon-stat-val">CS Degree</div>
            <div class="neon-stat-label">Binus University</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dossier Modal -->
    <dialog id="dossier-modal" class="dossier-modal">
      <button class="dossier-close" id="close-dossier-btn">&times;</button>
      <div class="dossier-content">
        <h2>FULL DOSSIER</h2>
        <p>${portfolioData.profile.summary}</p>
      </div>
    </dialog>
  `;

  // Attach event listeners for Modal
  setTimeout(() => {
    const dialog = document.getElementById('dossier-modal');
    const openBtn = document.getElementById('open-dossier-btn');
    const closeBtn = document.getElementById('close-dossier-btn');
    
    if(openBtn && dialog) {
      openBtn.addEventListener('click', () => dialog.showModal());
    }
    if(closeBtn && dialog) {
      closeBtn.addEventListener('click', () => dialog.close());
    }
    
    // Close on click outside
    if(dialog) {
      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) dialog.close();
      });
    }
  }, 0);
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

  const projects = portfolioData.projects;

  // Build the left list
  const listHtml = projects.map((proj, index) => `
    <li class="term-item ${index === 0 ? 'active' : ''}" data-index="${index}">
      <span class="term-item-id">[0${index}]</span> ${proj.name}
    </li>
  `).join('');

  // Initial active project (the first one)
  const p0 = projects[0];
  const techHtml = p0.tech.map(t => `<span>${t}</span>`).join('');

  container.innerHTML = `
    <style>
      .projects-terminal {
        display: flex;
        gap: 0;
        background: #0a0e17;
        border: 2px solid var(--neon);
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(5, 217, 232, 0.2);
        overflow: hidden;
        min-height: 500px;
      }
      .term-left {
        width: 320px;
        background: rgba(0, 0, 0, 0.5);
        border-right: 2px solid rgba(5, 217, 232, 0.3);
        display: flex;
        flex-direction: column;
      }
      .term-list-header {
        padding: 15px;
        font-family: var(--font-pixel);
        font-size: 0.7rem;
        color: var(--neon);
        border-bottom: 1px solid rgba(5, 217, 232, 0.3);
        background: rgba(5, 217, 232, 0.1);
        text-align: center;
        letter-spacing: 1px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .term-list-instruction {
        font-size: 0.55rem;
        color: rgba(255, 255, 255, 0.5);
      }
      .term-list {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow-y: auto;
      }
      .term-item {
        padding: 15px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
      }
      .term-item-id {
        font-family: var(--font-pixel);
        font-size: 0.6rem;
        color: var(--cyan);
      }
      .term-item::after {
        content: '→';
        position: absolute;
        right: 15px;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.2s;
        color: var(--neon);
      }
      .term-item:hover {
        background: rgba(255, 255, 255, 0.05);
        color: #fff;
      }
      .term-item:hover::after {
        opacity: 1;
        transform: translateX(0);
      }
      .term-item.active {
        background: rgba(5, 217, 232, 0.15);
        color: var(--neon);
        border-left: 4px solid var(--neon);
      }
      .term-item.active::after {
        opacity: 1;
        transform: translateX(0);
        content: '█';
        animation: blink 1s infinite;
      }
      .term-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 25px;
        background: radial-gradient(circle at center, #111a24 0%, #050a0f 100%);
      }
      .term-screen {
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #000;
        border: 2px solid #333;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 30px rgba(0,0,0,0.8) inset;
        margin-bottom: 25px;
      }
      .term-screen img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: relative;
        z-index: 1;
        opacity: 0.9;
        transition: opacity 0.3s;
      }
      .term-screen::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 50%);
        background-size: 100% 4px;
        z-index: 2;
        pointer-events: none;
      }
      .term-screen::before {
        content: '';
        position: absolute;
        top: -10%;
        left: 0;
        width: 100%;
        height: 10%;
        background: linear-gradient(to bottom, rgba(5, 217, 232, 0) 0%, rgba(5, 217, 232, 0.15) 50%, rgba(5, 217, 232, 0) 100%);
        z-index: 3;
        pointer-events: none;
        animation: scan 4s linear infinite;
      }
      @keyframes scan {
        0% { top: -10%; }
        100% { top: 110%; }
      }
      .term-title {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 10px;
        text-shadow: 2px 2px 0 #000;
      }
      .term-desc {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin-bottom: 20px;
        font-size: 0.95rem;
      }
      .term-actions {
        margin-top: 25px;
      }
      
      @media (max-width: 768px) {
        .projects-terminal {
          flex-direction: column;
        }
        .term-left {
          width: 100%;
          border-right: none;
          border-bottom: 2px solid rgba(5, 217, 232, 0.3);
          max-height: 250px;
        }
        .term-right {
          padding: 15px;
        }
      }
    </style>
    
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">03. PROJECTS</h2>
        <span class="section-kicker">WORKS & EXPERIMENTS</span>
      </div>
      
      <div class="projects-terminal">
        <div class="term-left">
          <div class="term-list-header">
            <span>AVAILABLE MISSIONS</span>
            <span class="term-list-instruction">// CLICK TO SELECT //</span>
          </div>
          <ul class="term-list" id="project-list">
            ${listHtml}
          </ul>
        </div>
        
        <div class="term-right">
          <div class="term-screen">
            <img id="project-display-img" src="${p0.image || ''}" alt="${p0.name}">
          </div>
          <div class="term-details">
            <h3 id="project-display-title" class="term-title">${p0.name}</h3>
            <p id="project-display-desc" class="term-desc">${p0.description}</p>
            <div id="project-display-tech" class="tags">
              ${techHtml}
            </div>
            <div class="term-actions">
              <a id="project-display-link" href="${p0.link}" target="_blank" class="hud-btn">VIEW CODE &nearr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initProjectsTerminal() {
  const listItems = document.querySelectorAll('.term-item');
  if (listItems.length === 0) return;

  const imgEl = document.getElementById('project-display-img');
  const titleEl = document.getElementById('project-display-title');
  const descEl = document.getElementById('project-display-desc');
  const techEl = document.getElementById('project-display-tech');
  const linkEl = document.getElementById('project-display-link');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      listItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const idx = item.getAttribute('data-index');
      const proj = portfolioData.projects[idx];

      if (proj) {
        imgEl.style.opacity = 0;
        setTimeout(() => {
          imgEl.src = proj.image || '';
          imgEl.alt = proj.name;
          imgEl.style.opacity = 0.9;
        }, 150);

        titleEl.textContent = proj.name;
        descEl.textContent = proj.description;
        techEl.innerHTML = proj.tech.map(t => `<span>${t}</span>`).join('');
        linkEl.href = proj.link;
      }
    });
  });
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
