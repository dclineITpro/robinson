import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Scissors, Wrench, Paintbrush, Package, CheckCircle } from 'lucide-react';

const ScrollytellingSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stages = [
    {
      icon: Cpu,
      title: '3D CAD Design',
      description: 'Precision engineering starts with advanced 3D modeling and simulation.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Scissors,
      title: 'Laser Cutting',
      description: 'High-speed fiber lasers cut with micron-level precision.',
      color: 'from-robinson-blue to-yellow-500',
      bgColor: 'bg-safety-orange/10',
      borderColor: 'border-robinson-blue/30',
    },
    {
      icon: Wrench,
      title: 'Forming & Welding',
      description: 'Expert craftsmen shape and join metal with robotic precision.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: Paintbrush,
      title: 'Powder Coating',
      description: '60-foot powder coat booths deliver flawless, durable finishes.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      icon: Package,
      title: 'Assembly',
      description: 'Complete sub-assemblies ready for just-in-time delivery.',
      color: 'from-robinson-blue to-blue-400',
      bgColor: 'bg-robinson-blue/10',
      borderColor: 'border-robinson-blue/30',
    },
    {
      icon: CheckCircle,
      title: 'Quality Delivery',
      description: 'Rigorous inspection ensures every part meets Tier-1 standards.',
      color: 'from-robinson-blue to-red-500',
      bgColor: 'bg-safety-orange/10',
      borderColor: 'border-robinson-blue/30',
    },
  ];

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-safety-orange/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-robinson-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
            The Digital Thread
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
            From Concept to{' '}
            <span className="text-robinson-blue">Completion</span>
          </h2>
          <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
            Follow a metal part's journey through our integrated manufacturing process, 
            from initial CAD design to final quality inspection.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block">
            <motion.div
              style={{ height: lineProgress }}
              className="w-full bg-gradient-to-b from-robinson-blue via-robinson-blue to-robinson-blue"
            />
          </div>

          {/* Stages */}
          <div className="space-y-16 lg:space-y-24">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block p-8 rounded-2xl ${stage.bgColor} border ${stage.borderColor} backdrop-blur-sm hover-lift`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                        <stage.icon className="w-7 h-7 text-robinson-black" />
                      </div>
                      <div>
                        <span className="text-robinson-gray-light text-sm font-mono">Step {String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-2xl font-bold text-robinson-black">{stage.title}</h3>
                      </div>
                    </div>
                    <p className="text-robinson-gray leading-relaxed max-w-md">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 hidden lg:flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-robinson-black font-bold text-lg">{index + 1}</span>
                  </div>
                  {/* Pulse ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stage.color} animate-ping opacity-20`} />
                </div>

                {/* Visual placeholder */}
                <div className="flex-1">
                  <div className={`aspect-video rounded-2xl ${stage.bgColor} border ${stage.borderColor} overflow-hidden relative`}>
                    {/* Animated visual representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${stage.color} opacity-20 animate-pulse-slow`} />
                      <stage.icon className="absolute w-16 h-16 text-robinson-black/40" />
                    </div>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid-bg opacity-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;





