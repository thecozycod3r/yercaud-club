import SiteLink, {sitePath} from './SiteLink.jsx';
import ClubImage from './ClubImage.jsx';
import React, {useState} from 'react';
import {clubWebsites} from './clubWebsites.js';
import {clubPhotos} from './clubPhotos.js';
import {ArrowUpRight, MagnifyingGlass, Phone, DownloadSimple} from '@phosphor-icons/react';

export default function AffiliatedClubs({clubs, pdf}) {
  const [query, setQuery] = useState('');
  const [location,setLocation] = useState('All locations');
  const locations=[...new Set(clubs.map(club=>club.slice(club.lastIndexOf(',')+1).trim()))].sort();
  const matches = clubs.filter(club => club.toLowerCase().includes(query.trim().toLowerCase())&&(location==='All locations'||club.endsWith(', '+location)));
  function clear(){setQuery('');setLocation('All locations')}
  return <>
    <section className="affiliate-intro section">
      <nav aria-label="Breadcrumb" className="breadcrumb"><SiteLink href="/">Home</SiteLink><span aria-hidden="true">/</span><span aria-current="page">Affiliated clubs</span></nav>
      <div className="affiliate-intro-grid"><div><h1>A wider circle<br/>of belonging.</h1><p>Discover the 18 clubs affiliated with Yercaud Club, and find familiar hospitality along the way.</p><SiteLink className="text-link" href="#directory-heading">Find a club <ArrowUpRight size={18}/></SiteLink></div><ClubImage name="members" alt="Yercaud Club members gathered beside the tennis court" width="1280" height="960" fetchPriority="high"/></div>
    </section>
    <section className="club-directory section" aria-labelledby="directory-heading">
      <div className="directory-toolbar">
        <h2 id="directory-heading">Affiliated clubs</h2>
        <div className="directory-filters">
        <div className="directory-search"><label htmlFor="club-search">Find a club or location</label><div><MagnifyingGlass size={19} aria-hidden="true"/><input id="club-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try Chennai or Coonoor"/></div></div>
        <div className="directory-location"><label htmlFor="club-location">Location</label><select id="club-location" value={location} onChange={e=>setLocation(e.target.value)}><option>All locations</option>{locations.map(city=><option key={city}>{city}</option>)}</select></div>
        </div>
      </div>
      <p className="directory-count" role="status">{query.trim()||location!=='All locations' ? `${matches.length} of ${clubs.length} clubs` : `${clubs.length} affiliated clubs`}</p>
      {matches.length > 0 ? <ul className="directory-list">{matches.map(club=>{
        const divider=club.lastIndexOf(',');
        const photo=clubPhotos[club];
        return <li key={club}>{photo&&<figure className="directory-photo"><img src={sitePath(`/images/${photo.img}.webp`)} srcSet={`${sitePath(`/images/${photo.img}-480.webp`)} 480w, ${sitePath(`/images/${photo.img}.webp`)} 800w`} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1099px) 45vw, 400px" alt={club.slice(0,divider)} width="800" height="600" loading="lazy" decoding="async"/></figure>}<h3>{club.slice(0,divider)}</h3><p>{club.slice(divider+1).trim()}</p>{clubWebsites[club]&&<SiteLink className="directory-website" href={clubWebsites[club]} target="_blank" rel="noreferrer" aria-label={`Club website: ${club.slice(0,divider)} (opens in a new tab)`}>Club website <ArrowUpRight size={14}/></SiteLink>}</li>;
      })}</ul> : <div className="directory-empty"><h3>No clubs found.</h3><p>Try another name or location, or clear your filters.</p><button className="text-link" onClick={clear}>Show all clubs <ArrowUpRight size={18}/></button></div>}
      <p className="directory-source">Affiliations listed in the club’s tariff card dated 2 September 2026.</p>
      <details className="photo-credits"><summary>Photo credits</summary><p>Photographs belong to each club and are shown from the sources below.</p><ul>{clubs.filter(club=>clubPhotos[club]).map(club=>{const p=clubPhotos[club];return <li key={club}>{club.slice(0,club.lastIndexOf(','))}: <SiteLink href={p.source} target="_blank" rel="noreferrer">{p.sourceName}</SiteLink></li>})}</ul></details>
    </section>
    <section className="affiliate-visit section" aria-labelledby="affiliate-visit-heading">
      <div><h2 id="affiliate-visit-heading">Planning a visit?</h2><p>Affiliated members can contact Yercaud Club to confirm access, chamber availability, and arrangements before travelling.</p><SiteLink className="button" href="tel:+914281222212"><Phone size={18}/>04281 222212<ArrowUpRight size={17}/></SiteLink></div>
      <div className="affiliate-rates"><h3>Affiliated-member tariffs</h3><dl><div><dt>Chambers</dt><dd>₹3,000 per day for single or double occupancy, plus ₹250 guest charge per person.</dd></div><div><dt>Dining</dt><dd>Menu rates plus ₹250 guest charge per person.</dd></div><div><dt>Tennis, badminton & billiards</dt><dd>₹250 guest charge plus ₹250 per day, per person.</dd></div></dl><SiteLink className="text-link" href={pdf} target="_blank" rel="noreferrer">View full tariff <DownloadSimple size={18}/></SiteLink><p className="fine">Please confirm current rates and visiting arrangements with the club.</p></div>
    </section>
  </>;
}
