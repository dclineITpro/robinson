import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { 
  Users, Building2, TrendingUp, Award, Heart, Target,
  ArrowRight, CheckCircle, MapPin, Zap, Shield, Sparkles, ChevronDown
} from 'lucide-react';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';

const WhyRobinsonPage = () => {
  const heroRef = useRef(null);
  const companyResearch = [
    {
      category: 'Company Profile',
      items: [
        { label: 'Founded', value: '1975 (De Pere, WI)' },
        { label: 'Ownership', value: '100% Employee-Owned (ESOP)' },
        { label: 'Industry', value: 'Custom Metal Fabrication' },
        { label: 'Ranking', value: 'FAB 40 Top 10' },
        { label: 'Award Finalist', value: '2026 Wisconsin Manufacturer of the Year' },
      ],
    },
    {
      category: 'Scale & Capacity',
      items: [
        { label: 'Total Footprint', value: '~1.4 Million Sq. Ft.' },
        { label: 'Locations', value: '5 WI Locations + IA Expansion' },
        { label: 'States', value: 'Wisconsin (current) & Iowa (2027)' },
        { label: 'Expansion', value: 'Altoona, IA — 622,788 Sq. Ft. (2027)' },
        { label: 'Employees', value: '500+' },
      ],
    },
  ];

  const locations = [
    { name: 'De Pere Headquarters', type: 'Corporate/Administrative', sqft: '51,000', address: '1580 Mid Valley Dr (Acquired 2025)' },
    { name: 'De Pere Facility 1', type: 'Heavy Manufacturing & Main Logistics', sqft: '220,000', address: '1740 Eisenhower Rd' },
    { name: 'De Pere Facility 2', type: 'Dedicated Coatings and Painting', sqft: '180,000', address: '2107 American Blvd' },
    { name: 'De Pere Facility 3', type: 'Fabrication and Assembly', sqft: '240,000', address: '2121 American Blvd' },
    { name: 'Manitowoc Campus', type: 'Specialized Welding and Integration', sqft: '137,000', address: '2121 South 30th Street' },
    { name: 'Altoona, IA (2027)', type: 'Production Facility', sqft: '622,788', isNew: true, address: 'Coming Soon' },
  ];

  const whyThisRole = [
    {
      icon: Building2,
      title: 'Greenfield IT Opportunity',
      description: 'The Iowa expansion offers a rare chance to build IT infrastructure from scratch—implementing best practices without legacy constraints.',
    },
    {
      icon: Users,
      title: 'ESOP Culture Alignment',
      description: 'Employee ownership creates a culture of accountability. As an IT leader, I can drive initiatives knowing every employee has skin in the game.',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Stage Company',
      description: 'Robinson is actively expanding, which means technology investments will be prioritized and supported by leadership.',
    },
    {
      icon: Target,
      title: 'Technology as Production Tool',
      description: 'The IT Director role here treats technology as a core production enabler—not a cost center to be minimized.',
    },
    {
      icon: Award,
      title: 'Tier-1 Client Standards',
      description: 'Serving clients like Rolls-Royce requires world-class systems. This is the level of challenge I seek.',
    },
    {
      icon: Heart,
      title: 'Midwestern Values',
      description: 'Reliable, hardworking, and honest. These values resonate with my leadership philosophy and work ethic.',
    },
  ];

  const tierOneClients = [
    'Energy',
    'Power Generation',
    'Food & Beverage',
    'Heavy Equipment',
    'Pulp & Paper',
    'Oil & Gas',
    'Military & Defense',
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-base font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            DJ Cline - IT Director Candidate
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-shadow"
          >
            Why Robinson?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed text-shadow"
          >
            Understanding the company, the culture, and the opportunity that makes this role exceptional.
          </motion.p>

          {/* Hero CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Link
              to="/vision"
              className="sparkler px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
            >
              <div className="spark-top"></div>
              <div className="spark-left"></div>
              <div className="spark-right"></div>
              <div className="spark-down"></div>
              See My Vision
            </Link>
          </motion.div>
        </div>
        
        <WeldingSparks />
      </section>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Strategic Alignment
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              Why <span className="text-robinson-blue">Robinson</span> is the Right Fit
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed">
              A 24/7 Midwest manufacturer serving global clients from five WI locations and an Iowa expansion underway. This is exactly where my 25+ years of IT leadership delivers measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Research */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What I Know About <span className="text-white">Robinson</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Highlighting my understanding of the company, its operations, and its strategic direction.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {companyResearch.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{}}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-white/10 shadow-2xl shadow-white/10 drop-shadow-lg hover:-translate-y-1.5 hover:scale-[1.02] transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-robinson-blue mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-robinson-blue/20 last:border-0">
                      <span className="text-robinson-gray">{item.label}</span>
                      <span className="text-robinson-blue font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tier-1 Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className="p-8 rounded-2xl bg-white/90 border border-white/10"
          >
            <h3 className="text-xl font-bold text-robinson-blue mb-6 text-center">Industries Served</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tierOneClients.map((client) => (
                <div
                  key={client}
                  className="px-6 py-3 rounded-lg bg-robinson-blue text-white font-medium border border-white/10 shadow-lg shadow-robinson-blue/30 hover:-translate-y-1 hover:scale-105 transition-transform duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
            <p className="text-center text-robinson-gray mt-6 text-sm">
              Delivering for these industries requires world-class IT systems and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hub-and-Spoke Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Hub-and-Spoke Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              5 WI Locations + IA Expansion
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Understanding the multi-site architecture is critical for IT strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{}}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 drop-shadow-lg ${
                  location.isNew 
                    ? 'bg-robinson-blue/10 border-robinson-blue/30' 
                    : 'bg-gray-50/50 border-gray-200 hover:border-robinson-blue/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-robinson-black">{location.name}</h3>
                    <p className="text-robinson-gray-light text-sm">{location.type}</p>
                  </div>
                  {location.isNew && (
                    <span className="px-2 py-1 rounded-full bg-robinson-blue text-white text-xs font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-robinson-blue" />
                    <span className="text-robinson-gray text-sm">{location.address}</span>
                  </div>
                  {location.sqft && (
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-robinson-blue" />
                      <span className="text-robinson-gray text-sm">{location.sqft} sq. ft.</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-robinson-blue/20 to-robinson-blue/20 border border-gray-300 text-center"
          >
            <h3 className="text-2xl font-bold text-robinson-black mb-4">IT Implication</h3>
            <p className="text-robinson-gray max-w-2xl mx-auto">
              Managing IT across five WI locations with an Iowa expansion requires unified systems, standardized processes, 
              Our strategic hub-and-spoke model centers production facilities in Wisconsin with expansion into Iowa. the perfect opportunity to implement these from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Role */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium mb-6">
              Strategic Alignment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why This <span className="text-white">Role</span> Excites Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyThisRole.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{}}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/90 border border-white/10 drop-shadow-lg hover:border-white/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-robinson-blue" />
                </div>
                <h3 className="text-xl font-bold text-robinson-blue mb-3">{reason.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESOP Deep Dive */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">The ESOP Advantage</h2>
              <p className="text-robinson-gray text-lg mb-6 leading-relaxed">
                "Build your career, own the company." This isn't just a tagline—it's a 
                fundamental difference in how Robinson operates.
              </p>
              <p className="text-robinson-gray mb-8">
                As an IT Director, I understand that employee ownership means:
              </p>
              <ul className="space-y-4">
                {[
                  'Every employee-owner cares about efficiency and quality',
                  'Technology investments are seen as shared investments',
                  'Long-term thinking over short-term cost-cutting',
                  'Higher retention means institutional knowledge stays',
                  'Alignment between IT initiatives and business outcomes',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-robinson-gray">
                    <CheckCircle className="w-5 h-5 text-robinson-blue flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{}}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-robinson-blue/10 backdrop-blur-sm rounded-3xl border border-robinson-blue/20 p-8 text-center">
                <Users className="w-16 h-16 text-robinson-blue mx-auto mb-6" />
                <div className="text-5xl font-bold text-robinson-black mb-2">100%</div>
                <div className="text-robinson-gray text-xl mb-6">Employee-Owned</div>
                <p className="text-robinson-gray">
                  Every team member has a stake in Robinson's success—and in the 
                  technology systems that drive it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Now See What I Would Do
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Based on Robinson's 24/7 operations, multi-site supply chain, and growth ambitions, 
              here's my vision for digital transformation.
            </p>
            <Link
              to="/vision"
              className="sparkler px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
            >
              See What I Would Do
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WhyRobinsonPage;






