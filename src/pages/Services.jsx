import { Link } from 'react-router-dom';
import { Wrench, Settings, Shield, Clock, TrendingUp, Phone, Mail, CheckCircle, ArrowRight, Zap, Target, Package } from 'lucide-react';
import {
  Build,
  Handyman,
  SettingsSuggest,
  PrecisionManufacturing,
  SupportAgent,
  Shield as ShieldMui,
  WorkspacePremium,
  Search,
  CheckCircleOutlined,
  BuildCircle,
  LocalShipping,
  VerifiedUser,
  Schedule,
  Engineering,
  HeadsetMic,
  Savings
} from '@mui/icons-material';
import { useState } from 'react';
import SeoHelmet from '../components/SeoHelmet';
import serviceRollerImage from '../assets/ChatGPT Image Jun 11, 2026, 03_07_37 PM (3).png';
import rollerRefurbishImg from '../assets/roller refurbish.jpg';
import rollerRepairImg from '../assets/roller repair.webp';
import sparePartsImg from '../assets/spare parts.jpeg';
import machineInstallationImg from '../assets/machine installation.jpg';
import maintenanceImg from '../assets/maintannece.png';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const rollerServices = [
    {
      icon: <Build className="w-10 h-10 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#7DD3FC]",
      title: "Roller Refurbish",
      description: "Complete restoration of corrugation rollers to original specifications using advanced metallurgical techniques and precision engineering",
      features: ["Precision grinding", "Dynamic balancing", "Surface hardening", "Dimensional correction"],
      badge: "PREMIUM",
      turnaround: "45-60 days",
      path: "/services/roller-refurbish",
      image: rollerRefurbishImg,
    },
    {
      icon: <Handyman className="w-10 h-10 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
      title: "Roller Repair",
      description: "Expert repair of damaged corrugation rollers including bearing journals, surface defects, and structural integrity restoration",
      features: ["Journal bearing repair", "Weld buildup", "Crack repair & geometry correction", "Emergency quick-turnaround"],
      badge: "EXPERT",
      turnaround: "30-45 days",
      path: "/services/roller-repair",
      image: rollerRepairImg,
    },
    {
      icon: <SettingsSuggest className="w-10 h-10 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
      title: "Machine Support",
      description: "Structured machine support services focused on stability, alignment, and dependable production performance",
      features: ["Inspection planning", "Line alignment", "Production support", "Maintenance guidance"],
      badge: "ADVANCED",
      turnaround: "45-60 days",
      path: "/services/maintenance-support",
      image: maintenanceImg,
    },
  ];

  const supportServices = [
    {
      icon: <PrecisionManufacturing className="w-8 h-8 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      title: "Installation & Commissioning",
      description: "Complete setup, alignment, and commissioning of new corrugation machine lines with staff training",
      image: machineInstallationImg,
    },
    {
      icon: <SupportAgent className="w-8 h-8 text-[#6366F1]" />,
      badgeBg: "bg-[#EEF2FF] border-[#C7D2FE]",
      title: "Technical Support 24/7",
      description: "Round-the-clock technical assistance, troubleshooting, and expert guidance for all queries",
      image: rollerRepairImg,
    },
    {
      icon: <ShieldMui className="w-8 h-8 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs designed to prevent breakdowns and maximize uptime",
      image: maintenanceImg,
    },
    {
      icon: <WorkspacePremium className="w-8 h-8 text-[#EA580C]" />,
      badgeBg: "bg-[#FFEDD5] border-[#FED7AA]",
      title: "Spare Parts Support",
      description: "OEM quality components for all major corrugation machinery manufacturers and brands",
      image: sparePartsImg,
    },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Assessment", 
      desc: "Detailed inspection, analysis, and quotation",
      icon: <Search className="w-7 h-7 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
    },
    { 
      step: "02", 
      title: "Approval", 
      desc: "Client approval and detailed project planning",
      icon: <CheckCircleOutlined className="w-7 h-7 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
    },
    { 
      step: "03", 
      title: "Execution", 
      desc: "Precision work with continuous quality checks",
      icon: <BuildCircle className="w-7 h-7 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
    },
    { 
      step: "04", 
      title: "Delivery", 
      desc: "Final testing, certification, and support",
      icon: <LocalShipping className="w-7 h-7 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
    },
  ];

  const whyChoose = [
    { 
      title: "ISO Certified Process", 
      description: "Quality assurance at every step",
      icon: <VerifiedUser className="w-6 h-6 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
    },
    { 
      title: "Reliable Timeline", 
      description: "45-60 days for precision completion",
      icon: <Schedule className="w-6 h-6 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
    },
    { 
      title: "Expert Team", 
      description: "18+ years of combined expertise",
      icon: <Engineering className="w-6 h-6 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
    },
    { 
      title: "24/7 Support", 
      description: "Always available for assistance",
      icon: <HeadsetMic className="w-6 h-6 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
    },
    { 
      title: "Cost Effective", 
      description: "Optimized pricing without compromise",
      icon: <Savings className="w-6 h-6 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
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
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E1DEE6] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#FFD601]/20 text-[#022B3A] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#022B3A] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Comprehensive Service Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#022B3A] uppercase">
              Our Professional Services & Support
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#022B3A]/80 leading-relaxed max-w-3xl mx-auto font-medium">
              Specialized solutions for corrugation machine rollers and complete machinery support designed for maximum performance
            </p>
          </div>
        </div>
      </section>

      {/* ===== ROLLER SERVICES - TIMELINE ===== */}
      <section className="py-20 bg-white overflow-hidden" id="refurbish">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Our Roller Services
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {rollerServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  className="px-4 py-2 border border-[#E1DEE6] bg-[#E1DEE6]/40 text-[#022B3A] text-[10px] font-black uppercase tracking-widest hover:border-[#022B3A] hover:text-[#022B3A] transition-colors rounded-lg"
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
              <div className="absolute left-0 right-0 top-10 h-1 bg-[#022B3A] -translate-y-full hidden lg:block" style={{zIndex: 0}}></div>
              
              {/* Service Nodes */}
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-0 lg:justify-between w-full">
                {rollerServices.map((service, index) => (
                  <div key={index} className="relative flex flex-col items-center gap-3 flex-1" style={{minWidth: 'fit-content'}}>
                    {/* Circle Node */}
                    <button
                      onClick={() => setSelectedService(index)}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ease-out z-10 group cursor-pointer ${
                        selectedService === index
                          ? 'bg-[#022B3A] text-white shadow-2xl scale-110'
                          : 'bg-white text-[#022B3A] border-2 border-[#E1DEE6] hover:border-[#022B3A] hover:shadow-lg hover:scale-105 hover:bg-[#E1DEE6]/40'
                      }`}
                    >
                      <div className={`transition-all duration-300 ${selectedService === index ? 'scale-100' : 'group-hover:scale-110'}`}>
                        {service.icon}
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        selectedService === index
                          ? 'bg-[#022B3A]/0'
                          : 'bg-[#022B3A]/0 group-hover:bg-[#022B3A]/10'
                      }`}></div>
                    </button>
                    
                    {/* Service Title */}
                    <div className="text-center">
                      <p className={`text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap px-1 ${
                        selectedService === index 
                          ? 'text-[#022B3A] font-black scale-105' 
                          : 'text-[#022B3A]/80 group-hover:text-[#1F7A8C]'
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
          <div className="bg-white border border-[#E1E5F2] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-2 p-8 lg:p-12 border-r border-[#E1E5F2]">
                {rollerServices[selectedService].image && (
                  <div className="w-full h-64 mb-8 overflow-hidden border border-[#E1E5F2]">
                    <img 
                      src={rollerServices[selectedService].image} 
                      alt={rollerServices[selectedService].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-[#1F7A8C]">
                    {rollerServices[selectedService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#022B3A] uppercase tracking-tighter mb-2">
                      {rollerServices[selectedService].title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-[#1F7A8C] text-xs font-black uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      <span>Turnaround: {rollerServices[selectedService].turnaround}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#022B3A]/80 leading-relaxed mb-8 text-sm lg:text-base">
                  {rollerServices[selectedService].description}
                </p>

                <div>
                  <h4 className="font-black text-[#022B3A] text-sm uppercase tracking-widest mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {rollerServices[selectedService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1F7A8C] flex-shrink-0" />
                        <span className="text-[#022B3A]/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Outcome Box */}
              <div className="bg-[#022B3A] text-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-[#BFDBF7]" />
                      <h4 className="font-black text-sm uppercase tracking-widest text-[#BFDBF7]">Expected Outcome</h4>
                    </div>
                    <p className="text-base lg:text-lg leading-relaxed text-[#BFDBF7]">
                      Superior quality with {rollerServices[selectedService].turnaround} turnaround and process-focused delivery support
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black uppercase tracking-widest text-[#BFDBF7]">Progress</span>
                      <span className="text-xs font-black text-[#BFDBF7]">{selectedService + 1}/{rollerServices.length} Services</span>
                    </div>
                    <div className="w-full h-2 bg-[#1F7A8C]/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#1F7A8C] transition-all duration-500"
                        style={{width: `${((selectedService + 1) / rollerServices.length) * 100}%`}}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/get-quote?service=${encodeURIComponent(rollerServices[selectedService].title)}`}
                      className="block w-full bg-[#1F7A8C] text-white px-6 py-3 text-center font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#022B3A] transition-colors rounded"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to={rollerServices[selectedService].path}
                      className="block w-full border border-[#BFDBF7]/50 text-[#BFDBF7] px-6 py-3 text-center font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#022B3A] transition-colors rounded"
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
            <h2 className="text-4xl md:text-5xl font-black text-[#1F7A8C] uppercase tracking-tighter text-center">
              Why Choose Our Services?
            </h2>
            <div className="w-20 h-1 bg-[#1F7A8C] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="notification-card p-8 bg-white border border-[#E1E5F2] hover:border-[#1F7A8C] transition-all rounded-xl shadow-sm flex flex-col group">
                <div className={`w-14 h-14 rounded-xl ${item.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-[#022B3A]/70 text-xs leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPORT SERVICES ===== */}
      <section className="py-16 bg-[#E1E5F2]/40 border-y border-[#E1E5F2]" id="maintenance">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F7A8C] uppercase tracking-tighter">
              Technical Support & Maintenance
            </h2>
            <div className="w-20 h-1 bg-[#1F7A8C] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportServices.map((service, index) => (
              <div key={index} className="service-card p-6 flex flex-col items-center text-center bg-white border border-[#E1E5F2] hover:border-[#1F7A8C] transition-all rounded-xl group overflow-hidden shadow-sm">
                 {service.image && (
                   <div className="w-full h-40 mb-6 overflow-hidden rounded-lg border border-[#E1E5F2]">
                     <img 
                       src={service.image} 
                       alt={service.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   </div>
                 )}
                 <div className={`w-14 h-14 rounded-xl ${service.badgeBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                   {service.icon}
                 </div>
                 <h3 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-3">{service.title}</h3>
                 <p className="text-[#022B3A]/70 text-xs leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Service Process */}
          <div className="bg-white border border-[#E1E5F2] p-12 lg:p-16 relative overflow-hidden group rounded-xl shadow-sm">
            <div className="relative flex items-center gap-5 mb-16">
              <h3 className="text-2xl lg:text-3xl font-black text-[#1F7A8C] uppercase tracking-tighter">Our Service Process</h3>
              <div className="flex-1 h-px bg-[#E1E5F2]"></div>
            </div>
            
            {/* Timeline Process */}
            <div className="relative">
              <div className="absolute top-10 left-0 right-0 hidden lg:block h-1 bg-[#BFDBF7] z-0"></div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {processSteps.map((item, index) => (
                  <div key={index} className="relative flex flex-col">
                    <div className="flex items-center justify-center mb-8 relative group">
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-12 top-10 transform -translate-y-1/2 z-20 text-[#022B3A] text-xl font-bold group-hover:scale-150 transition-transform duration-300">
                          →
                        </div>
                      )}
                      <div className={`w-20 h-20 rounded-2xl ${item.badgeBg} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer relative z-10`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-center">
                      <span className="text-xs font-black text-[#1F7A8C] uppercase tracking-widest">{item.step}</span>
                      <h4 className="font-black text-[#022B3A] text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[#022B3A]/70 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="mt-16 pt-12 border-t border-[#E1E5F2]">
              <p className="text-center text-[#022B3A]/80 text-sm font-medium">
                <span className="font-black text-[#1F7A8C]">Structured methodology</span> ensuring successful delivery and measurable results every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1F7A8C] uppercase tracking-tighter leading-none">
                  Comprehensive Service & Technical Coverage
                </h2>
                <div className="w-20 h-1 bg-[#1F7A8C]"></div>
              </div>

              <p className="text-lg text-[#022B3A]/80 leading-relaxed font-medium">
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
                    <div className="w-2 h-2 bg-[#1F7A8C]"></div>
                    <span className="text-[#022B3A] font-bold text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Placeholder */}
            <div className="lg:pl-12">
              <div className="relative aspect-square bg-[#E1E5F2]/40 border border-[#E1E5F2] flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#E1E5F2]"></div>
                <img
                  src={serviceRollerImage}
                  alt="Roller refurbish and service assembly"
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#E1E5F2] to-transparent">
                  <p className="text-[#022B3A] text-2xl font-black uppercase tracking-tighter opacity-10">Precision Service</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Tungsten Carbide Coating Advantages
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
            <p className="text-[#022B3A]/80 text-sm lg:text-base">Micro hardness exceeds 1250 Vickers (72 HRC) with superior wear resistance and tenacity</p>
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
              <div key={idx} className="flex gap-4 p-6 lg:p-8 bg-[#E1DEE6]/40 border border-[#E1DEE6] rounded-xl hover:border-[#FFD601] hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#022B3A] text-[#FFD601]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <p className="text-[#022B3A] text-sm font-medium leading-relaxed">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS & SERVICES ===== */}
      <section className="py-16 bg-[#E1DEE6]/40 border-y border-[#E1DEE6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Products & Services
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* New & Re-furbishing */}
            <div className="bg-white border border-[#E1DEE6] p-8 lg:p-12 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#022B3A] text-[#FFD601] flex items-center justify-center font-black">1</div>
                <h3 className="text-xl lg:text-2xl font-black text-[#022B3A] uppercase tracking-tighter">New / Re-furbishing Rolls</h3>
              </div>
              <p className="text-[#022B3A]/80 text-sm mb-6">For Single Facer Applications:</p>
              
              <div className="space-y-4">
                {[
                  { label: "A. Corrugating Rolls", desc: "Hard Chrome / Tungsten Carbide" },
                  { label: "B. Pressure Rolls", desc: "Standard specifications available" },
                  { label: "C. Glue Rolls", desc: "Stainless Steel / Hard Chrome" },
                  { label: "D. Doctor Rolls", desc: "Precision engineered components" }
                ].map((product, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-[#E1DEE6]/40 rounded-lg border-l-4 border-[#022B3A]">
                    <CheckCircle className="w-5 h-5 text-[#022B3A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-black text-sm text-[#022B3A]">{product.label}</p>
                      <p className="text-xs text-[#022B3A]/80">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glue Machine Rolls */}
            <div className="bg-white border border-[#E1DEE6] p-8 lg:p-12 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#022B3A] text-[#FFD601] flex items-center justify-center font-black">2</div>
                <h3 className="text-xl lg:text-2xl font-black text-[#022B3A] uppercase tracking-tighter">Glue Machine Rolls</h3>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-[#E1DEE6]">
                {[
                  { label: "Glue Roll", desc: "Stainless Steel / Hard Chrome construction" },
                  { label: "Doctor Roll", desc: "Premium precision engineered for consistency" },
                  { label: "Application", desc: "Specifically designed for glue machine systems" },
                  { label: "Performance", desc: "Optimized for smooth glue application and control" }
                ].map((product, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-[#E1DEE6]/40 rounded-lg border-l-4 border-[#022B3A]">
                    <CheckCircle className="w-5 h-5 text-[#022B3A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-black text-sm text-[#022B3A]">{product.label}</p>
                      <p className="text-xs text-[#022B3A]/80">{product.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Quality Assurance & Testing
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
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
              <div key={idx} className="bg-gradient-to-br from-[#E1DEE6]/50 to-white border border-[#E1DEE6] p-8 lg:p-10 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#022B3A] text-[#FFD601] flex items-center justify-center font-black text-sm">{idx + 1}</div>
                  <h3 className="text-lg lg:text-xl font-black text-[#022B3A] uppercase tracking-tight">{test.title}</h3>
                </div>
                <p className="text-xs font-black text-[#022B3A] uppercase tracking-widest mb-3">{test.subtitle}</p>
                <p className="text-[#022B3A]/80 text-sm leading-relaxed">{test.description}</p>
              </div>
            ))}
          </div>

          {/* Process Highlight */}
          <div className="mt-16 bg-[#022B3A] text-white p-8 lg:p-12 rounded-2xl shadow-md">
            <div className="max-w-3xl">
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 text-white">Production Excellence</h3>
              <p className="text-base leading-relaxed mb-6 text-[#E1DEE6]">
                Our advanced manufacturing process includes hot coating operations and precision circle grinder operations to ensure every roller meets the highest standards of quality, precision, and durability.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 text-[#FFD601]" />
                  <span className="font-bold text-white">Hot Coating Operations for uniform coverage</span>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0 text-[#FFD601]" />
                  <span className="font-bold text-white">CNC Precision Finishing for exact dimensions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#E1DEE6]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#022B3A] uppercase tracking-tighter">
              Need Roller Refurbish or Service?
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#022B3A]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Get a free assessment and detailed quotation for your roller refurbish and maintenance needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold shadow-md"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/918800350183"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
