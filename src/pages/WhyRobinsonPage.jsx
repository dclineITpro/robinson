import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Building2, TrendingUp, Award, Heart, Target,
  ArrowRight, CheckCircle, MapPin, Zap, Shield, Sparkles
} from 'lucide-react';

const WhyRobinsonPage = () => {
  const companyResearch = [
    {
      category: 'Company Profile',
      items: [
        { label: 'Founded', value: 'De Pere, Wisconsin' },
        { label: 'Ownership', value: '100% Employee-Owned (ESOP)' },
        { label: 'Industry', value: 'Custom Metal Fabrication' },
        { label: 'Ranking', value: 'FAB 40 Top 10' },
      ],
    },
    {
      category: 'Scale & Capacity',
      items: [
        { label: 'Total Footprint', value: '1.4 Million Sq. Ft.' },
        { label: 'Locations', value: '6 Facilities' },
        { label: 'States', value: 'Wisconsin & Iowa' },
        { label: 'Expansion', value: '560K Sq. Ft. (2027)' },
      ],
    },
  ];

  const locations = [
    { name: 'De Pere, WI', type: 'Headquarters', sqft: '350,000' },
    { name: 'Manitowoc, WI', type: 'Manufacturing', sqft: '280,000' },
    { name: 'Green Bay, WI', type: 'Manufacturing', sqft: '200,000' },
    { name: 'Appleton, WI', type: 'Manufacturing', sqft: '150,000' },
    { name: 'Oshkosh, WI', type: 'Manufacturing', sqft: '120,000' },
    { name: 'Altoona, IA', type: 'New Facility (2027)', sqft: '560,000', isNew: true },
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
    'Rolls-Royce', 'Caterpillar', 'John Deere', 'Oshkosh Defense', 'CNH Industrial', 'AGCO'
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Strategic Alignment
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Why <span className="gradient-text">Robinson</span> is the Right Fit
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              A 24/7 global manufacturer with operations across multiple continents, complex supply chains, 
              and ambitious growth plans. This is exactly where my 25+ years of IT leadership delivers measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Research */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              What I Know About <span className="gradient-text">Robinson</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Demonstrating that I've done my homework on the company, its operations, and its strategic direction.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {companyResearch.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-robinson-black mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="text-robinson-gray">{item.label}</span>
                      <span className="text-safety-orange font-semibold">{item.value}</span>
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
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/80 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-robinson-black mb-6 text-center">Tier-1 Global Clients</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tierOneClients.map((client) => (
                <div
                  key={client}
                  className="px-6 py-3 rounded-lg bg-safety-orange/10 border border-safety-orange/30 text-safety-orange font-medium"
                >
                  {client}
                </div>
              ))}
            </div>
            <p className="text-center text-robinson-gray-light mt-6 text-sm">
              Serving these clients requires world-class IT systems and processes.
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-gold text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Hub-and-Spoke Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              6 Locations, <span className="gradient-text-blue">One Unified Vision</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Understanding the multi-site architecture is critical for IT strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  location.isNew 
                    ? 'bg-robinson-blue/10 border-robinson-blue/30' 
                    : 'bg-gray-50/50 border-gray-200 hover:border-safety-orange/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{location.name}</h3>
                    <p className="text-white/90-light text-sm">{location.type}</p>
                  </div>
                  {location.isNew && (
                    <span className="px-2 py-1 rounded-full bg-robinson-blue text-white text-xs font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-safety-orange" />
                  <span className="text-white/90">{location.sqft} sq. ft.</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-robinson-blue/20 to-safety-orange/20 border border-gray-300 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">IT Implication</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Managing IT across 6 locations requires unified systems, standardized processes, 
              and a hub-and-spoke network architecture. The Iowa expansion is the perfect 
              opportunity to implement these from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Role */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm font-medium mb-6">
              Strategic Alignment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Why This <span className="gradient-text">Role</span> Excites Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyThisRole.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 border border-gray-200 hover:border-safety-orange/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-safety-orange" />
                </div>
                <h3 className="text-xl font-bold text-robinson-black mb-3">{reason.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESOP Deep Dive */}
      <section className="py-24 bg-gradient-to-br from-safety-orange to-safety-orange-dark relative overflow-hidden">
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The ESOP Advantage
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                "Build your career, own the company." This isn't just a tagline—it's a 
                fundamental difference in how Robinson operates.
              </p>
              <p className="text-white/80 mb-8">
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
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 text-center">
                <Users className="w-16 h-16 text-robinson-black mx-auto mb-6" />
                <div className="text-5xl font-bold text-robinson-black mb-2">100%</div>
                <div className="text-robinson-gray text-xl mb-6">Employee-Owned</div>
                <p className="text-robinson-gray/80">
                  Every team member has a stake in Robinson's success—and in the 
                  technology systems that drive it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Now See What I Would Do
            </h2>
            <p className="text-robinson-gray text-lg mb-10 max-w-2xl mx-auto">
              Based on Robinson's 24/7 operations, global supply chain, and growth ambitions, 
              here's my vision for digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/vision"
                className="px-8 py-4 bg-safety-orange text-robinson-black font-semibold rounded-lg hover:bg-safety-orange-light transition-all duration-300 flex items-center gap-2"
              >
                See My Vision
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/digital-thread"
                className="px-8 py-4 border-2 border-robinson-gray/30 text-robinson-black font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Digital Thread Strategy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WhyRobinsonPage;





