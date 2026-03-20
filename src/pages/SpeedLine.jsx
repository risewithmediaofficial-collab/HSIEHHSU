import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Cpu, Gauge } from 'lucide-react';

const SpeedLine = () => {
  const features = [
    {
      title: "End-to-End Automation",
      desc: "Features fully automated systems designed to maximize efficiency and minimize unit costs for large orders.",
      icon: <Cpu className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Real-Time Optimization",
      desc: "Dependable assistance systems deliver quality setting parameters in real time for continuous production.",
      icon: <Settings className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "High Production Yield",
      desc: "Achieve massive production volumes of up to 56,000 m²/hour with consistent board quality.",
      icon: <Gauge className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Massive Daily Output",
      desc: "Configured for reliable daily output volumes exceeding one million square meters.",
      icon: <TrendingUp className="w-6 h-6 text-[#f44336]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-350  | Hsieh Hsu India high-Speed Corrugated Lines</title>
        <meta name="description" content="The HHC-350 from Hsieh Hsu India – high-volume solutions for transregional markets. Automated end-to-end for maximum efficiency." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">HHC-350 SERIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
              HHC-350
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              High-volume solutions for transregional markets
            </p>
          </div>
        </div>
      </section>

      {/* CORE CONCEPT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[#f44336] text-xs font-black uppercase tracking-widest">
                  <Gauge className="w-4 h-4" />
                  Maximum Throughput
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter leading-none">
                  Unmatched Throughput
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] leading-relaxed text-lg font-medium">
                The HHC-350 from Hsieh Hsu India features systems that are automated end-to-end, enabling you to achieve production volumes of up to 56,000 m²/hour. You also get maximum machine availability and cost-efficient configuration.
              </p>

              <div className="p-10 bg-[#fafafa] border border-[#eee] relative group">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tighter">Large Scale Precision</h3>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed font-medium italic">
                    "Engineered for large corrugated box plants with dedicated structures and well-trained personnel."
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-square bg-[#fafafa] border border-[#eee] flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
                <Factory className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1a1a1a] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">Production Leader</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2">
                  <div className="bg-[#1a1a1a] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest flex-1 text-center">56,000 m²/hour</div>
                  <div className="bg-[#f44336] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest flex-1 text-center">1M+ Daily m²</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE FEATURES */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Automated Efficiency
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <p className="text-[#7a7a7a] text-lg max-w-2xl mx-auto font-medium">
              A high-speed production system configured for maximum production speeds and reliable 24/7 availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-[#f44336] mb-8">{feature.icon}</div>
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-[#7a7a7a] text-[10px] leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE SCALE SOLUTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-[#f44336] uppercase tracking-tighter leading-none">
                  Supply Large Orders
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] text-lg font-medium leading-relaxed">
                Supply your large-scale customers with absolute dependability. Our assistance systems deliver real-time quality parameters.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <Zap className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Maximum Speed</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">Continuous top speed production across all board types.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <Shield className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">High Availability</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">24/7 industrial-grade reliability for peak demand cycles.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-12 text-white border border-[#1a1a1a] relative group">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-[#f44336]">System Specifications</h3>
              <ul className="space-y-6">
                {[
                  "Production Yield: up to 56,000 m²/hour",
                  "Daily output volume: over 1 million m²",
                  "Automated end-to-end system control",
                  "Real-time assistance system integration",
                  "Transregional supply chain optimization",
                  "Fast response global service support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#f44336]"></div>
                    <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeedLine;
