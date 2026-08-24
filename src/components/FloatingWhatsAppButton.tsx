import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27824571799";
const WHATSAPP_MESSAGE = "Hi Claremont Electrical, I'd like to enquire about your services.";

export function FloatingWhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}
