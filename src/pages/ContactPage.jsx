import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, Send, Building2,
  ArrowRight, CheckCircle, MessageSquare
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const locations = [
    { name: 'De Pere, WI (HQ)', phone: '(920) 336-1700' },
    { name: 'Manitowoc, WI', phone: '(920) 682-5000' },
    { name: 'Green Bay, WI', phone: '(920) 494-3000' },
    { name: 'Appleton, WI', phone: '(920) 734-2000' },
    { name: 'Oshkosh, WI', phone: '(920) 231-4000' },
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
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              Let's Build <span className="text-robinson-blue-blue">Something Great</span>
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed">
              Whether you need a quote, have questions about our capabilities, or want to 
              discuss a partnership, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-robinson-black mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-robinson-blue" />
                    </div>
                    <div>
                      <h3 className="text-robinson-black font-semibold mb-1">Headquarters</h3>
                      <p className="text-robinson-gray text-sm">
                        1234 Industrial Drive<br />
                        De Pere, WI 54115
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-robinson-blue" />
                    </div>
                    <div>
                      <h3 className="text-robinson-black font-semibold mb-1">Phone</h3>
                      <a href="tel:+19203361700" className="text-robinson-gray text-sm hover:text-robinson-blue transition-colors">
                        (920) 336-1700
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-robinson-blue" />
                    </div>
                    <div>
                      <h3 className="text-robinson-black font-semibold mb-1">Email</h3>
                      <a href="mailto:info@robinsonmetal.com" className="text-robinson-gray text-sm hover:text-robinson-blue transition-colors">
                        info@robinsonmetal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-robinson-blue" />
                    </div>
                    <div>
                      <h3 className="text-robinson-black font-semibold mb-1">Business Hours</h3>
                      <p className="text-robinson-gray text-sm">
                        Monday - Friday: 7:00 AM - 5:00 PM<br />
                        Production: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Locations */}
              <div className="p-6 rounded-2xl bg-gray-50/50 border border-gray-200">
                <h3 className="text-robinson-black font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-robinson-blue" />
                  All Locations
                </h3>
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <div key={loc.name} className="flex items-center justify-between text-sm">
                      <span className="text-robinson-gray">{loc.name}</span>
                      <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="text-robinson-gray-light hover:text-robinson-blue transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  ))}
                </div>
                <Link
                  to="/locations"
                  className="mt-4 inline-flex items-center gap-2 text-robinson-blue hover:text-robinson-blue-light transition-colors text-sm font-medium"
                >
                  View All Locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 lg:p-12 rounded-3xl bg-gray-50/50 border border-gray-300">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-robinson-black mb-4">Message Sent!</h3>
                    <p className="text-robinson-gray mb-8">
                      Thank you for contacting Robinson. Our team will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          subject: '',
                          message: '',
                          location: '',
                        });
                      }}
                      className="px-6 py-3 bg-robinson-blue text-robinson-black font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-robinson-black mb-2">Send Us a Message</h2>
                    <p className="text-robinson-gray mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-robinson-gray text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black placeholder-steel-gray focus:border-robinson-blue focus:outline-none transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-robinson-gray text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black placeholder-steel-gray focus:border-robinson-blue focus:outline-none transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-robinson-gray text-sm font-medium mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black placeholder-steel-gray focus:border-robinson-blue focus:outline-none transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-robinson-gray text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black placeholder-steel-gray focus:border-robinson-blue focus:outline-none transition-colors"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="subject" className="block text-robinson-gray text-sm font-medium mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black focus:border-robinson-blue focus:outline-none transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="quote">Request a Quote</option>
                            <option value="capabilities">Capabilities Inquiry</option>
                            <option value="careers">Career Opportunities</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-robinson-gray text-sm font-medium mb-2">
                            Preferred Location
                          </label>
                          <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black focus:border-robinson-blue focus:outline-none transition-colors"
                          >
                            <option value="">Any location</option>
                            <option value="depere">De Pere, WI</option>
                            <option value="manitowoc">Manitowoc, WI</option>
                            <option value="greenbay">Green Bay, WI</option>
                            <option value="appleton">Appleton, WI</option>
                            <option value="oshkosh">Oshkosh, WI</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-robinson-gray text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-robinson-black placeholder-steel-gray focus:border-robinson-blue focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-robinson-blue text-robinson-black font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-robinson-black mb-4">
              Visit Our Headquarters
            </h2>
            <p className="text-robinson-gray">
              Located in De Pere, Wisconsin—the heart of America's manufacturing corridor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[21/9] rounded-3xl bg-white/80 border border-gray-300 overflow-hidden relative"
          >
            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-robinson-blue/40 mx-auto mb-4" />
                <p className="text-robinson-gray">Interactive map would be displayed here</p>
                <p className="text-robinson-gray text-sm">De Pere, Wisconsin</p>
              </div>
            </div>
            <div className="absolute inset-0 grid-bg opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
              Looking for Career Opportunities?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join our team of employee-owners and build your future with Robinson.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-robinson-blue text-white font-semibold rounded-lg hover:bg-robinson-blue-light transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;






