import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { 
  Cpu, Database, Shield, Wifi, Brain, Cog, 
  Server, Cloud, Lock, TrendingUp, Users, GraduationCap,
  ArrowRight, CheckCircle, Zap
} from 'lucide-react';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';

const TechnologyPage = () => {
  const heroRef = useRef(null);
  const digitalThreadPillars = [
    {
      icon: Database,
      title: 'ERP Modernization',
      description: 'Next-generation enterprise resource planning driving real-time visibility across all operations.',
      features: [
        'Real-time production tracking',
        'Integrated supply chain management',
        'Automated scheduling & capacity planning',
        'Advanced analytics & reporting',
      ],
    },
    {
      icon: Brain,
      title: 'AI-Driven Predictive Maintenance',
      description: 'Machine learning algorithms predicting equipment needs before failures occur.',
      features: [
        'IoT sensor integration',
        'Predictive failure analysis',
        'Automated maintenance scheduling',
        'Equipment lifecycle optimization',
      ],
    },
    {
      icon: Wifi,
      title: 'OT/IT Convergence',
      description: 'Seamless integration of operational technology with information systems.',
      features: [
        'Unified data architecture',
        'Edge computing deployment',
        'Real-time machine connectivity',
        'Secure industrial networks',
      ],
    },
  ];

  const techStack = [
    { icon: Server, name: 'Modern ERP', desc: 'Cloud-native enterprise systems' },
    { icon: Cloud, name: 'Hybrid Cloud', desc: 'Scalable infrastructure' },
    { icon: Lock, name: 'Cybersecurity', desc: 'Zero-trust architecture' },
    { icon: Cpu, name: 'Edge Computing', desc: 'Real-time processing' },
    { icon: Brain, name: 'AI/ML', desc: 'Intelligent automation' },
    { icon: Database, name: 'Data Analytics', desc: 'Business intelligence' },
  ];

  const itRoles = [
    {
      title: 'IT Director',
      description: 'Lead digital transformation across 5 Wisconsin locations and the upcoming Iowa expansion (1.4M sq. ft. total).',
      highlights: ['Strategic leadership', 'Team development', 'Vendor management', 'Budget oversight'],
    },
    {
      title: 'Systems Administrator',
      description: 'Manage hybrid cloud infrastructure supporting mission-critical manufacturing operations.',
      highlights: ['Infrastructure management', 'Security operations', 'Disaster recovery', 'Performance optimization'],
    },
    {
      title: 'OT/IT Integration Specialist',
      description: 'Bridge the gap between shop floor systems and enterprise IT infrastructure.',
      highlights: ['PLC/SCADA integration', 'Industrial networking', 'Data acquisition', 'Process automation'],
    },
  ];

  return (
    <main>
      {/* Hero Section with Welding Effects */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden cursor-none" style={{
        backgroundColor: '#2a2a2a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23444;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23333;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23222;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='g2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23444;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23333;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23222;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%232a2a2a' width='80' height='80'/%3E%3Cellipse cx='20' cy='20' rx='15' ry='5' fill='url(%23g1)' transform='rotate(45 20 20)'/%3E%3Cellipse cx='60' cy='20' rx='15' ry='5' fill='url(%23g2)' transform='rotate(-45 60 20)'/%3E%3Cellipse cx='20' cy='60' rx='15' ry='5' fill='url(%23g2)' transform='rotate(-45 20 60)'/%3E%3Cellipse cx='60' cy='60' rx='15' ry='5' fill='url(%23g1)' transform='rotate(45 60 60)'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'repeat'
      }}>
        <div className="absolute inset-0 overflow-hidden">
          <AmbientWeldingFlashes />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Technology & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Leveraging cutting-edge technology to drive operational excellence and competitive advantage.
          </motion.p>
        </div>
        
        <WeldingSparks />
      </section>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-robinson-blue/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-safety-orange/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-black text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              Technology & Innovation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              The <span className="text-robinson-blue-blue">Digital Thread</span> of Modern Manufacturing
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed mb-8">
              At Robinson, technology isn't a back-office expense—it's a core production tool. 
              We're building the manufacturing infrastructure of tomorrow, today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/careers"
                className="px-6 py-3 bg-robinson-blue text-white font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300 flex items-center gap-2"
              >
                View IT Careers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-white/20 text-robinson-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Thread Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              Strategic Initiatives
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Three Pillars of <span className="text-robinson-blue">Digital Excellence</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Our technology roadmap focuses on three interconnected initiatives that drive 
              operational excellence and competitive advantage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {digitalThreadPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-blue/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-robinson-blue/10 flex items-center justify-center mb-6 group-hover:bg-robinson-blue/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-robinson-blue" />
                </div>
                <h3 className="text-2xl font-bold text-robinson-black mb-4">{pillar.title}</h3>
                <p className="text-robinson-gray mb-6 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-robinson-gray">
                      <CheckCircle className="w-5 h-5 text-robinson-blue flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Robinson Training Academy */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <GraduationCap className="w-4 h-4 text-robinson-blue" />
                <span className="text-white text-sm font-medium">Robinson Training Academy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tech-Enablement Hub
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                The Robinson Training Academy (RTA) isn't just about manufacturing skills—it's 
                a comprehensive tech-enablement center where our employee-owners learn to leverage 
                cutting-edge tools and systems.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Annual Training Hours', value: '40,000+' },
                  { label: 'Certifications Offered', value: '50+' },
                  { label: 'Tech Courses', value: '25+' },
                  { label: 'Completion Rate', value: '94%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-gray-50 border-gray-200">
                    <div className="text-3xl font-bold text-robinson-blue mb-1">{stat.value}</div>
                    <div className="text-robinson-gray/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/careers#rta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-robinson-blue text-white font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300"
              >
                Explore RTA Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gray-50 backdrop-blur-xl border border-white/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { icon: Cpu, label: 'ERP Training' },
                    { icon: Shield, label: 'Cybersecurity' },
                    { icon: Cog, label: 'Automation' },
                    { icon: TrendingUp, label: 'Data Analytics' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="aspect-square rounded-2xl bg-gray-100 flex flex-col items-center justify-center gap-3 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <item.icon className="w-10 h-10 text-robinson-blue" />
                      <span className="text-robinson-black text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Our Technology Stack
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Modern infrastructure powering 1.4 million square feet of advanced manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gray-50/50 border border-gray-200 text-center hover:border-robinson-blue/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-safety-orange/20 transition-colors">
                  <tech.icon className="w-7 h-7 text-robinson-blue" />
                </div>
                <h3 className="text-robinson-black font-semibold mb-1">{tech.name}</h3>
                <p className="text-robinson-gray text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Career Opportunities */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Join Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Career Opportunities
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto">
              Lead digital transformation at a company where technology drives production excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {itRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/10 border border-white/15 shadow-xl shadow-black/20 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {role.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {role.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full bg-white/15 text-white/85 text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                >
                  View Position
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 p-8 lg:p-12 rounded-3xl bg-white/10 border border-white/20 text-center shadow-2xl shadow-black/25"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technology Meets Ownership
            </h3>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              As an employee-owner, you'll have a direct stake in the technology initiatives you lead. 
              Your innovations drive company value—and your ESOP account.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300 shadow-lg shadow-black/20"
            >
              Explore IT Careers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;






