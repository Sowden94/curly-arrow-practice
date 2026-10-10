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
// Each alkene carbon carries two distinct ligands in descending CIP order.
// The second pass changes the relative positions, giving ten E and ten Z
// questions at each difficulty without changing the group priorities.
const ezSets={
 easy:[
  [['Br','H'],['Cl','H']],[['Me','H'],['Me','H']],[['Cl','H'],['Me','H']],[['F','H'],['Br','H']],[['Et','H'],['Me','H']],
  [['I','H'],['Cl','H']],[['Br','Me'],['Cl','H']],[['Cl','Me'],['F','H']],[['Me','H'],['F','H']],[['Br','H'],['Et','H']]
 ],
 moderate:[
  [['OH','Me'],['Br','H']],[['OMe','OH'],['Et','H']],[['NH2','Me'],['Cl','H']],[['NH2','Et'],['OH','Me']],[['CH2OH','Me'],['Et','H']],
  [['CHO','Me'],['Cl','H']],[['CO2H','CHO'],['Cl','Me']],[['CH2Cl','CH2OH'],['F','H']],[['iPr','Et'],['Br','Me']],[['CHO','Et'],['CO2H','Me']]
 ],
 hard:[
  [['CHO','CH2OH'],['CO2H','iPr']],[['CH2Cl','CO2H'],['CHO','CH2OH']],[['CH2OH','iPr'],['CHO','Et']],[['CO2H','CHO'],['CH2Cl','CH2OH']],[['CH2Cl','CHO'],['CO2H','iPr']],
  [['CO2H','CH2OH'],['CHO','Pr']],[['CH2Cl','CH2OH'],['CHO','iPr']],[['CHO','iPr'],['CH2OH','Pr']],[['CHO','CH2OH'],['CO2H','Et']],[['CH2Cl','CO2H'],['CH2OH','iPr']]
 ]
};
function buildEZ(level){const questions=Array.from({length:20},(_,i)=>{
 const [left,right]=ezSets[level][(i*7)%10],leftHighUpper=i%3!==0;
 const answer=(i<10 ? i%2===0 : i%2!==0)?'Z':'E';
 return{level,left,right,leftHighUpper,rightHighUpper:answer==='Z'?leftHighUpper:!leftHighUpper,answer};
 });
 // Stable shuffles give each level a different, non-predictable E/Z sequence.
 let seed={easy:8173,moderate:4987,hard:12041}[level];
 for(let i=questions.length-1;i>0;i--){seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;const j=(seed>>>0)%(i+1);[questions[i],questions[j]]=[questions[j],questions[i]]}
 if(level==='easy'){
  const sample=questions.findIndex(q=>q.left[0]==='Me'&&q.right[0]==='Me'&&q.answer==='Z');
  [questions[0],questions[sample]]=[questions[sample],questions[0]];
 }
 return questions;
}
banks.ez=Object.fromEntries(['easy','moderate','hard'].map(level=>[level,buildEZ(level)]));
// Fischer projections use the same vertical carbon chain in each pair.
// Distinct end groups remove internal symmetry, so reversing every centre
// gives the enantiomer and reversing some gives a diastereomer.
const fischerLigands=['Br','Cl','F','I','OH'];
const fischerPracticeLigands=['Br','Cl','F','I','OH','NH2'];
const fischerAtomicNumber={F:9,Cl:17,Br:35,I:53,OH:8,NH2:7};
// All side groups outrank the carbon-chain branches; H has priority 4.
// At an internal centre, the two adjacent carbons are compared by the
// directly attached side group at their first point of difference.
function fischerHighVertical(item,j){
 const n=item.groups.length;
 if(n===1)return item.bottom==='Me'?'up':'down';
 if(j===0)return'down';
 if(j===n-1)return'up';
 return fischerAtomicNumber[item.groups[j-1]]>fischerAtomicNumber[item.groups[j+1]]?'up':'down';
}
function fischerConfiguration(item,j){
 if(item.horizontalPairs){
  const order=fischerPriorityPositions(item,j),v={left:[-1,0,1],right:[1,0,1],up:[0,1,-1],down:[0,-1,-1]};
  const origin=v[order[3]],relative=p=>v[p].map((x,k)=>x-origin[k]);
  return determinant(relative(order[0]),relative(order[1]),relative(order[2]))<0?'R':'S';
 }
 const groupRight=!item.sides[j],highUp=fischerHighVertical(item,j)==='up';
 // Use conventional Cartesian coordinates (positive y is up), rather than
 // SVG screen coordinates, when reading the apparent 1 → 2 → 3 direction.
 const p1=groupRight?[1,0]:[-1,0],p2=highUp?[0,1]:[0,-1],p3=highUp?[0,-1]:[0,1];
 const turn=(p2[0]-p1[0])*(p3[1]-p1[1])-(p2[1]-p1[1])*(p3[0]-p1[0]);
 // H is horizontal and therefore points towards us, so reverse the apparent
 // result: anticlockwise becomes R and clockwise becomes S.
 return turn>0?'R':'S';
}
function fischerExpectedAnswers(item){
 return item.groups.map((_,j)=>fischerConfiguration(item,j));
}
function fischerPriorityPositions(item,j){
 const leaf=z=>[z,[]],H=()=>leaf(1),carbon=children=>[6,children];
 const ligand=key=>{
  if(['H','F','Cl','Br','I'].includes(key))return leaf({H:1,F:9,Cl:17,Br:35,I:53}[key]);
  if(key==='OH')return[8,[H()]];if(key==='NH2')return[7,[H(),H()]];
  if(key==='OMe')return[8,[ligand('Me')]];
  if(key==='Me')return carbon([H(),H(),H()]);
  if(key==='Et')return carbon([ligand('Me'),H(),H()]);
  if(key==='Pr')return carbon([ligand('Et'),H(),H()]);
  if(key==='iPr')return carbon([ligand('Me'),ligand('Me'),H()]);
  if(key==='CH2OH')return carbon([ligand('OH'),H(),H()]);
  if(key==='CH2Cl')return carbon([ligand('Cl'),H(),H()]);
  throw new Error(`Unsupported Fischer ligand: ${key}`);
 };
 const compare=(a,b)=>{if(a[0]!==b[0])return a[0]-b[0];const aa=[...a[1]].sort((x,y)=>compare(y,x)),bb=[...b[1]].sort((x,y)=>compare(y,x));for(let k=0;k<Math.max(aa.length,bb.length);k++){const d=compare(aa[k]||leaf(0),bb[k]||leaf(0));if(d)return d}return 0};
 const pair=k=>item.horizontalPairs?item.horizontalPairs[k]:item.sides[k]?[item.groups[k],'H']:['H',item.groups[k]];
 const branch=(k,d)=>k<0?ligand(item.top):k>=item.groups.length?ligand(item.bottom):carbon([...pair(k).map(ligand),branch(k+d,d)]);
 const ranked=[['left',ligand(pair(j)[0])],['right',ligand(pair(j)[1])],['up',branch(j-1,-1)],['down',branch(j+1,1)]].sort((a,b)=>compare(b[1],a[1]));
 for(let k=1;k<4;k++)if(compare(ranked[k-1][1],ranked[k][1])===0)throw new Error('Nonstereogenic Fischer centre');
 return ranked.map(x=>x[0]);
}
function fischerQuestion(level,i){
 const n={easy:1,moderate:2,hard:3}[level],cycle=2**n;
 const shift=Math.floor(i/cycle)%fischerPracticeLigands.length;
 const groups=Array.from({length:n},(_,j)=>fischerPracticeLigands[(shift+j)%fischerPracticeLigands.length]);
 const sides=groups.map((_,j)=>Boolean((i>>j)&1));
 const item={level,top:'Me',bottom:level==='easy'&&i>=12?'Pr':'Et',groups,sides};
 if(i>=8){
  const t=i-8,ends=['Et','Pr','CH2OH','CH2Cl','iPr','Me'];
  item.top=ends[t%6];item.bottom=ends[(t+2)%6];
  item.groups=Array.from({length:n},(_,j)=>['OH','NH2','Cl','Br','F','OMe'][(t+j*2)%6]);
  item.horizontalPairs=item.groups.map((g,j)=>(t+j+Math.floor(t/6))%2?[g,'H']:['H',g]);
  // Vertical H is a genuine terminal substituent. Move the displaced
  // carbon branch onto a horizontal bond; never rotate a Fischer by 90°.
  if(t%3!==2){const top=t%3===0,k=top?0:n-1,end=top?'top':'bottom';
   const p=item.horizontalPairs[k],h=p.indexOf('H');p[h]=item[end];item[end]='H';
  }
 }
 return{...item,answer:fischerExpectedAnswers(item)};
}
banks.fischer=Object.fromEntries(['easy','moderate','hard'].map(level=>[level,Array.from({length:20},(_,i)=>fischerQuestion(level,i))]));
banks.relation=globalThis.stereoisomerPairBanks;
banks.count=globalThis.diastereomerCountBanks;
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
if(globalThis.__CHIRALITY_TEST__){globalThis.chiralityApi={G,banks,descriptor,perms,vectors,attachmentSpec,evaluatePriorities,fischerConfiguration,fischerHighVertical,fischerPriorityPositions};return}
const $=id=>document.getElementById(id),svg=$('chirality-structure'),feedback=$('chiral-feedback');
let mode='identify',level='easy',index=0,selected='',score=0,attempts=0,answered=false,hintLevel=0;
let countStage='centers',selectedCenters=new Set(),countMarkerLayer=null;
let priorityControls=[],fischerControls=[];
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
 const {text,atom,index}=spec,origin=slot.origin||center,bondLength=slot.bondLength||BOND;
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
 const anchor=point(origin,slot.angle,bondLength+far);
 label.setAttribute('x',anchor.x-ax);label.setAttribute('y',anchor.y-ay);
 label.setAttribute('data-atom-x',anchor.x);label.setAttribute('data-atom-y',anchor.y);
 label.setAttribute('data-origin-x',origin.x);label.setAttribute('data-origin-y',origin.y);label.setAttribute('data-angle',slot.angle);
 drawBond(slot,point(origin,slot.angle,bondLength));
 return{anchor,box:{left:anchor.x+box.left,right:anchor.x+box.right,top:anchor.y+box.top,bottom:anchor.y+box.bottom}};
}
function drawEZMethyl(slot){
 return drawLabelledBond(slot,'Me');
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
function continuationAngle(slot){
 if(slot.ez)return slot.side==='left'?(slot.angle<0?-Math.PI:Math.PI):0;
 const upper=slot.angle<0;return slot.angle+(slot.side==='left'?(upper?-Math.PI/3:Math.PI/3):(upper?Math.PI/3:-Math.PI/3));
}
function drawExpandedGroup(slot,key){
 const origin=slot.origin||center,bondLength=slot.bondLength||BOND;
 if(key==='CH2Cl'||key==='CH2OH'){
  // The unlabeled vertex is CH2. A separate bond makes C-Cl / C-O explicit.
  const carbon=point(origin,slot.angle,bondLength),angle=continuationAngle(slot);
  drawBond({...slot,joinAngle:angle},carbon);
  drawLabelledBond({origin:carbon,angle,kind:'line',side:Math.cos(angle)<0?'left':'right',bondLength:slot.bondLength},key==='CH2Cl'?'Cl':'OH');
  return;
 }
 // Methylamino: show all three bonds at nitrogen, so none appears to end on H.
 const nitrogen=drawLabelledBond(slot,key,{text:'N',atom:'N',index:0}),angle=continuationAngle(slot);
 for(const [group,direction] of [['Me',angle],['H',2*slot.angle-angle]]){
  const {anchor,box}=nitrogen,ux=Math.cos(direction),uy=Math.sin(direction);
  const tx=(ux>0?box.right-anchor.x:anchor.x-box.left)/Math.max(Math.abs(ux),1e-9);
  const ty=(uy>0?box.bottom-anchor.y:anchor.y-box.top)/Math.max(Math.abs(uy),1e-9);
  const start=point(anchor,direction,Math.min(tx,ty)+5.2);
  const branch={origin:anchor,start,angle:direction,kind:'line',side:ux<0?'left':'right',bondLength:slot.bondLength};
  if(slot.ez&&group==='Me')drawBond(branch,point(anchor,direction,slot.bondLength||BOND));
  else drawLabelledBond(branch,group);
 }
}
function drawAlkyl(slot,key){
 const origin=slot.origin||center,bondLength=slot.bondLength||BOND,first=point(origin,slot.angle,bondLength),nextAngle=continuationAngle(slot);
 drawBond({...slot,joinAngle:nextAngle},first);
 if(key==='iPr'){
  for(const angle of [slot.angle-Math.PI/3,slot.angle+Math.PI/3]){
   const branch={origin:first,angle,kind:'line',side:Math.cos(angle)<0?'left':'right',bondLength};
   drawBond(branch,point(first,angle,bondLength));
  }
  return;
 }
 const second=point(first,nextAngle,bondLength);
 drawBond({origin:first,kind:'line'},second);
 if(key==='Pr')drawBond({origin:second,kind:'line'},point(second,slot.angle,bondLength));
}
function drawSubstituent(slot,key){
 if(['Et','Pr','iPr'].includes(key))drawAlkyl(slot,key);
 else if(['CH2Cl','CH2OH','NMe'].includes(key))drawExpandedGroup(slot,key);
 else drawLabelledBond(slot,key);
}
function drawEZ(item){
 svg.replaceChildren();const left={x:291,y:195},right={x:349,y:195},bondLength=48;
 // Both parallel strokes span the full C=C bond; the main stroke shares its
 // carbon vertices with all four substituent bonds.
 svg.append(el('line',{x1:left.x,y1:195,x2:right.x,y2:195,class:'chiral-bond'}),el('line',{x1:left.x,y1:203,x2:right.x,y2:203,class:'chiral-bond'}));
 const positions=[
  {origin:left,angle:-Math.PI*2/3,side:'left',kind:'line',ez:true,bondLength,key:item.left[item.leftHighUpper?0:1]},
  {origin:left,angle:Math.PI*2/3,side:'left',kind:'line',ez:true,bondLength,key:item.left[item.leftHighUpper?1:0]},
  {origin:right,angle:-Math.PI/3,side:'right',kind:'line',ez:true,bondLength,key:item.right[item.rightHighUpper?0:1]},
  {origin:right,angle:Math.PI/3,side:'right',kind:'line',ez:true,bondLength,key:item.right[item.rightHighUpper?1:0]}
 ];
 positions.forEach(({key,...slot})=>{
  if(key==='Me')drawEZMethyl(slot);
  else drawSubstituent(slot,key);
 });
 svg.setAttribute('aria-label',`Alkene with ${G[positions[0].key].name} above and ${G[positions[1].key].name} below the left carbon; ${G[positions[2].key].name} above and ${G[positions[3].key].name} below the right carbon.`);
}
function drawFischer(item,sides,x,caption){
 const n=item.groups.length,step=64,first=195-(n-1)*step/2,last=first+(n-1)*step;
 if(caption)svg.append(el('text',{x,y:27,class:'chiral-fischer-caption','text-anchor':'middle'},caption));
 const horizontal=(y,key,onLeft)=>{
  const label=G[key][onLeft?'left':'right'];
  labelMeasure.font='27px Arial';
  const bondLength=64,gap=5;
  const bondEnd=x+(onLeft?-bondLength:bondLength);
  const labelX=bondEnd+(onLeft?-gap:gap);
  svg.append(el('line',{x1:x,y1:y,x2:bondEnd,y2:y,class:'chiral-bond','data-fischer-horizontal':'true'}));
  svg.append(el('text',{x:labelX,y,class:'chiral-label chiral-fischer-label','text-anchor':onLeft?'end':'start','dominant-baseline':'middle'},label));
 };
 const terminal=(key,y,position)=>{
  const label=G[key].right;
  labelMeasure.font='27px Arial';
  // A condensed formula attaches through its first carbon. Centre that
  // glyph over the vertical bond, regardless of the rest of the formula.
  const carbon=labelInkBounds(label).glyphs[0];
  const carbonCentre=(carbon.left+carbon.right)/2;
  svg.append(el('text',{x:x-carbonCentre,y,class:'chiral-label chiral-fischer-label','text-anchor':'start','dominant-baseline':'middle','data-fischer-terminal':position,'data-fischer-x':x},label));
 };
 // Fischer convention: horizontal bonds project towards the viewer and
 // vertical bonds project away. Unlabelled crossings are carbon centres.
 svg.append(el('line',{x1:x,y1:first-64,x2:x,y2:last+64,class:'chiral-bond','data-fischer-chain':'true'}));
 // sides[j] means the non-H substituent is on the LEFT, exactly as in
 // fischerConfiguration. The former drawing used this boolean backwards.
 sides.forEach((groupOnLeft,j)=>{
  const y=first+j*step;
  if(item.horizontalPairs){horizontal(y,item.horizontalPairs[j][0],true);horizontal(y,item.horizontalPairs[j][1],false)}
  else{horizontal(y,'H',!groupOnLeft);horizontal(y,item.groups[j],groupOnLeft)}
 });
 terminal(item.top,first-79,'top');
 terminal(item.bottom,last+79,'bottom');
}
function drawGraph(item,svg){
 const atoms=Object.fromEntries(item.atoms.map(atom=>[atom.id,atom]));
 for(const bond of item.bonds){
  const a=atoms[bond.a],b=atoms[bond.b],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy),ux=dx/length,uy=dy/length;
  // Keep stereobond faces clear of the full atom label. Their broad ends
  // need a little more breathing room than an ordinary line or carbonyl.
  const labelClearance=atom=>!atom.label?0:bond.stereo?(Math.abs(uy)>.85?18:17):(Math.abs(uy)>.85?13:14);
  const startClearance=labelClearance(a),endClearance=labelClearance(b);
  const start={x:a.x+ux*startClearance,y:a.y+uy*startClearance};
  const end={x:b.x-ux*endClearance,y:b.y-uy*endClearance};
  if(bond.stereo==='wedge'){
   const half=6,nx=-uy,ny=ux;
   // A slight overlap at an unlabelled carbon prevents a hairline seam where
   // the wedge and the adjoining skeletal bonds are anti-aliased separately.
   const tip=a.label?start:{x:start.x-ux*1.5,y:start.y-uy*1.5};
   svg.append(el('polygon',{points:`${tip.x},${tip.y} ${end.x+nx*half},${end.y+ny*half} ${end.x-nx*half},${end.y-ny*half}`,class:'chiral-count-wedge'}));
  }else if(bond.stereo==='dash'){
   for(let k=0;k<=7;k++){
    const t=k/7,half=.35+5.65*t,cx=start.x+(end.x-start.x)*t,cy=start.y+(end.y-start.y)*t,nx=-uy,ny=ux;
    svg.append(el('line',{x1:cx-nx*half,y1:cy-ny*half,x2:cx+nx*half,y2:cy+ny*half,class:'chiral-count-dash'}));
   }
  }else{
   const line=(p,q,extra={})=>svg.append(el('line',{x1:p.x,y1:p.y,x2:q.x,y2:q.y,class:'chiral-bond chiral-count-bond',...extra}));
   if(bond.order===2&&b.element==='O'){
    // Centre both carbonyl strokes on C and O. Extend each start to its
    // adjoining C–C bond so neither stroke floats below the carbon vertex.
    for(const offset of [-2.5,2.5]){
     const nx=-uy*offset,ny=ux*offset;
     let along=0;
     for(const other of item.bonds.filter(e=>e!==bond&&(e.a===a.id||e.b===a.id))){
      const c=atoms[other.a===a.id?other.b:other.a],vx=c.x-a.x,vy=c.y-a.y;
      const cross=ux*vy-uy*vx;
      if(Math.abs(cross)>1e-8){
       const t=(vx*ny-vy*nx)/cross;
       const h=((nx+ux*t)*vx+(ny+uy*t)*vy)/(vx*vx+vy*vy);
       if(h>=0&&h<=1)along=Math.min(along,t);
      }
     }
     line({x:a.x+nx+ux*along,y:a.y+ny+uy*along},{x:end.x+nx,y:end.y+ny},{'data-carbonyl':'true'});
    }
   }else{
    line(start,end);
    if(bond.order===2){
     // Ring alkenes conventionally carry the second stroke inside the ring.
     // For an acyclic alkene, put it on the open side of the C=C–C angle so
     // the double bond does not crowd the adjoining single bond.
     let side=0;
     for(const other of item.bonds.filter(e=>e!==bond&&(e.a===a.id||e.b===a.id||e.a===b.id||e.b===b.id))){
      const origin=other.a===a.id||other.b===a.id?a:b;
      const c=atoms[other.a===origin.id?other.b:other.a];
      side+=(c.x-origin.x)*(-uy)+(c.y-origin.y)*ux;
     }
     const reachesOtherEnd=()=>{
      const seen=new Set([a.id]),stack=[a.id];
      while(stack.length){
       const id=stack.pop();
       for(const other of item.bonds){
        if(other===bond||other.a!==id&&other.b!==id)continue;
        const next=other.a===id?other.b:other.a;
        if(next===b.id)return true;
        if(!seen.has(next)){seen.add(next);stack.push(next)}
       }
      }
      return false;
     };
     const towardSkeleton=side<0?-1:1,direction=reachesOtherEnd()?towardSkeleton:-towardSkeleton;
     const separation=7,nx=-uy*separation*direction,ny=ux*separation*direction;
     // Both strokes represent the same C=C bond and must have equal length.
     line({x:start.x+nx,y:start.y+ny},{x:end.x+nx,y:end.y+ny},{'data-alkene-inset':'true'});
    }
   }

  }
 }
 for(const atom of item.atoms){
  if(!atom.label)continue;
  labelMeasure.font='25px Arial';
  const connection=item.bonds.find(b=>b.a===atom.id||b.b===atom.id);
  const parent=connection&&atoms[connection.a===atom.id?connection.b:connection.a];
  const left=parent&&atom.x<parent.x-1;
  const formulas={'OH':['HO','OH'],'NH₂':['H₂N','NH₂'],'CH₃':['H₃C','CH₃'],'CF₃':['F₃C','CF₃']};
  const formula=formulas[atom.label]?.[left?0:1]||atom.label;
  const attachAtom={'OH':'O','NH₂':'N','CH₃':'C','CF₃':'C'}[atom.label];
  const attachIndex=attachAtom?formula.indexOf(attachAtom):-1;
  const ink=attachAtom?labelInkBounds(formula).glyphs[attachIndex]:null;
  const x=ink?atom.x-(ink.left+ink.right)/2:atom.x;
  svg.append(el('text',{x,y:atom.y,class:'chiral-label chiral-count-label','text-anchor':ink?'start':'middle','dominant-baseline':'middle','data-graph-label':atom.id,'data-graph-attachment':attachAtom||atom.element,'data-graph-direction':left?'left':'right'},formula));
 }
 }
