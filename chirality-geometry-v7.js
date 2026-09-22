(()=>{
const NS='http://www.w3.org/2000/svg';
const G={
 H:{left:'H',right:'H',name:'H'},F:{left:'F',right:'F',name:'F'},Cl:{left:'Cl',right:'Cl',name:'Cl'},Br:{left:'Br',right:'Br',name:'Br'},I:{left:'I',right:'I',name:'I'},
 OH:{left:'HO',right:'OH',name:'OH'},OMe:{left:'CH₃O',right:'OCH₃',name:'OCH₃'},NH2:{left:'H₂N',right:'NH₂',name:'NH₂'},NMe:{left:'CH₃NH',right:'NHCH₃',name:'NHCH₃'},
 Me:{left:'CH₃',right:'CH₃',name:'CH₃'},Et:{left:'CH₃CH₂',right:'CH₂CH₃',name:'CH₂CH₃'},Pr:{left:'CH₃CH₂CH₂',right:'CH₂CH₂CH₃',name:'CH₂CH₂CH₃'},iPr:{left:'(CH₃)₂CH',right:'CH(CH₃)₂',name:'CH(CH₃)₂'},
 CHO:{left:'OHC',right:'CHO',name:'CHO'},CO2H:{left:'HO₂C',right:'CO₂H',name:'CO₂H'},CN:{left:'NC',right:'CN',name:'CN'},CH2OH:{left:'HOCH₂',right:'CH₂OH',name:'CH₂OH'},CH2Cl:{left:'ClCH₂',right:'CH₂Cl',name:'CH₂Cl'},Ethynyl:{left:'HC≡C',right:'C≡CH',name:'C≡CH'}
};
const chiralSets={
 easy:[['Br','Cl','F','H'],['I','Br','F','H'],['Br','OH','Me','H'],['Cl','NH2','Me','H'],['OH','Pr','Me','H'],['Br','F','Me','H'],['Cl','OH','Et','H'],['F','OH','Me','H'],['Br','NH2','Et','H'],['Cl','F','Me','H']],
 moderate:[['Br','OMe','OH','Et'],['Cl','NMe','NH2','Me'],['OH','NH2','CHO','H'],['F','CO2H','CN','H'],['Br','CH2OH','CN','H'],['Cl','CHO','Et','H'],['OMe','OH','iPr','H'],['NMe','NH2','CH2OH','H'],['F','CH2Cl','Et','H'],['Br','CO2H','CHO','H']],
 hard:[['CH2Cl','CO2H','CHO','Me'],['CO2H','CHO','CH2OH','CN'],['CH2OH','CN','Ethynyl','Et'],['CO2H','CN','iPr','Me'],['CH2Cl','CH2OH','Et','Me'],['CHO','CH2OH','CN','Me'],['CO2H','CH2OH','iPr','Et'],['CN','Ethynyl','Et','Me'],['CH2Cl','CHO','CN','Me'],['CO2H','CHO','Et','Me']]
};
const achiralSets={
 easy:[['H','H','Cl','Br'],['Me','Me','OH','H'],['F','F','Me','H'],['Et','Et','Cl','H'],['OH','OH','Me','H'],['Cl','Cl','F','H'],['Me','Me','Cl','Br'],['H','H','OH','Me'],['Br','Br','Et','H'],['NH2','NH2','Me','H']],
 moderate:[['Et','Et','OH','H'],['CHO','CHO','Cl','H'],['CN','CN','Br','H'],['CH2OH','CH2OH','F','H'],['OMe','OMe','Me','H'],['iPr','iPr','Cl','H'],['NH2','NH2','CHO','H'],['Me','Me','CO2H','H'],['Et','Et','NMe','H'],['OH','OH','CN','Me']],
 hard:[['CH2Cl','CH2Cl','CHO','Me'],['CO2H','CO2H','CN','H'],['CH2OH','CH2OH','CN','Me'],['Ethynyl','Ethynyl','Et','Me'],['CHO','CHO','CH2OH','CN'],['CN','CN','iPr','Et'],['Et','Et','Pr','Me'],['CH2Cl','CH2Cl','CO2H','H'],['iPr','iPr','CHO','Me'],['CO2H','CO2H','Et','Me']]
};
const firstPerms=[[0,1,2,3],[0,2,3,1],[0,3,1,2],[1,0,3,2],[1,2,0,3],[1,3,2,0],[2,0,1,3],[2,1,3,0],[2,3,0,1],[3,0,2,1]];
const perms=[...firstPerms,...firstPerms.map(p=>[p[1],p[0],p[2],p[3]])];
// Fixed, reproducibly shuffled sequences prevent the identify bank from
// revealing the answer through a predictable chiral/achiral alternation.
const identifyMix={
 easy:[1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0],
 moderate:[0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1],
 hard:[1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0]
};
// Two bonds lie in the plane below the stereocentre. The solid wedge and
// hashed wedge project above it, matching the conventional textbook layout.
const vectors=[[-1,.58,0],[1,.58,0],[-.52,-1,1],[.52,-1,-1]];
const determinant=(a,b,c)=>a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]);
function descriptor(perm){const at=n=>vectors[perm.indexOf(n)],v4=at(3),sub=v=>v.map((x,i)=>x-v4[i]),d=determinant(sub(at(0)),sub(at(1)),sub(at(2)));return d>0?'R':'S'}
const buildAssign=level=>Array.from({length:20},(_,i)=>({level,groups:chiralSets[level][i%10],perm:perms[i],answer:descriptor(perms[i])}));
const buildIdentify=level=>{let chiralIndex=0,achiralIndex=0;return identifyMix[level].map((isChiral,i)=>{const chiral=Boolean(isChiral),groups=chiral?chiralSets[level][chiralIndex++]:achiralSets[level][achiralIndex++];return{level,groups,perm:perms[(i*7)%20],answer:chiral?'chiral':'achiral'}})};
const banks={identify:{easy:buildIdentify('easy'),moderate:buildIdentify('moderate'),hard:buildIdentify('hard')},assign:{easy:buildAssign('easy'),moderate:buildAssign('moderate'),hard:buildAssign('hard')}};
// Groups are stored in CIP order; permutations change only their drawing positions.
banks.priority=Object.fromEntries(['easy','moderate','hard'].map(level=>[level,Array.from({length:20},(_,i)=>({level,groups:[...chiralSets[level][(i*3)%10]],perm:[...perms[(i*7+3)%20]]}))]));
function evaluatePriorities(item,values){
 if(values.length!==4||values.some(v=>!Number.isInteger(v)||v<1||v>4))return'incomplete';
 if(new Set(values).size!==4)return'duplicate';
 return values.every((v,i)=>v===item.perm[i]+1)?'correct':'incorrect';
}
function attachmentSpec(key,side){
 // Me is an abbreviation: attach at its near edge, as for a left/right
 // aligned chemical nickname, rather than aiming through the word centre.
 if(key==='Me')return{text:'Me',atom:side==='left'?'e':'M',index:side==='left'?1:0};
 const text=key==='Me'?'Me':G[key][side];
 const atom={OH:'O',OMe:'O',NH2:'N',NMe:'N',CHO:'C',CO2H:'C',CN:'C',CH2OH:'C',CH2Cl:'C',Ethynyl:'C',Me:'Me'}[key]||key;
 // In ClCH₂, the attachment carbon is not the C belonging to chlorine.
 const index=side==='left'&&key==='CH2Cl'?2:side==='left'&&key==='Ethynyl'?3:text.indexOf(atom);
 return{text,atom,index};
}
if(globalThis.__CHIRALITY_TEST__){globalThis.chiralityApi={G,banks,descriptor,perms,vectors,attachmentSpec,evaluatePriorities};return}
const $=id=>document.getElementById(id),svg=$('chirality-structure'),feedback=$('chiral-feedback');
let mode='identify',level='easy',index=0,selected='',score=0,attempts=0,answered=false,hintLevel=0;
let priorityControls=[];
const active=()=>banks[mode][level],el=(tag,attrs={},text)=>{const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text!==undefined)e.textContent=text;return e};
// Keep bond geometry independent of label size. Every bond from the
// stereocentre and every skeletal C-C segment uses this textbook-scale length.
const BOND=58;
const WEDGE_HALF_WIDTH=5;
const slots=[
 {x:160,y:302,side:'left',kind:'line',angle:Math.PI*5/6},
 {x:480,y:302,side:'right',kind:'line',angle:Math.PI/6},
 {x:225,y:75,side:'left',kind:'wedge',angle:-Math.PI*2/3},
 {x:415,y:75,side:'right',kind:'hash',angle:-Math.PI/3}
],center={x:320,y:210};
function point(p,angle,length){return{x:p.x+Math.cos(angle)*length,y:p.y+Math.sin(angle)*length}}
const labelMeasure=document.createElement('canvas').getContext('2d');
function labelInkBounds(text){
 // Subscripts may come from a fallback font. Measure each glyph so a font
 // run cannot silently omit part of a condensed formula from its ink bounds.
 let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity,prefix='';const glyphs=[];
 for(const char of text){
  const glyph=labelMeasure.measureText(char);
  const x=labelMeasure.measureText(prefix+char).width-glyph.width;
  left=Math.min(left,x-glyph.actualBoundingBoxLeft);right=Math.max(right,x+glyph.actualBoundingBoxRight);
  top=Math.min(top,-glyph.actualBoundingBoxAscent);bottom=Math.max(bottom,glyph.actualBoundingBoxDescent);
  glyphs.push({left:x-glyph.actualBoundingBoxLeft,right:x+glyph.actualBoundingBoxRight,top:-glyph.actualBoundingBoxAscent,bottom:glyph.actualBoundingBoxDescent});
  prefix+=char;
 }
 return{left,right,top,bottom,glyphs};
}
function faceTouchesBox(a,b,box){
 let lo=0,hi=1;
 for(const [axis,min,max] of [['x',box.left,box.right],['y',box.top,box.bottom]]){
  const d=b[axis]-a[axis];
  if(Math.abs(d)<1e-9){if(a[axis]<min||a[axis]>max)return false;}
  else{const t1=(min-a[axis])/d,t2=(max-a[axis])/d;lo=Math.max(lo,Math.min(t1,t2));hi=Math.min(hi,Math.max(t1,t2));if(lo>hi)return false;}
 }
 return true;
}
function drawLabelledBond(slot,key,spec=attachmentSpec(key,slot.side)){
 const {text,atom,index}=spec,origin=slot.origin||center;
 const label=el('text',{x:0,y:0,'text-anchor':'start',class:'chiral-label',style:'stroke:none','data-group':key,'data-attachment-index':index},text);
 svg.append(label);
 labelMeasure.font=getComputedStyle(label).font;
 const full=labelInkBounds(text),glyph=labelMeasure.measureText(atom);
 const advance=labelMeasure.measureText(text.slice(0,index)+atom).width-glyph.width;
 const ax=advance+(glyph.actualBoundingBoxRight-glyph.actualBoundingBoxLeft)/2;
 const ay=(glyph.actualBoundingBoxDescent-glyph.actualBoundingBoxAscent)/2;
 // Bounds relative to the actual attachment atom, not the formula centre.
 const box={left:full.left-ax,right:full.right-ax,top:full.top-ay,bottom:full.bottom-ay};
 const ux=Math.cos(slot.angle),uy=Math.sin(slot.angle),wide=slot.kind==='wedge'?WEDGE_HALF_WIDTH:slot.kind==='hash'?6.6:0;
 // Keep a small gap to actual glyphs, rather than reserving an empty rectangle
 // below the entire formula just because a distant subscript extends there.
 const clearance=3+(slot.kind==='wedge'?0:1.2);
 const dx=(wide*Math.abs(uy)+clearance+(ux>0?-box.left:box.right))/Math.abs(ux);
 const dy=(wide*Math.abs(ux)+clearance+(uy>0?-box.top:box.bottom))/Math.abs(uy);
 const a={x:-uy*wide,y:ux*wide},b={x:uy*wide,y:-ux*wide};
 let near=0,far=Math.min(dx,dy)+.01;
 for(let i=0;i<32;i++){
  const offset=(near+far)/2;
  const touches=full.glyphs.some(g=>faceTouchesBox(a,b,{left:g.left-ax+ux*offset-clearance,right:g.right-ax+ux*offset+clearance,top:g.top-ay+uy*offset-clearance,bottom:g.bottom-ay+uy*offset+clearance}));
  if(touches)near=offset;else far=offset;
 }
 const anchor=point(origin,slot.angle,BOND+far);
 label.setAttribute('x',anchor.x-ax);label.setAttribute('y',anchor.y-ay);
 label.setAttribute('data-atom-x',anchor.x);label.setAttribute('data-atom-y',anchor.y);
 label.setAttribute('data-origin-x',origin.x);label.setAttribute('data-origin-y',origin.y);label.setAttribute('data-angle',slot.angle);
 drawBond(slot,point(origin,slot.angle,BOND));
 return{anchor,box:{left:anchor.x+box.left,right:anchor.x+box.right,top:anchor.y+box.top,bottom:anchor.y+box.bottom}};
}
function drawBond(slot,target){
 const start=slot.start||slot.origin||center;
 if(slot.kind==='line'){svg.append(el('line',{x1:start.x,y1:start.y,x2:target.x,y2:target.y,class:'chiral-bond'}));return}
 const dx=target.x-start.x,dy=target.y-start.y,d=Math.hypot(dx,dy),px=-dy/d,py=dx/d;
 // Both wedge styles use the same outline. At an unlabeled carbon, the
 // broad end meets the outgoing bond rather than sticking past its corner.
 const width=slot.kind==='wedge'?WEDGE_HALF_WIDTH:6.6;
 let a={x:target.x+width*px,y:target.y+width*py},b={x:target.x-width*px,y:target.y-width*py};
 if(Number.isFinite(slot.joinAngle)){
  a=target;
  b=point(target,slot.joinAngle,2*width/Math.abs(Math.sin(slot.joinAngle-slot.angle)));
 }
 if(slot.kind==='wedge'){
  svg.append(el('polygon',{points:`${start.x},${start.y} ${a.x},${a.y} ${b.x},${b.y}`,class:'chiral-wedge'}));return;
 }
 for(let i=1;i<=7;i++){
  const t=i/7;
  svg.append(el('line',{x1:start.x+(a.x-start.x)*t,y1:start.y+(a.y-start.y)*t,x2:start.x+(b.x-start.x)*t,y2:start.y+(b.y-start.y)*t,class:'chiral-hash'}));
 }
}
function continuationAngle(slot){const upper=slot.angle<0;return slot.angle+(slot.side==='left'?(upper?-Math.PI/3:Math.PI/3):(upper?Math.PI/3:-Math.PI/3))}
function drawExpandedGroup(slot,key){
 if(key==='CH2Cl'||key==='CH2OH'){
  // The unlabeled vertex is CH2. A separate bond makes C-Cl / C-O explicit.
  const carbon=point(center,slot.angle,BOND),angle=continuationAngle(slot);
  drawBond({...slot,joinAngle:angle},carbon);
  drawLabelledBond({origin:carbon,angle,kind:'line',side:Math.cos(angle)<0?'left':'right'},key==='CH2Cl'?'Cl':'OH');
  return;
 }
 // Methylamino: show all three bonds at nitrogen, so none appears to end on H.
 const nitrogen=drawLabelledBond(slot,key,{text:'N',atom:'N',index:0}),angle=continuationAngle(slot);
 for(const [group,direction] of [['Me',angle],['H',2*slot.angle-angle]]){
  const {anchor,box}=nitrogen,ux=Math.cos(direction),uy=Math.sin(direction);
  const tx=(ux>0?box.right-anchor.x:anchor.x-box.left)/Math.max(Math.abs(ux),1e-9);
  const ty=(uy>0?box.bottom-anchor.y:anchor.y-box.top)/Math.max(Math.abs(uy),1e-9);
  const start=point(anchor,direction,Math.min(tx,ty)+5.2);
  drawLabelledBond({origin:anchor,start,angle:direction,kind:'line',side:ux<0?'left':'right'},group);
 }
}
function drawAlkyl(slot,key){const first=point(center,slot.angle,BOND),nextAngle=continuationAngle(slot);drawBond({...slot,joinAngle:nextAngle},first);if(key==='iPr'){const a=point(first,slot.angle-Math.PI/3,BOND),b=point(first,slot.angle+Math.PI/3,BOND);svg.append(el('line',{x1:first.x,y1:first.y,x2:a.x,y2:a.y,class:'chiral-bond'}),el('line',{x1:first.x,y1:first.y,x2:b.x,y2:b.y,class:'chiral-bond'}));return}const second=point(first,nextAngle,BOND);svg.append(el('line',{x1:first.x,y1:first.y,x2:second.x,y2:second.y,class:'chiral-bond'}));if(key==='Pr'){const third=point(second,slot.angle,BOND);svg.append(el('line',{x1:second.x,y1:second.y,x2:third.x,y2:third.y,class:'chiral-bond'}))}}
function draw(item){svg.replaceChildren();const names=[],alkyl=new Set(['Et','Pr','iPr']);slots.forEach((slot,i)=>{const key=item.groups[item.perm[i]],g=G[key];names.push(g.name);if(alkyl.has(key)){drawAlkyl(slot,key);return}if(['CH2Cl','CH2OH','NMe'].includes(key)){drawExpandedGroup(slot,key);return}drawLabelledBond(slot,key)});svg.setAttribute('aria-label',`Tetrahedral carbon attached to ${names.join(', ')}. The upper-left bond is a solid wedge and the upper-right bond is a hashed wedge.`)}
window.addEventListener('resize',()=>draw(active()[index]));
document.fonts.ready.then(()=>draw(active()[index]));
function fillMenu(){$('chiral-question').replaceChildren();active().forEach((_,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`Question ${i+1}`;$('chiral-question').append(o)})}
function answerButtons(){
 const ranking=mode==='priority',item=active()[index];priorityControls=[];
 $('priority-upper').replaceChildren();$('priority-lower').replaceChildren();
 $('priority-upper').hidden=!ranking;$('priority-lower').hidden=!ranking;$('chirality-options').hidden=ranking;
 if(ranking){
  const positions=['Lower left','Lower right','Upper left (solid wedge)','Upper right (hashed wedge)'];
  for(const i of [2,3,0,1]){
   const label=document.createElement('label'),caption=document.createElement('span'),select=document.createElement('select');
   caption.textContent=`${positions[i]} · ${G[item.groups[item.perm[i]]].name}`;
   select.setAttribute('aria-label',`Priority for ${caption.textContent}`);
   select.setAttribute('aria-describedby','chiral-view-note');
   for(const [value,text] of [['','Choose…'],['1','1 — highest'],['2','2'],['3','3'],['4','4 — lowest']]){
    const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);
   }
   select.value='';select.onchange=()=>{if(!answered)setFeedback('Use each number once: 1 is highest priority; 4 is lowest.');};
   priorityControls[i]=select;label.append(caption,select);$(i<2?'priority-lower':'priority-upper').append(label);
  }
  $('chirality-options').replaceChildren();return;
 }
 const choices=mode==='identify'?[['chiral','Chiral'],['achiral','Achiral']]:[['R','R'],['S','S']];
 $('chirality-options').replaceChildren(...choices.map(([value,label])=>{const b=document.createElement('button');b.type='button';b.dataset.answer=value;b.textContent=label;b.setAttribute('aria-pressed','false');b.onclick=()=>{if(answered)return;selected=value;[...$('chirality-options').children].forEach(x=>x.setAttribute('aria-pressed',String(x===b)))};return b}));
}
function setFeedback(text,state=''){feedback.textContent=text;feedback.dataset.state=state}
function repeated(groups){return groups.find((g,i)=>groups.indexOf(g)!==i)}
function priorityText(item){return item.groups.map((g,i)=>`${i+1} ${G[g].name}`).join(' > ')}
function update(){const item=active()[index];selected='';answered=false;hintLevel=0;$('chiral-hint').disabled=false;$('chiral-check').disabled=false;$('chiral-family').textContent=level[0].toUpperCase()+level.slice(1);$('chiral-prompt').textContent=mode==='identify'?'Is this molecule chiral or achiral?':mode==='priority'?'Assign priorities 1–4 to the four groups.':'Assign the configuration of the stereocentre.';
 $('chiral-view-note').textContent=mode==='priority'?'Use the selectors above and below the drawing to rank each group. 1 = highest priority; 4 = lowest. Wedge direction does not change priority.':'A solid wedge points towards you; a hashed wedge points away from you.';
 $('chiral-count').textContent=`Question ${index+1} of ${active().length}`;$('chiral-score').textContent=`Score: ${score} / ${attempts}`;$('chiral-progress').style.width=`${(index+1)/active().length*100}%`;$('chiral-question').value=index;answerButtons();draw(item);setFeedback(mode==='identify'?'Compare the four groups attached to the tetrahedral carbon.':mode==='priority'?'Use each number once, then select Check answer.':'Rank the four groups, orient priority 4 away, then trace 1 → 2 → 3.')}
