'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Package,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { services, site } from '../constants/site';

const heroSlides = [
  { src: '/images/hero-cabin.png', alt: 'A.K. Gautam Traders business owner in a professional office', label: 'A.K. GAUTAM CABIN', headline: 'A trusted local source for building materials.' },
  { src: '/images/hero-group.png', alt: 'A.K. Gautam Traders team in the office', label: 'A.K. GAUTAM GROUP', headline: 'Building supply backed by a professional standard.' },
  { src: '/images/hero-gautam.png', alt: 'A.K. Gautam Traders office and business owner', label: 'A.K. GAUTAM', headline: 'Cement, steel, sand and more — sourced for the job.' },
  { src: '/images/hero-office.png', alt: 'A.K. Gautam Traders office and construction material business', label: 'A.K. GAUTAM OFFICE', headline: 'One local supplier for essential construction materials.' },
];

export function CursorFog() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const move = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${event.clientX}px`);
        root.style.setProperty('--my', `${event.clientY}px`);
      });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <div className="cursor-mist" aria-hidden="true">
      <span /><span /><span /><span /><span /><span /><span /><span />
    </div>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy-wrap hero-copy-visible">
          <div className="hero-eyebrow"><Sparkles size={14} /> BUILDING MATERIAL SUPPLIER · JHANSI</div>
          <h1>Build with confidence.<br /><span>Source what lasts.</span></h1>
          <p className="hero-description">
            A.K. Gautam Traders supplies UltraTech cement, steel, sand, crushed stone, bricks and blocks for homes, commercial projects and construction sites in Jhansi.
          </p>
          <div className="hero-actions">
            <a href="#order" className="gold-button large">Order materials <ArrowRight size={17} /></a>
            <a href={`https://wa.me/91${site.phone}?text=${encodeURIComponent('Hello A.K. Gautam Traders, I want to enquire about building materials.')}`} target="_blank" rel="noreferrer" className="hero-outline-button">
              <MessageCircle size={17} /> WhatsApp enquiry
            </a>
          </div>
          <div className="hero-trust">
            <span><ShieldCheck size={16} /> Quality-focused supply</span>
            <span><Truck size={16} /> Jhansi delivery support</span>
            <span><Clock3 size={16} /> Quick enquiry response</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-image-wrap">
              <Image key={slide.src} src={slide.src} alt={slide.alt} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 54vw" className="hero-image" style={{ objectPosition: index === 0 ? "42% center" : "center center" }} />
              <div className="hero-image-shade" />
              <div className="hero-image-label"><span>{slide.label}</span><b>{slide.headline}</b></div>
            </div>
            <div className="hero-frame-corner corner-one" />
            <div className="hero-frame-corner corner-two" />
          </div>
          <div className="hero-slide-meta">
            <div><span>01 / 04</span><strong>{String(index + 1).padStart(2, '0')}</strong></div>
            <div className="hero-progress"><span style={{ width: `${((index + 1) / heroSlides.length) * 100}%` }} /></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span /></div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">ABOUT A.K. GAUTAM TRADERS</p>
          <h2 className="section-title">A local supplier with a professional standard.</h2>
          <p className="section-copy">
            A.K. Gautam Traders is a Jhansi-based construction material supplier serving homeowners, builders, contractors and project teams with a practical range of essential materials and direct enquiry support.
          </p>
          <div className="feature-grid">
            {['UltraTech cement supply', 'Steel, sand & aggregates', 'Bricks and blocks', 'Local Jhansi material support'].map((item) => (
              <div key={item} className="feature-card"><CheckCircle2 className="gold-icon" size={20} /><span>{item}</span></div>
            ))}
          </div>
        </div>
        <div className="about-visual">
          <Image src="/images/hero-group.png" alt="A.K. Gautam Traders team and office" width={1672} height={941} className="about-image" />
          <div className="about-badge"><Building2 size={17} /><span><strong>Construction materials</strong><small>Jhansi · Uttar Pradesh</small></span></div>
        </div>
      </div>
    </section>
  );
}

