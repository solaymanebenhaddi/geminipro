import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import OfferSection from '@/components/OfferSection';
import Benefits from '@/components/Benefits';
import UseCases from '@/components/UseCases';
import HowItWorks from '@/components/HowItWorks';
import WhatsAppSupport from '@/components/WhatsAppSupport';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
export default function Home(){return <div className="site-frame"><a className="skip-link" href="#main">Aller au contenu</a><Header/><main id="main"><Hero/><TrustStrip/><OfferSection/><Benefits/><UseCases/><HowItWorks/><WhatsAppSupport/><FAQ/><FinalCTA/></main><Footer/><FloatingWhatsApp/></div>}
