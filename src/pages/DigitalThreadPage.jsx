import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';
import { 
  Database, Brain, Wifi, Server, Cloud, Lock, Cpu, Cog, Shield,
  ArrowRight, CheckCircle, TrendingUp, Zap, Layers, Settings
} from 'lucide-react';

const DigitalThreadPage = () => {
  const heroRef = useRef(null);
  const digitalThreadPillars = [
    {
      icon: Database,
      title: 'ERP Modernization',
      color: 'from-blue-500 to-cyan-500',
      challenge: 'Multiple locations with potentially disparate systems create data silos and inefficiencies.',
      solution: 'Implement a unified, cloud-ready ERP platform that provides real-time visibility across all operations.',
      benefits: [
        'Single source of truth for all operations',
        'Real-time production tracking and scheduling',
        'Integrated supply chain management',
        'Automated reporting and analytics',
        'Scalable for Iowa expansion',
      ],
      technologies: ['Legacy system integration', 'Cloud-native architecture', 'API-first integration'],
    },
    {
      icon: Brain,
      title: 'AI-Driven Predictive Maintenance',
      color: 'from-green-500 to-emerald-500',
      challenge: 'Unplanned equipment downtime disrupts production schedules and impacts Tier-1 client deliveries.',
      solution: 'Deploy IoT sensors and machine learning algorithms to predict equipment failures before they occur.',
      benefits: [
        'Reduce unplanned downtime by 30%+',
        'Extend equipment lifespan',
        'Optimize maintenance schedules',
        'Lower maintenance costs',
        'Improve production reliability',
      ],
      technologies: ['Azure IoT Hub / AWS IoT', 'Machine Learning models', 'Edge computing for real-time analysis'],
    },
    {
      icon: Wifi,
      title: 'OT/IT Convergence',
      color: 'from-purple-500 to-pink-500',
      challenge: 'Shop floor operational technology (OT) is often disconnected from enterprise IT systems.',
      solution: 'Create a unified data architecture that bridges PLCs, SCADA systems, and enterprise applications.',
      benefits: [
        'Real-time production visibility',
        'Automated quality tracking',
        'Seamless data flow from machine to ERP',
        'Enhanced decision-making',
        'Foundation for Industry 4.0',
      ],
      technologies: ['Industrial Ethernet/OPC-UA', 'Edge gateways', 'Unified namespace architecture'],
    },
  ];

  const iowaITBlueprint = [
    {
      category: 'Network Infrastructure',
      items: [
        'High-speed fiber backbone connecting to De Pere HQ',
        'Redundant WAN connections for business continuity',
        'Segmented network for IT/OT separation',
        'Wi-Fi 6E throughout facility',
      ],
    },
    {
      category: 'Data Center & Cloud',
      items: [
        'Hybrid cloud architecture (on-prem + Azure/AWS)',
        'Edge computing for latency-sensitive operations',
        'Disaster recovery to Wisconsin facilities',
        'Scalable infrastructure for future growth',
      ],
    },
    {
      category: 'Manufacturing Systems',
      items: [
        'ERP integration from day one',
        'MES (Manufacturing Execution System)',
        'IoT sensors on all major equipment',
        'Digital work instructions at every station',
      ],
    },
    {
      category: 'Security',
      items: [
        'Zero-trust network architecture',
        'Industrial firewall between IT/OT',
        'Security Operations Center (SOC) monitoring',
        '24/7 threat detection and response',
      ],
    },
  ];

  const rtaTechCurriculum = [
    { course: 'ERP Fundamentals', audience: 'All employees', duration: '8 hours' },
    { course: 'Digital Work Instructions', audience: 'Production', duration: '4 hours' },
    { course: 'Data Analytics Basics', audience: 'Supervisors', duration: '16 hours' },
    { course: 'Cybersecurity Awareness', audience: 'All employees', duration: '2 hours' },
    { course: 'IoT & Predictive Maintenance', audience: 'Maintenance', duration: '24 hours' },
    { course: 'Advanced Reporting', audience: 'Management', duration: '8 hours' },
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-shadow"
          >
            The Digital Thread Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed text-shadow"
          >
            Connecting design, manufacturing, and delivery through integrated technology systems.
          </motion.p>

          {/* Hero CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Link
              to="/about-me"
              className="sparkler px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300"
            >
              <div className="spark-left"></div>
              <div className="spark-right"></div>
              <div className="spark-down"></div>
              Meet DJ Cline
            </Link>
          </motion.div>
        </div>
        
        <WeldingSparks />
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              Technical Deep Dive
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              The <span className="text-robinson-blue">Digital Thread</span> Strategy
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed">
              A comprehensive technical strategy connecting every aspect of Robinson's 
              operations—from CAD design to the 60-foot powder coat booth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Deep Dive */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Three Pillars of <span className="text-white">Digital Excellence</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Each pillar addresses a critical business need while building toward 
              a fully integrated digital manufacturing environment.
            </p>
          </motion.div>

          <div className="space-y-16">
            {digitalThreadPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                      <pillar.icon className="w-8 h-8 text-robinson-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">The Challenge</h4>
                    <p className="text-white/80">{pillar.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">My Solution</h4>
                    <p className="text-white/80">{pillar.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {pillar.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`p-8 rounded-2xl bg-white border border-robinson-blue/20 drop-shadow-lg hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-robinson-blue font-semibold mb-4">Business Benefits</h4>
                  <ul className="space-y-3">
                    {pillar.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-robinson-gray">
                        <CheckCircle className="w-5 h-5 text-robinson-blue flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Iowa IT Blueprint */}
      <section className="py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Greenfield Opportunity
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Iowa Facility IT Blueprint
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              The 560,000 sq. ft. Altoona facility is a once-in-a-career opportunity 
              to build IT infrastructure right from the start.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {iowaITBlueprint.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-robinson-blue/20 drop-shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-robinson-blue mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-robinson-gray text-sm">
                      <div className="w-1.5 h-1.5 bg-robinson-blue rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-robinson-blue text-white drop-shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">The Advantage of Greenfield</h3>
            <p className="text-white/80 max-w-3xl mx-auto">
              Unlike retrofitting existing facilities, Iowa gives us the opportunity to implement 
              best practices from day one—no legacy constraints, no technical debt, just 
              modern, scalable infrastructure designed for the next 20 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Robinson Training Academy */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium mb-6">
                <Settings className="w-4 h-4" />
                Tech Enablement
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Robinson Training Academy: <span className="text-white">Tech Curriculum</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                The RTA is already a cornerstone of Robinson's culture. I would expand it 
                to include technology training that empowers every employee-owner to 
                leverage new digital tools.
              </p>
              <p className="text-white/80 mb-6">
                Proposed technology courses for the RTA:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-white text-robinson-blue shadow-lg drop-shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                <div className="space-y-3">
                  {rtaTechCurriculum.map((course) => (
                    <div
                      key={course.course}
                      className="flex items-center justify-between p-4 rounded-xl bg-robinson-blue/10"
                    >
                      <div>
                        <div className="font-medium text-robinson-blue">{course.course}</div>
                        <div className="text-robinson-gray text-sm">{course.audience}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Lock className="w-4 h-4 inline mr-2" />
              Critical Priority
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Cybersecurity is Non-Negotiable
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              In manufacturing, a security breach can halt production. With Tier-1 clients 
              like Rolls-Royce, security isn't optional—it's a competitive requirement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Lock, title: 'Zero Trust', desc: 'Verify every access request' },
              { icon: Shield, title: 'OT Security', desc: 'Protect manufacturing systems' },
              { icon: Server, title: 'SOC Monitoring', desc: '24/7 threat detection' },
              { icon: Cloud, title: 'Secure Cloud', desc: 'Encrypted data at rest & transit' },
              { icon: Brain, title: 'AI Data Privacy & Controls', desc: 'Secure AI training data and inference controls' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-robinson-blue text-white shadow-lg drop-shadow-lg hover:shadow-xl hover:drop-shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/85 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make This Real?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              This strategy is based on my research and experience. I'd love to 
              discuss how to adapt it to Robinson's specific needs and priorities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/about-me"
                className="sparkler px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300 flex items-center gap-2"
              >
                See My Background
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DigitalThreadPage;






