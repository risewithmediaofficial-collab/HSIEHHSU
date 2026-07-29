import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import {
  CheckCircle, ArrowRight,
  Play, MapPin, Mail,
  ArrowUpRight, ChevronRight, Package, Factory, Settings
} from 'lucide-react';
import {
  VerifiedUser,
  Speed,
  AccessTime,
  Engineering,
  Build,
  Handyman,
  PrecisionManufacturing,
  Timeline,
  WorkspacePremium,
  Lightbulb as LightbulbMui,
  Tune,
  Assessment,
  SupportAgent,
  Psychology,
  TrendingUp as TrendingUpMui,
  Schedule,
  Shield as ShieldMui,
  HeadsetMic,
  AutoAwesome,
  Star as StarMui,
  Phone as PhoneMui,
  Place as PlaceMui,
  Work as WorkMui
} from '@mui/icons-material';
import WhatsAppButton from '../components/WhatsAppButton';
import girnarlogo from '../assets/girnar.png';
import horizonlogo from '../assets/horizon.jpg';
import meghdootlogo from '../assets/meghdoot.webp';
import worthlogo from '../assets/worth.png';
import pioneerlogo from '../assets/pioneer.webp';
import ravilogo from '../assets/ravi.png';
import sriharilogo from '../assets/srihari.jpg';
import vandhanalogo from '../assets/vandhana.jpg';
import Rubykonlogo from '../assets/Rubykon.jpg';
import sriRamanaLogo from '../assets/SRI RAMANA CARTONS Logo.avif';
import premIndustriesLogo from '../assets/prem industries logo.png';
import akshayPackingLogo from '../assets/akshay packing logo.png';
import southIndiaPaperMillLogo from '../assets/southmillpapermill.jpg';
import ranganayakiPapersLogo from '../assets/rangabayaki logo.jpg';

import techExcellenceImg from '../assets/technical excellence.jpg';
import costEfficiencyImg from '../assets/cost effiecney.jpg';
import timeSavingsImg from '../assets/time savings.jpg';
import reliabilityImg from '../assets/realiblity.png';
import supportSystemImg from '../assets/support system.jpg';
import innovationImg from '../assets/innovation.jpg';

