import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../',import.meta.url));
const skip=new Set(['node_modules','.git','dist','coverage']);
function files(dir=root){
 return readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
  if(skip.has(e.name))return [];
  const full=path.join(dir,e.name);
  return e.isDirectory()?files(full):[full];
 });
}
test('distribution excludes private deployment files and document exports',()=>{
 for(const f of files()){
  const rel=path.relative(root,f);
  assert.ok(!/(^|[/\\])(?:\.openai|\.sites-runtime|design)(?:[/\\]|$)/.test(rel),rel);
  assert.ok(!/\.(pdf|pem|key|zip|tar|gz)$/i.test(rel),rel);
  assert.ok(!/(progreso|progress).*\.json$/i.test(rel),rel);
 }
});
test('client source has no embedded credentials or private deployment identifiers',()=>{
 const forbidden=[/appgprj_[a-z0-9]+/i,/github_pat_[a-z0-9_]+/i,/gh[pousr]_[a-z0-9]{20,}/i,/-----BEGIN [A-Z ]*PRIVATE KEY-----/,/Bearer\s+[a-z0-9._-]{20,}/i,/\/Users\/[a-z0-9_-]+\//i];
 for(const f of files(path.join(root,'src'))){
  const content=readFileSync(f,'utf8');
  forbidden.forEach(pattern=>assert.ok(!pattern.test(content),path.relative(root,f)));
 }
 const main=readFileSync(path.join(root,'src/main.jsx'),'utf8');
 assert.ok(!main.includes('>IV<'));
 assert.ok(!main.includes('tu práctica en el chat'));
});
