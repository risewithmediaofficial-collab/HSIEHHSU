import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import SeoHelmet from '../components/SeoHelmet';

const FORM_CONFIG = {
  quote: {
    pageTitle: 'Get Quote',
    heroTag: 'Fast Quote Support',
    title: 'Request a Quote',
    description: 'Share your roller, spare, or machine requirement and our team will send a detailed quotation.',
    submitLabel: 'Send Quote Request',
  },
  apply: {
    pageTitle: 'Apply Now',
    heroTag: 'Application Support',
    title: 'Apply Now',
    description: 'Send your requirement or application details and our team will get back to you shortly.',
    submitLabel: 'Send Application',
  },
};

const serviceOptions = [
  'Roller Refurbishing',
  'Roller Repair',
  'Surface Restoration',
  'Tungsten Carbide Coating',
  'Hard Chrome Plating',
  'Machine Installation',
  'Preventive Maintenance',
  'HHC Corrugated Line',
  'Spare Parts',
  'Other',
];

const InquiryFormPage = ({ type = 'quote' }) => {
  const location = useLocation();
  const config = FORM_CONFIG[type] || FORM_CONFIG.quote;
  const params = new URLSearchParams(location.search);
  const selectedService = params.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: selectedService,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    const dateTime = new Date().toLocaleString();

    emailjs
      .send(
        'service_mf9fxsi',
        'template_1b1k7rc',
        {
          name: formData.name,
          company: formData.company || 'Not provided',
          email: formData.email || 'Not provided',
          phone: formData.phone,
          service: `${type.toUpperCase()} - ${formData.service}`,
          message: formData.message,
          dateTime,
        },
        'LzyURwPcit-XdowVP'
      )
      .then(
        () => {
          setSubmitted(true);
          setError('');
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            service: selectedService,
            message: '',
          });
        },
        () => {
          setError('Failed to send message. Please try again.');
        }
      );

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SeoHelmet
        title={`${config.pageTitle} | HSIEHHSU MACHINERY INDIA`}
        description={`${config.pageTitle} with HSIEHHSU MACHINERY INDIA for corrugation machinery, roller services, and spare parts support.`}
        path={type === 'apply' ? '/apply' : '/get-quote'}
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 bg-white overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 bg-red-50 text-[#f44336] px-5 py-2 rounded-none text-xs font-bold border-l-4 border-[#f44336] uppercase tracking-widest mb-10">
              <span className="tracking-wide">{config.heroTag}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-[#000000] uppercase">
              {config.title}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-medium">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-[#fafafa] border border-[#eee] p-8 lg:p-12">
            {submitted ? (
              <div className="p-12 bg-white border border-[#eee] text-center space-y-6">
                <div className="w-16 h-16 bg-[#f44336] flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Request Sent</h2>
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
                    <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                      placeholder="EX: JOHN DOE"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                      placeholder="EX: COMPANY LTD"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                      placeholder="EMAIL@EXAMPLE.COM"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="service">
                    Requirement *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium appearance-none"
                  >
                    <option value="">SELECT A REQUIREMENT</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest" htmlFor="message">
                    Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-white border border-[#eee] focus:border-[#f44336] outline-none transition-colors text-sm font-medium resize-none"
                    placeholder="TELL US ABOUT YOUR REQUIREMENT..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto px-12">
                  <Send size={16} className="mr-3" />
                  {config.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryFormPage;
