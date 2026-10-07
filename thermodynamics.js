(function () {
'use strict';
const titles = {entropy:'Reaction Entropy',diagrams:'Reaction Diagrams',products:'Kinetic and Thermodynamic Products'};
const totalQuestions = Object.values(THERMO_BANK).reduce((total,sets)=>total+Object.values(sets).reduce((sum,qs)=>sum+qs.length,0),0);
const state = {mode:'entropy',level:'easy',index:0,answers:new Map(),solved:new Set(),attempted:new Set()};
const el = id => document.getElementById(id);
const current = () => THERMO_BANK[state.mode][state.level][state.index];
const list = () => THERMO_BANK[state.mode][state.level];
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function grade(q,a) {
 if(q.products) return a.kinetic===q.products.kinetic && a.thermodynamic===q.products.thermodynamic;
 if(q.targets) return a.none ? q.targets.length===0 : q.targets.length>0 && a.targets.length===q.targets.length && q.targets.every(x=>a.targets.includes(x));
 if(typeof q.answer==='number') return a.number!=='' && Number.isFinite(Number(a.number)) && Math.abs(Number(a.number)-q.answer)<=q.tolerance && (!q.classification || a.choice===q.classification);
 return a.choice===q.answer;
}
function getAnswer() { const q=current();return state.answers.get(q.id)||{choice:'',number:'',targets:[],none:false}; }
function setAnswer(a) {state.answers.set(current().id,a);}
function message(text,kind='hint') {el('th-feedback').textContent=text;el('th-feedback').dataset.state=kind;}
function scene(q) {
 const e=q.diagram.energies;const low=q.diagram.range?.[0]??Math.min(...e)-12,high=q.diagram.range?.[1]??Math.max(...e)+16;const xy=e.map((v,i)=>[150+i*460/(e.length-1),310-(v-low)*240/(high-low)]);
 let d=`M 110 ${xy[0][1]} L ${xy[0][0]} ${xy[0][1]}`;
 for(let i=1;i<xy.length;i++){const [x,y]=xy[i], [px,py]=xy[i-1];const dx=(x-px)/2;d+=` C ${px+dx} ${py},${x-dx} ${y},${x} ${y}`;}
 d+=` L 650 ${xy.at(-1)[1]}`;
 return {e,xy,d};
}
function diagram(q,compact=false) {
 const {e,xy,d}=scene(q),a=getAnswer(),interactive=!compact&&Boolean(q.targets),locked=state.solved.has(q.id);
 const energyName=q.diagram.axis==='potential'?'Potential Energy':'Gibbs Free Energy';
 let out=`<svg viewBox="0 0 760 380" class="energy-diagram${compact?' compact-diagram':''}" role="${interactive?'group':'img'}" aria-label="${energyName} profile; relative energy levels from left to right: ${e.join(', ')}"><path class="diagram-axis" d="M 72 32 V 330 H 715"/><path class="axis-head" d="m68 38 4-6 4 6 M709 326l6 4-6 4"/><text x="390" y="369" text-anchor="middle">Reaction Coordinate</text><text x="22" y="180" transform="rotate(-90 22 180)" text-anchor="middle">${q.diagram.standard?(compact?'Gibbs Energy, G°':energyName+' (Standard State)'):energyName}</text><path class="energy-curve" d="${d}"/>`;
 if(q.diagram.product){out+=`<text x="110" y="${xy[0][1]-14}" font-size="19">Reactants</text><text x="680" y="${xy.at(-1)[1]-14}" text-anchor="end" font-size="19">Product ${q.diagram.product}</text>`;}
 if(interactive){
  for(let j=0;j<e.length;j++){
   const [x,y]=xy[j],id='n'+j,selected=a.targets.includes(id);
   out+=`<g class="curve-location${selected?' selected':''}" role="button" tabindex="${locked?'-1':'0'}" aria-label="Curve position ${j+1}, relative energy level ${e[j]}" aria-pressed="${selected}" data-feature="${id}"><circle class="curve-hit" cx="${x}" cy="${y}" r="${j===0||j===e.length-1?40:24}"/>${selected?`<circle class="selection-dot" cx="${x}" cy="${y}" r="5"/>`:''}</g>`;
  }
  if(q.barrier&&a.targets.length===2){
   const indices=a.targets.map(id=>Number(id.slice(1))).sort((x,y)=>x-y);const p1=xy[indices[0]],p2=xy[indices[1]];
   if(p1&&p2&&p1[1]!==p2[1]){
    const top=Math.min(p1[1],p2[1]),bottom=Math.max(p1[1],p2[1]);
    out+=`<g class="student-barrier" aria-label="Your marked energy difference"><path class="barrier-guide" d="M 98 ${p1[1]} H ${p1[0]} M 98 ${p2[1]} H ${p2[0]}"/><path class="measured-barrier" d="M 98 ${top} V ${bottom} M 94 ${top+6} L 98 ${top} L 102 ${top+6} M 94 ${bottom-6} L 98 ${bottom} L 102 ${bottom-6}"/><text x="112" y="${(top+bottom)/2+5}">E<tspan dy="4" font-size="11">a</tspan></text></g>`;
   }
  }
 }
 out+='</svg>';
 if(compact)return out;
 return out+`<p class="diagram-help">${q.barrier?'Select two positions on the curve to mark the barrier.':'Click directly on the curve. Select a position again to deselect it.'} Keyboard: Tab to a curve position, then press Enter or Space.</p>`;
}
function comparisons(q) {
 const a=getAnswer(),locked=state.solved.has(q.id);
 let out='<div class="diagram-comparisons">';
 for(const model of q.comparisons){
  const id='card-'+model.label,selected=a.targets.includes(id);
  out+=`<button type="button" class="diagram-card${selected?' selected':''}" data-feature="${id}" aria-pressed="${selected}" aria-label="Diagram ${model.label}. Relative energy levels from left to right: ${model.energies.join(', ')}" ${locked?'disabled':''}><strong>Diagram ${model.label}</strong>${diagram({diagram:model},true)}<span class="diagram-card-status">${selected?'Selected':'Select Diagram'}</span></button>`;
 }
 return out+'</div><p class="diagram-help">Select every diagram that fits the description.</p>';
}
function productDiagrams(q) {
 const energies=q.productProfiles.flatMap(p=>p.energies),range=[Math.min(...energies)-12,Math.max(...energies)+16];
 const paths=q.productProfiles.map((p,i)=>({...p,index:i,...scene({diagram:{...p,range}})}));
 const labels=paths.map(p=>({p,y:p.xy.at(-1)[1]})).sort((a,b)=>a.y-b.y);
 for(let i=1;i<labels.length;i++)labels[i].y=Math.max(labels[i].y,labels[i-1].y+27);
 const overflow=Math.max(0,labels.at(-1).y-310);labels.forEach(l=>l.y-=overflow);
 const descriptions=paths.map(p=>`Product ${p.label}: reactants ${p.e[0]}, transition state ${p.e[1]}, product ${p.e[2]}`).join('; ');
 let out=`<svg viewBox="0 0 900 400" class="energy-diagram product-overlay" role="img" aria-label="Competing pathways on a shared Gibbs free-energy scale. ${escape(descriptions)}"><path class="diagram-axis" d="M 72 32 V 330 H 850"/><path class="axis-head" d="m68 38 4-6 4 6 M844 326l6 4-6 4"/><text x="460" y="375" text-anchor="middle">Reaction Coordinate</text><text x="22" y="180" transform="rotate(-90 22 180)" text-anchor="middle">Gibbs Free Energy</text><path class="common-reactants" d="M 110 ${paths[0].xy[0][1]} H 150"/><text x="110" y="${paths[0].xy[0][1]-18}">Reactants</text>`;
 for(const p of paths){const branch=p.d.replace(/^M 110 [^L]+L /,'M ');out+=`<path class="product-path path-${p.index}" d="${branch}"/>`;}
 for(const {p,y} of labels)out+=`<path class="product-label-guide path-${p.index}" d="M 650 ${p.xy.at(-1)[1]} H 675 L 700 ${y}"/><text class="product-label label-${p.index}" x="710" y="${y+5}">Product ${escape(p.label)}</text>`;
 return out+'</svg>';
}
function render() {
 const q=current(),a=getAnswer(),locked=state.solved.has(q.id);
 document.querySelectorAll('[data-th-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.thMode===state.mode)));
 document.querySelectorAll('[data-th-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.thLevel===state.level)));
 el('th-question').innerHTML=list().map((q,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');el('th-question').value=state.index;
 el('th-count').textContent=`Question ${state.index+1} of ${list().length}`;el('th-score').textContent=`Completed: ${state.solved.size} / ${totalQuestions}`;
 el('th-progress').style.width=`${list().filter(q=>state.solved.has(q.id)).length/list().length*100}%`;
 el('th-family').textContent=titles[state.mode]+' · '+state.level[0].toUpperCase()+state.level.slice(1)+(q.family?' · '+q.family:'');el('th-prompt').textContent=q.prompt;
 let content=q.reaction?`<div class="thermo-reaction">${escape(q.reaction)}</div>`:'';
 if(q.molecules){content+='<div class="molecule-reaction">';for(const [side,mols] of Object.entries(q.molecules)){if(side==='products')content+='<span class="reaction-arrow" aria-label="reacts to give">→</span>';mols.forEach((m,i)=>{if(i)content+='<span class="reaction-plus">+</span>';content+=`<img src="${m.src}" alt="${escape(m.label)}" width="240" height="150">`;});}content+='</div>';}
 if(q.data)content+='<div class="thermo-data">'+q.data.map(v=>`<p>${escape(v)}</p>`).join('')+'</div>';
 if(q.productProfiles)content+=productDiagrams(q);
 if(q.diagram)content+=diagram(q);
 if(q.comparisons)content+=comparisons(q);
 el('th-content').innerHTML=content;el('th-note').textContent=q.note||'';
 let controls='';if(typeof q.answer==='number')controls=`<label class="numeric-answer" for="th-number">Your Answer <span><input id="th-number" type="text" inputmode="decimal" autocomplete="off" value="${escape(a.number)}" ${locked?'disabled':''}><span>${escape(q.unit)}</span></span></label>`;
 if(q.products){controls+='<div class="product-answers">'+['kinetic','thermodynamic'].map(kind=>`<fieldset class="thermo-options${q.productProfiles.length===4?' four-product-options':''}"><legend>${kind==='kinetic'?'Kinetic Product':'Thermodynamic Product'}</legend>${q.productProfiles.map(p=>`<label><input type="radio" name="th-${kind}" value="${p.label}" ${a[kind]===p.label?'checked':''} ${locked?'disabled':''}><span>Product ${p.label}</span></label>`).join('')}</fieldset>`).join('')+'</div>';}
 const options=q.choices||q.classChoices;if(options)controls+=`<fieldset class="thermo-options"><legend>${q.classification?'Then Choose':'Choose Your Answer'}</legend>${options.map(c=>`<label><input type="radio" name="th-choice" value="${escape(c)}" ${a.choice===c?'checked':''} ${locked?'disabled':''}><span>${escape(c)}</span></label>`).join('')}</fieldset>`;
 if(q.noneOption)controls+=`<label class="no-feature"><input id="th-none" type="checkbox" ${a.none?'checked':''} ${locked?'disabled':''}> ${escape(q.noneLabel||"No Such Feature")}</label>`;
 el('th-controls').innerHTML=controls;
 if(el('th-number'))el('th-number').addEventListener('input',event=>{setAnswer({...getAnswer(),number:event.target.value.trim().replace(/−/g,'-')});});
 document.querySelectorAll('input[name="th-choice"]').forEach(r=>r.addEventListener('change',()=>setAnswer({...getAnswer(),choice:r.value})));
 if(q.products)for(const kind of ['kinetic','thermodynamic'])document.querySelectorAll(`input[name="th-${kind}"]`).forEach(r=>r.addEventListener('change',()=>setAnswer({...getAnswer(),[kind]:r.value})));
 if(el('th-none'))el('th-none').addEventListener('change',event=>{setAnswer({...getAnswer(),none:event.target.checked,targets:[]});render();});
 document.querySelectorAll('[data-feature]').forEach(f=>{const select=()=>{if(locked)return;const a=getAnswer(),id=f.dataset.feature;setAnswer({...a,none:false,targets:a.targets.includes(id)?a.targets.filter(x=>x!==id):q.barrier&&a.targets.length===2?[id]:[...a.targets,id]});const focused=id;render();document.querySelector(`[data-feature="${focused}"]`).focus();};f.addEventListener('click',select);f.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();select();}});});
 el('th-check').disabled=locked;el('th-clear').disabled=locked;el('th-previous').disabled=state.index===0;el('th-next').disabled=state.index===list().length-1;
 message(locked?'Correct. '+q.explanation:'',locked?'correct':'hint');
}
el('th-check').addEventListener('click',()=>{const q=current(),a=getAnswer();if(state.solved.has(q.id))return;const missing=q.products?(!a.kinetic||!a.thermodynamic):q.targets?(!a.targets.length&&!a.none):typeof q.answer==='number'?(a.number===''||q.classification&&!a.choice):!a.choice;if(missing){message('Complete your answer before checking.');return;}state.attempted.add(q.id);if(grade(q,a)){state.solved.add(q.id);render();}else message('Incorrect—try again. Hint: '+q.hint,'incorrect');});
el('th-hint').addEventListener('click',()=>message('Hint: '+current().hint));
el('th-clear').addEventListener('click',()=>{if(state.solved.has(current().id))return;state.answers.delete(current().id);render();});
el('th-previous').addEventListener('click',()=>{if(state.index>0){state.index--;render();}});el('th-next').addEventListener('click',()=>{if(state.index<list().length-1){state.index++;render();}});
el('th-question').addEventListener('change',event=>{state.index=Number(event.target.value);render();});
document.querySelectorAll('[data-th-mode]').forEach(b=>b.addEventListener('click',()=>{state.mode=b.dataset.thMode;state.index=0;render();}));
document.querySelectorAll('[data-th-level]').forEach(b=>b.addEventListener('click',()=>{state.level=b.dataset.thLevel;state.index=0;render();}));
render();
})();
