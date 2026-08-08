import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Cursor spotlight effect (desktop only, respects prefers-reduced-motion)
const mq = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
if (mq.matches) {
  let raf: number;
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = () => {
    currentX = lerp(currentX, targetX, 0.12);
    currentY = lerp(currentY, targetY, 0.12);
    document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
