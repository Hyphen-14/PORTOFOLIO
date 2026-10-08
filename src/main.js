import { renderSections } from './sections/render.js';
import { initAudio, playSound } from './ui/audio.js';

let appStarted = false;

function init() {
  renderSections();
  initAudio();
  
  // Title Screen Logic
  const titleScreen = document.getElementById('title-screen');
  const appContent = document.getElementById('app-content');
  
  titleScreen.addEventListener('click', () => {
    if (appStarted) return;
    appStarted = true;
    playSound('blip');

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
    let tick = 0;
    let decryptInterval = setInterval(() => {
      textEl.textContent = originalText.split('').map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('');
      if (tick % 4 === 0) playSound('decrypt');
      tick++;
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
      
      playSound('start');

      setTimeout(() => {
        titleScreen.classList.add('hidden');
        setTimeout(() => {
          titleScreen.style.display = 'none';
          appContent.style.display = 'block';
          initScrollEffects();
        }, 1000);
      }, 1000);
    }, 2000);
  });

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
        if (!unlockedAchievements.has(sectionId) && sectionId !== 'about') {
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