function drawCountStructure(item){
 svg.replaceChildren();
 drawGraph(item,svg);
 countMarkerLayer=el('g',{class:'chiral-count-markers'});svg.append(countMarkerLayer);
 renderCountSelections();
 for(const atom of item.atoms.filter(atom=>atom.element==='C')){
  const hit=el('circle',{cx:atom.x,cy:atom.y,r:17,class:'chiral-count-hit',tabindex:0,role:'button','aria-label':`Carbon at ${Math.round(atom.x)}, ${Math.round(atom.y)}`,'aria-pressed':String(selectedCenters.has(atom.id)),'data-carbon-id':atom.id});
  const toggle=()=>{
   if(answered||countStage!=='centers')return;
   if(selectedCenters.has(atom.id))selectedCenters.delete(atom.id);else selectedCenters.add(atom.id);
   hit.setAttribute('aria-pressed',String(selectedCenters.has(atom.id)));
   renderCountSelections();
   setFeedback(`${selectedCenters.size} carbon${selectedCenters.size===1?'':'s'} selected. Check your choices when ready.`);
  };
  hit.onclick=toggle;hit.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle()}};
  svg.append(hit);
 }
 svg.setAttribute('aria-label',`${item.kind} shown as a bond-line structure without pre-drawn stereochemistry. Select every stereogenic carbon before determining the number of possible stereoisomers.`);
}
function renderCountSelections(){
 if(!countMarkerLayer)return;
 const atoms=Object.fromEntries(banks.count[level][index].atoms.map(atom=>[atom.id,atom]));
 countMarkerLayer.replaceChildren(...[...selectedCenters].filter(id=>atoms[id]).map(id=>el('circle',{cx:atoms[id].x,cy:atoms[id].y,r:14,class:'chiral-count-selection'})));
}
function draw(item){
 if(mode==='ez'){drawEZ(item);return}
 if(mode==='count'){drawCountStructure(item);return}
 if(mode==='relation'){
  svg.replaceChildren();
  for(const [graph,x,label] of [[item.leftGraph,-160,'Compound 1'],[item.rightGraph,160,'Compound 2']]){
   const group=el('g',{transform:`translate(${x} 0)`});
   drawGraph(graph,group);svg.append(group);
   svg.append(el('text',{x:320+x,y:58,class:'chiral-fischer-caption','text-anchor':'middle'},label));
  }
  svg.setAttribute('aria-label','Two skeletal structures with wedge and hashed bonds. Determine their stereochemical relationship.');
  return;
 }
 if(mode==='fischer'){
  svg.replaceChildren();drawFischer(item,item.sides,320,'');
  svg.setAttribute('aria-label',`Fischer projection with ${item.groups.length} stereogenic centres. Assign R or S at each crossing.`);return;
 }

 svg.replaceChildren();const names=[];slots.forEach((slot,i)=>{const key=item.groups[item.perm[i]];names.push(G[key].name);drawSubstituent(slot,key)});svg.setAttribute('aria-label',`Tetrahedral carbon attached to ${names.join(', ')}. The upper-left bond is a solid wedge and the upper-right bond is a hashed wedge.`)
}
window.addEventListener('resize',()=>draw(active()[index]));
document.fonts.ready.then(()=>draw(active()[index]));
function fillMenu(){$('chiral-question').replaceChildren();active().forEach((_,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`Question ${i+1}`;$('chiral-question').append(o)})}
function answerButtons(){
 const ranking=mode==='priority',assignFischer=mode==='fischer',findingCenters=mode==='count'&&countStage==='centers',item=active()[index];priorityControls=[];fischerControls=[];
 $('priority-upper').replaceChildren();$('priority-lower').replaceChildren();
 $('fischer-answers').replaceChildren();$('fischer-answers').hidden=!assignFischer;
 $('priority-upper').hidden=!ranking;$('priority-lower').hidden=!ranking;$('chirality-options').hidden=ranking||assignFischer||findingCenters;
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
 if(assignFischer){
  item.groups.forEach((_,j)=>{
   const label=document.createElement('label'),caption=document.createElement('span'),select=document.createElement('select');
   caption.textContent=item.groups.length===1?'Stereogenic centre':`Centre ${j+1} (${j===0?'top':j===item.groups.length-1?'bottom':'middle'})`;
   select.setAttribute('aria-label',`Configuration of ${caption.textContent}`);
   select.setAttribute('aria-describedby','chiral-view-note');
   for(const [value,name] of [['','Choose…'],['R','R'],['S','S']]){
    const option=document.createElement('option');option.value=value;option.textContent=name;select.append(option);
   }
   select.value='';fischerControls.push(select);label.append(caption,select);$('fischer-answers').append(label);
  });
  $('chirality-options').replaceChildren();return;
 }
 if(findingCenters){$('chirality-options').replaceChildren();return;}
 const total=mode==='count'?2**item.centers.length:0;
 const numbers=mode==='count'?(total===2?[0,1,2,4]:[total-4,total-2,total-1,total]):[];
 const rotated=numbers.map((_,j)=>numbers[(j+index)%numbers.length]);
 const choices=mode==='identify'?[['chiral','Chiral'],['achiral','Achiral']]:mode==='ez'?[['E','E'],['Z','Z']]:mode==='relation'?[['same','Same Molecule'],['enantiomers','Enantiomers'],['diastereomers','Diastereomers'],['constitutional','Constitutional Isomers']]:mode==='count'?rotated.map(n=>[String(n),String(n)]):[['R','R'],['S','S']];
 $('chirality-options').replaceChildren(...choices.map(([value,label])=>{const b=document.createElement('button');b.type='button';b.dataset.answer=value;b.textContent=label;b.setAttribute('aria-pressed','false');b.onclick=()=>{if(answered)return;selected=value;[...$('chirality-options').children].forEach(x=>x.setAttribute('aria-pressed',String(x===b)))};return b}));
}
function setFeedback(text,state=''){feedback.textContent=text;feedback.dataset.state=state}
function repeated(groups){return groups.find((g,i)=>groups.indexOf(g)!==i)}
function priorityText(item){return item.groups.map((g,i)=>`${i+1} ${G[g].name}`).join(' > ')}
function update(){const item=active()[index];selected='';answered=false;hintLevel=0;countStage='centers';selectedCenters=new Set();$('chiral-hint').disabled=false;$('chiral-check').disabled=false;$('chiral-check').textContent=mode==='count'?'Check centres':'Check answer';$('chiral-family').textContent=level[0].toUpperCase()+level.slice(1);$('chiral-prompt').textContent=mode==='identify'?'Is this molecule chiral or achiral?':mode==='priority'?'Assign priorities 1–4 to the four groups.':mode==='ez'?'Is this alkene E or Z?':mode==='fischer'?'Assign R or S to each stereogenic centre.':mode==='relation'?'What is the relationship between these two molecules?':mode==='count'?'Select every stereogenic centre in this molecule.':'Assign the configuration of the stereocentre.';
 $('chiral-view-note').textContent=mode==='priority'?'Use the selectors above and below the drawing to rank each group. 1 = highest priority; 4 = lowest. Wedge direction does not change priority.':mode==='ez'?'Compare the higher-priority group on each carbon of the double bond. Same side = Z; opposite sides = E.':mode==='count'?'Click the carbon vertices you think are stereogenic, then select Check centres.':mode==='relation'?'Compare connectivity first, then match the stereogenic centres. The drawings may be reoriented.':mode==='fischer'?'Fischer projections: horizontal bonds point towards you; vertical bonds point away from you. Each crossing is a carbon.':'A solid wedge points towards you; a hashed wedge points away from you.';
 $('chiral-count').textContent=`Question ${index+1} of ${active().length}`;$('chiral-score').textContent=`Score: ${score} / ${attempts}`;$('chiral-progress').style.width=`${(index+1)/active().length*100}%`;$('chiral-question').value=index;answerButtons();draw(item);setFeedback(mode==='identify'?'Compare the four groups attached to the tetrahedral carbon.':mode==='priority'?'Use each number once, then select Check answer.':mode==='ez'?'Rank the two groups attached to each alkene carbon, then compare the higher-priority groups.':mode==='fischer'?'Assign R or S at each crossing, working from top to bottom.':mode==='relation'?'Match corresponding atoms before comparing the configuration at each stereogenic centre.':mode==='count'?'Select the stereogenic carbons in the drawing. Click a selected carbon again to remove it.':'Rank the four groups, orient priority 4 away, then trace 1 → 2 → 3.')}
