const ballContainer = document.getElementById('ball-container');

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // Randomize ball properties
  const size = Math.random() * 50 + 10;
  let x = Math.random() * (window.innerWidth - size);
  let y = Math.random() * (window.innerHeight - size);
  let dx = Math.random() * 2 - 1;
  let dy = Math.random() * 2 - 1;

  // Generate random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;

  ball.style.width = size + 'px';
  ball.style.height = size + 'px';
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  ball.style.backgroundColor = color;

  ballContainer.appendChild(ball);

  function animateBall() {
    x += dx;
    y += dy;
  
    if (x + size > window.innerWidth || x < 0) {
      dx *= -1;
    }
    if (y + size > window.innerHeight || y < 0) {
      dy *= -1;
    }
  
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
  
    requestAnimationFrame(animateBall);
  }

  animateBall();
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
  
    // Randomize star properties
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
  
    ballContainer.appendChild(star);
  }
  
  // Create multiple stars
  for (let i = 0; i < 100; i++) {
    createStar();
  }

for (let step = 0; step < 100; step++) {
    createBall();
  }

// setInterval(createBall, 500);