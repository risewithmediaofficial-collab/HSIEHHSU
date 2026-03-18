import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, ArrowRight, Building2, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    const now = new Date();
    const dateTime = now.toLocaleString();

    emailjs
      .send(
        'service_mf9fxsi',
        'template_1b1k7rc',
        {
          name: formData.name,
          company: formData.company || 'Not provided',
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          dateTime: dateTime,
        },
        'LzyURwPcit-XdowVP'
      )
      .then(
        (result) => {
          console.log('Email Sent:', result.text);
          setSubmitted(true);
          setError('');
        },
        (error) => {
          console.error('Error:', error.text);
          setError('Failed to send message. Please try again.');
        }
      );

    setTimeout(() => setSubmitted(false), 5000);

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Factory Address',
      details: [
        'Plot No. B-19/2, Olaipatti Village',
        'SIPCOT Industrial Park, Pochampalli',
        'Bargur Industrial Park',
        'Krishnagiri – 635206, Tamil Nadu',
      ],
      color: 'blue',
      testId: 'contact-address',
    },
    {
      icon: <Phone size={24} />,
      title: 'Contact Numbers',
      details: [
        {
          label: 'Director',
          name: 'Mr. Ganesh',
          number: '+91 98942 35419',
          testId: 'phone-director',
        },
        {
          label: 'Sales',
          name: 'Mr. Kamal',
          number: '+91 88003 50183',
          testId: 'phone-sales',
        },
        {
          label: 'Office',
          name: 'HSIEHHSU India',
          number: '+91 63699 12595',
          testId: 'phone-office',
        },
      ],
      color: 'green',
      testId: 'contact-phone',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: [
        { label: 'General', email: 'hsiehhsu.india@gmail.com', testId: 'email-general' },
        // { label: 'Sales', email: 'sales@hsiehhsu.in', testId: 'email-sales' },
        // { label: 'Service', email: 'service@hsiehhsu.in', testId: 'email-service' },
      ],
      color: 'purple',
      testId: 'contact-email',
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday: Emergency Service Only',
        '24/7 Technical Support Available',
      ],
      color: 'amber',
      testId: 'contact-hours',
    },
  ];

  const services = [
    'Roller Refabrication',
    'Roller Repair',
    'Machine Installation',
    'Maintenance Service',
    'Spare Parts',
    'Consultation',
    'Other',
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | HSIEHHSU MACHINERY INDIA</title>
        <meta name="description" content="Contact HSIEHHSU MACHINERY INDIA for corrugation machine roller services, machinery, and spare parts. Get in touch with our experts today." />
      </Helmet>

      {/* Hero Section - Modern gradient design */}
      <section 
        className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
        data-testid="hero-section"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div 
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-sm"
              data-testid="hero-badge"
            >
              <CheckCircle size={16} className="text-red-400" />
              <span>24/7 Expert Support Available</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
              data-testid="hero-title"
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Touch</span>
            </h1>

            <p 
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              data-testid="hero-subtitle"
            >
              Contact our experts for corrugation solutions, machinery inquiries, and technical support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50" data-testid="contact-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div 
                className="bg-white rounded-2xl lg:rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8 lg:p-10"
                data-testid="contact-form-container"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <MessageSquare size={24} className="text-red-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" data-testid="form-title">
                    Send Us a Message
                  </h2>
                </div>

                {submitted ? (
                  <div 
                    className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-2xl p-8 text-center space-y-6"
                    data-testid="success-message"
                  >
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Your message has been sent successfully. Our team will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    {/* Error Message */}
                    {error && (
                      <div 
                        className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg"
                        data-testid="error-message"
                      >
                        {error}
                      </div>
                    )}

                    {/* Name & Company Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-slate-700 font-semibold text-sm" htmlFor="name">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900 placeholder-slate-400"
                          placeholder="Your Name"
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-slate-700 font-semibold text-sm" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900 placeholder-slate-400"
                          placeholder="Your Company"
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-slate-700 font-semibold text-sm" htmlFor="email">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900 placeholder-slate-400"
                          placeholder="your@email.com"
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-slate-700 font-semibold text-sm" htmlFor="phone">
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900 placeholder-slate-400"
                          placeholder="+91 98765 43210"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="block text-slate-700 font-semibold text-sm" htmlFor="service">
                        Service Required <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900"
                        data-testid="select-service"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} data-testid={`service-option-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-slate-700 font-semibold text-sm" htmlFor="message">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-300 bg-white text-slate-900 placeholder-slate-400 resize-none"
                        placeholder="Please describe your requirements in detail..."
                        data-testid="textarea-message"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base sm:text-lg"
                      data-testid="submit-btn"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-6" data-testid="contact-info-section">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact Information</h2>

              {/* Contact Info Cards */}
              <div className="space-y-4" data-testid="contact-cards">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white border-2 border-slate-200 hover:border-red-300 rounded-2xl p-6 hover:shadow-lg transition-all duration-500"
                    data-testid={info.testId}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-red-50 group-hover:bg-red-600 text-red-600 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">{info.title}</h3>
                        <div className="space-y-2">
                          {info.details.map((detail, idx) => {
                            // Handle phone numbers with names
                            if (detail.label && detail.number && detail.name) {
                              return (
                                <div key={idx} data-testid={detail.testId}>
                                  <p className="text-slate-600 text-sm font-medium">{detail.label}</p>
                                  <p className="text-slate-500 text-xs mb-1">{detail.name}</p>
                                  <a
                                    href={`tel:${detail.number.replace(/\s/g, '')}`}
                                    className="text-slate-600 hover:text-red-600 transition-colors duration-300 text-sm font-semibold"
                                    data-testid={`${detail.testId}-link`}
                                  >
                                    {detail.number}
                                  </a>
                                </div>
                              );
                            }
                            // Handle emails with labels
                            if (detail.label && detail.email) {
                              return (
                                <div key={idx} data-testid={detail.testId}>
                                  <p className="text-slate-600 text-sm font-medium">{detail.label}</p>
                                  <a
                                    href={`mailto:${detail.email}`}
                                    className="text-slate-600 hover:text-red-600 transition-colors duration-300 text-sm font-semibold"
                                    data-testid={`${detail.testId}-link`}
                                  >
                                    {detail.email}
                                  </a>
                                </div>
                              );
                            }
                            // Handle plain text details
                            return (
                              <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                                {detail}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Information */}
              <div 
                className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-6 space-y-5"
                data-testid="business-info"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 p-2.5 rounded-lg">
                    <Building2 size={20} className="text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Business Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-red-600 text-sm min-w-fit">Company:</span>
                    <span className="text-slate-700 text-sm" data-testid="company-legal-name">HSIEHHSU MACHINERY INDIA PRIVATE LIMITED</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-red-600 text-sm min-w-fit">GST No:</span>
                    <span className="text-slate-700 font-mono text-sm" data-testid="gst-number">33AAHCH9753M1Z0</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div 
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 space-y-6"
                data-testid="whatsapp-section"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} strokeWidth={2} />
                  <h3 className="font-bold text-xl">Quick WhatsApp Contact</h3>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  For immediate assistance and quick replies, chat with us on WhatsApp
                </p>
                <a
                  href="https://wa.me/919894235419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-testid="whatsapp-link"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Global <span className="text-red-600">Presence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Supporting the global corrugated board industry through our strategic manufacturing hubs and regional centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                country: "Taiwan Headquarters",
                name: "HS EH HSU MACHINERY CO., LTD",
                address: "No 141, Lu Chu St., Lu Chu Dist., Taoyuan City, Taiwan",
                tel: "886-3-3221314",
                fax: "886-3-3226206",
                email: "hsiehhsu@ms16.hinet.net",
                web: "www.hsiehhsu.com.tw"
              },
              {
                country: "Jiangxi, China",
                name: "JIANGXI HSIEH HSU MACHINERY",
                address: "No.23 Gongxin Ave Gongye Area, Yi Fong County, Jiang Xi, China",
                tel: "0795-2990106",
                fax: "0759-2990109",
                email: "jxhsiehhsu@163.com",
                web: "www.jxxiexu.cn"
              },
              {
                country: "Vietnam",
                name: "VIETNAM HSIEH HSU MACHINERY",
                address: "No. 18,street 26, Vsip 2A, Vinh Tan ward, Tan Uyen Town, Binh Duong Province-Vietnam",
                tel: "+86 0274 222622 / +84 0909965070",
                fax: "0759-2990109",
                email: "Cokhi.hsiehhsu@gmail.com"
              },
              {
                country: "Chongqing, China",
                name: "CHONGQING HSIEH HSU MACHINERY",
                address: "Ranglang Town, Shuanglong Avenue on the 22nd, RongChang District, Chongqing, China",
                tel: "023-46558399",
                fax: "023-46558311",
                email: "cghsieh@126.com",
                web: "www.cqxiexu.com"
              },
              {
                country: "Dongguan, China",
                name: "DONGGUAN HSIEH HSU MACHINERY",
                address: "No. 186, Lianma Road, Dalingshan, Dongguan City, Guangdong Province",
                tel: "0769-83359868",
                fax: "0769-83359867",
                email: "dghsiehhsu@163.com"
              }
            ].map((loc, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-red-200 hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">{loc.country}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-4 leading-tight group-hover:text-red-700 transition-colors">{loc.name}</h3>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{loc.address}</p>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-red-500" />
                        <span className="text-slate-700 font-bold text-sm tracking-tight">{loc.tel}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-red-500" />
                        <a href={`mailto:${loc.email}`} className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium truncate">{loc.email}</a>
                      </div>
                      {loc.web && (
                        <div className="flex items-center gap-3">
                          <Building2 size={16} className="text-red-500" />
                          <a href={`http://${loc.web}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium">{loc.web}</a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white" data-testid="map-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight" data-testid="map-title">
              Find Our Factory
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto" data-testid="map-subtitle">
              Visit our state-of-the-art facility in Krishnagiri, Tamil Nadu
            </p>
          </div>

          <div 
            className="bg-white rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden border border-slate-200"
            data-testid="map-container"
          >
            {/* Map Placeholder */}
            <div className="h-80 sm:h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden" data-testid="map-placeholder">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin size={64} className="text-slate-300 mx-auto" />
                  <div className="space-y-2">
                    <p className="text-slate-600 font-semibold text-lg">Interactive Map Integration</p>
                    <p className="text-slate-500 text-sm">
                      Plot No. B-19/2, SIPCOT Industrial Park, Krishnagiri
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <MapPin size={24} className="text-red-600" />
                    <span>How to Reach Us</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Located in SIPCOT Industrial Park, Krishnagiri District',
                      '120 km from Bangalore International Airport',
                      '80 km from Hosur Industrial Area',
                      'Well-connected by NH44 highway',
                      '10 km from Krishnagiri city center',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700" data-testid={`reach-item-${idx}`}>
                        <div className="mt-1.5">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <Phone size={24} className="text-red-600" />
                    <span>For Directions</span>
                  </h3>
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      Need detailed directions or have questions about reaching our factory?
                    </p>
                    <a
                      href="tel:+919894235419"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors duration-300"
                      data-testid="directions-call-link"
                    >
                      <span>Call us for directions</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-red-600 to-red-700" data-testid="quick-contact-bar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Need urgent assistance?</h3>
              <p className="text-red-100">Our 24/7 support team is ready to help</p>
            </div>
            <a
              href="tel:+919894235419"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              data-testid="urgent-call-btn"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;