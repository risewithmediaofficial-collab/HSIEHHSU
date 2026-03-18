import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ArrowRight, Shield, Zap, Clock, Users,
  TrendingUp, Hammer, Cog, Award, Briefcase, Headphones,
  Play, MapPin, Phone, Mail, Lightbulb,
  Target, Gauge, Wrench, Star, ArrowUpRight, ChevronRight
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import girnarlogo from '../assets/girnar.png';
import horizonlogo from '../assets/horizon.jpg';
import meghdootlogo from '../assets/meghdoot.webp';
import worthlogo from '../assets/worth.png';
import pioneerlogo from '../assets/pioneer.webp';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified manufacturing with zero-tolerance quality standards.",
      stat: "ISO Certified"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "48-72 hour turnaround without compromising precision or durability.",
      stat: "48-72 Hours"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Always Available",
      description: "Round-the-clock monitoring and dedicated technical support team.",
      stat: "24/7 Available"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Engineers",
      description: "Veterans with 20+ years average experience in corrugation industry.",
      stat: "20+ Years Avg"
    },
  ];

  const services = [
    {
      id: "refabrication",
      icon: <Hammer className="w-12 h-12" />,
      title: "Roller Refabrication",
      description: "Precision restoration bringing rollers back to original specifications with advanced metallurgical treatment",
      features: ["Profile Restoration", "Surface Treatment", "Dynamic Balancing", "NDT Testing"],
      link: "/services#refabrication",
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
    },
    {
      id: "installation",
      icon: <Cog className="w-12 h-12" />,
      title: "Machine Installation",
      description: "Complete commissioning, alignment, and integration of corrugation production lines",
      features: ["Setup & Calibration", "Testing & Validation", "Staff Training", "Documentation"],
      link: "/services#installation",
      gradient: "from-slate-600 to-gray-700",
      bgGradient: "from-slate-50 to-gray-100",
    },
    {
      id: "maintenance",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Preventive Maintenance",
      description: "Scheduled servicing programs designed to maximize equipment uptime and longevity",
      features: ["Inspection Protocols", "Lubrication Plans", "Performance Tracking", "Spare Parts"],
      link: "/services#maintenance",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      id: "parts",
      icon: <Award className="w-12 h-12" />,
      title: "Spare Parts Supply",
      description: "OEM quality components for all major corrugation machinery manufacturers and brands",
      features: ["OEM Quality", "Fast Logistics", "Inventory Management", "Technical Support"],
      link: "/products",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Production Optimization",
      company: "Premium Packaging Corp",
      industry: "Packaging",
      result: "45% efficiency gain through roller optimization",
      metric: "+45%",
      description: "Comprehensive roller restoration increased production capacity by 45% with zero downtime.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Emergency Response",
      company: "National Corrugators",
      industry: "Industrial",
      result: "24-hour emergency turnaround",
      metric: "24h",
      description: "Critical roller failure resolved in 24 hours, preventing 2-week production halt.",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "Long-term Partnership",
      company: "Fortune 500 Corrugator",
      industry: "Manufacturing",
      result: "20-year ongoing partnership",
      metric: "20y",
      description: "Trusted for comprehensive maintenance programs and strategic equipment innovations.",
      color: "from-emerald-500 to-teal-600"
    },
  ];

  const testimonials = [
    {
      id: 1,
      position: "Operations Manager",
      company: "Girnar Packaging",
      feedback: "HSIEHHSU transformed our maintenance approach. Downtime reduced by 60% in the first year alone. Their technical expertise is unmatched.",
      rating: 5,
      initial: "GP"
    },
    {
      id: 2,
      position: "Plant Head",
      company: "Horizon Packs",
      feedback: "Professional, reliable, and genuinely invested in our success. They don't just service equipment—they become partners in our growth.",
      rating: 5,
      initial: "HP"
    },
    {
      id: 3,
      position: "Production Manager",
      company: "Meghdoot Packaging",
      feedback: "The technical expertise is exceptional. They proactively identify issues before they become problems, saving us significant costs annually.",
      rating: 5,
      initial: "MP"
    },
    {
      id: 4,
      position: "Supply Chain Head",
      company: "Worthpheriphril",
      feedback: "Their 24/7 support has been a game-changer. Response times are incredible, and their solutions are always innovative and effective.",
      rating: 5,
      initial: "WP"
    },
    {
      id: 5,
      position: "Technical Director",
      company: "Pioneer Packaging",
      feedback: "Outstanding service quality and quick turnaround times. HSIEHHSU has been instrumental in improving our production efficiency by 45%.",
      rating: 5,
      initial: "PP"
    },
    {
      id: 6,
      position: "Plant Manager",
      company: "Vandana Packaging",
      feedback: "Exceptional technical knowledge combined with customer-first approach. Their maintenance programs have revolutionized our operations.",
      rating: 5,
      initial: "VP"
    },
    {
      id: 7,
      position: "Operations Head",
      company: "Rubykon Packaging",
      feedback: "Reliable, efficient, and always available when we need them. HSIEHHSU's expertise in roller refabrication is truly world-class.",
      rating: 5,
      initial: "RP"
    },
    {
      id: 8,
      position: "Production Supervisor",
      company: "Ravi Packages",
      feedback: "Excellent workmanship and superior after-sales support. We have complete confidence in their technical capabilities.",
      rating: 5,
      initial: "RP"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of equipment condition and performance requirements",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed customized solution design tailored to your production needs",
      icon: <Target className="w-7 h-7" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      number: "03",
      title: "Execution",
      description: "Precision implementation with minimal downtime and maximum efficiency",
      icon: <Gauge className="w-7 h-7" />,
      color: "from-amber-500 to-orange-600"
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing monitoring and support to ensure optimal long-term performance",
      icon: <Wrench className="w-7 h-7" />,
      color: "from-emerald-500 to-teal-600"
    },
  ];

  const advantages = [
    { 
      title: "Technical Excellence", 
      description: "State-of-the-art equipment and methodologies for superior results.", 
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "Cost Efficiency", 
      description: "Optimized processes reducing operational costs significantly.", 
      icon: <TrendingUp className="w-6 h-6" />
    },
    { 
      title: "Time Savings", 
      description: "Rapid turnaround without quality compromise.", 
      icon: <Clock className="w-6 h-6" />
    },
    { 
      title: "Reliability", 
      description: "Proven track record with 99.2% equipment uptime achievement.", 
      icon: <Shield className="w-6 h-6" />
    },
    { 
      title: "Support System", 
      description: "Dedicated team available around the clock for immediate assistance.", 
      icon: <Headphones className="w-6 h-6" />
    },
    { 
      title: "Innovation", 
      description: "Continuous improvement through latest industry technologies.", 
      icon: <Lightbulb className="w-6 h-6" />
    },
  ];

  // Client data with logos
  const clientsData = [
    { name: "Girnar Packaging", location: "Naidupeta", logo: girnarlogo },
    { name: "Horizon Packs", location: "Hosur", logo: horizonlogo },
    { name: "Meghdoot Packaging", location: "Rudrapur", logo: meghdootlogo },
    { name: "Worthpheriphril", location: "Indore", logo: worthlogo },
    { name: "Pioneer Packaging", location: "Kolkata", logo: pioneerlogo },
    { name: "Vandana Packaging", location: "Meerut", initials: "VP" },
    { name: "Rubykon Packaging", location: "Faridabad", initials: "RP" },
    { name: "Ravi Packages", location: "Hosur", initials: "RP" },
    { name: "Sri Hari Packaging", location: "Karur", initials: "SH" },
    { name: "Ramana Carton", location: "Villupuram", initials: "RC" },
  ];

  return (
    <>
      <Helmet>
        <title>HSIEHHSU MACHINERY INDIA | Premium Corrugation Excellence</title>
        <meta name="description" content="ISO-certified corrugation specialists. Premium roller refabrication, restoration, and maintenance solutions for maximum uptime and performance." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div className="space-y-7 lg:space-y-8">
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-50 to-red-100/50 text-red-700 px-5 py-2.5 rounded-full text-sm font-semibold border border-red-200/50 hover:border-red-300/70 transition-all duration-300 hover:shadow-md hover:shadow-red-100 group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="tracking-wide">Industry Trusted Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight">
                Premium{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    Corrugation
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100 -z-10 rounded"></span>
                </span>
                {' '}Excellence
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                ISO-certified specialists delivering world-class roller refabrication, restoration, and comprehensive maintenance solutions. Maximize uptime. Optimize performance. Transform production.
              </p>

              {/* Feature List */}
              <ul className="space-y-3.5 pt-2">
                {[
                  "500+ Successful Projects Completed",
                  "40+ Years of Industry Excellence",
                  "99.2% Equipment Uptime Record",
                  "24/7 Expert Technical Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium text-sm sm:text-base hover:text-red-600 transition-all duration-300 group">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-red-50 to-red-100 mr-3.5 flex-shrink-0 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                      <CheckCircle className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </span>
                    <span className="tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="tel:+919894235419"
                  className="btn-primary group"
                >
                  <Phone className="w-4 h-4 mr-2.5 group-hover:rotate-12 transition-transform duration-300" />
                  Call: +91 98942 35419
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-[480px] xl:h-[540px] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-gray-200/70 backdrop-blur hover:shadow-3xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
                    <Play className="w-24 h-24 mx-auto text-gray-300 relative z-10 group-hover:text-gray-400 transition-colors duration-500" />
                  </div>
                  <p className="text-gray-500 font-semibold text-lg mb-2">Your Hero Visual</p>
                  <p className="text-gray-400 text-sm">High-resolution machinery/facility image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects Delivered", value: "500+", color: "from-blue-400 to-blue-600" },
              { label: "Industry Experience", value: "40+", color: "from-emerald-400 to-emerald-600" },
              { label: "Uptime Success Rate", value: "99.2%", color: "from-amber-400 to-amber-600" },
              { label: "Support Availability", value: "24/7", color: "from-red-400 to-red-600" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS CAROUSEL ===== */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Trusted by Industry{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">We partner with India's most prominent corrugation manufacturers</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden lg:block"></div>

            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <style>{`
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-100%); }
                }
                
                @keyframes scroll-right {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(0); }
                }
                
                .scroll-left {
                  animation: scroll-left 20s linear infinite;
                }
                
                .scroll-right {
                  animation: scroll-right 20s linear infinite;
                }
                
                .carousel-content:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="carousel-content scroll-left flex gap-8 md:gap-12 lg:gap-16">
                {/* Original Set */}
                {clientsData.map((client, idx) => (
                  <div
                    key={`original-${idx}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative h-24 md:h-28 lg:h-32 min-w-[160px] md:min-w-[200px] lg:min-w-[240px] bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden hover:border-red-300 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 p-3 md:p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-center relative z-10 w-full flex flex-col items-center justify-center gap-1.5">
                        {client.logo ? (
                          <>
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="max-h-12 md:max-h-14 lg:max-h-16 max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="text-gray-700 font-semibold text-[10px] md:text-xs leading-tight">{client.name}</p>
                            <p className="text-gray-500 text-[9px] md:text-[10px]">{client.location}</p>
                          </>
                        ) : (
                          <>
                            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg font-bold text-[10px] md:text-xs group-hover:scale-110 transition-transform duration-300 shadow-md">
                              {client.initials}
                            </div>
                            <p className="text-gray-700 font-semibold text-[10px] md:text-xs leading-tight">{client.name}</p>
                            <p className="text-gray-500 text-[9px] md:text-[10px]">{client.location}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate Set for Seamless Loop */}
                {clientsData.map((client, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative h-24 md:h-28 lg:h-32 min-w-[160px] md:min-w-[200px] lg:min-w-[240px] bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden hover:border-red-300 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 p-3 md:p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-center relative z-10 w-full flex flex-col items-center justify-center gap-1.5">
                        {client.logo ? (
                          <>
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="max-h-12 md:max-h-14 lg:max-h-16 max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="text-gray-700 font-semibold text-[10px] md:text-xs leading-tight">{client.name}</p>
                            <p className="text-gray-500 text-[9px] md:text-[10px]">{client.location}</p>
                          </>
                        ) : (
                          <>
                            <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg font-bold text-[10px] md:text-xs group-hover:scale-110 transition-transform duration-300 shadow-md">
                              {client.initials}
                            </div>
                            <p className="text-gray-700 font-semibold text-[10px] md:text-xs leading-tight">{client.name}</p>
                            <p className="text-gray-500 text-[9px] md:text-[10px]">{client.location}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-10">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                HSIEHHSU?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We combine technical precision with unparalleled customer-centric service delivery
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fancy-card h-full"
              >
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                
                <div className="fancy-card-icon mb-6 w-14 h-14 flex items-center justify-center">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold fancy-card-title mb-3">{feature.title}</h3>
                <p className="fancy-card-desc mb-8 text-sm leading-relaxed flex-grow">{feature.description}</p>
                
                {feature.stat && (
                  <div className="pt-5 border-t border-gray-100/20 flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold fancy-card-stat-label uppercase tracking-wider">Key Metric</span>
                      <span className="text-sm font-bold fancy-card-stat">{feature.stat}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES GRID ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 lg:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Our Key <span className="text-red-600">Advantages</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Delivering industrial-grade performance through precision and expertise.</p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="fancy-card h-full">
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
                
                <div className="fancy-card-icon mb-6 w-14 h-14 flex items-center justify-center bg-red-50 rounded-xl group-hover:bg-red-600 transition-colors duration-500">
                  {adv.icon}
                </div>
                
                <h3 className="text-xl font-bold fancy-card-title mb-3">{adv.title}</h3>
                <p className="fancy-card-desc text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Our Core{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              End-to-end solutions for all corrugation machinery needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-12 relative z-10 pt-4">
            {services.map((service) => (
              <div key={service.id} className="glass-3d-parent cursor-pointer">
                <div className="glass-3d-card">
                  
                  {/* Decorative Logo / Icon Area */}
                  <div className="glass-3d-logo">
                    <span className="glass-3d-circle glass-3d-circle1"></span>
                    <span className="glass-3d-circle glass-3d-circle2"></span>
                    <span className="glass-3d-circle glass-3d-circle3"></span>
                    <span className="glass-3d-circle glass-3d-circle4"></span>
                    <span className="glass-3d-circle glass-3d-circle5 drop-shadow-md">
                      {service.icon}
                    </span>
                  </div>

                  <div className="glass-3d-glass"></div>
                  
                  {/* Content */}
                  <div className="glass-3d-content">
                    <span className="glass-3d-subtitle">Premium Service</span>
                    <span className="glass-3d-title">{service.title}</span>
                    <span className="glass-3d-text">{service.description}</span>
                    
                    <div className="glass-3d-features">
                      {service.features.map((feature, i) => (
                        <div key={i} className="glass-3d-feature-item">
                           <CheckCircle /> <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="glass-3d-bottom">
                    <Link to={service.link} className="glass-3d-view-more hover:scale-105 z-20 relative">
                      Explore Service
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </Link>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Removed View All Button as requested */}
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Structured approach ensuring excellence at every stage
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Process Steps */}
              <div className="space-y-7 lg:space-y-8">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {idx !== processSteps.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-red-300 via-red-200 to-transparent"></div>
                    )}
                    <div className="flex gap-5 lg:gap-6">
                      <div className="flex-shrink-0">
                        <div className={`relative flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-all duration-500`}>
                          <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                          <span className="relative z-10">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 tracking-tight group-hover:text-red-600 transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Placeholder */}
              <div className="hidden lg:block">
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-full min-h-[520px] rounded-3xl flex items-center justify-center border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60"></div>
                  <div className="text-center relative z-10">
                    <Hammer className="w-24 h-24 mx-auto text-gray-300 mb-4 group-hover:text-gray-400 transition-colors duration-500" />
                    <p className="text-gray-500 font-semibold text-lg">Process Flow Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Success{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Real results from industry-leading partners
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
            {caseStudies.map((study) => (
              <div key={study.id} className="notification-card h-full cursor-default">
                <div className="notiglow" />
                <div className="notiborderglow" />
                <div className="notititle">
                  <div className="noti-metric">{study.metric}</div>
                  {study.title}
                </div>
                <div className="notibody">
                  <div className="noti-company">{study.company} • {study.industry}</div>
                  <div className="noti-desc">{study.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              What Our{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Trusted by India's leading corrugation manufacturers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-7 border border-white/10 hover:border-red-500/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/10"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 text-xs">
                    {testimonial.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400">{testimonial.position}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{testimonial.feedback}"</p>

                {/* Company */}
                <div className="pt-5 border-t border-white/10">
                  <p className="text-xs text-red-400 font-bold tracking-wide">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-7 tracking-tight">
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Your Operations?
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Get expert guidance with a comprehensive technical consultation. Our team analyzes your equipment, production requirements, and delivers customized solutions optimized for maximum efficiency and ROI.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 lg:mb-20">
              <a
                href="tel:+919894235419"
                className="btn-primary group !px-10 !py-4"
              >
                <Phone className="w-5 h-5 mr-2.5 group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="btn-secondary group !px-10 !py-4"
              >
                Schedule Meeting
                <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Footer Info Grid */}
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 pt-12 lg:pt-16 border-t-2 border-gray-100">
              <div className="group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <p className="font-bold text-gray-900 mb-1.5 text-base">Location</p>
                <p className="text-gray-600 text-sm">India-based Operations</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7" />
                </div>
                <p className="font-bold text-gray-900 mb-1.5 text-base">Experience</p>
                <p className="text-gray-600 text-sm">40+ Years Expertise</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-7 h-7" />
                </div>
                <p className="font-bold text-gray-900 mb-1.5 text-base">Support</p>
                <p className="text-gray-600 text-sm">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};

export default Home;