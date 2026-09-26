'use strict';
(()=>{
const source=JSON.parse(document.getElementById('courses-json').textContent);
const lexicon=JSON.parse(document.getElementById('vocab-json').textContent);
const STORAGE='sehs5001-academy-v2';
const defaults={completed:{},answers:{},checks:{},mastered:{},wordAttempts:{},selectedLecture:'lecture-1',lang:'both',locale:'en-GB'};
let state;try{state={...defaults,...JSON.parse(localStorage.getItem(STORAGE)||'{}')}}catch(e){state={...defaults}}
let lectures=[{id:'lecture-1',title:{en:'Fundamentals of Quality Management in Healthcare',zh:'医疗质量管理基础'},date:'8 September 2026',course:source,vocab:lexicon}];
const builtInPackets=JSON.parse(document.getElementById('extra-courses-json')?.textContent||'[]');
for(const packet of builtInPackets){lectures.push({id:packet.lectureId,title:packet.title,date:packet.date,course:packet.course,vocab:packet.vocab})}
let current=lectures[0],view='lecture',opened=null;
const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bi=(o,bold=false)=>`<span class="en">${bold?'<b>':''}${esc(o?.en||'')}${bold?'</b>':''}</span><span class="zh">${bold?'<b>':''}${esc(o?.zh||'')}${bold?'</b>':''}</span>`;
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state))}catch(e){notify('Storage unavailable. Export your progress / 无法保存，请导出进度。')}}
function notify(s){let n=$('#toast');n.textContent=s;n.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>n.classList.remove('show'),3300)}
function modules(){return current.course.modules}
function chapters(){return modules().flatMap(m=>m.sections.map((s,i)=>({id:`${m.id}-${String(i+1).padStart(2,'0')}`,module:m,section:s,index:i}))) }
function cap(s){return String(s).replace(/\b\w/g,x=>x.toUpperCase())}
function qFor(c){const explicit=current.course.questions.filter(q=>q.chapterId===c.id);return explicit.concat(current.course.questions.filter(q=>!q.chapterId).filter(q=>q.module===c.module.id&&q.slide===c.section.slide).filter(q=>{const isExpansion=c.section.title.startsWith('PDSA =');if(q.id==='L1-Q12'||q.id==='L1-Q17')return isExpansion;const first=chapters().find(x=>x.module.id===c.module.id&&x.section.slide===c.section.slide);return first.id===c.id}))}
function vocFor(c){return current.vocab.items.filter(v=>{
 const owning=chapters().find(x=>(x.section.pages||[x.section.slide]).includes(v.slide)&& (v.word!=='PDSA'||current.id!=='lecture-1'||x.section.title.startsWith('PDSA =')));
 return owning?.id===c.id;
})}

