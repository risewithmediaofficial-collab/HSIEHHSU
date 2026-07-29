import { Link } from 'react-router-dom';
import { Package, Settings, Cpu, Wrench, Shield, Zap, Phone, TrendingUp, ArrowUpRight } from 'lucide-react';
import {
  Memory,
  Build,
  Handyman,
  Bolt,
  VerifiedUser,
  PrecisionManufacturing,
  LocalShipping
} from '@mui/icons-material';
import { productCatalog } from '../data/productCatalog';
import SeoHelmet from '../components/SeoHelmet';
import sparePartsImg from '../assets/spare parts.jpeg';
import rollerRefurbishImg from '../assets/roller refurbish.jpg';
import rollerRepairImg from '../assets/roller repair.webp';
import digitalIntelligenceImg from '../assets/digital intellligence.jpg';

const Products = () => {
  const spares = [
    {
      category: 'Roller Components',
      items: ['Corrugating rolls', 'Pressure rolls', 'Doctor blades', 'Anvil rolls'],
      icon: <Memory className="w-7 h-7 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      description: 'Premium roller assemblies and components',
      image: sparePartsImg,
    },
    {
      category: 'Wear Parts & Refurbish',
      items: ['Bearings', 'Bushings', 'Gears', 'Chains'],
      icon: <Build className="w-7 h-7 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      description: 'High-durability components & roller refurbish',
      image: rollerRefurbishImg,
    },
    {
      category: 'Roller Repair Services',
      items: ['Journal repair', 'Surface restoration', 'Crack repair', 'Balancing'],
      icon: <Handyman className="w-7 h-7 text-[#E11D48]" />,
      badgeBg: "bg-[#FFE4E6] border-[#FECDD3]",
      description: 'Comprehensive roller repair and restoration',
      image: rollerRepairImg,
    },
    {
      category: 'Electrical & Control',
      items: ['Motors', 'Controllers', 'Sensors', 'Heating elements'],
      icon: <Bolt className="w-7 h-7 text-[#9333EA]" />,
      badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]",
      description: 'Digital intelligence & electrical controls',
      image: digitalIntelligenceImg,
    },
  ];

  const qualityPoints = [
    {
      icon: <VerifiedUser className="w-7 h-7 text-[#059669]" />,
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      title: 'Genuine Parts',
      description: '100% original components with complete traceability and certification',
    },
    {
      icon: <PrecisionManufacturing className="w-7 h-7 text-[#0284C7]" />,
      badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]",
      title: 'Perfect Fit',
      description: 'Precision manufactured for exact fitment and optimal performance',
    },
    {
      icon: <LocalShipping className="w-7 h-7 text-[#D97706]" />,
      badgeBg: "bg-[#FEF3C7] border-[#FDE68A]",
      title: 'Quick Delivery',
      description: 'Express shipping for urgent requirements with tracking',
    },
  ];

  return (
    <>
      <SeoHelmet
        title="Products & Spares | Corrugation Machinery & Genuine Parts"
        description="Single product pages for corrugation machinery, unit details, and genuine spare parts support from HSIEHHSU MACHINERY INDIA."
        path="/products"
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E1DEE6] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#FFD601]/20 text-[#022B3A] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#022B3A] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Machine Details & Spares Supply</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#022B3A] uppercase">
              Product Catalog
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#022B3A]/80 leading-relaxed max-w-3xl mx-auto font-medium">
              Single product pages for machinery, glue units, double backers, rotary shear systems, and slitter scorer details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E1DEE6]/40 border-y border-[#E1DEE6]" id="machinery">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Single Product Pages
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
            {productCatalog.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="bg-white border border-[#E1DEE6] hover:border-[#022B3A] transition-colors p-10 lg:p-12 group block rounded-2xl shadow-sm"
              >
                <div className="space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022B3A]">{product.category}</p>
                    <h3 className="text-2xl font-black text-[#022B3A] uppercase tracking-tighter group-hover:text-[#022B3A] transition-colors">
                      {product.code}
                    </h3>
                  </div>

                  <div className="aspect-[16/10] bg-[#E1DEE6]/40 border border-[#E1DEE6] overflow-hidden rounded-xl">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-[#022B3A]/80 text-sm font-medium leading-relaxed">{product.summary}</p>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-[#022B3A] uppercase tracking-[0.2em] opacity-40">Key Features</h4>
                    <div className="grid gap-3">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#FFD601]"></div>
                          <span className="text-[#022B3A] font-bold text-xs uppercase tracking-widest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#E1DEE6] flex items-center justify-between gap-3">
                    <span className="text-[#022B3A]/60 text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                    <span className="inline-flex items-center gap-2 text-[#022B3A] text-[10px] font-black uppercase tracking-widest group-hover:text-[#FFD601]">
                      View Product <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="spares">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter text-center">
              Genuine Spare Parts & Components
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {spares.map((category) => (
              <div key={category.category} className="service-card p-6 flex flex-col items-center text-center bg-white border border-[#E1DEE6] hover:border-[#FFD601] transition-all rounded-xl group overflow-hidden shadow-sm">
                {category.image && (
                  <div className="w-full h-40 mb-6 overflow-hidden rounded-lg border border-[#E1DEE6]">
                    <img 
                      src={category.image} 
                      alt={category.category} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl ${category.badgeBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-3">{category.category}</h3>
                <p className="text-[#022B3A]/70 text-xs leading-relaxed font-medium mb-6">{category.description}</p>
                <ul className="space-y-2 text-left w-full mt-auto">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#FFD601]"></div>
                      <span className="text-[#022B3A] font-bold text-[10px] uppercase tracking-widest">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E1DEE6]/40 border-y border-[#E1DEE6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] uppercase tracking-tighter">
              Precision Quality Assurance Protocol
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {qualityPoints.map((point) => (
              <div key={point.title} className="bg-white p-10 border border-[#E1DEE6] hover:border-[#FFD601] transition-all rounded-xl text-center group shadow-sm flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl ${point.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {point.icon}
                </div>
                <h3 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-3 tracking-tight">{point.title}</h3>
                <p className="text-[#022B3A]/70 text-xs leading-relaxed font-medium">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Memory className="w-7 h-7 text-[#0284C7]" />, badgeBg: "bg-[#E0F2FE] border-[#BAE6FD]", title: 'Large Inventory', desc: 'Extensive stock of parts for quick delivery' },
              { icon: <LocalShipping className="w-7 h-7 text-[#059669]" />, badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]", title: 'Fast Delivery', desc: 'Express shipping for urgent needs across India' },
              { icon: <Memory className="w-7 h-7 text-[#9333EA]" />, badgeBg: "bg-[#F3E8FF] border-[#E9D5FF]", title: 'Expert Support', desc: 'Technical guidance on selection and installation' },
            ].map((item) => (
              <div key={item.title} className="notification-card p-8 bg-white border border-[#E1DEE6] hover:border-[#FFD601] transition-all rounded-xl shadow-sm flex flex-col items-center text-center group">
                <div className={`w-14 h-14 rounded-xl ${item.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-black text-[#022B3A] uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-[#022B3A]/70 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#E1DEE6]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#022B3A] uppercase tracking-tighter">
              Need Machine Parts or Upgrades?
            </h2>
            <div className="w-20 h-1 bg-[#FFD601] mx-auto"></div>
          </div>

          <p className="text-lg md:text-xl text-[#022B3A]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us for detailed specifications, pricing, availability, and delivery information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold shadow-md"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
