const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8'),bank=JSON.parse(fs.readFileSync('data/exam1.json'));
let output='',saved=0;const elements={},listeners={};
const ctx={document:{addEventListener(type,fn){(listeners[type]??=[]).push(fn)},getElementById(id){return elements['#'+id]}},Event:class {constructor(type){this.type=type}},state:{},examBank:bank,Math,Date,save(){saved++},notify(){},window:{scrollTo(){}},esc:s=>String(s??''),bi:o=>o.en+' / '+o.zh,shell:s=>output=s,$:s=>elements[s]??{value:'',classList:{add(){}}}};vm.createContext(ctx);
vm.runInContext(source.slice(source.indexOf('function normalize('),source.indexOf('function feedback(')),ctx);
vm.runInContext(source.slice(source.indexOf('function examAssess('),source.indexOf("examNav.addEventListener('click'")),ctx);
assert.equal(bank.questions.length,80);assert.equal(bank.cases.length,7);
const all=[...bank.questions,...bank.cases];assert.equal(new Set(all.map(q=>q.id)).size,87);
for(const q of all){for(const lang of ['label','zh'])assert.ok(ctx.examAssess(q,q.points.map(p=>p[lang]).join('; ')).full,q.id+lang);assert.ok(!ctx.examAssess(q,'').full)}
assert.ok(ctx.examAssess(bank.questions.find(q=>q.id==='E1-51'),'A systematic approach to identifying potential causes of system failures.').full);
const pdca=bank.questions.find(q=>q.ordered);assert.ok(!ctx.examAssess(pdca,'Act Check Do Plan').full);
ctx.examHome();assert.ok(output.includes('案例分析 · 7题'));assert.ok(output.includes('短答练习 · 80题'));
for(const mode of ['study','practice','cases']){ctx.examStudy(mode);assert.ok(output.includes('查看参考答案'));assert.ok(!/IMG_|逐图核对|照片对应表|黄色/.test(output));if(mode!=='study')assert.ok(output.includes('data-exam="check:'))}
ctx.examStudy('practice','2');assert.ok(output.includes('E1-11'));assert.ok(!output.includes('E1-01'));
const q=bank.cases[0],id=q.id;elements['#practice-input-'+id]={value:'FMEA',id:'practice-input-'+id,style:{},scrollHeight:180,focus(){this.focused=true}};elements['#practice-feedback-'+id]={innerHTML:''};elements['#practice-reference-'+id]={open:true};
ctx.examPracticeAction('check',id);assert.ok(elements['#practice-feedback-'+id].innerHTML.includes('待补充'));assert.equal(ctx.state.exam1Practice[id],'FMEA');
elements['#practice-input-'+id].value=q.points.map(p=>p.label).join('; ');ctx.examPracticeAction('check',id);assert.ok(elements['#practice-feedback-'+id].innerHTML.includes('已匹配全部关键词'));
ctx.examPracticeAction('retry',id);assert.equal(elements['#practice-input-'+id].value,'');assert.equal(elements['#practice-reference-'+id].open,false);assert.ok(!ctx.state.exam1Practice[id]);
ctx.examStart('20');assert.equal(ctx.state.exam1Run.ids.length,20);assert.equal(new Set(ctx.state.exam1Run.ids).size,20);
const first=bank.questions[0];ctx.state.exam1Run={ids:[first.id],index:0,answers:{},startedAt:Date.now(),finished:false};elements['#exam-input']={value:first.points.map(p=>p.label).join('; ')};ctx.examNext();assert.ok(ctx.state.exam1Run.finished);assert.equal(ctx.state.exam1Run.index,1);ctx.examNext();assert.equal(ctx.state.exam1Run.index,1);
ctx.state.exam1Run.answers[first.id]='';ctx.examStart('missed');assert.deepEqual(Array.from(ctx.state.exam1Run.ids),[first.id]);
const html=fs.readFileSync('dist/index.html','utf8'),embedded=JSON.parse(html.match(/id="exam1-json" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.equal(embedded.questions.length,80);assert.equal(embedded.cases.length,7);
const notes=fs.readFileSync('notes/Exam1_Keyword_Revision.md','utf8');assert.ok(!/IMG_|逐图核对|照片对应表/.test(notes));assert.ok(notes.includes('案例分析练习'));
console.log('PASS: 80 short answers, 7 cases, bilingual checks, immediate feedback, retry, lecture filters, saved answers, mock flow, clean revision content and build embedding');

const editor=ctx.examEditor(bank.cases[0],'test-editor','abc','');assert.ok(editor.includes('for="test-editor"'));assert.ok(editor.includes('case-answer'));assert.ok(editor.includes('3 字符'));
const input={id:'test-editor',value:'first',style:{},scrollHeight:220,selectionStart:5,selectionEnd:5,focus(){},setRangeText(text,start,end){this.value=this.value.slice(0,start)+text+this.value.slice(end)},dispatchEvent(event){assert.equal(event.type,'input');ctx.resizeExamInput(this)}};
elements['#test-editor']=input;elements['#count-test-editor']={textContent:''};
listeners.click[0]({target:{closest(){return {dataset:{answerLine:'test-editor'}}}}});assert.equal(input.value,'first\n');assert.equal(elements['#count-test-editor'].textContent,'6 字符');assert.equal(input.style.height,'220px');
console.log('PASS: labelled full-width editor, case layout, newline insertion and automatic sizing');

const original=bank.questions.find(q=>q.id==='E1-80');assert.equal(original.question.en,'Encourage critical reflection on barriers to adoption such as resistance to change and resource constraints');assert.ok(ctx.examAssess(original,original.answer.en).full);ctx.examStudy('practice','3');assert.ok(output.includes(original.question.en));assert.ok(output.includes('check:E1-80'));assert.ok(output.includes(original.answer.en));
console.log('PASS: original adoption-barriers prompt, practice input and complete model answer');
