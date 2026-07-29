import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, ZapOff, BarChart3 } from 'lucide-react';
import steadyLineImage from '../assets/ChatGPT Image Jun 11, 2026, 03_07_37 PM (4).png';

const SteadyLine = () => {
  const features = [
    {
      title: "Frequent Changeovers",
      desc: "Perfectly adapted for customers with short orders requiring frequent format and grade changes.",
      icon: <Settings className="w-6 h-6 text-[#1F7A8C]" />
    },
    {
      title: "Constant Speed",
      desc: "Maintains a steady production pace even during format changes, ensuring consistent board quality.",
      icon: <TrendingUp className="w-6 h-6 text-[#1F7A8C]" />
    },
    {
      title: "AC Energy Pool",
      desc: "Equipped with award-winning drive control technology to optimize energy distribution and efficiency.",
      icon: <Zap className="w-6 h-6 text-[#1F7A8C]" />
    },
    {
      title: "Resource Efficiency",
      desc: "Achieves outstandingly low values for glue, steam and production waste for maximum profitability.",
      icon: <Shield className="w-6 h-6 text-[#1F7A8C]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-250 | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-250 from Hsieh Hsu India – maintain constant speed with frequent changeovers. High-efficiency corrugation for short order cycles." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E1E5F2] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#BFDBF7]/40 text-[#1F7A8C] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#1F7A8C] uppercase tracking-widest mb-10">
              <span className="tracking-wide">HHC-250 SERIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#022B3A] uppercase">
              HHC-250
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#022B3A]/80 leading-relaxed max-w-3xl mx-auto font-medium">
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
                <div className="inline-flex items-center gap-2 text-[#1F7A8C] text-xs font-black uppercase tracking-widest">
                  <BarChart3 className="w-4 h-4" />
                  Performance Optimization
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter leading-none">
                  Maximize Productivity
                </h2>
                <div className="w-20 h-1 bg-[#1F7A8C]"></div>
              </div>

              <p className="text-[#022B3A]/80 leading-relaxed text-lg font-medium">
                The HHC-250 from Hsieh Hsu India was created for customers who receive a lot of very short orders, requiring them to change formats frequently. This corrugator line is designed to maintain constant speed as you change formats and grades.
              </p>

              <div className="p-10 bg-[#E1E5F2]/40 border border-[#E1E5F2] relative group">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#022B3A] uppercase tracking-tighter">Ready, Steady, Go</h3>
                  <p className="text-[#022B3A]/70 text-sm leading-relaxed font-medium italic">
                    "Perfectly adapted for frequent format changes – Ready, steady, go!"
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-square bg-[#E1E5F2]/40 border border-[#E1E5F2] flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#E1E5F2]"></div>
                <img
                  src={steadyLineImage}
                  alt="HHC-250 corrugation line control section"
                  className="relative z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="py-16 bg-[#E1E5F2]/40 border-y border-[#E1E5F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Efficiency & Power
            </h2>
            <div className="w-20 h-1 bg-[#1F7A8C] mx-auto"></div>
            <p className="text-[#022B3A]/70 text-lg max-w-2xl mx-auto font-medium">
              Equipped with our award-winning “AC Energy Pool” system and latest drive control technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-[#1F7A8C] mb-8">{feature.icon}</div>
                <h3 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-[#022B3A]/70 text-[10px] leading-relaxed font-medium">{feature.desc}</p>
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
                <h2 className="text-4xl md:text-6xl font-black text-[#022B3A] uppercase tracking-tighter leading-none">
                  Sustainable Operation
                </h2>
                <div className="w-20 h-1 bg-[#1F7A8C]"></div>
              </div>

              <p className="text-[#022B3A]/80 text-lg font-medium leading-relaxed">
                The HHC-250's AC Energy Pool optimizes energy distribution across the entire line, achieving outstandingly low values for glue and steam.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#E1E5F2]/40 border border-[#E1E5F2] flex items-center justify-center flex-shrink-0 group-hover:border-[#1F7A8C] transition-colors">
                    <ZapOff className="w-6 h-6 text-[#022B3A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-2">Low Waste</h4>
                    <p className="text-[#022B3A]/70 text-xs font-medium leading-relaxed">Significantly reduced production scrap through optimized speed transitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#E1E5F2]/40 border border-[#E1E5F2] flex items-center justify-center flex-shrink-0 group-hover:border-[#1F7A8C] transition-colors">
                    <TrendingUp className="w-6 h-6 text-[#022B3A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-2">Fast Setup</h4>
                    <p className="text-[#022B3A]/70 text-xs font-medium leading-relaxed">Accelerated order transitions with constant speed maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#022B3A] p-12 text-white border border-[#022B3A] relative group">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-[#BFDBF7]">Technical Specifications</h3>
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
                    <div className="w-2 h-2 bg-[#1F7A8C]"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#BFDBF7]">{item}</span>
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
