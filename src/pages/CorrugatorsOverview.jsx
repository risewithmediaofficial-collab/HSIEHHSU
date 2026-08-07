import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Cpu, Layout, Users, BookOpen, Calendar, ArrowRight, Camera, Lock, Wifi, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import corrugatorOverviewImage from '../assets/ChatGPT Image Jun 11, 2026, 03_07_39 PM (6).png';
import digitalIntelligenceImg from '../assets/digital intellligence.jpg';
import individualMachinesImg from '../assets/individual machines.webp';

const CorrugatorsOverview = () => {
  const solutions = [
    {
      title: "Individual Machines",
      desc: "Precision-engineered single components to upgrade your existing corrugator performance.",
      icon: <Settings className="w-8 h-8 text-[#2b6caf]" />,
      image: individualMachinesImg
    },
    {
      title: "Corrugator Lines",
      desc: "Complete, high-performance corrugator solutions tailored to your production requirements.",
      icon: <Factory className="w-8 h-8 text-[#2b6caf]" />,
      image: corrugatorOverviewImage,
      subLinks: [
        { label: 'HHC-200', path: '/portfolio/corrugated-lines/hhc-200' },
        { label: 'HHC-250', path: '/portfolio/corrugated-lines/hhc-250' },
        { label: 'HHC-300', path: '/portfolio/corrugated-lines/hhc-300' },
        { label: 'HHC-350', path: '/portfolio/corrugated-lines/hhc-350' }
      ]
    },
    {
      title: "Digital Intelligence",
      desc: "Smart process- and control systems under our Industry 4.0 connectivity initiative.",
      icon: <Cpu className="w-8 h-8 text-[#2b6caf]" />,
      image: digitalIntelligenceImg
    }
  ];

  const seminars = [
    {
      title: "Corrugator Training Seminar Basic",
      type: "Virtual & On-site",
      desc: "Highly complex process technology issues. Learn how papers are processed under heat influence with adhesive."
    },
    {
      title: "Corrugator Training Seminar Advanced",
      type: "Advanced Process Tech",
      desc: "Deep dive into constant board quality and complex production issues for experienced operators."
    },
    {
      title: "Troubleshooting Methods",
      type: "Technical Staff",
      desc: "Systematic error elimination and source identification in demanding production environments."
    }
  ];

  const news = [
    {
      title: "New E2E Service Process Launch",
      date: "March 2026",
      desc: "Our new End-to-End service ensures every corrugator we design remains a success story throughout its lifecycle.",
      tag: "Portfolio"
    },
    {
      title: "Next-Gen Camera Monitoring System",
      date: "Feb 2026",
      desc: "Enhance production monitoring at critical points with our new cutting-edge Corrugator Camera Solution.",
      tag: "Innovation"
    },
    {
      title: "Secure Remote Access Platform",
      date: "Jan 2026",
      desc: "Introducing a new platform for secure remote access to production systems for transregional coordination.",
      tag: "Software"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Corrugator Solutions | Productivity & OEE Optimization | Hsieh Hsu India</title>
        <meta name="description" content="From individual machines to complete corrugators: Hsieh Hsu India optimizes your Overall Equipment Effectiveness (OEE) and reduces manufacturing costs." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f7f9fb] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#d6e4f0]/40 text-[#2b6caf] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#2b6caf] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Productivity & OEE Optimization</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#1a365d] uppercase">
              Optimal Productivity Systems & OEE
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#1a365d]/80 leading-relaxed max-w-3xl mx-auto font-medium">
              From individual machines to complete corrugator lines: the most productive path to finished corrugated board.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-0 text-[#2b6caf] text-xs font-black uppercase tracking-widest">
                  <Shield className="w-4 h-4" />
                  Lifecycle Partnership
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] uppercase tracking-tighter leading-none">
                  Strategic Partner in the Digital Age
                </h2>
                <div className="w-20 h-1 bg-[#2b6caf]"></div>
              </div>

              <p className="text-[#1a365d]/80 leading-relaxed text-lg font-medium">
                From individual machines to complete corrugators and all the way to intelligent corrugating box plants: **Hsieh Hsu India** puts decades of experience to work for you.
              </p>
              
              <div className="p-10 bg-[#f7f9fb]/40 border border-[#d6e4f0] relative group">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1a365d] uppercase tracking-tighter">Driving OEE Excellence</h3>
                  <p className="text-[#1a365d]/70 text-sm leading-relaxed font-medium">
                    Our focus is the productivity of your manufacturing operations. We consider the overall effectiveness of your corrugator system as a whole to maximize results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square bg-[#f7f9fb]/40 border border-[#d6e4f0] flex items-center justify-center group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white -mr-16 -mt-16 rotate-45 border border-[#d6e4f0]"></div>
               <img
                 src={corrugatorOverviewImage}
                 alt="Complete HHC corrugator system"
                 className="relative z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-x-0 bottom-0 z-10 p-12 bg-linear-to-t from-[#f7f9fb] to-transparent">
                  <p className="text-[#1a365d] text-2xl font-black uppercase tracking-tighter opacity-10">Manufacturing Excellence</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-16 bg-[#f7f9fb]/40 border-y border-[#d6e4f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">
              Corrugator Solutions & Systems
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((item, idx) => (
              <div key={idx} className="service-card p-6 flex flex-col items-center text-center bg-white border border-[#d6e4f0] hover:border-[#2b6caf] transition-all group overflow-hidden">
                {item.image && (
                  <div className="w-full h-48 mb-6 overflow-hidden border border-[#d6e4f0]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="text-[#2b6caf] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-3">{item.title}</h3>
                <p className="text-[#1a365d]/70 text-xs leading-relaxed font-medium mb-6">{item.desc}</p>
                {item.subLinks ? (
                  <div className="w-full space-y-2 mt-auto">
                    {item.subLinks.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={sub.path}
                        className="flex items-center justify-between p-3 bg-white border border-[#d6e4f0] hover:border-[#2b6caf] text-[#1a365d] font-black text-[9px] uppercase tracking-widest transition-all"
                      >
                        {sub.label}
                        <ArrowRight className="w-3 h-3 text-[#2b6caf]" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-auto w-full">
                    <Link to="/products" className="inline-flex items-center gap-3 text-[#2b6caf] font-black uppercase tracking-widest text-[10px] border-b-2 border-[#2b6caf] pb-1 hover:text-[#1a365d] hover:border-[#1a365d] transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#f7f9fb]/40 flex items-center justify-center border border-[#d6e4f0]">
                  <BookOpen className="w-8 h-8 text-[#1a365d]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#2b6caf] uppercase tracking-tighter">Technical Mastery & Training</h2>
                <div className="w-20 h-1 bg-[#2b6caf]"></div>
              </div>
              
              <p className="text-[#1a365d]/80 text-lg font-medium leading-relaxed">
                Process technology in corrugated board production is a highly complex issue. Constant board quality is essential for your success.
              </p>
              
              <button className="px-10 py-4 bg-[#1a365d] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#2b6caf] transition-colors flex items-center gap-3">
                Show All Seminars <Calendar className="w-4 h-4" />
              </button>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              {seminars.map((item, idx) => (
                <div key={idx} className="notification-card p-10 flex flex-col items-center text-center">
                  <div className="text-[#2b6caf] font-black text-[9px] uppercase tracking-widest mb-6">{item.type}</div>
                  <h4 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-4 leading-tight">{item.title}</h4>
                  <p className="text-[#1a365d]/70 text-[10px] leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-16 bg-[#f7f9fb]/40 border-y border-[#d6e4f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#2b6caf] uppercase tracking-tighter">
                Latest Corrugator News & Insights
              </h2>
              <div className="w-20 h-1 bg-[#2b6caf]"></div>
              <p className="text-[#1a365d]/70 font-medium">Stay updated with the latest innovations and remote service solutions.</p>
            </div>
            <Link to="/news" className="text-[#1a365d] font-black uppercase tracking-widest text-[10px] border-b-2 border-[#2b6caf] pb-2 hover:text-[#2b6caf] transition-colors">
              Read All Stories
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-[#d6e4f0] hover:border-[#2b6caf] transition-all group">
                <div className="flex justify-between items-center mb-10">
                   <span className="text-[#2b6caf] font-black text-[9px] uppercase tracking-widest px-3 py-1 bg-[#d6e4f0]/40">{item.tag}</span>
                   <span className="text-[9px] font-bold text-[#1a365d]/60 uppercase flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                </div>
                <h3 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-4 leading-tight group-hover:text-[#2b6caf] transition-colors">{item.title}</h3>
                <p className="text-[#1a365d]/70 text-[10px] leading-relaxed mb-10 font-medium">{item.desc}</p>
                <div className="flex items-center gap-2 text-[#1a365d] font-black text-[10px] uppercase tracking-widest">
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white border-t border-[#d6e4f0]">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#2b6caf] uppercase tracking-tighter">Ready to Optimize Production?</h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-[#f7f9fb]/40 p-12 border border-[#d6e4f0]">
              <h3 className="text-sm font-black text-[#1a365d] uppercase tracking-widest mb-8 flex items-center gap-3">
                <Factory className="w-5 h-5 text-[#2b6caf]" /> Visit Our Factory
              </h3>
              <p className="text-[#1a365d]/80 text-xs font-bold leading-relaxed uppercase tracking-widest">
                Plot No. B-19/2, Olaipatti Village,<br />
                SIPCOT Industrial Park, Pochampalli,<br />
                Krishnagiri – 635206, Tamil Nadu
              </p>
            </div>
            <div className="bg-[#1a365d] p-12 text-white">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-[#d6e4f0]" /> 24/7 Hotlines
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[#d6e4f0]/70 text-[9px] font-black uppercase tracking-widest mb-1">Director (Mr. Ganesan)</p>
                  <p className="text-white text-xl font-black">+91 98942 35419</p>
                </div>
                <div>
                  <p className="text-[#d6e4f0]/70 text-[9px] font-black uppercase tracking-widest mb-1">Sales (Mr. Kamal)</p>
                  <p className="text-white text-xl font-black">+91 88003 50183</p>
                </div>
                <div>
                  <p className="text-[#d6e4f0]/70 text-[9px] font-black uppercase tracking-widest mb-1">Office</p>
                  <p className="text-white text-xl font-black">+91 86673 63796</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Link 
              to="/contact" 
              className="px-16 py-5 bg-[#2b6caf] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1a365d] transition-colors inline-flex items-center gap-3"
            >
              Contact Our Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorrugatorsOverview;
