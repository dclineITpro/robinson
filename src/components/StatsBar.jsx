import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Users, Award } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    {
      icon: Building2,
      value: 1.4,
      suffix: ' Million',
      label: 'Square Feet',
      description: 'Manufacturing Space',
    },
    {
      icon: MapPin,
      value: 6,
      suffix: '',
      label: 'Locations',
      description: 'Across the Midwest',
    },
    {
      icon: Users,
      value: 100,
      suffix: '%',
      label: 'Employee-Owned',
      description: 'ESOP Company',
    },
    {
      icon: Award,
      value: 10,
      suffix: '',
      label: 'Top 10',
      description: 'FAB 40 Ranking',
      prefix: 'Top ',
    },
  ];

  return (
    <section className="relative py-16 bg-gray-50 border-y border-gray-200">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-safety-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-robinson-blue/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-safety-orange/10 mb-4 group-hover:bg-safety-orange/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-safety-orange" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-robinson-black mb-1">
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.value === 1.4 ? (
                  <AnimatedCounter end={14} duration={2} suffix="" />
                ) : (
                  <AnimatedCounter end={stat.value} duration={2} />
                )}
                {stat.value === 1.4 ? (
                  <span className="text-2xl">.0M</span>
                ) : (
                  <span>{stat.suffix}</span>
                )}
              </div>
              <div className="text-robinson-gray font-medium">{stat.label}</div>
              <div className="text-robinson-gray-light text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;




