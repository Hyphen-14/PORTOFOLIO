let isAudioEnabled = true;
let audioCtx = null;

export function initAudio() {
  const toggleBtn = document.getElementById('audio-toggle');
  if (!toggleBtn) return;
  
  // Set initial state
  toggleBtn.textContent = '🔊';

  toggleBtn.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    toggleBtn.textContent = isAudioEnabled ? '🔊' : '🔇';
    
    if (isAudioEnabled && !audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (isAudioEnabled) playSound('start');
  });

  // Add hover sounds to buttons
  document.querySelectorAll('a, button, .tab-btn').forEach(el => {
    el.addEventListener('mouseenter', () => playSound('hover'));
  });
}

export function playSound(type) {
  if (!isAudioEnabled) return;
  
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;
  
  if (type === 'hover') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } 
  else if (type === 'blip') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.02);
    osc.start(now);
    osc.stop(now + 0.02);
  }
  else if (type === 'decrypt') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.linearRampToValueAtTime(2000, now + 0.1);
    osc.frequency.linearRampToValueAtTime(800, now + 0.2);
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  }
  else if (type === 'start') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.setValueAtTime(400, now + 0.1);
    osc.frequency.setValueAtTime(600, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  }
  else if (type === 'achievement') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, now);     // A4
    osc.frequency.setValueAtTime(554.37, now + 0.1); // C#5
    osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
    osc.frequency.setValueAtTime(880, now + 0.3); // A5
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.6);
    osc.start(now);
    osc.stop(now + 0.6);
  }
}
