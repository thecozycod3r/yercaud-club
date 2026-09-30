import {sitePath} from './SiteLink.jsx';
import React from 'react';
import imageSources from './imageSources.js';

export default function ClubImage({name, sizes='(max-width: 767px) calc(100vw - 48px), (max-width: 1440px) 46vw, 640px', ...props}) {
  return <img src={sitePath(`/images/${name}.webp`)} srcSet={imageSources[name]?.replaceAll('/images/',sitePath('/images/'))} sizes={sizes} decoding="async" {...props}/>;
}
