/* Conventional bond-line chair templates traced from the supplied reference.
   Atom identity and up/down configuration are independent of the drawing. */
(() => {
'use strict';
const $=id=>document.getElementById(id), NS='http://www.w3.org/2000/svg';
const groups={Me:['CH₃','H₃C'],Et:['CH₂CH₃','CH₃CH₂'],iPr:['CH(CH₃)₂','(CH₃)₂CH'],tBu:['C(CH₃)₃','(CH₃)₃C'],F:['F','F'],Cl:['Cl','Cl'],Br:['Br','Br']};
const names={Me:'methyl',Et:'ethyl',iPr:'isopropyl',tBu:'tert-butyl',F:'fluorine',Cl:'chlorine',Br:'bromine'};
const halogens=new Set(['F','Cl','Br']);
const bank=[];
const easyGroups=['Me','Et','F','Cl','Br'];
for(let n=0;n<20;n++){
 const c=n%6,up=Math.floor(n/5)%2===0,flip=Math.floor(n/10);
 bank.push({id:`easy-${n}`,level:'easy',flip,groups:[{c,up,g:easyGroups[n%easyGroups.length]}],target:0});
}
const moderatePatterns=[['Me','Me',1,true],['Me','Me',1,false],['Me','Et',2,true],['Me','F',3,false],['Et','Cl',1,false],['Me','Br',2,true],['Et','Me',3,false],['Cl','Me',1,true],['Br','Et',2,false],['Et','Et',3,true]];
for(let n=0;n<20;n++){
 const [g1,g2,c2,cis]=moderatePatterns[n%10],up=n%2===0,flip=n>=10?1:0;
 bank.push({id:`moderate-${n}`,level:'moderate',flip,groups:[{c:0,up,g:g1},{c:c2,up:cis?up:!up,g:g2}],target:n%2});
}
const hardPatterns=[
 [['tBu',0,true],['Me',2,false]],[['iPr',0,true],['F',2,true]],[['Et',0,false],['Br',3,true]],
 [['Me',0,true],['Me',2,true],['Cl',4,false]],[['Et',0,false],['Me',2,true],['F',4,false]],
 [['tBu',0,true],['Cl',3,false]],[['iPr',0,false],['Me',2,true],['Br',4,false]],
 [['Me',0,true],['Me',2,false],['Me',4,true]],[['Et',0,true],['Et',3,false],['Cl',4,true]],
 [['tBu',0,false],['Et',2,true],['F',4,false]]
];
for(let n=0;n<20;n++){
 const secondSet=n>=10,groupsForQuestion=hardPatterns[n%10].map(([g,c,up])=>({g,c:(c+(secondSet?1:0))%6,up:secondSet?!up:up}));
 bank.push({id:`hard-${n}`,level:'hard',flip:secondSet?1:0,groups:groupsForQuestion,target:n%groupsForQuestion.length});
}
const axialUp=(c,flip)=>((c+flip)%2===0);
const position=(g,flip)=>g.up===axialUp(g.c,flip)?'axial':'equatorial';
const axialPenalty={F:.25,Br:.38,Cl:.43,Me:1.7,Et:1.75,iPr:2.15,tBu:5.5};
function bestChairs(q){const cost=f=>q.groups.reduce((s,g)=>s+(position(g,f)==='axial'?axialPenalty[g.g]:0),0);const a=cost(0),b=cost(1);return Math.abs(a-b)<.01?[0,1]:[a<b?0:1]}
const chairVertices=[[132,-48],[78,48],[-30,18],[-132,48],[-78,-48],[30,-18]];
const equatorialVectors=[[108,30],[102,-30],[-54,96],[-108,-30],[-102,30],[54,-96]];
function geometry(c,flip){
 const mirror=flip?-1:1,sign=axialUp(c,flip)?1:-1;
 const [x,y]=chairVertices[c],p={x:320+x,y:200+mirror*y};
 const [ex,ey]=equatorialVectors[c],length=Math.hypot(ex,ey);
 const substituentLength=100;
 return {p,axial:{x:p.x,y:p.y-sign*substituentLength},equatorial:{x:p.x+substituentLength*ex/length,y:p.y+substituentLength*mirror*ey/length}};
}
function el(tag,attrs={},text){const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text!==undefined)e.textContent=text;return e}
function line(svg,a,b){svg.append(el('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:'chair-bond'}))}
function substituentBond(svg,a,b,ring,behindRing=false){
 // A crossing in a perspective chair is not another bonded atom.
 const cross=(u,v)=>u.x*v.y-u.y*v.x,r={x:b.x-a.x,y:b.y-a.y},crossings=[];
 for(let i=0;i<6;i++){const p=ring[i],q=ring[(i+1)%6],s={x:q.x-p.x,y:q.y-p.y},den=cross(r,s);if(Math.abs(den)<1e-6)continue;const v={x:p.x-a.x,y:p.y-a.y},t=cross(v,s)/den,u=cross(v,r)/den;if(t>.12&&t<.95&&u>.03&&u<.97)crossings.push({x:a.x+t*r.x,y:a.y+t*r.y,s})}
 line(svg,a,b);
 if(behindRing)for(const hit of crossings){const length=Math.hypot(hit.s.x,hit.s.y),ux=hit.s.x/length,uy=hit.s.y/length;svg.append(el('circle',{cx:hit.x,cy:hit.y,r:5,fill:'white'}));svg.append(el('line',{x1:hit.x-8*ux,y1:hit.y-8*uy,x2:hit.x+8*ux,y2:hit.y+8*uy,class:'chair-bond'}))}
}
function atom(svg,p,g,left){const label=groups[g][left?1:0];
 if(halogens.has(g)){svg.append(el('text',{x:p.x,y:p.y+8,'text-anchor':'middle',class:'chair-atom'},label));return}
 const bound=left?label.lastIndexOf('C'):0;
 svg.append(el('text',{x:p.x,y:p.y+8,'text-anchor':'middle',class:'chair-atom'},'C'));
 if(bound)svg.append(el('text',{x:p.x-8,y:p.y+8,'text-anchor':'end',class:'chair-atom'},label.slice(0,bound)));
 if(bound<label.length-1)svg.append(el('text',{x:p.x+8,y:p.y+8,'text-anchor':'start',class:'chair-atom'},label.slice(bound+1)));
}
function formulaWidth(text){return [...text].reduce((width,char)=>width+('₀₁₂₃₄₅₆₇₈₉'.includes(char)?9:'()'.includes(char)?8:14),0)}
function highlightGroup(svg,p,g,left){
 const label=groups[g][left?1:0];
 if(halogens.has(g)){const width=formulaWidth(label);svg.append(el('ellipse',{cx:p.x,cy:p.y,rx:width/2+11,ry:25,class:'chair-target'}));return}
 const bound=left?label.lastIndexOf('C'):0;
 const minX=p.x-8-formulaWidth(label.slice(0,bound));
 const maxX=p.x+8+formulaWidth(label.slice(bound+1));
 svg.append(el('ellipse',{cx:(minX+maxX)/2,cy:p.y,rx:(maxX-minX)/2+11,ry:25,class:'chair-target'}));
}
const chairMappings=[1,-1].flatMap(direction=>[0,2,4].map(offset=>c=>(direction*c+offset+6)%6));
const candidateCarbons=q=>[...new Set(q.groups.flatMap(g=>chairMappings.map(map=>map(g.c))))];
function flipPlacementCorrect(q,targetFlip,placement){
 return chairMappings.some(map=>q.groups.every(g=>{const c=map(g.c),type=position({...g,c},targetFlip),token=placement[`${c}-${type}`];return token!==undefined&&q.groups[token]?.g===g.g}));
}
function drawChair(q,flip,{interactive=false,highlight=false}={}){
 const svg=el('svg',{viewBox:'0 0 640 400',class:'chair-svg',role:interactive?'group':'img','aria-label':interactive?'Flipped chair with substituent positions to fill':`Cyclohexane chair ${flip?'B':'A'}, ${q.groups.map(g=>`${names[g.g]}, ${position(g,flip)}, ${g.up?'up':'down'}`).join('; ')}`});
 const points=Array.from({length:6},(_,c)=>geometry(c,flip).p);
 for(let c=0;c<6;c++)line(svg,points[c],points[(c+1)%6]);
 const entries=interactive?candidateCarbons(q).map(c=>({c})):q.groups;
 entries.forEach((g,i)=>{
  const geom=geometry(g.c,flip);
  for(const type of interactive?['axial','equatorial']:[position(g,flip)]){
   let p=geom[type],dx=p.x-geom.p.x,dy=p.y-geom.p.y,d=Math.hypot(dx,dy);
   const inwardAxial=type==='axial'&&((geom.p.y<200&&dy>0)||(geom.p.y>200&&dy<0));
   if(!interactive&&inwardAxial){p={x:p.x+30*dx/d,y:p.y+30*dy/d};dx=p.x-geom.p.x;dy=p.y-geom.p.y;d=Math.hypot(dx,dy)}
   substituentBond(svg,geom.p,{x:p.x-dx/d*22,y:p.y-dy/d*22},points,type==='axial'&&dy>0);
   if(interactive){
    const key=`${g.c}-${type}`,token=placed[key];
    const node=el('g',{class:`chair-slot${token!==undefined?' filled':''}`,tabindex:0,role:'button','data-slot':key,'aria-label':`${type[0].toUpperCase()+type.slice(1)} position${token!==undefined?', occupied by '+names[q.groups[token].g]:''}`});
    node.append(el('circle',{cx:p.x,cy:p.y,r:20}));
    if(token!==undefined)atom(node,p,q.groups[token].g,dx<-1);else node.append(el('text',{x:p.x,y:p.y+7,'text-anchor':'middle'},'+'));
    svg.append(node);
   }else{if(highlight&&i===q.target)highlightGroup(svg,p,g.g,dx<-1);atom(svg,p,g.g,dx<-1)}
  }
 });return svg;
}
let mode='identify',level='easy',index=0,answer={},placed={},selected=null;
const results=new Map();
const list=()=>bank.filter(q=>q.level===level),current=()=>list()[index];
function button(text,attrs){const b=document.createElement('button');b.textContent=text;Object.entries(attrs).forEach(([k,v])=>b.setAttribute(k,v));return b}
function panel(title,svg){const p=document.createElement('div');p.className='chair-panel';const h=document.createElement('h3');h.textContent=title;p.append(h,svg);return p}
function feedback(text,state=''){const e=$('ch-feedback');e.textContent=text;e.dataset.state=state}
function reset(){answer={};placed={};selected=null;render();feedback('Choose your answer, then select Check answer.')}
function render(){
 const q=current(),g=q.groups[q.target];
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===mode));
 document.querySelectorAll('[data-level]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.level===level));
 $('ch-question').replaceChildren(...list().map((item,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`Question ${i+1}`;return o}));$('ch-question').value=index;
 $('ch-count').textContent=`Question ${index+1} of 20`;
 const scores=[...results].filter(([key])=>key.startsWith(`${mode}/${level}/`));$('ch-score').textContent=`Score: ${scores.filter(([,v])=>v).length} / ${scores.length}`;$('ch-progress').style.width=`${scores.length/20*100}%`;
 const family=q.groups.length===1?'Monosubstituted cyclohexane':q.groups.length===2?'Disubstituted cyclohexane':'Trisubstituted cyclohexane';
 $('ch-family').textContent=level[0].toUpperCase()+level.slice(1)+' · '+family;
 $('ch-workspace').replaceChildren();$('ch-controls').replaceChildren();
 if(mode==='identify'){
  $('ch-prompt').textContent=`Describe the highlighted ${names[g.g]} group.`;
  $('ch-note').textContent='Choose its position and whether it points above or below the ring.';
  const p=panel('Chair conformation',drawChair(q,q.flip,{highlight:true}));p.classList.add('chair-single');$('ch-workspace').append(p);
  for(const [key,title,options] of [['position','Position',['Axial','Equatorial']],['direction','Direction',['Up','Down']]]){const row=document.createElement('div');row.className='chair-answer-row';const label=document.createElement('strong');label.textContent=title;row.append(label,...options.map(v=>button(v,{'data-answer':key,'data-value':v.toLowerCase(),'aria-pressed':answer[key]===v.toLowerCase()})));$('ch-controls').append(row)}
 }else if(mode==='flip'){
  $('ch-prompt').textContent='Place the substituents on the flipped chair.';
  $('ch-note').textContent='Redraw the ring clockwise or anticlockwise. Each group changes axial/equatorial and keeps its up/down direction; either correct rotation is accepted.';
  const grid=document.createElement('div');grid.className='chair-grid';grid.append(panel('Starting chair',drawChair(q,q.flip)),panel('Your flipped chair',drawChair(q,1-q.flip,{interactive:true})));$('ch-workspace').append(grid);
  const help=document.createElement('p');help.className='chair-help';help.textContent='Select or drag a group to a + position. Select an occupied position to return it.';const pieces=document.createElement('div');pieces.className='chair-pieces';
  q.groups.forEach((g,i)=>{const b=button(groups[g.g][0],{'data-piece':i,draggable:'true','aria-pressed':selected===i});b.disabled=Object.values(placed).includes(i);pieces.append(b)});$('ch-controls').append(help,pieces);
 }else{
  $('ch-prompt').textContent='Which chair conformation is more stable?';
  $('ch-note').textContent='Compare the positions of the substituents. Both drawings represent the same stereoisomer.';
  const grid=document.createElement('div');grid.className='chair-grid';for(let f=0;f<2;f++){const b=button('',{'data-answer':'stable','data-value':String(f),'aria-pressed':answer.stable===String(f),class:'chair-choice'});const title=document.createElement('strong');title.textContent=`Chair ${f?'B':'A'}`;b.append(title,drawChair(q,f));grid.append(b)}$('ch-workspace').append(grid);
  const row=document.createElement('div');row.className='chair-answer-row';row.append(button('Equally stable',{'data-answer':'stable','data-value':'equal','aria-pressed':answer.stable==='equal'}));$('ch-controls').append(row);
 }
}
function place(key){if(placed[key]!==undefined){delete placed[key];render();return}if(selected===null)return;for(const old of Object.keys(placed))if(placed[old]===selected)delete placed[old];placed[key]=selected;selected=null;render();feedback('Select Check answer when all groups are placed.')}
function check(){const q=current(),g=q.groups[q.target];let correct=false,explanation='';
 if(mode==='identify'){if(!answer.position||!answer.direction)return feedback('Choose both a position and a direction.');correct=answer.position===position(g,q.flip)&&answer.direction===(g.up?'up':'down');explanation=`The highlighted group is ${position(g,q.flip)} and ${g.up?'up':'down'}.`}
 if(mode==='flip'){if(Object.keys(placed).length!==q.groups.length)return feedback('Place every substituent before checking.');correct=flipPlacementCorrect(q,1-q.flip,placed);explanation='Clockwise and anticlockwise redrawings are both accepted. Each group swaps axial/equatorial and preserves up/down: '+q.groups.map(g=>`${groups[g.g][0]} becomes ${position(g,1-q.flip)} ${g.up?'up':'down'}`).join('; ')+'.'}
 if(mode==='stable'){if(answer.stable===undefined)return feedback('Select Chair A, Chair B, or Equally stable.');const best=bestChairs(q);correct=best.length===2?answer.stable==='equal':answer.stable===String(best[0]);explanation=best.length===2?'Both chairs have the same total axial steric demand.':`Chair ${best[0]?'B':'A'} is more stable because its larger substituents are equatorial, reducing axial steric strain.`;}
 results.set(`${mode}/${level}/${q.id}`,correct);render();feedback(`${correct?'Correct.':'Incorrect.'} ${explanation}`,correct?'correct':'incorrect');
}
document.addEventListener('click',e=>{const b=e.target.closest('button,[data-slot]');if(!b)return;
 if(b.dataset.mode){mode=b.dataset.mode;index=0;reset()}else if(b.dataset.level){level=b.dataset.level;index=0;reset()}else if(b.dataset.answer){answer[b.dataset.answer]=b.dataset.value;render();feedback('Select Check answer when ready.')}else if(b.dataset.piece!==undefined){selected=Number(b.dataset.piece);render()}else if(b.dataset.slot){place(b.dataset.slot)}else if(b.id==='ch-check')check();else if(b.id==='ch-clear')reset();else if(b.id==='ch-next'||b.id==='ch-previous'){index=(index+(b.id==='ch-next'?1:19))%20;reset()}else if(b.id==='ch-hint'){feedback(mode==='identify'?'Axial bonds are vertical and alternate up/down around the ring. The equatorial bond at each carbon points to the opposite face.':mode==='flip'?'You may redraw the ring clockwise or anticlockwise. In either case, up stays up and down stays down; axial becomes equatorial and equatorial becomes axial.':'Axial substituents have 1,3-diaxial interactions. Favour the chair that keeps the bulkiest substituents equatorial.')}
});
document.addEventListener('keydown',e=>{const slot=e.target.closest('[data-slot]');if(slot&&(e.key==='Enter'||e.key===' ')){e.preventDefault();place(slot.dataset.slot)}});
document.addEventListener('dragstart',e=>{const b=e.target.closest('[data-piece]');if(b){selected=Number(b.dataset.piece);e.dataTransfer.setData('text/plain',b.dataset.piece)}});
document.addEventListener('dragover',e=>{if(e.target.closest('[data-slot]'))e.preventDefault()});
document.addEventListener('drop',e=>{const b=e.target.closest('[data-slot]');if(b){e.preventDefault();place(b.dataset.slot)}});
$('ch-question').addEventListener('change',e=>{index=Number(e.target.value);reset()});
reset();
})();
