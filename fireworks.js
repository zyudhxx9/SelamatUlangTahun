const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
const textOverlay = document.getElementById('textOverlay');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let textDisplayed = false; // Flag untuk melacak apakah teks sudah ditampilkan

class Firework {
    constructor(x, y, text) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.exploded = false;
        this.particles = [];
        this.text = text;
        this.createParticles();
    }

    createParticles() {
        const particleCount = Math.random() * 100 + 50;
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const speed = Math.random() * 3 + 1;
            this.particles.push({
                x: this.x,
                y: this.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 3 + 1,
                life: Math.random() * 100 + 50,
                color: this.color
            });
        }
        this.exploded = true;
    }

    update() {
        if (this.exploded) {
            this.particles.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life--;
                if (particle.life <= 0) {
                    this.particles.splice(index, 1);
                }
            });
        }
    }

    draw() {
        if (this.exploded) {
            this.particles.forEach(particle => {
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }
}

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2; // Mulai dari setengah atas
    fireworks.push(new Firework(x, y, "SELAMAT TAHUN BARU!"));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.particles.length === 0) {
            fireworks.splice(index, 1);
            if (!textDisplayed) {
                textDisplayed = true; // Set flag ke true
                textOverlay.style.opacity = 1; // Tampilkan teks
            }
        }
    });
    requestAnimationFrame(animate);
}

setInterval(createFirework, 500);
animate();