import '@fontsource-variable/inter';
import type { Metadata } from 'next';
import './globals.css';
import { offer } from '@/lib/offer';
export const metadata: Metadata = {title:`Gemini Pro — ${offer.duration} pour ${offer.price}`,description:`Découvrez notre offre Gemini Pro : ${offer.duration} pour ${offer.price}. Assistance en français et commande via WhatsApp. Service indépendant de Google.`,robots:{index:true,follow:true},openGraph:{title:`Gemini Pro — Passez au niveau supérieur`,description:`${offer.duration} pour ${offer.price}. Découvrez l’offre et contactez notre équipe.`,locale:'fr_FR',type:'website'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body>{children}</body></html>}

