import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'A.K. Gautam Traders | Construction Building Materials | Jhansi',description:'A.K. Gautam Traders supplies UltraTech cement, steel, sand, crushed stone, bricks, blocks and construction materials in Jhansi.',keywords:['A.K. Gautam Traders','construction material supplier Jhansi','UltraTech cement Jhansi','steel supplier Jhansi','sand supplier Jhansi','crushed stone Jhansi'],openGraph:{title:'A.K. Gautam Traders',description:'Construction building material supplier in Jhansi.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
