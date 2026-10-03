import {gunzipSync} from 'node:zlib';
import {readFileSync,writeFileSync,mkdirSync,cpSync} from 'node:fs';
import {resolve} from 'node:path';
const root=process.cwd(),data=JSON.parse(readFileSync(resolve(root,'data/sehs5052/course.json'),'utf8'));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const embedded=JSON.stringify(data).replace(/</g,'\\u003c');
writeFileSync(resolve(root,'dist/sehs5052.html'),readFileSync(resolve(root,'sehs5052.html'),'utf8').replace('__SEHS5052__',embedded));
for(const f of ['course5052.js','course5052.css'])cpSync(resolve(root,f),resolve(root,'dist',f));
mkdirSync(resolve(root,'dist/assets/sehs5052'),{recursive:true});
for(let l=1;l<=6;l++){const images=JSON.parse(gunzipSync(readFileSync(resolve(root,`source-assets/sehs5052-L${l}.json.gz`))));for(const [name,encoded] of Object.entries(images)){if(!/^L[1-6]-P[0-9]{3}\.webp$/.test(name))throw new Error('Invalid source image name');writeFileSync(resolve(root,'dist/assets/sehs5052',name),Buffer.from(encoded,'base64'))}}
mkdirSync(resolve(root,'dist/reports'),{recursive:true});mkdirSync(resolve(root,'notes/sehs5052'),{recursive:true});
const style=`body{font:17px/1.8 system-ui,-apple-system,'Microsoft YaHei',sans-serif;color:#162d47;max-width:1100px;margin:40px auto;padding:24px}h1{font-size:30px;line-height:1.3}h2{font-size:22px;border-bottom:1px solid #d8e2ed;padding-bottom:10px}h3{font-size:18px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}.source{white-space:pre-wrap;overflow-wrap:anywhere;font-size:15px;padding:16px;background:#f4f6f9}.meta{color:#53657a;font-size:14px}.notice{border-left:3px solid #ce902e;padding:12px 18px;background:#fff8e9}.unit{padding:10px 0}.page{break-before:page}a{overflow-wrap:anywhere;color:#175ab4}@media(max-width:750px){.pair{display:block}body{margin:0;padding:20px}}@media print{body{font-size:11pt;margin:0;padding:0}.source{background:white;font-size:10pt}.unit{break-inside:avoid}a{color:inherit}}`;
for(const l of data.lectures){
 for(const lang of ['both','zh','en']){
  const text=(z,e)=>lang==='zh'?z:lang==='en'?e:z+' / '+e;
  const pair=o=>lang==='both'?`<div class="pair"><p>${esc(o.en)}</p><p>${esc(o.zh)}</p></div>`:`<p>${esc(o[lang])}</p>`;
  const title=o=>esc(text(o.zh,o.en));
  const notice=text('英文原文逐页提取。中英文学习解读为摘要，不是整份讲稿的逐句翻译。OCR未经逐字校对，不替代原图。这里的测试与学习重点不是学校正式考试或必考清单。','English narration is extracted page by page. Bilingual study notes are summaries, not a sentence-by-sentence translation of the complete narration. OCR is not word-by-word verified. Practice materials are not official examinations or guaranteed test topics.');
  let html=`<!doctype html><html lang="${lang==='en'?'en':'zh-Hans'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SEHS5052 Lecture ${l.lecture} · ${lang}</title><style>${style}</style></head><body><p class="meta">SEHS5052 · ${data.version} · Lecture ${l.lecture} · ${l.pages.length} ${text('页','pages')}</p><h1>${title(l.title)}</h1><p class="notice">${esc(notice)}</p><p>${esc(text('来源：','Source: ')+l.filename)}</p><h2>${text('学习报告与复习提纲','Study report and revision outline')}</h2>`;
  for(const u of l.units)html+=`<section class="unit"><h3>PDF ${u.start}${u.end===u.start?'':'–'+u.end} · ${title(u.title)}</h3>${pair(u)}</section>`;
  const cs=data.corrections.filter(c=>c.lecture===l.lecture);if(cs.length){html+=`<h2>${text('校核说明（与原文分开）','Corrections (separate from source text)')}</h2>`;for(const c of cs)html+=`<aside class="notice"><b>PDF ${c.pages.join(', ')} · ${title(c.title)}</b>${pair(c.text)}${c.url?`<a href="${esc(c.url)}">${esc(c.url)}</a>`:''}</aside>`}
  html+=`<h2>${text('练习题与解析','Practice questions and explanations')}</h2>`;
  for(const q of data.questions.filter(q=>q.lecture===l.lecture))html+=`<section class="unit"><h3>${q.id} · PDF ${q.page}</h3>${pair(q.question)}<ol type="A">${q.options.map(o=>`<li>${pair(o)}</li>`).join('')}</ol><p><b>${text('答案','Answer')}: ${String.fromCharCode(65+q.correct)}</b></p>${pair(q.explanation)}</section>`;
  html+=`<h2>${text('逐页内容索引','Page-by-page content')}</h2>`;
  for(const p of l.pages){const u=l.units.find(u=>u.start<=p.page&&u.end>=p.page);html+=`<section class="page"><h2>Lecture ${l.lecture} · PDF ${p.page}</h2><h3>${title(u.title)}</h3>${pair(u)}`;if(lang!=='zh'){html+=`<h3>${text('英文原文（保留讲义表述）','Original English narration (source wording)')}</h3><div class="source">${esc(p.hasNotes?p.text:'No extractable narration on this page.')}</div>`;if(p.slideText)html+=`<h3>${text('图中文字OCR（待校对）','Slide OCR (unverified)')}</h3><div class="source">${esc(p.slideText)}</div>`}else{if(p.translationZh)html+=`<h3>本页讲稿译文</h3><div class="source">${esc(p.translationZh)}</div>`;html+='<p class="meta">中文学习解读为摘要。完整英文逐页原文收录于中英版与英文版报告；网站可查看PDF原页。</p>'}html+='</section>'}
  html+='</body></html>';writeFileSync(resolve(root,`dist/reports/SEHS5052_L${l.lecture}_${lang}.html`),html);
 }
 let md=`# SEHS5052 Lecture ${l.lecture} — ${l.title.en}\n\n${l.title.zh}\n\nSource: ${l.filename}\n\nEnglish narration is extracted page by page. Bilingual notes are study summaries, not a complete literal translation. Source-page snapshots and unverified slide OCR are available on the website.\n\n`;
 for(const u of l.units)md+=`## PDF ${u.start}–${u.end}: ${u.title.en} / ${u.title.zh}\n\n${u.en}\n\n${u.zh}\n\n`;
 for(const p of l.pages)md+=`## Original source — PDF page ${p.page}\n\n${p.hasNotes?p.text:'[No extractable narration; see source image.]'}\n\n`;
 writeFileSync(resolve(root,`notes/sehs5052/Lecture${l.lecture}_Study_Report.md`),md);
}
console.log('Built SEHS5052: 450 source pages, 235 study units, 78 questions, 18 language reports.');
