import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, Clock, Shield, TrendingUp } from 'lucide-react';

const SurfaceRestoration = () => {
  return (
    <>
      <Helmet>
        <title>Surface Restoration Services | Durability Enhancement</title>
        <meta name="description" content="Specialized surface treatments including chrome plating, ceramic coating, nitriding, and tungsten carbide for enhanced durability." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <Zap className="w-4 h-4" />
              <span>Advanced Treatment</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#00000] uppercase">
              Surface Restoration
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Specialized surface treatments to enhance durability, performance, and extend operational life significantly
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
                  Enhance & Extend Lifespan
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Surface restoration treatments are designed to enhance durability, improve performance, and significantly extend the operational life of your corrugation rollers. We offer multiple surface treatment options tailored to your specific application.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Treatment Options</h3>
                {[
                  "Advanced ceramic coating technology",
                  "Nitriding for surface hardening",
                  "Thermal spray applications",
                  "Custom coating solutions"
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
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Extended Life</h3>
                    <p className="text-[#4a4a4a]">Significantly longer operational lifespan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Enhanced Protection</h3>
                    <p className="text-[#4a4a4a]">Superior durability and protection level</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Performance Boost</h3>
                    <p className="text-[#4a4a4a]">Improved roller performance and reliability</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-xs text-[#7a7a7a] mb-4 uppercase font-black tracking-widest">Treatment Benefits</p>
                  <div className="space-y-2">
                    {[
                      "Increased wear resistance",
                      "Enhanced surface hardness",
                      "Better corrosion protection",
                      "Improved lifespan",
                      "Reduced maintenance costs"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                        <span className="text-[#4a4a4a] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Comparison */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Surface Treatment Options</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: "Chrome Plating",
                benefits: ["Wear resistant", "Corrosion protected", "Proven technology", "Cost effective"]
              },
              { 
                title: "Ceramic Coating",
                benefits: ["High hardness", "Thermal resistant", "Smooth surface", "Eco-friendly"]
              },
              { 
                title: "Tungsten Carbide",
                benefits: ["High durability", "1250+ HRC hardness", "4x longer life", "Premium quality"]
              },
              { 
                title: "Nitriding",
                benefits: ["Surface hardened", "Minimal distortion", "Cost efficient", "Good corrosion resistance"]
              },
              { 
                title: "Thermal Spray",
                benefits: ["Custom thickness", "High bonding", "Precise application", "Flexible solutions"]
              },
              { 
                title: "Custom Solutions",
                benefits: ["Tailored treatment", "Application specific", "Expert consultation", "Optimal performance"]
              }
            ].map((treatment, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-lg border border-[#eee] hover:border-[#f44336] hover:shadow-md transition-all duration-300">
                <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-6">{treatment.title}</h3>
                <div className="space-y-3">
                  {treatment.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f44336]" />
                      <span className="text-[#4a4a4a] text-sm">{benefit}</span>
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
              Choose Your Surface Treatment
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Consult with our experts to determine the best surface restoration option for your application
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Consultation
            </a>
            <a
              href="https://wa.me/918800350183"
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

export default SurfaceRestoration;