export function Materials() {
  return (
    <section id="materials" className="section-pad materials-section">
      <div className="container">
        <div className="section-heading-row">
          <div><p className="eyebrow">WHAT WE SUPPLY</p><h2 className="section-title">Core materials for the job.</h2></div>
          <p className="section-copy compact">From the first foundation to the finishing stage, source essential building materials through one local supplier.</p>
        </div>
        <div className="material-grid">
          {services.map((service, index) => (
            <article key={service.title} className="material-card">
              <div className="material-photo">
                <Image src={service.image} alt={`${service.title} supplied by A.K. Gautam Traders in Jhansi`} fill sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw" className="object-cover" />
                <span className="material-number">0{index + 1}</span>
              </div>
              <div className="material-body">
                <div className="material-icon"><Package size={18} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#order">Enquire about this material <ChevronRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    { icon: ShieldCheck, title: 'Quality-focused sourcing', text: 'A practical range of construction essentials with clear material enquiries.' },
    { icon: Truck, title: 'Local project support', text: 'Jhansi-focused service for material requirements and delivery coordination.' },
    { icon: Award, title: 'Professional service', text: 'Straightforward communication for homeowners, contractors and project teams.' },
    { icon: Clock3, title: 'Quick enquiries', text: 'Call or WhatsApp with your requirement and get the conversation moving.' },
  ];

  return (
    <section id="why-us" className="section-pad why-section">
      <div className="container">
        <div className="why-head"><div><p className="eyebrow">WHY A.K. GAUTAM TRADERS</p><h2 className="section-title">Materials are important.<br /><span>Reliable coordination is too.</span></h2></div><p className="section-copy compact">Designed around the practical questions that matter on a real construction site: what is needed, how much is needed, when it is needed and where it should go.</p></div>
        <div className="why-grid">{points.map(({ icon: Icon, title, text }) => <article key={title} className="why-card"><Icon className="gold-icon" size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}

function formatDisplayDate(iso: string) {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  return `${day}-${month}-${year}`;
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function DatePicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const initial = value ? new Date(`${value}T12:00:00`) : new Date();
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.date-picker')) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstDay + 1;
    return day > 0 && day <= daysInMonth ? new Date(year, month, day) : null;
  });
  const selected = value ? new Date(`${value}T12:00:00`) : null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  function isPastDate(date: Date) {
    const candidate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return candidate < today;
  }

  function choose(date: Date) {
    if (isPastDate(date)) return;
    onChange(toIsoDate(date));
    setOpen(false);
  }

  return (
    <div className="date-picker">
      <button type="button" className={`date-trigger ${open ? 'is-open' : ''}`} onClick={() => setOpen((current) => !current)} aria-haspopup="dialog" aria-expanded={open}>
        <span>{value ? formatDisplayDate(value) : 'dd-mm-yyyy'}</span>
        <CalendarDays size={17} />
      </button>
      {open && (
        <div className="calendar-popover" role="dialog" aria-label="Choose delivery date">
          <div className="calendar-head">
            <strong>{viewDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</strong>
            <div className="calendar-nav">
              <button
                type="button"
                onClick={() => {
                  if (!isCurrentMonth) setViewDate(new Date(year, month - 1, 1));
                }}
                disabled={isCurrentMonth}
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </button>
              <button type="button" onClick={() => setViewDate(new Date(year, month + 1, 1))} aria-label="Next month"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="calendar-weekdays">{['SU','MO','TU','WE','TH','FR','SA'].map((day) => <span key={day}>{day}</span>)}</div>
          <div className="calendar-grid">
            {cells.map((date, index) => {
              if (!date) return <span key={`empty-${index}`} className="calendar-empty" />;
              const iso = toIsoDate(date);
              const isSelected = selected?.getFullYear() === date.getFullYear() && selected?.getMonth() === date.getMonth() && selected?.getDate() === date.getDate();
              const isToday = today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate();
              const isPast = isPastDate(date);
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={isPast}
                  aria-disabled={isPast}
                  className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => choose(date)}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="calendar-foot">
            <button type="button" onClick={() => { onChange(''); setOpen(false); }}>Clear</button>
            <button type="button" onClick={() => choose(new Date())}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
}

const materialOptions = ['UltraTech Cement', 'Steel / TMT', 'Sand', 'Crushed Stone / Gitti', 'Bricks', 'Blocks', 'Mixed Construction Materials'];

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ material: 'UltraTech Cement', quantity: '', unit: 'Bags', date: '', name: '', phone: '', address: '', notes: '' });
  const units = useMemo(() => {
    if (form.material === 'UltraTech Cement') return ['Bags', 'Truck Load', 'Other'];
    if (form.material.includes('Steel')) return ['Kg', 'Ton', 'Bundle', 'Truck Load'];
    return ['Cubic Feet', 'Ton', 'Truck Load', 'Other'];
  }, [form.material]);

  useEffect(() => {
    if (!units.includes(form.unit)) setForm((current) => ({ ...current, unit: units[0] }));
  }, [form.unit, units]);

  function update(key: keyof typeof form, value: string) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || !form.date || !form.quantity || !form.name || !form.address) return;
    const message = [
      'Hello A.K. Gautam Traders,', '',
      `Material: ${form.material}`,
      `Quantity: ${form.quantity} ${form.unit}`,
      `Delivery date: ${form.date}`,
      `Customer: ${form.name}`,
      `Phone: ${form.phone}`,
      `Delivery address: ${form.address}`,
      `Notes: ${form.notes || 'N/A'}`,
      '', 'Please share availability and final price.',
    ].join('\n');
    setSubmitted(true);
    window.open(`https://wa.me/91${site.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="order" className="section-pad order-section">
      <div className="container order-grid">
        <div className="order-intro">
          <p className="eyebrow">MATERIAL ORDER / ENQUIRY</p>
          <h2 className="section-title">Tell us what you need. We’ll take it from there.</h2>
          <p className="section-copy">Choose the material, quantity and preferred delivery date. Your enquiry opens directly in WhatsApp so the team can confirm availability, pricing and delivery.</p>
          <div className="order-notes">
            <div className="order-note"><Package className="gold-icon" /><span><b>Material options</b><small>UltraTech cement, steel/TMT, sand, crushed stone, bricks, blocks and mixed requirements.</small></span></div>
            <div className="order-note"><CalendarDays className="gold-icon" /><span><b>Preferred delivery date</b><small>Tell us when the material is needed at the site.</small></span></div>
            <div className="order-note"><MapPinned className="gold-icon" /><span><b>Delivery address</b><small>Add the complete site address for delivery coordination.</small></span></div>
          </div>
        </div>
        <form onSubmit={submit} className="order-card">
          <div className="form-grid">
            <label><span>Material</span><select value={form.material} onChange={(event) => update('material', event.target.value)}>{materialOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>Quantity</span><div className="quantity-row"><input required value={form.quantity} onChange={(event) => update('quantity', event.target.value)} placeholder="e.g. 100" /><select value={form.unit} onChange={(event) => update('unit', event.target.value)}>{units.map((unit) => <option key={unit}>{unit}</option>)}</select></div></label>
            <label><span>Preferred date</span><DatePicker value={form.date} onChange={(value) => update('date', value)} /></label>
            <label><span>Your name</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Full name" /></label>
            <label><span>Mobile number</span><input required inputMode="tel" pattern="[0-9 +()-]{10,}" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="10-digit mobile number" /></label>
            <label><span>Delivery address</span><input required value={form.address} onChange={(event) => update('address', event.target.value)} placeholder="Site / delivery address" /></label>
          </div>
          <label className="notes-field"><span>Additional requirement</span><textarea rows={4} value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Brand preference, unloading details, project notes, etc." /></label>
          <button type="submit" className="gold-button large full-button"><Send size={17} /> Send enquiry on WhatsApp</button>
          {submitted && <p className="success-message">WhatsApp opened with your enquiry. The team can confirm availability and pricing with you.</p>}
        </form>
      </div>
    </section>
  );
}

export function Gallery() {
  const gallery = [
    ['/images/hero-group.png', 'A.K. Gautam Traders group'],
    ['/images/hero-cabin.png', 'A.K. Gautam Traders cabin'],
    ['/images/hero-office.png', 'A.K. Gautam Traders office'],
  ];
  return (
    <section id="gallery" className="section-pad gallery-section">
      <div className="container">
        <div className="section-heading-row"><div><p className="eyebrow">OUR BUSINESS</p><h2 className="section-title">See the place. Meet the people.</h2></div><p className="section-copy compact">A visual look at the A.K. Gautam Traders office, team and professional setup.</p></div>
        <div className="gallery-grid">
          <div className="gallery-column">
            <div className="gallery-item gallery-group"><Image src={gallery[0][0]} alt={gallery[0][1]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
            <div className="gallery-item gallery-cabin"><Image src={gallery[1][0]} alt={gallery[1][1]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
          </div>
          <div className="gallery-item gallery-office"><Image src={gallery[2][0]} alt={gallery[2][1]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">VISIT OR ENQUIRE</p>
          <h2 className="section-title">Let’s plan your material requirement.</h2>
          <p className="section-copy">Call, WhatsApp or visit A.K. Gautam Traders at Suti Mill, near The Ghanaram Royal Garden, Sankar Road, Jhansi.</p>
          <div className="contact-list">
            <a href={`tel:+91${site.phone}`} className="contact-row"><Phone className="gold-icon" /><span><small>Call us</small><b>+91 {site.phone}</b></span></a>
            <a href={`https://wa.me/91${site.phone}`} target="_blank" rel="noreferrer" className="contact-row"><MessageCircle className="gold-icon" /><span><small>WhatsApp</small><b>Chat with A.K. Gautam Traders</b></span></a>
            <a href={`mailto:${site.email}`} className="contact-row"><Mail className="gold-icon" /><span><small>Email</small><b>{site.email}</b></span></a>
            <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="contact-row"><Instagram className="gold-icon" /><span><small>Instagram</small><b>@{site.instagram}</b></span></a>
            <div className="contact-row"><MapPin className="gold-icon" /><span><small>Location</small><b>{site.address}</b></span></div>
          </div>
        </div>
        <div className="map-card"><iframe title="A.K. Gautam Traders location map" src={site.mapEmbed} width="100%" height="560" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><div className="footer-brand"><Image src="/images/logo.png" alt="A.K. Gautam Traders" width={52} height={52} /><div><strong>A.K. GAUTAM TRADERS</strong><span>Building Materials · Jhansi</span></div></div><p>A.K. Gautam Traders supplies UltraTech cement and essential construction materials for homes, commercial projects and construction sites in and around Jhansi.</p></div>
        <div><h3>Quick links</h3><div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#materials">Materials</a><a href="#why-us">Why Us</a><a href="#order">Order Material</a><a href="#contact">Contact</a></div></div>
        <div><h3>Contact</h3><div className="footer-links"><a href={`tel:+91${site.phone}`}>+91 {site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer">@{site.instagram}</a><span>Sankar Road, Jhansi</span></div></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} A.K. Gautam Traders. All rights reserved.</span><span>UltraTech Cement · Steel · Sand · Crushed Stone · Bricks · Blocks</span></div>
    </footer>
  );
}
