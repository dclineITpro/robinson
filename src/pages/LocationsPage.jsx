import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Building2, Users, Phone, Mail, ExternalLink,
  ArrowRight, ChevronRight, Sparkles, Factory
} from 'lucide-react';
import WeldingSparks from '../components/WeldingSparks';
import AmbientWeldingFlashes from '../components/AmbientWeldingFlashes';

const LocationsPage = () => {
  const heroRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState('depere_main');

  const locations = {
    depere_main: {
      id: 'depere_main',
      name: 'De Pere Main Campus',
      state: 'Wisconsin',
      type: 'Headquarters & Manufacturing',
      sqft: '300,000',
      employees: '300+',
      capabilities: ['Laser Cutting', 'Forming', 'Welding', 'Assembly'],
      address: '1740 Eisenhower Rd, De Pere, WI 54115',
      phone: '(920) 336-1700',
      email: 'sales@robinsoninc.com',
      description: 'Our flagship facility and corporate headquarters, featuring state-of-the-art laser cutting and comprehensive fabrication capabilities.',
      featured: true,
      coordinates: { lat: 44.4289, lng: -88.0603 },
    },
    depere_fac2: {
      id: 'depere_fac2',
      name: 'De Pere Facility 2',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '150,000',
      employees: '100+',
      capabilities: ['Powder Coating', 'Finishing', 'Assembly'],
      address: '2107 American Blvd',
      phone: '(920) 336-1700',
      email: 'sales@robinsoninc.com',
      description: 'Specialized facility focused on high-volume powder coating and finishing operations.',
      featured: false,
      coordinates: { lat: 44.4189, lng: -88.0703 },
    },
    depere_fac3: {
      id: 'depere_fac3',
      name: 'De Pere Facility 3',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '100,000',
      employees: '50+',
      capabilities: ['Specialized Fabrication', 'Assembly'],
      address: '2121 American Blvd',
      phone: '(920) 336-1700',
      email: 'sales@robinsoninc.com',
      description: 'Dedicated manufacturing space for specialized fabrication projects and assembly.',
      featured: false,
      coordinates: { lat: 44.4195, lng: -88.0703 },
    },
    manitowoc: {
      id: 'manitowoc',
      name: 'Manitowoc',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '270,000',
      employees: '150+',
      capabilities: ['Heavy Fabrication', 'Welding', 'Machining', 'Assembly'],
      address: '2121 South 30th Street',
      phone: '(920) 494-7411',
      email: 'sales@robinsoninc.com',
      description: 'Specializing in heavy fabrication and large-scale welding projects for industrial and marine applications.',
      featured: false,
      coordinates: { lat: 44.0886, lng: -87.6576 },
    },
    altoona: {
      id: 'altoona',
      name: 'Altoona',
      state: 'Iowa',
      type: 'New Facility - 2027',
      sqft: '560,000',
      employees: '100+ (Projected)',
      capabilities: ['Full-Service Fabrication', 'Advanced Automation', 'Powder Coating', 'Assembly'],
      address: 'Coming Soon - Altoona, IA',
      phone: '(515) 555-0000',
      email: 'sales@robinsoninc.com',
      description: 'Our most ambitious project: a massive 560,000 sq. ft. state-of-the-art facility opening in 2027, expanding our Midwest footprint.',
      featured: true,
      isNew: true,
      coordinates: { lat: 41.6442, lng: -93.4647 },
    },
  };

  const currentLocation = locations[selectedLocation];

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
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Robinson Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Four facilities across Wisconsin, with a fifth opening in Iowa in 2027.
          </motion.p>
        </div>
        
        <WeldingSparks />
      </section>

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
              <MapPin className="w-4 h-4" />
              Hub-and-Spoke Network
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-robinson-black mb-6 leading-tight">
              <span className="text-robinson-blue">4 Wisconsin Locations</span> + Iowa Expansion
            </h1>
            <p className="text-robinson-gray text-lg md:text-xl leading-relaxed">
              Over 1.3 million square feet of advanced manufacturing space across Wisconsin with an Iowa expansion coming online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location List */}
            <div className="space-y-3">
              <h3 className="text-robinson-black font-semibold mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 text-robinson-blue" />
                Our Facilities
              </h3>
              {Object.values(locations).map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-safety-orange/10 border-robinson-blue'
                      : 'bg-gray-50/50 border-gray-200 hover:border-white/20'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${
                          selectedLocation === location.id ? 'text-robinson-blue' : 'text-robinson-black'
                        }`}>
                          {location.name}, {location.state}
                        </span>
                        {location.isNew && (
                          <span className="px-2 py-0.5 rounded-full bg-robinson-gold text-robinson-black text-xs font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="text-robinson-gray text-sm">{location.sqft} sq. ft.</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-colors ${
                      selectedLocation === location.id ? 'text-robinson-blue' : 'text-robinson-gray'
                    }`} />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] rounded-3xl bg-gray-50/50 border border-gray-300 overflow-hidden">
                {/* Simplified Map Background */}
                <div className="absolute inset-0 p-8">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Wisconsin outline (simplified) */}
                    <path
                      d="M200 50 L280 60 L300 100 L290 150 L280 200 L250 220 L200 230 L150 220 L120 180 L130 120 L150 80 Z"
                      fill="rgba(255,102,0,0.1)"
                      stroke="rgba(255,102,0,0.3)"
                      strokeWidth="2"
                    />
                    {/* Iowa outline (simplified) */}
                    <path
                      d="M50 150 L120 140 L130 180 L120 220 L80 230 L40 220 L30 180 Z"
                      fill="rgba(0,71,171,0.1)"
                      stroke="rgba(0,71,171,0.3)"
                      strokeWidth="2"
                    />
                    
                    {/* Location markers */}
                    {Object.values(locations).map((loc, index) => {
                      const positions = {
                        depere_main: { x: 220, y: 100 },
                        depere_fac2: { x: 215, y: 105 },
                        depere_fac3: { x: 225, y: 105 },
                        manitowoc: { x: 260, y: 120 },
                        altoona: { x: 70, y: 180 },
                      };
                      const pos = positions[loc.id];
                      const isSelected = selectedLocation === loc.id;
                      
                      return (
                        <g key={loc.id}>
                          {/* Pulse effect for selected */}
                          {isSelected && (
                            <circle
                              cx={pos.x}
                              cy={pos.y}
                              r="20"
                              fill="none"
                              stroke={loc.isNew ? '#0047AB' : '#FF6600'}
                              strokeWidth="2"
                              opacity="0.5"
                              className="animate-ping"
                            />
                          )}
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={isSelected ? 12 : 8}
                            fill={isSelected ? (loc.isNew ? '#0047AB' : '#FF6600') : '#4a4a5a'}
                            stroke="white"
                            strokeWidth="2"
                            className="cursor-pointer transition-all duration-300"
                            onClick={() => setSelectedLocation(loc.id)}
                          />
                          {isSelected && (
                            <text
                              x={pos.x}
                              y={pos.y - 20}
                              textAnchor="middle"
                              fill="white"
                              fontSize="12"
                              fontWeight="bold"
                            >
                              {loc.name}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-robinson-blue" />
                    <span className="text-robinson-gray">Wisconsin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-robinson-blue" />
                    <span className="text-robinson-gray">Iowa (2027)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Location Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLocation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Location Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {currentLocation.isNew && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-robinson-blue text-white text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Coming 2027
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-robinson-gray text-sm">
                      {currentLocation.type}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-4">
                    {currentLocation.name}, {currentLocation.state}
                  </h2>
                  
                  <p className="text-robinson-gray text-lg mb-8 leading-relaxed">
                    {currentLocation.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-xl bg-robinson-blue text-white shadow-lg">
                      <Building2 className="w-8 h-8 text-white mb-3" />
                      <div className="text-2xl font-bold">{currentLocation.sqft}</div>
                      <div className="text-white/80 text-sm">Square Feet</div>
                    </div>
                    <div className="p-6 rounded-xl bg-robinson-blue text-white shadow-lg">
                      <Users className="w-8 h-8 text-white mb-3" />
                      <div className="text-2xl font-bold">{currentLocation.employees}</div>
                      <div className="text-white/80 text-sm">Employee-Owners</div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-8">
                    <h3 className="text-robinson-black font-semibold mb-4">Capabilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-4 py-2 rounded-lg bg-safety-orange/10 border border-robinson-blue/30 text-robinson-blue text-sm"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  {!currentLocation.isNew && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-robinson-gray">
                        <MapPin className="w-5 h-5 text-robinson-blue" />
                        <span>{currentLocation.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-robinson-gray">
                        <Phone className="w-5 h-5 text-robinson-blue" />
                        <a href={`tel:${currentLocation.phone}`} className="hover:text-robinson-blue transition-colors">
                          {currentLocation.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-robinson-gray">
                        <Mail className="w-5 h-5 text-robinson-blue" />
                        <a href={`mailto:${currentLocation.email}`} className="hover:text-robinson-blue transition-colors">
                          {currentLocation.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual/Image placeholder */}
                <div className="relative">
                  <div className={`aspect-square rounded-3xl overflow-hidden border ${
                    currentLocation.isNew 
                      ? 'bg-gradient-to-br from-robinson-blue/20 to-robinson-blue/5 border-robinson-blue/30' 
                      : 'bg-gradient-to-br from-robinson-blue/20 to-robinson-blue/5 border-robinson-blue/30'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Factory className={`w-24 h-24 mx-auto mb-4 ${
                          currentLocation.isNew ? 'text-robinson-blue/40' : 'text-robinson-blue/40'
                        }`} />
                        <div className="text-robinson-gray/70 text-lg">{currentLocation.name} Facility</div>
                        {currentLocation.isNew && (
                          <div className="mt-4 px-4 py-2 rounded-full bg-robinson-blue/20 text-robinson-blue text-sm inline-block">
                            Under Construction
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 grid-bg opacity-20" />
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex gap-4">
                    <Link
                      to="/contact"
                      className="flex-1 px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300"
                    >
                      Contact This Location
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/careers"
                      className="px-6 py-3 border-2 border-white/20 text-robinson-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                    >
                      <Users className="w-5 h-5" />
                      Jobs
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Iowa Expansion CTA */}
      <section className="py-24 bg-gradient-to-br from-robinson-blue-dark via-robinson-blue to-robinson-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-safety-orange/20 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-white/20 text-robinson-black text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-robinson-blue" />
              Strategic Expansion
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              560,000 Sq. Ft. Iowa Facility
            </h2>
            <p className="text-robinson-gray text-lg mb-10 max-w-2xl mx-auto">
              Our Altoona, Iowa facility represents the largest single investment in Robinson's 
              history. Opening in 2027, this state-of-the-art facility will create 100+ new jobs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/careers"
                className="px-8 py-4 bg-robinson-gold text-robinson-black font-semibold rounded-lg hover:bg-robinson-gold-light transition-all duration-300"
              >
                Join the Iowa Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-robinson-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LocationsPage;






