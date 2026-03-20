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
      testId: 'contact-phone',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: [
        { label: 'General', email: 'hsiehhsu.india@gmail.com', testId: 'email-general' },
      ],
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

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-24 bg-white overflow-hidden flex items-center">
        {/* Simple Red Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
               <span className="tracking-wide">Global Lifecycle Partnership</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#f44336] uppercase">
               Get In Touch
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
               Contact our experts for corrugation solutions, machinery inquiries, and technical support. We are here to power your production.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-16 bg-white" data-testid="contact-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">Send a Message</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>

                {submitted ? (
                   <div className="p-16 bg-[#fafafa] border border-[#eee] text-center space-y-6">
                    <div className="w-16 h-16 bg-[#f44336] flex items-center justify-center mx-auto">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Message Sent</h3>
                       <p className="text-[#7a7a7a] text-sm font-medium">Our team will contact you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 text-[#f44336] px-6 py-4 border-l-4 border-[#f44336] text-sm font-bold uppercase tracking-widest">
                        {error}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                          placeholder="EX: JOHN DOE"
                        />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="company">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                          placeholder="EX: COMPANY LTD"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                          placeholder="EMAIL@EXAMPLE.COM"
                        />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="service">Service Required *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium appearance-none"
                      >
                        <option value="">SELECT A SERVICE</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service.toUpperCase()}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-6 py-4 bg-[#fafafa] border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium resize-none"
                        placeholder="TELL US ABOUT YOUR REQUIREMENTS..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto px-12"
                    >
                      <Send size={16} className="mr-3" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">Contact Info</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="notification-card p-8 flex gap-6 group">
                    <div className="w-12 h-12 bg-[#fafafa] border border-[#eee] flex items-center justify-center flex-shrink-0 group-hover:border-[#f44336] transition-colors">
                      <div className="text-[#1a1a1a]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest mb-4 tracking-tight">{info.title}</h3>
                      <div className="space-y-3">
                        {info.details.map((detail, idx) => {
                          if (detail.label && detail.number && detail.name) {
                            return (
                              <div key={idx} className="space-y-1">
                                <p className="text-[10px] font-black text-[#f44336] uppercase tracking-widest leading-none">{detail.label}</p>
                                <p className="text-[#7a7a7a] text-[10px] font-medium leading-none">{detail.name.toUpperCase()}</p>
                                <a href={`tel:${detail.number.replace(/\s/g, '')}`} className="text-[#1a1a1a] text-sm font-black hover:text-[#f44336] transition-colors">
                                  {detail.number}
                                </a>
                              </div>
                            );
                          }
                          if (detail.label && detail.email) {
                            return (
                              <div key={idx} className="space-y-1">
                                <p className="text-[10px] font-black text-[#f44336] uppercase tracking-widest leading-none">{detail.label}</p>
                                <a href={`mailto:${detail.email}`} className="text-[#1a1a1a] text-sm font-black hover:text-[#f44336] transition-colors">
                                  {detail.email.toUpperCase()}
                                </a>
                              </div>
                            );
                          }
                          return (
                            <p key={idx} className="text-[#7a7a7a] text-xs font-medium leading-relaxed uppercase">
                              {detail}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Info and WhatsApp */}
              <div className="space-y-4">
                 <div className="bg-[#1a1a1a] p-10 text-white border border-[#1a1a1a] relative group overflow-hidden">
                    <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#f44336]">Business Info</h3>
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-[10px] text-[#aaa] font-bold uppercase tracking-widest">Company</p>
                          <p className="text-xs font-black uppercase">HSIEHHSU MACHINERY INDIA PRIVATE LIMITED</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] text-[#aaa] font-bold uppercase tracking-widest">GST No</p>
                          <p className="text-xs font-black uppercase">33AAHCH9753M1Z0</p>
                       </div>
                    </div>
                 </div>

                 <a 
                    href="https://wa.me/919894235419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-10 border border-[#eee] hover:border-[#f44336] transition-colors bg-[#fafafa] group"
                 >
                    <div className="space-y-2">
                       <h3 className="text-sm font-black uppercase tracking-widest">WhatsApp Chat</h3>
                       <p className="text-[#7a7a7a] text-[10px] font-medium leading-relaxed uppercase">Immediate Response for Urgent Support</p>
                    </div>
                    <div className="w-12 h-12 bg-white border border-[#eee] flex items-center justify-center group-hover:bg-[#f44336] group-hover:text-white transition-colors">
                       <MessageCircle size={24} />
                    </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="py-16 bg-[#fafafa] border-y border-[#eee]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f44336] uppercase tracking-tighter">
              Global Presence
            </h2>
            <div className="w-20 h-1 bg-[#f44336] mx-auto"></div>
            <p className="text-[#7a7a7a] text-lg max-w-2xl mx-auto font-medium">
               Supporting the global corrugated board industry through strategic manufacturing hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#eee] border border-[#eee]">
            {[
              {
                country: "Taiwan Headquarters",
                name: "HS EH HSU MACHINERY CO., LTD",
                address: "No 141, Lu Chu St., Lu Chu Dist., Taoyuan City, Taiwan",
                tel: "886-3-3221314",
                email: "hsiehhsu@ms16.hinet.net",
                web: "www.hsiehhsu.com.tw"
              },
              {
                country: "Jiangxi, China",
                name: "JIANGXI HSIEH HSU MACHINERY",
                address: "No.23 Gongxin Ave Gongye Area, Yi Fong County, Jiang Xi, China",
                tel: "0795-2990106",
                email: "jxhsiehhsu@163.com",
                web: "www.jxxiexu.cn"
              },
              {
                country: "Vietnam",
                name: "VIETNAM HSIEH HSU MACHINERY",
                address: "No. 18,street 26, Vsip 2A, Vinh Tan ward, Tan Uyen Town, Binh Duong Province-Vietnam",
                tel: "+86 0274 222622",
                email: "Cokhi.hsiehhsu@gmail.com"
              },
              {
                country: "Chongqing, China",
                name: "CHONGQING HSIEH HSU MACHINERY",
                address: "Shuanglong Avenue, RongChang District, Chongqing, China",
                tel: "023-46558399",
                email: "cghsieh@126.com",
                web: "www.cqxiexu.com"
              },
              {
                country: "Dongguan, China",
                name: "DONGGUAN HSIEH HSU MACHINERY",
                address: "No. 186, Lianma Road, Dalingshan, Dongguan City, China",
                tel: "0769-83359868",
                email: "dghsiehhsu@163.com"
              }
            ].map((loc, idx) => (
              <div key={idx} className="bg-white p-12 space-y-8 group hover:bg-[#fafafa] transition-colors">
                <div className="space-y-4">
                   <div className="text-[10px] font-black text-[#f44336] uppercase tracking-widest leading-none">{loc.country}</div>
                   <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">{loc.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-[#aaa] mt-1 flex-shrink-0" />
                    <p className="text-[#7a7a7a] text-[10px] font-medium leading-relaxed uppercase">{loc.address}</p>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-4">
                      <Phone size={14} className="text-[#f44336]" />
                      <span className="text-[#1a1a1a] font-black text-[10px] uppercase tracking-widest">{loc.tel}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={14} className="text-[#f44336]" />
                      <a href={`mailto:${loc.email}`} className="text-[#1a1a1a] font-black text-[10px] uppercase tracking-widest hover:text-[#f44336] transition-colors truncate">{loc.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACTORY LOCATION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-px bg-[#eee] border border-[#eee]">
            <div className="bg-white p-16 lg:p-20 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-4xl font-black text-[#f44336] uppercase tracking-tighter">Find Our Factory</h2>
                  <div className="w-20 h-1 bg-[#f44336]"></div>
                </div>
                
                <p className="text-[#4a4a4a] text-lg font-medium leading-relaxed">
                   Visit our state-of-the-art facility in Krishnagiri, Tamil Nadu. A hub of engineering excellence.
                </p>

                <ul className="space-y-4">
                    {[
                      'Plot No. B-19/2, SIPCOT Industrial Park, Krishnagiri District',
                      '120 km from Bangalore International Airport',
                      '80 km from Hosur Industrial Area',
                      'Well-connected by NH44 highway',
                      '10 km from Krishnagiri city center',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#1a1a1a]">
                        <div className="w-2 h-2 bg-[#f44336] mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs font-black uppercase tracking-widest leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
            </div>

            <div className="bg-[#fafafa] p-12 lg:p-16 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white -mr-16 -mt-16 rotate-45 border border-[#eee]"></div>
                 <div className="text-center space-y-6 relative z-10">
                    <MapPin size={64} className="text-[#eee] group-hover:text-[#f44336] transition-colors duration-700 mx-auto" />
                    <div className="space-y-2">
                       <h3 className="text-sm font-black uppercase tracking-widest text-[#1a1a1a]">Krishnagiri Facility</h3>
                       <p className="text-[10px] text-[#7a7a7a] font-medium uppercase tracking-widest leading-relaxed">Premium Roller Refabrication & restoration</p>
                    </div>
                    <a 
                       href="https://maps.google.com" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-[10px] font-black text-[#f44336] uppercase tracking-widest hover:text-[#1a1a1a] transition-colors"
                    >
                       Get Directions <ArrowRight size={14} />
                    </a>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== URGENT CTA BAR ===== */}
      <section className="py-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
               <h3 className="text-xl font-black text-white uppercase tracking-tighter">Need Urgent Assistance?</h3>
               <p className="text-[#aaa] text-[10px] font-bold uppercase tracking-widest">Our technical support team is available 24/7</p>
            </div>
            <a
              href="tel:+919894235419"
              className="px-12 py-5 bg-[#f44336] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#f44336] transition-colors flex items-center gap-3"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;