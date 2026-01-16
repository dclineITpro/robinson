import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const IowaCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-06-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const features = [
    { icon: Building2, text: '622,788 Sq. Ft. Facility' },
    { icon: MapPin, text: 'Altoona, Iowa' },
    { icon: Calendar, text: 'Opening 2027' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-robinson-blue" />
              <span className="text-white text-sm font-medium">Strategic Expansion</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6 leading-tight">
              Countdown to{' '}
              <span className="text-robinson-blue">Iowa 2027</span>
            </h2>

            <p className="text-robinson-black/80 text-lg mb-8 leading-relaxed">
              Our most ambitious project yet: a state-of-the-art 622,788 square foot 
              manufacturing facility in Altoona, Iowa. This expansion represents our 
              commitment to growth, innovation, and creating new opportunities for 
              employee-owners.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <feature.icon className="w-5 h-5 text-robinson-blue" />
                  <span className="text-robinson-black text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/locations#altoona"
              className="sparkler inline-flex items-center gap-2 px-6 py-3 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
            >
              <div className="spark-top"></div>
              <div className="spark-left"></div>
              <div className="spark-right"></div>
              <div className="spark-down"></div>
              Learn About Iowa Expansion
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right - Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-gray-300 p-8 lg:p-12">
              <h3 className="text-center text-robinson-black/60 text-sm uppercase tracking-widest mb-8">
                Grand Opening Countdown
              </h3>

              <div className="grid grid-cols-4 gap-4">
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <div className="bg-white/80 rounded-2xl p-4 lg:p-6 border border-gray-300">
                        <span className="text-3xl lg:text-5xl font-bold text-robinson-black font-mono">
                          {String(unit.value).padStart(2, '0')}
                        </span>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-safety-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-robinson-black/60 text-xs lg:text-sm uppercase tracking-wider mt-3 block">
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-10">
                <div className="flex items-center justify-between text-sm text-robinson-black/60 mb-2">
                  <span>Project Progress</span>
                  <span>Phase 2 of 4</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '45%' }}
                    viewport={{}}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-robinson-blue to-robinson-blue-light rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IowaCountdown;





