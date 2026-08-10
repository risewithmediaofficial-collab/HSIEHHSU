import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import {
  CheckCircle, ArrowRight,
  Play, MapPin, Mail,
  ArrowUpRight, ChevronLeft, ChevronRight, Package, Factory, Settings
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
import sparePartsImg from '../assets/spare parts.jpg';
const Home = () => {
  const servicesCarouselRef = useRef(null);

  const scrollServices = (direction) => {
    const carousel = servicesCarouselRef.current;

    if (!carousel) return;

    const card = carousel.querySelector('[data-service-card]');
    const cardWidth = card?.getBoundingClientRect().width || 360;
    const gap = 20;

    carousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

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
    <div className="home-page-theme text-[#1a365d]">
      <SeoHelmet
        title="HSIEHHSU MACHINERY INDIA | Premium Corrugation Excellence"
        description="ISO-certified corrugation specialists. Premium roller refurbishing, restoration, and maintenance solutions for maximum uptime and performance."
        path="/"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 bg-white overflow-hidden">
        {/* Subtle ambient light accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f7f9fb] -z-10 rounded-l-3xl"></div>
        <div className="absolute top-12 right-12 w-96 h-96 bg-[#2b6caf]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f7f9fb] border border-[#d6e4f0] text-[#2b6caf] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#2b6caf] animate-pulse"></span>
                <span>ISO 9001:2015 CERTIFIED SPECIALISTS</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[#1a365d] tracking-tight leading-[1.15]">
                Precision Corrugation <span className="text-[#2b6caf]">Engineering</span> & Machinery
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#1a365d]/80 leading-relaxed font-normal max-w-xl">
                World-class roller refurbishing, tungsten carbide surface restoration, and high-performance corrugator line solutions for maximum production uptime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919894235419"
                  className="btn-secondary flex items-center gap-2"
                  title="Director: +91 98942 35419"
                >
                  <PhoneMui className="w-4 h-4 text-[#2b6caf]" />
                  <span>+91 98942 35419</span>
                </a>

                <a
                  href="tel:+918800350183"
                  className="btn-secondary flex items-center gap-2"
                  title="Sales (Mr. Kamal): +91 88003 50183"
                >
                  <PhoneMui className="w-4 h-4 text-[#2b6caf]" />
                  <span>+91 88003 50183</span>
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-6 border-t border-[#d6e4f0] grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-black text-[#1a365d]">40+</p>
                  <p className="text-xs text-[#1a365d]/70 font-semibold uppercase tracking-wider mt-0.5">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#1a365d]">500+</p>
                  <p className="text-xs text-[#1a365d]/70 font-semibold uppercase tracking-wider mt-0.5">Projects Done</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#2b6caf]">99.2%</p>
                  <p className="text-xs text-[#1a365d]/70 font-semibold uppercase tracking-wider mt-0.5">Uptime Rate</p>
                </div>
              </div>
            </div>

            {/* Right Showcase Column — Clean Modern 2x2 Capabilities Card */}
            <div className="lg:col-span-6 animate-fade-in">
              <div className="bg-white border border-[#d6e4f0] rounded-2xl p-5 sm:p-6 shadow-lg relative overflow-hidden">
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#d6e4f0] mb-4">
                  <div>
                    <p className="text-[11px] font-bold text-[#2b6caf] uppercase tracking-widest">HSIEHHSU Machinery India</p>
                    <h3 className="text-lg font-black text-[#1a365d] mt-0.5">Core Capabilities & Services</h3>
                  </div>
                </div>

                {/* 2x2 Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#d6e4f0]/60 hover:border-[#2b6caf] transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-[#1a365d] text-white flex items-center justify-center mb-2 group-hover:bg-[#2b6caf] transition-colors">
                      <PrecisionManufacturing className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1a365d] text-xs mb-0.5">Roller Refurbishing</h4>
                    <p className="text-[11px] text-[#1a365d]/70 leading-relaxed">Precision grinding, chrome & tungsten carbide coating.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#d6e4f0]/60 hover:border-[#2b6caf] transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-[#1a365d] text-white flex items-center justify-center mb-2 group-hover:bg-[#2b6caf] transition-colors">
                      <Factory className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1a365d] text-xs mb-0.5">Corrugator Lines</h4>
                    <p className="text-[11px] text-[#1a365d]/70 leading-relaxed">High-speed 5-ply & 7-ply automatic machinery.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#d6e4f0]/60 hover:border-[#2b6caf] transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-[#1a365d] text-white flex items-center justify-center mb-2 group-hover:bg-[#2b6caf] transition-colors">
                      <Engineering className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1a365d] text-xs mb-0.5">Surface Restoration</h4>
                    <p className="text-[11px] text-[#1a365d]/70 leading-relaxed">Restoration of damaged rolls to original specifications.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#d6e4f0]/60 hover:border-[#2b6caf] transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-[#1a365d] text-white flex items-center justify-center mb-2 group-hover:bg-[#2b6caf] transition-colors">
                      <SupportAgent className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1a365d] text-xs mb-0.5">24/7 Technical Support</h4>
                    <p className="text-[11px] text-[#1a365d]/70 leading-relaxed">Preventive maintenance & rapid response service.</p>
                  </div>
                </div>

                {/* Footer banner inside card */}
                <div className="mt-4 pt-3.5 border-t border-[#d6e4f0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#1a365d]/80 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2b6caf]" />
                    <span>SIPCOT Industrial Park, TN</span>
                  </div>
                  <Link to="/portfolio" className="text-xs font-bold text-[#2b6caf] hover:text-[#1a365d] flex items-center gap-1 transition-colors">
                    <span>View All Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 md:py-16 bg-[#f7f9fb] border-y border-[#1a365d]/20 relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Industry Experience", value: "40+" },
              { label: "Uptime Success Rate", value: "99.2%" },
              { label: "Support Availability", value: "24/7" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group border-r last:border-r-0 border-[#1a365d]/20">
                <div className="text-4xl md:text-5xl font-black text-[#1a365d] mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <p className="text-[#1a365d] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS SECTION ===== */}
      <section className="relative py-16 bg-[#f7f9fb]/40 overflow-hidden">
        {/* Section Header — full width */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-black text-[#1a365d] mb-3 uppercase tracking-tight">
            Trusted by Packaging Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
        </div>

        {/* Carousel with edge fade masks */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f7f9fb, transparent)' }}></div>
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f7f9fb, transparent)' }}></div>

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
                  className="shrink-0 p-6 bg-white border border-[#d6e4f0] w-45 flex flex-col items-center justify-center gap-3 hover:border-[#1a365d] transition-all duration-300 shadow-sm"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-auto object-contain max-w-30"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-[#1a365d] text-white flex items-center justify-center font-black text-xs">
                      {client.initials}
                    </div>
                  )}
                  <p className="text-[#1a365d] font-bold text-[9px] uppercase tracking-widest text-center leading-tight">{client.name}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] mb-4 tracking-tight">
              Why Hsiehhsu?
            </h2>
            <div className="w-24 h-1 bg-[#2b6caf] mx-auto mb-6"></div>
            <p className="text-base text-[#1a365d]/80 leading-relaxed font-medium">
              We combine technical precision with unparalleled customer-centric service delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="fancy-card border border-[#d6e4f0] hover:border-[#2b6caf] p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
                <div className={`w-16 h-16 rounded-xl ${feature.badgeBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="fancy-card-title text-[#1a365d] text-xl font-black mb-2 uppercase tracking-tight">{feature.title}</h3>
                <p className="fancy-card-desc text-[#1a365d]/80 text-sm leading-relaxed mb-6 font-medium">{feature.description}</p>
                <div className="mt-auto pt-4 border-t border-[#d6e4f0]">
                  <span className="text-[#1a365d] text-xs font-black uppercase tracking-widest">{feature.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY ADVANTAGES ===== */}
      <section className="py-16 bg-[#f7f9fb]/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-[#1a365d] uppercase tracking-tight">
              Our Key Advantages
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#d6e4f0] shadow-sm hover:shadow-md hover:border-[#1a365d] transition-all duration-300 overflow-hidden flex flex-col h-full group"
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
                <div className="p-6 md:p-7 flex flex-col grow">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-3 ${adv.badgeBg} rounded-xl shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {adv.icon}
                    </div>
                    <h3 className="text-xl font-black text-[#1a365d] uppercase tracking-tighter">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-[#1a365d]/80 text-sm leading-relaxed font-medium">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADAPTSYNC IMAGE SECTION ===== */}
      <section className="py-12 bg-[#f7f9fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-[30px] overflow-hidden border border-[#d6e4f0] shadow-sm bg-white">
            <img
              src="/adaptsync-hero.jpg"
              alt="Adapt Sync Corrugation Technology"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== SPECIALIZATION SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-12 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a365d] uppercase tracking-tight">
              Explore Our Core Specialization Services
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto mt-4"></div>
          </div>

          <div className="mb-5 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Slide services left"
              onClick={() => scrollServices(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6e4f0] bg-white text-[#1a365d] shadow-sm transition-all hover:border-[#1a365d] hover:bg-[#1a365d] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Slide services right"
              onClick={() => scrollServices(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6e4f0] bg-white text-[#1a365d] shadow-sm transition-all hover:border-[#1a365d] hover:bg-[#1a365d] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div>
            <div
              ref={servicesCarouselRef}
              className="scroll-smooth overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-5 min-w-full sm:min-w-[110%] md:min-w-[120%] lg:min-w-full xl:min-w-[110%]">
              {services.map((service) => (
                <div
                  key={service.id}
                  data-service-card
                  className="min-w-70 sm:min-w-[320px] xl:min-w-87.5 max-w-105 bg-white rounded-3xl border border-[#d6e4f0] shadow-sm hover:shadow-md hover:border-[#1a365d] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="p-5 sm:p-6">
                    <div className="relative h-40 sm:h-44 overflow-hidden rounded-[28px] bg-gray-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className={`mt-5 mb-5 p-4 ${service.badgeBg} rounded-3xl inline-flex items-center justify-center shadow-sm`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-[1.85rem] font-black text-[#1a365d] mb-4 uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#1a365d]/85 text-sm sm:text-base leading-7 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto p-5 sm:p-6 pt-0 border-t border-[#eef2f7]">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-[#1a365d] font-semibold uppercase tracking-widest text-sm border-b-2 border-[#2b6caf] pb-1 hover:text-[#1a365d] transition-colors"
                    >
                      Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-16 bg-[#f7f9fb]/50 border-y border-[#d6e4f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] mb-6 uppercase tracking-tight">
              Our Precision Methodology
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-0 relative">
            {/* Connecting line with arrows */}
            <div className="absolute top-10 left-0 right-0 hidden lg:block h-1 bg-[#1a365d]/20 z-0"></div>

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
                      <div className="hidden lg:flex absolute -right-12 top-10 transform -translate-y-1/2 z-20 text-[#1a365d] text-xl font-bold group-hover:scale-150 transition-transform duration-300">
                        →
                      </div>
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="text-center">
                    <div className="inline-block text-xs font-black text-[#1a365d] uppercase tracking-widest mb-1">{step.number}</div>
                    <h3 className="text-sm font-black text-[#1a365d] mb-3 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-[#1a365d]/70 text-xs font-medium leading-relaxed px-2">{step.description}</p>
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
            <h2 className="text-4xl font-black text-[#1a365d] uppercase tracking-tight">
              Real-World Case Studies & Success
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="notification-card h-full">
                <div className="noti-metric text-[#1a365d]">{study.metric}</div>
                <h3 className="text-xl font-black text-[#1a365d] mb-2 uppercase tracking-tighter">{study.title}</h3>
                <div className="noti-company text-[#1a365d]">{study.company} • {study.industry}</div>
                <p className="noti-desc font-medium text-[#1a365d]/80">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 bg-[#f7f9fb]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black text-[#1a365d] uppercase tracking-tight">
              Client Testimonials & Feedback
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 border border-[#d6e4f0] hover:border-[#2b6caf] transition-all duration-300 shadow-sm rounded-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarMui key={i} className="w-4 h-4 text-[#D97706]" />
                  ))}
                </div>

                <p className="text-[#1a365d]/80 text-sm leading-relaxed mb-8 font-medium line-clamp-2">"{testimonial.feedback}"</p>

                <div className="pt-6 border-t border-[#d6e4f0]">
                  <p className="text-[#1a365d] font-black text-[10px] uppercase tracking-widest">{testimonial.company}</p>
                  <p className="text-[#1a365d]/80 text-[9px] font-bold uppercase tracking-widest mt-1">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-16 bg-[#1a365d] overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#2b6caf]/20 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Ready to Transform <span className="text-[#2b6caf]">Your Operations?</span>
            </h2>
            <p className="text-base text-[#f7f9fb]/80 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              Get expert guidance with a comprehensive technical consultation. Our team delivers customized solutions optimized for maximum efficiency, less spares usage, and lower maintenance load.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="tel:+919894235419" className="btn-gold">
                <PhoneMui className="w-5 h-5 mr-3" />
                +91 98942 35419
              </a>
              <a href="tel:+918800350183" className="btn-gold">
                <PhoneMui className="w-5 h-5 mr-3" />
                +91 88003 50183
              </a>
              <Link to="/contact" className="btn-primary border-white">
                Schedule Meeting
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-0 border border-white/10 bg-[#0D1D4A]">
              {[
                { icon: <PlaceMui className="w-6 h-6 text-[#2b6caf]" />, label: 'Location', desc: 'India-based Operations' },
                { icon: <WorkMui className="w-6 h-6 text-[#2b6caf]" />, label: 'Experience', desc: '40+ Years Expertise' },
                { icon: <HeadsetMic className="w-6 h-6 text-[#2b6caf]" />, label: 'Support', desc: '24/7 Available' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center py-10 px-6 ${i < 2 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}`}>
                  <div className="w-12 h-12 border border-[#2b6caf]/40 flex items-center justify-center text-[#2b6caf] mb-4">
                    {item.icon}
                  </div>
                  <p className="font-black text-white uppercase tracking-tighter mb-1 text-sm">{item.label}</p>
                  <p className="text-[#f7f9fb]/70 text-[10px] uppercase tracking-widest">{item.desc}</p>
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
