import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CorrugatingRolls from './pages/CorrugatingRolls';
import CorrugatorsOverview from './pages/CorrugatorsOverview';
import EcoLine from './pages/EcoLine';
import SteadyLine from './pages/SteadyLine';
import ClassicLine from './pages/ClassicLine';
import SpeedLine from './pages/SpeedLine';
import RollerRefabrication from './pages/RollerRefabrication';
import RollerRepair from './pages/RollerRepair';
import SurfaceRestoration from './pages/SurfaceRestoration';
import MaintenanceServices from './pages/MaintenanceServices';
import TungstenCarbideCoating from './pages/TungstenCarbideCoating';
import HardChromePlating from './pages/HardChromePlating';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/roller-refabrication" element={<RollerRefabrication />} />
          <Route path="/services/roller-repair" element={<RollerRepair />} />
          <Route path="/services/surface-restoration" element={<SurfaceRestoration />} />
          <Route path="/services/maintenance-support" element={<MaintenanceServices />} />
          <Route path="/services/tungsten-carbide-coating" element={<TungstenCarbideCoating />} />
          <Route path="/services/hard-chrome-plating" element={<HardChromePlating />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/corrugators/overview" element={<CorrugatorsOverview />} />
          <Route path="/portfolio/rolls/overview" element={<CorrugatingRolls />} />
          <Route path="/portfolio/corrugated-lines/hhc-200" element={<EcoLine />} />
          <Route path="/portfolio/corrugated-lines/hhc-250" element={<SteadyLine />} />
          <Route path="/portfolio/corrugated-lines/hhc-300" element={<ClassicLine />} />
          <Route path="/portfolio/corrugated-lines/hhc-350" element={<SpeedLine />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;