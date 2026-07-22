import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, Clock, Shield, TrendingUp, Phone } from 'lucide-react';

const RollerRefabrication = () => {
  return (
    <>
      <Helmet>
        <title>Roller Refurbish | Professional Restoration Services</title>
        <meta name="description" content="Complete roller refurbish and restoration services with advanced metallurgical techniques and precision engineering." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <Wrench className="w-4 h-4" />
              <span>Professional Service</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Roller Refurbish
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Complete restoration of corrugation rollers to original specifications using advanced metallurgical techniques and precision engineering
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
                  What is Roller Refurbish?
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Roller refurbish is a comprehensive restoration process that returns worn or damaged corrugation rollers to their original specifications using precision engineering and controlled restoration methods.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Refurbish Process</h3>
                {[
                  "Precision grinding to exact specifications",
                  "Dynamic balancing for smooth operation",
                  "Surface hardening to extend lifespan",
                  "Complete metallurgical analysis and testing",
                  "Quality certification for OEM compliance"
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
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Turnaround Time</h3>
                    <p className="text-[#4a4a4a]">45-60 days for precision completion</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Quality Assurance</h3>
                    <p className="text-[#4a4a4a]">ISO certified process with precision testing</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-xs text-[#7a7a7a] mb-4 uppercase font-black tracking-widest">Included Services</p>
                  <div className="space-y-2">
                    {[
                      "Detailed inspection & analysis",
                      "Precision grinding",
                      "Dynamic balancing",
                      "Final certification"
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                        <span className="text-[#4a4a4a] text-sm">{service}</span>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Key Features & Benefits</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Advanced Technology", desc: "Latest metallurgical techniques for superior results" },
              { title: "Precision Engineering", desc: "Exact specifications matching OEM standards" },
              { title: "Expert Process Control", desc: "Structured restoration workflow for consistent results" },
              { title: "Complete Restoration", desc: "From inspection to final delivery" },
              { title: "Cost Effective", desc: "Extends roller lifespan and saves costs" },
              { title: "Rapid Turnaround", desc: "45-60 days for completion" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-lg border border-[#eee] hover:border-[#f44336] hover:shadow-md transition-all duration-300">
                <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-4">{feature.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase tracking-tighter">
              Ready to Refurbish Your Rollers?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Get a free assessment and detailed quotation for your roller refurbish needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote?service=Roller%20Refurbish"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/918800350183"
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

export default RollerRefabrication;
