import Header from '../components/Header';
import {Hero,About,Materials,OrderForm,Gallery,Contact,Footer,CursorFog} from '../components/Sections';
export default function Home(){return <><Header/><CursorFog/><main><Hero/><About/><Materials/><OrderForm/><Gallery/><Contact/></main><Footer/><a href={`https://wa.me/919454794715?text=${encodeURIComponent('Hello A.K. Gautam Traders, I want to enquire about building materials.')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="whatsapp-float"><span>WA</span></a></>}
