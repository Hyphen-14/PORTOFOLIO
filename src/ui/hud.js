export function initHUD() {
  updateClock();
  setInterval(updateClock, 60000);
}

function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  clockEl.textContent = `${hours}:${minutes}`;

  if (hours >= 18 || hours < 6) {
    document.documentElement.setAttribute('data-time', 'night');
  } else {
    document.documentElement.removeAttribute('data-time');
  }
}

export function setLocationName(name) {
  // Can be updated later
}

