const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8');
function element(id){const classes=new Set();return {id,textContent:'',attrs:{},classList:{toggle(c,on){if(on)classes.add(c);else classes.delete(c)},contains:c=>classes.has(c)},setAttribute(k,v){this.attrs[k]=v},scrollIntoView(){this.scrolled=true},focus(){this.focused=true}}}
const ids=['review-list','review-filter-status','review-empty','show-all','only-missed'];const els=Object.fromEntries(ids.map(id=>[id,element(id)]));const cards=[element('question-Q1'),element('question-Q2')];let message='';
const ctx={$:s=>els[s.slice(1)],all:()=>cards,state:{checks:{'lecture-1:Q1':{grade:'full'}}},key:id=>'lecture-1:'+id,notify:m=>message=m};vm.createContext(ctx);
vm.runInContext(source.slice(source.indexOf('function setReviewFilter('),source.indexOf('function progressPage(')),ctx);
function click(id){ctx.n={id};vm.runInContext('(function(){'+source.slice(source.indexOf("if(n.id==='only-missed')"),source.indexOf("if(n.id==='go-home')"))+'})()',ctx)}
click('only-missed');assert.ok(cards[0].classList.contains('hidden'));assert.ok(!cards[1].classList.contains('hidden'));assert.equal(els['only-missed'].attrs['aria-pressed'],'true');
click('show-all');assert.ok(cards.every(c=>!c.classList.contains('hidden')));assert.equal(els['show-all'].attrs['aria-pressed'],'true');assert.equal(els['only-missed'].attrs['aria-pressed'],'false');assert.match(message,/全部 2/);assert.ok(els['review-list'].scrolled&&els['review-list'].focused);
ctx.state.checks['lecture-1:Q2']={grade:'full'};click('only-missed');assert.ok(!els['review-empty'].classList.contains('hidden'));click('show-all');assert.ok(els['review-empty'].classList.contains('hidden'));assert.ok(cards.every(c=>!c.classList.contains('hidden')));
click('show-all');assert.match(message,/全部 2/);ctx.key=id=>'lecture-2:'+id;click('only-missed');assert.ok(cards.every(c=>!c.classList.contains('hidden')));
console.log('PASS: actual All/Needs-review click branches, restored cards, active states, feedback, focus, empty state and course isolation');
