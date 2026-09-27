const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),bank=JSON.parse(fs.readFileSync('data/exam1.json'));
const ctx={state:{},examBank:bank,Math,Date,save(){},notify(){},window:{scrollTo(){}},$(){return {value:'Open communication'}}};vm.createContext(ctx);
vm.runInContext(source.slice(source.indexOf('function normalize('),source.indexOf('function feedback(')),ctx);
vm.runInContext(source.slice(source.indexOf('function examAssess('),source.indexOf('function examFrame(')),ctx);
assert.equal(bank.questions.length,49);assert.equal(new Set(bank.questions.map(q=>q.id)).size,49);
for(const q of bank.questions){assert.ok(q.pages.every(p=>p>=1&&p<=37));assert.ok(ctx.examAssess(q,q.points.map(p=>p.label).join('; ')).full,q.id+' English');assert.ok(ctx.examAssess(q,q.points.map(p=>p.zh).join('；')).full,q.id+' Chinese');assert.ok(!ctx.examAssess(q,'').full)}
const open=bank.questions.find(q=>q.points.length===1&&q.points[0].label==='Open communication');assert.ok(ctx.examAssess(open,'OPEN COMMUNICATION!').full);assert.ok(!ctx.examAssess(open,'communication').full);
const pdca=bank.questions.find(q=>q.ordered);assert.ok(!ctx.examAssess(pdca,'Act Check Do Plan').full);assert.ok(!ctx.examAssess(pdca,'Plan Do Study Act').full);
let rendered=0;ctx.examQuestion=()=>rendered++;ctx.examHome=()=>{};
vm.runInContext(source.slice(source.indexOf('function examStart('),source.indexOf('function examQuestion(')),ctx);
ctx.examStart('20');assert.equal(ctx.state.exam1Run.ids.length,20);assert.equal(new Set(ctx.state.exam1Run.ids).size,20);
ctx.state.exam1Run={ids:[open.id,pdca.id],index:0,answers:{},startedAt:Date.now(),finished:false};
vm.runInContext(source.slice(source.indexOf('function examNext('),source.indexOf('function examResults(')),ctx);
ctx.examNext();assert.equal(ctx.state.exam1Run.index,1);assert.equal(ctx.state.exam1Run.answers[open.id],'Open communication');assert.ok(!ctx.state.exam1Run.finished);
ctx.$=()=>({value:'Plan Do Check Act'});ctx.examNext();assert.ok(ctx.state.exam1Run.finished);assert.equal(ctx.state.exam1Run.index,2);ctx.examNext();assert.equal(ctx.state.exam1Run.index,2);
ctx.state.exam1Run.answers[pdca.id]='';ctx.examStart('missed');assert.deepEqual(Array.from(ctx.state.exam1Run.ids),[pdca.id]);
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(!html.includes('__EXAM1__'));assert.equal(JSON.parse(html.match(/id="exam1-json" type="application\/json">([\s\S]*?)<\/script>/)[1]).questions.length,49);
console.log('PASS: 49 bilingual keyword questions, short answers, PDCA order, unique mock selection, one-way submission, missed-only retest and build embedding');
