import React, { useEffect, useRef } from "react";
import "./Particle.css";

// Function to generate random values in a range
const rand = (low, high) => Math.random() * (high - low) + low;

// Function to generate normally distributed random values
const randomNormal = ({ mean, dev }) => {
  let r, a, n;
  do {
    r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n;
  } while (r >= 1);
  return a * Math.sqrt(-2 * Math.log(r) / r) * dev + mean;
};

const NUM_PARTICLES = window.innerWidth < 768 ? 300 : 600;
const PARTICLE_SIZE = window.innerWidth < 768 ? 0.3 : 0.5;
const SPEED = 100000;

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: NUM_PARTICLES }, createParticle);
    };

    // Create a new particle with random properties
    const createParticle = () => ({
      x: Math.random(),
      y: Math.random(),
      diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
      duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: randomNormal({ mean: 20, dev: 5 }),
      offsetY: randomNormal({ mean: 0, dev: 15 }),
      startTime: performance.now() - Math.random() * SPEED,
      colour: `rgba(255, ${randomNormal({ mean: 125, dev: 20 })}, 50, ${Math.random()})`,
    });

    // Function to move particle positions over time
    const moveParticle = (particle, time) => {
      const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
      return {
        ...particle,
        x: progress,
        y: Math.sin(progress * Math.PI * 2) * particle.amplitude + particle.offsetY,
      };
    };

    // Function to draw individual particles
    const drawParticle = (particle) => {
      ctx.fillStyle = particle.colour;
      ctx.beginPath();
      ctx.arc(
        particle.x * canvas.width,
        particle.y * canvas.height,
        particle.diameter * (canvas.height / 100),
        0,
        2 * Math.PI
      );
      ctx.fill();
    };

    // Function to update animation
    const draw = (time) => {
      particles.forEach((p, i) => {
        particles[i] = moveParticle(p, time);
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(drawParticle);
      requestAnimationFrame(draw);
    };

    // Initialize particles and start animation
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    requestAnimationFrame(draw);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>

        <canvas ref={canvasRef} id="particle-canvas" className=" relative"></canvas>
        <div> <h1 className=" text-white text-5xl mt-[200px]">
            
            </h1></div>
    </div>
);
};

export default ParticleBackground;
