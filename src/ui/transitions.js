export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('revealed');
  }
}

export function flashScreen(color = '#ffffff', duration = 300) {
  const curtain = document.getElementById('curtain');
  if (curtain) {
    curtain.style.backgroundColor = color;
    curtain.style.opacity = '1';
    setTimeout(() => {
      curtain.style.opacity = '0';
    }, duration);
  }
}

