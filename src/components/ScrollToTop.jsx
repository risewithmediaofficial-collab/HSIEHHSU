import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Handle scroll visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 md:bottom-24 md:right-6 bg-[#f44336] text-white p-3 md:p-4 rounded-full shadow-2xl z-40 hover:bg-[#d32f2f] transition-all duration-300 group"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp size={24} className="md:w-7 md:h-7" />
        <div className="absolute right-14 bottom-0 hidden bg-white text-[#f44336] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap md:block">
          Back to Top
        </div>
      </button>
    )
  );
};

export default ScrollToTop;
