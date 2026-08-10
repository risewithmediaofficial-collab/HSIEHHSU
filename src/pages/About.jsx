import { Link } from 'react-router-dom';
import { Globe, Target, Award, Users, Factory, Clock, ArrowRight, CheckCircle, Zap, TrendingUp, Shield, Phone } from 'lucide-react';
import {
  WorkspacePremium,
  Groups,
  Shield as ShieldMui,
  AutoAwesome,
  Public,
  VerifiedUser,
  SupportAgent,
  MilitaryTech,
  Savings
} from '@mui/icons-material';
import SeoHelmet from '../components/SeoHelmet';
import aboutMachineryImage from '../assets/ChatGPT Image Jun 11, 2026, 03_07_39 PM (6).png';

const About = () => {
  const milestones = [
    { year: "2024", event: "Launch of HHC Digital Intelligence Line in India" },
    { year: "1980", event: "Standardizing High-Speed Corrugator Tech in Asia" },
    { year: "60+ YRS", event: "Unbroken Legacy of Machinery Innovation" },
    { year: "GLOBAL", event: "Hubs in Taiwan, China, Vietnam & India" },
    { year: "VISION", event: "Pioneering OEE-centric Production Systems" },
    { year: "SUPPORT", event: "24/7 Global Lifecycle Partnership Network" },
  ];
  const values = [
    {
      icon: <WorkspacePremium className="w-8 h-8 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
      title: "Excellence",
      description: "Uncompromising quality in every project",
    },
    
    {
      icon: <Groups className="w-8 h-8 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      title: "Partnership",
      description: "Building lasting relationships with clients",
    },
    {
      icon: <ShieldMui className="w-8 h-8 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      title: "Reliability",
      description: "On-time delivery and consistent performance",
    },
    {
      icon: <AutoAwesome className="w-8 h-8 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
      title: "Innovation",
      description: "Adopting latest technologies and techniques",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "40+", label: "Years Experience" },
    { number: "50+", label: "Success Stories" },
    { number: "24/7", label: "Support Coverage" },
  ];

  const TeamAreas = [
    {
      title: "Precision Engineering",
      description: "Advanced metallurgy and CAD-driven design for perfect rollers",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Quality Assurance",
      description: "ISO certified processes with zero-defect manufacturing",
      icon: <CheckCircle className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Customer Support",
      description: "24/7 technical support and rapid response times",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-600"
    },
  ];

  const whyChooseUs = [
    {
      title: "Global Standards, Local Support",
      description: "World-class expertise with India-based operations for faster response and support",
      icon: <Public className="w-6 h-6 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
    },
    {
      title: "ISO Certified Quality",
      description: "Rigorous quality assurance processes ensuring zero-defect manufacturing",
      icon: <VerifiedUser className="w-6 h-6 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
    },
    {
      title: "24/7 Technical Support",
      description: "Dedicated team available round-the-clock for immediate assistance",
      icon: <SupportAgent className="w-6 h-6 text-[#6366F1]" />,
      badgeBg: "bg-[#EEF2FF] border-[#C7D2FE]",
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects delivered with dedicated customer support",
      icon: <MilitaryTech className="w-6 h-6 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Optimized processes delivering premium quality at competitive pricing",
      icon: <Savings className="w-6 h-6 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
    },
    {
      title: "Innovation & Technology",
      description: "Continuous improvement using latest industry technologies",
      icon: <AutoAwesome className="w-6 h-6 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
    },
  ];

  return (
    <>
      <SeoHelmet
        title="About Us | HSIEHHSU MACHINERY INDIA - Premium Corrugation Solutions"
        description="Learn about HSIEHHSU MACHINERY INDIA - Global leaders in corrugation solutions with 40+ years of expertise in roller refurbishing, restoration, and machinery."
        path="/about"
      />

      {/* ===== ADAPTSYNC IMAGE — Full Width, No Text ===== */}
      <section style={{ width: '100%', lineHeight: 0 }}>
        <img
          src="/adaptsync-hero.jpg"
          alt="AdaptSync Corrugation Technology by HSIEHHSU"
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </section>

      <section className="py-16 md:py-16 bg-white border-y border-[#d6e4f0] relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group border-r last:border-r-0 border-[#d6e4f0]">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2b6caf] mb-2 tracking-tighter transition-transform duration-300 group-hover:scale-105">
                  {stat.number}
                </div>
                <p className="text-[#1a365d]/70 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] tracking-tight leading-none uppercase">
                  Global Expertise, <br />
                  Indian Dedication
                </h2>
                <div className="w-20 h-1 bg-[#2b6caf]"></div>
              </div>
              
              <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium">
                HSIEHHSU MACHINERY stands as a global titan in corrugation technology, with over 40 years of engineering pedigree. Recognized as a top-ranking corrugator manufacturer in China and Taiwan, our machinery powers high-volume production plants across continents.
              </p>
              
              <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium">
                Our Indian operations, anchored at the SIPCOT Industrial Park in Krishnagiri, Tamil Nadu, serve as a strategic bridge. We combine Hsieh Hsu's legendary Taiwan-engineered precision with a dedicated local support ecosystem, ensuring that Indian box plants achieve world-class OEE while maintaining low manufacturing costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  "ISO 9001:2015 Certified",
                  "40+ Years of Experience",
                  "500+ Projects Completed",
                  "50+ Success Stories"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2b6caf]"></div>
                    <span className="text-[#1a365d] font-bold text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline */}
            <div className="lg:pl-12">
              <div className="bg-[#f7f9fb]/40 p-10 lg:p-12 border border-[#d6e4f0]">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black text-[#1a365d] uppercase tracking-tighter">Our Journey</h3>
                  <div className="flex-1 h-px bg-[#f7f9fb]"></div>
                </div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="text-[#2b6caf] font-black text-xs uppercase tracking-widest pt-1 min-w-15">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1a365d]/80 text-sm font-medium leading-relaxed group-hover:text-[#1a365d] transition-colors">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MACHINERY EXCELLENCE SECTION ===== */}
      <section className="py-16 bg-[#f7f9fb]/40 overflow-hidden relative border-y border-[#d6e4f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] leading-none uppercase tracking-tighter">
                Engineering Our Future <br />
                With Excellence
              </h2>
              <p className="text-[#1a365d]/80 text-lg leading-relaxed font-medium">
                Our machinery is defined by three core pillars that ensure Hsieh Hsu remains the gold standard for high-performance corrugated board production.
              </p>
              <div className="grid gap-4">
                {[
                  { title: "High-Speed Reliability", desc: "Configuration for maximum production speeds up to 56,000 m²/hour with reliable daily availability." },
                  { title: "Digital Intelligence 2.0", desc: "Automated end-to-end systems that deliver quality-related parameters in real time." },
                  { title: "OEE Optimization", desc: "Strategic focus on reducing manufacturing costs per square meter through system-wide effectiveness." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white p-6 border border-[#d6e4f0] hover:border-[#2b6caf] transition-colors group">
                    <CheckCircle className="w-5 h-5 text-[#2b6caf] shrink-0" />
                    <div>
                      <h4 className="text-[#1a365d] font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-[#1a365d]/70 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-white border border-[#d6e4f0] flex items-center justify-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7f9fb]/40 -mr-16 -mt-16 rotate-45"></div>
                <img
                  src={aboutMachineryImage}
                  alt="HHC corrugation line machinery"
                  loading="lazy"
                  decoding="async"
                  className="relative z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-10 bg-linear-to-t from-white via-white/90 to-transparent">
                  <p className="max-w-44 md:max-w-none text-[#1a365d] text-lg md:text-2xl font-black uppercase tracking-tighter opacity-20 leading-none">40 Years of Engineering</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 z-20 bg-[#1a365d] px-4 py-4 md:p-10 text-white max-w-48 md:max-w-none">
                 <div className="font-black text-lg md:text-4xl mb-1 uppercase tracking-tighter text-white">HHC Series</div>
                 <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#d6e4f0]">Industry Gold Standard</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== PRIME CUSTOMER ANALYSIS SECTION ===== */}
      <section className="py-16 bg-[#f7f9fb]/40 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-block px-4 py-1 border border-[#2b6caf] text-[#2b6caf] text-[10px] font-black uppercase tracking-[0.2em]">
                Strategic Analysis
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] leading-none uppercase tracking-tighter">
                Prime Customer Base <br />
                Segment Analysis
              </h2>
              <p className="text-[#1a365d]/80 text-lg leading-relaxed font-medium">
                Our customer base is analyzed and segmented to ensure that we deliver precisely what each production scale requires.
              </p>
              
              <div className="space-y-8">                {[
                  { segment: "Market Leaders", percentage: "40%", desc: "High-volume transregional plants requiring end-to-end automated HHC-350." },
                  { segment: "Industry Pioneers", percentage: "35%", desc: "Regional specialists utilizing HHC-300 and HHC-250 for high-quality niche output." },
                  { segment: "Emerging Corporations", percentage: "25%", desc: "Future-proof plants leveraging HHC-200 technology for growth in emergent markets." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-end justify-between mb-3">
                      <span className="text-[#1a365d] font-bold text-sm uppercase tracking-widest">{item.segment}</span>
                      <span className="text-[#1a365d] font-black text-xl">{item.percentage}</span>
                    </div>
                    <div className="w-full h-1 bg-[#f7f9fb] overflow-hidden">
                      <div className="h-full bg-[#1a365d] group-hover:bg-[#2b6caf] transition-all duration-1000" style={{width: item.percentage}}></div>
                    </div>
                    <p className="text-[#1a365d]/70 text-xs mt-3 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white p-10 border border-[#d6e4f0] hover:border-[#2b6caf] transition-colors group rounded-xl shadow-sm">
                   <TrendingUp size={24} className="text-[#1a365d] mb-6" />
                   <h4 className="font-black text-[#1a365d] uppercase text-sm tracking-widest mb-3">ROI Focus</h4>
                   <p className="text-[#1a365d]/70 text-xs leading-relaxed font-medium">Analyzing equipment lifecycle to reduce spare consumption and maintenance costs for partners.</p>
                </div>
                <div className="bg-[#1a365d] p-10 text-white rounded-xl shadow-sm">
                   <h3 className="text-5xl font-black mb-1 tracking-tighter text-[#2b6caf]">500+</h3>
                   <div className="text-[#f7f9fb] font-bold uppercase tracking-widest text-[10px] mb-4">Successful Audits</div>
                   <p className="text-[#f7f9fb]/80 text-xs leading-relaxed font-medium">Rigorous performance analysis conducted for our top-tier clients annually.</p>
                </div>
              </div>
              <div className="space-y-8 mt-16">
                <div className="bg-[#1a365d] p-10 text-white relative overflow-hidden group rounded-xl shadow-sm">
                   <h3 className="text-5xl font-black mb-1 tracking-tighter text-[#2b6caf]">50+</h3>
                   <div className="text-white/90 font-bold uppercase tracking-widest text-[10px] mb-4">Success Stories</div>
                   <p className="text-[#f7f9fb]/80 text-xs leading-relaxed font-medium">Our prime customers continue to rely on our service partnership for long-term plant performance.</p>
                </div>
                <div className="bg-white p-10 border border-[#d6e4f0] hover:border-[#2b6caf] transition-colors group rounded-xl shadow-sm">
                   <Users size={24} className="text-[#1a365d] mb-6" />
                   <h4 className="font-black text-[#1a365d] uppercase text-sm tracking-widest mb-3">Support Hubs</h4>
                   <p className="text-[#1a365d]/70 text-xs leading-relaxed font-medium">Integrated support hubs localized for prime manufacturing clusters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE STRENGTHS & VALUES ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">
              Our Core Strengths & Values
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="service-card p-8 flex flex-col items-center text-center bg-white border border-[#d6e4f0] hover:border-[#2b6caf] transition-all rounded-xl shadow-sm group">
                 <div className={`w-16 h-16 rounded-xl ${value.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                   {value.icon}
                 </div>
                 <h3 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-3">{value.title}</h3>
                 <p className="text-[#1a365d]/70 text-xs leading-relaxed font-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-px bg-[#f7f9fb] border border-[#d6e4f0] rounded-xl overflow-hidden shadow-sm">
            {/* Vision */}
            <div className="bg-white p-16 lg:p-20">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-[#1a365d] uppercase tracking-tighter">Our Vision</h3>
                  <div className="w-12 h-1 bg-[#2b6caf]"></div>
                </div>
                <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium italic">
                  "To become the most trusted partner for the Indian corrugated packaging industry by delivering world-class roller solutions and drive excellence across every operation."
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-[#f7f9fb]/40 p-16 lg:p-20">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-[#1a365d] uppercase tracking-tighter">Our Mission</h3>
                  <div className="w-12 h-1 bg-[#2b6caf]"></div>
                </div>
                <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium">
                  To provide innovative, reliable, and cost-effective corrugation solutions that enhance our clients' productivity and profitability through exceptional quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter text-center">
              Why HSIEHHSU?
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="notification-card p-8 bg-white border border-[#d6e4f0] hover:border-[#2b6caf] transition-all rounded-xl shadow-sm flex flex-col group">
                <div className={`w-14 h-14 rounded-xl ${item.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-[#1a365d]/70 text-xs leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#d6e4f0]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a365d] uppercase tracking-tighter">
              Ready to Partner?
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#1a365d]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Join 500+ satisfied clients who trust us for their corrugation machinery needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="btn-gold shadow-md"
            >
              Contact Us
            </a>
            <Link
              to="/portfolio"
              className="btn-primary"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
