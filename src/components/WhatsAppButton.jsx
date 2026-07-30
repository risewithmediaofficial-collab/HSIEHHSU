import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918800350183"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#2b6caf] text-white p-4 rounded-full shadow-2xl z-50 hover:bg-[#1d5390] transition-all duration-300 animate-bounce hover:animate-none group"
    >
      <MessageCircle size={28} />
      <div className="absolute right-16 bottom-0 bg-[#1a365d] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs font-bold">
        Chat with us on WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;