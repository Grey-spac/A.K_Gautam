'use client';

import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../constants/site';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Materials', '#materials'],
  ['Why Us', '#why-us'],
  ['Order', '#order'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ak-theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('ak-theme', next ? 'dark' : 'light');
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="A.K. Gautam Traders home">
          <Image src="/images/logo.png" alt="A.K. Gautam Traders logo" width={58} height={58} priority className="brand-logo" />
          <span className="brand-copy">
            <strong>A.K. GAUTAM</strong>
            <small>TRADERS · JHANSI</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="icon-button">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href={`tel:+91${site.phone}`} className="icon-button call-icon" aria-label="Call A.K. Gautam Traders">
            <Phone size={17} />
          </a>
          <a href={`https://wa.me/91${site.phone}?text=${encodeURIComponent('Hello A.K. Gautam Traders, I would like to enquire about building materials.')}`} target="_blank" rel="noreferrer" className="whatsapp-button">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="#contact" className="gold-button">Contact</a>
        </div>

        <div className="mobile-actions">
          <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="icon-button">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)} className="icon-button">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="mobile-nav-actions">
            <a href={`tel:+91${site.phone}`} className="gold-button"><Phone size={16} /> Call us</a>
            <a href={`https://wa.me/91${site.phone}`} target="_blank" rel="noreferrer" className="whatsapp-button"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}
