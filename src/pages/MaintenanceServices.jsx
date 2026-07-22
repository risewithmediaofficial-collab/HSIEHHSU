import { Helmet } from 'react-helmet-async';
import { Wrench, CheckCircle, Clock, Shield, Phone, TrendingUp } from 'lucide-react';

const MaintenanceServices = () => {
  return (
    <>
      <Helmet>
        <title>Maintenance & Support Services | 24/7 Technical Support</title>
        <meta name="description" content="Complete maintenance services including preventive maintenance, emergency breakdown support, and 24/7 technical assistance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <Clock className="w-4 h-4" />
              <span>Always Available</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Maintenance & Support
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Comprehensive maintenance programs and 24/7 technical support to maximize uptime and performance
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">
                  Keep Your Equipment Running
                </h2>
                <div className="w-20 h-1 bg-[#f44336]"></div>
              </div>

              <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
                Our comprehensive maintenance and support services ensure your machinery operates at peak efficiency with minimal downtime. From preventive maintenance to emergency response, we're here for you 24/7.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Our Service Offerings</h3>
                {[
                  "24/7 Technical Support & Consultation",
                  "Preventive Maintenance Programs",
                  "Emergency Breakdown Support",
                  "Installation & Commissioning",
                  "Staff Training & Operations Support",
                  "Scheduled Maintenance Plans"
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
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">24/7 Availability</h3>
                    <p className="text-[#4a4a4a]">Round-the-clock support whenever you need us</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Rapid Response</h3>
                    <p className="text-[#4a4a4a]">On-site support for emergency situations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f44336] text-white flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Maximize Uptime</h3>
                    <p className="text-[#4a4a4a]">Minimize downtime and production losses</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-xs text-[#7a7a7a] mb-4 uppercase font-black tracking-widest">Support Services</p>
                  <div className="space-y-2">
                    {[
                      "Technical troubleshooting",
                      "Remote assistance available",
                      "On-site visits scheduled",
                      "Preventive consultations",
                      "Training programs offered"
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

      {/* Support Services Grid */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Complete Support Solutions</h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { 
                title: "Technical Support 24/7",
                icon: <Phone className="w-6 h-6" />,
                desc: "Round-the-clock technical assistance for all queries"
              },
              { 
                title: "Preventive Maintenance",
                icon: <Shield className="w-6 h-6" />,
                desc: "Scheduled programs to prevent breakdowns"
              },
              { 
                title: "Emergency Response",
                icon: <Wrench className="w-6 h-6" />,
                desc: "Rapid on-site support for urgent situations"
              },
              { 
                title: "Installation & Training",
                icon: <TrendingUp className="w-6 h-6" />,
                desc: "Complete setup and staff training services"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 rounded-lg border border-[#eee] hover:border-[#f44336] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#f44336] flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-widest mb-4">{service.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{service.desc}</p>
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
              Need Maintenance Support?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us anytime for maintenance scheduling, technical support, or emergency assistance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Contact Support
            </a>
            <a
              href="https://wa.me/918800350183"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaintenanceServices;
