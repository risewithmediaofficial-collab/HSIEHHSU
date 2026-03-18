import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Users, Globe } from 'lucide-react';

const EcoLine = () => {
  const features = [
    {
      title: "Built Solid",
      desc: "Designed for extreme durability with a sturdy layout, built for 20+ years of reliable operation.",
      icon: <Shield className="w-6 h-6 text-red-600" />
    },
    {
      title: "Emergent Market Optimized",
      desc: "Perfect for manufacturers with a monthly output of 2,500 to 3,000 tons, performing under challenging conditions.",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />
    },
    {
      title: "Resilient Engineering",
      desc: "Largely impervious to external influences including power fluctuations and frequent changes of raw material.",
      icon: <Zap className="w-6 h-6 text-red-600" />
    },
    {
      title: "Precision Control",
      desc: "Equipped with a cleverly devised control system to ensure high-quality corrugated board production.",
      icon: <Settings className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-200 ECO Line | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-200 ECO Line – a future-proof product for emergent markets. High-quality corrugation solutions designed for reliability and durability." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Factory className="w-4 h-4" />
              <span className="tracking-wide">HHC-200 SERIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight text-white">
              ECO <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Line</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              A future-proof product for emergent markets
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
                  Invest in <span className="text-red-600">Growth</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Are you looking to invest in a potential market? Or maybe you need a high-quality solution for packaging your own products? The ECO Line from Hsieh Hsu India meets the needs of manufacturers with a monthly output of 2,500 to 3,000 tons and performs even under challenging production conditions.
                </p>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                  <CheckCircle className="w-5 h-5" />
                  Hsieh Hsu India ECO Line
                </h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "The ECO Line – delivering peak reliability even under difficult production conditions."
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600 rounded-3xl -rotate-2 opacity-10 group-hover:-rotate-4 transition-transform duration-500"></div>
                <div className="relative h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-2xl">
                  <Factory className="w-32 h-32 text-slate-300 animate-pulse" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">1,800 mm Width</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built <span className="text-red-600">Solid</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Designed based on our robust high-end technology but optimized for a 1,800 mm width, the ECO Line is engineered to be resilient across all operational variables.
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

      {/* Operations & Service */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full -mr-48 -mb-48 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Global <span className="text-red-500">Service</span> Expertise
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  The HHC-200 ECO Line is largely impervious to external influences including power fluctuations, frequent changes of raw material and inexperienced operating personnel. Everything you need to produce high-quality corrugated board with excellent printability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Support for Your Local Team</h4>
                      <p className="text-slate-400 text-sm">You can count on the service expertise of Hsieh Hsu India – available worldwide for any challenge.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Full Maintenance Solutions</h4>
                      <p className="text-slate-400 text-sm">From comprehensive process know-how to full lifecycle maintenance of your corrugator line.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-red-400">Hsieh Hsu India Advantage</h3>
                <ul className="space-y-4">
                  {[
                    "Designed for 20+ years of operation",
                    "Cleverly devised control systems",
                    "Worldwide service availability",
                    "Excellent printability results",
                    "Robust against power fluctuations",
                    "Local sales teams with right solutions"
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

export default EcoLine;
