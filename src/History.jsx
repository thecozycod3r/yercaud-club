import SiteLink from './SiteLink.jsx';
import ClubImage from './ClubImage.jsx';
import React from 'react';
import {ArrowUpRight, Phone} from '@phosphor-icons/react';

// Source: the club's souvenir history (Regd. No. 34/1900-1901), supplied October 2026.
const founders=['R. Wilkins','Bruce Foote','Norfor Leeming','R. Foulkes','C.G. Lechler'];
const timeline=[
  ['1860s','Coffee comes to the hills','European planters begin coffee plantations on the Shevaroys.'],
  ['31 May 1897','The club is founded','Five coffee planters form a committee and establish the Yercaud Club with 34 other ordinary members, in a rented house.'],
  ['22 July 1897','Building on trust','Members borrow ₹3,000 through debentures of ₹100 each at 6% a year. The committee personally guarantees the loan and its interest.'],
  ['1938','A clubhouse of its own','The club buys 2.01 acres of land and builds the new clubhouse.'],
  ['1949','The first Indian member','M.S.P. Rajes is admitted. Until then, membership was limited to European planters.'],
  ['1950s–1970s','The quiet years','Planters sell their estates and leave Yercaud from the mid-1950s. Membership falls and the club stays largely dormant through the 1960s and 70s.'],
  ['1981','Nine members','Only nine members remain. Numbers begin to rise again in the late 1980s.'],
  ['1990s','Club life returns','The club becomes active again, its standards kept throughout the years of stagnation.'],
  ['23 August 1997','The centenary','Yercaud Club celebrates one hundred years.'],
  ['26 March 2022','A new tennis court','A synthetic tennis court is commissioned with contributions from members.'],
  ['30 June 2023','The 125th year','The club marks 125 years, improving its facilities and opening new ones.'],
];
const contributions=[
  ['K. Vasudevan Memorial Sports Centre','A badminton court, contributed by Mr. Balraj Vasudevan in memory of his father, on his 100th birth anniversary.'],
  ['Stables Watering Hole','Contributed by Mr. Vijayan Rajes and Mr. Vishnu Periasamy Rajes of MSP Plantations, Cauvery Peak.'],
  ['Gymnasium mezzanine','Above the badminton court washrooms, contributed by Mr. Venketrama Raja of Rajapalayam Mills Limited, Rajapalayam.'],
  ['Chambers','Furnished and refurbished by Mr. Narayanan Ramji.'],
  ['Gym equipment','Provided by M/s. Devendra Autocom Private Ltd.'],
  ['Table tennis table','Provided by Mr. Ranjeet David Chhabria.'],
];

export default function History(){
  return <>
    <section className="affiliate-intro section">
      <nav aria-label="Breadcrumb" className="breadcrumb"><SiteLink href="/">Home</SiteLink><span aria-hidden="true">/</span><span aria-current="page">Our history</span></nav>
      <div className="affiliate-intro-grid"><div><h1>A club of<br/>the Shevaroys.</h1><p>Founded by coffee planters in 1897, Yercaud Club has been a meeting place in the hills for more than 125 years.</p><SiteLink className="text-link" href="#timeline-heading">Through the years <ArrowUpRight size={18}/></SiteLink></div><ClubImage name="club-life" alt="Members together at the Yercaud Club clubhouse" width="1280" height="960" fetchPriority="high"/></div>
    </section>

    <section className="history-hills section" aria-labelledby="hills-heading">
      <div><p className="eyebrow">THE SHEVAROY HILLS</p><h2 id="hills-heading">Hills that rise<br/>from the plains.</h2></div>
      <div className="history-prose">
        <p className="lead">The Shevaroys rise steeply from the hot plains of Tamil Nadu to 1,624 metres, part of the Eastern Ghats.</p>
        <p>The range covers 384 square kilometres and 67 tribal villages. Mild temperatures, high elevation and rain shared evenly between the southwest and northeast monsoons make it ideal for coffee, pepper and fruit, and most of the hills’ people work with what the estates grow.</p>
        <p>The native people of the hills are the Malayalis, the Tamil for “hill tribes”. Little is recorded of how they came here. One legend tells of farmers from the banks of the Cauvery who, led by one Shervarayan, fled Tipu Sultan’s armies in the late 1700s and settled on these hills. The range became Shervarayan Malai, later anglicised to the Shevaroy Hills.</p>
      </div>
    </section>

    <section className="history-founding section" aria-labelledby="founding-heading">
      <div className="history-founding-copy">
        <p className="eyebrow">31 MAY 1897</p>
        <h2 id="founding-heading">A place to meet,<br/>play and talk.</h2>
        <p>Coffee planters had worked the Shevaroys since the 1860s. Their families wanted somewhere to meet: to play billiards, tennis and cards. So five planters formed a committee and founded the Yercaud Club, with 34 other ordinary members, in a rented house.</p>
        <p>The first purchase was a billiard table from the Army and Navy Stores, Bombay, for ₹1,000. A piano was rented from Messrs Misquith and Co., Bangalore, at ₹20 a month. Billiards, cards, a reading room and tennis filled the days, and the club soon became the centre of social life in the hills.</p>
      </div>
      <div className="history-founders"><h3>The founding committee</h3><ul>{founders.map(name=><li key={name}>{name}</li>)}</ul><p>All coffee planters, who stood personal guarantee for the club’s first loan.</p></div>
    </section>

    <section className="history-timeline section" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Through the years.</h2>
      <ol>{timeline.map(([date,title,text])=><li key={date}><span className="history-date">{date}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </section>

    <section className="history-125 section" aria-labelledby="anniversary-heading">
      <div><p className="eyebrow">THE 125TH YEAR</p><h2 id="anniversary-heading">Built by<br/>its members.</h2><p>The synthetic tennis court, renovated chambers, a refurbished billiards table and table tennis were all made possible by members. For the 125th year, these facilities were added, and the club acknowledges each with gratitude.</p></div>
      <dl>{contributions.map(([name,text])=><div key={name}><dt>{name}</dt><dd>{text}</dd></div>)}</dl>
    </section>

    <section className="affiliate-visit section" aria-labelledby="history-visit-heading">
      <div><h2 id="history-visit-heading">Dignity, decorum,<br/>and good company.</h2><p>Through every era, the club has kept its standards. Come and see what 125 years of club life feel like.</p><SiteLink className="button" href="tel:+914281222212"><Phone size={18}/>04281 222212<ArrowUpRight size={17}/></SiteLink></div>
      <div className="history-links"><SiteLink className="text-link" href="/facilities/">Explore facilities <ArrowUpRight size={18}/></SiteLink><SiteLink className="text-link" href="/#stay">Stay in the hills <ArrowUpRight size={18}/></SiteLink><p className="fine">History drawn from the club’s souvenir record, Regd. No. 34/1900-1901.</p></div>
    </section>
  </>;
}
