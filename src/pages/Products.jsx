import { Helmet } from 'react-helmet-async';
import { Package, Settings, Cpu, Wrench, Shield, Zap, Mail, Phone, CheckCircle, TrendingUp, ArrowUpRight } from 'lucide-react';

const Products = () => {
    const machinery = [
        {
            title: "Single Facer Units",
            description: "High-speed single facer machines engineered for efficient corrugated board production with precision control",
            features: ["Automatic pressure control", "Energy efficient operation", "Digital interface & monitoring"],
            specs: ["Speed: 200-400 m/min", "Width: 1400-2500 mm", "Flute: A, B, C, E"],
            warranty: "12 months",
        },
        {
            title: "Double Backer Systems",
            description: "Complete double backer lines with advanced temperature control and automatic glue application systems",
            features: ["Pre-heating system", "Automatic glue application", "Modular design"],
            specs: ["Speed: 150-300 m/min", "Heating zones: 8-12", "Control: PLC"],
            warranty: "12 months",
        },
        {
            title: "Complete Corrugation Lines",
            description: "Turnkey solutions providing fully integrated corrugated board production capabilities",
            features: ["Integrated design", "Energy recovery systems", "Remote monitoring & control"],
            specs: ["Capacity: 50-500 TPD", "Automation: High level", "Custom footprint"],
            warranty: "18 months",
        },
        {
            title: "Slitter Scorer Machines",
            description: "Precision slitting and scoring equipment for accurate corrugated sheet processing",
            features: ["Quick change system", "Laser guidance", "Waste removal system"],
            specs: ["Max speed: 250 m/min", "Accuracy: ±0.5 mm", "Sheets/min: 40-80"],
            warranty: "12 months",
        },
    ];

    const spares = [
        {
            category: "Roller Components",
            items: ["Corrugating rolls", "Pressure rolls", "Doctor blades", "Anvil rolls"],
            icon: <Cpu size={28} className="transition-transform duration-300 group-hover:scale-110" />,
            description: "Premium roller assemblies and components",
        },
        {
            category: "Wear Parts",
            items: ["Bearings", "Bushings", "Gears", "Chains"],
            icon: <Wrench size={28} className="transition-transform duration-300 group-hover:scale-110" />,
            description: "High-durability wear-resistant components",
        },
        {
            category: "Electrical Components",
            items: ["Motors", "Controllers", "Sensors", "Heating elements"],
            icon: <Zap size={28} className="transition-transform duration-300 group-hover:scale-110" />,
            description: "Genuine electrical and control systems",
        },
        {
            category: "Consumables",
            items: ["Lubricants", "Adhesives", "Cleaning agents", "Sealants"],
            icon: <Package size={28} className="transition-transform duration-300 group-hover:scale-110" />,
            description: "Industrial-grade consumable supplies",
        },
    ];

    const qualityPoints = [
        {
            icon: <Shield size={28} />,
            title: "Genuine Parts",
            description: "100% original components with complete traceability and certification",
        },
        {
            icon: <Settings size={28} />,
            title: "Perfect Fit",
            description: "Precision manufactured for exact fitment and optimal performance",
        },
        {
            icon: <TrendingUp size={28} />,
            title: "Quick Delivery",
            description: "Express shipping for urgent requirements with tracking",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Products & Spares | Corrugation Machinery & Genuine Parts</title>
                <meta name="description" content="Complete corrugation machinery lines, genuine spare parts, and wear components. Quality equipment for corrugated packaging industry." />
            </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Complete Machinery & Spares Supply</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Premium Machinery & Spares
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Complete corrugation machinery solutions and genuine spare parts for maximum uptime
            </p>
          </div>
        </div>
      </section>

      {/* ===== MACHINERY SECTION ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]" id="machinery">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">
              Advanced Corrugation Machinery Systems
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
            {machinery.map((machine, index) => (
              <div 
                key={index}
                className="bg-white border border-[#eee] hover:border-[#f44336] transition-colors p-10 lg:p-12 group"
              >
                <div className="space-y-8">
                  <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter group-hover:text-[#f44336] transition-colors">
                    {machine.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm font-medium leading-relaxed">{machine.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-[0.2em] opacity-40">Key Features</h4>
                    <div className="grid gap-3">
                      {machine.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                          <span className="text-[#1a1a1a] font-bold text-xs uppercase tracking-widest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-[0.2em] opacity-40">Technical Specs</h4>
                    <div className="flex flex-wrap gap-2">
                       {machine.specs.map((spec, idx) => (
                         <span key={idx} className="px-4 py-2 bg-[#fafafa] border border-[#eee] text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest">
                           {spec}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="pt-8 border-t border-[#eee] flex items-center gap-3">
                    <Shield className="w-4 h-4 text-[#f44336]" />
                    <span className="text-[#aaa] text-[10px] font-black uppercase tracking-widest">{machine.warranty} Warranty</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPARE PARTS SECTION ===== */}
      <section className="py-16 bg-white" id="spares">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter text-center">
              Genuine Spare Parts & Components
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {spares.map((category, index) => (
              <div key={index} className="service-card p-10 flex flex-col items-center text-center">
                 <div className="text-[#f44336] mb-8">{category.icon}</div>
                 <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{category.category}</h3>
                 <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium mb-6">{category.description}</p>
                 <ul className="space-y-2 text-left w-full">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#f44336]"></div>
                        <span className="text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY ASSURANCE SECTION ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">
              Precision Quality Assurance Protocol
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {qualityPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-12 border border-[#eee] text-center group">
                <div className="text-[#f44336] mb-8 mx-auto flex justify-center">{point.icon}</div>
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{point.title}</h3>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INVENTORY & SUPPORT ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Package size={24} />, title: "Large Inventory", desc: "Extensive stock of parts for quick delivery" },
              { icon: <TrendingUp size={24} />, title: "Fast Delivery", desc: "Express shipping for urgent needs across India" },
              { icon: <Phone size={24} />, title: "Expert Support", desc: "Technical guidance on selection and installation" }
            ].map((item, idx) => (
              <div key={idx} className="notification-card p-10 flex flex-col items-center text-center">
                 <div className="text-[#f44336] mb-6">{item.icon}</div>
                 <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{item.title}</h4>
                 <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white border-t border-[#eee]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase tracking-tighter">
              Need Machine Parts or Upgrades?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us for detailed specifications, pricing, availability, and delivery information
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919894235419"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:hsiehhsu.india@gmail.com"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              Email Catalog
            </a>
          </div>
        </div>
      </section>
        </>
    );
};

export default Products;