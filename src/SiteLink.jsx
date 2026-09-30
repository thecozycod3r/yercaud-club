import React from 'react';
export function sitePath(path){
  return typeof path==='string'&&path.startsWith('/')&&!path.startsWith('//')
    ? import.meta.env.BASE_URL+path.slice(1) : path;
}
export default function SiteLink({href,...props}){
  return <a href={sitePath(href)} {...props}/>;
}
