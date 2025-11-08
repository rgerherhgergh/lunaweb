// Particle Background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffff";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Discord Modal
const discordBtn = document.getElementById("discordBtn");
const discordModal = document.getElementById("discordModal");
const closeBtn = document.querySelector(".close");

discordBtn.addEventListener("click", () => {
  discordModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  discordModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === discordModal) discordModal.style.display = "none";
});

console.log("Outcast 19.10 site loaded successfully.");
