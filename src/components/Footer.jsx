import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowRight, Download, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Our Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Roller Refurbish',
    'Roller Repair & Reconditioning',
    'Surface Restoration',
    'Machine Installation',
    'Preventive Maintenance',
  ];

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      title: 'Address',
      content: 'Plot No. B-19/2, SIPCOT Industrial Park, Krishnagiri – 635206, Tamil Nadu',
      link: null,
      testId: 'contact-address',
    },
    {
      icon: <Phone size={18} />,
      title: 'Phone',
      details: [
        {
          label: 'Director',
          subLabel: 'Mr. Ganesh',
          number: '+91 98942 35419',
          testId: 'phone-director'
        },
        {
          label: 'Sales',
          subLabel: 'Mr. Kamal',
          number: '+91 88003 50183',
          testId: 'phone-sales'
        },
        {
          label: 'Office',
          subLabel: 'HSIEHHSU India',
          number: '+91 86673 63796',
          testId: 'phone-office'
        },
      ],
      link: null,
      testId: 'contact-phone',
    },
    {
      icon: <Mail size={18} />,
      title: 'Email',
      content: 'hsiehhsu.india@gmail.com ',
      link: 'mailto:hsiehhsuindia.admin@gmail.com',
      testId: 'contact-email',
    },
    {
      icon: <Clock size={18} />,
      title: 'Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
      testId: 'contact-hours',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#', testId: 'social-facebook' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', testId: 'social-linkedin' },
    { icon: Instagram, label: 'Instagram', url: '#', testId: 'social-instagram' },
  ];

  const brochureUrl = '/brouchure.pdf';

  return (
    <footer
      className="bg-white border-t border-[#eee] text-[#1a1a1a] relative overflow-hidden"
      role="contentinfo"
      data-testid="footer"
    >
      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
          {/* Top Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 lg:mb-16">

            {/* Company Info */}
            <div className="lg:col-span-2 sm:col-span-2 space-y-6" data-testid="company-info">
              <div className="flex items-center gap-4">
                <Link to="/" className="group hover:opacity-90 transition-opacity">
                  <img src={logo} alt="HSIEHHSU Logo" className="w-12 h-12" />
                </Link>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] tracking-tighter leading-none uppercase" data-testid="company-name">
                    HSIEHHSU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#f44336] font-black tracking-widest uppercase mt-0.5" data-testid="company-subtitle">
                    Machinery India Pvt Ltd
                  </p>
                </div>
              </div>

              <p className="text-[#4a4a4a] leading-relaxed text-sm max-w-md font-medium" data-testid="company-description">
                World-class corrugation solutions, built on 18+ years of industry experience. Specialists in precision roller refurbishing, restoration, and comprehensive maintenance services.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <span className="text-[10px] font-black text-[#7a7a7a] uppercase tracking-[0.2em]">
                  Follow Us
                </span>
                <div className="flex gap-4" data-testid="social-links">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        className="text-[#1a1a1a] hover:text-[#f44336] transition-colors duration-300"
                        title={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Brochure Download Button */}
              <div className="pt-2">
                <a
                  href={brochureUrl}
                  download="HSIEHHSU_Machinery_Brochure.pdf"
                  className="bg-[#f44336] text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#1a1a1a] transition-colors duration-300"
                >
                  <Download size={14} className="inline mr-2" />
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8" data-testid="quick-links">
              <h4 className="text-xs font-black text-[#1a1a1a] uppercase tracking-[0.2em] relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f44336]"></span>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#4a4a4a] hover:text-[#f44336] transition-colors duration-300 text-[11px] font-bold uppercase tracking-widest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-8" data-testid="services">
              <h4 className="text-xs font-black text-[#1a1a1a] uppercase tracking-[0.2em] relative">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f44336]"></span>
              </h4>
              <ul className="space-y-4">
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    className="text-[#4a4a4a] hover:text-[#f44336] transition-colors duration-300 text-[11px] font-bold uppercase tracking-widest cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#eee] my-12"></div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-testid="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="space-y-4" data-testid={info.testId}>
                <div className="flex items-center gap-3 text-[#f44336]">
                  {info.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">{info.title}</span>
                </div>
                
                {info.details ? (
                  <div className="space-y-4">
                    {info.details.map((phone, pIdx) => (
                      <div key={pIdx} data-testid={phone.testId}>
                        <p className="text-[9px] text-[#7a7a7a] font-bold uppercase tracking-widest">{phone.subLabel}</p>
                        <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="text-[#1a1a1a] font-black text-sm hover:text-[#f44336]" data-testid={`${phone.testId}-link`}>{phone.number}</a>
                      </div>
                    ))}
                  </div>
                ) : info.link ? (
                  <a
                    href={info.link}
                    className="text-[#4a4a4a] text-sm font-medium leading-relaxed hover:text-[#f44336]"
                    data-testid={`${info.testId}-link`}
                  >
                    {info.content}
                  </a>
                ) : (
                   <p className="text-[#4a4a4a] text-sm font-medium leading-relaxed" data-testid={`${info.testId}-content`}>{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-[#eee] py-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6" data-testid="footer-bottom">
            <div data-testid="copyright">
              <p className="text-[#7a7a7a] text-[10px] font-bold uppercase tracking-widest">
                © {currentYear} <span className="text-[#f44336]">HSIEHHSU MACHINERY INDIA</span> PRIVATE LIMITED.
              </p>
              <p className="text-[#aaa] text-[9px] uppercase tracking-widest mt-1">
                GST No: 33AAHCH9753M1Z0 | ISO Certified
              </p>
            </div>

            <a
              href="https://wa.me/919894235419"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#f44336] transition-colors duration-300 flex items-center gap-2"
            >
              <MessageCircle size={14} />
              Quick Chat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
