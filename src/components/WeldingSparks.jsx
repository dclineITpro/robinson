import { useEffect, useRef, useState } from 'react';

const WeldingSparks = () => {
  const canvasRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let sparks = [];
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let moveTimeout;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createSpark = (x, y, velocityMult = 1) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 * velocityMult + 2;
      
      // Welding colors: White -> Yellow -> Orange -> Red
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.02,
        gravity: 0.3,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#FFFFFF' : '#D4AF37' // White or Robinson Gold
      };
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only generate sparks if moving fast enough or explicitly active
      if (distance > 2) {
        setIsActive(true);
        isMoving = true;
        
        // Generate sparks based on movement speed
        const sparkCount = Math.min(Math.floor(distance / 2), 5);
        for (let i = 0; i < sparkCount; i++) {
          sparks.push(createSpark(mouseX, mouseY));
        }
      }

      lastX = mouseX;
      lastY = mouseY;
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw torch tip (cursor) if active
      if (isActive && mouseX !== 0 && mouseY !== 0) {
        // Core
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.4)'; // Robinson Gold glow
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 71, 171, 0.2)'; // Robinson Blue outer glow
        ctx.fill();
      }

      // Occasional random "pop" spark even when not moving if hovering
      if (!isMoving && Math.random() > 0.95 && isActive) {
        sparks.push(createSpark(mouseX, mouseY, 0.5));
      }

      for (let i = 0; i < sparks.length; i++) {
        const spark = sparks[i];
        
        // Update physics
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += spark.gravity; // Apply gravity
        spark.life -= spark.decay;
        
        // Render
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size * spark.life, 0, Math.PI * 2);
        
        // Color transition based on life
        if (spark.life > 0.7) {
          ctx.fillStyle = '#FFFFFF'; // Hot white
        } else if (spark.life > 0.4) {
          ctx.fillStyle = '#FFFF00'; // Yellow
        } else {
          ctx.fillStyle = '#FF4500'; // Orange/Red cooling
        }
        
        ctx.fill();
        
        // Remove dead sparks
        if (spark.life <= 0 || spark.y > canvas.height) {
          sparks.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseenter', () => setIsActive(true));
      parent.addEventListener('mouseleave', () => setIsActive(false));
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseenter', () => setIsActive(true));
        parent.removeEventListener('mouseleave', () => setIsActive(false));
      }
      cancelAnimationFrame(animationFrameId);
      clearTimeout(moveTimeout);
    };
  }, [isActive]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default WeldingSparks;
