import {readFile,writeFile,rm} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';

// Render each entry point to static HTML so crawlers, link previews and no-JS visitors see the content.
const base=process.env.VITE_BASE_PATH||'/';
const {render}=await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const pages={'dist/index.html':'','dist/facilities/index.html':'facilities/','dist/affiliated-clubs/index.html':'affiliated-clubs/'};
for(const [file,route] of Object.entries(pages)){
  const html=await readFile(file,'utf8');
  if(!html.includes('<div id="root"></div>'))throw new Error(`No empty root in ${file}`);
  await writeFile(file,html.replace('<div id="root"></div>',`<div id="root">${render(base+route)}</div>`));
}
await rm('dist-ssr',{recursive:true,force:true});
console.log(`Prerendered ${Object.keys(pages).length} pages`);
