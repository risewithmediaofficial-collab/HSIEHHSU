import { Link } from 'react-router-dom';
import { Factory, Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, ArrowRight, Download, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/spares and services', label: 'Our Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Roller Refabrication',
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
          number: '+91 63699 12595',
          testId: 'phone-office'
        },
      ],
      link: null,
      testId: 'contact-phone',
    },
    {
      icon: <Mail size={18} />,
      title: 'Email',
      content: 'hsiehhsu.india@gmail.com',
      link: 'mailto:hsiehhsu.india@gmail.com',
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

  // Brochure download handler
  const handleBrochureDownload = () => {
    try {
      const brochureUrl = '/brochure/HSIEHHSU_Machinery_Brochure.pdf';
      const link = document.createElement('a');
      link.href = brochureUrl;
      link.download = 'HSIEHHSU_Machinery_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Brochure download failed:', error);
    }
  };

  return (
    <footer
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden"
      role="contentinfo"
      data-testid="footer"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
          {/* Top Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 lg:mb-16">

            {/* Company Info */}
            <div className="lg:col-span-2 sm:col-span-2 space-y-6" data-testid="company-info">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Factory size={24} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight" data-testid="company-name">
                    HSIEHHSU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-red-400 font-semibold tracking-wider uppercase" data-testid="company-subtitle">
                    Machinery India Pvt Ltd
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm max-w-md" data-testid="company-description">
                World-class corrugation solutions, built on 18+ years of industry experience. Specialists in precision roller refabrication, restoration, and comprehensive maintenance services.
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Follow Us
                </span>
                <div className="flex gap-3" data-testid="social-links">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
                        title={social.label}
                        aria-label={social.label}
                        data-testid={social.testId}
                      >
                        <Icon size={18} className="transition-transform duration-300 group-hover:rotate-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Brochure Download Button */}
              <div className="pt-2">
                <button
                  onClick={handleBrochureDownload}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm group"
                  data-testid="brochure-download-btn"
                  aria-label="Download HSIEHHSU machinery brochure"
                >
                  <Download size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5" data-testid="quick-links">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center">
                <span className="w-1 h-5 bg-red-600 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group text-slate-300 hover:text-red-400 transition-all duration-300 flex items-center text-sm"
                      data-testid={`quick-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-5" data-testid="services">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center">
                <span className="w-1 h-5 bg-red-600 rounded-full mr-3"></span>
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    className="group text-slate-300 hover:text-red-400 transition-colors duration-300 flex items-center text-sm cursor-pointer"
                    data-testid={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8 lg:my-12"></div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12" data-testid="contact-info-grid">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="group" data-testid={info.testId}>
                <div className="flex items-start gap-3">
                  <div className="bg-red-600/10 group-hover:bg-red-600 p-2.5 rounded-lg text-red-400 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                      {info.title}
                    </p>

                    {/* Phone Numbers with Details */}
                    {info.details ? (
                      <div className="space-y-3">
                        {info.details.map((phone, phoneIdx) => (
                          <div key={phoneIdx} className="flex flex-col" data-testid={phone.testId}>
                            <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider mb-0.5">
                              {phone.label}
                            </span>
                            <span className="text-slate-500 text-[9px] font-semibold mb-1">
                              {phone.subLabel}
                            </span>
                            <a
                              href={`tel:${phone.number.replace(/\s/g, '')}`}
                              className="text-slate-300 hover:text-red-400 transition-colors duration-300 text-sm leading-relaxed block font-medium"
                              data-testid={`${phone.testId}-link`}
                            >
                              {phone.number}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-300 hover:text-red-400 transition-colors duration-300 text-sm leading-relaxed block"
                        data-testid={`${info.testId}-link`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm leading-relaxed" data-testid={`${info.testId}-content`}>
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8"></div>

          {/* Bottom Section */}
          <div className="grid sm:grid-cols-3 gap-6 items-center" data-testid="footer-bottom">
            {/* Copyright */}
            <div className="sm:col-span-2 space-y-2" data-testid="copyright">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                © {currentYear} <span className="font-bold text-red-500" data-testid="company-name-copyright">HSIEHHSU MACHINERY INDIA</span> PRIVATE LIMITED. All Rights Reserved.
              </p>
              <p className="text-slate-500 text-[10px] sm:text-xs font-medium" data-testid="compliance-info">
                GST No: 33AAHCH9753M1Z0 | ISO Certified
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start sm:justify-end">
              <a
                href="https://wa.me/919894235419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
                data-testid="whatsapp-cta"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>Quick Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;