import rollerRefurbishImg from '../assets/roller refurbish.jpg';
import rollerRepairImg from '../assets/roller repair.webp';
import machineInstallationImg from '../assets/machine installation.jpg';
import maintenanceImg from '../assets/maintannece.png';
import sparePartsImg from '../assets/spare parts.jpeg';
const Home = () => {
  const features = [
    {
      icon: <VerifiedUser className="w-8 h-8 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      title: "Quality Assured",
      description: "ISO 9001:2015 certified manufacturing with zero-tolerance quality standards.",
      stat: "ISO Certified"
    },
    {
      icon: <Speed className="w-8 h-8 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      title: "Lightning Fast",
      description: "48-72 hour turnaround without compromising precision or durability.",
      stat: "48-72 Hours"
    },
    {
      icon: <AccessTime className="w-8 h-8 text-[#6366F1]" />,
      badgeBg: "bg-[#EEF2FF] border-[#C7D2FE]",
      title: "Always Available",
      description: "Round-the-clock monitoring and dedicated technical support team.",
      stat: "24/7 Available"
    },
    {
      icon: <Engineering className="w-8 h-8 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
      title: "Expert Engineers",
      description: "Veterans with 20+ years average experience in corrugation industry.",
      stat: "20+ Years Avg"
    },
  ];

  const services = [
    {
      id: "refurbish",
      icon: <Build className="w-10 h-10 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#7DD3FC]",
      title: "Roller Refurbish",
      description: "Precision restoration bringing rollers back to original specifications with advanced metallurgical treatment",
      link: "/services/roller-refurbish",
      image: rollerRefurbishImg,
    },
    {
      id: "repair",
      icon: <Handyman className="w-10 h-10 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
      title: "Roller Repair",
      description: "Expert repair of damaged corrugation rollers including bearing journals, surface defects, and structural restoration",
      link: "/services/roller-repair",
      image: rollerRepairImg,
    },
    {
      id: "installation",
      icon: <PrecisionManufacturing className="w-10 h-10 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
      title: "Machine Installation",
      description: "Complete commissioning, alignment, and integration of HHC fully automatic whole lines for 5-ply and 7-ply production",
      link: "/services#installation",
      image: machineInstallationImg,
    },
    {
      id: "maintenance",
      icon: <Timeline className="w-10 h-10 text-[#10B981]" />,
      badgeBg: "bg-[#D1FAE5] border-[#A7F3D0]",
      title: "Preventive Maintenance",
      description: "Scheduled servicing programs designed to maximize equipment uptime while reducing spare usage and maintenance load",
      link: "/services#maintenance",
      image: maintenanceImg,
    },
    {
      id: "parts",
      icon: <WorkspacePremium className="w-10 h-10 text-[#EA580C]" />,
      badgeBg: "bg-[#FFEDD5] border-[#FED7AA]",
      title: "Spare Parts Supply",
      description: "OEM quality components for all major corrugation machinery manufacturers and brands",
      link: "/products",
      image: sparePartsImg,
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
    },
    {
      id: 2,
      title: "Emergency Response",
      company: "National Corrugators",
      industry: "Industrial",
      result: "24-hour emergency turnaround",
      metric: "24h",
      description: "Critical roller failure resolved in 24 hours, preventing 2-week production halt.",
    },
    {
      id: 3,
      title: "Long-term Partnership",
      company: "Fortune 500 Corrugator",
      industry: "Manufacturing",
      result: "20-year ongoing partnership",
      metric: "20y",
      description: "Trusted for comprehensive maintenance programs and strategic equipment innovations.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      position: "Operations Manager",
      company: "Girnar Packaging",
      feedback: "HSIEHHSU transformed our maintenance approach. Downtime reduced by 60% and support stayed consistent.",
      rating: 5,
      initial: "GP"
    },
    {
      id: 2,
      position: "Plant Head",
      company: "Horizon Packs",
      feedback: "Precision engineered rollers doubled our operational speed. Exceptional service and prompt deliveries.",
      rating: 5,
      initial: "HP"
    },
    {
      id: 3,
      position: "Technical Director",
      company: "Meghdoot Packaging",
      feedback: "The quality of refurbishing is outstanding. Roller life spans increased significantly beyond expectations.",
      rating: 5,
      initial: "MP"
    },
    {
      id: 4,
      position: "Production Lead",
      company: "Pioneer Packaging",
      feedback: "Fast turnaround times saved us from costly plant shutdowns multiple times. Unmatched reliability.",
      rating: 5,
      initial: "PP"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of equipment condition and performance requirements",
      icon: <LightbulbMui className="w-7 h-7 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed customized solution design tailored to your production needs",
      icon: <Tune className="w-7 h-7 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
    },
    {
      number: "03",
      title: "Execution",
      description: "Precision implementation with minimal downtime and maximum efficiency",
      icon: <Assessment className="w-7 h-7 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing monitoring and support to ensure optimal long-term performance",
      icon: <SupportAgent className="w-7 h-7 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
    },
  ];

  const advantages = [
    {
      title: "Technical Excellence",
      description: "State-of-the-art equipment and methodologies for superior results.",
      icon: <Psychology className="w-6 h-6 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      image: techExcellenceImg
    },
    {
      title: "Cost Efficiency",
      description: "Optimized processes reducing operational costs significantly.",
      icon: <TrendingUpMui className="w-6 h-6 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      image: costEfficiencyImg
    },
    {
      title: "Time Savings",
      description: "Rapid turnaround without quality compromise.",
      icon: <Schedule className="w-6 h-6 text-[#6366F1]" />,
      badgeBg: "bg-[#EEF2FF] border-[#C7D2FE]",
      image: timeSavingsImg
    },
    {
      title: "Reliability",
      description: "Proven track record with dependable uptime across demanding plant conditions.",
      icon: <ShieldMui className="w-6 h-6 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
      image: reliabilityImg
    },
    {
      title: "Support System",
      description: "Dedicated team available around the clock for immediate assistance.",
      icon: <HeadsetMic className="w-6 h-6 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
      image: supportSystemImg
    },
    {
      title: "Innovation",
      description: "Continuous improvement through latest industry technologies.",
      icon: <AutoAwesome className="w-6 h-6 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
      image: innovationImg
    },
  ];

  // Client data with logos
  const clientsData = [
    { name: "Girnar Packaging", location: "Naidupeta", logo: girnarlogo },
    { name: "Horizon Packs", location: "Hosur", logo: horizonlogo },
    { name: "Meghdoot Packaging", location: "Rudrapur", logo: meghdootlogo },
    { name: "Worthpheriphril", location: "Indore", logo: worthlogo },
    { name: "Pioneer Packaging", location: "Kolkata", logo: pioneerlogo },
    { name: "Vandana Packaging", location: "Meerut", logo: vandhanalogo },
    { name: "Rubykon Packaging", location: "Faridabad", logo: Rubykonlogo },
    { name: "Ravi Packages", location: "Hosur", logo: ravilogo },
    { name: "Sri Hari Packaging", location: "Karur", logo: sriharilogo },
    { name: "Sri Ramana Cartons", location: "Villupuram", logo: sriRamanaLogo },
    { name: "Prem Industries", location: "India", logo: premIndustriesLogo },
    { name: "Akshay Packing", location: "India", logo: akshayPackingLogo },
    { name: "South India Paper Mill", location: "Nanjangud", logo: southIndiaPaperMillLogo },
    { name: "Ranganayaki Papers", location: "Coimbatore", logo: ranganayakiPapersLogo },
  ];

  return (
    <div className="home-page-theme text-[#022B3A]">
      <SeoHelmet
        title="HSIEHHSU MACHINERY INDIA | Premium Corrugation Excellence"
        description="ISO-certified corrugation specialists. Premium roller refurbishing, restoration, and maintenance solutions for maximum uptime and performance."
        path="/"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-2 pb-16 md:pt-4 md:pb-20 lg:pt-6 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E1E5F2] -z-10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#1F7A8C]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6 lg:space-y-7 animate-slide-up">
              <div className="inline-flex items-center gap-2.5 bg-[#BFDBF7]/40 text-[#1F7A8C] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#1F7A8C] uppercase tracking-widest">
                <span className="tracking-wide">Industry Trusted Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-[#022B3A] tracking-tight">
                Premium <span className="text-[#022B3A] underline decoration-[#FFD601] decoration-4">Corrugation</span> Engineering Excellence
              </h1>

              <p className="text-base md:text-lg text-[#022B3A]/80 leading-relaxed max-w-xl font-medium">
                ISO-certified specialists delivering world-class roller refurbishing, restoration, and comprehensive maintenance solutions.
              </p>

              {/* CTA Buttons — left-aligned to match heading */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <a
                  href="tel:+919894235419"
                  className="btn-primary whitespace-nowrap"
                >
                  <PhoneMui className="w-4 h-4 mr-2.5 flex-shrink-0" />
                  Call 1: +91 98942 35419
                </a>
                <a
                  href="tel:+918800350183"
                  className="btn-gold whitespace-nowrap"
                >
                  <PhoneMui className="w-4 h-4 mr-2.5 flex-shrink-0" />
                  Call 2: +91 88003 50183
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2.5" />
                </Link>
              </div>

              {/* Quick Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-[#E1DEE6]">
                {[
                  { label: "ISO 9001:2015", desc: "Certified" },
                  { label: "40+ Years", desc: "Industry Experience" },
                  { label: "99.2%", desc: "Uptime Rate" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#022B3A] font-black text-base tracking-tighter">{stat.label}</span>
                    <span className="text-[#022B3A]/60 text-[10px] font-bold uppercase tracking-widest">{stat.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual — polished info panel with Deep Navy & Gold theme */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative bg-[#022B3A] h-[480px] xl:h-[540px] flex flex-col justify-between overflow-hidden shadow-xl rounded-2xl">
                {/* Yellow accent bar */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FFD601]"></div>
                {/* Top content */}
                <div className="p-12 pt-16 pl-14">
                  <p className="text-[#FFD601] text-[10px] font-black uppercase tracking-[0.3em] mb-6">HSIEHHSU Machinery India</p>
                  <h2 className="text-white font-black text-3xl xl:text-4xl tracking-tight leading-tight mb-8">
                    Engineering<br />Corrugation<br /><span className="text-[#FFD601]">Excellence</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Roller Refurbish & Repair",
                      "Machine Installation & Commissioning",
                      "Preventive Maintenance Programs",
                      "HHC fully automatic whole line - 5-ply / 7-ply",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#FFD601] flex-shrink-0"></div>
                        <span className="text-[#E1DEE6] text-xs font-bold uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom stat strip */}
                <div className="grid grid-cols-3 border-t border-white/10 bg-[#022B3A]">
                  {[
                    { v: "500+", l: "Projects" },
                    { v: "40+", l: "Years" },
                    { v: "24/7", l: "Support" },
                  ].map((s, i) => (
                    <div key={i} className={`py-6 flex flex-col items-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                      <span className="text-[#FFD601] font-black text-xl tracking-tighter">{s.v}</span>
                      <span className="text-[#E1DEE6]/70 text-[9px] font-bold uppercase tracking-widest mt-1">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 md:py-16 bg-[#E1DEE6] border-y border-[#022B3A]/20 relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Industry Experience", value: "40+" },
              { label: "Uptime Success Rate", value: "99.2%" },
              { label: "Support Availability", value: "24/7" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group border-r last:border-r-0 border-[#022B3A]/20">
                <div className="text-4xl md:text-5xl font-black text-[#022B3A] mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <p className="text-[#022B3A] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS SECTION ===== */}
      <section className="relative py-16 bg-[#E1DEE6]/40 overflow-hidden">
        {/* Section Header — full width */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-black text-[#022B3A] mb-3 uppercase tracking-tight">
            Trusted by Packaging Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
        </div>

        {/* Carousel with edge fade masks */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #E1DEE6, transparent)' }}></div>
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #E1DEE6, transparent)' }}></div>

          <div className="overflow-hidden">
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-left {
                animation: scroll-left 40s linear infinite;
                width: max-content;
              }
              .scroll-left:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="scroll-left flex gap-6 py-2">
              {[...clientsData, ...clientsData].map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 p-6 bg-white border border-[#E1DEE6] w-[180px] flex flex-col items-center justify-center gap-3 hover:border-[#022B3A] transition-all duration-300 shadow-sm"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-auto object-contain max-w-[120px]"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-[#022B3A] text-white flex items-center justify-center font-black text-xs">
                      {client.initials}
                    </div>
                  )}
                  <p className="text-[#022B3A] font-bold text-[9px] uppercase tracking-widest text-center leading-tight">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES / WHY CHOOSE ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4 tracking-tight">
              Why Hsiehhsu?
            </h2>
            <div className="w-24 h-1 bg-[#FFD601] mx-auto mb-6"></div>
            <p className="text-base text-[#022B3A]/80 leading-relaxed font-medium">
              We combine technical precision with unparalleled customer-centric service delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="fancy-card border border-[#E1DEE6] hover:border-[#FFD601] p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
                <div className={`w-16 h-16 rounded-xl ${feature.badgeBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="fancy-card-title text-[#022B3A] text-xl font-black mb-2 uppercase tracking-tight">{feature.title}</h3>
                <p className="fancy-card-desc text-[#022B3A]/80 text-sm leading-relaxed mb-6 font-medium">{feature.description}</p>
                <div className="mt-auto pt-4 border-t border-[#E1DEE6]">
                  <span className="text-[#022B3A] text-xs font-black uppercase tracking-widest">{feature.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY ADVANTAGES ===== */}
      <section className="py-16 bg-[#E1DEE6]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-[#022B3A] uppercase tracking-tight">
              Our Key Advantages
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E1DEE6] shadow-sm hover:shadow-md hover:border-[#022B3A] transition-all duration-300 overflow-hidden flex flex-col h-full group"
              >
                {/* Image on top */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={adv.image}
                    alt={adv.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content below image */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-3 ${adv.badgeBg} rounded-xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {adv.icon}
                    </div>
                    <h3 className="text-xl font-black text-[#022B3A] uppercase tracking-tighter">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-[#022B3A]/80 text-sm leading-relaxed font-medium">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-16 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] uppercase tracking-tight">
              Explore Our Core Specialization Services
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E1DEE6] shadow-sm hover:shadow-md hover:border-[#022B3A] transition-all duration-300 overflow-hidden group"
              >
                <div className="grid md:grid-cols-2 items-center">
                  {/* Image Container */}
                  <div
                    className={`h-64 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden bg-gray-100 ${
                      idx % 2 !== 0 ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div
                    className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${
                      idx % 2 !== 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div className={`mb-5 p-4 ${service.badgeBg} rounded-xl inline-block w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#022B3A] mb-4 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#022B3A]/80 text-sm md:text-base leading-relaxed font-medium mb-6">
                      {service.description}
                    </p>

                    <div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-[#022B3A] font-black uppercase tracking-widest text-xs md:text-sm border-b-2 border-[#FFD601] pb-1 hover:text-[#022B3A] transition-colors"
                      >
                        Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-16 bg-[#E1DEE6]/50 border-y border-[#E1DEE6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-6 uppercase tracking-tight">
              Our Precision Methodology
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-0 relative">
            {/* Connecting line with arrows */}
            <div className="absolute top-10 left-0 right-0 hidden lg:block h-1 bg-[#022B3A]/20 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 mb-12 lg:mb-0">
                <div className="flex flex-col items-center">
                  {/* Round icon badge */}
                  <div className="relative mb-8 group">
                    <div className={`w-20 h-20 rounded-2xl ${step.badgeBg} flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer relative z-20`}>
                      {step.icon}
                    </div>
                    {/* Arrow on connecting line */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-12 top-10 transform -translate-y-1/2 z-20 text-[#022B3A] text-xl font-bold group-hover:scale-150 transition-transform duration-300">
                        →
                      </div>
                    )}
                  </div>
                  
                  {/* Title and description */}
                  <div className="text-center">
                    <div className="inline-block text-xs font-black text-[#022B3A] uppercase tracking-widest mb-1">{step.number}</div>
                    <h3 className="text-sm font-black text-[#022B3A] mb-3 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-[#022B3A]/70 text-xs font-medium leading-relaxed px-2">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black text-[#022B3A] uppercase tracking-tight">
              Real-World Case Studies & Success
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="notification-card h-full">
                <div className="noti-metric text-[#022B3A]">{study.metric}</div>
                <h3 className="text-xl font-black text-[#022B3A] mb-2 uppercase tracking-tighter">{study.title}</h3>
                <div className="noti-company text-[#022B3A]">{study.company} • {study.industry}</div>
                <p className="noti-desc font-medium text-[#022B3A]/80">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 bg-[#E1DEE6]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black text-[#022B3A] uppercase tracking-tight">
              Client Testimonials & Feedback
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 border border-[#E1DEE6] hover:border-[#FFD601] transition-all duration-300 shadow-sm rounded-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarMui key={i} className="w-4 h-4 text-[#D97706]" />
                  ))}
                </div>

                <p className="text-[#022B3A]/80 text-sm leading-relaxed mb-8 font-medium line-clamp-2">"{testimonial.feedback}"</p>

                <div className="pt-6 border-t border-[#E1DEE6]">
                  <p className="text-[#022B3A] font-black text-[10px] uppercase tracking-widest">{testimonial.company}</p>
                  <p className="text-[#022B3A]/80 text-[9px] font-bold uppercase tracking-widest mt-1">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-16 bg-[#022B3A] overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FFD601]/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Ready to Transform <span className="text-[#FFD601]">Your Operations?</span>
            </h2>
            <p className="text-base text-[#E1DEE6]/80 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              Get expert guidance with a comprehensive technical consultation. Our team delivers customized solutions optimized for maximum efficiency, less spares usage, and lower maintenance load.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="tel:+919894235419" className="btn-gold">
                <PhoneMui className="w-5 h-5 mr-3" />
                Call Now
              </a>
              <Link to="/contact" className="btn-primary border-white">
                Schedule Meeting
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-0 border border-white/10 bg-[#0D1D4A]">
              {[
                { icon: <PlaceMui className="w-6 h-6 text-[#FFD601]" />, label: 'Location', desc: 'India-based Operations' },
                { icon: <WorkMui className="w-6 h-6 text-[#FFD601]" />, label: 'Experience', desc: '40+ Years Expertise' },
                { icon: <HeadsetMic className="w-6 h-6 text-[#FFD601]" />, label: 'Support', desc: '24/7 Available' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center py-10 px-6 ${i < 2 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}`}>
                  <div className="w-12 h-12 border border-[#FFD601]/40 flex items-center justify-center text-[#FFD601] mb-4">
                    {item.icon}
                  </div>
                  <p className="font-black text-white uppercase tracking-tighter mb-1 text-sm">{item.label}</p>
                  <p className="text-[#E1DEE6]/70 text-[10px] uppercase tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Home;
