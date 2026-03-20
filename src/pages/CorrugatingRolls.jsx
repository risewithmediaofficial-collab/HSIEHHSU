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
      icon: <Shield className="w-8 h-8 text-[#f44336]" />
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
      icon: <Zap className="w-8 h-8 text-[#f44336]" />
    }
  ];

  const features = [
    {
      title: "High Precision Flute Profiles",
      desc: "Designed for accurate flute formation across all standard configurations (A, B, C, E, F & custom profiles).",
      icon: <Target className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Superior Surface Hardness",
      desc: "Manufactured using specially treated alloy steel that retains hardness even under high-temperature operations.",
      icon: <Shield className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Advanced Coating Technology",
      desc: "Available with tungsten carbide and chrome coatings for excellent wear resistance and extended lifespan.",
      icon: <Zap className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Optimized Surface Finish",
      desc: "Low roughness ensures smooth paper flow, better adhesive bonding, and consistent board quality.",
      icon: <Settings className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "High Durability & Regrind Capability",
      desc: "Designed for multiple regrinding cycles without compromising performance.",
      icon: <TrendingUp className="w-6 h-6 text-[#f44336]" />
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

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
               <span className="tracking-wide">Precision Engineered Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
               Precision Corrugating Rolls Excellence
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
               Precision Engineered for Superior Board Quality. The core of your production excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INTRO & OVERVIEW ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">High-Performance Roller Core Systems</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Corrugating rolls are the core component of any corrugation system, directly influencing the strength, consistency, and overall quality of corrugated boards.
              </p>
              
              <div className="p-10 border border-[#eee] bg-[#fafafa] space-y-6">
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest">Innovation Overview</h3>
                <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed uppercase">
                  Our corrugating rolls are engineered using advanced manufacturing techniques and deep industry expertise. Designed to perform under high temperatures and continuous operations, they ensure reliable output, improved productivity, and long service life.
                </p>
                <div className="pt-6 border-t border-[#eee] flex items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">Maximum Durability</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square bg-[#fafafa] border border-[#eee] p-16 flex items-center justify-center group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
               <Factory className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
               <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#fafafa] to-transparent">
                  <p className="text-[#1a1a1a] text-2xl font-black uppercase tracking-tighter opacity-10 uppercase">Advanced Hub</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter text-center">
               Key Engineering Features Overview
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#eee] border border-[#eee]">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-12 space-y-8 group hover:bg-[#fafafa] transition-colors">
                <div className="text-[#f44336] group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div>
                   <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{feature.title}</h3>
                   <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed uppercase">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">Versatile Industry Applications Matrix</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>

                <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                   Our corrugating rolls are widely used across various sectors of the packaging industry, providing unmatched stability and performance.
                </p>

                <div className="grid sm:grid-cols-2 gap-px bg-[#eee] border border-[#eee]">
                   {applications.map((app, idx) => (
                      <div key={idx} className="bg-[#fafafa] p-6 flex items-center gap-4">
                         <div className="w-2 h-2 bg-[#f44336]"></div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">{app}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className="hidden lg:flex justify-center">
                <div className="w-full aspect-video bg-[#fafafa] border border-[#eee] flex items-center justify-center relative group">
                   <Target className="w-32 h-32 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                   <div className="absolute top-0 right-0 p-8">
                      <div className="w-12 h-1 bg-[#f44336]"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>      {/* ===== MATERIAL & COATING ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter leading-none">Material Composition & Coating</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                  The quality and performance of a corrugating roll starts with the base material and is perfected by the surface coating.
              </p>
              
              <div className="grid gap-4">
                {materialContent.map((item, idx) => (
                  <div key={idx} className="notification-card bg-white p-0 overflow-hidden border-[#eee]">
                    <button 
                      onClick={() => toggleMaterialTab(idx)}
                      className="w-full text-left p-10 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center group-hover:border-[#f44336] transition-colors">
                           <div className="text-[#1a1a1a]">{item.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest tracking-tight">{item.title}</h3>
                          <p className="text-[10px] font-black text-[#f44336] uppercase tracking-widest">{item.subtitle}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeMaterialTab === idx ? 'rotate-180 text-[#f44336]' : 'text-[#aaa]'}`} />
                    </button>
                    
                    <div className={`transition-all duration-500 ease-in-out ${activeMaterialTab === idx ? 'max-h-[1200px] opacity-100 p-10 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="pt-10 border-t border-[#eee] space-y-10">
                        <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed uppercase">{item.desc}</p>
                        
                        <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-4">
                             <h4 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest">Key Features</h4>
                             <ul className="space-y-3">
                               {item.highlights.map((h, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                   <div className="w-1 h-1 bg-[#f44336]"></div>
                                   <span className="text-[10px] font-bold text-[#4a4a4a] uppercase tracking-widest">{h}</span>
                                 </li>
                                ))}
                             </ul>
                          </div>
                          <div className="space-y-4">
                             <h4 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest">Advantages</h4>
                             <ul className="space-y-3">
                               {item.details.map((d, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                   <div className="w-1 h-1 bg-[#f44336]"></div>
                                   <span className="text-[10px] font-bold text-[#4a4a4a] uppercase tracking-widest">{d}</span>
                                 </li>
                               ))}
                             </ul>
                          </div>
                        </div>
                        
                        <div className="bg-[#1a1a1a] p-8 text-white relative group overflow-hidden">
                           <p className="text-[10px] text-[#f44336] font-black uppercase tracking-widest mb-2">Hsieh Hsu Performance Guarantee</p>
                           <p className="text-xs font-medium uppercase leading-relaxed">Maximum cost-effectiveness and engineering precision.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:mt-24">
               <div className="bg-white p-12 lg:p-16 border border-[#eee] space-y-12">
                  <div className="w-16 h-1 bg-[#f44336]"></div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-black text-[#f44336] uppercase tracking-tighter leading-tight">WLF Finishing Process</h3>
                    <p className="text-[#4a4a4a] leading-relaxed text-lg font-medium">
                       With our **WLF (Tungsten Lapping Finishing)** process, we achieve a perfect surface coating of **&lt; 0.2 µ Ra**, ensuring optimum flute formation and moisture management for all medium papers.
                    </p>
                  </div>
                  
                  <div className="pt-10 border-t border-[#eee]">
                    <div className="grid grid-cols-2 gap-12">
                      <div className="space-y-1">
                        <div className="text-[#1a1a1a] text-3xl font-black tracking-tighter italic">100 µm</div>
                        <div className="text-[#7a7a7a] text-[10px] font-black uppercase tracking-widest leading-none">Chrome Thickness</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[#1a1a1a] text-3xl font-black tracking-tighter italic">RA &lt; 0.2</div>
                        <div className="text-[#7a7a7a] text-[10px] font-black uppercase tracking-widest leading-none">Surface Finish</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FAQs ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
             <div className="w-16 h-16 bg-[#fafafa] border border-[#eee] flex items-center justify-center mx-auto mb-8">
                <HelpCircle className="w-8 h-8 text-[#1a1a1a]" />
             </div>
            <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">
               Corrugating Rolls FAQs
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="notification-card bg-[#fafafa] p-0 overflow-hidden border-[#eee] group"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-8 lg:p-10 flex items-center justify-between gap-6"
                >
                  <span className={`text-sm font-black uppercase tracking-widest leading-tight transition-colors ${openFaq === idx ? 'text-[#f44336]' : 'text-[#1a1a1a]'}`}>
                    {idx + 1}. {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#f44336]' : 'text-[#aaa]'}`} />
                </button>
                <div className={`transition-all duration-500 ${openFaq === idx ? 'max-h-96 opacity-100 p-10 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="pt-10 border-t border-[#eee] text-[#7a7a7a] text-xs font-medium leading-relaxed uppercase">
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
