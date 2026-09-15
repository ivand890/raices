import React,{useState} from 'react';
import './study.css';
import {questions,topicNames,idsForTopic} from './questions.js';
export function topicStats(history){
 const map=new Map();
 for(const h of history)for(const item of h.items){const q=questions.find(q=>q.id===item.id);if(!q||item.answer===null)continue;const s=map.get(q.topic)||{topic:q.topic,total:0,correct:0};s.total++;s.correct+=item.answer===0?1:0;map.set(q.topic,s);}
 return [...map.values()].sort((a,b)=>a.correct/a.total-b.correct/b.total);
}
export function TopicGrid({history,start}){
 const stats=Object.fromEntries(topicStats(history).map(s=>[s.topic,s]));
 return <section className="topics"><h2>Practicar por tema</h2><p className="subtitle small-serif">Todos abiertos · sin esperar al siguiente nivel</p><div className="topic-grid">{topicNames.map(name=>{const n=questions.filter(q=>q.topic===name).length;const s=stats[name];return <button key={name} className="topic-chip" onClick={()=>start('focus',1,idsForTopic(name))}><strong>{name}</strong><small>{n} preguntas{s?` · ${Math.round(s.correct/s.total*100)}% de aciertos`:''}</small></button>;})}</div></section>;
}
export default function StudyPanel({history,start}){
 const [topic,setTopic]=useState(topicNames[0]),[index,setIndex]=useState(0),[shown,setShown]=useState(false);
 const pool=questions.filter(q=>q.topic===topic),q=pool[index%pool.length],stats=topicStats(history),weak=stats[0];
 return <section className="panel large-panel study-panel"><p className="eyebrow">APRENDE A TU MANERA</p><h2>Un tema, muchas conexiones.</h2><p className="small muted">Los temas no dependen de la ruta de niveles. Puedes practicar civismo o patrimonio desde el primer día.</p><label htmlFor="study-topic">Elige un tema</label><select id="study-topic" value={topic} onChange={e=>{setTopic(e.target.value);setIndex(0);setShown(false);}}>{topicNames.map(t=><option key={t}>{t}</option>)}</select><p>{pool.length} preguntas disponibles · práctica de hasta 10</p><button className="primary" onClick={()=>start('focus',1,idsForTopic(topic))}>Practicar este tema</button>
 <div className="flashcard"><p className="eyebrow">TARJETAS · SIN PUNTOS · {index%pool.length+1}/{pool.length}</p><h3>{q.text}</h3>{shown?<div aria-live="polite"><strong>{q.options[0]}</strong><p>{q.explanation}</p>{q.source?<a href={q.source} target="_blank" rel="noreferrer">Leer la fuente ↗</a>:null}</div>:<button className="secondary" onClick={()=>setShown(true)}>Mostrar respuesta</button>}<button className="text-btn" onClick={()=>{setIndex(index+1);setShown(false);}}>Siguiente tarjeta →</button></div>
 <h3>Tu mapa de fortalezas</h3><p className="small muted">Aciertos en tus últimos 50 intentos; incluye repeticiones. No es una predicción del examen.</p>{weak?<><p>Por reforzar: <strong>{weak.topic}</strong> ({weak.correct}/{weak.total}).</p><div className="topic-stats">{stats.map(s=><span key={s.topic}>{s.topic}: <b>{Math.round(s.correct/s.total*100)}%</b> · {s.total} respuestas</span>)}</div></>:<p>Completa una práctica para descubrir qué temas reforzar.</p>}</section>;
}
