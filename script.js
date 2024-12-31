// Matrix background effect
function createMatrixBackground() {
  const canvas = document.createElement('canvas');
  canvas.classList.add('matrix-bg');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const fontSize = 10;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
          }
          drops[i]++;
      }
  }

  setInterval(draw, 33);
}

// Cube rotation control
document.addEventListener('DOMContentLoaded', () => {
  createMatrixBackground();

  const cube = document.querySelector('.cube');
  let isRotating = true;
  let rotationY = 0;
  let targetRotationY = 0;

  document.querySelectorAll('.button').forEach((button, index) => {
      button.addEventListener('click', () => {
          targetRotationY = index * 90;
          isRotating = false;
          cube.style.animation = 'none';
          cube.style.transform = `rotateY(${targetRotationY}deg)`;
      });
  });

  cube.addEventListener('click', () => {
      isRotating = !isRotating;
      if (isRotating) {
          cube.style.animation = 'rotate 20s infinite linear';
      } else {
          cube.style.animation = 'none';
      }
  });
});

// Glitch effect for cyber text
function addGlitchEffect() {
  const cyberTexts = document.querySelectorAll('.cyber-text');
  
  cyberTexts.forEach(text => {
      setInterval(() => {
          if (Math.random() > 0.99) {
              text.style.textShadow = `
                  ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 30}px var(--cyber-blue),
                  ${Math.random() * -10}px ${Math.random() * 10}px ${Math.random() * 30}px var(--cyber-pink)
              `;
              setTimeout(() => {
                  text.style.textShadow = '0 0 20px var(--cyber-blue)';
              }, 50);
          }
      }, 50);
  });
}

addGlitchEffect();