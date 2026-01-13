import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, Target, Users, TrendingUp, Shield, Zap,
  ArrowRight, CheckCircle, Clock, DollarSign, Award,
  Database, Brain, Wifi, GraduationCap, Cog
} from 'lucide-react';

const VisionPage = () => {
  const first90Days = [
    {
      phase: 'Days 1-30',
      title: 'Listen & Learn',
      items: [
        'Meet with leadership across all 6 locations',
        'Audit current IT infrastructure and systems',
        'Understand pain points from production floor to C-suite',
        'Review Iowa facility IT requirements and timeline',
        'Assess team capabilities and identify gaps',
      ],
    },
    {
      phase: 'Days 31-60',
      title: 'Analyze & Plan',
      items: [
        'Document current state architecture',
        'Identify quick wins for immediate credibility',
        'Develop Iowa IT infrastructure roadmap',
        'Create 3-year technology strategic plan',
        'Build business cases for priority initiatives',
      ],
    },
    {
      phase: 'Days 61-90',
      title: 'Execute & Communicate',
      items: [
        'Implement 2-3 quick wins',
        'Present strategic plan to leadership',
        'Begin Iowa facility IT planning',
        'Establish IT governance framework',
        'Launch first Digital Thread initiative',
      ],
    },
  ];

  const strategicPriorities = [
    {
      icon: Database,
      title: 'ERP Modernization',
      description: 'Unify operations across all locations with a modern, cloud-ready platform.',
      timeline: 'Year 1-2',
      impact: 'High',
    },
    {
      icon: Brain,
      title: 'Predictive Maintenance',
      description: 'IoT sensors + ML to predict equipment failures before they happen.',
      timeline: 'Year 1-2',
      impact: 'High',
    },
    {
      icon: Wifi,
      title: 'OT/IT Convergence',
      description: 'Bridge shop floor systems with enterprise IT for real-time visibility.',
      timeline: 'Year 1-3',
      impact: 'Critical',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Hardening',
      description: 'Zero-trust architecture protecting manufacturing operations.',
      timeline: 'Immediate',
      impact: 'Critical',
    },
    {
      icon: GraduationCap,
      title: 'RTA Tech Enablement',
      description: 'Expand Robinson Training Academy with technology curriculum.',
      timeline: 'Year 1',
      impact: 'Medium',
    },
    {
      icon: Cog,
      title: 'Iowa Greenfield IT',
      description: 'Build world-class IT infrastructure for the new facility.',
      timeline: 'Year 1-2',
      impact: 'Critical',
    },
  ];

  const leadershipPrinciples = [
    {
      title: 'Business First, Technology Second',
      description: 'Every IT initiative must tie directly to business outcomes—production efficiency, quality, or growth.',
    },
    {
      title: 'Build the Team',
      description: 'Invest in developing internal talent while strategically bringing in expertise where needed.',
    },
    {
      title: 'Communicate Relentlessly',
      description: 'IT should never be a black box. Regular updates to leadership and transparent project status.',
    },
    {
      title: 'Measure Everything',
      description: 'If we can\'t measure it, we can\'t improve it. KPIs for every major initiative.',
    },
    {
      title: 'Security is Non-Negotiable',
      description: 'In manufacturing, a breach can halt production. Security is built into everything.',
    },
    {
      title: 'Embrace the ESOP Culture',
      description: 'As an employee-owner, I\'ll treat every dollar spent as my own investment.',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-robinson-blue/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-safety-orange/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-white text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              My Vision for Robinson IT
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A <span className="gradient-text-blue">Strategic Vision</span> for Digital Transformation
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Here's how I would approach the IT Director role at Robinson—from 
              day one through the Iowa expansion and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* First 90 Days */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Immediate Action Plan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              My First <span className="gradient-text">90 Days</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              A structured approach to learning the business, building relationships, 
              and delivering early wins.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {first90Days.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-safety-orange flex items-center justify-center text-robinson-black font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-safety-orange font-medium text-sm">{phase.phase}</div>
                    <div className="text-robinson-black font-bold text-xl">{phase.title}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-robinson-gray text-sm">
                      <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-gold text-sm font-medium mb-6">
              Strategic Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Key <span className="gradient-text-blue">Initiatives</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Six strategic priorities that would drive Robinson's digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPriorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-blue/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-robinson-blue/10 flex items-center justify-center">
                    <priority.icon className="w-6 h-6 text-robinson-gold" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    priority.impact === 'Critical' 
                      ? 'bg-red-500/20 text-red-400' 
                      : priority.impact === 'High'
                      ? 'bg-safety-orange/20 text-safety-orange'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {priority.impact}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-robinson-black mb-2">{priority.title}</h3>
                <p className="text-robinson-gray text-sm mb-4">{priority.description}</p>
                <div className="flex items-center gap-2 text-robinson-gray text-xs">
                  <Clock className="w-4 h-4" />
                  {priority.timeline}
                </div>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-robinson-blue text-robinson-black font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300"
            >
              Deep Dive: Digital Thread Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Leadership Principles
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              The values and approaches that guide how I lead IT organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20"
              >
                <h3 className="text-lg font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                Business Impact Focus
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
                Every Initiative Tied to <span className="gradient-text">ROI</span>
              </h2>
              <p className="text-robinson-gray text-lg mb-8 leading-relaxed">
                I don't propose technology for technology's sake. Every initiative 
                I recommend will have clear, measurable business outcomes.
              </p>
              <div className="space-y-4">
                {[
                  { metric: 'Reduce unplanned downtime', target: '30%' },
                  { metric: 'Improve production visibility', target: 'Real-time' },
                  { metric: 'Accelerate quote-to-delivery', target: '20%' },
                  { metric: 'Enhance cybersecurity posture', target: 'Zero breaches' },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 border border-gray-200">
                    <span className="text-robinson-gray">{item.metric}</span>
                    <span className="text-safety-orange font-bold">{item.target}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-8 rounded-3xl bg-gray-50/50 border border-gray-300">
                <h3 className="text-2xl font-bold text-robinson-black mb-6 text-center">
                  The ESOP Mindset
                </h3>
                <p className="text-robinson-gray text-center mb-8">
                  As an employee-owner, I would treat every technology investment 
                  as if it were my own money—because it would be.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-safety-orange/10 text-center">
                    <TrendingUp className="w-8 h-8 text-safety-orange mx-auto mb-2" />
                    <div className="text-robinson-black font-medium">Growth Focus</div>
                  </div>
                  <div className="p-4 rounded-xl bg-safety-orange/10 text-center">
                    <Shield className="w-8 h-8 text-safety-orange mx-auto mb-2" />
                    <div className="text-robinson-black font-medium">Risk Aware</div>
                  </div>
                  <div className="p-4 rounded-xl bg-safety-orange/10 text-center">
                    <DollarSign className="w-8 h-8 text-safety-orange mx-auto mb-2" />
                    <div className="text-robinson-black font-medium">Cost Conscious</div>
                  </div>
                  <div className="p-4 rounded-xl bg-safety-orange/10 text-center">
                    <Award className="w-8 h-8 text-safety-orange mx-auto mb-2" />
                    <div className="text-robinson-black font-medium">Quality Driven</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Discuss the Details
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
              This is just the overview. I'd love to discuss specific initiatives, 
              timelines, and how my experience aligns with Robinson's needs.
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
                to="/digital-thread"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-safety-orange transition-all duration-300"
              >
                Digital Thread Deep Dive
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default VisionPage;





