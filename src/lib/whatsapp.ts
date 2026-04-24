export const WHATSAPP_NUMBER = "5511999999999";

export const buildWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "Olá! Vim pelo site da Casa Tua Prime e gostaria de solicitar um orçamento.",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
