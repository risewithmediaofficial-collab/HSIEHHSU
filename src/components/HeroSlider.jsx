import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="absolute bottom-8">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      title: "Precision Roller Refurbish",
      description: "World-class corrugation machine roller restoration with global expertise",
      bgColor: "from-blue-800 to-blue-600",
    },
    {
      title: "Extend Roller Life & Performance",
      description: "Advanced refurbishment techniques to maximize your equipment efficiency",
      bgColor: "from-gray-900 to-blue-900",
    },
    {
      title: "Complete Corrugation Solutions",
      description: "Machines, spares, and service support for uninterrupted production",
      bgColor: "from-indigo-900 to-blue-700",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className={`relative bg-gradient-to-r ${slide.bgColor} text-white py-20 px-8 md:px-16 rounded-xl`}>
              <div className="container mx-auto">
                <div 
                  className="max-w-3xl"
                  data-aos="fade-right"
                  data-aos-delay={index * 200}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl mb-8 text-blue-100">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="/contact"
                      className="btn-secondary !text-blue-700 border-none"
                    >
                      Get Free Consultation
                    </a>
                    <a 
                      href="/services"
                      className="btn-outline"
                    >
                      View Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </button>
);

export default HeroSlider;
