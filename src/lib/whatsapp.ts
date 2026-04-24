export const WHATSAPP_NUMBER = "5511945008989";

export const buildWhatsAppLink = (message?: string) => {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
