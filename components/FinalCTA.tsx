import { Badge, Reassurance, WhatsAppButton } from './Shared';
import { offer } from '@/lib/offer';
export default function FinalCTA(){return <section className="final-cta"><div className="final-orbit"/><div className="planet"/><Badge/><h2>{offer.duration} de <span>Gemini Pro</span> pour seulement {offer.price}</h2><p>Ne passez pas à côté de cette opportunité.</p><WhatsAppButton>Commander maintenant sur WhatsApp</WhatsAppButton><Reassurance/><span className="handwritten">Votre<br/>avenir boosté<br/>par l’IA !<b>⤶</b></span></section>}
