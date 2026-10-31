import { readFileSync,writeFileSync,mkdirSync,copyFileSync,existsSync,readdirSync } from 'node:fs';
import { resolve,dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(readFileSync(resolve(root,'data/sehs5083/test1.json'),'utf8'));
const embedded=JSON.stringify(data).replace(/</g,'\\u003c');
mkdirSync(resolve(root,'dist/assets/sehs5083'),{recursive:true});
writeFileSync(resolve(root,'dist/sehs5083.html'),readFileSync(resolve(root,'sehs5083.html'),'utf8').replace('__SEHS5083__',embedded));
for(const file of ['course5083.js','course5083.css'])copyFileSync(resolve(root,file),resolve(root,'dist',file));
let images=0;
for(let c=1;c<=4;c++){
 const bundle=resolve(root,`source-assets/sehs5083-C${c}.json.gz`);
 if(!existsSync(bundle))throw new Error(`Missing SEHS5083 source images for chapter ${c}`);
 for(const [name,encoded] of Object.entries(JSON.parse(gunzipSync(readFileSync(bundle))))){
  if(!/^(?:C[1-4]-P\d{3}|ch[1-4]-[a-f0-9]{12})\.webp$/.test(name))throw new Error(`Invalid SEHS5083 asset: ${name}`);
  writeFileSync(resolve(root,'dist/assets/sehs5083',name),Buffer.from(encoded,'base64'));images++;
 }
}
const reports=resolve(root,'notes/sehs5083');
if(existsSync(reports)){mkdirSync(resolve(root,'dist/reports'),{recursive:true});for(const file of readdirSync(reports)){if(file.endsWith('.html'))copyFileSync(resolve(reports,file),resolve(root,'dist/reports',file));}}
console.log(`Built SEHS5083 Test 1: ${data.chapters.length} chapters, ${data.chapters.flatMap(c=>c.slides).length} scoped slides, ${data.chapters.flatMap(c=>c.questions).length} questions, ${images} images.`);