function hint(){if(answered)return;const item=active()[index];hintLevel=Math.min(3,hintLevel+1);
 if(mode==='priority'){
  setFeedback(hintLevel===1?'Hint 1/3: Compare the atoms directly attached to the central carbon. Higher atomic number means higher priority.':hintLevel===2?'Hint 2/3: For a tie, compare the next atoms in decreasing atomic number; stop at the first difference. Count duplicate atoms for double and triple bonds.':`Hint 3/3: ${G[item.groups[0]].name} has priority 1; ${G[item.groups[3]].name} has priority 4.`);return;
 }
 if(mode==='identify'){const duplicate=repeated(item.groups);setFeedback(hintLevel===1?'Hint: A tetrahedral carbon is stereogenic only when all four attached groups are different.':duplicate?`Hint: Two attached groups are identical: ${G[duplicate].name}.`:'Hint: All four attached groups are different.');return}if(hintLevel===1){setFeedback(`Hint 1/3: Highest priority is ${G[item.groups[0]].name}; lowest priority is ${G[item.groups[3]].name}.`);return}if(hintLevel===2){setFeedback(`Hint 2/3: ${priorityText(item)}.`);return}setFeedback('Hint 3/3: View with priority 4 pointing away. Clockwise 1 → 2 → 3 is R; anticlockwise is S.')}
