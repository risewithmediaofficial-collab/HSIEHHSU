import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Users, Globe } from 'lucide-react';

const EcoLine = () => {
  const features = [
    {
      title: "Built Solid",
      desc: "Designed for extreme durability with a sturdy layout, built for 20+ years of reliable operation.",
      icon: <Shield className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Emergent Market Optimized",
      desc: "Perfect for manufacturers targeting monthly output around 5,000 tons, depending on machine width and production mix.",
      icon: <TrendingUp className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Resilient Engineering",
      desc: "Largely impervious to external influences including power fluctuations and frequent changes of raw material.",
      icon: <Zap className="w-6 h-6 text-[#f44336]" />
    },
    {
      title: "Precision Control",
      desc: "Equipped with a cleverly devised control system to ensure high-quality corrugated board production.",
      icon: <Settings className="w-6 h-6 text-[#f44336]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-200 | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-200 – a future-proof product for emergent markets. High-quality corrugation solutions designed for reliability and durability." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">HHC-200 SERIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              HHC-200
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              A future-proof product for emergent markets
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
                  <TrendingUp className="w-4 h-4" />
                  Growth Oriented Solutions
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter leading-none">
                  Invest in Growth
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] leading-relaxed text-lg font-medium">
                Are you looking to invest in a potential market? The HHC-200 from Hsieh Hsu India meets the needs of manufacturers looking for dependable output, flexible widths, and stable production under challenging conditions.
              </p>

              <div className="p-10 bg-[#fafafa] border border-[#eee] relative group">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tighter">Peak Reliability</h3>
                  <p className="text-[#7a7a7a] text-sm leading-relaxed font-medium italic">
                    "The HHC-200 delivers peak reliability even under difficult production conditions."
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-square bg-[#fafafa] border border-[#eee] flex items-center justify-center group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
                <Factory className="w-48 h-48 text-[#eee] group-hover:text-[#f44336] transition-colors duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1a1a1a] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest">1800 / 2200 / 2500 MM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING EXCELLENCE */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">
              Built Solid
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <p className="text-[#7a7a7a] text-lg max-w-2xl mx-auto font-medium">
              Designed based on our robust high-end technology but optimized for a 1,800 mm width.
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

      {/* OPERATIONS & SERVICE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-[#000000] uppercase tracking-tighter leading-none">
                  Global Expertise
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-[#4a4a4a] text-lg font-medium leading-relaxed">
                The HHC-200 is largely impervious to external influences including power fluctuations and frequent changes of raw material.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <Users className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Local Support</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">Expert service teams available worldwide for immediate assistance and training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                    <Globe className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-2">Full Maintenance</h4>
                    <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">End-to-end lifecycle solutions ensuring your corrugator runs at peak efficiency.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-12 text-white border border-[#1a1a1a] relative group">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-[#f44336]">Technical Spec</h3>
              <ul className="space-y-6">
                {[
                  "Designed for 20+ years of operation",
                  "Cleverly devised control systems",
                  "Mechanical Width: 1800 MM / 2200 MM / 2500 MM",
                  "Monthly Output: 5000 tons/month",
                  "Robust against power fluctuations",
                  "Local sales teams with right solutions"
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

      <section className="py-16 bg-[#fafafa] border-t border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">Need HHC-200 Details?</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <p className="text-lg text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed font-medium">
            Request technical details, width confirmation, and output planning support for the HHC-200 line.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote?service=HHC-200"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Quote
            </Link>
            <Link
              to="/apply?service=HHC-200"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcoLine;
