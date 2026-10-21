import { portfolioData } from '../data.js';

export function renderSections() {
  renderAbout();
  renderExperience();
  renderProjects();
  renderCertifications();
  renderSkills();
  renderContact();
}

function renderAbout() {
  const container = document.getElementById('about');
  if (!container) return;
  container.style.padding = '0';

  const shortSummary = "Passionate about penetration testing, identifying system vulnerabilities, and building robust, secure digital architectures.";

  container.innerHTML = `
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
      <img src="${import.meta.env.BASE_URL}assets/profile-hero.png" class="neon-hero-img hero-entry" style="animation-delay: 0.3s;" alt="Yasin Aghyar" />
      
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
            ${shortSummary}
          </div>
          <div class="neon-buttons">
            <a href="${import.meta.env.BASE_URL}assets/cv.pdf" target="_blank" class="neon-btn-primary">
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
          <p>${portfolioData.profile.summary}</p>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners for Modal
  setTimeout(() => {
    const overlay = document.getElementById('dossier-overlay');
    const openBtn = document.getElementById('open-dossier-btn');
    const closeBtn = document.getElementById('close-dossier-btn');
    
    if(openBtn && overlay) openBtn.addEventListener('click', () => overlay.style.display = 'block');
    if(closeBtn && overlay) closeBtn.addEventListener('click', () => overlay.style.display = 'none');
    
    if(overlay) {
      overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }
  }, 0);
}

function renderExperience() {
  const container = document.getElementById('experience');
  if (!container) return;

  const expHtml = portfolioData.experience.map((exp, index) => {
    const isEven = index % 2 === 0;
    const imageHtml = exp.image 
        ? `<img src="${exp.image}" alt="${exp.organization}" class="z-exp-img" loading="lazy">` 
        : `<div class="z-exp-no-image">NO IMAGE DATA</div>`;
        
    return `
      <div class="z-exp-row ${isEven ? '' : 'reverse'} reveal-pop" style="transition-delay: ${index * 0.1}s;">
        <div class="z-exp-image-wrapper">
          <div class="target-corner tl-tl"></div>
          <div class="target-corner tl-tr"></div>
          <div class="target-corner tl-bl"></div>
          <div class="target-corner tl-br"></div>
          ${imageHtml}
        </div>
        <div class="z-exp-content">
          <div class="z-exp-year">[ ${exp.year} ]</div>
          <h3 class="z-exp-role">${exp.role}</h3>
          <div class="z-exp-org">${exp.organization} <span class="z-exp-loc">// ${exp.location}</span></div>
          <p class="z-exp-desc">${exp.description}</p>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
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
        ${expHtml}
      </div>
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById('projects');
  if (!container) return;

  const categories = [
    { id: 'All', label: 'ALL PROJECTS' },
    { id: 'Cyber Security', label: 'CYBER SECURITY' },
    { id: 'Web Development', label: 'WEB DEVELOPMENT' },
    { id: 'AI & Machine Learning', label: 'AI & MACHINE LEARNING' }
  ];

  container.innerHTML = `
    <style>
      .proj-filter-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin: 20px auto 35px auto;
        flex-wrap: wrap;
        max-width: 900px;
      }
      .proj-filter-btn {
        background: rgba(5, 10, 25, 0.7);
        border: 1px solid rgba(0, 240, 255, 0.25);
        color: rgba(255, 255, 255, 0.75);
        padding: 8px 18px;
        border-radius: 20px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 1.5px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
      .proj-filter-btn:hover {
        border-color: var(--neon);
        color: #fff;
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        transform: translateY(-2px);
      }
      .proj-filter-btn.active {
        background: rgba(0, 240, 255, 0.15);
        border-color: var(--neon);
        color: var(--neon);
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.35), inset 0 0 10px rgba(0, 240, 255, 0.2);
        transform: translateY(-2px);
      }
      .proj-filter-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--magenta);
        transition: all 0.3s;
      }
      .proj-filter-btn.active .proj-filter-dot {
        background: var(--neon);
        box-shadow: 0 0 8px var(--neon);
      }

      .proj-container {
        display: flex;
        gap: 30px;
        max-width: 1100px;
        margin: 20px auto 40px auto;
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

      <!-- Category Filter Tabs -->
      <div class="proj-filter-bar reveal-pop">
        ${categories.map((cat, idx) => `
          <button class="proj-filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
            <span class="proj-filter-dot"></span> [ ${cat.label} ]
          </button>
        `).join('')}
      </div>
      
      <div class="proj-container reveal-pop">
        <div class="proj-list-panel" id="proj-list-container">
          <!-- Rendered dynamically -->
        </div>
        
        <div class="proj-dossier-panel" id="proj-dossier-view">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const listPanel = document.getElementById('proj-list-container');
    const dossierView = document.getElementById('proj-dossier-view');
    const filterButtons = container.querySelectorAll('.proj-filter-btn');
    if (!listPanel || !dossierView) return;

    let activeIndex = -1;
    let currentProjectsRef = null;

    const updateDossier = (projects, index, force = false) => {
      if (!force && activeIndex === index && currentProjectsRef === projects) return;
      activeIndex = index;
      currentProjectsRef = projects;

      const proj = projects[index];
      if (!proj) return;

      const items = listPanel.querySelectorAll('.proj-item');
      items.forEach(el => el.classList.remove('active'));
      if (items[index]) items[index].classList.add('active');

      const imageHtml = proj.image 
        ? '<img src="' + proj.image + '" alt="' + proj.name + '" loading="lazy">' 
        : '<div class="proj-no-image">NO IMAGE DATA</div>';
        
      const techHtml = proj.tech.map(t => '<span>' + t + '</span>').join('');
        
      dossierView.innerHTML = `
        <div class="proj-image-frame">
          <div class="proj-scanline"></div>
          <div class="target-corner tl-tl"></div>
          <div class="target-corner tl-tr"></div>
          <div class="target-corner tl-bl"></div>
          <div class="target-corner tl-br"></div>
          ${imageHtml}
        </div>
        <div class="proj-details">
          <div class="proj-title-row">
            <div class="proj-org">${proj.name}</div>
            <a href="${proj.link}" target="_blank" class="proj-link-btn">SOURCE CODE</a>
          </div>
          <div class="proj-tech-tags">${techHtml}</div>
          <div class="proj-desc">${proj.description}</div>
        </div>
      `;
      
      dossierView.style.animation = 'none';
      dossierView.offsetHeight; /* trigger reflow */
      dossierView.style.animation = 'hero-fade-in 0.3s ease-out backwards';
    };

    const renderList = (projects) => {
      if (projects.length === 0) {
        listPanel.innerHTML = `
          <div style="padding: 20px; color: rgba(255,255,255,0.4); font-size: 0.8rem; font-family: 'Space Grotesk', sans-serif;">
            // NO PROJECTS IN THIS CATEGORY
          </div>
        `;
        dossierView.innerHTML = `
          <div class="proj-no-image" style="height: 350px;">NO DATA SELECTED</div>
        `;
        return;
      }

      listPanel.innerHTML = projects.map((proj, index) => {
        return `
          <div class="proj-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            <span class="proj-name">> ${proj.name}</span>
            <span class="proj-tech-mini">${proj.tech.slice(0,2).join(', ')}</span>
          </div>
        `;
      }).join('');

      const items = listPanel.querySelectorAll('.proj-item');
      items.forEach((item, idx) => {
        item.addEventListener('mouseenter', () => updateDossier(projects, idx));
        item.addEventListener('click', () => updateDossier(projects, idx));
      });

      updateDossier(projects, 0, true);
    };

    // Filter event listeners
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const filtered = filter === 'All'
          ? portfolioData.projects
          : portfolioData.projects.filter(p => {
              if (Array.isArray(p.category)) {
                return p.category.includes(filter);
              }
              return p.category === filter;
            });

        renderList(filtered);
      });
    });

    // Initial render with All projects
    renderList(portfolioData.projects);
  }, 0);
}

function renderCertifications() {
  const container = document.getElementById('certifications');
  if (!container) return;

  const certsHtml = portfolioData.certifications.map((cert, index) => {
    let badgeText = "VERIFIED";
    if (cert.issuer.includes("ICORIS") || cert.title.includes("QR Code")) badgeText = "IEEE AUTHOR";
    else if (cert.issuer.includes("COMPFEST")) badgeText = "CTF PARTICIPANT";
    else if (cert.issuer.includes("Traveloka")) badgeText = "BACKEND DEV";
    else if (cert.issuer.includes("Kaggle")) badgeText = "ACCREDITED";
    else if (cert.issuer.includes("Rework")) badgeText = "CYBER BOOTCAMP";
    else if (cert.issuer.includes("Coding Studio")) badgeText = "TECH COURSE";
    else if (cert.issuer.includes("Mandiri Bersemi")) badgeText = "EDUCATOR";

    const imageHtml = cert.image 
      ? `<img src="${cert.image}" alt="${cert.title}" loading="lazy" class="holo-cert-img">`
      : `<div class="holo-cert-no-img">NO PREVIEW AVAILABLE</div>`;

    return `
      <div class="holo-cert-card reveal-pop" data-index="${index}" style="transition-delay: ${index * 0.08}s;">
        <div class="target-corner tl-tl"></div>
        <div class="target-corner tl-tr"></div>
        <div class="target-corner tl-bl"></div>
        <div class="target-corner tl-br"></div>
        
        <div class="holo-cert-thumb" onclick="openCertModal(${index})">
          <div class="holo-scanline"></div>
          ${imageHtml}
          <div class="holo-inspect-hover">
            <span>🔍 [ INSPECT CREDENTIAL ]</span>
          </div>
          <span class="holo-card-badge">${badgeText}</span>
        </div>

        <div class="holo-cert-body">
          <div class="holo-cert-issuer">${cert.issuer} <span class="holo-cert-date">// ${cert.date}</span></div>
          <h3 class="holo-cert-title">${cert.title}</h3>
          <p class="holo-cert-desc">${cert.description || ''}</p>
        </div>

        <div class="holo-cert-footer">
          <span class="holo-status-tag">${cert.note || '[ VERIFIED CREDENTIAL ]'}</span>
          <button class="holo-inspect-btn" onclick="openCertModal(${index})">INSPECT &rarr;</button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <style>
      .holo-certs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 30px;
        margin: 40px auto;
        max-width: 1200px;
        font-family: 'Space Grotesk', sans-serif;
      }

      .holo-cert-card {
        position: relative;
        background: rgba(8, 14, 30, 0.75);
        border: 1px solid rgba(0, 240, 255, 0.2);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        backdrop-filter: blur(10px);
        overflow: hidden;
      }
      .holo-cert-card:hover {
        border-color: var(--neon);
        background: rgba(12, 22, 45, 0.85);
        box-shadow: 0 0 25px rgba(0, 240, 255, 0.25), inset 0 0 15px rgba(0, 240, 255, 0.1);
        transform: translateY(-5px);
      }

      .target-corner { position: absolute; width: 14px; height: 14px; border-color: var(--neon); border-style: solid; z-index: 3; transition: all 0.3s; pointer-events: none; }
      .tl-tl { top: 8px; left: 8px; border-width: 2px 0 0 2px; }
      .tl-tr { top: 8px; right: 8px; border-width: 2px 2px 0 0; }
      .tl-bl { bottom: 8px; left: 8px; border-width: 0 0 2px 2px; }
      .tl-br { bottom: 8px; right: 8px; border-width: 0 2px 2px 0; }
      .holo-cert-card:hover .tl-tl { top: 4px; left: 4px; }
      .holo-cert-card:hover .tl-tr { top: 4px; right: 4px; }
      .holo-cert-card:hover .tl-bl { bottom: 4px; left: 4px; }
      .holo-cert-card:hover .tl-br { bottom: 4px; right: 4px; }

      .holo-cert-thumb {
        position: relative;
        width: 100%;
        height: 190px;
        background: #020612;
        border: 1px solid rgba(176, 38, 255, 0.4);
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .holo-cert-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.4s ease, filter 0.4s ease;
        filter: contrast(1.05) brightness(0.95);
      }
      .holo-cert-card:hover .holo-cert-img {
        transform: scale(1.04);
        filter: contrast(1.1) brightness(1.05);
      }
      .holo-cert-no-img {
        font-family: 'Press Start 2P', monospace;
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.35);
        text-align: center;
        padding: 20px;
      }

      .holo-scanline {
        position: absolute;
        top: 0; left: 0; right: 0; height: 3px;
        background: rgba(0, 240, 255, 0.7);
        box-shadow: 0 0 8px rgba(0, 240, 255, 1);
        animation: scanlinePass 3s linear infinite;
        z-index: 2;
        pointer-events: none;
        opacity: 0.5;
      }
      @keyframes scanlinePass {
        0% { transform: translateY(-5px); }
        100% { transform: translateY(195px); }
      }

      .holo-card-badge {
        position: absolute;
        top: 8px;
        left: 8px;
        background: rgba(5, 10, 25, 0.85);
        border: 1px solid var(--neon);
        color: var(--neon);
        font-family: 'Press Start 2P', monospace;
        font-size: 0.55rem;
        padding: 4px 8px;
        border-radius: 4px;
        letter-spacing: 0.5px;
        z-index: 3;
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .holo-inspect-hover {
        position: absolute;
        inset: 0;
        background: rgba(3, 8, 20, 0.65);
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 4;
      }
      .holo-inspect-hover span {
        font-family: 'Press Start 2P', monospace;
        font-size: 0.65rem;
        color: #fff;
        background: rgba(0, 240, 255, 0.2);
        border: 1px solid var(--neon);
        padding: 6px 12px;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
      }
      .holo-cert-thumb:hover .holo-inspect-hover {
        opacity: 1;
      }

      .holo-cert-body {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .holo-cert-issuer {
        font-family: 'Press Start 2P', monospace;
        font-size: 0.6rem;
        color: var(--magenta);
        letter-spacing: -0.3px;
      }
      .holo-cert-date {
        color: rgba(255, 255, 255, 0.4);
      }
      .holo-cert-title {
        font-size: 1.15rem;
        color: #fff;
        font-weight: 700;
        line-height: 1.3;
        margin: 4px 0 2px 0;
      }
      .holo-cert-desc {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
        border-left: 2px solid rgba(0, 240, 255, 0.4);
        padding-left: 10px;
        margin-top: 4px;
      }

      .holo-cert-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 12px;
        border-top: 1px dashed rgba(0, 240, 255, 0.2);
        margin-top: 5px;
      }
      .holo-status-tag {
        font-family: 'Press Start 2P', monospace;
        font-size: 0.55rem;
        color: var(--neon);
        opacity: 0.8;
      }
      .holo-inspect-btn {
        background: transparent;
        border: 1px solid var(--neon);
        color: var(--neon);
        padding: 5px 12px;
        border-radius: 15px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .holo-inspect-btn:hover {
        background: var(--neon);
        color: #000;
        box-shadow: 0 0 15px var(--neon);
      }

      #cert-inspector-overlay {
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 20, 0.88);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: hero-fade-in 0.3s ease-out;
      }
      .cert-inspector-modal {
        position: relative;
        background: rgba(6, 12, 28, 0.95);
        border: 2px solid var(--neon);
        box-shadow: 0 0 50px rgba(0, 240, 255, 0.35);
        border-radius: 12px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 30px;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .cert-inspector-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: 1px solid rgba(0, 240, 255, 0.5);
        color: var(--neon);
        font-size: 1.2rem;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }
      .cert-inspector-close:hover {
        background: var(--neon);
        color: #000;
        box-shadow: 0 0 15px var(--neon);
      }
      .cert-modal-img-frame {
        width: 100%;
        max-height: 55vh;
        background: #020510;
        border: 1px solid rgba(176, 38, 255, 0.4);
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cert-modal-img-frame img {
        max-width: 100%;
        max-height: 55vh;
        object-fit: contain;
      }
      .cert-modal-header h2 {
        font-size: 1.5rem;
        color: #fff;
        font-weight: 700;
        margin-bottom: 6px;
      }
      .cert-modal-header .issuer-bar {
        font-family: 'Press Start 2P', monospace;
        font-size: 0.7rem;
        color: var(--magenta);
      }
      .cert-modal-desc {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        line-height: 1.6;
        border-left: 3px solid var(--neon);
        padding-left: 15px;
      }

      @media (max-width: 768px) {
        .holo-certs-grid {
          grid-template-columns: 1fr;
        }
        .cert-inspector-modal {
          padding: 20px;
        }
      }
    </style>

    <div class="section-inner">
      <div class="section-head reveal-pop">
        <h2 class="section-title" style="color: #fff; font-family: 'Space Grotesk', sans-serif;">CERTIFICATIONS</h2>
        <span class="section-kicker">ACHIEVEMENTS</span>
      </div>
      
      <div class="holo-certs-grid">
        ${certsHtml}
      </div>
    </div>

    <!-- Inspector Modal Container -->
    <div id="cert-inspector-overlay" style="display: none;">
      <div class="cert-inspector-modal">
        <button class="cert-inspector-close" id="cert-modal-close">&times;</button>
        <div class="cert-modal-img-frame" id="cert-modal-img-container"></div>
        <div class="cert-modal-header">
          <div class="issuer-bar" id="cert-modal-issuer"></div>
          <h2 id="cert-modal-title"></h2>
        </div>
        <p class="cert-modal-desc" id="cert-modal-desc"></p>
      </div>
    </div>
  `;

  window.openCertModal = (index) => {
    const cert = portfolioData.certifications[index];
    if (!cert) return;

    const overlay = document.getElementById('cert-inspector-overlay');
    const imgContainer = document.getElementById('cert-modal-img-container');
    const titleEl = document.getElementById('cert-modal-title');
    const issuerEl = document.getElementById('cert-modal-issuer');
    const descEl = document.getElementById('cert-modal-desc');

    if (overlay && imgContainer && titleEl && issuerEl && descEl) {
      imgContainer.innerHTML = cert.image 
        ? `<img src="${cert.image}" alt="${cert.title}">`
        : `<div style="padding:40px; color:rgba(255,255,255,0.4); font-family:'Press Start 2P',monospace; font-size:0.8rem;">NO PREVIEW AVAILABLE</div>`;
      titleEl.textContent = cert.title;
      issuerEl.textContent = `${cert.issuer} // ${cert.date}`;
      descEl.textContent = cert.description || '';
      overlay.style.display = 'flex';
    }
  };

  setTimeout(() => {
    const overlay = document.getElementById('cert-inspector-overlay');
    const closeBtn = document.getElementById('cert-modal-close');
    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay) {
        overlay.style.display = 'none';
      }
    });
  }, 0);
}

