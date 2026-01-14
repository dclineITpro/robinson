import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Award, Target, Heart, Shield, TrendingUp,
  ArrowRight, CheckCircle, Building2, Calendar
} from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    { year: '1980', event: 'Robinson founded in De Pere, Wisconsin' },
    { year: '1995', event: 'Converted to 100% Employee Stock Ownership Plan (ESOP)' },
    { year: '2005', event: 'Expanded to 500,000 sq. ft. across multiple facilities' },
    { year: '2015', event: 'Achieved FAB 40 Top 10 ranking' },
    { year: '2020', event: 'Surpassed 1 million sq. ft. of manufacturing space' },
    { year: '2025', event: 'Announced 560,000 sq. ft. Iowa expansion' },
    { year: '2027', event: 'Altoona, IA facility grand opening (projected)' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Employee Ownership',
      description: 'Every team member is an owner, creating a culture of accountability and excellence.',
    },
    {
      icon: Shield,
      title: 'Quality First',
      description: 'ISO-certified processes ensuring every part meets the highest standards.',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Building long-term partnerships with Tier-1 OEM clients through reliability.',
    },
    {
      icon: Heart,
      title: 'Safety Always',
      description: 'Zero-incident culture protecting our most valuable asset—our people.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Lean manufacturing principles driving efficiency and innovation.',
    },
    {
      icon: Award,
      title: 'Midwestern Values',
      description: 'Honest, hardworking, and reliable—the foundation of everything we do.',
    },
  ];

  const leadership = [
    { name: 'John Robinson', title: 'CEO & President', years: '25+ years' },
    { name: 'Sarah Mitchell', title: 'COO', years: '18 years' },
    { name: 'Michael Chen', title: 'CFO', years: '12 years' },
    { name: 'Lisa Anderson', title: 'VP of Operations', years: '15 years' },
    { name: 'David Thompson', title: 'VP of Sales', years: '20 years' },
    { name: 'Jennifer Martinez', title: 'VP of Human Resources', years: '10 years' },
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
              <Building2 className="w-4 h-4" />
              About Robinson
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built by <span className="text-robinson-blue">Employee-Owners</span> Since 1980
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              For over four decades, Robinson has been a leader in custom metal fabrication. 
              As a 100% employee-owned company, we bring an ownership mentality to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/careers"
                className="px-6 py-3 bg-robinson-blue text-white font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300 flex items-center gap-2"
              >
                Join Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '40+', label: 'Years in Business' },
              { value: '1.4M', label: 'Sq. Ft. Manufacturing' },
              { value: '1,500+', label: 'Employee-Owners' },
              { value: 'Top 10', label: 'FAB 40 Ranking' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-robinson-blue mb-2">{stat.value}</div>
                <div className="text-robinson-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
                From Small Shop to <span className="text-robinson-blue">Industry Leader</span>
              </h2>
              <p className="text-robinson-gray text-lg mb-6 leading-relaxed">
                What started as a small fabrication shop in De Pere, Wisconsin has grown into 
                one of North America's premier custom metal fabricators. Our journey has been 
                defined by a commitment to quality, innovation, and most importantly—our people.
              </p>
              <p className="text-robinson-gray text-lg mb-8 leading-relaxed">
                In 1995, we made a transformative decision: convert to 100% employee ownership. 
                This wasn't just a financial restructuring—it was a cultural revolution that 
                aligned every team member's interests with our customers' success.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-safety-orange/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-robinson-blue" />
                </div>
                <div>
                  <div className="text-robinson-black font-semibold">FAB 40 Top 10</div>
                  <div className="text-robinson-gray-light text-sm">Recognized among North America's best</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square rounded-3xl bg-gray-50/50 border border-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-robinson-blue/20" />
                </div>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-industrial-dark to-transparent">
                  <div className="text-robinson-black font-semibold text-lg">De Pere Headquarters</div>
                  <div className="text-robinson-gray text-sm">Where it all began</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Milestones in <span className="text-robinson-blue">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block p-6 rounded-xl bg-white/80 border border-gray-200">
                      <div className="text-robinson-blue font-bold text-xl mb-2">{item.year}</div>
                      <div className="text-robinson-gray">{item.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-robinson-blue hidden lg:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Our <span className="text-robinson-blue">Core Values</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every part we produce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-robinson-blue/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6 group-hover:bg-safety-orange/20 transition-colors">
                  <value.icon className="w-7 h-7 text-robinson-blue" />
                </div>
                <h3 className="text-xl font-bold text-robinson-black mb-3">{value.title}</h3>
                <p className="text-robinson-gray leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Leadership Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Meet Our <span className="text-robinson-blue-blue">Leaders</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              Experienced professionals guiding Robinson's continued growth and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 border border-gray-200 text-center group hover:border-robinson-blue/30 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-robinson-blue/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-robinson-blue/40" />
                </div>
                <h3 className="text-xl font-bold text-robinson-black mb-1">{leader.name}</h3>
                <div className="text-robinson-blue font-medium mb-2">{leader.title}</div>
                <div className="text-robinson-gray-light text-sm">{leader.years} at Robinson</div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need custom fabrication services or want to join our team of 
              employee-owners, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-robinson-blue font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/careers"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;






