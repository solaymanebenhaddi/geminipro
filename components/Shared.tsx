import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { whatsappUrl } from '@/lib/offer';
export function WhatsAppIcon({ className = '' }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z"/><path d="M8.3 7.2c-.7.2-1 1-.8 1.8.6 2.8 2.8 5.1 5.5 6 .8.3 1.9-.1 2.2-.8l.5-1-2.5-1.2-.8 1c-1.4-.6-2.4-1.6-3-2.8l.8-.9-1.1-2.3Z"/></svg>; }
export function WhatsAppButton({children, className = ''}: {children: React.ReactNode; className?: string}) { return <a className={`whatsapp-button ${className}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/><span>{children}</span><ArrowRight className="button-arrow" size={19}/></a>; }
export function Logo() { return <a href="/" className="logo" aria-label="Gemini Pro, accueil"><span className="gemini-star">✦</span><span><strong><span>Gemini</span> Pro</strong><small>L’IA POUR ALLER PLUS LOIN</small></span></a>; }
export function Badge() { return <div className="offer-badge"><Sparkles size={16}/> OFFRE LIMITÉE</div>; }
export function Reassurance() { return <div className="reassurance">{['Activation rapide','Paiement sécurisé','Support dédié'].map(t=><span key={t}><CheckCircle2/>{t}</span>)}</div>; }
export function SectionTitle({title,subtitle}: {title:string;subtitle?:string}) { return <div className="section-title"><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>; }
