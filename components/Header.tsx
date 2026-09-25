'use client';
import { Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../constants/site';

export default function Header(){
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(false);
  const links=[['Home','#home'],['About','#about'],['Materials','#materials'],['Order Material','#order'],['Gallery','#gallery'],['Contact','#contact']];

  useEffect(()=>{
    const saved=localStorage.getItem('ak-theme');
    const isDark=saved==='dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark',isDark);
  },[]);

  function toggleTheme(){
    const next=!dark;
    setDark(next);
    document.documentElement.classList.toggle('dark',next);
    localStorage.setItem('ak-theme',next?'dark':'light');
  }

  return <header className="site-header fixed top-0 z-50 w-full">
    <div className="container flex h-[76px] items-center justify-between">
      <a href="#home" className="brand flex items-center gap-3">
        <span className="brand-mark grid h-11 w-11 place-items-center rounded-xl font-black">AK</span>
        <span><b className="block text-sm tracking-[.12em]">A.K. GAUTAM</b><small className="muted text-[10px] tracking-[.25em]">TRADERS</small></span>
      </a>
      <nav className="hidden items-center gap-6 lg:flex">{links.map(([l,h])=><a key={l} href={h} className="nav-link text-sm">{l}</a>)}</nav>
      <div className="hidden items-center gap-2 md:flex">
        <button onClick={toggleTheme} aria-label="Toggle theme" className="icon-button"><span>{dark?<Sun size={17}/>:<Moon size={17}/>}</span></button>
        <a href={`tel:+91${site.phone}`} className="icon-button" aria-label="Call A.K. Gautam Traders"><Phone size={17}/></a>
        <a href={`https://wa.me/91${site.phone}?text=${encodeURIComponent('Hello A.K. Gautam Traders, I would like to enquire about building materials.')}`} target="_blank" rel="noreferrer" className="whatsapp-button"><MessageCircle size={16}/> WhatsApp</a>
        <a href="#contact" className="gold-button">Contact</a>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <button onClick={toggleTheme} aria-label="Toggle theme" className="icon-button">{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
        <button aria-label="Open menu" onClick={()=>setOpen(!open)} className="icon-button">{open?<X/>:<Menu/>}</button>
      </div>
    </div>
    {open&&<nav className="mobile-nav container border-t py-3 lg:hidden">{links.map(([l,h])=><a onClick={()=>setOpen(false)} key={l} href={h} className="mobile-link block py-3">{l}</a>)}<a href={`https://wa.me/91${site.phone}`} target="_blank" rel="noreferrer" className="whatsapp-button mt-2 inline-flex">WhatsApp Enquiry</a></nav>}
  </header>
}
