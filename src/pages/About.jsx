import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Target, Award, Users, Factory, Clock, ArrowRight, CheckCircle, Zap, TrendingUp, Shield, Phone } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2024", event: "Launch of HHC Digital Intelligence Line in India" },
    { year: "1980s", event: "Standardizing High-Speed Corrugator Tech in Asia" },
    { year: "60+ YRS", event: "Unbroken Legacy of Machinery Innovation" },
    { year: "GLOBAL", event: "Hubs in Taiwan, China, Vietnam & India" },
    { year: "VISION", event: "Pioneering OEE-centric Production Systems" },
    { year: "SUPPORT", event: "24/7 Global Lifecycle Partnership Network" },
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Excellence",
      description: "Uncompromising quality in every project",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Partnership",
      description: "Building lasting relationships with clients",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Reliability",
      description: "On-time delivery and consistent performance",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Innovation",
      description: "Adopting latest technologies and techniques",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "40+", label: "Years Experience" },
    { number: "99.2%", label: "Success Rate" },
    { number: "50+", label: "Satisfied Clients" },
  ];

  const teamAreas = [
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
    },
    {
      title: "ISO Certified Quality",
      description: "Rigorous quality assurance processes ensuring zero-defect manufacturing",
    },
    {
      title: "24/7 Technical Support",
      description: "Dedicated team available round-the-clock for immediate assistance",
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects with 99.2% customer satisfaction",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Optimized processes delivering premium quality at competitive pricing",
    },
    {
      title: "Innovation & Technology",
      description: "Continuous improvement using latest industry technologies",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | HSIEHHSU MACHINERY INDIA - Premium Corrugation Solutions</title>
        <meta name="description" content="Learn about HSIEHHSU MACHINERY INDIA - Global leaders in corrugation solutions with 40+ years of expertise in roller refabrication, restoration, and machinery." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Industry Leaders Since 2010</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
              About HSIEHHSU
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Global expertise meets Indian dedication. Transforming corrugation manufacturing with precision, innovation, and unmatched service.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 md:py-16 bg-white border-y border-[#eee] relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group border-r last:border-r-0 border-[#eee]">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f44336] mb-2 tracking-tighter transition-transform duration-300 group-hover:scale-105">
                  {stat.number}
                </div>
                <p className="text-[#7a7a7a] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
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
                <h2 className="text-4xl md:text-5xl font-black text-[#f44336] tracking-tight leading-none uppercase">
                  Global Expertise, <br />
                  Indian Dedication
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>
              
              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                HSIEHHSU MACHINERY stands as a global titan in corrugation technology, with over 60 years of engineering pedigree. Recognized as a top-ranking corrugator manufacturer in China and Taiwan, our machinery powers high-volume production plants across continents.
              </p>
              
              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Our Indian operations, anchored at the SIPCOT Industrial Park in Krishnagiri, Tamil Nadu, serve as a strategic bridge. We combine Hsieh Hsu's legendary Taiwan-engineered precision with a dedicated local support ecosystem, ensuring that Indian box plants achieve world-class OEE while maintaining low manufacturing costs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  "ISO 9001:2015 Certified",
                  "40+ Years of Experience",
                  "500+ Projects Completed",
                  "99.2% Satisfaction Rate"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f44336]"></div>
                    <span className="text-[#1a1a1a] font-bold text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline */}
            <div className="lg:pl-12">
              <div className="bg-[#fafafa] p-10 lg:p-12 border border-[#eee]">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Our Journey</h3>
                  <div className="flex-1 h-px bg-[#eee]"></div>
                </div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="text-[#f44336] font-black text-xs uppercase tracking-widest pt-1 min-w-[60px]">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#4a4a4a] text-sm font-medium leading-relaxed group-hover:text-[#1a1a1a] transition-colors">
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
      <section className="py-16 bg-[#fafafa] overflow-hidden relative border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#f44336] leading-none uppercase tracking-tighter">
                Engineering Our Future <br />
                With Excellence
              </h2>
              <p className="text-[#4a4a4a] text-lg leading-relaxed font-medium">
                Our machinery is defined by three core pillars that ensure Hsieh Hsu remains the gold standard for high-performance corrugated board production.
              </p>
              <div className="grid gap-4">
                {[
                  { title: "High-Speed Reliability", desc: "Configuration for maximum production speeds up to 56,000 m²/hour with reliable daily availability." },
                  { title: "Digital Intelligence 4.0", desc: "Automated end-to-end systems that deliver quality-related parameters in real-time." },
                  { title: "OEE Optimization", desc: "Strategic focus on reducing manufacturing costs per square meter through system-wide effectiveness." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white p-6 border border-[#eee] hover:border-[#f44336] transition-colors group">
                    <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0" />
                    <div>
                      <h4 className="text-[#1a1a1a] font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-white border border-[#eee] p-12 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fafafa] -mr-16 -mt-16 rotate-45"></div>
                <Factory className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-white to-transparent">
                  <p className="text-[#1a1a1a] text-2xl font-black uppercase tracking-tighter opacity-20">60 Years of Engineering</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-10 text-white hidden md:block">
                 <div className="font-black text-4xl mb-1 uppercase tracking-tighter">HHC Series</div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Industry Gold Standard</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== PRIME CUSTOMER ANALYSIS SECTION ===== */}
      <section className="py-16 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-block px-4 py-1 border border-[#f44336] text-[#f44336] text-[10px] font-black uppercase tracking-[0.2em]">
                Strategic Analysis
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#f44336] leading-none uppercase tracking-tighter">
                Prime Customer Base <br />
                Segment Analysis
              </h2>
              <p className="text-[#4a4a4a] text-lg leading-relaxed font-medium">
                Our customer base is analyzed and segmented to ensure that we deliver precisely what each production scale requires.
              </p>
              
              <div className="space-y-8">
                {[
                  { segment: "Market Leaders", percentage: "40%", desc: "High-volume transregional plants requiring end-to-end automated HHC-350 systems." },
                  { segment: "Industry Pioneers", percentage: "35%", desc: "Regional specialists utilizing HHC-300 and HHC-250 for high-quality niche output." },
                  { segment: "Emerging Corporations", percentage: "25%", desc: "Future-proof plants leveraging HHC-200 technology for growth in emergent markets." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-end justify-between mb-3">
                      <span className="text-[#1a1a1a] font-bold text-sm uppercase tracking-widest">{item.segment}</span>
                      <span className="text-[#f44336] font-black text-xl">{item.percentage}</span>
                    </div>
                    <div className="w-full h-1 bg-[#eee] overflow-hidden">
                      <div className="h-full bg-[#1a1a1a] group-hover:bg-[#f44336] transition-all duration-1000" style={{width: item.percentage}}></div>
                    </div>
                    <p className="text-[#7a7a7a] text-xs mt-3 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-[#fafafa] p-10 border border-[#eee] hover:border-[#f44336] transition-colors group">
                   <TrendingUp size={24} className="text-[#f44336] mb-6" />
                   <h4 className="font-black text-[#1a1a1a] uppercase text-sm tracking-widest mb-3">ROI Focus</h4>
                   <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">Analyzing equipment lifecycle to maximize return on investment for partners.</p>
                </div>
                <div className="bg-[#1a1a1a] p-10 text-white">
                   <h3 className="text-5xl font-black mb-1 tracking-tighter">500+</h3>
                   <div className="text-[#f44336] font-bold uppercase tracking-widest text-[10px] mb-4">Successful Audits</div>
                   <p className="text-[#aaa] text-xs leading-relaxed font-medium">Rigorous performance analysis conducted for our top-tier clients annually.</p>
                </div>
              </div>
              <div className="space-y-8 mt-16">
                <div className="bg-[#f44336] p-10 text-white relative overflow-hidden group">
                   <h3 className="text-5xl font-black mb-1 tracking-tighter">99.2%</h3>
                   <div className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-4">Uptime Analysis</div>
                   <p className="text-white/70 text-xs leading-relaxed font-medium">Our prime customers maintain world-class uptime records through our service partnership.</p>
                </div>
                <div className="bg-[#fafafa] p-10 border border-[#eee] hover:border-[#f44336] transition-colors group">
                   <Users size={24} className="text-[#f44336] mb-6" />
                   <h4 className="font-black text-[#1a1a1a] uppercase text-sm tracking-widest mb-3">Support Hubs</h4>
                   <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">Integrated support hubs localized for prime manufacturing clusters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE STRENGTHS & VALUES ===== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Our Core Strengths & Values
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="service-card p-10 flex flex-col items-center text-center">
                 <div className="text-[#f44336] mb-8">{value.icon}</div>
                 <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{value.title}</h3>
                 <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-px bg-[#eee] border border-[#eee]">
            {/* Vision */}
            <div className="bg-white p-16 lg:p-20">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-[#f44336] uppercase tracking-tighter">Our Vision</h3>
                  <div className="w-12 h-1 bg-[#f44336]"></div>
                </div>
                <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium italic">
                  "To become the most trusted partner for the Indian corrugated packaging industry by delivering world-class roller solutions and drive excellence across every operation."
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-[#fafafa] p-16 lg:p-20">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-[#f44336] uppercase tracking-tighter">Our Mission</h3>
                  <div className="w-12 h-1 bg-[#f44336]"></div>
                </div>
                <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                  To provide innovative, reliable, and cost-effective corrugation solutions that enhance our clients' productivity and profitability through exceptional quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter text-center">
              Why HSIEHHSU?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="notification-card p-10">
                <div className="w-2 h-2 bg-[#f44336] mb-6"></div>
                <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#eee]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f44336] uppercase tracking-tighter">
              Ready to Partner?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Join 500+ satisfied clients who trust us for their corrugation machinery needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Contact Us
            </a>
            <Link
              to="/portfolio"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
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