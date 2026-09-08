import { Zap, Headphones, ShieldCheck, UsersRound } from 'lucide-react';
const items = [[Zap,'Activation rapide','Votre accès en quelques étapes'],[Headphones,'Assistance dédiée','Une équipe à votre écoute'],[ShieldCheck,'Processus sécurisé','Vos informations sont protégées'],[UsersRound,'Support après activation','Nous restons à vos côtés']] as const;
export default function TrustStrip(){return <section className="trust-strip" aria-label="Nos engagements">{items.map(([Icon,title,text])=><div key={title}><Icon/><span><strong>{title}</strong><small>{text}</small></span></div>)}</section>}
