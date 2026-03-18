import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, ZapOff, BarChart3 } from 'lucide-react';

const SteadyLine = () => {
  const features = [
    {
      title: "Frequent Changeovers",
      desc: "Perfectly adapted for customers with short orders requiring frequent format and grade changes.",
      icon: <Settings className="w-6 h-6 text-red-600" />
    },
    {
      title: "Constant Speed",
      desc: "Maintains a steady production pace even during format changes, ensuring consistent board quality.",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />
    },
    {
      title: "AC Energy Pool",
      desc: "Equipped with award-winning drive control technology to optimize energy distribution and efficiency.",
      icon: <Zap className="w-6 h-6 text-red-600" />
    },
    {
      title: "Resource Efficiency",
      desc: "Achieves outstandingly low values for glue, steam and production waste for maximum profitability.",
      icon: <Shield className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-250 STEADY S Line | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-250 STEADY S Line from Hsieh Hsu India – maintain constant speed with frequent changeovers. High-efficiency corrugation for short order cycles." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <BarChart3 className="w-4 h-4" />
              <span className="tracking-wide">HHC-250 SERIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight text-white">
              STEADY <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Line</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Maintain constant speed with frequent changeovers
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
                  Maximize <span className="text-red-600">Productivity</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  The STEADY S Line from Hsieh Hsu India was created for customers who receive a lot of very short orders, requiring them to change formats frequently and for whom moderate output volumes are sufficient. This corrugator line is designed to maintain constant speed as you change formats and grades. The result is thoroughly simple operation and consistently high-quality corrugated board.
                </p>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                  <CheckCircle className="w-5 h-5" />
                  Hsieh Hsu India STEADY S Line
                </h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "Perfectly adapted for frequent format changes – Ready, steady, go!"
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600 rounded-3xl rotate-2 opacity-10 group-hover:rotate-4 transition-transform duration-500"></div>
                <div className="relative h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-2xl">
                  <Factory className="w-32 h-32 text-slate-300" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">2,200 mm Width</span>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <span className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">8.5 Million m²/Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Efficiency <span className="text-red-600">& Power</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Equipped with our award-winning “AC Energy Pool” system, the STEADY S Line incorporates the latest drive control technology to ensure your operation stays profitable.
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

      {/* Maintenance & Savings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full -ml-48 -mt-48 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Sustainable <span className="text-red-500">Operation</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  The STEADY S Line's AC Energy Pool optimizes energy distribution across the entire line. Along with maintaining a constant production speed, it achieves outstandingly low values for glue, steam and production waste.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                      <ZapOff className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Low Waste</h4>
                      <p className="text-slate-400 text-xs">Reduced production scrap</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Fast Setup</h4>
                      <p className="text-slate-400 text-xs">Quick order transitions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Product Specifications</h3>
                <ul className="space-y-4">
                  {[
                    "Maximum Width: 2,200 mm",
                    "Monthly Output: up to 8.5 million m²",
                    "AC Energy Pool Drive Control",
                    "Optimized Energy Distribution",
                    "Minimized Glue & Steam Consumption",
                    "Constant Speed Format Changes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
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

export default SteadyLine;
