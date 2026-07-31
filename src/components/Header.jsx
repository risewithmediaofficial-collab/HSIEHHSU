import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Factory, ChevronDown, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const HeaderContent = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('corrugators');
  const [mobileMenuTop, setMobileMenuTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    if (isOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const updateMobileMenuTop = () => {
      if (!headerRef.current) return;
      setMobileMenuTop(headerRef.current.getBoundingClientRect().bottom);
    };

    updateMobileMenuTop();
    window.addEventListener('resize', updateMobileMenuTop);
    window.addEventListener('scroll', updateMobileMenuTop);

    return () => {
      window.removeEventListener('resize', updateMobileMenuTop);
      window.removeEventListener('scroll', updateMobileMenuTop);
    };
  }, [location.pathname, isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      path: '/portfolio',
      label: 'Portfolio',
      isMega: true,
      dropdown: [
        {
          id: 'corrugators',
          label: 'Corrugators',
          path: '/portfolio/corrugators',
          content: [
            {
              label: 'Overview',
              path: '/portfolio/corrugators/overview',
              description: 'The most productive path from individual machines to complete corrugator lines and OEE optimization.'
            },
          ]
        },
        {
          id: 'corrugated-lines',
          label: 'Corrugated Lines',
          path: '/portfolio/corrugated-lines',
          content: [
            { label: 'HHC-200', path: '/portfolio/corrugated-lines/hhc-200' },
            { label: 'HHC-250', path: '/portfolio/corrugated-lines/hhc-250' },
            { label: 'HHC-300', path: '/portfolio/corrugated-lines/hhc-300' },
            { label: 'HHC-350', path: '/portfolio/corrugated-lines/hhc-350' },
          ]
        },
        {
          id: 'rolls',
          label: 'Corrugating Rolls',
          path: '/portfolio/rolls',
          content: [
            { label: 'Overview', path: '/portfolio/rolls/overview' },
          ]
        },
      ]
    },
    {
      path: '/Spares and services',
      label: 'Spares and Services',
      dropdown: [
        { path: '/services/roller-refurbish', label: 'Roller Refurbish' },
        { path: '/services/roller-repair', label: 'Roller Repair' },
        { path: '/services/surface-restoration', label: 'Surface Restoration' },
        { path: '/services/maintenance-support', label: 'Maintenance Services' },
        { path: '/services/tungsten-carbide-coating', label: 'Tungsten Carbide Coating' },
        { path: '/services/hard-chrome-plating', label: 'Hard Chrome Plating' },
      ]
    },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    // For service sub-pages - exact match
    if (path.startsWith('/services/')) {
      return location.pathname === path;
    }
    // For portfolio sub-pages - exact match
    if (path.startsWith('/portfolio/')) {
      return location.pathname === path;
    }
    // For main routes
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/services' && location.pathname.startsWith('/services')) return true;
    if (path === '/portfolio' && location.pathname.startsWith('/portfolio')) return true;
    if (path !== '/' && path !== '/services' && path !== '/portfolio' && location.pathname === path) return true;
    return false;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white border-b border-[#d6e4f0]">
      {/* Top Bar - Deep Navy & Gold */}
      <div className="bg-[#1a365d] border-b border-[#2b6caf]/30 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-1.5">
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="tel:+919894235419"
                className="group flex items-center gap-1.5 hover:text-[#2b6caf] transition-colors duration-300"
                title="Director: +91 98942 35419"
              >
                <Phone size={11} className="text-[#2b6caf]" />
                <span className="font-bold text-[10px] uppercase tracking-widest">+91 98942 35419</span>
              </a>
              <a
                href="tel:+918800350183"
                className="group flex items-center gap-1.5 hover:text-[#2b6caf] transition-colors duration-300"
                title="Sales (Mr. Kamal): +91 88003 50183"
              >
                <Phone size={11} className="text-[#2b6caf]" />
                <span className="font-bold text-[10px] uppercase tracking-widest">+91 88003 50183</span>
              </a>
              <a
                href="mailto:hsiehhsu.india@gmail.com "
                className="hidden sm:flex items-center gap-1.5 hover:text-[#2b6caf] transition-colors duration-300"
              >
                <Mail size={11} className="text-[#2b6caf]" />
                <span className="font-bold text-[10px] tracking-widest">hsiehhsu.india@gmail.com </span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Factory size={11} className="text-[#2b6caf]" />
              <span className="font-bold text-[10px] uppercase tracking-widest text-white/80">SIPCOT Industrial Park, Krishnagiri, TN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-2 lg:py-0">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
              <img className='w-10 h-10' src={logo} alt="logo" loading="lazy" decoding="async" />
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-[#1a365d] tracking-tighter leading-none uppercase">
                  HSIEHHSU
                </h1>
                <p className="text-[9px] text-[#1a365d] font-black tracking-[0.2em] uppercase mt-0.5">
                  India Pvt Ltd
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.isMega ? (
                    <>
                      <button
                        className={`flex items-center gap-1.5 px-4 py-3.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-b-2 ${
                          location.pathname.startsWith('/portfolio')
                            ? 'text-[#1a365d] border-[#2b6caf]'
                            : 'text-[#1a365d] border-transparent hover:text-[#2b6caf]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* Mega Dropdown Menu */}
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[90vw] max-w-275 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#d6e4f0] overflow-hidden flex">
                        {/* Sidebar */}
                        <div className="w-1/3 py-2 border-r border-[#d6e4f0]">
                          <div className="space-y-0.5">
                            {item.dropdown.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActivePortfolioTab(category.id)}
                                className={`w-full text-left px-5 py-3 text-sm font-bold transition-all duration-300 flex items-center justify-between ${activePortfolioTab === category.id
                                  ? 'bg-[#f7f9fb] text-[#1a365d] border-l-4 border-[#1a365d]'
                                  : 'text-gray-700 hover:bg-[#f7f9fb] hover:text-[#1a365d] border-l-4 border-transparent hover:border-[#1a365d]'
                                  }`}
                              >
                                {category.label}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activePortfolioTab === category.id ? '-rotate-90' : ''}`} />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="w-2/3 p-6 bg-white">
                          {item.dropdown.map((category) => (
                            <div
                              key={category.id}
                              className={`${activePortfolioTab === category.id ? 'block' : 'hidden'} animate-in fade-in slide-in-from-left-2 duration-300`}
                            >
                              <div className="mb-4">
                                <h3 className="text-xs font-black text-[#1a365d] uppercase tracking-widest px-2">
                                  {category.label}
                                </h3>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {category.content.map((sub, idx) => (
                                  <Link
                                    key={idx}
                                    to={sub.path}
                                    className={`group/item block px-4 py-3 text-sm transition-all duration-300 rounded-xl ${
                                      isActive(sub.path)
                                        ? 'bg-[#2b6caf]/10 border-l-4 border-[#1a365d]'
                                        : 'hover:bg-[#f7f9fb]'
                                    }`}
                                    onClick={scrollToTop}
                                  >
                                    <div className={`font-bold transition-colors ${
                                      isActive(sub.path)
                                        ? 'text-[#1a365d]'
                                        : 'text-[#1a365d] group-hover/item:text-[#2b6caf]'
                                    }`}>
                                      {sub.label}
                                    </div>
                                    {sub.description && (
                                      <p className={`text-xs mt-1 line-clamp-2 leading-relaxed font-normal ${
                                        isActive(sub.path)
                                          ? 'text-[#1a365d]'
                                          : 'text-[#1a365d]/70'
                                      }`}>
                                        {sub.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1.5 px-4 py-3.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-b-2 ${
                          item.label === 'Spares and Services' && location.pathname.startsWith('/services')
                            ? 'text-[#1a365d] border-[#2b6caf]'
                            : isActive(item.path)
                            ? 'text-[#1a365d] border-[#2b6caf]'
                            : 'text-[#1a365d] border-transparent hover:text-[#2b6caf]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-1 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 border border-[#d6e4f0] overflow-hidden">
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.path || idx}
                            to={subItem.path}
                            className={`block px-5 py-3 text-sm font-bold transition-all duration-300 ${isActive(subItem.path)
                              ? 'bg-[#f7f9fb] text-[#1a365d] border-l-4 border-[#1a365d]'
                              : 'text-[#1a365d] hover:bg-[#f7f9fb] hover:text-[#2b6caf] border-l-4 border-transparent hover:border-[#2b6caf]'
                              }`}
                            onClick={scrollToTop}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-b-2 block ${isActive(item.path)
                        ? 'text-[#1a365d] border-[#2b6caf]'
                        : 'text-[#1a365d] border-transparent hover:text-[#2b6caf]'
                        }`}
                      onClick={scrollToTop}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918800350183"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 bg-[#2b6caf] text-white text-[11px] font-black uppercase tracking-wider hover:bg-[#1d5390] transition-all duration-300 flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#1a365d] hover:bg-[#f7f9fb] rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-[#2b6caf]" />
              ) : (
                <Menu size={24} className="text-[#1a365d]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-x-0 lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
            }`}
            style={{
              top: `${mobileMenuTop}px`,
              maxHeight: `calc(100dvh - ${mobileMenuTop}px)`,
            }}
          >
            <div className="h-full border-t border-[#d6e4f0] bg-white shadow-2xl">
              <div className="mx-auto h-full max-w-7xl overflow-y-auto overscroll-contain px-4 pb-6 pt-4 sm:px-6">
                <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.isMega ? (
                    <>
                      <button
                        className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-between ${
                          location.pathname.startsWith('/portfolio')
                            ? 'bg-[#2b6caf]/10 text-[#2b6caf]'
                            : 'text-[#1a365d] hover:bg-[#f7f9fb] hover:text-[#2b6caf]'
                        }`}
                        onClick={() => setPortfolioOpen(!portfolioOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                          portfolioOpen ? 'mt-1 max-h-80 overflow-y-auto opacity-100 pb-2 pr-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((category) => (
                          <div key={category.id} className="space-y-1">
                            <button
                              className="w-full text-left px-4 py-2 text-xs font-bold text-[#2b6caf] uppercase tracking-wider"
                              onClick={() => {
                                if (activePortfolioTab === category.id) setActivePortfolioTab(null);
                                else setActivePortfolioTab(category.id);
                              }}
                            >
                              {category.label}
                            </button>
                            <div className={`space-y-1 ml-2 border-l-2 border-[#d6e4f0] pl-2 transition-all duration-300 ${activePortfolioTab === category.id ? 'block' : 'hidden'}`}>
                              {category.content.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                    isActive(sub.path)
                                      ? 'bg-[#2b6caf]/10 text-[#2b6caf] border-l-4 border-[#2b6caf]'
                                      : 'text-[#1a365d] hover:text-[#2b6caf] hover:bg-[#f7f9fb] border-l-4 border-transparent'
                                  }`}
                                  onClick={() => {
                                    scrollToTop();
                                    setIsOpen(false);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : item.dropdown ? (
                    <>
                      <button
                        className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-between ${
                          item.label === 'Spares and Services' && location.pathname.startsWith('/services')
                            ? 'bg-[#2b6caf]/10 text-[#2b6caf]'
                            : 'text-[#1a365d] hover:bg-[#f7f9fb] hover:text-[#2b6caf]'
                        }`}
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                          servicesOpen ? 'mt-1 max-h-72 overflow-y-auto opacity-100 pr-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.path || idx}
                            to={subItem.path}
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(subItem.path)
                              ? 'bg-[#2b6caf]/10 text-[#2b6caf] border-l-4 border-[#2b6caf]'
                              : 'text-[#1a365d] hover:text-[#2b6caf] hover:bg-[#f7f9fb] border-l-4 border-transparent'
                              }`}
                            onClick={() => {
                              scrollToTop();
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${isActive(item.path)
                        ? 'bg-[#2b6caf]/10 text-[#2b6caf]'
                        : 'text-[#1a365d] hover:bg-[#f7f9fb] hover:text-[#2b6caf]'
                        }`}
                      onClick={() => {
                        scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/918800350183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1a365d] hover:bg-[#122747] text-white px-4 py-4 rounded-none text-xs font-black uppercase tracking-widest mt-6 transition-all duration-500 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>WhatsApp</span>
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Header = () => {
  const location = useLocation();

  return <HeaderContent key={location.pathname} location={location} />;
};

export default Header;
