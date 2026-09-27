const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('app.js','utf8');
function setup(supported=true){
 const calls=[],timers=new Map(),status={},messages=[];let voices=[],n=0;
 const engine={speaking:false,pending:false,paused:false,getVoices:()=>voices,addEventListener:(e,f)=>engine.changed=f,cancel(){calls.push('cancel')},resume(){calls.push('resume');this.paused=false},speak(t){calls.push(t)}};
 const ctx={window:supported?{speechSynthesis:engine,SpeechSynthesisUtterance:class{}}:{},SpeechSynthesisUtterance:class{constructor(text){this.text=text}},state:{locale:'en-GB'},$:()=>status,notify:m=>messages.push(m),setTimeout:f=>{timers.set(++n,f);return n},clearTimeout:id=>timers.delete(id)};
 vm.createContext(ctx);vm.runInContext(source.slice(source.indexOf('const speechEngine='),source.indexOf('function vocabPage()')),ctx);
 return {ctx,engine,calls,status,messages,timers,voices:v=>{voices=v;engine.changed()}};
}
let h=setup();h.ctx.say('quality');assert.equal(h.calls.length,1,'first tap speaks synchronously without cancel or awaiting voices');let first=h.calls[0];assert.equal(first.lang,'en-GB');assert.equal(first.volume,1);first.onstart();assert.equal(h.timers.size,0);
h.engine.speaking=true;h.engine.paused=true;h.voices([{lang:'en-GB',localService:false},{lang:'en-GB',localService:true}]);h.ctx.say('effective');assert.equal(h.calls[1],'cancel');assert.equal(h.calls[2],'resume');const second=h.calls[3];assert.ok(second.voice.localService);first.onerror({error:'interrupted'});assert.equal(h.timers.size,1);second.onend();assert.equal(h.timers.size,0);assert.match(h.status.textContent,/播放结束/);
h=setup();h.ctx.say('quality');[...h.timers.values()][0]();assert.match(h.messages[0],/语音未启动/);assert.equal(h.calls.at(-1),'cancel');
h=setup();h.ctx.say('quality');h.calls[0].onerror({error:'not-allowed'});assert.match(h.messages[0],/直接点击/);assert.equal(h.timers.size,0);
h=setup(false);h.ctx.say('quality');assert.match(h.messages[0],/Safari/);
console.log('PASS: synchronous speech, delayed voices, local voices, paused recovery, stale events, timeout and errors');
