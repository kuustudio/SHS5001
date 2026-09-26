const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),course=JSON.parse(fs.readFileSync('data/lecture1.json'));
const context={current:{course},modules:()=>course.modules};vm.createContext(context);
for(const [a,b] of [['function chapters()','function cap('],['function qFor(','function vocFor('],['function normalize(','function feedback(']]) vm.runInContext(source.slice(source.indexOf(a),source.indexOf(b)),context);
const cs=context.chapters(),ids=[];
for(const c of cs){const qs=context.qFor(c);assert.ok(qs.length,c.id+' has no practice');ids.push(...qs.map(q=>q.id))}
assert.equal(cs.length,18);assert.equal(ids.length,24);assert.equal(new Set(ids).size,24);
for(const q of course.questions.filter(q=>q.chapterId)){assert.equal(context.evaluate(q,q.answer.en).grade,'full',q.id+' EN');assert.equal(context.evaluate(q,q.answer.zh).grade,'full',q.id+' ZH')}
assert.match(source,/data-start-practice/);assert.match(source,/data-retry/);
console.log('PASS: all 18 chapters have practice, all 24 questions assigned exactly once, 7 new references match their English and Chinese rubrics');
