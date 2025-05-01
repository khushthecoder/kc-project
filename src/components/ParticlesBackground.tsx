
import { useEffect, useRef } from "react";
import "./ParticlesBackground.css";

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground = ({ className = "" }: ParticlesBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Setup canvas sizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Re-initialize particles when resizing
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse interaction
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    document.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      speed: number;
      direction: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = "#FFFFFF";
        this.speed = Math.random() * 0.2;
        this.direction = Math.random() > 0.5 ? 1 : -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Slight movement even without mouse interaction
        this.x += Math.sin(Date.now() * 0.001 * this.speed) * 0.5 * this.direction;
        this.y += Math.cos(Date.now() * 0.001 * this.speed) * 0.5 * this.direction;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            this.x -= forceDirectionX * force * this.density * 0.6;
            this.y -= forceDirectionY * force * this.density * 0.6;
          }
        }
        
        // Return to original position
        const dx = this.baseX - this.x;
        const dy = this.baseY - this.y;
        this.x += dx * 0.01;
        this.y += dy * 0.01;
        
        // Draw the particle
        this.draw();
      }
    }

    // Create particle array
    function initParticles() {
      particles = [];
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 200);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
      }
      
      // Connect particles with lines
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    }

    // Draw lines between nearby particles
    function connectParticles() {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Start the animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mouseleave", () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`particles-background ${className}`} 
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
