'use client';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Instagram, Truck, ShieldCheck, Clock3, Send, Package, CalendarDays, MapPinned, Sparkles, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { services, site } from '../constants/site';

const heroSlides = [
  {src:'/images/cabin.png', alt:'A.K. Gautam Traders owner in the office', kicker:'A.K. GAUTAM TRADERS'},
  {src:'/images/group.png', alt:'A.K. Gautam Traders family business team', kicker:'A.K. GAUTAM TRADERS · FAMILY BUSINESS'},
  {src:'/images/office.png', alt:'A.K. Gautam Traders storefront and construction materials', kicker:'JHANSI · BUILDING MATERIAL SUPPLIER'},
];

export function CursorFog(){
  useEffect(()=>{
    const root=document.documentElement;
    let raf=0;
    const move=(e:MouseEvent)=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        root.style.setProperty('--mx',`${e.clientX}px`);
        root.style.setProperty('--my',`${e.clientY}px`);
      });
    };
    window.addEventListener('mousemove',move,{passive:true});
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',move)};
  },[]);
  return <div className="cursor-fog" aria-hidden="true"/>;
}

export function Hero(){
  const [index,setIndex]=useState(0);
  const [textVisible,setTextVisible]=useState(false);
  useEffect(()=>{
    const reveal=window.setTimeout(()=>setTextVisible(true),5000);
    const start=window.setTimeout(()=>setIndex(1),5000);
    const interval=window.setInterval(()=>setIndex(v=>(v+1)%heroSlides.length),8000);
    return()=>{window.clearTimeout(reveal);window.clearTimeout(start);window.clearInterval(interval)};
  },[]);
  return <section id="home" className="hero relative min-h-screen overflow-hidden pt-20">
    <div className="hero-slides" aria-hidden="true">
      {heroSlides.map((slide,i)=><div key={slide.src} className={`hero-slide ${i===index?'is-active':''}`}><Image src={slide.src} alt="" fill priority={i===0} sizes="100vw" className="object-cover"/></div>)}
    </div>
    <div className={`hero-vignette ${textVisible?'hero-vignette-visible':''}`}/>
    <div className={`container hero-content relative flex min-h-[calc(100vh-80px)] items-end pb-16 pt-28 transition-all duration-1000 ${textVisible?'hero-content-visible':'hero-content-hidden'}`}>
      <div className="max-w-3xl">
        <div className="hero-kicker"><Sparkles size={14}/> {heroSlides[index].kicker}</div>
        <h1 className="hero-title">Build with confidence.<br/><span>Source what lasts.</span></h1>
        <p className="hero-copy">A.K. Gautam Traders supplies UltraTech cement and essential building materials across Jhansi — from cement and steel to sand, crushed stone, bricks and blocks.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#order" className="gold-button large">Order materials <ArrowRight size={17}/></a>
          <a href={`https://wa.me/91${site.phone}?text=${encodeURIComponent('Hello A.K. Gautam Traders, I want to enquire about building materials.')}`} target="_blank" rel="noreferrer" className="hero-outline-button"><span>WhatsApp enquiry</span></a>
        </div>
        <div className="mt-7 flex flex-wrap gap-5 text-sm hero-trust"><span><ShieldCheck size={16}/> Quality-focused supply</span><span><Truck size={16}/> Local Jhansi delivery</span><span><Clock3 size={16}/> Quick enquiry response</span></div>
      </div>
    </div>
    <div className="hero-dots" aria-label="Hero slides">{heroSlides.map((_,i)=><button key={i} onClick={()=>setIndex(i)} aria-label={`Show slide ${i+1}`} className={i===index?'active':''}/>)}</div>
  </section>
}

export function About(){return <section id="about" className="section-pad"><div className="container grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">ABOUT A.K. GAUTAM TRADERS</p><h2 className="section-title">A local supplier with a professional standard.</h2><p className="section-copy">A.K. Gautam Traders is a Jhansi-based construction material supplier serving homeowners, builders, contractors and project teams with a practical range of materials and direct enquiry support.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{['UltraTech cement supply','Steel, sand & aggregates','Bricks and blocks','Local Jhansi material support'].map(x=><div key={x} className="feature-card flex gap-3"><CheckCircle2 className="mt-0.5 gold-icon" size={20}/><span>{x}</span></div>)}</div></div><div className="image-card"><Image src="/images/group.png" alt="A.K. Gautam Traders family business team" width={1672} height={941} className="w-full object-cover"/><div className="image-caption"><b>A.K. Gautam Traders</b><span>Family-led construction material supply in Jhansi</span></div></div></div></section>}

