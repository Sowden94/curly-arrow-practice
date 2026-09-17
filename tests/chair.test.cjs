const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=require('path').resolve(__dirname,'..')+'/';
class El {
 constructor(tag){this.tag=tag;this.attrs={};this.children=[];this.value='';this.dataset={};this.style={};this.classList={add:()=>{}}}
 setAttribute(k,v){this.attrs[k]=v;if(k.startsWith('data-'))this.dataset[k.slice(5)]=v}
 append(...els){this.children.push(...els)}
 replaceChildren(...els){this.children=els;this.value=''}
 addEventListener(){}
 set textContent(s){this.value=s;this.children=[]}
 get textContent(){return this.value+this.children.map(x=>x.textContent).join('')}
 xml(){const escape=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');return `<${this.tag} ${Object.entries(this.attrs).map(([k,v])=>`${k}="${escape(v)}"`).join(' ')}>${escape(this.value)}${this.children.map(x=>x.xml()).join('')}</${this.tag}>`}
}
const ids={};const document={createElementNS:(_,t)=>new El(t),createElement:t=>new El(t),getElementById:id=>ids[id]||=new El('div'),querySelectorAll:()=>[],addEventListener:()=>{}};
let src=fs.readFileSync(root+'chair.js','utf8');src=src.replace('reset();\n})();',`globalThis.api={bank,geometry,position,bestChairs,drawChair,candidateCarbons,chairMappings,check,set:(m,l,i,a,p)=>{mode=m;level=l;index=i;answer=a||{};placed=p||{};render()},getFeedback:()=>$('ch-feedback').textContent}; reset();\n})();`);
const ctx={document};vm.createContext(ctx);vm.runInContext(src,ctx);const a=ctx.api;
let checks=0;
for(const level of ['easy','moderate','hard']){
 const bank=a.bank.filter(q=>q.level===level);assert.equal(bank.length,20);
 bank.forEach((q,i)=>{
  for(const g of q.groups){assert.notEqual(a.position(g,0),a.position(g,1));for(const f of [0,1]){const geom=a.geometry(g.c,f);for(const k of ['axial','equatorial']){assert(geom[k].x>30&&geom[k].x<610);assert(geom[k].y>30&&geom[k].y<370)}}}
  const g=q.groups[q.target],ans={position:a.position(g,q.flip),direction:g.up?'up':'down'};a.set('identify',level,i,ans);a.check();assert(a.getFeedback().startsWith('Correct'));checks++;
  a.set('identify',level,i,{...ans,direction:g.up?'down':'up'});a.check();assert(a.getFeedback().startsWith('Incorrect'));checks++;
  const p={};q.groups.forEach((g,j)=>p[`${g.c}-${a.position(g,1-q.flip)}`]=j);
  a.chairMappings.forEach((map,m)=>{const equivalent={};q.groups.forEach((g,j)=>{const c=map(g.c);equivalent[`${c}-${a.position({...g,c},1-q.flip)}`]=j});a.set('flip',level,i,{},equivalent);a.check();assert(a.getFeedback().startsWith('Correct'),`${q.id}: equivalent chair orientation ${m+1} rejected`);checks++});
  if(q.groups.length===2&&q.groups[0].g===q.groups[1].g){const swapped=Object.fromEntries(Object.entries(p).map(([k,v])=>[k,1-v]));a.set('flip',level,i,{},swapped);a.check();assert(a.getFeedback().startsWith('Correct'));checks++}
  const targets=a.candidateCarbons(q).flatMap(c=>{const xy=a.geometry(c,1-q.flip);return [xy.axial,xy.equatorial]});for(let t=0;t<targets.length;t++)for(let u=t+1;u<targets.length;u++){const distance=Math.hypot(targets[t].x-targets[u].x,targets[t].y-targets[u].y);assert(distance>42,`${q.id}: targets ${t} and ${u} overlap at ${distance.toFixed(1)} px`)}
  const wrong={};q.groups.forEach((g,j)=>wrong[`${g.c}-${a.position(g,q.flip)}`]=j);a.set('flip',level,i,{},wrong);a.check();assert(a.getFeedback().startsWith('Incorrect'));checks++;
  const best=a.bestChairs(q);a.set('stable',level,i,{stable:best.length===2?'equal':String(best[0])});a.check();assert(a.getFeedback().startsWith('Correct'));checks++;
  a.set('stable',level,i,{stable:best.length===2?'0':String(1-best[0])});a.check();assert(a.getFeedback().startsWith('Incorrect'));checks++;
 });
}
const easyKinds=new Set(a.bank.filter(q=>q.level==='easy').flatMap(q=>q.groups.map(g=>g.g))),allKinds=new Set(a.bank.flatMap(q=>q.groups.map(g=>g.g)));
for(const g of ['Me','Et','F','Cl','Br'])assert(easyKinds.has(g),`Easy bank is missing ${g}`);
for(const g of ['Me','Et','iPr','tBu','F','Cl','Br'])assert(allKinds.has(g),`Question bank is missing ${g}`);
assert(a.bank.filter(q=>q.level==='hard').some(q=>q.groups.length===3),'Hard bank needs trisubstituted examples');
// Student-facing selectors and draggable pieces omit carbon-number spoilers.
a.set('flip','hard',0,{},{});assert.deepEqual(ids['ch-question'].children.map(option=>option.textContent),Array.from({length:20},(_,i)=>`Question ${i+1}`));assert(!/C[1-6]\s*·/.test(ids['ch-controls'].textContent));
// Independently known dimethyl stereochemistry: cis-1,3 and trans-1,2/1,4 have a diequatorial chair.
for(const [c,cis] of [[1,false],[2,true],[3,false]]){const q={groups:[{c:0,g:'Me',up:true},{c,g:'Me',up:cis}]};const best=a.bestChairs(q);assert.equal(best.length,1);assert(q.groups.every(g=>a.position(g,best[0])==='equatorial'))}
// In the paired chair templates, each chemical carbon moves to the adjacent drawn
// position while retaining its carbon identity; it must not receive a second index shift.
for(let c=0;c<6;c++){const before=a.geometry(c,0).p,after=a.geometry(c,1).p;assert.equal(after.x,before.x);assert.equal(after.y,400-before.y);assert(Math.hypot(after.x-before.x,after.y-before.y)>30)}
// A downward axial bond crossing the front chair edge is masked and the
// foreground ring segment is redrawn after it.
{const svg=a.drawChair({groups:[{c:2,g:'Me',up:false}],target:0},1),maskIndex=svg.children.findIndex((node,i)=>i>6&&node.tag==='circle'&&node.attrs.fill==='white');assert(maskIndex>6,'Down axial crossing needs a foreground mask');assert(svg.children.slice(maskIndex+1).some(node=>node.tag==='line'&&node.attrs.class==='chair-bond'),'Front chair segment must be redrawn over down axial bond')}
// The highlight must enclose every text fragment of the complete substituent label.
const formulaWidth=s=>[...s].reduce((w,ch)=>w+('₀₁₂₃₄₅₆₇₈₉'.includes(ch)?9:'()'.includes(ch)?8:14),0);
for(const g of ['Me','Et','iPr','tBu','F','Cl','Br'])for(const c of [0,3]){
 const q={groups:[{c,g,up:!a.position({c,up:true,g},0).startsWith('a')}],target:0};
 const svg=a.drawChair(q,0,{highlight:true}),oval=svg.children.find(e=>e.tag==='ellipse'),texts=svg.children.filter(e=>e.attrs.class==='chair-atom');
 assert(oval,`Missing highlight for ${g}`);const left=Number(oval.attrs.cx)-Number(oval.attrs.rx),right=Number(oval.attrs.cx)+Number(oval.attrs.rx);
 for(const t of texts){const x=Number(t.attrs.x),w=t.value==='C'?14:formulaWidth(t.value),anchor=t.attrs['text-anchor'];const min=anchor==='end'?x-w:anchor==='middle'?x-w/2:x,max=anchor==='end'?x:anchor==='middle'?x+w/2:x+w;assert(min>=left&&max<=right,`${g} label escapes highlight`)}
}
console.log(`PASS ${checks} grading checks, chair flip invariants, cis/trans stability, and target spacing.`);
