import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Factory, ChevronDown, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('corrugators');
  const location = useLocation();

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
        { path: '/services#refabrication', label: 'Roller Refabrication' },
        { path: '/services#repair', label: 'Roller Repair' },
        { path: '/services#restoration', label: 'Surface Restoration' },
        { path: '/services#maintenance', label: 'Maintenance Services' },
        { path: '/services#tungsten', label: 'Tungsten Carbide Coating' },
        { path: '/services#chrome', label: 'Hard Chrome Plating' },
      ]
    },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#eee]">
      {/* Top Bar - Minimalist */}
      <div className="bg-[#fafafa] border-b border-[#eee] text-[#4a4a4a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-4 sm:gap-8">
              <a
                href="tel:+919894235419"
                className="group flex items-center gap-1.5 hover:text-[#f44336] transition-colors duration-300"
              >
                <Phone size={11} className="text-[#f44336]" />
                <span className="font-bold text-[10px] uppercase tracking-widest">+91 98942 35419</span>
              </a>
              <a
                href="mailto:hsiehhsu.india@gmail.com"
                className="hidden sm:flex items-center gap-1.5 hover:text-[#f44336] transition-colors duration-300"
              >
                <Mail size={11} className="text-[#f44336]" />
                <span className="font-bold text-[10px] uppercase tracking-widest">hsiehhsu.india@gmail.com</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Factory size={11} className="text-[#f44336]" />
              <span className="font-bold text-[10px] uppercase tracking-widest text-[#7a7a7a]">SIPCOT Industrial Park, Krishnagiri, TN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
              <img className='w-10 h-10' src={logo} alt="logo" />
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-[#1a1a1a] tracking-tighter leading-none uppercase">
                  HSIEHHSU
                </h1>
                <p className="text-[9px] text-[#f44336] font-black tracking-[0.2em] uppercase mt-0.5">
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
                        className={`flex items-center gap-1.5 px-5 py-7 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border-b-2 ${isActive(item.path)
                          ? 'text-[#f44336] border-[#f44336]'
                          : 'text-[#1a1a1a] border-transparent hover:text-[#f44336]'
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* Mega Dropdown Menu */}
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-200 overflow-hidden flex">
                        {/* Sidebar */}
                        <div className="w-1/3 py-2 border-r border-slate-100">
                          <div className="space-y-0.5">
                            {item.dropdown.map((category) => (
                              <button
                                key={category.id}
                                onMouseEnter={() => setActivePortfolioTab(category.id)}
                                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center justify-between ${activePortfolioTab === category.id
                                  ? 'bg-red-50 text-[#f44336] border-l-4 border-[#f44336]'
                                  : 'text-slate-700 hover:bg-red-50 hover:text-[#f44336] border-l-4 border-transparent hover:border-red-300'
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
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
                                  {category.label}
                                </h3>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {category.content.map((sub, idx) => (
                                  <Link
                                    key={idx}
                                    to={sub.path}
                                    className="group/item block px-4 py-3 text-sm transition-all duration-300 hover:bg-red-50 rounded-xl"
                                  >
                                    <div className="font-medium text-slate-700 group-hover/item:text-[#f44336] transition-colors">
                                      {sub.label}
                                    </div>
                                    {sub.description && (
                                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
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
                        className={`flex items-center gap-1.5 px-5 py-7 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border-b-2 ${isActive(item.path)
                          ? 'text-[#f44336] border-[#f44336]'
                          : 'text-[#1a1a1a] border-transparent hover:text-[#f44336]'
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-1 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 border border-slate-200 overflow-hidden">
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.path || idx}
                            to={subItem.path}
                            className={`block px-5 py-3 text-sm font-medium transition-all duration-300 ${isActive(subItem.path)
                              ? 'bg-red-50 text-[#f44336] border-l-4 border-[#f44336]'
                              : 'text-slate-700 hover:bg-red-50 hover:text-[#f44336] border-l-4 border-transparent hover:border-red-300'
                              }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-5 py-7 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border-b-2 block ${isActive(item.path)
                        ? 'text-[#f44336] border-[#f44336]'
                        : 'text-[#1a1a1a] border-transparent hover:text-[#f44336]'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* WhatsApp Button - Brand Red */}
              <a
                href="https://wa.me/919894235419"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 px-5 py-2.5 bg-[#f44336] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#d32f2f] transition-all duration-500 flex items-center gap-2 shadow-sm"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#1a1a1a] hover:bg-[#fafafa] rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-[#f44336]" />
              ) : (
                <Menu size={24} className="text-slate-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="border-t border-slate-200 pt-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.isMega ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-red-50 hover:text-[#f44336] rounded-lg transition-all duration-300 flex items-center justify-between"
                        onClick={() => setPortfolioOpen(!portfolioOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${portfolioOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${portfolioOpen ? 'max-h-[800px] mt-1 opacity-100 pb-2' : 'max-h-0 opacity-0'
                          }`}
                      >
                        {item.dropdown.map((category) => (
                          <div key={category.id} className="space-y-1">
                            <button
                              className="w-full text-left px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider"
                              onClick={() => {
                                if (activePortfolioTab === category.id) setActivePortfolioTab(null);
                                else setActivePortfolioTab(category.id);
                              }}
                            >
                              {category.label}
                            </button>
                            <div className={`space-y-1 ml-2 border-l-2 border-slate-100 pl-2 transition-all duration-300 ${activePortfolioTab === category.id ? 'block' : 'hidden'}`}>
                              {category.content.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  className="block px-4 py-2 text-sm text-slate-700 hover:text-[#f44336] hover:bg-red-50 rounded-lg transition-colors"
                                  onClick={() => setIsOpen(false)}
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
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-red-50 hover:text-[#f44336] rounded-lg transition-all duration-300 flex items-center justify-between"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-60 mt-1 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.path || idx}
                            to={subItem.path}
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(subItem.path)
                              ? 'bg-red-50 text-[#f44336]'
                              : 'text-slate-700 hover:text-[#f44336] hover:bg-red-50'
                              }`}
                            onClick={() => {
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
                        ? 'bg-red-50 text-[#f44336]'
                        : 'text-slate-900 hover:bg-red-50 hover:text-[#f44336]'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/919894235419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#f44336] hover:bg-[#d32f2f] text-white px-4 py-4 rounded-none text-xs font-black uppercase tracking-widest mt-6 transition-all duration-500 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;