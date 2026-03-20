import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ArrowRight, Shield, Zap, Clock, Users,
  TrendingUp, Hammer, Cog, Award, Briefcase, Headphones,
  Play, MapPin, Phone, Mail, Lightbulb,
  Target, Gauge, Wrench, Star, ArrowUpRight, ChevronRight, Package, Factory, Settings
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import girnarlogo from '../assets/girnar.png';
import horizonlogo from '../assets/horizon.jpg';
import meghdootlogo from '../assets/meghdoot.webp';
import worthlogo from '../assets/worth.png';
import pioneerlogo from '../assets/pioneer.webp';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified manufacturing with zero-tolerance quality standards.",
      stat: "ISO Certified"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "48-72 hour turnaround without compromising precision or durability.",
      stat: "48-72 Hours"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Always Available",
      description: "Round-the-clock monitoring and dedicated technical support team.",
      stat: "24/7 Available"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Engineers",
      description: "Veterans with 20+ years average experience in corrugation industry.",
      stat: "20+ Years Avg"
    },
  ];

  const services = [
    {
      id: "refabrication",
      icon: <Hammer className="w-12 h-12" />,
      title: "Roller Refabrication",
      description: "Precision restoration bringing rollers back to original specifications with advanced metallurgical treatment",
      features: ["Profile Restoration", "Surface Treatment", "Dynamic Balancing", "NDT Testing"],
      link: "/services#refabrication",
    },
    {
      id: "installation",
      icon: <Cog className="w-12 h-12" />,
      title: "Machine Installation",
      description: "Complete commissioning, alignment, and integration of corrugation production lines",
      features: ["Setup & Calibration", "Testing & Validation", "Staff Training", "Documentation"],
      link: "/services#installation",
    },
    {
      id: "maintenance",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Preventive Maintenance",
      description: "Scheduled servicing programs designed to maximize equipment uptime and longevity",
      features: ["Inspection Protocols", "Lubrication Plans", "Performance Tracking", "Spare Parts"],
      link: "/services#maintenance",
    },
    {
      id: "parts",
      icon: <Award className="w-12 h-12" />,
      title: "Spare Parts Supply",
      description: "OEM quality components for all major corrugation machinery manufacturers and brands",
      features: ["OEM Quality", "Fast Logistics", "Inventory Management", "Technical Support"],
      link: "/products",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Production Optimization",
      company: "Premium Packaging Corp",
      industry: "Packaging",
      result: "45% efficiency gain through roller optimization",
      metric: "+45%",
      description: "Comprehensive roller restoration increased production capacity by 45% with zero downtime.",
    },
    {
      id: 2,
      title: "Emergency Response",
      company: "National Corrugators",
      industry: "Industrial",
      result: "24-hour emergency turnaround",
      metric: "24h",
      description: "Critical roller failure resolved in 24 hours, preventing 2-week production halt.",
    },
    {
      id: 3,
      title: "Long-term Partnership",
      company: "Fortune 500 Corrugator",
      industry: "Manufacturing",
      result: "20-year ongoing partnership",
      metric: "20y",
      description: "Trusted for comprehensive maintenance programs and strategic equipment innovations.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      position: "Operations Manager",
      company: "Girnar Packaging",
      feedback: "HSIEHHSU transformed our maintenance approach. Downtime reduced by 60% in the first year alone. Their technical expertise is unmatched.",
      rating: 5,
      initial: "GP"
    },
    {
      id: 2,
      position: "Plant Head",
      company: "Horizon Packs",
      feedback: "Professional, reliable, and genuinely invested in our success. They don't just service equipment—they become partners in our growth.",
      rating: 5,
      initial: "HP"
    },
    {
      id: 3,
      position: "Production Manager",
      company: "Meghdoot Packaging",
      feedback: "The technical expertise is exceptional. They proactively identify issues before they become problems, saving us significant costs annually.",
      rating: 5,
      initial: "MP"
    },
    {
      id: 4,
      position: "Supply Chain Head",
      company: "Worthpheriphril",
      feedback: "Their 24/7 support has been a game-changer. Response times are incredible, and their solutions are always innovative and effective.",
      rating: 5,
      initial: "WP"
    },
    {
      id: 5,
      position: "Technical Director",
      company: "Pioneer Packaging",
      feedback: "Outstanding service quality and quick turnaround times. HSIEHHSU has been instrumental in improving our production efficiency by 45%.",
      rating: 5,
      initial: "PP"
    },
    {
      id: 6,
      position: "Plant Manager",
      company: "Vandana Packaging",
      feedback: "Exceptional technical knowledge combined with customer-first approach. Their maintenance programs have revolutionized our operations.",
      rating: 5,
      initial: "VP"
    },
    {
      id: 7,
      position: "Operations Head",
      company: "Rubykon Packaging",
      feedback: "Reliable, efficient, and always available when we need them. HSIEHHSU's expertise in roller refabrication is truly world-class.",
      rating: 5,
      initial: "RP"
    },
    {
      id: 8,
      position: "Production Supervisor",
      company: "Ravi Packages",
      feedback: "Excellent workmanship and superior after-sales support. We have complete confidence in their technical capabilities.",
      rating: 5,
      initial: "RP"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of equipment condition and performance requirements",
      icon: <Lightbulb className="w-7 h-7" />,
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed customized solution design tailored to your production needs",
      icon: <Target className="w-7 h-7" />,
    },
    {
      number: "03",
      title: "Execution",
      description: "Precision implementation with minimal downtime and maximum efficiency",
      icon: <Gauge className="w-7 h-7" />,
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing monitoring and support to ensure optimal long-term performance",
      icon: <Wrench className="w-7 h-7" />,
    },
  ];

  const advantages = [
    { 
      title: "Technical Excellence", 
      description: "State-of-the-art equipment and methodologies for superior results.", 
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "Cost Efficiency", 
      description: "Optimized processes reducing operational costs significantly.", 
      icon: <TrendingUp className="w-6 h-6" />
    },
    { 
      title: "Time Savings", 
      description: "Rapid turnaround without quality compromise.", 
      icon: <Clock className="w-6 h-6" />
    },
    { 
      title: "Reliability", 
      description: "Proven track record with 99.2% equipment uptime achievement.", 
      icon: <Shield className="w-6 h-6" />
    },
    { 
      title: "Support System", 
      description: "Dedicated team available around the clock for immediate assistance.", 
      icon: <Headphones className="w-6 h-6" />
    },
    { 
      title: "Innovation", 
      description: "Continuous improvement through latest industry technologies.", 
      icon: <Lightbulb className="w-6 h-6" />
    },
  ];

  // Client data with logos
  const clientsData = [
    { name: "Girnar Packaging", location: "Naidupeta", logo: girnarlogo },
    { name: "Horizon Packs", location: "Hosur", logo: horizonlogo },
    { name: "Meghdoot Packaging", location: "Rudrapur", logo: meghdootlogo },
    { name: "Worthpheriphril", location: "Indore", logo: worthlogo },
    { name: "Pioneer Packaging", location: "Kolkata", logo: pioneerlogo, icon: <Factory className="w-6 h-6" /> },
    { name: "Vandana Packaging", location: "Meerut", initials: "VP", icon: <Package className="w-6 h-6" /> },
    { name: "Rubykon Packaging", location: "Faridabad", initials: "RP", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Ravi Packages", location: "Hosur", initials: "RP", icon: <Target className="w-6 h-6" /> },
    { name: "Sri Hari Packaging", location: "Karur", initials: "SH", icon: <Shield className="w-6 h-6" /> },
    { name: "Ramana Carton", location: "Villupuram", initials: "RC", icon: <Settings className="w-6 h-6" /> },
  ];

  return (
    <>
      <Helmet>
        <title>HSIEHHSU MACHINERY INDIA | Premium Corrugation Excellence</title>
        <meta name="description" content="ISO-certified corrugation specialists. Premium roller refabrication, restoration, and maintenance solutions for maximum uptime and performance." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdfdfd] -z-10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div className="space-y-7 lg:space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest">
                <span className="tracking-wide">Industry Trusted Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-[#1a1a1a] tracking-tight uppercase">
                Premium <span className="text-[#f44336]">Corrugation</span> Engineering Excellence
              </h1>
              
              <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-xl font-medium">
                ISO-certified specialists delivering world-class roller refabrication, restoration, and comprehensive maintenance solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="tel:+919894235419"
                  className="btn-primary group"
                >
                  <Phone className="w-4 h-4 mr-2.5" />
                  Call: +91 98942 35419
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2.5" />
                </Link>
              </div>
            </div>

            {/* Hero Visual - Minimalist */}
            <div className="relative hidden lg:block animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative bg-[#f8f8f8] h-[500px] xl:h-[560px] flex items-center justify-center overflow-hidden border border-[#eee]">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#f44336]"></div>
                <div className="text-center relative z-10 p-10">
                  <Play className="w-20 h-20 mx-auto text-[#f44336] mb-8 opacity-20" />
                  <p className="text-[#1a1a1a] font-black text-2xl uppercase tracking-tighter mb-2">High Precision Machinery</p>
                  <p className="text-[#7a7a7a] text-sm uppercase tracking-widest">Facility Insight Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 md:py-16 bg-white border-y border-[#eee] relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Industry Experience", value: "40+" },
              { label: "Uptime Success Rate", value: "99.2%" },
              { label: "Support Availability", value: "24/7" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group border-r last:border-r-0 border-[#eee]">
                <div className="text-4xl md:text-5xl font-black text-[#f44336] mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <p className="text-[#7a7a7a] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS SECTION ===== */}
      <section className="relative py-16 bg-[#fafafa] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tight">
              Trusted by Packaging Industry Leaders
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <style>{`
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .scroll-left {
                  animation: scroll-left 40s linear infinite;
                  width: max-content;
                }
                .scroll-left:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="scroll-left flex gap-12">
                {[...clientsData, ...clientsData].map((client, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 transition-all duration-500 p-8 bg-white border border-[#eee] min-w-[200px] flex flex-col items-center justify-center gap-4 hover:border-[#f44336] hover:shadow-xl hover:shadow-red-500/5 group"
                  >
                        {client.logo ? (
                          <img 
                            src={client.logo} 
                            alt={client.name} 
                            className="h-12 object-contain"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-[#f44336] text-white flex items-center justify-center font-black text-sm">
                              {client.icon || client.initials}
                            </div>
                            <span className="text-[10px] font-black text-[#f44336] tracking-tighter">{client.initials}</span>
                          </div>
                        )}
                        <p className="text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest text-center">{client.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES / WHY CHOOSE ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] mb-6 uppercase tracking-tight">
              Why HSIEHHSU?
            </h2>
            <div className="w-24 h-1 bg-[#f44336] mx-auto mb-8"></div>
            <p className="text-lg text-[#4a4a4a] leading-relaxed font-medium">
              We combine technical precision with unparalleled customer-centric service delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-collapse">
            {features.map((feature, index) => (
              <div key={index} className="fancy-card">
                <div className="fancy-card-icon">
                  {feature.icon}
                </div>
                <h3 className="fancy-card-title">{feature.title}</h3>
                <p className="fancy-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY ADVANTAGES ===== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-20">
             <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tight">
              Our Key Advantages
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white p-10 border border-[#eee] hover:border-[#f44336] transition-colors duration-300">
                <div className="text-[#f44336] mb-6">{adv.icon}</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter">{adv.title}</h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#f44336] uppercase tracking-tight">
              Explore Our Core Specialization Services
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <div className="text-[#f44336] mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-[#4a4a4a] mb-8 leading-relaxed font-medium">{service.description}</p>
                
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[#1a1a1a] font-bold text-sm uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-[#f44336] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className="inline-flex items-center text-[#f44336] font-black uppercase tracking-widest text-xs border-b-2 border-[#f44336] pb-1 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
                  Explore Service <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] mb-6 uppercase tracking-tight">
              Our Precision Methodology
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-[#f44336] font-black text-6xl opacity-10 mb-6 group-hover:opacity-100 transition-opacity duration-700">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-[#1a1a1a] mb-4 uppercase tracking-widest tracking-tight">{step.title}</h3>
                  <p className="text-[#7a7a7a] text-xs font-medium leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tight">
              Real-World Case Studies & Success
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="notification-card h-full">
                <div className="noti-metric">{study.metric}</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter">{study.title}</h3>
                <div className="noti-company">{study.company} • {study.industry}</div>
                <p className="noti-desc font-medium">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tight">
              Client Testimonials & Feedback
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 border border-[#eee] hover:border-[#f44336] transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f44336] text-[#f44336]" />
                  ))}
                </div>

                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-8 font-medium">"{testimonial.feedback}"</p>

                <div className="pt-6 border-t border-[#eee]">
                  <p className="text-[#1a1a1a] font-black text-[10px] uppercase tracking-widest">{testimonial.company}</p>
                  <p className="text-[#7a7a7a] text-[9px] uppercase tracking-widest mt-1">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] mb-8 uppercase tracking-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
              Get expert guidance with a comprehensive technical consultation. Our team analyzes your equipment, production requirements, and delivers customized solutions optimized for maximum efficiency and ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
              <a href="tel:+919894235419" className="btn-primary">
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </a>
              <Link to="/contact" className="btn-secondary">
                Schedule Meeting
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-12 pt-16 border-t border-[#eee]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fafafa] flex items-center justify-center text-[#f44336] mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="font-black text-[#1a1a1a] uppercase tracking-tighter mb-1">Location</p>
                <p className="text-[#7a7a7a] text-xs uppercase tracking-widest">India-based Operations</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fafafa] flex items-center justify-center text-[#f44336] mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="font-black text-[#1a1a1a] uppercase tracking-tighter mb-1">Experience</p>
                <p className="text-[#7a7a7a] text-xs uppercase tracking-widest">40+ Years Expertise</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#fafafa] flex items-center justify-center text-[#f44336] mb-4">
                  <Headphones className="w-6 h-6" />
                </div>
                <p className="font-black text-[#1a1a1a] uppercase tracking-tighter mb-1">Support</p>
                <p className="text-[#7a7a7a] text-xs uppercase tracking-widest">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};

export default Home;