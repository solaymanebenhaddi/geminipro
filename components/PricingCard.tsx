import { LockKeyhole, Zap, ShieldCheck } from 'lucide-react';
import { Badge, WhatsAppButton } from './Shared';
import { offer } from '@/lib/offer';
export default function PricingCard(){return <div className="pricing-card"><Badge/><h2><span>Gemini</span> Pro</h2><p className="duration">pendant <strong>{offer.duration}</strong></p><div className="price">{offer.price}<span>seulement</span></div><WhatsAppButton>Je profite de l’offre</WhatsAppButton><div className="price-trust"><span><LockKeyhole/>Paiement sécurisé</span><span><Zap/>Activation rapide</span><span><ShieldCheck/>Assistance</span></div></div>}
