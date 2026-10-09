import { renderSections } from './sections/render.js';
import { initAudio, playSound } from './ui/audio.js';

let appStarted = false;

function init() {
  renderSections();
  initCursor();
  initAudio();
  
  // Title Screen Logic
  const titleScreen = document.getElementById('title-screen');
  const appContent = document.getElementById('app-content');
  
  if (appStarted) return;
  appStarted = true;
  const stopWarp = initWarpSpeed();

  // 1. Decrypt Animation Phase
  const textEl = titleScreen.querySelector('h1');
  const subTextEl = titleScreen.querySelector('.press-start');
  const rings = titleScreen.querySelector('.cyber-lock');
  const shackle = document.getElementById('shackle');

  subTextEl.style.animation = 'none'; // stop blinking
  subTextEl.textContent = '[ DECRYPTING... ]';
  subTextEl.style.color = 'var(--gold)';
  rings.style.animationDuration = '1s'; // spin faster
  
  // Matrix text effect on title
  const originalText = 'UNLOCK PROFILE';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
  let decryptInterval = setInterval(() => {
    textEl.textContent = originalText.split('').map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('');
  }, 50);

  // 2. Unlock & Transition Phase
  setTimeout(() => {
    clearInterval(decryptInterval);
    textEl.textContent = 'ACCESS GRANTED';
    textEl.style.color = '#41f28b'; // green
    subTextEl.textContent = '[ SYSTEM UNLOCKED ]';
    subTextEl.style.color = '#41f28b';
    
    if (shackle) {
      shackle.style.transform = 'translateY(-15px)';
    }
    
    playSound('start'); // Play sound only when unlocked

    setTimeout(() => {
      titleScreen.classList.add('hidden');
      setTimeout(() => {
        stopWarp();
        titleScreen.style.display = 'none';
        appContent.style.display = 'block';
        initScrollEffects();
      }, 500);
    }, 400);
  }, 1000);

  // CRT Toggle
  const crtToggle = document.getElementById('crt-toggle');
  crtToggle.addEventListener('click', () => {
    document.body.classList.toggle('crt');
    playSound('blip');
  });
}

function initScrollEffects() {
  const sections = document.querySelectorAll('.section');
  const unlockedAchievements = new Set();
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Achievement logic
        const sectionId = entry.target.id;
        if (!unlockedAchievements.has(sectionId) && sectionId !== 'about' && sectionId !== '') {
          unlockedAchievements.add(sectionId);
          showAchievement(`Explored: ${sectionId.toUpperCase()}`);
        }
        
        // Typing effect logic
        const typedElements = entry.target.querySelectorAll('.typed:not(.typing-done)');
        typedElements.forEach(el => {
          const text = el.getAttribute('data-text') || el.textContent;
          el.setAttribute('data-text', text);
          el.textContent = '';
          el.classList.add('typing-done');
          typeText(el, text, 0);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));

  // Modern Sci-Fi Reveal Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-pop, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
}

function typeText(element, text, index) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    if (index % 3 === 0) playSound('blip');
    setTimeout(() => typeText(element, text, index + 1), 20);
  }
}

function showAchievement(text) {
  const popup = document.getElementById('achievement-popup');
  const textEl = document.getElementById('achievement-text');
  
  textEl.textContent = text;
  popup.classList.add('show');
  playSound('achievement');
  
  setTimeout(() => {
    popup.classList.remove('show');
  }, 4000);
}

document.addEventListener('DOMContentLoaded', init);


function initCursor() {
  const style = document.createElement('style');
  style.innerHTML = `
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
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'custom-cursor';
  document.body.appendChild(container);

  const head = document.createElement('div');
  head.className = 'cursor-head';
  container.appendChild(head);

  const tails = [];
  const numTails = 8;
  for (let i = 0; i < numTails; i++) {
    const tail = document.createElement('div');
    tail.className = 'cursor-tail';
    tail.style.opacity = 1 - (i / numTails);
    const size = 10 - i;
    tail.style.width = size + 'px';
    tail.style.height = size + 'px';
    container.appendChild(tail);
    tails.push({ el: tail, x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let headX = mouseX;
  let headY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    headX += (mouseX - headX) * 0.4;
    headY += (mouseY - headY) * 0.4;
    head.style.left = headX + 'px';
    head.style.top = headY + 'px';

    let prevX = headX;
    let prevY = headY;
    
    for (let i = 0; i < tails.length; i++) {
      const tail = tails[i];
      tail.x += (prevX - tail.x) * 0.4;
      tail.y += (prevY - tail.y) * 0.4;
      tail.el.style.left = tail.x + 'px';
      tail.el.style.top = tail.y + 'px';
      prevX = tail.x;
      prevY = tail.y;
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

function initWarpSpeed() {
  const canvas = document.getElementById('warp-canvas');
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  const stars = [];
  const numStars = 400;
  
  let speedMultiplier = 1;
  let isWarping = true;
  
  for(let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * canvas.width * 2,
      y: (Math.random() - 0.5) * canvas.height * 2,
      z: Math.random() * canvas.width,
      pz: 0
    });
  }
  
  function draw() {
    if (!isWarping) return;
    
    ctx.fillStyle = 'rgba(5, 10, 31, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    // Gradual warp speed up
    speedMultiplier += 0.3;
    if (speedMultiplier > 25) speedMultiplier = 25;
    
    for(let i = 0; i < numStars; i++) {
      const star = stars[i];
      star.pz = star.z;
      
      star.z -= speedMultiplier;
      
      if(star.z <= 0) {
        star.z = canvas.width;
        star.pz = canvas.width;
        star.x = (Math.random() - 0.5) * canvas.width * 2;
        star.y = (Math.random() - 0.5) * canvas.height * 2;
      }
      
      const sx = (star.x / star.z) * canvas.width + cx;
      const sy = (star.y / star.z) * canvas.height + cy;
      
      const px = (star.x / star.pz) * canvas.width + cx;
      const py = (star.y / star.pz) * canvas.height + cy;
      
      const alpha = 1 - (star.z / canvas.width);
      
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(sx, sy);
      // Mix of neon cyan and magenta
      ctx.strokeStyle = i % 3 === 0 ? `rgba(176, 38, 255, ${alpha})` : `rgba(0, 240, 255, ${alpha})`;
      ctx.lineWidth = 1 + (1 - star.z / canvas.width) * 4;
      ctx.stroke();
    }
    
    requestAnimationFrame(draw);
  }
  
  draw();
  
  return () => {
    isWarping = false;
    window.removeEventListener('resize', resize);
  };
}
