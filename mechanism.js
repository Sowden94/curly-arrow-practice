(function(){
'use strict';
const byId=id=>document.getElementById(id),escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state={level:'easy',index:0,answers:new Map(),solved:new Set(),tool:'Nucleophilic'};
const current=()=>MECHANISM_BANK[state.level][state.index];
const total=Object.values(MECHANISM_BANK).reduce((n,qs)=>n+qs.length,0);
const measure=document.createElement('canvas').getContext('2d');measure.font='26px Arial';
function labelWidth(text){let width=0;for(const part of text.split(/(\d+)/).filter(Boolean)){measure.font=/^\d+$/.test(part)?'18px Arial':'26px Arial';width+=measure.measureText(part).width;}measure.font='26px Arial';return width;}
function labelMarkup(text){let lowered=false;return text.split(/(\d+)/).filter(Boolean).map(part=>{if(/^\d+$/.test(part)){lowered=true;return `<tspan font-size="18" dy="5">${part}</tspan>`;}const dy=lowered?' dy="-5"':'';lowered=false;return `<tspan${dy}>${escape(part)}</tspan>`;}).join('');}
function atomLabel(g,a){
 if(a.e==='C'&&!a.charge&&a.h===3)return {text:'Me',prefix:'',group:true};
 if(a.e==='C'&&!a.charge)return {text:'',prefix:''};
 const ns=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)));
 const hyd=a.h?'H'+(a.h>1?String(a.h):''):'';
 const prefix=hyd&&ns.length&&ns.reduce((s,n)=>s+n.x-a.x,0)>1?hyd:'';
 return {text:prefix?prefix+a.e:a.e+hyd,prefix};
}
function model(g){
 const atoms=g.atoms.map(a=>{const label=atomLabel(g,a),prefix=labelWidth(label.prefix),core=label.group?labelWidth(label.text):measure.measureText(a.e).width,full=labelWidth(label.text);return {...a,...label,left:label.text?prefix+core/2+4:0,right:label.text?full-prefix-core/2+4:0,top:label.text?18:0,bottom:label.text?20:0};});
 const lookup=new Map(atoms.map(a=>[a.id,a]));
 const bounds={left:Math.min(...atoms.map(a=>a.x-a.left))-28,right:Math.max(...atoms.map(a=>a.x+a.right))+28,top:Math.min(...atoms.map(a=>a.y-a.top))-28,bottom:Math.max(...atoms.map(a=>a.y+a.bottom))+28};
 return {atoms,lookup,bounds};
}
function trim(a,ux,uy){if(!a.text)return 0;return Math.min(Math.abs(ux)>1e-6?(ux<0?a.left:a.right)/Math.abs(ux):Infinity,Math.abs(uy)>1e-6?20/Math.abs(uy):Infinity);}
function distanceToSegment(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);}
function marker(a){return {x:a.x+(a.right-a.left)/2,y:a.y,rx:Math.max(22,(a.left+a.right)/2+5),ry:23};}
function openDirection(g,atoms,lookup,target,caption=false){
 const ring=caption?marker(target):null,origin=ring||target;
 const angles=[Math.PI/2,-Math.PI/2,Math.PI,0,Math.PI*3/4,-Math.PI*3/4,Math.PI/4,-Math.PI/4];
 const reach=angle=>{const ux=Math.cos(angle),uy=Math.sin(angle);return caption?1/Math.sqrt(ux*ux/(ring.rx*ring.rx)+uy*uy/(ring.ry*ring.ry)):target.text?trim(target,ux,uy):target.id?4:0;};
 let best;
 for(const angle of angles){const ux=Math.cos(angle),uy=Math.sin(angle),gap=reach(angle)+(caption?8+10*Math.abs(ux)+8*Math.abs(uy):12),end={x:origin.x+ux*gap,y:origin.y+uy*gap},start={x:end.x+ux*30,y:end.y+uy*30};let penalty=0;
  const points=caption?[end,...[-10,10].flatMap(x=>[-8,8].map(y=>({x:end.x+x,y:end.y+y})))]:Array.from({length:7},(_,i)=>({x:end.x+ux*i*5,y:end.y+uy*i*5}));
  for(const point of points){for(const a of atoms){if(a.id!==target.id){const dx=Math.max(a.x-a.left-point.x,0,point.x-a.x-a.right),dy=Math.max(a.y-a.top-point.y,0,point.y-a.y-a.bottom);penalty+=Math.max(0,12-Math.hypot(dx,dy))*10;}if(a.charge)penalty+=Math.max(0,16-Math.hypot(point.x-(a.x+a.right+8),point.y-(a.y-20)))*12;}
   for(const b of g.bonds)penalty+=Math.max(0,12-distanceToSegment(point,lookup.get(b.a),lookup.get(b.b)))*5;
  }
  if(!best||penalty<best.penalty-.01)best={angle,ux,uy,end,start,penalty};
 }
 return best;
}
function selected(q,key){return state.answers.get(q.id)?.sites?.[key];}
function drawing(g,q,prefix=''){
 const {atoms,lookup,bounds}=model(g),locked=state.solved.has(q.id),isMarked=q.kind==='classify';
 let svg='';const include=(x,y,pad=12)=>{bounds.left=Math.min(bounds.left,x-pad);bounds.right=Math.max(bounds.right,x+pad);bounds.top=Math.min(bounds.top,y-pad);bounds.bottom=Math.max(bounds.bottom,y+pad);};

 for(const b of g.bonds){const a=lookup.get(b.a),c=lookup.get(b.b),length=Math.hypot(c.x-a.x,c.y-a.y),ux=(c.x-a.x)/length,uy=(c.y-a.y)/length,sa=trim(a,ux,uy),sc=trim(c,-ux,-uy);
  for(const off of b.order===1?[0]:b.order===2?[-3.4,3.4]:[-5,0,5])svg+=`<path class="mechanism-bond" stroke="#172532" stroke-width="2" fill="none" d="M ${a.x+ux*sa-uy*off} ${a.y+uy*sa+ux*off} L ${c.x-ux*sc-uy*off} ${c.y-uy*sc+ux*off}"/>`;
 }
 for(const a of atoms){
  if(a.text){const tx=a.x-labelWidth(a.prefix)-(a.group?labelWidth(a.text):measure.measureText(a.e).width)/2;svg+=`<text class="mechanism-atom" font-family="Arial,sans-serif" font-size="26" fill="#172532" x="${tx}" y="${a.y+9}">${labelMarkup(a.text)}</text>`;}
  if(a.charge){const x=a.x+a.right+8,y=a.y-20;include(x,y,12);svg+=`<g class="mechanism-charge" stroke="#172532" stroke-width="1.4" fill="white" aria-label="${a.charge>0?'Positive':'Negative'} charge"><circle cx="${x}" cy="${y}" r="8"/><path fill="none" d="M ${x-3.5} ${y} H ${x+3.5}${a.charge>0?` M ${x} ${y-3.5} V ${y+3.5}`:''}"/></g>`;}
 }
 // All atoms and pi bonds are selectable; no correct-site hints are shown before selection.
 if(!isMarked){
  for(const b of g.bonds.filter(b=>b.order>1)){const a=lookup.get(b.a),c=lookup.get(b.b),key=prefix+b.id,value=selected(q,key);svg+=`<g class="site-target ${value?'site-'+value.toLowerCase():''}" role="button" tabindex="${locked?-1:0}" data-site="${key}" aria-label="${b.order===2?'Double':'Triple'} bond between atoms ${g.atoms.indexOf(a)+1||g.atoms.findIndex(x=>x.id===a.id)+1} and ${g.atoms.findIndex(x=>x.id===c.id)+1}${value?', labelled '+value:''}" aria-pressed="${Boolean(value)}"><path class="pi-hit" fill="none" stroke="#ffffff" stroke-opacity="0" stroke-width="20" d="M ${a.x+20*(c.x-a.x)/70} ${a.y+20*(c.y-a.y)/70} L ${c.x-20*(c.x-a.x)/70} ${c.y-20*(c.y-a.y)/70}"/>${value?`<path class="pi-selection" fill="none" stroke="${value==='Nucleophilic'?'#1265c6':'#b34614'}" stroke-width="13" opacity=".25" d="M ${a.x} ${a.y} L ${c.x} ${c.y}"/>`:''}</g>`;}
  for(const a of atoms){const key=prefix+a.id,value=selected(q,key),spot=value?openDirection(g,atoms,lookup,a,true).end:null; if(spot)include(spot.x,spot.y,18);svg+=`<g class="site-target ${value?'site-'+value.toLowerCase():''}" role="button" tabindex="${locked?-1:0}" data-site="${key}" aria-label="Atom ${g.atoms.findIndex(x=>x.id===a.id)+1}: ${escape(a.e)}${value?', labelled '+value:''}" aria-pressed="${Boolean(value)}"><circle class="atom-hit" fill="#ffffff" fill-opacity="0" cx="${a.x}" cy="${a.y}" r="20"/>${value?`<ellipse class="atom-selection" fill="none" stroke="${value==='Nucleophilic'?'#1265c6':'#b34614'}" stroke-width="2" cx="${a.x+(a.right-a.left)/2}" cy="${a.y}" rx="${Math.max(22,(a.left+a.right)/2+5)}" ry="23"/><text class="site-caption" font-family="Arial,sans-serif" font-size="15" text-anchor="middle" fill="${value==='Nucleophilic'?'#1265c6':'#b34614'}" x="${spot.x}" y="${spot.y+5}">${value==='Nucleophilic'?'Nu':'E'}</text>`:''}</g>`;}
 }
 if(isMarked){let target=lookup.get(q.marked);if(!target){const b=g.bonds.find(b=>b.id===q.marked),a=lookup.get(b.a),c=lookup.get(b.b);target={x:(a.x+c.x)/2,y:(a.y+c.y)/2};}
  const {ux,uy,end,start}=openDirection(g,atoms,lookup,target);include(start.x,start.y,10);include(end.x,end.y,10);svg+=`<path class="marked-site-arrow" stroke="#c54c19" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round" d="M ${start.x} ${start.y} L ${end.x} ${end.y} M ${end.x+ux*8-uy*5.5} ${end.y+uy*8+ux*5.5} L ${end.x} ${end.y} L ${end.x+ux*8+uy*5.5} ${end.y+uy*8-ux*5.5}"/>`;
 }

 const opening=`<svg xmlns="http://www.w3.org/2000/svg" class="mechanism-structure" width="${bounds.right-bounds.left}" height="${bounds.bottom-bounds.top}" viewBox="${bounds.left} ${bounds.top} ${bounds.right-bounds.left} ${bounds.bottom-bounds.top}" style="width:${bounds.right-bounds.left}px;max-width:100%" role="group" aria-label="${escape(g.name)}. ${isMarked?'Classify the site indicated by the arrow.':'Select atoms or pi bonds to label their roles.'}">`;
 return opening+svg+'</svg>';
}
function getAnswer(q=current()){return state.answers.get(q.id)||{choice:'',sites:{},none:false};}
function canonical(q,key){const isRight=key.startsWith('right:'),prefix=q.kind==='pair'?(isRight?'right:':'left:'):'',id=key.slice(prefix.length),g=isRight?q.secondGraph:q.graph;if(q.kind==='pair')return key;
 const bonds=g.bonds.filter(b=>b.order>1&&(b.a===id||b.b===id)&&g.sites[b.id]==='Nucleophilic'&&!g.sites[id]);return bonds.length===1?bonds[0].id:key;
}
function grade(q,a){if(q.kind==='classify')return a.choice===q.answer;const expected=q.sites,keys=Object.keys(expected);if(!keys.length)return Boolean(a.none)&&!Object.keys(a.sites).length;if(a.none)return false;return Object.keys(a.sites).length===keys.length&&keys.every(k=>a.sites[k]===expected[k]);}
function message(text,kind='hint'){byId('m-feedback').textContent=text;byId('m-feedback').dataset.state=kind;}
function render(){
 const q=current(),qs=MECHANISM_BANK[state.level],a=getAnswer(q),locked=state.solved.has(q.id);
 byId('m-count').textContent=`Question ${state.index+1} of ${qs.length}`;byId('m-score').textContent=`Completed: ${state.solved.size} / ${total}`;byId('m-progress').style.width=100*qs.filter(q=>state.solved.has(q.id)).length/qs.length+'%';byId('m-prompt').textContent=q.prompt;
 document.querySelectorAll('[data-m-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mLevel===state.level)));
 byId('m-question').innerHTML=qs.map((_,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');byId('m-question').value=state.index;
 byId('m-diagram').innerHTML=q.kind==='pair'?`<div class="mechanism-pair"><div>${drawing(q.graph,q,'left:')}</div><div>${drawing(q.secondGraph,q,'right:')}</div></div>`:drawing(q.graph,q);
 byId('m-tools').hidden=q.kind==='classify';byId('m-choice').hidden=q.kind!=='classify';byId('m-none-wrap').hidden=q.kind!=='label';byId('m-none').checked=a.none;byId('m-none').disabled=locked;
 document.querySelectorAll('[name="m-classification"]').forEach(r=>{r.checked=r.value===a.choice;r.disabled=locked;});
 document.querySelectorAll('[data-m-tool]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.mTool===state.tool));b.disabled=locked;});
 byId('m-help').textContent=q.kind==='classify'?'':q.kind==='pair'?'Choose a label, then select an atom.':'Choose a label, then click atoms or π bonds. Click a labelled site again to remove it.';
 document.querySelectorAll('[data-site]').forEach(el=>{const select=()=>{if(locked)return;const key=canonical(q,el.dataset.site),next={...getAnswer(),sites:{...getAnswer().sites},none:false};if(next.sites[key]===state.tool)delete next.sites[key];else next.sites[key]=state.tool;state.answers.set(q.id,next);render();};el.addEventListener('click',select);el.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();const key=el.dataset.site;select();document.querySelector(`[data-site="${key}"]`)?.focus();}});});
 byId('m-check').disabled=locked;byId('m-clear').disabled=locked;byId('m-previous').disabled=state.index===0;byId('m-next').disabled=state.index===qs.length-1;message(locked?'Correct. '+q.explanation:'',locked?'correct':'hint');
}
document.querySelectorAll('[name="m-classification"]').forEach(r=>r.addEventListener('change',()=>state.answers.set(current().id,{...getAnswer(),choice:r.value})));
document.querySelectorAll('[data-m-tool]').forEach(b=>b.addEventListener('click',()=>{state.tool=b.dataset.mTool;document.querySelectorAll('[data-m-tool]').forEach(t=>t.setAttribute('aria-pressed',String(t.dataset.mTool===state.tool)));}));
document.querySelectorAll('[data-m-level]').forEach(b=>b.addEventListener('click',()=>{state.level=b.dataset.mLevel;state.index=0;render();}));
byId('m-question').addEventListener('change',e=>{state.index=Number(e.target.value);render();});
byId('m-none').addEventListener('change',e=>{state.answers.set(current().id,{...getAnswer(),none:e.target.checked,sites:{}});render();});
byId('m-hint').addEventListener('click',()=>message('Hint: '+current().hint));
byId('m-clear').addEventListener('click',()=>{if(!state.solved.has(current().id)){state.answers.delete(current().id);render();}});
byId('m-check').addEventListener('click',()=>{const q=current(),a=getAnswer();if(state.solved.has(q.id))return;if(q.kind==='classify'?!a.choice:!a.none&&!Object.keys(a.sites).length){message('Choose your answer before checking.');return;}if(grade(q,a)){state.solved.add(q.id);render();}else message('Incorrect—try again. Hint: '+q.hint,'incorrect');});
byId('m-previous').addEventListener('click',()=>{if(state.index>0){state.index--;render();}});byId('m-next').addEventListener('click',()=>{if(state.index<MECHANISM_BANK[state.level].length-1){state.index++;render();}});
if(typeof globalThis!=='undefined'&&globalThis.__MECHANISM_TEST__)globalThis.mechanismApi={drawing,model,canonical,grade,state,render,getAnswer};
render();
})();
