import { Helmet } from 'react-helmet-async';
import { Settings, CheckCircle, Zap, Shield, TrendingUp, Factory, Layout, Wrench } from 'lucide-react';

const ClassicLine = () => {
  const features = [
    {
      title: "Market Flexibility",
      desc: "Optimal local market coverage with solutions ranging from microflutes to specialized custom orders.",
      icon: <Layout className="w-6 h-6 text-red-600" />
    },
    {
      title: "Intuitive Technology",
      desc: "Features cutting-edge, easy-to-use control systems for simple operation and reduced training time.",
      icon: <Zap className="w-6 h-6 text-red-600" />
    },
    {
      title: "High Production Yield",
      desc: "Designed for intensive industrial use with a robust production output of up to 40,000 m²/hour.",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />
    },
    {
      title: "Service Friendly",
      desc: "Engineered for high availability with a layout that is very easy to service and maintain.",
      icon: <Wrench className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>HHC-300 CLASSIC Line | Hsieh Hsu India Corrugated Lines</title>
        <meta name="description" content="The HHC-300 CLASSIC Line from Hsieh Hsu India – The versatile allrounder for local markets. Flexible, reliable, and high-yield corrugated board production." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Settings className="w-4 h-4" />
              <span className="tracking-wide">HHC-300 SERIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight tracking-tight text-white">
              CLASSIC <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Line</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Flexible and versatile for local market leadership
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
                  The Versatile <span className="text-red-600">Allrounder</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Optimal local market coverage with a wide variety of packaging solutions including everything from microflutes to small orders – the CLASSIC Line from Hsieh Hsu India stands for reliable corrugator lines with cutting-edge, intuitive technology. CLASSIC gives you the flexibility you need to meet any customer’s requirements.
                </p>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-red-400">
                  <CheckCircle className="w-5 h-5" />
                  Hsieh Hsu India CLASSIC Line
                </h3>
                <p className="text-slate-300 leading-relaxed italic">
                  "Established excellence in the production of standard and specialized corrugated board."
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-600 rounded-3xl -rotate-2 opacity-10 group-hover:-rotate-4 transition-transform duration-500"></div>
                <div className="relative h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 overflow-hidden shadow-2xl">
                  <Factory className="w-32 h-32 text-slate-300 animate-pulse" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">Multi-Flute Capability</span>
                  </div>
                  <div className="absolute bottom-6 right-6 text-right">
                    <span className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg block mb-2">40,000 m²/hour</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Production Yield</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variation & Proven Tech */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Proven <span className="text-red-600">Technology</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The wide variability of the CLASSIC Line allows for a previously unimaginable variety of applications, supported by optional assistance systems for peak performance.
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

      {/* Reliability Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Reliable <span className="text-red-500">Performance</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Another advantage of the CLASSIC Line is that it is very easy to service. This ensures that your system maintains high availability, so your customers can count on you for reliable delivery performance time and again.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">High Availability</h4>
                      <p className="text-slate-400 text-xs">Maximum uptime</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">Flexibility</h4>
                      <p className="text-slate-400 text-xs">Wide range of products</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Key Specifications</h3>
                <ul className="space-y-4">
                  {[
                    "Production Yield: up to 40,000 m²/hour",
                    "Intuitive User Control Technology",
                    "Modular Assistance Systems Available",
                    "Easy Maintenance Design",
                    "Microflute to Standard Board Range",
                    "High Service Life & Durability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
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

export default ClassicLine;
