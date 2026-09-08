export const offer = {
  price: '9,99 €',
  duration: '18 mois',
  whatsappNumber: '212660900398',
  get whatsappMessage() { return `Bonjour, je souhaite profiter de l'offre Gemini Pro ${this.duration} à ${this.price}. Pouvez-vous m'aider à l'activer ?`; },
};
export const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(offer.whatsappMessage)}`;
