import SiteLink, {sitePath} from './SiteLink.jsx';
import ClubImage from './ClubImage.jsx';
import React, {useState, useEffect, useRef} from 'react';
import {ArrowUpRight, Phone, DownloadSimple, Plus} from '@phosphor-icons/react';

export const facilities = [
  ['tennis','Tennis'], ['badminton','Badminton'], ['billiards','Billiards'],
  ['table-tennis','Table tennis'], ['gym','Gym'], ['locker-room','Locker room'],
  ['sports-lounge','Sports lounge'], ['dining','Dining'],
];

function SportRates({billiards=false}) {
  return <details className="rates-disclosure"><summary>Rates & guest charges <Plus size={18}/></summary><dl className="facility-rates">
    <div><dt>{billiards?'Subscribed members':'Members'}</dt><dd>{billiards?'₹100 / month or ₹1,200 / annum':'₹100 / day or ₹4,000 / annum'}</dd></div>
    {billiards&&<div><dt>Non-subscribed members</dt><dd>₹250 per person, per day</dd></div>}
    <div><dt>Member guests & affiliated members</dt><dd>₹250 guest charge + ₹250 per day, per person</dd></div>
  </dl></details>;
}
export default function Facilities({pdf, menus}) {
  const [menu,setMenu] = useState('Breakfast');
  const [active,setActive] = useState('tennis');
  const jump=useRef(null);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(visible[0])setActive(visible[0].target.id);
    },{rootMargin:'-22% 0px -50% 0px',threshold:0});
    facilities.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el)});
    return()=>observer.disconnect();
  },[]);
  useEffect(()=>{
    const link=jump.current?.querySelector('[aria-current="location"]');
    if(link&&jump.current.scrollWidth>jump.current.clientWidth)jump.current.scrollTo({left:Math.max(0,link.offsetLeft-jump.current.offsetLeft-20),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  },[active]);
  return <>
    <section className="facilities-intro section">
      <nav aria-label="Breadcrumb" className="breadcrumb"><SiteLink href="/">Home</SiteLink><span aria-hidden="true">/</span><span aria-current="page">Facilities</span></nav>
      <div className="facilities-intro-grid"><div><h1>Time to play.<br/>Space to unwind.</h1><p>Eight facilities for an active morning, a friendly match, and an unhurried meal together.</p><SiteLink className="text-link" href="#facility-directory">Explore facilities <ArrowUpRight size={18}/></SiteLink></div><ClubImage name="tennis" alt="Yercaud Club’s outdoor tennis court, surrounded by trees" width="1280" height="960" fetchPriority="high"/></div>
    </section>
    <nav ref={jump} id="facility-directory" className="facility-jump" aria-label="Jump to a facility">{facilities.map(([id,name])=><SiteLink key={id} href={`#${id}`} aria-current={active===id?'location':undefined} onClick={()=>setActive(id)}>{name}</SiteLink>)}</nav>
    <section className="racket-facilities section" aria-label="Racquet sports">
      <article id="tennis" className="facility-photo-item"><ClubImage name="tennis-hero" alt="Blue outdoor tennis court at Yercaud Club" width="1053" height="960" loading="lazy"/><h2>Tennis</h2><p>A game outdoors, with the trees all around. Meet friends on court for a friendly match.</p><SportRates/></article>
      <article id="badminton" className="facility-photo-item"><ClubImage name="badminton" alt="Members playing on the club’s indoor badminton court" width="720" height="1280" loading="lazy"/><h2>Badminton</h2><p>Keep the rally going on the indoor badminton court. A lively way to spend time at the club.</p><SportRates/></article>
    </section>
    <section id="billiards" className="billiards-feature section"><figure><ClubImage name="billiards-stock" alt="Illustrative stock photograph of a green billiards table in a wood-panelled room" width="1600" height="1035" loading="lazy"/></figure><div><h2>Billiards</h2><p>Take your time over a game. Billiards is part of the club’s sporting offering, with subscriptions for regular players.</p><SportRates billiards/></div></section>
    <section className="fitness-facilities section" aria-label="Table tennis and fitness">
      <article id="table-tennis" className="facility-photo-item"><ClubImage name="table-tennis" alt="Table tennis table in the club’s indoor sports area" width="1280" height="960" loading="lazy"/><h2>Table tennis</h2><p>Make time for a quick game or a little friendly competition at the table.</p></article>
      <article id="gym" className="facility-photo-item"><ClubImage name="gym" alt="Members gathered among fitness equipment in the club gym" width="1280" height="960" loading="lazy"/><h2>Gym</h2><p>Keep your workout part of your club routine. Ask the team about gym access and timings.</p></article>
    </section>
    <section className="support-facilities section" aria-label="Spaces around the game">
      <article id="locker-room" className="has-photo"><ClubImage name="locker-stock" alt="Rows of numbered metal lockers" width="1600" height="1143" loading="lazy"/><h2>Locker room</h2><p>A locker room is available at the club. The team can help with access and locker arrangements.</p></article>
      <article id="sports-lounge" className="has-photo"><ClubImage name="sports-lounge" alt="Members relaxing in the sports lounge beside the indoor court" width="1280" height="960" loading="lazy"/><h2>Sports lounge</h2><p>Take a break between games and enjoy time with friends in the sports lounge.</p></article>
    </section>
    <section id="dining" className="facility-dining section"><div className="facility-dining-intro"><ClubImage name="gathering" alt="Members sharing time together in the club dining room" width="1280" height="953" loading="lazy"/><h2>Dining</h2><p>Breakfast favourites, a leisurely lunch, and something sweet to finish. Good food and good company at the club table.</p></div><div className="menu-paper"><h3>A taste of the club</h3><div className="menu-tabs" aria-label="Menu categories">{Object.keys(menus).map(category=><button key={category} aria-pressed={menu===category} onClick={()=>setMenu(category)}>{category}</button>)}</div><div className="menu-items">{menus[menu].map(([name,price])=><div className="menu-item" key={name}><span>{name}</span><span>₹{price}</span></div>)}</div><p className="fine">Member guests and affiliated members: menu rates plus ₹250 guest charge per person.</p><SiteLink className="text-link" href={pdf} target="_blank" rel="noreferrer">Explore the full menu <ArrowUpRight size={18}/></SiteLink></div></section>
    <section className="facility-enquiries section"><h2>Make a day of it.</h2><p>Speak with the club about facility access, timings, and arrangements for your visit.</p><div><SiteLink className="button" href="tel:+914281222212"><Phone size={18}/>04281 222212<ArrowUpRight size={17}/></SiteLink><SiteLink className="text-link" href={pdf} target="_blank" rel="noreferrer">View full tariff <DownloadSimple size={18}/></SiteLink></div><p className="fine">Published tariffs dated 2 September 2026. Please confirm current rates with the club.</p></section>
  </>;
}
