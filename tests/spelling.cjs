const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8');
let input={value:'',setAttribute(){},focus(){}},result={textContent:'',style:{}},message='',saves=0;
const state={wordAttempts:{},mastered:{}};
const context={state,findWord:id=>id==='v01'?{id,word:'quality'}:undefined,document:{getElementById:()=>({querySelector:s=>s==='input'?input:result})},notify:s=>message=s,key:id=>'lecture-1:'+id,wordUpdate(){},save(){saves++}};
vm.createContext(context);
vm.runInContext(source.slice(source.indexOf('function checkSpelling('),source.indexOf("document.addEventListener('keydown'")),context);
// Exercise the actual delegated click branch, including the regression's data key.
function click(){context.d={spellcheck:'v01'};vm.runInContext('(function(){'+source.slice(source.indexOf('if(d.spellcheck)'),source.indexOf('\nif(d.check)'))+'})()',context)}
click();assert.match(result.textContent,/Enter a word/);assert.equal(saves,0);
input.value='wrong';click();assert.match(result.textContent,/Try again/);assert.equal(state.mastered['lecture-1:v01'],undefined);
input.value=' QUALITY ';click();assert.match(result.textContent,/Correct!/);assert.match(message,/Correct!/);assert.equal(state.mastered['lecture-1:v01'],true);assert.equal(state.wordAttempts['lecture-1:v01'],2);
console.log('PASS: actual click branch, empty input, incorrect/correct spelling, feedback, mastery, save calls and attempt count');
