import { Link } from 'react-router-dom';
import { Package, Settings, Cpu, Wrench, Shield, Zap, Phone, TrendingUp, ArrowUpRight } from 'lucide-react';
import { productCatalog } from '../data/productCatalog';
import SeoHelmet from '../components/SeoHelmet';

const Products = () => {
  const spares = [
    {
      category: 'Roller Components',
      items: ['Corrugating rolls', 'Pressure rolls', 'Doctor blades', 'Anvil rolls'],
      icon: <Cpu size={28} className="transition-transform duration-300 group-hover:scale-110" />,
      description: 'Premium roller assemblies and components',
    },
    {
      category: 'Wear Parts',
      items: ['Bearings', 'Bushings', 'Gears', 'Chains'],
      icon: <Wrench size={28} className="transition-transform duration-300 group-hover:scale-110" />,
      description: 'High-durability wear-resistant components',
    },
    {
      category: 'Electrical Components',
      items: ['Motors', 'Controllers', 'Sensors', 'Heating elements'],
      icon: <Zap size={28} className="transition-transform duration-300 group-hover:scale-110" />,
      description: 'Genuine electrical and control systems',
    },
    {
      category: 'Consumables',
      items: ['Lubricants', 'Adhesives', 'Cleaning agents', 'Sealants'],
      icon: <Package size={28} className="transition-transform duration-300 group-hover:scale-110" />,
      description: 'Industrial-grade consumable supplies',
    },
  ];

  const qualityPoints = [
    {
      icon: <Shield size={28} />,
      title: 'Genuine Parts',
      description: '100% original components with complete traceability and certification',
    },
    {
      icon: <Settings size={28} />,
      title: 'Perfect Fit',
      description: 'Precision manufactured for exact fitment and optimal performance',
    },
    {
      icon: <TrendingUp size={28} />,
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">Machine Details & Spares Supply</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              Product Catalog
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              Single product pages for machinery, glue units, double backers, rotary shear systems, and slitter scorer details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafafa] border-y border-[#eee]" id="machinery">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">
              Single Product Pages
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
            {productCatalog.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="bg-white border border-[#eee] hover:border-[#f44336] transition-colors p-10 lg:p-12 group block"
              >
                <div className="space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f44336]">{product.category}</p>
                    <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter group-hover:text-[#f44336] transition-colors">
                      {product.code}
                    </h3>
                  </div>

                  <div className="aspect-[16/10] bg-[#fafafa] border border-[#eee] overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-[#4a4a4a] text-sm font-medium leading-relaxed">{product.summary}</p>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-[0.2em] opacity-40">Key Features</h4>
                    <div className="grid gap-3">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#f44336]"></div>
                          <span className="text-[#1a1a1a] font-bold text-xs uppercase tracking-widest">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#eee] flex items-center justify-between gap-3">
                    <span className="text-[#aaa] text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                    <span className="inline-flex items-center gap-2 text-[#f44336] text-[10px] font-black uppercase tracking-widest">
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
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter text-center">
              Genuine Spare Parts & Components
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {spares.map((category) => (
              <div key={category.category} className="service-card p-10 flex flex-col items-center text-center">
                <div className="text-[#f44336] mb-8">{category.icon}</div>
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{category.category}</h3>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium mb-6">{category.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
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

      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase tracking-tighter">
              Precision Quality Assurance Protocol
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {qualityPoints.map((point) => (
              <div key={point.title} className="bg-white p-12 border border-[#eee] text-center group">
                <div className="text-[#f44336] mb-8 mx-auto flex justify-center">{point.icon}</div>
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{point.title}</h3>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Package size={24} />, title: 'Large Inventory', desc: 'Extensive stock of parts for quick delivery' },
              { icon: <TrendingUp size={24} />, title: 'Fast Delivery', desc: 'Express shipping for urgent needs across India' },
              { icon: <Phone size={24} />, title: 'Expert Support', desc: 'Technical guidance on selection and installation' },
            ].map((item) => (
              <div key={item.title} className="notification-card p-10 flex flex-col items-center text-center">
                <div className="text-[#f44336] mb-6">{item.icon}</div>
                <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-[#7a7a7a] text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#eee]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase tracking-tighter">
              Need Machine Parts or Upgrades?
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
          </div>

          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-medium">
            Contact us for detailed specifications, pricing, availability, and delivery information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quote?service=Spare%20Parts"
              className="px-12 py-4 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] transition-colors"
            >
              Get Quote
            </Link>
            <Link
              to="/apply?service=Machine%20Details"
              className="px-12 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
