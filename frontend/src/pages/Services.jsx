import { Helmet } from 'react-helmet-async';
import { Wrench, Settings, RefreshCw, Shield, Clock, TrendingUp, Phone, Mail, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';

const Services = () => {
const rollerServices = [
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Roller Refabrication",
    description: "Complete restoration of corrugation rollers to original specifications using advanced metallurgical techniques and precision engineering",
    features: ["Hard chrome plating", "Precision grinding", "Dynamic balancing", "Surface hardening"],
    badge: "PREMIUM",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: <RefreshCw className="w-10 h-10" />,
    title: "Roller Repair",
    description: "Expert repair of damaged rollers including bearing journals, surface defects, and structural issues",
    features: ["Journal repair", "Weld buildup", "Crack repair", "Geometry restoration"],
    badge: "QUICK",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Surface Restoration",
    description: "Specialized surface treatments to enhance durability, performance, and extend operational life significantly",
    features: ["Chrome plating", "Ceramic coating", "Nitriding", "Tungsten carbide"],
    badge: "ADVANCED",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Performance Enhancement",
    description: "Strategic upgrades to improve roller efficiency, reduce wear, and extend overall service lifespan",
    features: ["Profile optimization", "Heat treatment", "Precision balancing", "Custom coatings"],
    badge: "PREMIUM+",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Tungsten Carbide Coating",
    description: "Ultra-hard tungsten carbide coating application for extreme durability and superior wear resistance in demanding industrial environments",
    features: ["Tungsten carbide deposition", "Thermal spray application", "Enhanced hardness", "Extended service life"],
    badge: "ULTRA-DURABLE",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-slate-600 to-gray-700",
    bgGradient: "from-slate-50 to-gray-50",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Hard Chrome Plating",
    description: "Industrial-grade chrome plating service delivering superior hardness, corrosion resistance, and dimensional precision for optimal roller performance",
    features: ["Hard chrome plating", "Corrosion protection", "Wear resistance", "Dimensional control"],
    badge: "PROVEN",
    turnaround: "45-60 days",
    warranty: "12 months",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
  },
];

  const supportServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Installation & Commissioning",
      description: "Complete setup, alignment, and commissioning of new corrugation machine lines with staff training",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Technical Support 24/7",
      description: "Round-the-clock technical assistance, troubleshooting, and expert guidance for all queries",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs designed to prevent breakdowns and maximize uptime",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Emergency Breakdown Support",
      description: "Rapid response service for unexpected machine failures with immediate on-site assistance",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Assessment", 
      desc: "Detailed inspection, analysis, and quotation",
      gradient: "from-blue-500 to-indigo-600"
    },
    { 
      step: "02", 
      title: "Approval", 
      desc: "Client approval and detailed project planning",
      gradient: "from-emerald-500 to-teal-600"
    },
    { 
      step: "03", 
      title: "Execution", 
      desc: "Precision work with continuous quality checks",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      step: "04", 
      title: "Delivery", 
      desc: "Final testing, certification, and support",
      gradient: "from-amber-500 to-orange-600"
    },
  ];

  const whyChoose = [
    { 
      title: "ISO Certified Process", 
      description: "Quality assurance at every step",
      gradient: "from-blue-500 to-indigo-600"
    },
    { 
      title: "Reliable Timeline", 
      description: "45-60 days for precision completion",
      gradient: "from-emerald-500 to-teal-600"
    },
    { 
      title: "Expert Team", 
      description: "18+ years of combined expertise",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      title: "Standard Warranty", 
      description: "Comprehensive 12-month warranty",
      gradient: "from-amber-500 to-orange-600"
    },
    { 
      title: "24/7 Support", 
      description: "Always available for assistance",
      gradient: "from-red-500 to-rose-600"
    },
    { 
      title: "Cost Effective", 
      description: "Optimized pricing without compromise",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Corrugation Roller Refabrication & Repair</title>
        <meta name="description" content="Complete corrugation machine roller refabrication, repair, restoration, and maintenance services. ISO certified quality with quick turnaround." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CheckCircle className="w-4 h-4" />
              <span className="tracking-wide">Comprehensive Service Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight">
              Our Core{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Services
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Specialized solutions for corrugation machine rollers and complete machinery support designed for maximum performance
            </p>
          </div>
        </div>
      </section>

      {/* ===== ROLLER SERVICES ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white" id="refabrication">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Roller Refabrication{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Precision engineering to restore and enhance your corrugation rollers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
            {rollerServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-red-200 shadow-lg hover:shadow-2xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Badge Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Content */}
                <div className="p-7 lg:p-8">
                  <div className="flex items-start justify-between mb-7">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} text-gray-700 transition-all duration-500 group-hover:${service.gradient} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}>
                      {service.icon}
                    </div>
                    <span className={`bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3.5 text-gray-900 tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-7 leading-relaxed text-sm">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-7">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 group/item">
                          <span className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></span>
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Info */}
                  <div className="border-t-2 border-gray-100 pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4.5 h-4.5 text-red-600 mr-2" />
                        <span className="text-sm font-semibold">{service.turnaround}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-4.5 h-4.5 text-red-600 mr-2" />
                        <span className="text-sm font-semibold">{service.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== SERVICE GUARANTEES ===== */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Warranty Card */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[5rem] transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Standardized 12-Month <span className="text-red-600">Warranty</span></h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Every roller refabrication and repair service is backed by our comprehensive 12-month professional warranty. We cover metallurgical integrity, surface bonding, and dimensional stability, ensuring your production line operates with absolute confidence.
                </p>
                <div className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs">
                  <Target className="w-4 h-4" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Turnaround Card */}
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-white/10">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Optimized 45-60 Day <span className="text-red-500">Completion</span></h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  Our 45-60 day turnaround plan is engineered for precision. This window allows for deep-stage material tempering, multi-layer chrome/tungsten plating, and rigorous dynamic balancing, guaranteeing that every restored roller meets or exceeds OEM specifications.
                </p>
                <div className="flex items-center gap-3 text-red-400 font-bold uppercase tracking-widest text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span>Precision Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Our Services?
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-7 lg:p-8 rounded-2xl border-2 border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative inline-flex items-center justify-center w-3 h-3 rounded-full bg-gradient-to-br ${item.gradient} mb-5 group-hover:scale-150 transition-transform duration-500 shadow-lg`}></div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2.5 tracking-tight relative z-10">{item.title}</h4>
                <p className="text-gray-600 text-sm relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPORT SERVICES ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white" id="maintenance">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Technical Support &{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Maintenance
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services to keep your production running smoothly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 mb-16">
            {supportServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-red-200 p-7 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3.5 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Service Process */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 lg:p-12 text-white shadow-2xl border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="relative flex items-center gap-5 mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">Our Service Process</h3>
            </div>
            
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index !== processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-white/5"></div>
                  )}

                  {/* Step Card */}
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} font-bold text-2xl mx-auto mb-6 shadow-xl hover:scale-110 transition-transform duration-300`}>
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2.5 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-7">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Service Coverage
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                From initial assessment to final delivery, we provide end-to-end service covering every aspect of roller refabrication and machinery maintenance.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  "Complete roller restoration with advanced techniques",
                  "ISO certified quality assurance at every step",
                  "Express turnaround without compromising quality",
                  "Comprehensive warranty on all services",
                  "24/7 technical support and emergency assistance",
                  "Cost-effective solutions tailored to your needs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-red-50 to-red-100 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                        <CheckCircle className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="ml-3.5 text-gray-700 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Placeholder */}
            <div className="lg:pl-8">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 lg:h-full lg:min-h-[500px] flex items-center justify-center shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60"></div>
                <div className="text-center relative z-10">
                  <Wrench className="w-24 h-24 mx-auto text-gray-300 mb-4 group-hover:text-gray-400 transition-colors duration-500" />
                  <p className="text-gray-500 font-semibold text-lg">Service Process Visual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-7 tracking-tight">
            Need Roller{' '}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Service?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free assessment and detailed quotation for your roller refabrication and maintenance needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="tel:+919894235419"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 text-base shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5 mr-2.5 group-hover:rotate-12 transition-transform duration-300" />
              Call for Assessment
            </a>
            <a
              href="mailto:hsiehhsu.india@gmail.com"
              className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 text-base border-2 border-white/30 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-5 h-5 mr-2.5" />
              Email Requirements
            </a>
            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 text-base shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.353 9.879 9.879 0 006.474 13.104 9.865 9.865 0 004.935-1.352 9.879 9.879 0 00-6.474-13.105zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;