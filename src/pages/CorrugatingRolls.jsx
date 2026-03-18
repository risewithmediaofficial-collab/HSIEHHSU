import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, ChevronDown, HelpCircle, Target, Zap, Shield, TrendingUp, Factory } from 'lucide-react';
import { useState } from 'react';

const CorrugatingRolls = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeMaterialTab, setActiveMaterialTab] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleMaterialTab = (index) => {
    setActiveMaterialTab(activeMaterialTab === index ? null : index);
  };

  const materialContent = [
    {
      title: "Base Material",
      subtitle: "The Foundation of Performance",
      desc: "The quality and performance of a corrugating roll starts with the base material. Hsieh Hsu India relies on a specially developed alloy steel composition that retains its hardness and dimensional stability even at high operating temperatures.",
      highlights: [
        "Specially developed high-grade alloy steel",
        "Retains hardness in extreme heat/pressure applications",
        "Higher availability & consistent board quality",
        "Greater cost-effectiveness over lifecycle"
      ],
      details: [
        "Reliable Hardness: Engineered for demanding requirements",
        "Exclusivity: High-performance steel tailored for Hsieh Hsu",
        "Regrindability: Support for 2-3 regrinds without precision loss",
        "Consistent Level: Hardness stays constant over entire service life"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Surface Coating",
      subtitle: "Advanced Wear Resistance",
      desc: "We utilize innovative coatings such as Tungsten Carbide and Super Micro Chrome to ensure maximum wear resistance and optimum running properties across various medium papers.",
      highlights: [
        "Tungsten Carbide: Outstanding hardness & wear resistance",
        "Super Micro Chrome: Excellent running properties (100 µm)",
        "WLF Process: Perfect surface coating < 0.2 µ Ra",
        "Optimized flood formation for all paper grades"
      ],
      details: [
        "Homogeneous distribution of carbides for extreme density",
        "Constant caliber height over running time and width",
        "Exceptional adhesion to the base material",
        "Low roughness for optimal bonding performance"
      ],
      icon: <Zap className="w-8 h-8 text-red-600" />
    }
  ];

  const features = [
    {
      title: "High Precision Flute Profiles",
      desc: "Designed for accurate flute formation across all standard configurations (A, B, C, E, F & custom profiles).",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      title: "Superior Surface Hardness",
      desc: "Manufactured using specially treated alloy steel that retains hardness even under high-temperature operations.",
      icon: <Shield className="w-6 h-6 text-red-600" />
    },
    {
      title: "Advanced Coating Technology",
      desc: "Available with tungsten carbide and chrome coatings for excellent wear resistance and extended lifespan.",
      icon: <Zap className="w-6 h-6 text-red-600" />
    },
    {
      title: "Optimized Surface Finish",
      desc: "Low roughness ensures smooth paper flow, better adhesive bonding, and consistent board quality.",
      icon: <Settings className="w-6 h-6 text-red-600" />
    },
    {
      title: "High Durability & Regrind Capability",
      desc: "Designed for multiple regrinding cycles without compromising performance.",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />
    }
  ];

  const applications = [
    "Corrugated box manufacturing",
    "E-commerce packaging solutions",
    "Industrial packaging production",
    "High-speed corrugation lines"
  ];

  const faqs = [
    {
      q: "Do you offer reworking services for corrugating rolls from other manufacturers?",
      a: "Yes, Hsieh Hsu India provides professional reworking and refurbishment services for corrugating rolls from various manufacturers. Our process includes precision regrinding, recoating, and profile restoration to bring the rolls back to optimal performance standards."
    },
    {
      q: "What corrugating roll programs do you offer?",
      a: "We offer flexible solutions including: New roll manufacturing, Regrinding and recoating services, Preventive maintenance programs, and Performance optimization support. These programs are designed to maximize roll life and ensure consistent production quality."
    },
    {
      q: "How long does it take to manufacture a corrugating roll?",
      a: "Production time depends on specifications such as size, flute profile, and coating type. Typically, manufacturing takes 4 to 8 weeks, ensuring strict quality control and precision engineering."
    },
    {
      q: "What coatings are available for corrugating rolls?",
      a: "We provide advanced coating options, including: Tungsten Carbide Coating for superior wear resistance, and Chrome Coating for smooth operation and cost efficiency. Each coating is selected based on application requirements and production conditions."
    },
    {
      q: "How many running meters can a set of corrugating rolls achieve?",
      a: "The lifespan of corrugating rolls depends on operating conditions, paper quality, and maintenance practices. With proper usage and care, our rolls are designed to deliver high running meters with consistent performance over long production cycles."
    },
    {
      q: "How often can a corrugating roll be reworked?",
      a: "Corrugating rolls can typically be reworked multiple times depending on their condition and remaining material thickness. Our advanced regrinding process ensures minimal material loss while maintaining profile accuracy."
    },
    {
      q: "Do you manufacture rolls for other machine brands?",
      a: "Yes, our corrugating rolls are compatible with all major corrugator and single facer machine manufacturers. We customize designs to match exact machine specifications."
    },
    {
      q: "What flute profiles are available?",
      a: "We offer a wide range of flute profiles including: A, B, C, E, F flutes, and Custom-designed profiles based on client requirements. Each profile is engineered for optimal strength, cushioning, and material efficiency."
    },
    {
      q: "What materials are used in manufacturing corrugating rolls?",
      a: "Our corrugating rolls are made from high-grade alloy steel, designed to withstand high temperatures and continuous operation. Combined with advanced coatings, this ensures durability, precision, and long service life."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Corrugating Rolls | High-Performance Precision Engineering</title>
        <meta name="description" content="Precision engineered corrugating rolls for superior board quality. High precision flute profiles, advanced coating technology, and extreme durability." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <CheckCircle className="w-4 h-4" />
              <span className="tracking-wide">Precision Engineered Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight">
              Corrugating{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Rolls
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Precision Engineered for Superior Board Quality
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                High-Performance <span className="text-red-600">Core Components</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Corrugating rolls are the core component of any corrugation system, directly influencing the strength, consistency, and overall quality of corrugated boards. At Hsieh Hsu India, we deliver high-performance corrugating rolls designed to optimize production efficiency while ensuring consistent flute formation and durability.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-red-600 rounded-r-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Overview</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Our corrugating rolls are engineered using advanced manufacturing techniques and deep industry expertise. Designed to perform under high temperatures and continuous operations, they ensure reliable output, improved productivity, and long service life.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  These rolls play a crucial role in shaping the flute profile and maintaining uniform bonding, which directly impacts the strength and finish of the final corrugated board.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 rounded-3xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative h-96 bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-xl">
                 <Factory className="w-24 h-24 text-slate-300" />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                   <p className="text-white font-bold text-lg">Advanced Manufacturing Facility</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Key <span className="text-red-600">Features</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our rolls are built with specifications that exceed industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Versatile <span className="text-red-500">Applications</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Our corrugating rolls are widely used across various sectors of the packaging industry, providing unmatched stability and performance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <Target className="w-48 h-48 text-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material & Coating Dropdown Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Settings className="w-4 h-4" />
                Technical Specifications
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Material & <span className="text-red-600">Coating</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The quality and performance of a corrugating roll starts with the base material and is perfected by the surface coating. Hsieh Hsu India relies on a specially developed steel composition and innovative coatings such as tungsten carbide and Super Micro Chrome.
              </p>
              
              <div className="space-y-4">
                {materialContent.map((item, idx) => (
                  <div key={idx} className={`border-2 rounded-3xl transition-all duration-500 overflow-hidden ${activeMaterialTab === idx ? 'border-red-600 shadow-xl shadow-red-50' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}>
                    <button 
                      onClick={() => toggleMaterialTab(idx)}
                      className="w-full text-left p-8 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${activeMaterialTab === idx ? 'bg-red-600 text-white' : 'bg-white text-slate-400'}`}>
                           {item.icon}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold transition-colors ${activeMaterialTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</h3>
                          <p className={`text-sm font-medium ${activeMaterialTab === idx ? 'text-red-600' : 'text-slate-400'}`}>{item.subtitle}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${activeMaterialTab === idx ? 'rotate-180 text-red-600' : 'text-slate-300'}`} />
                    </button>
                    
                    <div className={`transition-all duration-500 ease-in-out ${activeMaterialTab === idx ? 'max-h-[1200px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="pt-6 border-t border-slate-200 space-y-8">
                        <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <h4 className="text-slate-900 font-bold flex items-center gap-2">
                               <CheckCircle className="w-5 h-5 text-emerald-500" /> Key Features
                             </h4>
                             <ul className="space-y-3">
                               {item.highlights.map((h, i) => (
                                 <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                                   <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                                   {h}
                                 </li>
                               ))}
                             </ul>
                          </div>
                          <div className="space-y-4">
                             <h4 className="text-slate-900 font-bold flex items-center gap-2">
                               <Zap className="w-5 h-5 text-amber-500" /> Engineering Advantages
                             </h4>
                             <ul className="space-y-3">
                               {item.details.map((d, i) => (
                                 <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                                   <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                                   {d}
                                 </li>
                               ))}
                             </ul>
                          </div>
                        </div>
                        
                        <div className="bg-slate-900 rounded-2xl p-6 text-white text-center">
                          <p className="text-xs uppercase font-black tracking-[0.2em] text-red-500 mb-1">Hsieh Hsu India Guarantee</p>
                          <p className="text-sm font-medium">Consistently high corrugated board quality and maximum cost-effectiveness.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group lg:mt-20">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 flex flex-col h-full space-y-8">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">WLF Finishing Process</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      With our **WLF (Tungsten Lapping Finishing)** process, we achieve a perfect surface coating of **&lt; 0.2 µ Ra**, ensuring optimum flute formation and moisture management for all common medium papers.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-12">
                      <div>
                        <div className="text-white text-3xl font-black mb-1 italic">100 µm</div>
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Chrome Thickness</div>
                      </div>
                      <div>
                        <div className="text-white text-3xl font-black mb-1 italic">RA &lt; 0.2</div>
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Surface Finish</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 border border-red-100 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Corrugating Rolls – <span className="text-red-600">FAQs</span>
            </h2>
            <p className="text-slate-600 font-medium">
              Everything you need to know about our rolls and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === idx ? 'border-red-200 shadow-lg shadow-red-50' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className={`font-bold text-lg leading-tight transition-colors ${
                    openFaq === idx ? 'text-red-600' : 'text-slate-900'
                  }`}>
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180 text-red-500' : ''
                  }`} />
                </button>
                <div className={`transition-all duration-300 ${
                  openFaq === idx ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                }`}>
                  <div className="pt-2 border-t border-slate-100 mt-2 text-slate-600 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CorrugatingRolls;
