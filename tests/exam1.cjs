const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),bank=JSON.parse(fs.readFileSync('data/exam1.json'));
let output='',saved=0;const elements={};
const ctx={state:{},examBank:bank,Math,Date,save(){saved++},notify(){},window:{scrollTo(){}},esc:s=>String(s??''),bi:o=>o.en+' / '+o.zh,shell:s=>output=s,$:s=>elements[s]??{value:'',classList:{add(){}}}};vm.createContext(ctx);
vm.runInContext(source.slice(source.indexOf('function normalize('),source.indexOf('function feedback(')),ctx);
vm.runInContext(source.slice(source.indexOf('function examAssess('),source.indexOf("examNav.addEventListener('click'")),ctx);
assert.equal(bank.questions.length,79);assert.equal(bank.cases.length,7);
const all=[...bank.questions,...bank.cases];assert.equal(new Set(all.map(q=>q.id)).size,86);
for(const q of all){for(const lang of ['label','zh'])assert.ok(ctx.examAssess(q,q.points.map(p=>p[lang]).join('; ')).full,q.id+lang);assert.ok(!ctx.examAssess(q,'').full)}
assert.ok(ctx.examAssess(bank.questions.find(q=>q.id==='E1-51'),'A systematic approach to identifying potential causes of system failures.').full);
const pdca=bank.questions.find(q=>q.ordered);assert.ok(!ctx.examAssess(pdca,'Act Check Do Plan').full);
ctx.examHome();assert.ok(output.includes('案例分析 · 7题'));assert.ok(output.includes('短答练习 · 79题'));
for(const mode of ['study','practice','cases']){ctx.examStudy(mode);assert.ok(output.includes('查看参考答案'));assert.ok(!/IMG_|逐图核对|照片对应表|黄色/.test(output));if(mode!=='study')assert.ok(output.includes('data-exam="check:'))}
ctx.examStudy('practice','2');assert.ok(output.includes('E1-11'));assert.ok(!output.includes('E1-01'));
const q=bank.cases[0],id=q.id;elements['#practice-input-'+id]={value:'FMEA',focus(){this.focused=true}};elements['#practice-feedback-'+id]={innerHTML:''};elements['#practice-reference-'+id]={open:true};
ctx.examPracticeAction('check',id);assert.ok(elements['#practice-feedback-'+id].innerHTML.includes('待补充'));assert.equal(ctx.state.exam1Practice[id],'FMEA');
elements['#practice-input-'+id].value=q.points.map(p=>p.label).join('; ');ctx.examPracticeAction('check',id);assert.ok(elements['#practice-feedback-'+id].innerHTML.includes('已匹配全部关键词'));
ctx.examPracticeAction('retry',id);assert.equal(elements['#practice-input-'+id].value,'');assert.equal(elements['#practice-reference-'+id].open,false);assert.ok(!ctx.state.exam1Practice[id]);
ctx.examStart('20');assert.equal(ctx.state.exam1Run.ids.length,20);assert.equal(new Set(ctx.state.exam1Run.ids).size,20);
const first=bank.questions[0];ctx.state.exam1Run={ids:[first.id],index:0,answers:{},startedAt:Date.now(),finished:false};elements['#exam-input']={value:first.points.map(p=>p.label).join('; ')};ctx.examNext();assert.ok(ctx.state.exam1Run.finished);assert.equal(ctx.state.exam1Run.index,1);ctx.examNext();assert.equal(ctx.state.exam1Run.index,1);
ctx.state.exam1Run.answers[first.id]='';ctx.examStart('missed');assert.deepEqual(Array.from(ctx.state.exam1Run.ids),[first.id]);
const html=fs.readFileSync('dist/index.html','utf8'),embedded=JSON.parse(html.match(/id="exam1-json" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.equal(embedded.questions.length,79);assert.equal(embedded.cases.length,7);
const notes=fs.readFileSync('notes/Exam1_Keyword_Revision.md','utf8');assert.ok(!/IMG_|逐图核对|照片对应表/.test(notes));assert.ok(notes.includes('案例分析练习'));
console.log('PASS: 79 short answers, 7 cases, bilingual checks, immediate feedback, retry, lecture filters, saved answers, mock flow, clean revision content and build embedding');
