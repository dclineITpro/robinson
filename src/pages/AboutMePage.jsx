import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';
import { 
  User, Briefcase, Heart,
  ArrowRight, CheckCircle, MapPin, Calendar, Building2,
  Database, Brain, Shield, Users
} from 'lucide-react';

const AboutMePage = () => {
  const heroRef = useRef(null);
  const experience = [
    {
      title: 'IT Director - Cybersecurity/Infrastructure/Support/AI',
      company: 'Flexsteel Industries, Inc.',
      location: 'Dubuque, IA',
      period: 'September 2015 - Present',
      highlights: [
        'Lead IT operations for a 24/7 international manufacturer, overseeing infrastructure, support, compliance, and security for teams across the US, Mexico, and Asia',
        'Spearheaded the technical infrastructure transition from AS/400 to SAP and implemented Microsoft 365, enhancing operational efficiency',
        'Developed and enforced a comprehensive security program from the ground up, reducing vulnerabilities through policy standardization and advanced tools',
        'Collaborate with global stakeholders to deliver scalable solutions, including SDWAN/SASE and cloud infrastructure upgrades',
        'AI expert utilizing locally hosted AI to customize technology while keeping proprietary data secure',
      ],
    },
    {
      title: 'Enterprise Infrastructure Architect & Client Support Team Leader',
      company: 'Roquette America, Inc.',
      location: 'Keokuk, IA',
      period: 'May 2012 - September 2015',
      highlights: [
        'Directed technical operations for North America\'s division of a global starch manufacturer, serving as liaison between IT and business units',
        'Pioneered technology deployments, positioning the US subsidiary as the company\'s innovation leader',
        'Managed ITIL/ITSM processes and helpdesk operations, improving service delivery metrics across 4 sites',
      ],
    },
    {
      title: 'IT Director',
      company: 'City of Branson, Missouri',
      location: 'Branson, MO',
      period: 'October 2007 - May 2012',
      highlights: [
        'Oversaw IT strategy for municipal operations, supporting critical services (health, fire, police, 911)',
        'Passed FBI security audit with zero deficiencies',
        'Revamped network infrastructure (LAN/WAN, Cisco, Aruba), boosting system reliability for emergency operations',
        'Partnered with government agencies and C-level leaders to align IT with organizational goals',
      ],
    },
    {
      title: 'Systems Administrator / LAN Technician',
      company: 'City of Branson, Missouri',
      location: 'Branson, MO',
      period: 'April 2004 - October 2007',
      highlights: [
        'Progressive promotions from LAN Technician to Systems Administrator to IT Director',
        'Managed enterprise systems and helpdesk operations',
        'Enhanced IT service delivery through process improvements',
      ],
    },
  ];

  const skills = [
    { category: 'Strategic', items: ['IT Strategy & Roadmapping', 'Digital Transformation', 'Global Operations', 'ITIL/ITSM'] },
    { category: 'Technical', items: ['SAP ERP', 'Microsoft 365', 'SDWAN/SASE', 'Cloud Infrastructure'] },
    { category: 'Security', items: ['XDR', 'Security Compliance', 'Policy Standardization', 'FBI Audit Experience'] },
    { category: 'Leadership', items: ['AI/ML Integration', 'Team Building', 'Cross-functional Collaboration', 'Enterprise Architecture'] },
  ];

  const whyMe = [
    {
      icon: Building2,
      title: 'Manufacturing IT Leadership',
      description: 'Currently leading IT for a 24/7 international manufacturer with operations across the US, Mexico, and Asia.',
    },
    {
      icon: Database,
      title: 'ERP Transformation',
      description: 'Led the technical infrastructure transition from AS/400 to SAP—directly relevant to Robinson\'s multi-site operations.',
    },
    {
      icon: Brain,
      title: 'AI Integration Expert',
      description: 'Implementing locally hosted AI solutions that keep proprietary manufacturing data secure and under control.',
    },
    {
      icon: Shield,
      title: 'Security Program Builder',
      description: 'Developed comprehensive security programs from the ground up. Passed FBI security audit with zero deficiencies.',
    },
    {
      icon: Users,
      title: 'Global Team Leadership',
      description: 'Experience managing IT operations and teams across multiple countries and time zones.',
    },
    {
      icon: Heart,
      title: 'Midwestern Values',
      description: 'I embrace the Midwestern work ethic and values that drive Robinson\'s success.',
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
            About DJ Cline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            25+ years of IT leadership across manufacturing, government, and enterprise environments.
          </motion.p>
        </div>
        
        <WeldingSparks />
      </section>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-gray to-industrial-dark">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-robinson-blue/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-safety-orange/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-black text-sm font-medium mb-6">
                <User className="w-4 h-4" />
                DJ Cline
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
                25+ Years of <span className="text-robinson-blue-blue">IT Experience</span>
              </h1>
              <p className="text-robinson-gray text-lg md:text-xl leading-relaxed mb-8">
                Experienced IT Director leading technology transformations across manufacturing, 
                government, and enterprise environments. Expert in cybersecurity, AI integration, 
                and building high-performing teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-robinson-gray">
                  <Users className="w-5 h-5 text-robinson-blue" />
                  <span>20+ Years Leadership</span>
                </div>
                <div className="flex items-center gap-2 text-robinson-gray">
                  <Briefcase className="w-5 h-5 text-robinson-blue" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-robinson-gray">
                  <Building2 className="w-5 h-5 text-robinson-blue" />
                  <span>Manufacturing Focus</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-robinson-blue/20 to-robinson-blue/20 border border-white/30 flex items-center justify-center">
                  <div className="text-center">
                    <User className="w-32 h-32 text-white/20 mx-auto mb-4" />
                    <p className="text-robinson-gray">Professional Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-robinson-gold text-robinson-black">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years in IT</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Why I'm the <span className="text-robinson-blue">Right Fit</span>
            </h2>
            <p className="text-robinson-gray text-lg max-w-2xl mx-auto">
              My background aligns directly with Robinson's needs and culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-robinson-blue text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-robinson-blue/10 border border-robinson-blue/30 text-robinson-blue text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 inline mr-2" />
              Career History
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Professional <span className="text-robinson-blue-blue">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title + job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-robinson-blue text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="text-white/85 font-medium">{job.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-white/75 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-white/85 text-sm">
                      <CheckCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-robinson-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              Skills & <span className="text-robinson-blue">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-robinson-blue mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-robinson-gray text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-robinson-blue rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-3xl bg-gray-50/50 border border-gray-300"
          >
            <Heart className="w-12 h-12 text-robinson-blue mb-6" />
            <h2 className="text-3xl font-bold text-robinson-black mb-6">A Personal Note from DJ Cline</h2>
            <div className="space-y-4 text-robinson-gray leading-relaxed">
              <p>
                With 20+ years of IT leadership across manufacturing, government, and enterprise 
                environments, I know what I'm looking for in my next role—a company where technology 
                is valued as a strategic asset and where I can make a real impact.
              </p>
              <p>
                Robinson checks all those boxes. My experience leading IT for a 24/7 international 
                manufacturer, transitioning from legacy systems to SAP, and building security programs 
                from the ground up aligns directly with Robinson's needs. The Iowa expansion represents 
                exactly the kind of greenfield opportunity where I can apply these skills.
              </p>
              <p>
                I understand Robinson's 24/7 operations, global supply chain complexity, and growth ambitions. 
                I've developed a comprehensive vision for digital transformation. Now I'm ready to discuss how I can 
                help Robinson write its next chapter.
              </p>
            </div>
          </motion.div>
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
              Let's Start the Conversation
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              With 25+ years of IT leadership across 24/7 manufacturing, global operations, and digital transformation, 
              I'm ready to discuss how I can contribute to Robinson's success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="px-8 py-4 bg-white text-robinson-blue font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                Back to Overview
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/vision"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-robinson-blue transition-all duration-300"
              >
                Review My Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;






