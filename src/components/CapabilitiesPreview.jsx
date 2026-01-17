import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Layers, Flame, Paintbrush, Cog, ArrowRight } from 'lucide-react';

const CapabilitiesPreview = () => {
  const capabilities = [
    {
      icon: Zap,
      title: 'Laser Cutting',
      description: 'High-speed fiber lasers with 30kW power for precision cutting up to 1.5" thick steel.',
      stats: '30kW Fiber Lasers',
      link: '/capabilities#laser',
    },
    {
      icon: Layers,
      title: 'Forming & Bending',
      description: 'CNC press brakes and roll forming for complex geometries and tight tolerances.',
      stats: '1,000+ Ton Capacity',
      link: '/capabilities#forming',
    },
    {
      icon: Flame,
      title: 'Welding',
      description: 'Robotic and manual welding with AWS-certified craftsmen for structural integrity.',
      stats: 'AWS Certified',
      link: '/capabilities#welding',
    },
    {
      icon: Paintbrush,
      title: 'Powder Coating',
      description: '60-foot powder coat booths with automated conveyor systems for flawless finishes.',
      stats: '60-Foot Booths',
      link: '/capabilities#coating',
    },
    {
      icon: Cog,
      title: 'Assembly',
      description: 'Complete sub-assembly and kitting services for just-in-time delivery.',
      stats: 'JIT Delivery',
      link: '/capabilities#assembly',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-safety-orange/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-robinson-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              World-Class Manufacturing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-4">
              Our <span className="text-robinson-blue">Capabilities</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-xl">
              Integrated manufacturing solutions from raw material to finished product, 
              all under one roof.
            </p>
          </div>
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 text-robinson-blue hover:text-robinson-blue-light transition-colors font-medium"
          >
            View All Capabilities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={capability.link}
                className="block h-full p-8 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-blue/30 transition-all duration-300 hover-lift group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center group-hover:bg-safety-orange/20 transition-colors">
                    <capability.icon className="w-7 h-7 text-robinson-blue" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-robinson-gray text-xs font-medium">
                    {capability.stats}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-robinson-black mb-3 group-hover:text-robinson-blue transition-colors">
                  {capability.title}
                </h3>
                <p className="text-robinson-gray leading-relaxed">
                  {capability.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-robinson-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-robinson-blue/20 to-robinson-blue/5 border border-robinson-blue/30 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-robinson-black mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-robinson-gray mb-6">
                Our engineering team is ready to discuss your custom fabrication needs.
              </p>
              <Link
                to="/contact"
                className="sparkler inline-flex items-center justify-center gap-2 px-6 py-3 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
              >
                <div className="spark-top"></div>
                <div className="spark-left"></div>
                <div className="spark-right"></div>
                <div className="spark-down"></div>
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPreview;





