import { Helmet } from 'react-helmet-async';
import { Globe, Target, Award, Users, Factory, Clock, ArrowRight, CheckCircle, Zap, TrendingUp, Shield, Phone } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2024", event: "Launch of HHC Digital Intelligence Line in India", color: "from-blue-500 to-indigo-600" },
    { year: "1980s", event: "Standardizing High-Speed Corrugator Tech in Asia", color: "from-emerald-500 to-teal-600" },
    { year: "60+ YRS", event: "Unbroken Legacy of Machinery Innovation", color: "from-amber-500 to-orange-600" },
    { year: "GLOBAL", event: "Hubs in Taiwan, China, Vietnam & India", color: "from-purple-500 to-pink-600" },
    { year: "VISION", event: "Pioneering OEE-centric Production Systems", color: "from-red-500 to-rose-600" },
    { year: "SUPPORT", event: "24/7 Global Lifecycle Partnership Network", color: "from-cyan-500 to-blue-600" },
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Excellence",
      description: "Uncompromising quality in every project",
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Partnership",
      description: "Building lasting relationships with clients",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Reliability",
      description: "On-time delivery and consistent performance",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Innovation",
      description: "Adopting latest technologies and techniques",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", gradient: "from-blue-400 to-indigo-600" },
    { number: "40+", label: "Years Experience", gradient: "from-emerald-400 to-teal-600" },
    { number: "99.2%", label: "Success Rate", gradient: "from-amber-400 to-orange-600" },
    { number: "50+", label: "Satisfied Clients", gradient: "from-red-400 to-rose-600" },
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
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "ISO Certified Quality",
      description: "Rigorous quality assurance processes ensuring zero-defect manufacturing",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "24/7 Technical Support",
      description: "Dedicated team available round-the-clock for immediate assistance",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects with 99.2% customer satisfaction",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Cost-Effective Solutions",
      description: "Optimized processes delivering premium quality at competitive pricing",
      gradient: "from-red-500 to-rose-600"
    },
    {
      title: "Innovation & Technology",
      description: "Continuous improvement using latest industry technologies",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | HSIEHHSU MACHINERY INDIA - Premium Corrugation Solutions</title>
        <meta name="description" content="Learn about HSIEHHSU MACHINERY INDIA - Global leaders in corrugation solutions with 40+ years of expertise in roller refabrication, restoration, and machinery." />
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
              <span className="tracking-wide">Industry Leaders Since 2010</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight">
              About{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  HSIEHHSU
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Global expertise meets Indian dedication. Transforming corrugation manufacturing with precision, innovation, and unmatched service.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-red-100 text-sm md:text-base font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-7">
              <div className="flex items-center gap-5 mb-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  Global Expertise,<br />Indian Roots
                </h2>
              </div>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                HSIEHHSU MACHINERY stands as a global titan in corrugation technology, with over 60 years of engineering pedigree. Recognized as a top-ranking corrugator manufacturer in China and Taiwan, our machinery powers high-volume production plants across continents.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our Indian operations, anchored at the SIPCOT Industrial Park in Krishnagiri, Tamil Nadu, serve as a strategic bridge. We combine Hsieh Hsu's legendary Taiwan-engineered precision with a dedicated local support ecosystem, ensuring that Indian box plants achieve world-class OEE (Overall Equipment Effectiveness) while maintaining low manufacturing costs.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "ISO 9001:2015 Certified Manufacturing",
                  "40+ Years of Industry Experience",
                  "500+ Successful Projects Completed",
                  "99.2% Customer Satisfaction Rate"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-red-50 to-red-100 mr-3.5 flex-shrink-0 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                      <span className="w-2 h-2 bg-red-600 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    </span>
                    <span className="text-gray-700 font-medium text-sm md:text-base tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-red-50 via-red-50 to-orange-50 border-2 border-red-200 p-7 rounded-2xl hover:border-red-300 hover:shadow-lg transition-all duration-300 mt-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2.5 text-lg tracking-tight">Manufacturing Excellence</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">ISO certified processes ensuring quality, precision, and reliability at every step of production.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-7 lg:p-8 rounded-3xl shadow-xl border-2 border-gray-200 hover:border-red-200 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1.5 h-10 bg-gradient-to-b from-red-600 to-red-700 rounded-full shadow-lg"></span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Our Journey</h3>
                </div>
                
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`bg-gradient-to-br ${milestone.color} text-white px-5 py-3 rounded-xl font-bold text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                        {milestone.year}
                      </div>
                      <div className="pt-2.5 flex-1">
                        <p className="text-gray-800 font-semibold text-sm md:text-base group-hover:text-red-600 transition-colors duration-300 leading-relaxed">
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
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Engineering the <span className="text-red-500 underline decoration-red-500/50 underline-offset-8">Future of Corrugation</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our machinery is defined by three core pillars that ensure Hsieh Hsu remains the gold standard for high-performance corrugated board production.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "High-Speed Reliability", desc: "Configuration for maximum production speeds up to 56,000 m²/hour with reliable daily availability." },
                  { title: "Digital Intelligence 4.0", desc: "Automated end-to-end systems that deliver quality-related parameters in real-time." },
                  { title: "OEE Optimization", desc: "Strategic focus on reducing manufacturing costs per square meter through system-wide effectiveness." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] p-1 shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-slate-800 rounded-[2.8rem] flex items-center justify-center relative">
                   <Factory className="w-40 h-40 text-slate-700 group-hover:text-red-600 group-hover:scale-110 transition-all duration-700" />
                   <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900 to-transparent">
                      <p className="text-white text-2xl font-black italic opacity-20 uppercase tracking-[0.2em]">60 Years of Engineering</p>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
                 <div className="text-slate-900 font-black text-4xl mb-1">HHC Series</div>
                 <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Industry Gold Standard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRIME CUSTOMER ANALYSIS SECTION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                <Target size={14} className="text-red-500" />
                Strategic Market Analysis
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Prime Customer <br />
                <span className="text-red-600">Base Analysis</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Our customer base is analyzed and segmented to ensure that we deliver precisely what each production scale requires. From high-speed automated plants to emerging regional leaders, Hsieh Hsu India provides the structural backbone for India's corrugated industry.
              </p>
              
              <div className="space-y-6">
                {[
                  { segment: "Market Leaders", percentage: "40%", desc: "High-volume transregional plants requiring end-to-end automated SPEED Line systems." },
                  { segment: "Industry Pioneers", percentage: "35%", desc: "Regional specialists utilizing CLASSIC and STEADY Lines for high-quality niche output." },
                  { segment: "Emerging Corporations", percentage: "25%", desc: "Future-proof plants leveraging ECO Line technology for growth in emergent markets." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-slate-900 font-bold text-lg">{item.segment}</span>
                      <span className="text-red-600 font-black text-2xl">{item.percentage}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 rounded-full group-hover:bg-red-700 transition-all duration-1000" style={{width: item.percentage}}></div>
                    </div>
                    <p className="text-slate-500 text-sm mt-2 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2rem] hover:border-red-200 transition-all group">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      <TrendingUp size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">ROI Focus</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">Analyzing equipment lifecycle to maximize return on investment for prime partners.</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                   <h3 className="text-4xl font-black mb-1">500+</h3>
                   <div className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4">Successful Audits</div>
                   <p className="text-slate-400 text-sm leading-relaxed">Rigorous performance analysis conducted for our top-tier clients annually.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-red-600 p-8 rounded-[2rem] text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                   <h3 className="text-4xl font-black mb-1">99.2%</h3>
                   <div className="text-white/80 font-bold uppercase tracking-widest text-xs mb-4">Uptime Analysis</div>
                   <p className="text-white/70 text-sm leading-relaxed">Our prime customers maintain world-class uptime records through our service partnership.</p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2rem] hover:border-red-200 transition-all group">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      <Users size={24} />
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">Technical Hubs</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">Integrated support hubs localized for prime manufacturing clusters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Our Core{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Strengths
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built on decades of expertise and commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {teamAreas.map((area, idx) => (
              <div
                key={idx}
                className="group bg-white p-7 lg:p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3.5 tracking-tight">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Our Core{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles guiding every decision and relationship
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-7 lg:p-8 rounded-2xl border-2 border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${value.bgColor} text-gray-700 mb-6 transition-all duration-500 bg-gradient-to-br group-hover:${value.gradient} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3.5 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Vision */}
            <div className="group h-full">
              <div className="bg-white border-2 border-red-200 p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-50 hover:border-red-300 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-5 mb-7">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Target className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Our Vision</h3>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed flex-1">
                  To become the most trusted partner for the Indian corrugated packaging industry by delivering world-class roller solutions, supported by advanced corrugation machinery, dependable service, and genuine spares that drive excellence across every operation.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="group h-full">
              <div className="bg-white border-2 border-red-200 p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-50 hover:border-red-300 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-5 mb-7">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500 shadow-lg flex-shrink-0">
                    <Award className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Our Mission</h3>
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed flex-1">
                  To provide innovative, reliable, and cost-effective corrugation solutions that enhance our clients' productivity and profitability through exceptional quality, technical expertise, and customer-focused service that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                HSIEHHSU?
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-red-200 p-7 lg:p-8 rounded-2xl hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative inline-flex items-center justify-center w-3 h-3 rounded-full bg-gradient-to-br ${item.gradient} mb-5 group-hover:scale-150 transition-transform duration-500 shadow-lg`}></div>
                
                <h4 className="font-bold text-gray-900 mb-3.5 text-lg tracking-tight relative z-10">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.description}</p>
              </div>
            ))}
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
            Ready to Partner{' '}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              With Us?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 500+ satisfied clients who trust us for their corrugation machinery needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 text-base shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5 mr-2.5 group-hover:rotate-12 transition-transform duration-300" />
              Call Us Now
            </a>
            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 text-base border-2 border-white/30 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              WhatsApp Chat
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;