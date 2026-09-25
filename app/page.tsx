import Header from '../components/Header';

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.54 0 .25 5.29.25 11.79c0 2.08.54 4.1 1.58 5.88L.17 23.84l6.3-1.65a11.77 11.77 0 0 0 5.57 1.4h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.32-8.32ZM12.05 21.6h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.65-.23-.37a9.8 9.8 0 1 1 8.34 4.62Zm5.38-7.35c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1  .98-1 2.39 0 1.41 1.02 2.77 1.16 2.96.14.19 2 3.05 4.84 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}
import {
  Hero,
  About,
  Materials,
  WhyUs,
  OrderForm,
  Gallery,
  Contact,
  Footer,
  CursorFog,
} from '../components/Sections';

export default function Home() {
  return (
    <>
      <Header />
      <CursorFog />
      <main>
        <Hero />
        <About />
        <Materials />
        <WhyUs />
        <OrderForm />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/919454794715?text=Hello%20A.K.%20Gautam%20Traders%2C%20I%20want%20to%20enquire%20about%20building%20materials."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with A.K. Gautam Traders on WhatsApp"
        className="whatsapp-float"
      >
        <WhatsAppIcon size={29} />
      </a>
    </>
  );
}
