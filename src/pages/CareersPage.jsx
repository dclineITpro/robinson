import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, DollarSign, Calendar, Heart, GraduationCap, TrendingUp,
  MapPin, Clock, Briefcase, ArrowRight, CheckCircle, Star, Award
} from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: '$4,000 Sign-On Bonus',
      description: 'Start your career with a substantial welcome bonus for qualifying positions.',
    },
    {
      icon: Calendar,
      title: '4-Day Work Week Options',
      description: 'Flexible scheduling options including 4x10 shifts for better work-life balance.',
    },
    {
      icon: TrendingUp,
      title: 'ESOP Retirement',
      description: 'Build wealth through employee ownership—no contribution required from you.',
    },
    {
      icon: Heart,
      title: 'Comprehensive Healthcare',
      description: 'Medical, dental, and vision coverage for you and your family.',
    },
    {
      icon: GraduationCap,
      title: 'Training Academy',
      description: 'Continuous learning through the Robinson Training Academy (RTA).',
    },
    {
      icon: Award,
      title: 'Career Advancement',
      description: 'Clear pathways for growth with promote-from-within culture.',
    },
  ];

  const openPositions = [
    {
      title: 'IT Director',
      location: 'De Pere, WI',
      type: 'Full-time',
      department: 'Information Technology',
      featured: true,
    },
    {
      title: 'CNC Laser Operator',
      location: 'Multiple Locations',
      type: 'Full-time',
      department: 'Production',
      featured: false,
    },
    {
      title: 'Welder/Fabricator',
      location: 'Altoona, IA',
      type: 'Full-time',
      department: 'Production',
      featured: true,
    },
    {
      title: 'Quality Inspector',
      location: 'Manitowoc, WI',
      type: 'Full-time',
      department: 'Quality',
      featured: false,
    },
    {
      title: 'Maintenance Technician',
      location: 'De Pere, WI',
      type: 'Full-time',
      department: 'Maintenance',
      featured: false,
    },
    {
      title: 'Production Supervisor',
      location: 'De Pere, WI',
      type: 'Full-time',
      department: 'Operations',
      featured: false,
    },
  ];

  const esopBenefits = [
    'No cost to you—company contributes to your account',
    'Vesting begins immediately',
    'Tax-advantaged retirement savings',
    'Share in company growth and success',
    'Average account balance of $150,000+ for long-term employees',
    'Diversification options available',
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-robinson-blue/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              Build Your Career,{' '}
              <span className="text-robinson-blue-blue">Own the Company</span>
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed mb-8">
              At Robinson, you're not just an employee—you're an owner. Join a team where 
              your hard work directly builds your future through our 100% Employee Stock Ownership Plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#positions"
                className="px-6 py-3 bg-robinson-blue text-white font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300 flex items-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#esop"
                className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn About ESOP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ownership Advantage */}
      <section id="esop" className="py-24 bg-gradient-to-br from-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                The Ownership Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                100% Employee-Owned ESOP
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                When you join Robinson, you become an owner. Our Employee Stock Ownership Plan 
                (ESOP) means every employee has a stake in our success. As the company grows, 
                so does your retirement account—at no cost to you.
              </p>
              <ul className="space-y-4">
                {esopBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-white mb-2">$150K+</div>
                  <div className="text-white/80">Average ESOP Balance</div>
                  <div className="text-white/60 text-sm">for employees with 15+ years</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-white/60 text-sm">Employee-Owned</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold text-white mb-1">$0</div>
                    <div className="text-white/60 text-sm">Your Contribution</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold text-white mb-1">Day 1</div>
                    <div className="text-white/60 text-sm">Vesting Begins</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-3xl font-bold text-white mb-1">40+</div>
                    <div className="text-white/60 text-sm">Years Strong</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Robinson
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Benefits That <span className="text-robinson-blue">Matter</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              We invest in our employee-owners with comprehensive benefits designed for your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-blue/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6 group-hover:bg-safety-orange/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-robinson-blue" />
                </div>
                <h3 className="text-xl font-bold text-robinson-black mb-3">{benefit.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Robinson Training Academy */}
      <section id="rta" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Robinson Training Academy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
                Invest in Your <span className="text-robinson-blue-blue">Growth</span>
              </h2>
              <p className="text-robinson-gray text-lg mb-8 leading-relaxed">
                The Robinson Training Academy (RTA) provides comprehensive training programs 
                to help you develop new skills, earn certifications, and advance your career—all 
                on company time and at no cost to you.
              </p>
              <div className="space-y-4">
                {[
                  'Welding certifications (AWS)',
                  'CNC programming & operation',
                  'Leadership development',
                  'Safety & compliance training',
                  'Technology & software skills',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-robinson-blue" />
                    <span className="text-robinson-gray">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '40,000+', label: 'Training Hours/Year' },
                { value: '50+', label: 'Certifications' },
                { value: '94%', label: 'Completion Rate' },
                { value: '100%', label: 'Paid Training' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/80 border border-gray-200 text-center"
                >
                  <div className="text-3xl font-bold text-robinson-blue mb-2">{stat.value}</div>
                  <div className="text-robinson-gray-light text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              Now Hiring
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Open <span className="text-robinson-blue">Positions</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Find your place at Robinson. We're always looking for talented individuals 
              to join our team of employee-owners.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block p-6 rounded-2xl border transition-all duration-300 group ${
                    position.featured
                      ? 'bg-safety-orange/10 border-robinson-blue/30 hover:border-robinson-blue'
                      : 'bg-gray-50/50 border-gray-200 hover:border-robinson-blue/30'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {position.featured && (
                        <div className="flex-shrink-0">
                          <Star className="w-6 h-6 text-robinson-blue" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-robinson-black group-hover:text-robinson-blue transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-robinson-gray-light text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.department}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-robinson-blue">
                      <span className="font-medium">Apply Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-robinson-gray mb-6">
              Don't see the right position? We're always looking for talented people.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-robinson-blue text-robinson-blue font-semibold rounded-lg hover:bg-robinson-blue hover:text-robinson-black transition-all duration-300"
            >
              Submit General Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Ready to Become an Owner?
            </h2>
            <p className="text-robinson-gray text-lg mb-10 max-w-2xl mx-auto">
              Join a company where your work builds more than products—it builds your future. 
              Apply today and start your journey as an employee-owner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#positions"
                className="px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300"
              >
                Browse All Positions
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/locations"
                className="px-8 py-4 border-2 border-white/30 text-robinson-black font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Locations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;






