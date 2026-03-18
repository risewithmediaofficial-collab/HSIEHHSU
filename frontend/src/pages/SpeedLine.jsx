import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Cpu, Gauge } from 'lucide-react';

const SpeedLine = () => {
  const features = [
    {
      title: "End-to-End Automation",
      desc: "Features fully automated systems designed to maximize efficiency and minimize unit costs for large orders.",
      icon: <Cpu className="w-6 h-6 text-red-600" />
    },
    {
      title: "Real-Time Optimization",
      desc: "Dependable assistance systems deliver quality setting parameters in real time for continuous production.",
      icon: <Settings className="w-6 h-6 text-red-600" />
    },
    {
      title: "High Production Yield",
      desc: "Achieve massive production volumes of up to 56,000 m²/hour with consistent board quality.",
      icon: <Gauge className="w-6 h-6 text-red-600" />
    },
    {
      title: "Massive Daily Output",
      desc: "Configured for reliable daily output volumes exceeding one million square meters.",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-350 SPEED Line | Hsieh Hsu India high-Speed Corrugated Lines</title>
        <meta name="description" content="The HHC-350 SPEED Line from Hsieh Hsu India – high-volume solutions for transregional markets. Automated end-to-end for maximum efficiency." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Gauge className="w-4 h-4" />
              <span className="tracking-wide">HHC-350 SERIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight text-white">
              SPEED <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Line</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              High-volume solutions for transregional markets
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Unmatched <span className="text-red-600">Throughput</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To dependably supply large orders while keeping unit costs to a minimum, you need a high-speed corrugator line that is highly reliable and efficient. The SPEED Line from Hsieh Hsu India features systems that are automated end-to-end, enabling you to achieve production volumes of up to 56,000 m²/hour. You also get maximum machine availability, fast service and cost-efficient machine configurations.
                </p>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                  <CheckCircle className="w-5 h-5" />
                  Hsieh Hsu India SPEED Line
                </h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "Engineered for large corrugated box plants with dedicated structures and well-trained personnel."
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600 rounded-3xl rotate-1 opacity-10 group-hover:rotate-2 transition-transform duration-500"></div>
                <div className="relative h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-2xl">
                  <Factory className="w-32 h-32 text-slate-300" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg uppercase tracking-wider">Top Speed Production</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-700">
                      <span className="block text-2xl font-black text-red-500">56,000</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">m²/hour Yield</span>
                    </div>
                    <div className="bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-xl border border-slate-700">
                      <span className="block text-2xl font-black text-red-500">1M+</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Daily m² Output</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Automated <span className="text-red-600">Efficiency</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Designed for transregional markets, the SPEED Line is our high-speed production system configured for maximum production speeds and reliable 24/7 availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Scale Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Supply <span className="text-red-500">Large Orders</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Supply your large-scale customers with absolute dependability. Our assistência systems deliver real-time quality parameters, allowing for reliable production at the maximum speed for each product type.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="font-bold text-lg">Continuous Top Speed Production</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="font-bold text-lg">Maximum Machine Availability</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-red-500 mb-6 uppercase tracking-wider">Speed Line Specifications</h3>
                <ul className="space-y-4">
                  {[
                    "Maximum production yield: 56,000 m²/hour",
                    "Daily output volume: over 1 million m²",
                    "Automated end-to-end system control",
                    "Real-time assistance system integration",
                    "Transregional supply chain optimization",
                    "Fast response global service support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-100">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeedLine;
