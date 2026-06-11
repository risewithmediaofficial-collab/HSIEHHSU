import { Link } from 'react-router-dom';
import { Wrench, Settings, Shield, Clock, TrendingUp, Phone, Mail, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';
import { useState } from 'react';
import SeoHelmet from '../components/SeoHelmet';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const rollerServices = [
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Roller Refurbish",
    description: "Complete restoration of corrugation rollers to original specifications using advanced metallurgical techniques and precision engineering",
    features: ["Precision grinding", "Dynamic balancing", "Surface hardening", "Dimensional correction"],
    badge: "PREMIUM",
    turnaround: "45-60 days",
    path: "/services/roller-refurbish",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Machine Support",
    description: "Structured machine support services focused on stability, alignment, and dependable production performance",
    features: ["Inspection planning", "Line alignment", "Production support", "Maintenance guidance"],
    badge: "ADVANCED",
    turnaround: "45-60 days",
    path: "/services/maintenance-support",
  },
];

  const supportServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Installation & Commissioning",
      description: "Complete setup, alignment, and commissioning of new corrugation machine lines with staff training",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Technical Support 24/7",
      description: "Round-the-clock technical assistance, troubleshooting, and expert guidance for all queries",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs designed to prevent breakdowns and maximize uptime",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Emergency Breakdown Support",
      description: "Rapid response service for unexpected machine failures with immediate on-site assistance",
    },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Assessment", 
      desc: "Detailed inspection, analysis, and quotation",
    },
    { 
      step: "02", 
      title: "Approval", 
      desc: "Client approval and detailed project planning",
    },
    { 
      step: "03", 
      title: "Execution", 
      desc: "Precision work with continuous quality checks",
    },
    { 
      step: "04", 
      title: "Delivery", 
      desc: "Final testing, certification, and support",
    },
  ];

  const whyChoose = [
    { 
      title: "ISO Certified Process", 
      description: "Quality assurance at every step",
    },
    { 
      title: "Reliable Timeline", 
      description: "45-60 days for precision completion",
    },
    { 
      title: "Expert Team", 
      description: "18+ years of combined expertise",
    },
    { 
      title: "24/7 Support", 
      description: "Always available for assistance",
    },
    { 
      title: "Cost Effective", 
      description: "Optimized pricing without compromise",
    },
  ];

  return (
    <>
      <SeoHelmet
        title="Our Services | Corrugation Roller Refurbish & Repair"
        description="Complete corrugation machine roller refurbish, repair, restoration, and maintenance services. ISO certified quality with quick turnaround."
        path="/services"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Comprehensive Service Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Our Professional Services & Support
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Specialized solutions for corrugation machine rollers and complete machinery support designed for maximum performance
            </p>
          </div>
        </div>
      </section>

      {/* ===== ROLLER SERVICES - TIMELINE ===== */}
      <section className="py-20 bg-white overflow-hidden" id="refurbish">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              Our Roller Services
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {rollerServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  className="px-4 py-2 border border-[#eee] bg-[#fafafa] text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest hover:border-[#f44336] hover:text-[#f44336] transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div className="mb-16 overflow-x-auto lg:overflow-visible pb-4 lg:pb-8">
            <div className="relative w-full lg:flex lg:items-center lg:justify-between px-4 sm:px-6 lg:px-0">
              {/* Connecting Line - Full Width */}
              <div className="absolute left-0 right-0 top-10 h-1 bg-[#f44336] -translate-y-full hidden lg:block" style={{zIndex: 0}}></div>
              
              {/* Service Nodes */}
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-0 lg:justify-between w-full">
                {rollerServices.map((service, index) => (
                  <div key={index} className="relative flex flex-col items-center gap-3 flex-1" style={{minWidth: 'fit-content'}}>
                    {/* Circle Node */}
                    <button
                      onClick={() => setSelectedService(index)}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ease-out z-10 group cursor-pointer ${
                        selectedService === index
                          ? 'bg-[#f44336] text-white shadow-2xl scale-110'
                          : 'bg-white text-[#f44336] border-2 border-[#f0f0f0] hover:border-[#f44336] hover:shadow-lg hover:scale-105 hover:bg-red-50'
                      }`}
                    >
                      <div className={`transition-all duration-300 ${selectedService === index ? 'scale-100' : 'group-hover:scale-110'}`}>
                        {service.icon}
                      </div>
                      
                      {/* Number Badge */}
                      <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full font-black text-xs flex items-center justify-center shadow-md transition-all duration-300 ${
                        selectedService === index
                          ? 'bg-white text-[#f44336] scale-110'
                          : 'bg-[#f44336] text-white group-hover:scale-110 group-hover:shadow-lg'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        selectedService === index
                          ? 'bg-[#f44336]/0'
                          : 'bg-[#f44336]/0 group-hover:bg-[#f44336]/10'
                      }`}></div>
                    </button>
                    
                    {/* Service Title */}
                    <div className="text-center">
                      <p className={`text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap px-1 ${
                        selectedService === index 
                          ? 'text-[#f44336] font-black scale-105' 
                          : 'text-[#4a4a4a] group-hover:text-[#f44336]'
                      }`}>
                        {service.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Detail Card */}
          <div className="bg-white border border-[#eee] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-2 p-8 lg:p-12 border-r border-[#eee]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-[#f44336]">
                    {rollerServices[selectedService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-2">
                      {rollerServices[selectedService].title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-[#f44336] text-xs font-black uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      <span>Turnaround: {rollerServices[selectedService].turnaround}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#4a4a4a] leading-relaxed mb-8 text-sm lg:text-base">
                  {rollerServices[selectedService].description}
                </p>

                <div>
                  <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {rollerServices[selectedService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0" />
                        <span className="text-[#4a4a4a] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Outcome Box */}
              <div className="bg-gradient-to-br from-[#f44336] to-[#ff5252] text-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5" />
                      <h4 className="font-black text-sm uppercase tracking-widest">Expected Outcome</h4>
                    </div>
                    <p className="text-base lg:text-lg leading-relaxed">
                      Superior quality with {rollerServices[selectedService].turnaround} turnaround and process-focused delivery support
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black uppercase tracking-widest">Progress</span>
                      <span className="text-xs font-black">{selectedService + 1}/{rollerServices.length} Services</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-500"
                        style={{width: `${((selectedService + 1) / rollerServices.length) * 100}%`}}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/get-quote?service=${encodeURIComponent(rollerServices[selectedService].title)}`}
                      className="block w-full bg-white text-[#f44336] px-6 py-3 text-center font-black text-sm uppercase tracking-widest hover:bg-[#f5f5f5] transition-colors rounded"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to={rollerServices[selectedService].path}
                      className="block w-full border border-white/50 text-white px-6 py-3 text-center font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#f44336] transition-colors rounded"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter text-center">
              Why Choose Our Services?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="notification-card p-10">
                <div className="w-2 h-2 bg-[#f44336] mb-6"></div>
                <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SUPPORT SERVICES ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]" id="maintenance">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Technical Support & Maintenance
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {supportServices.map((service, index) => (
              <div key={index} className="service-card p-10 flex flex-col items-center text-center">
                 <div className="text-[#f44336] mb-8">{service.icon}</div>
                 <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{service.title}</h3>
                 <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Service Process */}
          <div className="bg-white border border-[#eee] p-12 lg:p-16 relative overflow-hidden group">
            <div className="relative flex items-center gap-5 mb-16">
              <h3 className="text-2xl lg:text-3xl font-black text-[#f44336] uppercase tracking-tighter">Our Service Process</h3>
              <div className="flex-1 h-px bg-[#eee]"></div>
            </div>
            
            {/* Timeline Process */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-0 right-0 hidden lg:block h-1 bg-[#ffcdd2] z-0"></div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {processSteps.map((item, index) => (
                  <div key={index} className="relative flex flex-col">
                    {/* Step Number Circle - Rounded Design */}
                    <div className="flex items-center justify-center mb-8 relative group">
                      {/* Arrow on red line (except for last item) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-12 top-10 transform -translate-y-1/2 z-20 text-black text-xl font-bold group-hover:scale-150 transition-transform duration-300">
                          →
                        </div>
                      )}
                      
                      {/* Number Circle */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f44336] to-[#d32f2f] text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 cursor-pointer group-hover:from-[#d32f2f] group-hover:to-[#b71c1c] relative z-10">
                        <span className="font-black text-2xl tracking-tight">{item.step}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3 text-center">
                      <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="mt-16 pt-12 border-t border-[#eee]">
              <p className="text-center text-[#4a4a4a] text-sm font-medium">
                <span className="font-black text-[#f44336]">Structured methodology</span> ensuring successful delivery and measurable results every time
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter leading-none">
                  Comprehensive Service & Technical Coverage
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                From initial assessment to final delivery, we provide end-to-end service covering every aspect of roller refurbish and machinery maintenance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  "Complete roller restoration",
                  "ISO certified quality",
                  "Express turnaround",
                  "Comprehensive warranty",
                  "24/7 technical support",
                  "Tailored solutions"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f44336]"></div>
                    <span className="text-[#1a1a1a] font-bold text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Placeholder */}
            <div className="lg:pl-12">
              <div className="relative aspect-square bg-[#fafafa] border border-[#eee] p-12 flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
                <Wrench className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#fafafa] to-transparent">
                  <p className="text-[#1a1a1a] text-2xl font-black uppercase tracking-tighter opacity-10">Precision Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== TUNGSTEN CARBIDE ADVANTAGES ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              Tungsten Carbide Coating Advantages
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <p className="text-[#4a4a4a] text-sm lg:text-base">Micro hardness exceeds 1250 Vickers (72 HRC) with superior wear resistance and tenacity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              "Highest precision and dimensional accuracy for superior corrugation quality",
              "No limitation of running speed with enhanced operational efficiency",
              "Adaptable design fits all types of single facer corrugator machines",
              "No need to grind two sides after installation - reduces setup time",
              "4+ times longer lifespan compared to hard chrome corrugating rolls",
              "UVV or V profile design increases F.C.T, reduces glue consumption",
              "Lighter medium paper can be used, reducing material costs",
              "Maintains same flute height with excellent printability and stability",
              "Siphon system and rotary steam joint prevents deformation",
              "Resistant to accidental machine stops with full speed re-start capability",
              "No paper wastage even during emergency shutdowns",
              "Increased lifespan reduces maintenance intervals and bearing replacement costs"
            ].map((advantage, idx) => (
              <div key={idx} className="flex gap-4 p-6 lg:p-8 bg-[#fafafa] border border-[#eee] rounded-lg hover:border-[#f44336] hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#f44336] text-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1a1a1a] text-sm font-medium leading-relaxed">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS & SERVICES ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              Products & Services
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* New & Re-furbishing */}
            <div className="bg-white border border-[#eee] p-8 lg:p-12 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#f44336] text-white flex items-center justify-center font-black">1</div>
                <h3 className="text-xl lg:text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">New / Re-furbishing Rolls</h3>
              </div>
              <p className="text-[#4a4a4a] text-sm mb-6">For Single Facer Applications:</p>
              
              <div className="space-y-4">
                {[
                  { label: "A. Corrugating Rolls", desc: "Hard Chrome / Tungsten Carbide" },
                  { label: "B. Pressure Rolls", desc: "Standard specifications available" },
                  { label: "C. Glue Rolls", desc: "Stainless Steel / Hard Chrome" },
                  { label: "D. Doctor Rolls", desc: "Precision engineered components" }
                ].map((product, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-[#fafafa] rounded border-l-4 border-[#f44336]">
                    <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-black text-sm text-[#1a1a1a]">{product.label}</p>
                      <p className="text-xs text-[#4a4a4a]">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glue Machine Rolls */}
            <div className="bg-white border border-[#eee] p-8 lg:p-12 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#f44336] text-white flex items-center justify-center font-black">2</div>
                <h3 className="text-xl lg:text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Glue Machine Rolls</h3>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-[#eee]">
                {[
                  { label: "Glue Roll", desc: "Stainless Steel / Hard Chrome construction" },
                  { label: "Doctor Roll", desc: "Premium precision engineered for consistency" },
                  { label: "Application", desc: "Specifically designed for glue machine systems" },
                  { label: "Performance", desc: "Optimized for smooth glue application and control" }
                ].map((product, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-[#fafafa] rounded border-l-4 border-[#f44336]">
                    <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-black text-sm text-[#1a1a1a]">{product.label}</p>
                      <p className="text-xs text-[#4a4a4a]">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUALITY & TESTING ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
              Quality Assurance & Testing
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "CNC Electronic Testing",
                subtitle: "High Precision Measurement",
                description: "Mitutoyo precision testing technology ensures excellent quality and high precision results worthy of your trust"
              },
              {
                title: "Flute Profile Testing",
                subtitle: "Multiple Profile Options",
                description: "A/Flute, B/Flute, C/Flute, E/Flute profiles tested and verified for consistent performance"
              },
              {
                title: "Tungsten Carbide Analysis",
                subtitle: "SEM Microscopy (MAG.X 3000)",
                description: "Complete powder analysis and coating integrity verification at microscopic level for quality assurance"
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#fafafa] to-white border border-[#eee] p-8 lg:p-10 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#f44336] text-white flex items-center justify-center font-black text-sm">{idx + 1}</div>
                  <h3 className="text-lg lg:text-xl font-black text-[#1a1a1a] uppercase tracking-tight">{test.title}</h3>
                </div>
                <p className="text-xs font-black text-[#f44336] uppercase tracking-widest mb-3">{test.subtitle}</p>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{test.description}</p>
              </div>
            ))}
          </div>

          {/* Process Highlight */}
          <div className="mt-16 bg-gradient-to-r from-[#f44336] to-[#ff5252] text-white p-8 lg:p-12 rounded-lg">
            <div className="max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4">Production Excellence</h3>
              <p className="text-base leading-relaxed mb-6">
                Our advanced manufacturing process includes hot coating operations and precision circle grinder operations to ensure every roller meets the highest standards of quality, precision, and durability.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold">Hot Coating Operations for uniform coverage</span>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold">CNC Precision Finishing for exact dimensions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#eee]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f44336] uppercase tracking-tighter">
              Need Roller Refurbish or Service?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Get a free assessment and detailed quotation for your roller refurbish and maintenance needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote?service=Roller%20Refurbish"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
