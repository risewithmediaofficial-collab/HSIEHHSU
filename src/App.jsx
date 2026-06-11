import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const Contact = lazy(() => import('./pages/Contact'));
const CorrugatingRolls = lazy(() => import('./pages/CorrugatingRolls'));
const CorrugatorsOverview = lazy(() => import('./pages/CorrugatorsOverview'));
const EcoLine = lazy(() => import('./pages/EcoLine'));
const SteadyLine = lazy(() => import('./pages/SteadyLine'));
const ClassicLine = lazy(() => import('./pages/ClassicLine'));
const SpeedLine = lazy(() => import('./pages/SpeedLine'));
const RollerRefabrication = lazy(() => import('./pages/RollerRefabrication'));
const RollerRepair = lazy(() => import('./pages/RollerRepair'));
const SurfaceRestoration = lazy(() => import('./pages/SurfaceRestoration'));
const MaintenanceServices = lazy(() => import('./pages/MaintenanceServices'));
const TungstenCarbideCoating = lazy(() => import('./pages/TungstenCarbideCoating'));
const HardChromePlating = lazy(() => import('./pages/HardChromePlating'));
const InquiryFormPage = lazy(() => import('./pages/InquiryFormPage'));

const RouteLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center px-6">
    <div className="text-center space-y-3">
      <div className="w-10 h-10 mx-auto border-2 border-[#f44336] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-bold uppercase tracking-widest text-[#7a7a7a]">Loading Page</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />  
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-quote" element={<InquiryFormPage type="quote" />} />
            <Route path="/apply" element={<InquiryFormPage type="apply" />} />
            <Route path="/services/roller-refurbish" element={<RollerRefabrication />} />
            <Route path="/services/roller-refabrication" element={<RollerRefabrication />} />
            <Route path="/services/roller-repair" element={<RollerRepair />} />
            <Route path="/services/surface-restoration" element={<SurfaceRestoration />} />
            <Route path="/services/maintenance-support" element={<MaintenanceServices />} />
            <Route path="/services/tungsten-carbide-coating" element={<TungstenCarbideCoating />} />
            <Route path="/services/hard-chrome-plating" element={<HardChromePlating />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/corrugators/overview" element={<CorrugatorsOverview />} />
            <Route path="/portfolio/rolls/overview" element={<CorrugatingRolls />} />
            <Route path="/portfolio/corrugated-lines/hhc-200" element={<EcoLine />} />
            <Route path="/portfolio/corrugated-lines/hhc-250" element={<SteadyLine />} />
            <Route path="/portfolio/corrugated-lines/hhc-300" element={<ClassicLine />} />
            <Route path="/portfolio/corrugated-lines/hhc-350" element={<SpeedLine />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
