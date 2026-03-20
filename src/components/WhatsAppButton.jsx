import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919894235419"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#f44336] text-white p-4 rounded-full shadow-2xl z-50 hover:bg-[#d32f2f] transition-all duration-300 animate-bounce hover:animate-none group"
    >
      <MessageCircle size={28} />
      <div className="absolute right-16 bottom-0 bg-white text-[#f44336] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;