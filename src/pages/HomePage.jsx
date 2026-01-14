import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { 
  ArrowRight, Building2, MapPin, Users, Award, Target, Lightbulb,
  Cpu, Database, Brain, Wifi, ChevronDown, Briefcase, Heart, TrendingUp, Shield, Globe
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const robinsonStats = [
    { value: '1.4M', label: 'Sq. Ft.', desc: 'Manufacturing Space' },
    { value: '6', label: 'Locations', desc: 'Across the Midwest' },
    { value: '100%', label: 'Employee-Owned', desc: 'ESOP Company' },
    { value: 'Top 10', label: 'FAB 40', desc: 'Industry Ranking' },
  ];

  const whyRobinson = [
    {
      icon: Users,
      title: 'ESOP Culture',
      description: 'Employee ownership creates accountability and excellence at every level.',
    },
    {
      icon: Building2,
      title: 'Strategic Growth',
      description: 'The 560,000 sq. ft. Iowa expansion signals aggressive, forward-thinking leadership.',
    },
    {
      icon: Cpu,
      title: 'Technology as Core',
      description: 'IT is treated as a production enabler, not a cost center—exactly where I thrive.',
    },
    {
      icon: Heart,
      title: 'Midwestern Values',
      description: 'Reliable, hardworking, and honest—values that align with my leadership philosophy.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none" style={{
        backgroundColor: '#2a2a2a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23444;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23333;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23222;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='g2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23444;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23333;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23222;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%232a2a2a' width='80' height='80'/%3E%3Cellipse cx='20' cy='20' rx='15' ry='5' fill='url(%23g1)' transform='rotate(45 20 20)'/%3E%3Cellipse cx='60' cy='20' rx='15' ry='5' fill='url(%23g2)' transform='rotate(-45 60 20)'/%3E%3Cellipse cx='20' cy='60' rx='15' ry='5' fill='url(%23g2)' transform='rotate(-45 20 60)'/%3E%3Cellipse cx='60' cy='60' rx='15' ry='5' fill='url(%23g1)' transform='rotate(45 60 60)'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
        backgroundRepeat: 'repeat'
      }}>
        {/* Welding Effects Only */}
        <div className="absolute inset-0 overflow-hidden">
          <AmbientWeldingFlashes />
        </div>

        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/20 border border-safety-orange/50 mb-8"
          >
            <Briefcase className="w-4 h-4 text-safety-orange" />
            <span className="text-safety-orange text-sm font-medium">DJ Cline | IT Director Candidate</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Leading <span className="text-safety-orange">Robinson</span> Through Digital Transformation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            And I'm ready to lead your digital transformation.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-md text-gray-400 max-w-2xl mx-auto mb-10"
          >
            24/7 manufacturing operations across multiple facilities. Global supply chain complexity. 
            Legacy systems requiring modernization. Cybersecurity as a competitive advantage. 
            This is where I deliver results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Link
              to="/vision"
              className="px-8 py-4 bg-safety-orange text-robinson-black font-semibold rounded-lg hover:bg-safety-orange-light transition-all duration-300 hover:shadow-lg hover:shadow-safety-orange/30 flex items-center gap-2"
            >
              See My Vision for IT
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/why-robinson"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Why Robinson?
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs uppercase tracking-widest">Explore the strategy</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <WeldingSparks />
      </section>

      {/* My Track Record - Animated Counters */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-robinson-gold text-sm font-medium uppercase tracking-widest">
              My Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-robinson-blue mt-4">
              Proven Results in IT Leadership
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-robinson-bg border-2 border-robinson-gold/20 hover:border-robinson-gold hover:shadow-premium-gold transition-all duration-300"
            >
              <TrendingUp className="w-10 h-10 text-robinson-gold mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold text-robinson-blue mb-2">
                <AnimatedCounter end={25} suffix="+" duration={2} />
              </div>
              <div className="text-robinson-blue font-semibold text-lg">Years in IT</div>
              <div className="text-robinson-gray text-sm mt-1">Progressive Leadership</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-robinson-bg border-2 border-robinson-gold/20 hover:border-robinson-gold hover:shadow-premium-gold transition-all duration-300"
            >
              <Globe className="w-10 h-10 text-robinson-gold mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold text-robinson-blue mb-2">
                <AnimatedCounter end={6} duration={1.5} />
              </div>
              <div className="text-robinson-blue font-semibold text-lg">Countries</div>
              <div className="text-robinson-gray text-sm mt-1">Global IT Operations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-robinson-bg border-2 border-robinson-gold/20 hover:border-robinson-gold hover:shadow-premium-gold transition-all duration-300"
            >
              <Shield className="w-10 h-10 text-robinson-gold mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold text-robinson-blue mb-2">
                <AnimatedCounter end={0} duration={1} />
              </div>
              <div className="text-robinson-blue font-semibold text-lg">Security Incidents</div>
              <div className="text-robinson-gray text-sm mt-1">Security Excellence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-8 rounded-2xl bg-robinson-bg border-2 border-robinson-gold/20 hover:border-robinson-gold hover:shadow-premium-gold transition-all duration-300"
            >
              <Cpu className="w-10 h-10 text-robinson-gold mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold text-robinson-blue mb-2">
                24/7
              </div>
              <div className="text-robinson-blue font-semibold text-lg">Manufacturing Support</div>
              <div className="text-robinson-gray text-sm mt-1">International Operations</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Robinson Stats - Demonstrating Knowledge */}
      <section className="py-20 bg-gradient-to-br from-robinson-blue via-robinson-blue-light to-robinson-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-robinson-gold text-sm font-bold uppercase tracking-widest">
              I Know Robinson
            </span>
            <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">Understanding your business is the foundation of effective IT leadership</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {robinsonStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold text-robinson-gold mb-3">{stat.value}</div>
                <div className="text-white font-semibold text-lg">{stat.label}</div>
                <div className="text-white/70 text-sm mt-1">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity I See */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-robinson-gold/10 border-2 border-robinson-gold/30 text-robinson-gold text-sm font-bold uppercase tracking-wider mb-6">
              Strategic Alignment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-blue mb-6">
              Why <span className="text-robinson-gold">Robinson</span> is the Right Fit
            </h2>
            <p className="text-robinson-gray text-lg max-w-3xl mx-auto leading-relaxed">
              A 24/7 global manufacturer with complex supply chains, legacy systems, and ambitious growth plans. 
              This is exactly where my experience delivering results matters most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyRobinson.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-robinson-bg border-2 border-transparent hover:border-robinson-gold hover:shadow-premium-gold transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-robinson-gold/10 flex items-center justify-center mb-5 group-hover:bg-robinson-gold/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-robinson-gold" />
                </div>
                <h3 className="text-xl font-bold text-robinson-blue mb-3">{item.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Iowa Expansion - I Understand the Vision */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <MapPin className="w-4 h-4 text-safety-orange" />
                <span className="text-white text-sm font-medium">I Understand the Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Iowa Expansion Changes Everything
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                The 560,000 sq. ft. Altoona facility isn't just growth—it's a greenfield 
                opportunity to build IT infrastructure right from the start.
              </p>
              <p className="text-white/80 mb-8">
                As IT Director, I would ensure this facility launches with:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Modern ERP integration from day one',
                  'IoT-enabled predictive maintenance',
                  'Unified network architecture across all 6 sites',
                  'Scalable cloud infrastructure',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-safety-orange rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/digital-thread"
                className="inline-flex items-center gap-2 px-6 py-3 bg-safety-orange text-robinson-black font-semibold rounded-lg hover:bg-safety-orange-light transition-all duration-300"
              >
                See My Digital Thread Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
                <h3 className="text-white font-semibold mb-6 text-center">Altoona, IA - Opening 2027</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-3xl font-bold text-safety-orange">560K</div>
                    <div className="text-white/70 text-sm">Square Feet</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-3xl font-bold text-safety-orange">500+</div>
                    <div className="text-white/70 text-sm">New Jobs</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-3xl font-bold text-safety-orange">2027</div>
                    <div className="text-white/70 text-sm">Grand Opening</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-3xl font-bold text-safety-orange">6th</div>
                    <div className="text-white/70 text-sm">Location</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Three Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-gold text-sm font-medium mb-6">
              My Strategic Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Three Pillars for <span className="gradient-text-blue">Robinson's Digital Future</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'ERP Modernization',
                description: 'Unify operations across 6 locations with a modern, cloud-ready ERP platform that provides real-time visibility.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Brain,
                title: 'AI-Driven Predictive Maintenance',
                description: 'Leverage IoT sensors and machine learning to predict equipment failures before they impact production.',
                color: 'from-safety-orange to-yellow-500',
              },
              {
                icon: Wifi,
                title: 'OT/IT Convergence',
                description: 'Bridge the gap between shop floor systems and enterprise IT for seamless data flow and decision-making.',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-gold/50 transition-all duration-300 card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8 text-robinson-black" />
                </div>
                <h3 className="text-2xl font-bold text-robinson-black mb-4">{pillar.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/digital-thread"
              className="inline-flex items-center gap-2 text-safety-orange hover:text-safety-orange-light transition-colors font-medium"
            >
              Explore my complete Digital Thread strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA - Let's Talk */}
      <section className="py-24 bg-gradient-to-br from-safety-orange to-safety-orange-dark relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Ready to Discuss How I Can Help?
            </h2>
            <p className="text-robinson-gray text-lg mb-10 max-w-2xl mx-auto">
              My 25+ years leading IT through 24/7 manufacturing operations, global supply chains, 
              and legacy system modernization align directly with Robinson's challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/about-me"
                className="px-8 py-4 bg-white text-safety-orange font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                View My Background
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/vision"
                className="px-8 py-4 border-2 border-robinson-black text-robinson-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                See My Full Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;





