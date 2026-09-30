import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
const base=process.env.VITE_BASE_PATH||'/';
if(!base.startsWith('/')||!base.endsWith('/'))throw new Error('VITE_BASE_PATH must start and end with a slash.');
async function processDir(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const path=join(dir,entry.name);
    if(entry.isDirectory()){await processDir(path);continue}
    if(!/\.(html|md|txt)$/.test(entry.name))continue;
    let text=await readFile(path,'utf8');
    if(base!=='/'){
      // Preserve external URLs and already-prefixed URLs; rewrite only site-local references.
      text=text.replace(/\]\((\/(?!\/)[^)]*)\)/g,(full,url)=>url.startsWith(base)?full:`](${base}${url.slice(1)})`);
      text=text.replace(/\b(href|src)="(\/(?!\/)[^"]*)"/g,(full,key,url)=>url.startsWith(base)?full:`${key}="${base}${url.slice(1)}"`);
      text=text.replace(/([" ,])\/images\//g,`$1${base}images/`);
    }
    await writeFile(path,text);
  }
}
await processDir('dist');
await writeFile('dist/.nojekyll','');
console.log(`Static pages and Markdown links prepared for ${base}`);