function check(){
 if(answered)return;const item=active()[index];let right;
 if(mode==='priority'){
  const result=evaluatePriorities(item,priorityControls.map(control=>Number(control.value)));
  if(result==='incomplete'){setFeedback('Assign a priority to all four groups before checking.','incorrect');return;}
  if(result==='duplicate'){setFeedback('Use each priority number once: 1, 2, 3 and 4.','incorrect');return;}
  right=result==='correct';priorityControls.forEach(control=>control.disabled=true);
 }else{if(!selected){setFeedback('Choose an answer before checking.','incorrect');return;}right=selected===item.answer;}
 attempts++;if(right)score++;answered=true;$('chiral-hint').disabled=true;$('chiral-check').disabled=true;
 const explanation=mode==='identify'?(item.answer==='chiral'?'The tetrahedral carbon has four different substituents.':`The carbon has two identical ${G[repeated(item.groups)].name} groups.`):mode==='priority'?`Priorities (highest to lowest): ${priorityText(item)}.`:`Priorities: ${priorityText(item)}. The configuration is ${item.answer}.`;
 setFeedback(`${right?'Correct.':'Incorrect.'} ${explanation}`,right?'correct':'incorrect');$('chiral-score').textContent=`Score: ${score} / ${attempts}`;
}
function setMode(next){mode=next;index=0;for(const name of ['identify','priority','assign'])$('chiral-mode-'+name).setAttribute('aria-pressed',String(next===name));fillMenu();update()}
function setLevel(next){level=next;index=0;document.querySelectorAll('[data-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===next)));fillMenu();update()}
$('chiral-mode-identify').onclick=()=>setMode('identify');$('chiral-mode-priority').onclick=()=>setMode('priority');$('chiral-mode-assign').onclick=()=>setMode('assign');document.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>setLevel(b.dataset.level));$('chiral-question').onchange=e=>{index=+e.target.value;update()};$('chiral-previous').onclick=()=>{index=(index+active().length-1)%active().length;update()};$('chiral-next').onclick=()=>{index=(index+1)%active().length;update()};$('chiral-hint').onclick=hint;$('chiral-check').onclick=check;fillMenu();update();
if(window.location?.hash==='#priorities')setMode('priority');
})();
