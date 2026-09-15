import {questions} from './questions.js';
export const KEY='raices.v1';
export const INTERVALS=[1,3,7,14,30];
export const fresh=()=>({version:1,xp:0,best:[0,0,0,0,0],advancedBest:[0,0,0],mistakes:[],srs:{},history:[],days:[],session:null});
export function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export const scores=p=>[...p.best,...(p.advancedBest||[0,0,0])];
export const unlocked=p=>Math.min(8,scores(p).findIndex(x=>x<8)+1||8);
export const localDay=()=>new Date().toLocaleDateString('en-CA');
export function addDays(day,n){const d=new Date(`${day}T12:00:00`);d.setDate(d.getDate()+n);return d.toLocaleDateString('en-CA');}
export function reviewCard(card,correct,today){if(correct){const step=Math.min((card?.step||0)+1,INTERVALS.length);const interval=INTERVALS[step-1];return {due:addDays(today,interval),interval,step};}return {due:today,interval:1,step:0};}
export function dueIds(p,today=localDay()){if(!p.srs)return [...p.mistakes||[]];return Object.entries(p.srs).filter(([,c])=>c.due<=today).sort((a,b)=>a[1].step-b[1].step||a[1].due.localeCompare(b[1].due)).map(([id])=>id);}
export function waitingCount(p,today=localDay()){return p.srs?Object.values(p.srs).filter(c=>c.due>today).length:0;}
export function hydrate(p,today=localDay()){const srs={...(p.srs||{})};(p.mistakes||[]).forEach(id=>{if(!srs[id])srs[id]={due:today,interval:1,step:0};});return {...p,srs,mistakes:dueIds({...p,srs},today)};}
export function streak(days){let d=new Date();let n=0;d.setHours(12,0,0,0);if(!days.includes(d.toLocaleDateString('en-CA')))d.setDate(d.getDate()-1);while(days.includes(d.toLocaleDateString('en-CA'))){n++;d.setDate(d.getDate()-1);}return n;}
export function makeSession(mode,level=1,ids=[],history=[]){
 let pool=mode==='level'?questions.filter(q=>q.level===level):mode==='review'||mode==='focus'?questions.filter(q=>ids.includes(q.id)):level===6?questions.filter(q=>q.level>5):questions;
 const seen=new Set(history.flatMap(h=>h.items.map(i=>i.id)));
 const prioritize=a=>[...shuffle(a.filter(q=>!seen.has(q.id))),...shuffle(a.filter(q=>seen.has(q.id)))];
 const ordered=mode==='review'?ids.map(id=>pool.find(q=>q.id===id)).filter(Boolean).slice(0,10):null;
 const chosen=ordered||(mode==='exam'&&level!==6?shuffle([...prioritize(pool.filter(q=>q.level<=5)).slice(0,5),...prioritize(pool.filter(q=>q.level>5)).slice(0,5)]):prioritize(pool).slice(0,10));
 return {mode,level,index:0,items:chosen.map(q=>({id:q.id,order:shuffle([0,1,2,3]),answer:null})),started:Date.now()};
}
export function pauseSession(s,now=Date.now()){if(!s||s.paused)return s;return {...s,paused:true,pausedAt:now};}
export function resumeSession(s,now=Date.now()){if(!s||!s.paused)return s;const elapsed=Math.max(0,(s.pausedAt||now)-s.started);return {mode:s.mode,level:s.level,index:s.index,items:s.items,started:now-elapsed};}
export function elapsedMs(s,now=Date.now()){if(!s)return 0;return Math.max(0,(s.paused?s.pausedAt||now:now)-s.started);}
export function complete(p,s,today=localDay()){
 const score=s.items.filter(i=>i.answer===0).length;
 const srs={...(p.srs||{})};
 (p.mistakes||[]).forEach(id=>{if(!srs[id])srs[id]={due:today,interval:1,step:0};});
 s.items.forEach(i=>{srs[i.id]=reviewCard(srs[i.id],i.answer===0,today);});
 const mistakes=dueIds({srs},today);
 const best=[...p.best];
 const advancedBest=[...(p.advancedBest||[0,0,0])];
 if(s.mode==='level'){const target=s.level>5?advancedBest:best;const index=s.level>5?s.level-6:s.level-1;target[index]=Math.max(target[index],score);}
 const earned=score*10+(score===s.items.length?25:0);
 const result={id:s.started,mode:s.mode,level:s.level,score,total:s.items.length,earned,date:today,items:s.items};
 return {...p,xp:p.xp+earned,best,advancedBest,mistakes,srs,days:[...new Set([...p.days,today])],history:[result,...p.history].slice(0,50),session:null};
}
export function valid(p){
 const int=(x,min,max)=>Number.isSafeInteger(x)&&x>=min&&x<=max;
 const ints=(a,n,max)=>Array.isArray(a)&&a.length===n&&a.every(x=>int(x,0,max));
 const ids=new Set(questions.map(q=>q.id));
 const items=a=>Array.isArray(a)&&a.length>0&&a.length<=10&&a.every(i=>i&&ids.has(i.id)&&ints(i.order,4,3)&&new Set(i.order).size===4&&(i.answer===null||int(i.answer,0,3)))&&new Set(a.map(i=>i.id)).size===a.length;
 const mode=x=>['level','exam','review','focus'].includes(x);
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&Number.isFinite(Date.parse(x));
 const base=x=>x&&mode(x.mode)&&int(x.level,1,8)&&items(x.items)&&((x.mode!=='level'&&x.mode!=='exam')||x.items.length===10)&&(x.mode!=='level'||x.items.every(i=>questions.find(q=>q.id===i.id).level===x.level));
 const pauseOk=s=>(s.paused===undefined||s.paused===false)&&s.pausedAt===undefined||s.paused===true&&Number.isFinite(s.pausedAt)&&s.pausedAt>=s.started&&s.pausedAt<=Date.now()+60000;
 const session=s=>base(s)&&int(s.index,0,s.items.length-1)&&Number.isFinite(s.started)&&s.started>0&&s.started<=Date.now()+60000&&pauseOk(s)&&s.items.every((i,n)=>n<s.index?i.answer!==null:n>s.index?i.answer===null:true);
 const srsOk=p.srs===undefined||(p.srs!==null&&typeof p.srs==='object'&&!Array.isArray(p.srs)&&Object.keys(p.srs).length<=questions.length&&Object.entries(p.srs).every(([id,c])=>ids.has(id)&&c&&day(c.due)&&int(c.interval,1,365)&&int(c.step,0,INTERVALS.length)));
 return !!(p&&p.version===1&&int(p.xp,0,100000000)&&ints(p.best,5,10)&&(p.advancedBest===undefined||ints(p.advancedBest,3,10))&&Array.isArray(p.mistakes)&&p.mistakes.length<=questions.length&&p.mistakes.every(id=>ids.has(id))&&srsOk&&Array.isArray(p.days)&&p.days.length<=10000&&p.days.every(day)&&Array.isArray(p.history)&&p.history.length<=50&&p.history.every(h=>base(h)&&Number.isFinite(h.id)&&h.items.every(i=>i.answer!==null)&&h.score===h.items.filter(i=>i.answer===0).length&&h.total===h.items.length&&h.earned===h.score*10+(h.score===h.total?25:0)&&day(h.date))&&(p.session===null||session(p.session)));
}
export function load(){try{const p=JSON.parse(localStorage.getItem(KEY));return valid(p)?hydrate(p):fresh();}catch{return fresh();}}
