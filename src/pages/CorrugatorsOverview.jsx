import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Cpu, Layout, Users, BookOpen, Calendar, ArrowRight, Camera, Lock, Wifi, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorrugatorsOverview = () => {
  const solutions = [
    {
      title: "Individual Machines",
      desc: "Precision-engineered single components to upgrade your existing corrugator performance.",
      icon: <Settings className="w-8 h-8 text-red-600" />
    },
    {
      title: "Corrugator Lines",
      desc: "Complete, high-performance corrugator solutions tailored to your production requirements.",
      icon: <Factory className="w-8 h-8 text-red-600" />,
      subLinks: [
        { label: 'HHC-200 (ECO)', path: '/portfolio/corrugated-lines/hhc-200' },
        { label: 'HHC-250 (STEADY)', path: '/portfolio/corrugated-lines/hhc-250' },
        { label: 'HHC-300 (CLASSIC)', path: '/portfolio/corrugated-lines/hhc-300' },
        { label: 'HHC-350 (SPEED)', path: '/portfolio/corrugated-lines/hhc-350' }
      ]
    },
    {
      title: "Digital Intelligence",
      desc: "Smart process- and control systems under our Industry 4.0 connectivity initiative.",
      icon: <Cpu className="w-8 h-8 text-red-600" />
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

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight">
              Leading the Way to <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Optimal Productivity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              From individual machines to complete corrugator lines: the most productive path to finished corrugated board.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest">
                <Shield className="w-4 h-4" />
                Lifecycle Partnership
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your Strategic Partner in the <span className="text-red-600">Digital Age</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                From individual machines to complete corrugators and all the way to intelligent corrugating box plants: **Hsieh Hsu India** puts decades of experience to work for you. We are here for you when your corrugator is delivered, and we remain your Lifecycle partner for technologically leading, sustainably competitive production.
              </p>
              <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4">Driving OEE Excellence</h3>
                <p className="text-slate-400 mb-6">
                  Our focus is the productivity of your manufacturing operations. We consider the overall effectiveness of your corrugator system as a whole to maximize results.
                </p>
                <div className="flex items-center gap-4 text-red-500 font-bold">
                  <TrendingUp className="w-6 h-6" />
                  <span>Optimizing Overall Equipment Effectiveness (OEE)</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-600/10 to-transparent rounded-3xl"></div>
              <div className="relative h-[600px] bg-slate-100 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center">
                <Factory className="w-48 h-48 text-slate-200" />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl">
                  <h4 className="text-slate-900 font-bold text-xl mb-2">Sustainable Competitiveness</h4>
                  <p className="text-slate-600 text-sm">Reducing manufacturing costs per square meter of corrugated board through precision engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Corrugator <span className="text-red-600">Solutions</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our portfolio includes single machines, complete lines, and connected process-control systems under the theme Intelligence 4.0.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                {item.subLinks ? (
                  <div className="space-y-2 mb-6">
                    {item.subLinks.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={sub.path}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all group/link border border-slate-100 font-bold text-sm"
                      >
                        {sub.label}
                        <ArrowRight className="w-4 h-4 text-red-500 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-auto">
                    <Link to="/products" className="inline-flex items-center text-red-600 font-bold gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-slate-900" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Technical <span className="text-red-600">Mastery</span></h2>
              <p className="text-slate-600 text-lg">
                Process technology in corrugated board production is a highly complex issue. Constant board quality is essential for your success.
              </p>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-3 shadow-lg shadow-slate-200">
                Show All Seminars <Calendar className="w-5 h-5" />
              </button>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
              {seminars.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-red-500 font-bold text-xs uppercase mb-4 tracking-tighter">{item.type}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News / Highlights Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest <span className="text-red-500">Corrugator News</span></h2>
              <p className="text-slate-400">Stay updated with the latest innovations, camera systems, and remote service solutions from Hsieh Hsu India.</p>
            </div>
            <Link to="/news" className="text-white font-bold pb-2 border-b-2 border-red-600 hover:text-red-500 transition-all">
              Read All Stories
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
                <div className="flex gap-2 mb-6">
                   <span className="px-3 py-1 bg-red-600 text-[10px] font-black uppercase rounded-full tracking-widest">{item.tag}</span>
                   <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">Ready to optimize your production?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Factory className="w-5 h-5" /> Visit Our Factory
                </h3>
                <p className="text-red-100 text-sm leading-relaxed">
                  Plot No. B-19/2, Olaipatti Village,<br />
                  SIPCOT Industrial Park, Pochampalli,<br />
                  Krishnagiri – 635206, Tamil Nadu
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-400" /> Hotlines
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-red-200 text-xs font-bold uppercase tracking-widest">24-hour Emergency</p>
                    <p className="text-white font-bold text-lg">+91 98942 35419</p>
                  </div>
                  <div>
                    <p className="text-red-200 text-xs font-bold uppercase tracking-widest">Sales & Spare Parts</p>
                    <p className="text-white font-bold text-lg">+91 63699 12595</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-12 py-5 bg-white text-red-600 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl active:scale-100"
              >
                Contact Our Experts <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorrugatorsOverview;
