import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, Shield, TrendingUp, Award } from 'lucide-react';

const TungstenCarbideCoating = () => {
  return (
    <>
      <Helmet>
        <title>Tungsten Carbide Coating | Ultra-Durable Surface Treatment</title>
        <meta name="description" content="Ultra-hard tungsten carbide coating with 1250+ HRC hardness, 4x longer lifespan than chrome, superior wear resistance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <Award className="w-4 h-4" />
              <span>Premium Coating</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Tungsten Carbide Coating
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Ultra-hard tungsten carbide coating delivers 1250+ Vickers hardness (72 HRC) with superior wear resistance and 4x longer lifespan
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
                  Unmatched Durability
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Tungsten carbide coating provides the ultimate solution for extreme durability and superior wear resistance in demanding industrial environments. With micro hardness exceeding 1250 Vickers, it forms a high longwearing, tenacity protective surface.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Superior Performance</h3>
                {[
                  "1250+ Vickers hardness (72 HRC)",
                  "4+ times longer lifespan than chrome",
                  "Highest precision and dimensional accuracy",
                  "No speed limitations",
                  "Adaptable to all corrugator types",
                  "No grinding needed after installation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0" />
                    <span className="text-[#4a4a4a] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fafafa] to-white border border-[#eee] p-12 rounded-lg">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Premium Quality</h3>
                    <p className="text-[#4a4a4a]">Highest grade tungsten carbide application</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Extended Life</h3>
                    <p className="text-[#4a4a4a]">4x longer than hard chrome plating</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Performance Boost</h3>
                    <p className="text-[#4a4a4a]">Reduced maintenance and replacement costs</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-xs text-[#7a7a7a] mb-4 uppercase font-black tracking-widest">Key Specifications</p>
                  <div className="space-y-2">
                    {[
                      "Hardness: 1250+ Vickers (72 HRC)",
                      "Uniform coating thickness",
                      "Excellent wear resistance",
                      "Long-wearing surface",
                      "Tenacity protective layer"
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                        <span className="text-[#4a4a4a] text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Advantages */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Complete Advantages</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              "Highest precision and dimensional accuracy for superior corrugation quality",
              "No limitation of running speed with enhanced operational efficiency",
              "Adaptable design fits all types of single facer corrugator machines",
              "No need to grind two sides after installation - reduces setup time",
              "4+ times longer lifespan compared to hard chrome corrugating rolls",
              "UVV or V profile design increases F.C.T, reduces glue consumption",
              "Lighter medium paper can be used, reducing material costs",
              "Maintains same flute height with excellent printability and stability",
              "Siphon system and rotary steam joint prevents deformation",
              "Resistant to accidental machine stops with full speed re-start capability",
              "No paper wastage even during emergency shutdowns",
              "Increased lifespan reduces maintenance intervals and bearing replacement costs"
            ].map((advantage, idx) => (
              <div key={idx} className="flex gap-4 p-6 lg:p-8 bg-white border border-[#eee] rounded-lg hover:border-[#f44336] hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-[#f44336]" />
                </div>
                <p className="text-[#1a1a1a] text-sm font-medium leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Investment & ROI</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Investment",
                value: "Premium Grade",
                desc: "Higher upfront cost for superior quality and longevity"
              },
              {
                title: "Lifespan",
                value: "4x Longer",
                desc: "Significantly extended operational life vs. chrome"
              },
              {
                title: "Cost Per Hour",
                value: "Lowest",
                desc: "Superior long-term ROI and cost efficiency"
              }
            ].map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#f44336] to-[#ff5252] text-white p-8 lg:p-10 rounded-lg text-center">
                <p className="text-xs font-black uppercase tracking-widest mb-4 opacity-90">{metric.title}</p>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 tracking-tighter">{metric.value}</h3>
                <p className="text-base opacity-90">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f44336] uppercase tracking-tighter">
              Choose Ultimate Performance
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Upgrade your rollers with premium tungsten carbide coating today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Quote
            </a>
            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TungstenCarbideCoating;
