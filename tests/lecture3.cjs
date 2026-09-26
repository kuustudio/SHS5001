const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),packet=JSON.parse(fs.readFileSync('data/lecture3.json'));
const context={current:{id:packet.lectureId,course:packet.course,vocab:packet.vocab},modules:()=>packet.course.modules};vm.createContext(context);
for(const [a,b] of [['function chapters()','function cap('],['function qFor(','function key('],['function normalize(','function feedback(']])vm.runInContext(source.slice(source.indexOf(a),source.indexOf(b)),context);
const cs=context.chapters(),qids=[],vids=[];
for(const c of cs){const qs=context.qFor(c);assert.ok(qs.length,c.id);qids.push(...qs.map(q=>q.id));vids.push(...context.vocFor(c).map(v=>v.id));assert.ok(c.section.titleZh);assert.ok(c.section.pages.every(n=>n>=1&&n<=51))}
assert.equal(cs.length,24);assert.equal(qids.length,24);assert.equal(new Set(qids).size,24);assert.equal(vids.length,57);assert.equal(new Set(vids).size,57);
for(const q of packet.course.questions){assert.equal(context.evaluate(q,q.answer.en).grade,'full',q.id+' English');assert.equal(context.evaluate(q,q.answer.zh).grade,'full',q.id+' Chinese')}
const html=fs.readFileSync('dist/index.html','utf8');const data=JSON.parse(html.match(/id="extra-courses-json" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.deepEqual(data.map(x=>x.lectureId),['lecture-2','lecture-3']);
const ui={};vm.createContext(ui);vm.runInContext(source.slice(source.indexOf('const esc='),source.indexOf('function save('))+';this.renderBi=bi;',ui);
const pdca=data[0].course.modules.find(m=>m.id==='L2-03');const title=ui.renderBi(pdca.title);
assert.ok(title.includes('PDCA</span>\n<span'));assert.ok(title.includes('持续改进循环'));assert.equal((title.match(/PDCA/g)||[]).length,1);
const css=fs.readFileSync('style.css','utf8');assert.ok(css.includes('.bilingual-text>.bi-line{display:block}'));assert.ok(css.includes('.lang-zh .en{display:none!important}'));assert.ok(css.includes('.lang-en .zh{display:none!important}'));
console.log('PASS: Lecture 3 coverage, bilingual answer checks, all built-in courses, and separated PDCA title regression');
