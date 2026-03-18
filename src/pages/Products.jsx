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

            {/* Hero Section - Optimized spacing and modern design */}
            <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-sm">
                            <CheckCircle size={16} className="text-red-400" />
                            <span>Complete Machinery & Spares Supply</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                            Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Spare Parts</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Complete corrugation machinery solutions and genuine spare parts for maximum uptime
                        </p>
                    </div>
                </div>
            </section>

            {/* Machinery Section - Better spacing and card design */}
            <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16 space-y-5">
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <div className="p-3 bg-red-100 rounded-xl">
                                <Settings size={32} className="text-red-600" />
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                            Corrugation Machinery
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                            High-performance machinery engineered for corrugated board production excellence
                        </p>
                    </div>

                    {/* Machinery Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {machinery.map((machine, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl lg:rounded-3xl border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Accent Bar */}
                                <div className="h-1.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>

                                {/* Card Content */}
                                <div className="p-6 lg:p-8 space-y-6">
                                    {/* Title & Description */}
                                    <div className="space-y-3">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                                            {machine.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {machine.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-3">
                                            {machine.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="mt-1.5">
                                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                                    </div>
                                                    <span className="text-slate-700 font-medium leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Specifications */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                                            Technical Specifications
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {machine.specs.map((spec, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="inline-flex items-center bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="bg-slate-50 border-t border-slate-100 px-6 lg:px-8 py-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Shield size={18} className="text-emerald-600" />
                                        <span className="text-slate-700 font-semibold text-sm">
                                            {machine.warranty} warranty
                                        </span>
                                    </div>
                                  
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spare Parts Section - Modern card layout */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16 space-y-5">
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <div className="p-3 bg-red-100 rounded-xl">
                                <Package size={32} className="text-red-600" />
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                            Genuine Spare Parts
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                            Original spare parts and wear components for all major machinery brands
                        </p>
                    </div>

                    {/* Spares Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                        {spares.map((category, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-500 p-6 lg:p-7"
                            >
                                {/* Icon Container */}
                                <div className="bg-red-50 group-hover:bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-red-600 group-hover:text-white transition-all duration-500">
                                    {category.icon}
                                </div>
                                
                                {/* Category Info */}
                                <div className="space-y-3 mb-5">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {category.category}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                                
                                {/* Items List */}
                                <ul className="space-y-2.5">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            <div className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0"></div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Quality Assurance Box */}
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-200">
                        <div className="text-center mb-10 lg:mb-12 space-y-4">
                            <div className="inline-flex items-center justify-center gap-3">
                                <div className="p-3 bg-red-100 rounded-xl">
                                    <Shield size={32} className="text-red-600" />
                                </div>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Quality Assurance
                            </h3>
                            <p className="text-slate-600 text-lg">
                                Our commitment to excellence and reliability
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-8 lg:gap-10">
                            {qualityPoints.map((point, idx) => (
                                <div key={idx} className="group text-center space-y-5">
                                    <div className="bg-gradient-to-br from-red-50 to-red-100/50 group-hover:bg-red-600 border border-red-200 group-hover:border-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-red-600 group-hover:text-white transition-all duration-500">
                                        {point.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-slate-900">
                                            {point.title}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Inventory & Support - Clean three-column layout */}
            <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
                        <div className="group bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 space-y-5">
                            <div className="bg-red-50 group-hover:bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center text-red-600 group-hover:text-white transition-all duration-500">
                                <Package size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                Large Inventory
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Extensive stock of commonly used spare parts for quick delivery
                            </p>
                        </div>

                        <div className="group bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 space-y-5">
                            <div className="bg-red-50 group-hover:bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center text-red-600 group-hover:text-white transition-all duration-500">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                Fast Delivery
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Express shipping for urgent requirements across India
                            </p>
                        </div>

                        <div className="group bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 space-y-5">
                            <div className="bg-red-50 group-hover:bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center text-red-600 group-hover:text-white transition-all duration-500">
                                <Phone size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                Expert Support
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Technical guidance on spare part selection and installation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Modern and clean */}
            <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                Need Machinery or <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Spare Parts?</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                                Contact us for detailed specifications, pricing, availability, and delivery information
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:hsiehhsu.india@gmail.com?subject=Machinery or Spares Inquiry"
                                className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
                            >
                                <Mail size={20} />
                                <span>Request Catalog</span>
                            </a>
                            
                            <a
                                href="tel:+919894235419"
                                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white/30 w-full sm:w-auto"
                            >
                                <Phone size={20} />
                                <span>Call for Quote</span>
                            </a>
                            
                            <a
                                href="https://wa.me/919894235419"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.353 9.879 9.879 0 006.474 13.104 9.865 9.865 0 004.935-1.352 9.879 9.879 0 00-6.474-13.105zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;