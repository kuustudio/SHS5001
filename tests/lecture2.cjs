const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),packet=JSON.parse(fs.readFileSync('data/lecture2.json'));
const context={current:{id:packet.lectureId,course:packet.course,vocab:packet.vocab},modules:()=>packet.course.modules};vm.createContext(context);
for(const [a,b] of [['function chapters()','function cap('],['function qFor(','function key('],['function normalize(','function feedback(']])vm.runInContext(source.slice(source.indexOf(a),source.indexOf(b)),context);
const chapters=context.chapters(),qids=[],vids=[];
for(const c of chapters){const qs=context.qFor(c);assert.ok(qs.length,c.id);qids.push(...qs.map(q=>q.id));vids.push(...context.vocFor(c).map(v=>v.id));assert.ok(c.section.titleZh);assert.ok(c.section.pages.every(n=>n>=1&&n<=51))}
assert.equal(chapters.length,25);assert.equal(qids.length,25);assert.equal(new Set(qids).size,25);assert.equal(vids.length,53);assert.equal(new Set(vids).size,53);
for(const q of packet.course.questions){assert.equal(context.evaluate(q,q.answer.en).grade,'full',q.id+' English');assert.equal(context.evaluate(q,q.answer.zh).grade,'full',q.id+' Chinese')}
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(!html.includes('__EXTRA_COURSES__'));
const data=JSON.parse(html.match(/id="extra-courses-json" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.equal(data[0].lectureId,'lecture-2');assert.ok(data[0].course.modules[0].sections[0].html.startsWith('<div'));
console.log('PASS: 25 sections, 25 questions, 53 words, bilingual reference checks and valid production embedding');
