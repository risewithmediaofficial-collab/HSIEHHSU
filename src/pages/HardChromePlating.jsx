import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, Clock, TrendingUp, Award } from 'lucide-react';

const HardChromePlating = () => {
  return (
    <>
      <Helmet>
        <title>Hard Chrome Plating | Industrial-Grade Surface Treatment</title>
        <meta name="description" content="Industrial-grade hard chrome plating with superior hardness, corrosion resistance, and dimensional precision for optimal roller performance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <Shield className="w-4 h-4" />
              <span>Proven Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Hard Chrome Plating
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Industrial-grade chrome plating service delivering superior hardness, corrosion resistance, and dimensional precision
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
                  Proven & Reliable
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Hard chrome plating is the industry standard for roller protection. Our industrial-grade plating process delivers superior hardness, exceptional corrosion resistance, and precise dimensional control. Perfect for demanding corrugation applications.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Plating Benefits</h3>
                {[
                  "Superior hardness and wear resistance",
                  "Excellent corrosion protection",
                  "Precise dimensional control",
                  "Proven technology and reliability",
                  "Cost-effective solution",
                  "Fast turnaround delivery"
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
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Industry Standard</h3>
                    <p className="text-[#4a4a4a]">Most widely used and trusted solution</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Corrosion Protection</h3>
                    <p className="text-[#4a4a4a]">Superior resistance to harsh conditions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Performance Assured</h3>
                    <p className="text-[#4a4a4a]">Reliable performance for demanding operations</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-xs text-[#7a7a7a] mb-4 uppercase font-black tracking-widest">Plating Specifications</p>
                  <div className="space-y-2">
                    {[
                      "Hardness: 48-62 HRC",
                      "Thickness: Customizable",
                      "Surface finish: Mirror quality",
                      "Corrosion resistant",
                      "Dimensionally precise"
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

      {/* Key Features */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Why Choose Hard Chrome?</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: "Proven Technology",
                desc: "Industry standard with decades of proven performance"
              },
              { 
                title: "Hardness",
                desc: "Superior surface hardness (48-62 HRC) for wear resistance"
              },
              { 
                title: "Corrosion Resistant",
                desc: "Excellent protection against industrial environments"
              },
              { 
                title: "Cost Effective",
                desc: "Excellent value for performance and longevity"
              },
              { 
                title: "Quick Turnaround",
                desc: "Fast processing and delivery times"
              },
              { 
                title: "Quality Assured",
                desc: "ISO certified process with rigorous testing"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-lg border border-[#eee] hover:border-[#f44336] hover:shadow-md transition-all duration-300">
                <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-4">{feature.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Chrome vs Alternatives</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Hard Chrome Plating",
                points: [
                  "Industry standard technology",
                  "Proven performance record",
                  "Cost-effective solution",
                  "Good wear resistance",
                  "Easy application & repair",
                  "12-month warranty"
                ]
              },
              {
                title: "Why Chrome Remains First Choice",
                points: [
                  "Reliable and trusted solution",
                  "Fast turnaround available",
                  "Suitable for all corrugator types",
                  "Excellent corrosion protection",
                  "Precise dimensional control",
                  "Professional quality assurance"
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#fafafa] to-white border border-[#eee] p-8 lg:p-12 rounded-lg">
                <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-8">{item.title}</h3>
                <div className="space-y-4">
                  {item.points.map((point, pidx) => (
                    <div key={pidx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f44336] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4a4a4a] font-medium">{point}</span>
                    </div>
                  ))}
                </div>
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
              Trust the Industry Standard
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Choose proven hard chrome plating for reliability and performance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Chrome Plating
            </a>
            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HardChromePlating;
