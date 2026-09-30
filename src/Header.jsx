import SiteLink, {sitePath} from './SiteLink.jsx';
import React, {useRef, useEffect, useState} from 'react';
import {ArrowUpRight, Phone, List, X, ArrowRight} from '@phosphor-icons/react';
const links=[['The Club','/#club'],['Stay','/#stay'],['Dining','/facilities/#dining'],['Facilities','/facilities/'],['Gallery','/#gallery'],['Affiliated clubs','/affiliated-clubs/']];
export default function Header({page}){
 const menu=useRef(null);const toggle=useRef(null);const [open,setOpen]=useState(false);
 function close(){menu.current.close()}
 function show(){menu.current.showModal();setOpen(true)}
 useEffect(()=>{document.body.classList.toggle('menu-is-open',open);return()=>document.body.classList.remove('menu-is-open')},[open]);
 useEffect(()=>{const mq=matchMedia('(min-width: 1100px)');const reset=()=>{if(mq.matches&&menu.current.open)menu.current.close()};mq.addEventListener('change',reset);return()=>mq.removeEventListener('change',reset)},[]);
 const current=href=>page==='facilities'&&href==='/facilities/'||page==='affiliations'&&href==='/affiliated-clubs/';
 return <>
 <header className="header"><SiteLink className="brand" href="/"><img src={sitePath('/images/logo.webp')} alt="" width="45" height="60"/><span>YERCAUD CLUB<small>ESTABLISHED 1897</small></span></SiteLink><nav className="nav" aria-label="Main navigation">{links.map(([name,href])=><SiteLink key={name} href={href} aria-current={current(href)?'page':undefined}>{name}</SiteLink>)}</nav><SiteLink className="header-cta" href="/#visit">Plan your visit <ArrowUpRight size={17}/></SiteLink><button ref={toggle} className="menu-toggle" aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open} onClick={show}><List size={26}/></button></header>
 <dialog ref={menu} className="mobile-menu" aria-label="Site navigation" onClick={e=>{if(e.target===menu.current)close()}} onClose={()=>{setOpen(false);toggle.current?.focus()}}><div className="mobile-menu-top"><span>Yercaud Club</span><button aria-label="Close menu" onClick={close}><X size={26}/></button></div><nav aria-label="Mobile navigation">{links.map(([name,href])=><SiteLink key={name} href={href} onClick={close} aria-current={current(href)?'page':undefined}>{name}<ArrowUpRight size={21}/></SiteLink>)}</nav><div className="mobile-menu-contact"><SiteLink className="button" href="/#visit" onClick={close}>Plan your visit <ArrowRight size={18}/></SiteLink><SiteLink href="tel:+914281222212"><Phone size={18}/>04281 222212</SiteLink><p>Yercaud, Tamil Nadu · Since 1897</p></div></dialog>
 <nav className="mobile-dock" aria-label="Quick actions"><SiteLink href={page==='facilities'?'#facility-directory':'/facilities/'}>Explore facilities <ArrowUpRight size={16}/></SiteLink><SiteLink href="tel:+914281222212"><Phone size={17}/>Call the club</SiteLink></nav>
 </>;
}
