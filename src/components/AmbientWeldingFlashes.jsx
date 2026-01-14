import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AmbientWeldingFlashes = () => {
  const [flashes, setFlashes] = useState([]);
  const lastMoveTimeRef = useRef(Date.now());
  const mousePositionRef = useRef({ x: 50, y: 50 }); // Store mouse position as percentage
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInBounds = e.clientX >= rect.left && e.clientX <= rect.right && 
                         e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (!isInBounds) return;
      
      // Store mouse position as percentage of container
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      mousePositionRef.current = { x: xPercent, y: yPercent };
      
      lastMoveTimeRef.current = Date.now();
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Create flashes only if mouse has moved recently
    const interval = setInterval(() => {
      const timeSinceMove = Date.now() - lastMoveTimeRef.current;
      
      // Only create flashes if mouse moved in last 200ms
      if (timeSinceMove < 200 && Math.random() > 0.4) { // Increased frequency (was 0.7, now 0.4)
        const id = Date.now() + Math.random();
        
        // Spawn flash near mouse position with some randomness
        const offsetX = (Math.random() - 0.5) * 20; // Random offset ±10%
        const offsetY = (Math.random() - 0.5) * 20; // Random offset ±10%
        const x = Math.max(0, Math.min(100, mousePositionRef.current.x + offsetX));
        const y = Math.max(0, Math.min(100, mousePositionRef.current.y + offsetY));
        const duration = Math.random() * 0.2 + 0.1; // Fast flash
        
        setFlashes(prev => [...prev, { id, x, y, duration }]);
        
        // Cleanup
        setTimeout(() => {
          setFlashes(prev => prev.filter(f => f.id !== id));
        }, duration * 1000 + 100);
      }
    }, 80); // Check very frequently for more flashes

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {flashes.map(flash => (
        <motion.div
          key={flash.id}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 1, 0], scale: [0.3, 1.8, 2.5] }}
          transition={{ duration: flash.duration, ease: "easeInOut" }}
          className="absolute rounded-full blur-[80px]"
          style={{
            left: `${flash.x}%`,
            top: `${flash.y}%`,
            width: '400px',
            height: '400px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 10%, rgba(200,240,255,0.8) 30%, rgba(150,200,255,0.4) 50%, rgba(0,71,171,0.1) 70%, transparent 100%)', // Intense welding arc light
            boxShadow: '0 0 100px 40px rgba(255,255,255,0.8), 0 0 200px 80px rgba(200,230,255,0.6)'
          }}
        />
      ))}
    </div>
  );
};

export default AmbientWeldingFlashes;
