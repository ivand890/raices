import {questions} from './questions.js';
export const KEY='raices.v1';
export const fresh=()=>({version:1,xp:0,best:[0,0,0,0,0],advancedBest:[0,0,0],mistakes:[],history:[],days:[],session:null});
export function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export const scores=p=>[...p.best,...(p.advancedBest||[0,0,0])];
export const unlocked=p=>Math.min(8,scores(p).findIndex(x=>x<8)+1||8);
export const localDay=()=>new Date().toLocaleDateString('en-CA');
export function streak(days){let d=new Date();let n=0;d.setHours(12,0,0,0);if(!days.includes(d.toLocaleDateString('en-CA')))d.setDate(d.getDate()-1);while(days.includes(d.toLocaleDateString('en-CA'))){n++;d.setDate(d.getDate()-1);}return n;}
export function makeSession(mode,level=1,ids=[],history=[]){
 let pool=mode==='level'?questions.filter(q=>q.level===level):mode==='review'||mode==='focus'?questions.filter(q=>ids.includes(q.id)):level===6?questions.filter(q=>q.level>5):questions;
 const seen=new Set(history.flatMap(h=>h.items.map(i=>i.id)));
 const prioritize=a=>[...shuffle(a.filter(q=>!seen.has(q.id))),...shuffle(a.filter(q=>seen.has(q.id)))];
 const chosen=mode==='exam'&&level!==6?shuffle([...prioritize(pool.filter(q=>q.level<=5)).slice(0,5),...prioritize(pool.filter(q=>q.level>5)).slice(0,5)]):prioritize(pool).slice(0,10);
 return {mode,level,index:0,items:chosen.map(q=>({id:q.id,order:shuffle([0,1,2,3]),answer:null})),started:Date.now()};
}
export function complete(p,s){const score=s.items.filter(i=>i.answer===0).length;const mistakes=new Set(p.mistakes);s.items.forEach(i=>i.answer===0?mistakes.delete(i.id):mistakes.add(i.id));const best=[...p.best];const advancedBest=[...(p.advancedBest||[0,0,0])];if(s.mode==='level'){const target=s.level>5?advancedBest:best;const index=s.level>5?s.level-6:s.level-1;target[index]=Math.max(target[index],score);}const earned=score*10+(score===s.items.length?25:0);const result={id:s.started,mode:s.mode,level:s.level,score,total:s.items.length,earned,date:localDay(),items:s.items};return {...p,xp:p.xp+earned,best,advancedBest,mistakes:[...mistakes],days:[...new Set([...p.days,localDay()])],history:[result,...p.history].slice(0,50),session:null};}
export function valid(p){
 const int=(x,min,max)=>Number.isSafeInteger(x)&&x>=min&&x<=max;
 const ints=(a,n,max)=>Array.isArray(a)&&a.length===n&&a.every(x=>int(x,0,max));
 const ids=new Set(questions.map(q=>q.id));
 const items=a=>Array.isArray(a)&&a.length>0&&a.length<=10&&a.every(i=>i&&ids.has(i.id)&&ints(i.order,4,3)&&new Set(i.order).size===4&&(i.answer===null||int(i.answer,0,3)))&&new Set(a.map(i=>i.id)).size===a.length;
 const mode=x=>['level','exam','review','focus'].includes(x);
 const day=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&Number.isFinite(Date.parse(x));
 const base=x=>x&&mode(x.mode)&&int(x.level,1,8)&&items(x.items)&&((x.mode!=='level'&&x.mode!=='exam')||x.items.length===10)&&(x.mode!=='level'||x.items.every(i=>questions.find(q=>q.id===i.id).level===x.level));
 const session=s=>base(s)&&int(s.index,0,s.items.length-1)&&Number.isFinite(s.started)&&s.started>0&&s.started<=Date.now()+60000&&s.items.every((i,n)=>n<s.index?i.answer!==null:n>s.index?i.answer===null:true);
 return !!(p&&p.version===1&&int(p.xp,0,100000000)&&ints(p.best,5,10)&&(p.advancedBest===undefined||ints(p.advancedBest,3,10))&&Array.isArray(p.mistakes)&&p.mistakes.length<=questions.length&&p.mistakes.every(id=>ids.has(id))&&Array.isArray(p.days)&&p.days.length<=10000&&p.days.every(day)&&Array.isArray(p.history)&&p.history.length<=50&&p.history.every(h=>base(h)&&Number.isFinite(h.id)&&h.items.every(i=>i.answer!==null)&&h.score===h.items.filter(i=>i.answer===0).length&&h.total===h.items.length&&h.earned===h.score*10+(h.score===h.total?25:0)&&day(h.date))&&(p.session===null||session(p.session)));
}
export function load(){try{const p=JSON.parse(localStorage.getItem(KEY));return valid(p)?p:fresh();}catch{return fresh();}}
