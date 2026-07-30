import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, Clock, Shield, TrendingUp, Phone } from 'lucide-react';
import rollerRefurbishImg from '../assets/roller refurbish.jpg';

const RollerRefabrication = () => {
  return (
    <>
      <Helmet>
        <title>Roller Refurbish | Professional Restoration Services</title>
        <meta name="description" content="Complete roller refurbish and restoration services with advanced metallurgical techniques and precision engineering." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f7f9fb] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#d6e4f0]/40 text-[#2b6caf] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#2b6caf] uppercase tracking-widest mb-10">
              <Wrench className="w-4 h-4" />
              <span>Professional Service</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#1a365d] uppercase">
              Roller Refurbish
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#1a365d]/80 leading-relaxed max-w-3xl mx-auto font-medium">
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
                <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">
                  What is Roller Refurbish?
                </h2>
                <div className="w-20 h-1 bg-[#2b6caf]"></div>
              </div>

              <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium">
                Roller refurbish is a comprehensive restoration process that returns worn or damaged corrugation rollers to their original specifications using precision engineering and controlled restoration methods.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a365d] uppercase tracking-tight">Our Refurbish Process</h3>
                {[
                  "Precision grinding to exact specifications",
                  "Dynamic balancing for smooth operation",
                  "Surface hardening to extend lifespan",
                  "Complete metallurgical analysis and testing",
                  "Quality certification for OEM compliance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2b6caf] flex-shrink-0" />
                    <span className="text-[#1a365d]/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-video bg-[#f7f9fb]/40 border border-[#f7f9fb] overflow-hidden group">
                <img 
                  src={rollerRefurbishImg} 
                  alt="Roller Refurbish Precision Service" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="bg-gradient-to-br from-[#f7f9fb]/50 to-white border border-[#f7f9fb] p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2b6caf] text-white flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#1a365d] text-xs uppercase tracking-widest mb-1">Turnaround</h3>
                      <p className="text-[#1a365d]/80 text-xs">45-60 days</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2b6caf] text-white flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-[#1a365d] text-xs uppercase tracking-widest mb-1">Quality Assurance</h3>
                      <p className="text-[#1a365d]/80 text-xs">ISO Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#f7f9fb]/40 border-y border-[#f7f9fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">Key Features & Benefits</h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
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
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-lg border border-[#f7f9fb] hover:border-[#2b6caf] hover:shadow-md transition-all duration-300">
                <h3 className="font-black text-[#1a365d] text-sm uppercase tracking-widest mb-4">{feature.title}</h3>
                <p className="text-[#1a365d]/80 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a365d] uppercase tracking-tighter">
              Ready to Refurbish Your Rollers?
            </h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#1a365d]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Get a free assessment and detailed quotation for your roller refurbish needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote?service=Roller%20Refurbish"
              className="px-12 py-4 bg-[#2b6caf] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a365d] transition-colors"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/918800350183"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border-2 border-[#1a365d] text-[#1a365d] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a365d] hover:text-white transition-all"
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
