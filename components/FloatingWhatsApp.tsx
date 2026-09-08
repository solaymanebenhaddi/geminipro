import { WhatsAppButton } from './Shared';
import { offer } from '@/lib/offer';
export default function FloatingWhatsApp(){return <div className="mobile-cta"><WhatsAppButton>Commander • {offer.price}</WhatsAppButton></div>}
