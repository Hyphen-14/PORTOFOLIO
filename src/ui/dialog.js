import { playSound } from './audio.js';

let dialogQueue = [];
let isTyping = false;
let currentCallback = null;
let currentText = '';
let textIndex = 0;
let typingSpeed = 30;

const dialogBox = document.getElementById('dialog-box');
const dialogName = document.getElementById('dialog-name');
const dialogText = document.getElementById('dialog-text');

export function showDialog(name, text, onComplete = null) {
  dialogQueue.push({ name, text, onComplete });
  if (!isTyping && dialogBox.style.display === 'none') {
    processQueue();
  }
}

function processQueue() {
  if (dialogQueue.length === 0) {
    dialogBox.style.display = 'none';
    return;
  }
  const current = dialogQueue.shift();
  dialogBox.style.display = 'flex';
  if (dialogName) dialogName.textContent = current.name;
  
  currentText = current.text;
  textIndex = 0;
  if (dialogText) dialogText.textContent = '';
  currentCallback = current.onComplete;
  isTyping = true;
  typeNextChar();
}

function typeNextChar() {
  if (textIndex < currentText.length) {
    if (dialogText) dialogText.textContent += currentText.charAt(textIndex);
    textIndex++;
    if (textIndex % 3 === 0) playSound('blip');
    setTimeout(typeNextChar, typingSpeed);
  } else {
    isTyping = false;
  }
}

export function handleDialogInput() {
  if (dialogBox && dialogBox.style.display !== 'none') {
    if (isTyping) {
      isTyping = false;
      if (dialogText) dialogText.textContent = currentText;
      textIndex = currentText.length;
    } else {
      if (currentCallback) {
        const cb = currentCallback;
        currentCallback = null;
        cb();
      }
      processQueue();
    }
    return true;
  }
  return false;
}

if (dialogBox) {
  dialogBox.addEventListener('click', handleDialogInput);
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') handleDialogInput();
  });
}