function key(id){return `${current.id}:${id}`}
function completion(){let x=chapters();return x.filter(c=>state.completed[key(c.id)]).length}
function pct(){return Math.round(completion()/Math.max(1,chapters().length)*100)}
function mastered(){return current.vocab.items.filter(v=>state.mastered[key(v.id)]).length}
function updateNav(){let nav=$('#lecture-nav');nav.innerHTML=lectures.map(l=>`<button class="lecture-button ${current.id===l.id?'active':''}" data-lecture="${esc(l.id)}">📘 ${esc(l.id.replace('-',' ').replace(/\b\w/g,x=>x.toUpperCase()))}<small style="display:block;color:#abc2d7;font-weight:400">${esc(l.title.zh)}</small></button>${current.id===l.id?l.course.modules.map(m=>`<button class="chapter-mini" data-go-module="${esc(m.id)}">${esc(m.id)} · ${esc(m.title.zh)} <span>${m.sections.filter((s,i)=>state.completed[key(`${m.id}-${String(i+1).padStart(2,'0')}`)]).length}/${m.sections.length}</span></button>`).join(''):''}`).join('')+'<div class="soon">＋ 后续课程可导入JSON，保留各讲已学进度。<br/>Import additional lessons when available.</div>';
$('#word-count').textContent=`${mastered()}/${current.vocab.items.length}`;
all('.nav-tool').forEach(el=>el.classList.remove('active'));
$('#breadcrumb').textContent=`SEHS5001 / ${current.id.replace('-',' ').toUpperCase()} / ${view==='lecture'?'Course':cap(view)}`;
all('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===state.lang));
$('#voice-locale').value=state.locale;document.body.classList.remove('lang-zh','lang-en');if(state.lang!=='both')document.body.classList.add('lang-'+state.lang);
}
function shell(inner){if(document.getElementById('selection-tools'))document.getElementById('selection-tools').hidden=true;$('#view').innerHTML=`<div class="layout">${inner}</div>`;updateNav()}
function scrollToChapter(id){let el=document.getElementById('chapter-'+id);if(el){el.scrollIntoView({behavior:'smooth',block:'start'});if(el.classList.contains('closed'))toggle(id,true)}}
function lectureHome(start){view='lecture';const parts=modules().map(m=>{let cs=chapters().filter(c=>c.module.id===m.id);return `<section class="spaced"><div class="chapter-title"><span class="badge">MODULE ${esc(m.id)}</span><h2>${bi(m.title)}</h2></div><p class="muted">${bi(m.objective)}</p>${cs.map(c=>renderChapter(c)).join('')}</section>`}).join('');shell(`<section class="hero"><div class="eyebrow">${esc(current.id.toUpperCase().replace('-',' '))} · ${esc(current.date)}</div><h1>${bi(current.title)}</h1><p>${bi(current.course.sourceNotice)}</p><div class="statrow"><div class="stat"><b>${chapters().length}</b><small>Chapters · 小节</small></div><div class="stat"><b>${completion()}/${chapters().length}</b><small>Completed · 已学</small></div><div class="stat"><b>${mastered()}/${current.vocab.items.length}</b><small>Remembered · 单词</small></div></div><div class="progress"><i style="width:${pct()}%"></i></div><div class="nextrow"><span class="muted">Lecture progress · 课程进度 ${pct()}%</span><button class="button primary" id="continue">▶ ${completion()?'继续学习 / Continue':'从第一小节开始 / Start'}</button></div></section><div class="small-note">💡 任意英文可划词：选中 → 发音 / 拼读 / 加入词典。<br>瀑布式学习：每节依次阅读知识点 → 点击“学完了，开始练习” → 作答核对 → 查看反馈 → 下一知识点；单词听写可按需展开。章节可随时展开复习。<br>Waterfall learning: read → listen → recall → answer → advance.</div>${parts}<p class="small-note">${esc(current.course.sourceFooter||'资料依据：Lecture 1 PDF第6–31页及老师9月8日课堂转录。词汇IPA、拼写训练与PDSA四步骤说明为学习辅助内容。')}</p>`);
if(start){opened=start;toggle(start,true);requestAnimationFrame(()=>document.getElementById('chapter-'+start)?.scrollIntoView({behavior:'smooth',block:'start'}))}
}
const CHAPTER_ZH={'01-01':'香港Q-Mark优质产品认证','01-02':'理解医疗质量的含义','01-03':'医疗质量的关键维度','01-04':'利益相关者的质量观点','02-01':'质量成本的类型：预防、评估与失败','02-02':'质量成本对医疗机构的影响','02-03':'降低质量成本的策略','03-01':'质量保证的定义与目标','03-02':'质量保证系统的核心组成','03-03':'医疗质量保证工具与技术','03-04':'PDSA：计划—执行—研究—行动','04-01':'医疗复杂系统的定义','04-02':'医疗机构的相互作用与相互依赖','04-03':'复杂系统的管理挑战','05-01':'系统行为对医疗结果的影响','05-02':'患者安全与风险管理','05-03':'建立医疗安全文化','05-04':'第一讲总结'};
function renderChapter(c){const done=state.completed[key(c.id)];return `<article class="part closed" id="chapter-${esc(c.id)}"><button class="part-header" data-open="${esc(c.id)}" aria-expanded="false"><span class="stepnum">${esc(c.id)}</span><span style="flex:1"><h3>${esc(c.section.title.replace(/^PPT \d+ · /,''))}</h3><small>${esc(c.section.titleZh||(current.id==='lecture-1'?CHAPTER_ZH[c.id]:'')||'')} · PPT ${esc((c.section.pages||[c.section.slide]).join(', '))} · ${vocFor(c).length} vocab · ${qFor(c).length} questions ${done?'· ✓ completed':''}</small></span><span class="caret">⌄</span></button><div class="part-content hidden" id="body-${esc(c.id)}"></div></article>`}
function safeHtml(input){let t=document.createElement('template');t.innerHTML=String(input||'');t.content.querySelectorAll('script,iframe,object,embed,link,meta,style,form,svg,math').forEach(x=>x.remove());t.content.querySelectorAll('*').forEach(n=>[...n.attributes].forEach(a=>{if(/^on/i.test(a.name)||a.name==='style'||['href','src','xlink:href'].includes(a.name)&&/^\s*(javascript:|data:)/i.test(a.value))n.removeAttribute(a.name)}));return t.innerHTML}
function toggle(id,force){let root=document.getElementById('chapter-'+id);if(!root)return;let panel=root.querySelector('.part-content');let visible=force??panel.classList.contains('hidden');if(visible&&!panel.dataset.rendered){let c=chapters().find(x=>x.id===id);panel.innerHTML=renderChapterBody(c);panel.dataset.rendered='1';makeInlineWords(panel,c)}panel.classList.toggle('hidden',!visible);root.classList.toggle('closed',!visible);root.querySelector('[data-open]').setAttribute('aria-expanded',String(visible));root.querySelector('.caret').textContent=visible?'⌃':'⌄';opened=visible?id:null;}
function renderChapterBody(c){
 const vocab=vocFor(c),qs=qFor(c),cs=chapters(),i=cs.findIndex(x=>x.id===c.id),next=cs[i+1];
 const checked=qs.filter(q=>state.checks[key(q.id)]).length;
 return `<div class="eyebrow">01 / CONCEPT · 知识点</div><div class="lesson-content">${safeHtml(c.section.html)}</div>
 <div class="nextrow"><button class="button primary" data-start-practice="${esc(c.id)}" aria-controls="practice-${esc(c.id)}" aria-expanded="false">学完了，开始练习 / Practice now →</button><span class="muted">${qs.length} 道本节练习 · 支持中英文作答</span></div>
 <section class="hidden" id="practice-${esc(c.id)}" tabindex="-1" aria-label="本节练习" style="scroll-margin-top:100px"><div class="subhead">02 / PRACTICE · 学完即练</div><p class="small-note" id="practice-status-${esc(c.id)}">已核对 ${checked}/${qs.length} 题。关键词匹配仅供自查，不等于老师评分。</p>${qs.map(renderQ).join('')}
 <div class="nextrow"><button class="button" data-back-concept="${esc(c.id)}">↑ 返回知识点</button>${next?`<button class="button primary" data-next="${esc(next.id)}">完成本节，继续下一知识点 →</button>`:'<button class="button primary" data-finish-lecture="'+esc(c.id)+'">完成本节，进入总复习 →</button>'}</div></section>
 <details class="spaced"><summary class="button">🔊 本节重点单词与听写 / Vocabulary (${vocab.length})</summary><div class="vocab-wrap">${vocab.map(wordCard).join('')}</div><p class="small-note">正文中也可随时划词发音或加入个人词典。</p></details>
 <div class="nextrow"><button class="button green" data-complete="${esc(c.id)}">${state.completed[key(c.id)]?'✓ 已完成 · 取消完成':'✓ 标记已学完'}</button></div>`;
}

function wordCard(w){let done=!!state.mastered[key(w.id)];return `<div class="word-card ${done?'mastered':''}" id="word-${esc(w.id)}"><div class="wordline"><div><button type="button" class="inlineword" title="点击播放 / Play" data-say="${esc(w.word)}">${esc(w.word)} 🔊</button><div class="ipa">${esc(w.ipa)}</div></div><span class="badge ${done?'':'gold'}">${done?'✓ Remembered':'New'}</span></div><div class="translation">${esc(w.zh)}</div><div class="example en">${esc(w.example)}</div><div class="word-actions"><button class="button sm" data-say="${esc(w.word)}">▶ Listen</button><button class="button sm" data-spell="${esc(w.id)}">⌨ Spell · 听写</button><button class="button sm green" data-master="${esc(w.id)}">${done?'↩ 重学':'✓ 记住了'}</button></div><div class="spelling hidden" id="spell-${esc(w.id)}"><input data-spelling="${esc(w.id)}" placeholder="Listen and type / 听写" aria-label="Spell ${esc(w.word)}" autocomplete="off"><button class="button sm primary" data-spellcheck="${esc(w.id)}">核对</button><span class="spelling-result" aria-live="polite"></span></div></div>`}
function normalize(s){return String(s||'').normalize('NFKC').toLowerCase().replace(/[–—−]/g,'-').replace(/[^\p{L}\p{N}\p{Script=Han}]+/gu,' ').replace(/\s+/g,' ').trim()}
function matches(input,alias){let a=normalize(alias),s=normalize(input);if(!s||!a)return false;if(/[\p{Script=Han}]/u.test(a))return s.includes(a);return (' '+s+' ').includes(' '+a+' ')}
function evaluate(q,value){let found=q.rubric.filter(r=>r.accept.some(a=>matches(value,a))).map(r=>r.label);return {grade:found.length===q.rubric.length?'full':found.length?'partial':'review',found,missing:q.rubric.map(r=>r.label).filter(x=>!found.includes(x)),checkedAt:new Date().toISOString()}}
function feedback(q,c){return `<div class="feedback ${c.grade==='full'?'good':c.grade}"><b>${c.grade==='full'?'✓ 匹配全部预设知识点 / Matched all rubric concepts':c.grade==='partial'?'◐ 部分匹配，请补全 / Partial match':'○ 未匹配预设词，可查看参考答案 / Compare reference'}</b><p>${c.found.length}/${q.rubric.length} key points · ${c.missing.length?'待补充 / Missing: '+c.missing.map(esc).join('、'):''}</p><small>关键词核对不等于人工评分；正确同义表达可能误判。<br>Keyword matching is not semantic grading; valid paraphrases may be missed.</small></div>`}
function renderQ(q){let s=state.answers[key(q.id)]||'',c=state.checks[key(q.id)];return `<div class="qbox" id="question-${esc(q.id)}"><div class="eyebrow">${esc(q.id)} · PPT ${esc(q.slide)}</div><div class="quiz-q"><div class="grid"><div class="en"><h4>${esc(q.question.en)}</h4></div><div class="zh"><h4>${esc(q.question.zh)}</h4></div></div></div><textarea data-answer="${esc(q.id)}" aria-label="Answer ${esc(q.id)}" placeholder="Write your answer here / 在这里输入中英文答案">${esc(s)}</textarea><div class="actions"><button class="button primary" data-check="${esc(q.id)}">校验答案 / Check</button><button class="button" data-retry="${esc(q.id)}">重新练习 / Retry</button><button class="button" data-answer-reveal="${esc(q.id)}">显示答案 / Show answer</button></div><div id="feedback-${esc(q.id)}" role="status" aria-live="polite">${c?feedback(q,c):''}</div><div class="answer hidden" id="answer-${esc(q.id)}"><b>REFERENCE / 参考答案</b><div class="grid"><div class="en">${esc(q.answer.en)}</div><div class="zh">${esc(q.answer.zh)}</div></div><small>${esc(q.source)}</small></div></div>`}
function makeInlineWords(panel,c){let holder=panel.querySelector('.lesson-content');if(!holder)return;let list=vocFor(c).filter(w=>!/^[A-Z]{3,}$/.test(w.word)).sort((a,b)=>b.word.length-a.word.length);let seen=new Set(),nodes=[];const walker=document.createTreeWalker(holder,NodeFilter.SHOW_TEXT,{acceptNode(n){if(!n.nodeValue.trim()||n.parentElement.closest('button,.tag,script,style'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});while(walker.nextNode())nodes.push(walker.currentNode);for(let n of nodes){let s=n.nodeValue;for(let w of list){if(seen.has(w.id))continue;let pattern=new RegExp('(?<![a-z])'+w.word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![a-z])','i'),m=s.match(pattern);if(!m)continue;let frag=document.createDocumentFragment();frag.appendChild(document.createTextNode(s.slice(0,m.index)));let b=document.createElement('button');b.className='inlineword';b.dataset.say=w.word;b.title=w.zh+' · '+w.ipa;b.textContent=m[0]+' 🔊';frag.appendChild(b);frag.appendChild(document.createTextNode(s.slice(m.index+m[0].length)));n.replaceWith(frag);seen.add(w.id);break}}}
function say(word){if(!('speechSynthesis'in window)){notify('此浏览器没有语音合成功能 / Speech unavailable');return}speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(word);t.lang=state.locale;t.rate=.83;t.pitch=1;let voices=speechSynthesis.getVoices();let v=voices.find(x=>x.lang.toLowerCase()===state.locale.toLowerCase())||voices.find(x=>x.lang.toLowerCase().startsWith('en-'));if(v)t.voice=v;t.onerror=e=>{if(!['canceled','interrupted'].includes(e.error))notify('播放失败。检查浏览器音量或切换英式/美式语音。')};speechSynthesis.speak(t)}
function vocabPage(){view='vocab';let allw=current.vocab.items;let due=allw.filter(v=>!state.mastered[key(v.id)]);shell(`<section class="hero"><div class="eyebrow">VOCABULARY · 术语与发音</div><h1>🔊 Vocabulary Lab / 单词记忆实验室</h1><p>按课件页码集中复习单词，点击即可听英式或美式读音，使用听写训练记忆。词汇释义、IPA（如有）和例句为补充学习材料。</p><div class="statrow"><div class="stat"><b>${mastered()}/${allw.length}</b><small>Remembered</small></div><div class="stat"><b>${due.length}</b><small>To review · 待记</small></div></div><button class="button primary" id="play-due">▶ 播放下一个待记单词</button></section><div class="subhead">All vocabulary / 所有词汇</div><div class="vocab-wrap">${allw.map(wordCard).join('')}</div>${dictionaryHTML()}`);$('#go-words').classList.add('active')}
function reviewPage(){view='review';let q=current.course.questions,done=q.filter(x=>state.checks[key(x.id)]),needs=q.filter(x=>state.checks[key(x.id)]?.grade!=='full');shell(`<section class="hero"><div class="eyebrow">REVIEW · 课后复习</div><h1>Practice & Recall / 自由作答与校验</h1><p>已检查 ${done.length}/${q.length} · 待完成或待复习 ${needs.length}。可重复提交，查看参考答案。</p><div class="actions" style="margin-top:14px"><button class="button primary" id="only-missed">仅显示待复习题 / Needs review</button><button class="button" id="show-all">全部试题 / All</button></div></section><div id="review-list">${q.map(renderQ).join('')}</div>`);$('#go-review').classList.add('active')}
function progressPage(){view='progress';shell(`<section class="hero"><div class="eyebrow">LEARNING RECORD</div><h1>📊 Progress / 学习进度</h1><div class="statrow"><div class="stat"><b>${pct()}%</b><small>Lecture completion</small></div><div class="stat"><b>${mastered()}/${current.vocab.items.length}</b><small>Words remembered</small></div><div class="stat"><b>${current.course.questions.filter(q=>state.checks[key(q.id)]).length}/${current.course.questions.length}</b><small>Answers checked</small></div></div><div class="progress"><i style="width:${pct()}%"></i></div></section><div class="spaced"><h2>Chapter progress / 小节完成情况</h2>${modules().map(m=>`<div class="review-item"><h3>${esc(m.title.en)} / ${esc(m.title.zh)}</h3><p class="muted">${m.sections.filter((s,i)=>state.completed[key(`${m.id}-${String(i+1).padStart(2,'0')}`)]).length}/${m.sections.length} chapters completed</p><button class="button" data-go-module="${esc(m.id)}">继续学习 / Continue →</button></div>`).join('')}</div><p class="small-note">学习进度仅保存在当前浏览器。建议定期导出JSON备份，以免清除浏览器数据后丢失。<br>Data stays in this browser; export backups regularly.</p>`);$('#go-progress').classList.add('active')}
function exportProgress(){let payload={format:'SEHS5001_ACADEMY_PROGRESS',version:2,date:new Date().toISOString(),state};download('SEHS5001_learning_progress.json',JSON.stringify(payload,null,2))}
function download(name,content){let u=URL.createObjectURL(new Blob([content],{type:'application/json'}));let a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),500)}
function importJSON(t){let v=JSON.parse(t);if(v.format==='SEHS5001_ACADEMY_PROGRESS'){if(!confirm('此操作将覆盖当前学习进度，确定导入吗？\nOverwrite local progress?'))return;state={...defaults,...v.state};save();lectureHome();notify('学习记录已恢复 / Progress restored');return}
// V2 lecture schema: {schemaVersion:2,lectureId,title:{zh,en},course:{modules,questions,sourceNotice},vocab:{items}}
if(v.schemaVersion!==2||!/^lecture-[2-9]\d*$/.test(v.lectureId)||!v.title?.en||!v.title?.zh||!v.course?.modules?.length||!Array.isArray(v.course?.questions)||!Array.isArray(v.vocab?.items))throw Error('课程JSON格式不正确，或lectureId不符合lecture-2等编号。');
if(v.course.modules.some(m=>!m.id||!Array.isArray(m.sections)||m.sections.some(s=>typeof s.html!=='string'||!s.slide)))throw Error('章节结构不完整。');
const l={id:v.lectureId,title:v.title,date:v.date||'New lecture',course:v.course,vocab:v.vocab};const exists=lectures.findIndex(x=>x.id===l.id);if(exists>=0)lectures[exists]=l;else lectures.push(l);
try{localStorage.setItem('sehs5001-extra-lectures-v2',JSON.stringify(lectures.filter(x=>x.id!=='lecture-1')))}catch(e){notify('新课程已在本次浏览中载入，但可能无法持久保存。')}
current=l;state.selectedLecture=l.id;save();lectureHome();notify(`${l.id} 已导入 / Lecture imported`)}
function setView(which){if(which==='vocab')vocabPage();else if(which==='review')reviewPage();else if(which==='progress')progressPage();else lectureHome();window.scrollTo({top:0,behavior:'smooth'})}
function updatePracticeStatus(node){const id=node.closest('.part')?.id.replace('chapter-','');const c=chapters().find(x=>x.id===id);if(!c)return;const qs=qFor(c),checked=qs.filter(q=>state.checks[key(q.id)]).length;const target=document.getElementById('practice-status-'+id);if(target)target.textContent=`已核对 ${checked}/${qs.length} 题。可重试或继续下一知识点；关键词匹配不等于人工评分。`}
function findQuestion(id){return current.course.questions.find(q=>q.id===id)}
function findWord(id){return current.vocab.items.find(v=>v.id===id)||personalWords().find(v=>v.id===id)}
function wordUpdate(id){let w=findWord(id);if(!w)return;all('#word-'+CSS.escape(id)).forEach(card=>{card.classList.toggle('mastered',!!state.mastered[key(id)]);card.querySelector('.wordline .badge').textContent=state.mastered[key(id)]?'✓ Remembered':'New';card.querySelector('[data-master]').textContent=state.mastered[key(id)]?'↩ 重学':'✓ 记住了'});$('#word-count').textContent=`${mastered()}/${current.vocab.items.length}`}
function checkSpelling(id){
 const w=findWord(id),box=document.getElementById('spell-'+id);
 if(!w||!box){notify('未找到单词，请重新打开本节 / Word unavailable');return}
 const input=box.querySelector('input'),result=box.querySelector('.spelling-result');
 const clean=s=>String(s).normalize('NFKC').trim().toLowerCase().replace(/[–—−]/g,'-').replace(/\s+/g,' ');
 const value=clean(input.value);
 if(!value){result.textContent='请先输入单词 / Enter a word first';input.setAttribute('aria-invalid','true');notify(result.textContent);input.focus();return}
 const right=value===clean(w.word);
 result.textContent=right?'✓ 拼写正确 / Correct!':'↻ 拼写不正确，请再试一次 / Try again';
 result.style.color=right?'#27805b':'#bd6d1e';
 input.setAttribute('aria-invalid',String(!right));
 state.wordAttempts[key(id)]=(state.wordAttempts[key(id)]||0)+1;
 if(right){state.mastered[key(id)]=true;wordUpdate(id)}
 save();notify(result.textContent);
}
document.addEventListener('keydown',e=>{
 if(e.key==='Enter'&&!e.isComposing&&e.target.matches('[data-spelling]')){e.preventDefault();checkSpelling(e.target.dataset.spelling)}
});
document.addEventListener('click',e=>{let n=e.target.closest('button');if(!n)return;let d=n.dataset;
if(d.startPractice){const panel=document.getElementById('practice-'+d.startPractice);panel.classList.remove('hidden');n.setAttribute('aria-expanded','true');panel.scrollIntoView({behavior:'smooth',block:'start'});panel.focus({preventScroll:true});return}
if(d.backConcept){document.getElementById('chapter-'+d.backConcept).scrollIntoView({behavior:'smooth',block:'start'});return}
if(d.retry){const box=n.closest('.qbox'),ta=box.querySelector('textarea');ta.value='';delete state.answers[key(d.retry)];delete state.checks[key(d.retry)];save();box.querySelector('[id^="feedback-"]').textContent='请重新作答 / Try again';box.querySelector('.answer').classList.add('hidden');box.querySelector('[data-answer-reveal]').textContent='显示答案 / Show answer';updatePracticeStatus(box);ta.focus();return}
if(d.finishLecture){state.completed[key(d.finishLecture)]=true;save();setView('review');return}
if(d.lang){state.lang=d.lang;save();updateNav();return}
if(d.lecture){current=lectures.find(l=>l.id===d.lecture);state.selectedLecture=current.id;save();setView('lecture');return}
if(d.goModule){setView('lecture');let c=chapters().find(c=>c.module.id===d.goModule);if(c)scrollToChapter(c.id);return}
if(d.open){toggle(d.open);return}
if(d.say){say(d.say);return}
if(d.master){state.mastered[key(d.master)]=!state.mastered[key(d.master)];save();wordUpdate(d.master);return}
if(d.spell){let el=document.getElementById('spell-'+d.spell);el.classList.toggle('hidden');if(!el.classList.contains('hidden')){let w=findWord(d.spell);say(w.word);el.querySelector('input').focus()}return}
if(d.spellcheck){checkSpelling(d.spellcheck);return}
if(d.check){let q=findQuestion(d.check),ta=document.querySelector(`[data-answer="${d.check}"]`);if(!ta.value.trim()){notify('请先输入回答 / Enter an answer first');return}state.answers[key(q.id)]=ta.value;state.checks[key(q.id)]=evaluate(q,ta.value);save();let place=ta.closest('.qbox').querySelector('#feedback-'+q.id);place.innerHTML=feedback(q,state.checks[key(q.id)]);notify('答案已核对，请查看下方反馈 / Answer checked');const answer=ta.closest('.qbox').querySelector('.answer');answer.classList.remove('hidden');ta.closest('.qbox').querySelector('[data-answer-reveal]').textContent='隐藏答案 / Hide answer';updatePracticeStatus(ta);place.scrollIntoView({behavior:'smooth',block:'nearest'});return}
if(d.answerReveal){let a=n.closest('.qbox').querySelector('#answer-'+d.answerReveal);a.classList.toggle('hidden');n.textContent=a.classList.contains('hidden')?'显示答案 / Show answer':'隐藏答案 / Hide answer';return}
if(d.complete){state.completed[key(d.complete)]=!state.completed[key(d.complete)];save();n.textContent=state.completed[key(d.complete)]?'✓ 已完成 · Mark completed':'✓ 标记已学完 · Mark complete';updateNav();return}
if(d.next){const from=n.closest('.part')?.id.replace('chapter-','');if(from){state.completed[key(from)]=true;save();toggle(from,false)}toggle(d.next,true);document.getElementById('chapter-'+d.next)?.scrollIntoView({behavior:'smooth',block:'start'});updateNav();return}
if(n.id==='continue'){let first=chapters().find(c=>!state.completed[key(c.id)])||chapters()[0];scrollToChapter(first.id);return}
if(n.id==='play-due'){let w=current.vocab.items.find(v=>!state.mastered[key(v.id)])||current.vocab.items[0];if(w){say(w.word);document.getElementById('word-'+w.id)?.scrollIntoView({behavior:'smooth',block:'center'})}return}
if(n.id==='end-lecture'){setView('review');return}
if(n.id==='only-missed'){all('#review-list>.qbox').forEach(el=>el.classList.toggle('hidden',state.checks[key(el.id.replace('question-',''))]?.grade==='full'));return}
if(n.id==='show-all'){all('#review-list>.qbox').forEach(el=>el.classList.remove('hidden'));return}
if(n.id==='go-home'){setView('lecture');return}
if(n.id==='go-words'){setView('vocab');return}
if(n.id==='go-review'){setView('review');return}
if(n.id==='go-progress'){setView('progress');return}
if(n.id==='export-progress'){exportProgress();return}
if(n.id==='import-data'){$('#import-picker').click();return}
});
document.addEventListener('input',e=>{let x=e.target;if(x.matches('[data-answer]')){state.answers[key(x.dataset.answer)]=x.value;delete state.checks[key(x.dataset.answer)];const feedbackEl=document.getElementById('feedback-'+x.dataset.answer);if(feedbackEl)feedbackEl.textContent='答案已修改，请重新核对 / Answer changed; check again';save();updatePracticeStatus(x)}});
$('#voice-locale').addEventListener('change',e=>{state.locale=e.target.value;save()});
$('#import-picker').addEventListener('change',e=>{let f=e.target.files[0];if(!f)return;f.text().then(t=>{try{importJSON(t)}catch(x){notify('导入失败 / Import failed: '+x.message)}});e.target.value=''});
// Responsive course navigation.
const sidebar=document.querySelector('.sidebar');sidebar.id='course-sidebar';
const menuButton=document.createElement('button');menuButton.type='button';menuButton.id='menu-toggle';menuButton.className='smallbtn';menuButton.textContent='☰ 课程菜单';menuButton.setAttribute('aria-controls','course-sidebar');menuButton.setAttribute('aria-expanded','false');document.querySelector('.topbar').prepend(menuButton);
const menuShade=document.createElement('button');menuShade.type='button';menuShade.id='menu-shade';menuShade.setAttribute('aria-label','关闭课程菜单');menuShade.tabIndex=-1;document.body.appendChild(menuShade);
const mobileLayout=window.matchMedia('(max-width: 980px)');
function setMenu(open,restoreFocus=false){document.body.classList.toggle('menu-open',open);menuButton.setAttribute('aria-expanded',String(open));sidebar.inert=mobileLayout.matches&&!open;if(restoreFocus)menuButton.focus()}
menuButton.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
menuShade.addEventListener('click',()=>setMenu(false,true));
sidebar.addEventListener('click',e=>{if(mobileLayout.matches&&e.target.closest('button'))setMenu(false,true)});
document.addEventListener('keydown',e=>{
 if(!mobileLayout.matches||!document.body.classList.contains('menu-open'))return;
 if(e.key==='Escape'){setMenu(false,true);return}
 if(e.key==='Tab'){const nodes=[menuButton,...sidebar.querySelectorAll('button,a,input,select')];const i=nodes.indexOf(document.activeElement);e.preventDefault();nodes[(i+(e.shiftKey?-1:1)+nodes.length)%nodes.length].focus()}
});
mobileLayout.addEventListener('change',()=>setMenu(false));setMenu(false);
// Personal dictionary and text-selection tools. Stored/exported with existing progress.
function personalWords(){return Array.isArray(state.customWords)?state.customWords:[]}
function cleanSelectedWord(text){
 const value=String(text||'').normalize('NFKC').trim().replace(/\s+/g,' ');
 return value.length<=100&&/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(value)?value:'';
}
function addPersonalWord(raw){
 const word=cleanSelectedWord(raw);
 if(!word){notify('请选择或输入英文单词/短语（最多100字符）');return false}
 if(personalWords().some(w=>w.word.toLowerCase()===word.toLowerCase())){notify('已在个人词典中 / Already saved');return true}
 const known=current.vocab.items.find(w=>w.word.toLowerCase()===word.toLowerCase());
 const entry={id:'personal-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),word:word.toLowerCase(),ipa:known?.ipa||'',zh:known?.zh||'',example:known?.example||'',lecture:current.id};
 state.customWords=[...personalWords(),entry];save();notify('已加入个人词典 / Added to your dictionary');return true;
}
function dictionaryHTML(){return `<section class="spaced" id="personal-dictionary"><h2>📖 我的词典 / My Dictionary</h2><p class="small-note">在正文中拖动选中英文，或双击单词，即可发音、逐字母拼读和收藏。手机可长按选词。也可在这里手动添加。生词释义可自行填写；词典随进度一起导出。</p><form id="dictionary-add" class="dictionary-add"><input id="dictionary-word" aria-label="添加英文单词或短语" placeholder="例如 quality / effective" maxlength="100" required><button type="submit" class="button primary">＋ 加入词典</button></form><div class="vocab-wrap">${personalWords().map(w=>`<div class="personal-entry">${wordCard(w)}<label>中文释义 / 我的笔记<input class="dictionary-note" data-word-note="${esc(w.id)}" aria-label="${esc(w.word)} 的释义" value="${esc(w.zh)}" placeholder="填写中文含义或记忆提示"></label><div class="word-actions"><button class="button sm" data-letter-say="${esc(w.word)}">A·B·C 逐字母拼读</button><a class="button sm" href="https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${encodeURIComponent(w.word)}" target="_blank" rel="noopener noreferrer">查词 ↗</a><button class="button sm" data-remove-word="${esc(w.id)}">移除</button></div></div>`).join('')||'<p class="empty">暂无收藏。试着选中 quality 或 effective 加入词典。</p>'}</div></section>`}
const selectionTools=document.createElement('div');
selectionTools.id='selection-tools';selectionTools.hidden=true;selectionTools.setAttribute('role','toolbar');selectionTools.setAttribute('aria-label','英文划词工具');
selectionTools.innerHTML='<strong id="selected-word"></strong><div class="word-actions"><button type="button" class="button sm" data-selection-action="listen">🔊 发音</button><button type="button" class="button sm" data-selection-action="spell">A·B·C 拼读</button><button type="button" class="button sm primary" data-selection-action="save">＋ 加入词典</button><button type="button" class="button sm" data-selection-action="close" aria-label="关闭划词工具">关闭</button></div>';
document.body.appendChild(selectionTools);
let selectedWord='';
function showSelectionTools(){
 const selection=window.getSelection();
 if(!selection||selection.isCollapsed)return;
 const anchor=selection.anchorNode?.parentElement,focus=selection.focusNode?.parentElement;
 if(!anchor?.closest('#view')||!focus?.closest('#view')||anchor.closest('input,textarea,[contenteditable]'))return;
 const word=cleanSelectedWord(selection.toString());
 if(!word){selectionTools.hidden=true;return}
 selectedWord=word;document.getElementById('selected-word').textContent=word;selectionTools.hidden=false;
}
document.addEventListener('selectionchange',()=>{clearTimeout(showSelectionTools.timer);showSelectionTools.timer=setTimeout(showSelectionTools,180)});
document.addEventListener('pointerup',e=>{if(!e.target.closest('#selection-tools'))setTimeout(showSelectionTools,0)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')selectionTools.hidden=true});
selectionTools.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')e.preventDefault()});
selectionTools.addEventListener('click',e=>{
 const action=e.target.closest('[data-selection-action]')?.dataset.selectionAction;
 if(action==='listen')say(selectedWord);
 if(action==='spell')say([...selectedWord].map(c=>c===' '?'next word':c==='-'?'hyphen':c).join(', '));
 if(action==='save'){addPersonalWord(selectedWord);if(view==='vocab')vocabPage()}
 if(action==='close')selectionTools.hidden=true;
});
document.addEventListener('submit',e=>{
 if(e.target.id!=='dictionary-add')return;e.preventDefault();
 if(addPersonalWord(document.getElementById('dictionary-word').value)){vocabPage();document.getElementById('personal-dictionary').scrollIntoView({block:'start'})}
});
document.addEventListener('click',e=>{
 const button=e.target.closest('button');if(!button)return;
 if(button.dataset.letterSay)say([...button.dataset.letterSay].map(c=>c===' '?'next word':c==='-'?'hyphen':c).join(', '));
 if(button.dataset.removeWord){state.customWords=personalWords().filter(w=>w.id!==button.dataset.removeWord);save();vocabPage();notify('已移除 / Removed')}
});
document.addEventListener('input',e=>{
 if(!e.target.matches('[data-word-note]'))return;
 const word=personalWords().find(w=>w.id===e.target.dataset.wordNote);if(word){word.zh=e.target.value;save()}
});

try{let extras=JSON.parse(localStorage.getItem('sehs5001-extra-lectures-v2')||'[]');if(Array.isArray(extras))lectures.push(...extras.filter(l=>l.id&&l.course?.modules&&l.vocab?.items&&!lectures.some(b=>b.id===l.id)))}catch(e){}
current=lectures.find(l=>l.id===state.selectedLecture)||lectures[0];
if(!('speechSynthesis'in window))$('#speech-status').textContent='⚠ 当前浏览器不支持语音播放';
lectureHome();
})();



