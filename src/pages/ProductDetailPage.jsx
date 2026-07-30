import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle, Settings } from 'lucide-react';
import { productCatalogMap } from '../data/productCatalog';
import SeoHelmet from '../components/SeoHelmet';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = productCatalogMap[slug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <SeoHelmet
        title={`${product.code} | HSIEHHSU MACHINERY INDIA`}
        description={`${product.code} from HSIEHHSU MACHINERY INDIA. ${product.summary}`}
        path={`/products/${product.slug}`}
        image={product.imageSrc}
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f7f9fb] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-[#2b6caf]/20 text-[#1a365d] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#1a365d] uppercase tracking-widest mb-10">
              <span className="tracking-wide">{product.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#1a365d] uppercase">
              {product.code}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#1a365d]/80 leading-relaxed max-w-3xl mx-auto font-medium">
              {product.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">
                  {product.name}
                </h2>
                <div className="w-20 h-1 bg-[#2b6caf]"></div>
              </div>

              <p className="text-lg text-[#1a365d]/80 leading-relaxed font-medium">{product.summary}</p>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#1a365d] uppercase tracking-tight">{product.detailsHeading}</h3>
                {product.details.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1a365d] flex-shrink-0" />
                    <span className="text-[#1a365d]/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f7f9fb]/50 to-white border border-[#f7f9fb] p-12 rounded-2xl shadow-sm">
              <div className="aspect-[4/3] border border-[#f7f9fb] bg-white flex items-center justify-center p-6 overflow-hidden rounded-xl">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f9fb]/40 border-y border-[#f7f9fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-[#f7f9fb] p-10 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-5 h-5 text-[#1a365d]" />
                <h2 className="text-2xl font-black text-[#1a365d] uppercase tracking-tighter">Features</h2>
              </div>
              <div className="space-y-4">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2b6caf]"></div>
                    <span className="text-[#1a365d] text-sm font-bold uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a365d] text-white p-10 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-5 h-5 text-[#2b6caf]" />
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Technical Spec</h2>
              </div>
              <div className="space-y-4">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2b6caf]"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#f7f9fb]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#f7f9fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tighter">Need {product.code} Details?</h2>
            <div className="w-20 h-1 bg-[#2b6caf] mx-auto"></div>
          </div>

          <p className="text-lg text-[#1a365d]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Request product details, feature clarification, and machine support information for {product.code}.
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

export default ProductDetailPage;
