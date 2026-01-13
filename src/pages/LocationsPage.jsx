import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Building2, Users, Phone, Mail, ExternalLink,
  ArrowRight, ChevronRight, Sparkles, Factory
} from 'lucide-react';

const LocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('depere');

  const locations = {
    depere: {
      id: 'depere',
      name: 'De Pere',
      state: 'Wisconsin',
      type: 'Headquarters',
      sqft: '350,000',
      employees: '400+',
      capabilities: ['Laser Cutting', 'Forming', 'Welding', 'Powder Coating', 'Assembly'],
      address: '1234 Industrial Drive, De Pere, WI 54115',
      phone: '(920) 336-1700',
      email: 'depere@robinsonmetal.com',
      description: 'Our flagship facility and corporate headquarters, featuring state-of-the-art laser cutting and comprehensive fabrication capabilities.',
      featured: true,
      coordinates: { lat: 44.4489, lng: -88.0603 },
    },
    manitowoc: {
      id: 'manitowoc',
      name: 'Manitowoc',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '280,000',
      employees: '300+',
      capabilities: ['Heavy Fabrication', 'Welding', 'Machining', 'Assembly'],
      address: '5678 Harbor Road, Manitowoc, WI 54220',
      phone: '(920) 682-5000',
      email: 'manitowoc@robinsonmetal.com',
      description: 'Specializing in heavy fabrication and large-scale welding projects for industrial and marine applications.',
      featured: false,
      coordinates: { lat: 44.0886, lng: -87.6576 },
    },
    greenbay: {
      id: 'greenbay',
      name: 'Green Bay',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '200,000',
      employees: '200+',
      capabilities: ['Laser Cutting', 'Forming', 'Welding', 'Finishing'],
      address: '910 Commerce Way, Green Bay, WI 54304',
      phone: '(920) 494-3000',
      email: 'greenbay@robinsonmetal.com',
      description: 'High-volume production facility with advanced automation and lean manufacturing processes.',
      featured: false,
      coordinates: { lat: 44.5133, lng: -88.0133 },
    },
    appleton: {
      id: 'appleton',
      name: 'Appleton',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '150,000',
      employees: '150+',
      capabilities: ['Precision Fabrication', 'Welding', 'Assembly'],
      address: '2345 Valley Road, Appleton, WI 54914',
      phone: '(920) 734-2000',
      email: 'appleton@robinsonmetal.com',
      description: 'Focused on precision fabrication and complex assemblies for demanding applications.',
      featured: false,
      coordinates: { lat: 44.2619, lng: -88.4154 },
    },
    oshkosh: {
      id: 'oshkosh',
      name: 'Oshkosh',
      state: 'Wisconsin',
      type: 'Manufacturing',
      sqft: '120,000',
      employees: '100+',
      capabilities: ['Welding', 'Assembly', 'Finishing'],
      address: '6789 Industrial Park, Oshkosh, WI 54901',
      phone: '(920) 231-4000',
      email: 'oshkosh@robinsonmetal.com',
      description: 'Specialized welding and assembly operations supporting regional OEM customers.',
      featured: false,
      coordinates: { lat: 44.0247, lng: -88.5426 },
    },
    altoona: {
      id: 'altoona',
      name: 'Altoona',
      state: 'Iowa',
      type: 'New Facility - 2027',
      sqft: '560,000',
      employees: '500+ (Projected)',
      capabilities: ['Full-Service Fabrication', 'Advanced Automation', 'Powder Coating', 'Assembly'],
      address: 'Coming Soon - Altoona, IA',
      phone: '(515) 555-0000',
      email: 'iowa@robinsonmetal.com',
      description: 'Our most ambitious project: a massive 560,000 sq. ft. state-of-the-art facility opening in 2027, expanding our Midwest footprint.',
      featured: true,
      isNew: true,
      coordinates: { lat: 41.6442, lng: -93.4647 },
    },
  };

  const currentLocation = locations[selectedLocation];

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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Hub-and-Spoke Network
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text">6 Locations</span> Across the Midwest
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              1.4 million square feet of advanced manufacturing space strategically positioned 
              to serve customers throughout North America.
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
                <Factory className="w-5 h-5 text-safety-orange" />
                Our Facilities
              </h3>
              {Object.values(locations).map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-safety-orange/10 border-safety-orange'
                      : 'bg-gray-50/50 border-gray-200 hover:border-white/20'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${
                          selectedLocation === location.id ? 'text-safety-orange' : 'text-robinson-black'
                        }`}>
                          {location.name}, {location.state}
                        </span>
                        {location.isNew && (
                          <span className="px-2 py-0.5 rounded-full bg-safety-orange text-white text-xs font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="text-white/90 text-sm">{location.sqft} sq. ft.</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-colors ${
                      selectedLocation === location.id ? 'text-safety-orange' : 'text-white/90'
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
                        depere: { x: 220, y: 100 },
                        manitowoc: { x: 260, y: 120 },
                        greenbay: { x: 230, y: 90 },
                        appleton: { x: 200, y: 130 },
                        oshkosh: { x: 180, y: 160 },
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
                    <div className="w-3 h-3 rounded-full bg-safety-orange" />
                    <span className="text-white/90">Wisconsin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-robinson-blue" />
                    <span className="text-white/90">Iowa (2027)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Location Details */}
      <section className="py-24 bg-gray-50">
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
                    <div className="p-6 rounded-xl bg-gray-500 border border-gray-200">
                      <Building2 className="w-8 h-8 text-safety-orange mb-3" />
                      <div className="text-2xl font-bold text-robinson-black">{currentLocation.sqft}</div>
                      <div className="text-robinson-gray-light text-sm">Square Feet</div>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-500 border border-gray-200">
                      <Users className="w-8 h-8 text-safety-orange mb-3" />
                      <div className="text-2xl font-bold text-robinson-black">{currentLocation.employees}</div>
                      <div className="text-robinson-gray-light text-sm">Employee-Owners</div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-8">
                    <h3 className="text-robinson-black font-semibold mb-4">Capabilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-4 py-2 rounded-lg bg-safety-orange/10 border border-safety-orange/30 text-safety-orange text-sm"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  {!currentLocation.isNew && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/90">
                        <MapPin className="w-5 h-5 text-safety-orange" />
                        <span>{currentLocation.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <Phone className="w-5 h-5 text-safety-orange" />
                        <a href={`tel:${currentLocation.phone}`} className="hover:text-safety-orange transition-colors">
                          {currentLocation.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <Mail className="w-5 h-5 text-safety-orange" />
                        <a href={`mailto:${currentLocation.email}`} className="hover:text-safety-orange transition-colors">
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
                      : 'bg-gradient-to-br from-safety-orange/20 to-safety-orange/5 border-safety-orange/30'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Factory className={`w-24 h-24 mx-auto mb-4 ${
                          currentLocation.isNew ? 'text-robinson-blue/40' : 'text-safety-orange/40'
                        }`} />
                        <div className="text-white/60 text-lg">{currentLocation.name} Facility</div>
                        {currentLocation.isNew && (
                          <div className="mt-4 px-4 py-2 rounded-full bg-robinson-blue/20 text-robinson-gold text-sm inline-block">
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
                      className="flex-1 px-6 py-3 bg-safety-orange text-white font-semibold rounded-lg hover:bg-safety-orange-light transition-all duration-300 text-center flex items-center justify-center gap-2"
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
              <Sparkles className="w-4 h-4 text-safety-orange" />
              Strategic Expansion
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-robinson-black mb-6">
              560,000 Sq. Ft. Iowa Facility
            </h2>
            <p className="text-robinson-gray text-lg mb-10 max-w-2xl mx-auto">
              Our Altoona, Iowa facility represents the largest single investment in Robinson's 
              history. Opening in 2027, this state-of-the-art facility will create 500+ new jobs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/careers"
                className="px-8 py-4 bg-safety-orange text-white font-semibold rounded-lg hover:bg-safety-orange-light transition-all duration-300 flex items-center gap-2"
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





