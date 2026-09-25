import Header from '../components/Header';
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
        WA
      </a>
    </>
  );
}
