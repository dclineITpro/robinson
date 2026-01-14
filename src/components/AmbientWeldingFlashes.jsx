import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AmbientWeldingFlashes = () => {
  const [flashes, setFlashes] = useState([]);

  useEffect(() => {
    // Create random flashes occasionally
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance per interval
        const id = Date.now();
        const x = Math.random() * 100; // %
        const y = Math.random() * 100; // %
        const duration = Math.random() * 0.2 + 0.1; // Fast flash
        
        setFlashes(prev => [...prev, { id, x, y, duration }]);
        
        // Cleanup
        setTimeout(() => {
          setFlashes(prev => prev.filter(f => f.id !== id));
        }, duration * 1000 + 100);
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {flashes.map(flash => (
        <motion.div
          key={flash.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
          transition={{ duration: flash.duration, ease: "easeInOut" }}
          className="absolute rounded-full bg-blue-100 blur-[60px]"
          style={{
            left: `${flash.x}%`,
            top: `${flash.y}%`,
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,230,255,0.4) 40%, rgba(0,71,171,0.0) 70%)' // Arc welding blue-white light
          }}
        />
      ))}
    </div>
  );
};

export default AmbientWeldingFlashes;