function hint(){const item=active()[index];hintLevel=Math.min(3,hintLevel+1);
 if(mode==='fischer'){
  setFeedback(hintLevel===1?'Hint 1/3: Each crossing is a carbon. Horizontal bonds point towards you; vertical bonds point away. Locate priority 4 at each centre.':hintLevel===2?'Hint 2/3: Rank all four groups by CIP rules. For carbon branches, compare the next attached atoms at the first point of difference.':'Hint 3/3: Trace priorities 1 → 2 → 3. Reverse the apparent result only when priority 4 is horizontal; keep it when priority 4 is vertical.');return;
 }
 if(mode==='relation'){
  setFeedback(hintLevel===1?'Hint 1/3: Trace the connectivity. Are the substituents attached to the same corresponding carbons?':hintLevel===2?'Hint 2/3: Rotate the structures mentally and match corresponding centres. A wedge changing to a dash in a reoriented drawing does not by itself prove inversion.':'Hint 3/3: With matching connectivity, compare configurations: all unchanged means the same molecule; all inverted means enantiomers; only some inverted means diastereomers.');return;
 }
 if(mode==='count'){
  if(countStage==='centers')setFeedback(hintLevel===1?'Hint 1/3: Look for tetrahedral carbons with four different attached groups. A CH₂ carbon or an alkene carbon is not a stereogenic centre.':hintLevel===2?'Hint 2/3: Trace both paths around a ring; they can be different even when both first atoms are carbon.':'Hint 3/3: Trace all four substituent paths from each tetrahedral carbon. Remember that an unlabelled fourth bond may be an implicit H.');
  else setFeedback(hintLevel===1?'Hint 1/3: With n independent stereogenic centres, there are up to 2ⁿ stereoisomers.':hintLevel===2?'Hint 2/3: The examples in this set have no internal symmetry, so the full 2ⁿ count applies.':'Hint 3/3: Evaluate 2ⁿ. For example, three independent stereogenic centres give 2³ = 8 stereoisomers.');
  return;
 }
 if(mode==='priority'){
  setFeedback(hintLevel===1?'Hint 1/3: Compare the atoms directly attached to the central carbon. Higher atomic number means higher priority.':hintLevel===2?'Hint 2/3: For a tie, compare the next atoms in decreasing atomic number; stop at the first difference. Count duplicate atoms for double and triple bonds.':`Hint 3/3: ${G[item.groups[0]].name} has priority 1; ${G[item.groups[3]].name} has priority 4.`);return;
 }
 if(mode==='ez'){
  setFeedback(hintLevel===1?'Hint 1/3: Choose the higher-priority group on each carbon of the double bond. Compare the directly attached atoms first.':hintLevel===2?'Hint 2/3: If those atoms tie, compare the next attached atoms in decreasing atomic number. Treat multiple bonds using duplicate atoms.':`Hint 3/3: Compare ${G[item.left[0]].name} on the left with ${G[item.right[0]].name} on the right. Are they on the same side or opposite sides?`);return;
 }
 if(mode==='identify'){const duplicate=repeated(item.groups);setFeedback(hintLevel===1?'Hint: A tetrahedral carbon is stereogenic only when all four attached groups are different.':duplicate?`Hint: Two attached groups are identical: ${G[duplicate].name}.`:'Hint: All four attached groups are different.');return}if(hintLevel===1){setFeedback(`Hint 1/3: Highest priority is ${G[item.groups[0]].name}; lowest priority is ${G[item.groups[3]].name}.`);return}if(hintLevel===2){setFeedback(`Hint 2/3: ${priorityText(item)}.`);return}setFeedback('Hint 3/3: View with priority 4 pointing away. Clockwise 1 → 2 → 3 is R; anticlockwise is S.')}