function renderSkills() {
  const container = document.getElementById('skills');
  if (!container) return;

  const skillsHtml = Object.entries(portfolioData.skills).map(([category, skills], idx) => `
    <div class="scifi-skill-cat reveal-${idx % 2 === 0 ? 'left' : 'right'}">
      <h3>${category}</h3>
      <div class="skill-tags">
        ${skills.map(skill => `<span>${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
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
        ${skillsHtml}
      </div>
    </div>
  `;
}

function renderContact() {
  const container = document.getElementById('contact');
  if (!container) return;

  container.innerHTML = `
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
          <form class="term-body" onsubmit="event.preventDefault(); const n = this.querySelectorAll('input')[0].value; const e = this.querySelectorAll('input')[1].value; const m = this.querySelector('textarea').value; const bodyText = 'From: ' + n + '%0D%0AEmail: ' + e + '%0D%0A%0D%0A' + m; window.location.href = 'mailto:yasintaryaqil@gmail.com,yasin.aghyar@binus.ac.id?subject=Portofolio Contact - ' + encodeURIComponent(n) + '&body=' + encodeURIComponent(bodyText).replace(/%250D%250A/g, '%0D%0A');">
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
            <a href="${portfolioData.profile.github}" target="_blank" class="cyber-node node-1" data-id="1" data-lbl="GITHUB_REPO" data-val="github.com/Hyphen-14">
              <span class="node-icon">🐙</span>
            </a>
            <a href="${portfolioData.profile.linkedin}" target="_blank" class="cyber-node node-2" data-id="2" data-lbl="LINKEDIN_PROFILE" data-val="yasin-taryaqil-aghyar">
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
  `;

  // Interaction script for Nodes & Tethers
  setTimeout(() => {
    const nodes = document.querySelectorAll('.cyber-node');
    const dispBox = document.getElementById('node-disp');
    const lbl = document.getElementById('nd-lbl');
    const val = document.getElementById('nd-val');
    const container = document.getElementById('nodes-container');
    
    // Tethers animation loop
    function updateTethers() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      
      nodes.forEach((node) => {
        const id = node.getAttribute('data-id');
        const path = document.getElementById('tether-' + id);
        if (!path) return;
        
        const nRect = node.getBoundingClientRect();
        const nx = nRect.left - rect.left + nRect.width / 2;
        const ny = nRect.top - rect.top + nRect.height / 2;
        
        // draw bezier curve to make it look elastic/wavy
        const waveOffset = Math.sin(Date.now() / 300 + id * 2) * 20;
        const cpX = (cx + nx) / 2 + waveOffset;
        const cpY = (cy + ny) / 2 - waveOffset;
        
        path.setAttribute('d', `M ${cx} ${cy} Q ${cpX} ${cpY} ${nx} ${ny}`);
      });
      requestAnimationFrame(updateTethers);
    }
    updateTethers();
    
    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const id = node.getAttribute('data-id');
        const labelText = node.getAttribute('data-lbl');
        const valText = node.getAttribute('data-val');
        
        // Update display text
        lbl.innerText = '> ' + labelText;
        val.innerText = valText;
        
        // Update box style
        dispBox.style.borderColor = 'var(--neon)';
        dispBox.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.4)';
        
        // Activate node & tether
        node.classList.add('active-node');
        const path = document.getElementById('tether-' + id);
        if(path) {
          path.style.stroke = 'var(--neon)';
          path.style.strokeWidth = '4';
        }
      });
      
      node.addEventListener('mouseleave', () => {
        const id = node.getAttribute('data-id');
        
        // Reset text
        lbl.innerText = 'SYSTEM STATUS';
        val.innerText = 'AWAITING PING...';
        
        // Reset box style
        dispBox.style.borderColor = 'rgba(176, 38, 255, 0.5)';
        dispBox.style.boxShadow = '0 0 20px rgba(176, 38, 255, 0.2)';
        
        // Deactivate node & tether
        node.classList.remove('active-node');
        const path = document.getElementById('tether-' + id);
        if(path) {
          path.style.stroke = 'rgba(176, 38, 255, 0.4)';
          path.style.strokeWidth = '2';
        }
      });
    });
  }, 0);
}
