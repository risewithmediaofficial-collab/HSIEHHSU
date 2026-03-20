import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, ZapOff, BarChart3 } from 'lucide-react';

const SteadyLine = () => {
  const features = [
    {
      title: "Frequent Changeovers",
      desc: "Perfectly adapted for customers with short orders requiring frequent format and grade changes.",
      icon: <Settings className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Constant Speed",
      desc: "Maintains a steady production pace even during format changes, ensuring consistent board quality.",
      icon: <TrendingUp className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "AC Energy Pool",
      desc: "Equipped with award-winning drive control technology to optimize energy distribution and efficiency.",
      icon: <Zap className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Resource Efficiency",
      desc: "Achieves outstandingly low values for glue, steam and production waste for maximum profitability.",
      icon: <Shield className="w-6 h-6 text-[#f44336]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-250 | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-250 from Hsieh Hsu India – maintain constant speed with frequent changeovers. High-efficiency corrugation for short order cycles." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">HHC-250 SERIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
              HHC-250
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Maintain constant speed with frequent changeovers
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
                  <BarChart3 className="w-4 h-4" />
                  Performance Optimization
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter leading-none">
                  Maximize Productivity
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] leading-relaxed text-lg font-medium">
                The HHC-250 from Hsieh Hsu India was created for customers who receive a lot of very short orders, requiring them to change formats frequently. This corrugator line is designed to maintain constant speed as you change formats and grades.
              </p>

              <div className="p-10 bg-[#fafafa] border border-[#eee] relative group">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tighter">Ready, Steady, Go</h3>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed font-medium italic">
                    "Perfectly adapted for frequent format changes – Ready, steady, go!"
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-square bg-[#fafafa] border border-[#eee] flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
                <Factory className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1a1a1a] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">2,200 mm Width</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-[#f44336] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">8.5 Million m²/Month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Efficiency & Power
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <p className="text-[#7a7a7a] text-lg max-w-2xl mx-auto font-medium">
              Equipped with our award-winning “AC Energy Pool” system and latest drive control technology.
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

      {/* MAINTENANCE & SAVINGS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-[#f44336] uppercase tracking-tighter leading-none">
                  Sustainable Operation
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] text-lg font-medium leading-relaxed">
                The HHC-250's AC Energy Pool optimizes energy distribution across the entire line, achieving outstandingly low values for glue and steam.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <ZapOff className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Low Waste</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">Significantly reduced production scrap through optimized speed transitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <TrendingUp className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Fast Setup</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">Accelerated order transitions with constant speed maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-12 text-white border border-[#1a1a1a] relative group">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-[#f44336]">Technical Specifications</h3>
              <ul className="space-y-6">
                {[
                  "Maximum Width: 2,200 mm",
                  "Monthly Output: up to 8.5 million m²",
                  "AC Energy Pool Drive Control",
                  "Optimized Energy Distribution",
                  "Minimized Glue & Steam Consumption",
                  "Constant Speed Format Changes"
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

export default SteadyLine;
