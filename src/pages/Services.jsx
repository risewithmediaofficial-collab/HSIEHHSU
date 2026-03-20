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
  },
  {
    icon: <RefreshCw className="w-10 h-10" />,
    title: "Roller Repair",
    description: "Expert repair of damaged rollers including bearing journals, surface defects, and structural issues",
    features: ["Journal repair", "Weld buildup", "Crack repair", "Geometry restoration"],
    badge: "QUICK",
    turnaround: "45-60 days",
    warranty: "12 months",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Surface Restoration",
    description: "Specialized surface treatments to enhance durability, performance, and extend operational life significantly",
    features: ["Chrome plating", "Ceramic coating", "Nitriding", "Tungsten carbide"],
    badge: "ADVANCED",
    turnaround: "45-60 days",
    warranty: "12 months",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Performance Enhancement",
    description: "Strategic upgrades to improve roller efficiency, reduce wear, and extend overall service lifespan",
    features: ["Profile optimization", "Heat treatment", "Precision balancing", "Custom coatings"],
    badge: "PREMIUM+",
    turnaround: "45-60 days",
    warranty: "12 months",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Tungsten Carbide Coating",
    description: "Ultra-hard tungsten carbide coating application for extreme durability and superior wear resistance in demanding industrial environments",
    features: ["Tungsten carbide deposition", "Thermal spray application", "Enhanced hardness", "Extended service life"],
    badge: "ULTRA-DURABLE",
    turnaround: "45-60 days",
    warranty: "12 months",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Hard Chrome Plating",
    description: "Industrial-grade chrome plating service delivering superior hardness, corrosion resistance, and dimensional precision for optimal roller performance",
    features: ["Hard chrome plating", "Corrosion protection", "Wear resistance", "Dimensional control"],
    badge: "PROVEN",
    turnaround: "45-60 days",
    warranty: "12 months",
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
      title: "Standard Warranty", 
      description: "Comprehensive 12-month warranty",
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
      <Helmet>
        <title>Our Services | Corrugation Roller Refabrication & Repair</title>
        <meta name="description" content="Complete corrugation machine roller refabrication, repair, restoration, and maintenance services. ISO certified quality with quick turnaround." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Comprehensive Service Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
              Our Professional Services & Support
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Specialized solutions for corrugation machine rollers and complete machinery support designed for maximum performance
            </p>
          </div>
        </div>
      </section>

      {/* ===== ROLLER SERVICES ===== */}
      <section className="py-16 bg-white overflow-hidden" id="refabrication">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Roller Refabrication
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rollerServices.map((service, index) => (
              <div 
                key={index}
                className="service-card p-10 flex flex-col items-center text-center"
              >
                <div className="text-[#f44336] mb-8">
                  {service.icon}
                </div>

                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed mb-8">{service.description}</p>
                
                {/* Features */}
                <div className="w-full text-left space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                      <span className="text-[#4a4a4a] text-[10px] font-bold uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround Info */}
                <div className="mt-auto pt-6 border-t border-[#eee] w-full flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-[#aaa]">
                  <span>Turnaround: {service.turnaround}</span>
                  <span className="text-[#f44336]">Warranty: {service.warranty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== SERVICE GUARANTEES ===== */}
      <section className="py-16 bg-[#fafafa] relative overflow-hidden border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Warranty Card */}
            <div className="bg-white p-12 border border-[#eee] group">
              <div className="text-[#f44336] mb-8">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-[#f44336] mb-6 uppercase tracking-tighter">12-Month Comprehensive Warranty Promise</h3>
              <p className="text-[#4a4a4a] leading-relaxed text-lg mb-8 font-medium">
                Every roller refabrication and repair service is backed by our comprehensive 12-month professional warranty. We cover metallurgical integrity, surface bonding, and dimensional stability.
              </p>
              <div className="flex items-center gap-3 text-[#f44336] font-black uppercase tracking-[0.2em] text-[10px]">
                <Target className="w-4 h-4" />
                <span>Quality Guaranteed</span>
              </div>
            </div>

            {/* Turnaround Card */}
            <div className="bg-[#1a1a1a] p-12 text-white group">
              <div className="text-[#f44336] mb-8">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-[#f44336] mb-6 uppercase tracking-tighter">45-60 Day Precision Turnaround Plan</h3>
              <p className="text-[#aaa] leading-relaxed text-lg mb-8 font-medium">
                Our 45-60 day turnaround plan is engineered for precision. This window allows for deep-stage material tempering and multi-layer plating, guaranteeing OEM specifications.
              </p>
              <div className="flex items-center gap-3 text-[#f44336] font-black uppercase tracking-[0.2em] text-[10px]">
                <TrendingUp className="w-4 h-4" />
                <span>Precision Engineering</span>
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
            
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="relative z-10">
                    <div className="text-[#f44336] font-black text-6xl opacity-10 mb-6 group-hover:opacity-100 transition-opacity duration-700">
                      {item.step}
                    </div>
                    <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                From initial assessment to final delivery, we provide end-to-end service covering every aspect of roller refabrication and machinery maintenance.
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
      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#eee]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f44336] uppercase tracking-tighter">
              Need Roller Refabrication or Service?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Get a free assessment and detailed quotation for your roller refabrication and maintenance needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Contact Us
            </a>
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