export function Materials(){return <section id="materials" className="materials-section section-pad"><div className="container"><div className="max-w-2xl"><p className="eyebrow">WHAT WE SUPPLY</p><h2 className="section-title">Core materials for the job.</h2><p className="section-copy">From the first foundation to the finishing stage, source essential building materials through one local supplier.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><article key={s.title} className="material-card"><div className="material-photo"><Image src={s.image} alt={`${s.title} supplied by A.K. Gautam Traders`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover"/><div className="material-photo-overlay"/><span className="material-number">0{i+1}</span></div><div className="p-6"><div className="material-icon"><Package size={19}/></div><h3 className="mt-5 text-xl font-bold">{s.title}</h3><p className="mt-2 text-sm leading-6 muted">{s.text}</p><a href="#order" className="material-link mt-5 inline-flex items-center gap-1 text-sm font-bold">Order this material <ChevronRight size={16}/></a></div></article>)}</div></div></section>}

const materialOptions=['UltraTech Cement','Steel / TMT','Sand','Crushed Stone / Gitti','Bricks','Blocks','Mixed Construction Materials'];

export function OrderForm(){
  const [submitted,setSubmitted]=useState(false);
  const [form,setForm]=useState({material:'UltraTech Cement',quantity:'',unit:'Bags',date:'',name:'',phone:'',address:'',notes:''});
  const units=useMemo(()=>form.material==='UltraTech Cement'?['Bags','Truck Load','Other']:form.material.includes('Steel')?['Kg','Ton','Bundle','Truck Load']:['Cubic Feet','Ton','Truck Load','Other'],[form.material]);
  useEffect(()=>{if(form.material==='UltraTech Cement' && form.unit==='Bags') return; setForm(f=>({...f,unit:units[0]}))},[units,form.material]);
  function update(key:string,value:string){setForm(f=>({...f,[key]:value}))}
  function submit(e:FormEvent){e.preventDefault();const message=`Hello A.K. Gautam Traders,%0A%0AI want to order/enquire about:%0A• Material: ${form.material}%0A• Quantity: ${form.quantity} ${form.unit}%0A• Delivery date: ${form.date}%0A• Customer: ${form.name}%0A• Phone: ${form.phone}%0A• Delivery address: ${form.address}%0A• Notes: ${form.notes||'N/A'}%0A%0APlease share availability and final price.`;setSubmitted(true);window.open(`https://wa.me/91${site.phone}?text=${message}`,'_blank','noopener,noreferrer')}
  return <section id="order" className="section-pad order-section"><div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><p className="eyebrow">MATERIAL ORDER / ENQUIRY</p><h2 className="section-title">Tell us what you need. We’ll take it from there.</h2><p className="section-copy">Choose the material, quantity and preferred delivery date. Your enquiry opens directly in WhatsApp so our team can confirm availability, pricing and delivery.</p><div className="mt-8 space-y-3"><div className="order-note"><Package className="gold-icon"/><span><b>Material options</b><small>UltraTech cement, steel/TMT, sand, crushed stone, bricks, blocks and mixed requirements.</small></span></div><div className="order-note"><CalendarDays className="gold-icon"/><span><b>Preferred delivery date</b><small>Tell us when the material is needed at the site.</small></span></div><div className="order-note"><MapPinned className="gold-icon"/><span><b>Delivery address</b><small>Add the complete site address so the team can coordinate delivery.</small></span></div></div></div><form onSubmit={submit} className="order-card"><div className="grid gap-5 sm:grid-cols-2"><label><span>Material</span><select value={form.material} onChange={e=>update('material',e.target.value)}>{materialOptions.map(x=><option key={x}>{x}</option>)}</select></label><label><span>Quantity</span><div className="grid grid-cols-[1fr_145px] gap-2"><input required value={form.quantity} onChange={e=>update('quantity',e.target.value)} placeholder="e.g. 100"/><select value={form.unit} onChange={e=>update('unit',e.target.value)}>{units.map(x=><option key={x}>{x}</option>)}</select></div></label><label><span>Delivery date</span><input required type="date" value={form.date} onChange={e=>update('date',e.target.value)}/></label><label><span>Your name</span><input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Full name"/></label><label><span>Mobile number</span><input required inputMode="tel" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="10-digit mobile number"/></label><label><span>Delivery address</span><input required value={form.address} onChange={e=>update('address',e.target.value)} placeholder="Site / delivery address"/></label></div><label className="mt-5 block"><span>Additional requirement</span><textarea rows={4} value={form.notes} onChange={e=>update('notes',e.target.value)} placeholder="Brand preference, unloading details, project notes, etc."/></label><button type="submit" className="gold-button large mt-6 w-full justify-center"><Send size={17}/> Send enquiry on WhatsApp</button>{submitted&&<p className="success-message">WhatsApp opened with your order enquiry. Our team can confirm availability and pricing with you.</p>}</form></div></section>}

export function Gallery(){return <section id="gallery" className="section-pad"><div className="container"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">OUR BUSINESS</p><h2 className="section-title">See the place. Meet the people.</h2></div><p className="max-w-md section-copy">A look at the A.K. Gautam Traders store, office and family team.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2"><div className="image-card md:row-span-2"><Image src="/images/office.png" alt="A.K. Gautam Traders storefront in Jhansi" width={1672} height={941} className="h-full min-h-[360px] w-full object-cover transition duration-700 hover:scale-105"/></div><div className="image-card"><Image src="/images/storefront.png" alt="A.K. Gautam Traders office" width={1672} height={941} className="w-full object-cover transition duration-700 hover:scale-105"/></div><div className="image-card"><Image src="/images/cabin.png" alt="A.K. Gautam Traders owner at his desk" width={1254} height={1254} className="w-full object-cover transition duration-700 hover:scale-105"/></div></div></div></section>}

export function Contact(){return <section id="contact" className="section-pad contact-section"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">VISIT OR ENQUIRE</p><h2 className="section-title">Let’s plan your material requirement.</h2><p className="section-copy">Call, WhatsApp or visit A.K. Gautam Traders at Suti Mill, near The Ghanaram Royal Garden, Sankar Road, Jhansi.</p><div className="mt-8 space-y-3"><a href={`tel:+91${site.phone}`} className="contact-row"><Phone className="gold-icon"/><span><small>Call us</small><b>+91 {site.phone}</b></span></a><a href={`mailto:${site.email}`} className="contact-row"><Mail className="gold-icon"/><span><small>Email</small><b>{site.email}</b></span></a><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="contact-row"><Instagram className="gold-icon"/><span><small>Instagram</small><b>@{site.instagram}</b></span></a><div className="contact-row"><MapPin className="gold-icon mt-1"/><span><small>Location</small><b>{site.address}</b></span></div></div></div><div className="map-card"><iframe title="A.K. Gautam Traders location map" src={site.mapEmbed} width="100%" height="520" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/></div></div></section>}

export function Footer(){return <footer className="site-footer"><div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_.7fr_.7fr]"><div><div className="flex items-center gap-3"><span className="brand-mark grid h-11 w-11 place-items-center rounded-xl font-black">AK</span><div><b className="block">A.K. GAUTAM TRADERS</b><span className="muted text-xs">Building Materials · Jhansi</span></div></div><p className="mt-5 max-w-md muted text-sm leading-6">A.K. Gautam Traders supplies UltraTech cement and essential construction materials for homes, commercial projects and construction sites in and around Jhansi.</p></div><div><h3 className="footer-heading">Quick links</h3><div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#materials">Materials</a><a href="#order">Order Material</a><a href="#contact">Contact</a></div></div><div><h3 className="footer-heading">Contact</h3><div className="footer-links"><a href={`tel:+91${site.phone}`}>+91 {site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer">@{site.instagram}</a><span>Sankar Road, Jhansi</span></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} A.K. Gautam Traders. All rights reserved.</span><span>UltraTech Cement · Steel · Sand · Crushed Stone · Bricks · Blocks</span></div></footer>}
