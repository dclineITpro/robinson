import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, Layers, Flame, Paintbrush, Cog, Package,
  ArrowRight, CheckCircle, Settings, Ruler
} from 'lucide-react';

const CapabilitiesPage = () => {
  const capabilities = [
    {
      id: 'laser',
      icon: Zap,
      title: 'Laser Cutting',
      subtitle: 'Precision at the Speed of Light',
      description: 'Our fleet of high-speed fiber lasers delivers unmatched precision and throughput for your most demanding projects.',
      features: [
        '30kW fiber laser technology',
        'Cutting up to 1.5" thick steel',
        'Micron-level precision',
        '24/7 automated production',
        'Nitrogen and oxygen cutting',
        'Large format bed sizes',
      ],
      specs: [
        { label: 'Max Power', value: '30kW' },
        { label: 'Max Thickness', value: '1.5"' },
        { label: 'Bed Size', value: '12\' x 60\'' },
        { label: 'Tolerance', value: '±0.005"' },
      ],
    },
    {
      id: 'forming',
      icon: Layers,
      title: 'Forming & Bending',
      subtitle: 'Complex Geometries, Tight Tolerances',
      description: 'CNC press brakes and roll forming equipment transform flat stock into precision-formed components.',
      features: [
        '1,000+ ton press brake capacity',
        'CNC-controlled bending',
        'Complex multi-bend parts',
        'Roll forming capabilities',
        'Custom tooling design',
        'In-process inspection',
      ],
      specs: [
        { label: 'Max Tonnage', value: '1,000T' },
        { label: 'Max Length', value: '20\'' },
        { label: 'Bend Accuracy', value: '±0.5°' },
        { label: 'Repeatability', value: '±0.002"' },
      ],
    },
    {
      id: 'welding',
      icon: Flame,
      title: 'Welding',
      subtitle: 'Structural Integrity, Expert Craftsmanship',
      description: 'AWS-certified welders and robotic welding cells deliver consistent, high-quality welds for structural and cosmetic applications.',
      features: [
        'MIG, TIG, and stick welding',
        'Robotic welding cells',
        'AWS D1.1 certified',
        'Aluminum and stainless steel',
        'Heavy structural fabrication',
        'Weld inspection & testing',
      ],
      specs: [
        { label: 'Certifications', value: 'AWS D1.1' },
        { label: 'Robot Cells', value: '12+' },
        { label: 'Max Assembly', value: '50,000 lbs' },
        { label: 'Materials', value: 'All Metals' },
      ],
    },
    {
      id: 'coating',
      icon: Paintbrush,
      title: 'Powder Coating',
      subtitle: 'Flawless Finishes, Lasting Protection',
      description: 'Our 60-foot powder coat booths with automated conveyor systems deliver consistent, durable finishes on parts of any size.',
      features: [
        '60-foot powder coat booths',
        'Automated conveyor systems',
        'Multi-stage pretreatment',
        'Custom color matching',
        'E-coat capabilities',
        'Wet paint options',
      ],
      specs: [
        { label: 'Booth Length', value: '60\'' },
        { label: 'Max Part Size', value: '12\' x 8\'' },
        { label: 'Colors', value: '1,000+' },
        { label: 'Mil Thickness', value: '2-6 mils' },
      ],
    },
    {
      id: 'assembly',
      icon: Package,
      title: 'Assembly',
      subtitle: 'Complete Solutions, Ready to Install',
      description: 'From sub-assemblies to complete products, we deliver finished goods ready for your production line.',
      features: [
        'Sub-assembly & kitting',
        'Hardware installation',
        'Electrical integration',
        'Testing & validation',
        'Custom packaging',
        'JIT delivery programs',
      ],
      specs: [
        { label: 'Assembly Lines', value: '8+' },
        { label: 'Delivery', value: 'JIT' },
        { label: 'Packaging', value: 'Custom' },
        { label: 'Testing', value: '100%' },
      ],
    },
    {
      id: 'machining',
      icon: Settings,
      title: 'Machining',
      subtitle: 'Precision Secondary Operations',
      description: 'CNC machining centers provide precision secondary operations for tight-tolerance features.',
      features: [
        'CNC milling & turning',
        'Drilling & tapping',
        'Precision boring',
        'Surface grinding',
        'Thread rolling',
        'Deburring services',
      ],
      specs: [
        { label: 'CNC Centers', value: '6+' },
        { label: 'Tolerance', value: '±0.001"' },
        { label: 'Max Diameter', value: '24"' },
        { label: 'Surface Finish', value: '32 Ra' },
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-robinson-blue/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Cog className="w-4 h-4" />
              Full-Service Fabrication
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              World-Class <span className="text-robinson-blue-blue">Capabilities</span>
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed">
              From raw material to finished product, our integrated manufacturing capabilities 
              deliver complete solutions under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                id={capability.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-safety-orange/10 flex items-center justify-center">
                      <capability.icon className="w-8 h-8 text-robinson-blue" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-robinson-black">{capability.title}</h2>
                      <p className="text-robinson-blue font-medium">{capability.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-robinson-gray text-lg mb-8 leading-relaxed">
                    {capability.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {capability.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-robinson-blue flex-shrink-0" />
                        <span className="text-robinson-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-robinson-blue text-robinson-black font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300"
                  >
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Specs Card */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-8 rounded-3xl bg-gray-50/50 border border-gray-300">
                    <h3 className="text-robinson-black font-semibold mb-6 flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-robinson-blue" />
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {capability.specs.map((spec) => (
                        <div key={spec.label} className="p-4 rounded-xl bg-white/50 border border-gray-200">
                          <div className="text-2xl font-bold text-robinson-blue mb-1">{spec.value}</div>
                          <div className="text-robinson-gray-light text-sm">{spec.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Visual placeholder */}
                    <div className="mt-8 aspect-video rounded-2xl bg-white/80 border border-gray-200 flex items-center justify-center relative overflow-hidden">
                      <capability.icon className="w-20 h-20 text-robinson-blue/20" />
                      <div className="absolute inset-0 grid-bg opacity-20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              Quality Assurance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Certified <span className="text-robinson-blue-blue">Excellence</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Our quality management systems meet the rigorous standards of Tier-1 global OEMs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cert: 'ISO 9001:2015', desc: 'Quality Management' },
              { cert: 'AWS D1.1', desc: 'Structural Welding' },
              { cert: 'IATF 16949', desc: 'Automotive Quality' },
              { cert: 'ISO 14001', desc: 'Environmental' },
            ].map((item, index) => (
              <motion.div
                key={item.cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 border border-gray-200 text-center"
              >
                <div className="text-xl font-bold text-robinson-blue mb-2">{item.cert}</div>
                <div className="text-robinson-gray-light text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Our engineering team is ready to discuss your custom fabrication needs. 
              Get a quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-robinson-blue font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/locations"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Visit a Facility
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CapabilitiesPage;






