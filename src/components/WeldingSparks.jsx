import { useEffect, useRef } from 'react';

const WeldingSparks = () => {
  const canvasRef = useRef(null);
  const isActiveRef = useRef(false);
  const boundsRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let sparks = [];
    let slagTrail = []; // Welding slag trail
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let moveTimeout;

    const updateBounds = () => {
      boundsRef.current = canvas.getBoundingClientRect();
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        updateBounds();
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Update bounds periodically to handle any layout changes
    const boundsInterval = setInterval(updateBounds, 100);

    const createSpark = (x, y, velocityMult = 1) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 8 * velocityMult + 2) * 2;
      
      // Welding colors: White -> Yellow -> Orange -> Red
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.125,
        decay: Math.random() * 0.03 + 0.02,
        gravity: 0.05,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#FFFFFF' : '#D4AF37' // White or Robinson Gold
      };
    };

    const handleMouseMove = (e) => {
      if (!boundsRef.current) {
        updateBounds();
        if (!boundsRef.current) return;
      }
      
      const rect = boundsRef.current;
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      // Check if mouse is within canvas bounds
      const isInBounds = newX >= 0 && newX <= rect.width && newY >= 0 && newY <= rect.height;
      
      if (!isInBounds) {
        isActiveRef.current = false;
        return;
      }
      
      const dx = newX - lastX;
      const dy = newY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Always update mouse position when in bounds
      mouseX = newX;
      mouseY = newY;
      
      // Always mark as active when mouse moves in bounds
      isActiveRef.current = true;
      
      // Add to slag trail if moving
      if (distance > 1) {
        isMoving = true;
        
        // Add slag trail point
        slagTrail.push({
          x: mouseX,
          y: mouseY,
          age: 0, // Track age instead of life for consistent color progression
          maxAge: 300, // Frames to live (about 5 seconds at 60fps) - ensures all phases are visible
          size: 15
        });
        
        // Generate sparks based on movement speed - more frequent
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
      
      // Add idle sparking even when mouse is not moving
      if (isActiveRef.current && Math.random() > 0.7) {
        sparks.push(createSpark(mouseX, mouseY, 0.5));
      }
      
      // Draw slag trail (welding residue)
      for (let i = 0; i < slagTrail.length; i++) {
        const slag = slagTrail[i];
        
        // Update age
        slag.age++;
        
        if (slag.age < slag.maxAge) {
          // Calculate life percentage (1.0 = new, 0.0 = old)
          const lifePercent = 1 - (slag.age / slag.maxAge);
          
          // Size shrinks as it cools
          const radius = Math.max(0.5, slag.size * (0.5 + lifePercent * 0.5));
          ctx.beginPath();
          ctx.arc(slag.x, slag.y, radius, 0, Math.PI * 2);
          
          // Gradient cooling from white hot to orange to dark gray
          const agePercent = slag.age / slag.maxAge;
          
          // Define color stops
          const white = [255, 255, 255];
          const orange = [255, 140, 0];
          const darkGray = [40, 40, 40];
          
          let r, g, b;
          if (agePercent <= 0.1) {
            const t = agePercent / 0.1;
            r = white[0] + t * (orange[0] - white[0]);
            g = white[1] + t * (orange[1] - white[1]);
            b = white[2] + t * (orange[2] - white[2]);
          } else if (agePercent <= 0.4) {
            const t = (agePercent - 0.1) / 0.3;
            r = orange[0] + t * (darkGray[0] - orange[0]);
            g = orange[1] + t * (darkGray[1] - orange[1]);
            b = orange[2] + t * (darkGray[2] - orange[2]);
          } else {
            const t = (agePercent - 0.4) / 0.6;
            r = darkGray[0];
            g = darkGray[1];
            b = darkGray[2];
          }
          
          // Alpha fades linearly
          const alpha = 0.9 - agePercent * 0.5; // 0.9 to 0.4
          
          ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
          
          // Shadow - less for orange, more for gray
          if (agePercent < 0.4) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.6)`;
          } else {
            ctx.shadowBlur = 6;
            ctx.shadowColor = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.6)`;
          }
          
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow
        } else {
          // Remove old slag
          slagTrail.splice(i, 1);
          i--;
        }
      }
      
      // Draw torch tip (cursor) if active
      if (isActiveRef.current && mouseX !== 0 && mouseY !== 0) {
        // Stronger glow with shadow
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        
        // Core - bright white
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset shadow
        
        // Inner Glow - white
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
        
        // Outer Glow - white
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 17, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }

      // Occasional random "pop" spark even when not moving if hovering
      if (!isMoving && Math.random() > 0.95 && isActiveRef.current) {
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
        const sparkRadius = Math.max(0.1, spark.size * spark.life);
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, sparkRadius, 0, Math.PI * 2);
        
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

    // Use document-level listener to ensure it never stops
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(moveTimeout);
      clearInterval(boundsInterval);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-5 pointer-events-none"
    />
  );
};

export default WeldingSparks;