function retryWithHint(message=''){
 hint();const clue=feedback.textContent;
 setFeedback(`Incorrect — try again.${message?' '+message:''} ${clue}`,'incorrect');
}
function check(){
 if(answered)return;const item=active()[index],fischerExpected=mode==='fischer'?fischerExpectedAnswers(item):null;let right;
 if(mode==='count'&&countStage==='centers'){
  if(!selectedCenters.size){setFeedback('Select the stereogenic carbons before checking.','incorrect');return;}
  const correct=item.centers.length===selectedCenters.size&&item.centers.every(id=>selectedCenters.has(id));
  if(!correct){retryWithHint('Some stereogenic carbons are missing, or a selected carbon is not stereogenic.');return;}
  countStage='number';hintLevel=0;selected='';$('chiral-check').textContent='Check answer';$('chiral-prompt').textContent='How many stereoisomers are possible?';$('chiral-view-note').textContent='Use 2ⁿ, where n is the number of independent stereogenic centres. These structures have no internal symmetry.';
  answerButtons();setFeedback(`Correct: you found ${item.centers.length} stereogenic centre${item.centers.length===1?'':'s'}. Now choose the total number of possible stereoisomers.`,'correct');return;
 }
 if(mode==='priority'){
  const result=evaluatePriorities(item,priorityControls.map(control=>Number(control.value)));
  if(result==='incomplete'){setFeedback('Assign a priority to all four groups before checking.','incorrect');return;}
  if(result==='duplicate'){setFeedback('Use each priority number once: 1, 2, 3 and 4.','incorrect');return;}
  right=result==='correct';
 }else if(mode==='fischer'){
  if(fischerControls.some(control=>!control.value)){setFeedback('Assign R or S to every stereogenic centre before checking.','incorrect');return;}
  right=fischerControls.every((control,j)=>control.value===fischerExpected[j]);
 }else{if(!selected){setFeedback('Choose an answer before checking.','incorrect');return;}right=mode==='count'?Number(selected)===item.answer:selected===item.answer;}
 attempts++;
 if(!right){retryWithHint();$('chiral-score').textContent=`Score: ${score} / ${attempts}`;return;}
 score++;answered=true;$('chiral-check').disabled=true;
 if(mode==='priority')priorityControls.forEach(control=>control.disabled=true);
 if(mode==='fischer')fischerControls.forEach(control=>control.disabled=true);
 const explanation=mode==='identify'?(item.answer==='chiral'?'The tetrahedral carbon has four different substituents.':`The carbon has two identical ${G[repeated(item.groups)].name} groups.`):mode==='priority'?`Priorities (highest to lowest): ${priorityText(item)}.`:mode==='ez'?`On the left, ${G[item.left[0]].name} outranks ${G[item.left[1]].name}; on the right, ${G[item.right[0]].name} outranks ${G[item.right[1]].name}. The higher-priority groups are on ${item.answer==='Z'?'the same':'opposite'} sides, so the alkene is ${item.answer}.`:mode==='fischer'?`From top to bottom: ${fischerExpected.map((answer,j)=>`centre ${j+1} is ${answer}`).join('; ')}. For each centre, reverse the apparent 1 → 2 → 3 direction when priority 4 is horizontal; keep it when priority 4 is vertical.`:mode==='relation'?item.explanation:mode==='count'?`There are 2^${item.centers.length} = ${item.answer} possible stereoisomers. This structure has no internal symmetry, so the full 2ⁿ count applies.`:`Priorities: ${priorityText(item)}. The configuration is ${item.answer}.`;
 setFeedback(`Correct. ${explanation}`,'correct');$('chiral-score').textContent=`Score: ${score} / ${attempts}`;
}
function setMode(next){mode=next;index=0;for(const name of ['identify','priority','assign','ez','fischer','relation','count'])$('chiral-mode-'+name).setAttribute('aria-pressed',String(next===name));fillMenu();update()}
function setLevel(next){level=next;index=0;document.querySelectorAll('[data-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.level===next)));fillMenu();update()}
$('chiral-mode-identify').onclick=()=>setMode('identify');$('chiral-mode-priority').onclick=()=>setMode('priority');$('chiral-mode-assign').onclick=()=>setMode('assign');$('chiral-mode-ez').onclick=()=>setMode('ez');$('chiral-mode-fischer').onclick=()=>setMode('fischer');$('chiral-mode-relation').onclick=()=>setMode('relation');$('chiral-mode-count').onclick=()=>setMode('count');document.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>setLevel(b.dataset.level));$('chiral-question').onchange=e=>{index=+e.target.value;update()};$('chiral-previous').onclick=()=>{index=(index+active().length-1)%active().length;update()};$('chiral-next').onclick=()=>{index=(index+1)%active().length;update()};$('chiral-hint').onclick=hint;$('chiral-check').onclick=check;fillMenu();update();
if(window.location?.hash==='#fischer-variety'){setMode('fischer');setLevel('hard');index=8;update()}else if(window.location?.hash==='#fischer-review'){setMode('fischer');setLevel('hard');index=7;update()}else if(window.location?.hash==='#relationships')setMode('relation');else if(window.location?.hash==='#priorities')setMode('priority');else if(window.location?.hash==='#ez')setMode('ez');else if(window.location?.hash==='#fischer')setMode('fischer');
})();
