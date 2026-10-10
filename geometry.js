const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pretty=s=>String(s).replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[+d]).replace(/\+/g,'⁺');
const chemistryTopic=q=>q.chemistryTopic||q.topic;
const locKey=l=>l.type==='lp'?'lp:'+l.id:'bond:'+keyBond(l.a,l.b);
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function labelWidth(text){return [...text].reduce((n,c)=>n+(/\d/.test(c)?9:/[()]/.test(c)?8:c===c.toLowerCase()?12:17),0)}
function chemicalText(text){return esc(text).replace(/(\d+)/g,'<tspan baseline-shift="sub" font-size="17">$1</tspan>')}
function orientedGroupLabel(label,neighborX,groupX){
 if(neighborX<=groupX)return label;
 return ({CH3:'H3C',CH2CH3:'CH3CH2',CH2CH2CH3:'CH3CH2CH2','CH(CH3)2':'(CH3)2HC'}[label]||label);
}
function rectRadius(a,dx,dy,pad=0){const len=Math.hypot(dx,dy)||1,ux=dx/len,uy=dy/len;return Math.min(Math.abs(ux)>1e-6?((ux<0?a.left:a.right)+pad)/Math.abs(ux):Infinity,Math.abs(uy)>1e-6?(a.halfH+pad)/Math.abs(uy):Infinity)}
function bondLabelRadius(a,dx,dy){if(a.compactOxygenBond)return 1/Math.sqrt((dx/10.5)**2+(dy/12)**2)+3;return rectRadius(a,dx,dy,5);}
function bondSegments(b){if(b.ringCenter&&b.order===2){const mid={x:(b.start.x+b.end.x)/2,y:(b.start.y+b.end.y)/2},sign=((b.ringCenter.x-mid.x)*(-b.uy)+(b.ringCenter.y-mid.y)*b.ux)>0?1:-1,ox=-b.uy*7*sign,oy=b.ux*7*sign;const ta=b.start.skeletal?0:bondLabelRadius(b.start,b.ux,b.uy),tb=b.end.skeletal?0:bondLabelRadius(b.end,-b.ux,-b.uy);return [{a:{x:b.start.x+b.ux*ta,y:b.start.y+b.uy*ta},b:{x:b.end.x-b.ux*tb,y:b.end.y-b.uy*tb},off:0},{a:{x:b.start.x+b.ux*Math.max(12,ta+8)+ox,y:b.start.y+b.uy*Math.max(12,ta+8)+oy},b:{x:b.end.x-b.ux*Math.max(12,tb+8)+ox,y:b.end.y-b.uy*Math.max(12,tb+8)+oy},off:7*sign}];}const ta=b.start.skeletal?0:bondLabelRadius(b.start,b.ux,b.uy),tb=b.end.skeletal?0:bondLabelRadius(b.end,-b.ux,-b.uy);return(b.order===1?[0]:b.order===2?[-5,5]:[-7,0,7]).map(off=>({a:{x:b.start.x+b.ux*ta-b.uy*off,y:b.start.y+b.uy*ta+b.ux*off},b:{x:b.end.x-b.ux*tb-b.uy*off,y:b.end.y-b.uy*tb+b.ux*off},off}))}
function coreRadius(a,angle){if(a.skeletal)return a.arrowGap??6;const halfW=a.element.length===2?16:10,halfH=13,gap=a.arrowGap??3,dx=Math.cos(angle),dy=Math.sin(angle);return Math.min(Math.abs(dx)>1e-7?(halfW+gap)/Math.abs(dx):Infinity,Math.abs(dy)>1e-7?(halfH+gap)/Math.abs(dy):Infinity)}
function LPsvg(s){const dx=(s.orthogonal?-Math.round(Math.sin(s.angle)):-Math.sin(s.angle))*3.6,dy=(s.orthogonal?Math.round(Math.cos(s.angle)):Math.cos(s.angle))*3.6;return `<g class="lone-pair"><circle cx="${s.x-dx}" cy="${s.y-dy}" r="2.25"/><circle cx="${s.x+dx}" cy="${s.y+dy}" r="2.25"/></g>`}
function layoutGraph(g,pairPadding=8.5,options={}){
const atoms=g.atoms.map(n=>{const a={...n};const neighbors=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)));a.hSide=neighbors.reduce((s,n)=>s+n.x-a.x,0)>=0?-1:1;a.halfH=15;if(a.element==='R'){a.displayLabel=orientedGroupLabel(a.label,neighbors[0]?.x??a.x,a.x);a.left=a.right=labelWidth(a.displayLabel)/2}else{a.left=a.right=a.element.length===2?16:11;if(a.h){if(a.hSide<0)a.left+=a.h>1?29:20;else a.right+=a.h>1?29:20}}if(a.skeletal){a.left=a.right=a.halfH=0;}else if(a.displayCarbon){a.left=a.right=labelWidth(a.displayCarbon)/2;}if(a.condensedMe){a.condensedMeSide=neighbors.filter(n=>!n.hidden).some(n=>n.x>a.x+1)?-1:1;if(a.condensedMeSide<0)a.left=50;else a.right=50;}if(a.condensedSuffix){a.hSide=1;a.left=11;a.right=13+labelWidth(a.condensedSuffix);}if(a.condensedPrefix){a.hSide=-1;a.left=13+labelWidth(a.condensedPrefix);a.right=11;}if(a.hAbove){a.left=a.right=a.element.length===2?16:11;a.halfH=15;}if(a.condensedAlcohol){a.condensedMeSide=-1;a.left=50;a.right=33;}a.compactOxygenBond=options.compactOxygenBonds&&a.element==='O'&&!a.h&&!a.condensedMe&&!a.condensedAlcohol;a.charge=formal(g,n);a.directions=neighbors.map(n=>a.condensedAlcohol&&n.element==='H'?0:(a.condensedMe||a.condensedSuffix||a.condensedPrefix)&&n.hidden?(a.condensedMeSide<0||a.condensedPrefix?Math.PI:0):Math.atan2(n.y-a.y,n.x-a.x));if(a.h&&!a.skeletal&&!a.displayCarbon)a.directions.push(a.hAbove?(a.hLabelDy>0?Math.PI/2:-Math.PI/2):a.hSide<0?Math.PI:0);return a}).filter(a=>!a.hidden);
const sources=[],targets=[];atoms.forEach(a=>targets.push({key:'atom:'+a.id,id:a.id,x:a.x,y:a.y,label:a.element==='R'?a.label:a.element+' atom',atom:a}));
function gap(t,dirs){return dirs.length?Math.min(...dirs.map(d=>Math.abs(Math.atan2(Math.sin(t-d),Math.cos(t-d))))):Math.PI}
for(const a of atoms){const dirs=[...a.directions];for(let n=0;n<(a.hideLonePairs?0:a.lp);n++){let angle=0,best=-1;for(let i=0;i<(a.condensedMe||options.cardinalPairs?4:24);i++){const t=i*Math.PI/(a.condensedMe||options.cardinalPairs?2:12),score=gap(t,dirs);if(score>best+1e-5){angle=t;best=score}}dirs.push(angle);const rad=rectRadius(a,Math.cos(angle),Math.sin(angle),a.pairPadding??pairPadding);sources.push({key:'lp:'+a.id,id:'lp:'+a.id+':'+n,loc:LP(a.id),x:a.x+Math.cos(angle)*rad,y:a.y+Math.sin(angle)*rad,angle,orthogonal:options.cardinalPairs,type:'lp',owner:a.id,label:'Lone pair '+(n+1)+' on '+a.element});}}
const bonds=g.bonds.filter(b=>atoms.some(a=>a.id===b.a)&&atoms.some(a=>a.id===b.b)).map(b=>{const a=atoms.find(a=>a.id===b.a),c=atoms.find(a=>a.id===b.b),len=dist(a,c),ux=(c.x-a.x)/len,uy=(c.y-a.y)/len;return{...b,start:a,end:c,ux,uy,len,key:'bond:'+keyBond(b.a,b.b)}});
for(const b of bonds){const segments=bondSegments(b),segment=segments[0],mid={x:(segment.a.x+segment.b.x)/2,y:(segment.a.y+segment.b.y)/2};const center={x:mid.x+b.uy*segment.off,y:mid.y-b.ux*segment.off};sources.push({key:b.key,id:b.key,loc:BD(b.a,b.b),x:mid.x,y:mid.y,type:'bond',bond:b,segment,label:(b.order>1?'π':'σ')+' pair in '+b.start.element+'–'+b.end.element+' bond'});targets.push({key:b.key,...center,label:b.start.element+'–'+b.end.element+' bond',bond:b})}

const charges=[];for(const a of atoms.filter(a=>a.charge)){let best;const tightO=options.tightPositiveOxygen&&a.element==='O'&&a.charge>0;for(const padding of (tightO?[8.5,10.5,13,15.5,18,21,24,28,32]:options.chargePaddingChoices||(options.chargePairClearance?[10.5,13,15.5,18,21,24]:[10.5,13,15.5,18])))for(let i=0;i<48;i++){const t=-Math.PI+i*Math.PI/24;if(tightO&&Math.sin(t)>-.8)continue;if((a.condensedSuffix&&(Math.cos(t)>-0.15||Math.sin(t)>-0.15))||(options.cardinalPairs&&a.h&&!a.hAbove&&Math.cos(t)*a.hSide>0)||(a.condensedMe&&!tightO&&(Math.cos(t)*a.condensedMeSide>-0.15||Math.sin(t)>-0.15))||(options.negativeChargeAbove&&a.charge<0&&Math.sin(t)>-0.5))continue;const rad=rectRadius(a,Math.cos(t),Math.sin(t))+padding,p={x:a.x+Math.cos(t)*rad,y:a.y+Math.sin(t)*rad};if(options.raisedNegativeCharges&&a.charge<0&&a.element!=='C'&&(p.y>a.y-25||Math.abs(p.x-a.x)<18))continue;let score=(padding-10.5)*10+(p.y>a.y?8:0)+Math.abs(t+Math.PI/4)*.5;
for(const pair of sources.filter(s=>s.type==='lp')){score+=Math.max(0,17-dist(p,pair))*80;if(options.chargePairClearance){const dx=-Math.sin(pair.angle)*3.6,dy=Math.cos(pair.angle)*3.6;for(const sign of [-1,1])score+=Math.max(0,options.chargePairClearance-dist(p,{x:pair.x+sign*dx,y:pair.y+sign*dy}))*2000;}}
for(const other of atoms){if(other.hAbove){const hx=Math.max(Math.abs(p.x-other.x)-(other.h>1?16:11),0),hy=Math.max(Math.abs(p.y-(other.y+(other.hLabelDy??-29)))-15,0);score+=Math.max(0,12-Math.hypot(hx,hy))*200;}const dx=Math.max(other.x-other.left-p.x,0,p.x-other.x-other.right),dy=Math.max(other.y-other.halfH-p.y,0,p.y-other.y-other.halfH);score+=Math.max(0,(tightO&&other.id===a.id?10:12)-Math.hypot(dx,dy))*100;if(other.id!==a.id&&dist(p,other)<dist(p,a)+8)score+=1000;}
for(const bond of bonds)for(const seg of bondSegments(bond))score+=Math.max(0,12-segmentDistance(p,seg.a,seg.b))*80;
for(const c of charges)score+=Math.max(0,24-dist(p,c))*100;
if(!best||score<best.score)best={...p,score};}
if(a.positiveChargeClearN){
 const side=a.condensedPrefix?1:-1;for(const [dx,dy] of [[0,-27],[side*19,-20],[side*21,-22],[side*23,-24]]){const p={x:a.x+dx,y:a.y+dy};if(!bonds.every(b=>bondSegments(b).every(seg=>segmentDistance(p,seg.a,seg.b)>=12)))continue;if(!atoms.every(other=>Math.hypot(Math.max(other.x-other.left-p.x,0,p.x-other.x-other.right),Math.max(other.y-other.halfH-p.y,0,p.y-other.y-other.halfH))>=10))continue;best={...p,score:0};break;}
}
if(a.positiveChargeNearO){
 const side=a.h?-a.hSide:1;
 for(const offset of [19,22,24]){let found=false;for(const sign of [side,-side]){
  if(a.h&&sign*a.hSide>0)continue;
  const p={x:a.x+sign*offset,y:a.y-(offset+1)},clearLabel=other=>Math.hypot(Math.max(other.x-other.left-p.x,0,p.x-other.x-other.right),Math.max(other.y-other.halfH-p.y,0,p.y-other.y-other.halfH))>=(other.id===a.id?9:11);
  if(!atoms.every(clearLabel)||!bonds.every(b=>bondSegments(b).every(seg=>segmentDistance(p,seg.a,seg.b)>=12))||!charges.every(c=>dist(p,c)>=24))continue;
  if(!sources.filter(s=>s.type==='lp').every(pair=>[-1,1].every(sign=>dist(p,{x:pair.x-sign*Math.sin(pair.angle)*3.6,y:pair.y+sign*Math.cos(pair.angle)*3.6})>=17)))continue;
  best={...p,score:0};found=true;break;
 }if(found)break;}
}
if(a.acidTightPositiveO){
 for(const [dx,dy] of [[0,-27],[19,-25],[-19,-25],[21,-27],[-21,-27]]){const p={x:a.x+dx,y:a.y+dy};
  if(!atoms.every(other=>Math.hypot(Math.max(other.x-other.left-p.x,0,p.x-other.x-other.right),Math.max(other.y-other.halfH-p.y,0,p.y-other.y-other.halfH))>=9.5))continue;
  if(!bonds.every(b=>bondSegments(b).every(seg=>segmentDistance(p,seg.a,seg.b)>=12)))continue;
  if(!sources.filter(s=>s.type==='lp').every(pair=>[-1,1].every(sign=>dist(p,{x:pair.x-sign*Math.sin(pair.angle)*3.6,y:pair.y+sign*Math.cos(pair.angle)*3.6})>=17)))continue;
  best={...p,score:0};break;
 }
}
charges.push({...best,value:a.charge,owner:a.id,r:8.5})}

const xs=atoms.flatMap(a=>[a.x-a.left,a.x+a.right]).concat(sources.map(s=>s.x),charges.map(a=>a.x)),ys=atoms.flatMap(a=>[a.y-a.halfH,a.y+a.halfH]).concat(atoms.filter(a=>a.hAbove).flatMap(a=>[a.y+(a.hLabelDy??-29)-15,a.y+(a.hLabelDy??-29)+15]),sources.map(s=>s.y),charges.map(a=>a.y));return{atoms,bonds,sources,targets,charges,bounds:{x:Math.min(...xs)-28,y:Math.min(...ys)-32,w:Math.max(...xs)-Math.min(...xs)+56,h:Math.max(...ys)-Math.min(...ys)+64}};
}
function answerMoveSets(q){return[q.moves,...(q.alternativeMoves||[])]}
function sourceMoves(q,s){return answerMoveSets(q).flat().filter(m=>locKey(m.from)===s.key)}
function targetForMove(q,m){if(m.to.type==='lp')return'atom:'+m.to.id;const k=locKey(m.to);if(q.start.bonds.some(b=>'bond:'+keyBond(b.a,b.b)===k))return k;if(q.topic==='rearrangement')return'atom:'+q.acceptor;if(m.from.type==='lp')return'atom:'+(m.to.a===m.from.id?m.to.b:m.to.a);throw Error('Unsupported destination')}
function goodArrow(q,a){return answerMoveSets(q).some(set=>set.some(m=>locKey(m.from)===a.source.key&&targetForMove(q,m)===a.target.key))}
function bezier(s,c1,c2,e,t){const u=1-t;return{x:u*u*u*s.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*e.x,y:u*u*u*s.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*e.y}}
function segmentDistance(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)}
const ARROW_HEAD_LENGTH=20,ARROW_HEAD_HALF_WIDTH=8;
function routeArrow(l,s,target,q){
 const source=s,resonance=chemistryTopic(q)==='resonance';let best;const direct=Math.atan2(s.y-target.y,s.x-target.x);
 const hardResonance=chemistryTopic(q)==='resonance'&&q.level==='hard';
 const angles=target.approachAngles|| (target.atom?[direct,direct-.7,direct+.7,direct-1.2,direct+1.2,-Math.PI/2,Math.PI/2,0,Math.PI]:[Math.atan2(target.bond.ux,-target.bond.uy),Math.atan2(-target.bond.ux,target.bond.uy)]);
 const startDirections=s.type==='lp'?(target.startAngles||[s.angle,s.angle-.75,s.angle+.75]).map(a=>({x:Math.cos(a),y:Math.sin(a)})):[{x:s.bond.uy,y:-s.bond.ux},{x:-s.bond.uy,y:s.bond.ux}];
 for(const angle of angles){const out={x:Math.cos(angle),y:Math.sin(angle)},radius=target.atom?coreRadius(target.atom,angle):(target.arrowGap??(resonance?(target.bond.order===1?5:target.bond.order===2?10:12):2.5)),e={x:target.x+out.x*radius,y:target.y+out.y*radius};
 const leadChoices=target.leadChoices||(target.approachAngles?[50,92,160,240,320]:hardResonance?[38,58,82,108,135]:[32,50,70,92]),endChoices=target.endChoices||(target.approachAngles?[70,115,160,220,280]:hardResonance?[58,82,108,135]:[50,70,92,115]);
 for(const startDirection of startDirections)for(const lead of leadChoices)for(const endLead of endChoices){
 let startGap=resonance?(source.type==='lp'?7:5):0;if(resonance&&source.type==='bond')while(startGap<25&&bondSegments(source.bond).some(seg=>segmentDistance({x:source.x+startDirection.x*startGap,y:source.y+startDirection.y*startGap},seg.a,seg.b)<5-1e-8))startGap+=4;const s={...source,x:source.x+startDirection.x*startGap,y:source.y+startDirection.y*startGap};
 const c1={x:s.x+startDirection.x*lead,y:s.y+startDirection.y*lead},c2={x:e.x+out.x*endLead,y:e.y+out.y*endLead};let score=(lead+endLead)*.012;
 const chord={x:e.x-s.x,y:e.y-s.y},side1=chord.x*(c1.y-s.y)-chord.y*(c1.x-s.x),side2=chord.x*(c2.y-s.y)-chord.y*(c2.x-s.x);
 if(side1*side2<0)score+=target.smoothBow||resonance?1000000:120;
 score+=Math.max(0,dist(s,c1)+dist(c1,c2)+dist(c2,e)-dist(s,e)*1.45)*1.25;
 if(resonance){const mid=bezier(s,c1,c2,e,.5),chordLength=dist(s,e)||1,bow=Math.abs(chord.x*(mid.y-s.y)-chord.y*(mid.x-s.x))/chordLength;score+=Math.max(0,(hardResonance?38:24)-bow)*10+Math.max(0,bow-82)*2;}
 if(target.atom)for(const dir of target.atom.directions){const gap=Math.abs(Math.atan2(Math.sin(angle-dir),Math.cos(angle-dir)));score+=Math.max(0,.65-gap)*40}const points=[];
 for(let i=1;i<30;i++){const p=bezier(s,c1,c2,e,i/30);points.push(p);if(l.plus&&dist(p,l.plus)<15)score+=target.approachAngles?3000:30;
 for(const a of l.atoms){if(a.hAbove&&Math.abs(p.x-a.x)<(a.h>1?18:13)&&Math.abs(p.y-(a.y+(a.hLabelDy??-29)))<17)score+=3000;const dx=Math.max(a.x-a.left-p.x,0,p.x-a.x-a.right),dy=Math.max(a.y-a.halfH-p.y,0,p.y-a.y-a.halfH),clearance=Math.hypot(dx,dy);if(clearance<2)score+=target.approachAngles?3000:50;score+=Math.max(0,30-clearance)*3}
 for(const pair of l.sources.filter(a=>a.type==='lp'&&a.id!==s.id))if(dist(p,pair)<7)score+=15;
 if(target.avoidPoints?.some(other=>dist(p,other)<10))score+=10000;
 for(const ch of l.charges)if(dist(p,ch)<14)score+=target.approachAngles||l.atoms.find(a=>a.id===ch.owner)?.condensedMe?5000:60;
 for(const b of l.bonds){if((b.key===s.key&&dist(p,s)<8)||(b.key===target.key&&dist(p,e)<8))continue;for(const seg of bondSegments(b))if(segmentDistance(p,seg.a,seg.b)<(target.approachAngles?5:3))score+=target.approachAngles?3000:12}
 }
 // Include arrowhead wings, not only the curve, in the clearance check.
 const tx=(e.x-c2.x)/endLead,ty=(e.y-c2.y)/endLead;
 const wings=[{x:e.x-ARROW_HEAD_LENGTH*tx+ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty-ARROW_HEAD_HALF_WIDTH*tx},{x:e.x-ARROW_HEAD_LENGTH*tx-ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty+ARROW_HEAD_HALF_WIDTH*tx}];
 for(const p of wings){if(target.avoidPoints?.some(other=>dist(p,other)<10))score+=10000;for(const a of l.atoms)if(p.x>a.x-a.left-1&&p.x<a.x+a.right+1&&p.y>a.y-a.halfH&&p.y<a.y+a.halfH)score+=80;for(const pair of l.sources.filter(a=>a.type==='lp'))if(dist(p,pair)<6)score+=20;for(const ch of l.charges)if(dist(p,ch)<13)score+=target.approachAngles||l.atoms.find(a=>a.id===ch.owner)?.condensedMe?5000:80}
 if(target.visibleRouteScore&&(!best||score<best.score))score+=target.visibleRouteScore({start:s,c1,c2,e});
 if(!best||score<best.score)best={score,start:{x:s.x,y:s.y},c1,c2,e,points,wings,d:`M${s.x} ${s.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${e.x} ${e.y}`};
 }}return best;
}

const layoutCache=new Map();
// Keep explicit C–H bonds attached to C, clear of condensed hydrogen labels.
function acidDisplayGraph(graph,product=false,resonance=false){
 const g={...graph,atoms:graph.atoms.map(a=>({...a})),bonds:graph.bonds.map(b=>({...b}))};
 // Condense the newly added proton on O/N in the product, as in Proton Transfer.
 if(product){const proton=g.atoms.find(a=>a.id==='proton'),bond=g.bonds.find(b=>b.a==='proton'||b.b==='proton'),owner=bond&&g.atoms.find(a=>a.id===(bond.a==='proton'?bond.b:bond.a));if(owner&&['O','N'].includes(owner.element)){owner.h+=1;proton.hidden=true;g.bonds=g.bonds.filter(b=>b!==bond);}}
 // Draw longer alkyl groups out, retain Me and Ph as compact labels.
 for(const a of [...g.atoms].filter(a=>a.element==='R')){
  if(a.label==='C6H5')a.label='Ph';
  else if(a.label==='CH3')a.label='Me';
  else if(['CH2CH3','CH3CH2'].includes(a.label)){const bond=g.bonds.find(b=>b.a===a.id||b.b===a.id),owner=g.atoms.find(n=>n.id===(bond.a===a.id?bond.b:bond.a)),angle=Math.atan2(a.y-owner.y,a.x-owner.x),turn=angle<0?Math.PI/3:-Math.PI/3,id=a.id+'-ethyl-end';a.element='C';a.h=2;a.lp=0;delete a.label;g.atoms.push({id,element:'C',x:a.x+110*Math.cos(angle+turn),y:a.y+110*Math.sin(angle+turn),h:3,lp:0});g.bonds.push({a:a.id,b:id,order:1});}
 }
 for(const a of g.atoms.filter(a=>['O','N'].includes(a.element))){
  const neighbors=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a))),methyls=neighbors.filter(n=>n.element==='R'&&n.label==='Me'),h=neighbors.find(n=>n.element==='H');
  if(!resonance&&a.element==='N'&&methyls.length){methyls.forEach(n=>n.hidden=true);const label=(a.h?'H'+(a.h>1?a.h:''):'')+'Me'+(methyls.length>1?methyls.length:'');if(h&&h.x>a.x)a.condensedPrefix=label;else a.condensedSuffix=label;a.positiveChargeClearN=true;}
  if(a.element==='O'&&!a.h&&methyls.length===1){methyls[0].hidden=true;a.condensedSuffix='Me';}
  if(a.element==='O'&&a.h&&methyls.length===1){const heavy=methyls[0],side=heavy.x>=a.x?1:-1;heavy.x=a.x+side*55;heavy.y=a.y-95.2627944163;}
  // Three bonds at oxygen: give the explicit H its own 120-degree sector.
  if(a.element==='O'&&a.h===1&&h&&neighbors.filter(n=>n.element!=='H').length===1){const heavy=neighbors.find(n=>n.element!=='H'),side=heavy.x>=a.x?1:-1;heavy.x=a.x+side*55;heavy.y=a.y-95.2627944163;h.x=a.x+side*55;h.y=a.y+95.2627944163;}
  if(formal(g,a)>0){a.hideLonePairs=true;if(a.element==='O'){a.positiveChargeNearO=true;a.acidTightPositiveO=true;}}
 }

 for(const a of g.atoms.filter(a=>a.element==='C'&&a.h)){
  const neighbors=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a))),hydrogens=neighbors.filter(n=>n.element==='H'),heavy=neighbors.filter(n=>n.element!=='H');
  if(!hydrogens.length||g.bonds.some(b=>b.order===3&&(b.a===a.id||b.b===a.id)))continue;
  if(heavy.length===1&&hydrogens.length===1){
   const h=hydrogens[0],angle=Math.atan2(heavy[0].y-a.y,heavy[0].x-a.x),choices=[angle+2*Math.PI/3,angle-2*Math.PI/3],direction=choices.sort((x,y)=>Math.sin(y)-Math.sin(x))[0],length=dist(a,h);h.x=a.x+Math.cos(direction)*length;h.y=a.y+Math.sin(direction)*length;
  }else{
   const angles=neighbors.map(n=>Math.atan2(n.y-a.y,n.x-a.x)),clearance=t=>Math.min(...angles.map(d=>Math.abs(Math.atan2(Math.sin(t-d),Math.cos(t-d)))));
   a.hAbove=true;a.hLabelDy=clearance(Math.PI/2)>=clearance(-Math.PI/2)?34:-34;
  }
 }

 // Use consistent lengths and standard 30/60-degree drawing directions.
 const positions=new Map(g.atoms.map(a=>[a.id,{x:a.x,y:a.y}])),visited=new Set();for(const root of [...g.atoms].sort((a,b)=>(['base','acid'].includes(b.id)?1:0)-(['base','acid'].includes(a.id)?1:0))){if(visited.has(root.id)||root.hidden)continue;visited.add(root.id);const queue=[root];while(queue.length){const parent=queue.shift();for(const bond of g.bonds.filter(b=>b.a===parent.id||b.b===parent.id)){const child=g.atoms.find(a=>a.id===(bond.a===parent.id?bond.b:bond.a));if(visited.has(child.id))continue;const angle=Math.round(Math.atan2(positions.get(child.id).y-positions.get(parent.id).y,positions.get(child.id).x-positions.get(parent.id).x)/(Math.PI/6))*Math.PI/6;child.x=parent.x+110*Math.cos(angle);child.y=parent.y+110*Math.sin(angle);visited.add(child.id);queue.push(child);}}}
 // Each sp center and its substituent lie on one straight axis. Rotate the
 // entire attached branch so its internal bond angles are preserved.
 for(const triple of g.bonds.filter(b=>b.order===3))for(const [id,otherId] of [[triple.a,triple.b],[triple.b,triple.a]]){
  const center=g.atoms.find(a=>a.id===id),other=g.atoms.find(a=>a.id===otherId),axis=Math.atan2(center.y-other.y,center.x-other.x);
  for(const bond of g.bonds.filter(b=>(b.a===id||b.b===id)&&b!==triple)){
   const child=g.atoms.find(a=>a.id===(bond.a===id?bond.b:bond.a)),turn=axis-Math.atan2(child.y-center.y,child.x-center.x),seen=new Set([id,otherId]),queue=[child];
   while(queue.length){const atom=queue.shift();if(seen.has(atom.id))continue;seen.add(atom.id);const dx=atom.x-center.x,dy=atom.y-center.y;atom.x=center.x+dx*Math.cos(turn)-dy*Math.sin(turn);atom.y=center.y+dx*Math.sin(turn)+dy*Math.cos(turn);for(const edge of g.bonds.filter(b=>b.a===atom.id||b.b===atom.id))queue.push(g.atoms.find(a=>a.id===(edge.a===atom.id?edge.b:edge.a)));}
  }
 }
 const ring=g.atoms.filter(a=>a.id==='base'||/^bn[1-5]$/.test(a.id));if(ring.length===6&&ring.find(a=>a.id==='base').element==='N'){const center={x:ring.reduce((v,a)=>v+a.x,0)/6,y:ring.reduce((v,a)=>v+a.y,0)/6},ids=new Set(ring.map(a=>a.id));for(const b of g.bonds)if(ids.has(b.a)&&ids.has(b.b))b.ringCenter=center;}
 for(const a of g.atoms){if(a.element==='C'&&a.h===3&&g.bonds.filter(b=>b.a===a.id||b.b===a.id).length===1){a.element='R';a.label='Me';}if(a.element==='C'){a.skeletal=true;delete a.hAbove;delete a.hLabelDy;if(a.lp)a.pairPadding=18;}if(['F','Cl','Br','I'].includes(a.element))a.pairPadding=3;}
 return g;
}
// Resonance uses the same presentation rules while retaining the atom framework.
function resonanceDisplayGraph(graph,reference){
 const g=clone(graph),cycles=[];
 for(const a of [...g.atoms].filter(a=>a.element==='R')){
  if(!['CH2CH2CH3','CH(CH3)2','C6H11'].includes(a.label))continue;
  const edge=g.bonds.find(b=>b.a===a.id||b.b===a.id),owner=g.atoms.find(n=>n.id===(edge.a===a.id?edge.b:edge.a)),angle=Math.round(Math.atan2(a.y-owner.y,a.x-owner.x)/(Math.PI/6))*Math.PI/6,label=a.label;
  a.element='C';a.lp=0;a.h=label==='CH2CH2CH3'?2:1;delete a.label;
  const add=(id,from,theta,h)=>{const parent=g.atoms.find(a=>a.id===from);g.atoms.push({id,element:'C',h,lp:0,x:parent.x+110*Math.cos(theta),y:parent.y+110*Math.sin(theta)});g.bonds.push({a:from,b:id,order:1});};
  if(label==='CH2CH2CH3'){const turn=Math.sin(angle)>0?-Math.PI/3:Math.PI/3;add(a.id+'-propyl-middle',a.id,angle+turn,2);add(a.id+'-propyl-end',a.id+'-propyl-middle',angle,3);}
  if(label==='CH(CH3)2')for(const sign of[-1,1])add(a.id+'-branch-'+sign,a.id,angle+sign*Math.PI/3,3);
  if(label==='C6H11'){const center={x:a.x+110*Math.cos(angle),y:a.y+110*Math.sin(angle)},ids=[a.id];for(let i=1;i<6;i++){const id=a.id+'-cyclo-'+i;ids.push(id);g.atoms.push({id,element:'C',h:2,lp:0,x:center.x+110*Math.cos(angle+Math.PI+i*Math.PI/3),y:center.y+110*Math.sin(angle+Math.PI+i*Math.PI/3)});g.bonds.push({a:ids[i-1],b:id,order:1});}g.bonds.push({a:ids[5],b:a.id,order:1});cycles.push(ids);}
 }
 const display=acidDisplayGraph(g,false,true);
 // Contributors share exactly the same coordinates, including expanded groups.
 if(reference)for(const a of display.atoms){const original=reference.atoms.find(n=>n.id===a.id);if(original){a.x=original.x;a.y=original.y;}}
 const aromatic=display.atoms.filter(a=>/^c[0-5]$/.test(a.id));if(aromatic.length===6)cycles.push(aromatic.map(a=>a.id));
 for(const ids of cycles){const atoms=ids.map(id=>display.atoms.find(a=>a.id===id)),center={x:atoms.reduce((v,a)=>v+a.x,0)/atoms.length,y:atoms.reduce((v,a)=>v+a.y,0)/atoms.length};for(const b of display.bonds)if(ids.includes(b.a)&&ids.includes(b.b))b.ringCenter=center;}
 for(const a of display.atoms.filter(a=>a.element==='N'&&formal(display,a)>0))a.positiveChargeClearN=true;
 return display;
}
// Spread each acid–base pair across the same two columns as the role controls.
function spaceAcidCompounds(graph){
 const g=clone(graph),layout=layoutGraph(g,7,{cardinalPairs:true}),roots=['base','acid'].sort((a,b)=>g.atoms.find(n=>n.id===a).x-g.atoms.find(n=>n.id===b).x);
 roots.forEach((root,i)=>{const ids=new Set(),queue=[root];while(queue.length){const id=queue.shift();if(ids.has(id))continue;ids.add(id);for(const b of g.bonds)if(b.a===id||b.b===id)queue.push(b.a===id?b.b:b.a);}const atoms=layout.atoms.filter(a=>ids.has(a.id)),center=(Math.min(...atoms.map(a=>a.x-a.left))+Math.max(...atoms.map(a=>a.x+a.right)))/2,dx=(i?525:175)-center;for(const a of g.atoms)if(ids.has(a.id))a.x+=dx;for(const b of g.bonds)if(b.ringCenter&&ids.has(b.a)&&ids.has(b.b))b.ringCenter={...b.ringCenter,x:b.ringCenter.x+dx};});
 return g;
}
// Locate separators in the visible gaps, using the same graph as the drawing.
function acidSeparators(layout,graph){
 const ranges=['base','acid'].map(root=>{const ids=new Set(),queue=[root];while(queue.length){const id=queue.shift();if(ids.has(id))continue;ids.add(id);for(const b of graph.bonds)if(b.a===id||b.b===id)queue.push(b.a===id?b.b:b.a);}
 const atoms=layout.atoms.filter(a=>ids.has(a.id)),pairs=layout.sources.filter(s=>s.type==='lp'&&ids.has(s.owner)),charges=layout.charges.filter(c=>ids.has(c.owner));
 return {left:Math.min(...atoms.map(a=>a.x-a.left),...pairs.map(s=>s.x-6),...charges.map(c=>c.x-9)),right:Math.max(...atoms.map(a=>a.x+a.right),...pairs.map(s=>s.x+6),...charges.map(c=>c.x+9))};}).sort((a,b)=>a.left-b.left);
 layout.compounds=ranges;layout.plus={x:(ranges[0].right+ranges[1].left)/2,y:180};
}
function layouts(q){if(layoutCache.has(q.id))return layoutCache.get(q.id);const acid=chemistryTopic(q)==='acid',resonance=chemistryTopic(q)==='resonance',styled=acid||resonance,startGraph=acid?spaceAcidCompounds(acidDisplayGraph(q.start)):resonance?resonanceDisplayGraph(q.start):q.start,productGraph=acid?spaceAcidCompounds(acidDisplayGraph(q.product,true)):resonance?resonanceDisplayGraph(q.product,startGraph):q.product,options=styled?{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,cardinalPairs:true}:{},start=layoutGraph(startGraph,styled?7:8.5,options),product=layoutGraph(productGraph,styled?7:8.5,options),routes=new Map();if(chemistryTopic(q)==='acid'){acidSeparators(start,startGraph);acidSeparators(product,productGraph);}const all=[start.bounds,product.bounds];for(const s of start.sources){const m=sourceMoves(q,s)[0];if(!m)continue;const t=start.targets.find(t=>t.key===targetForMove(q,m));if(!t)throw Error('No target '+q.id);const r=routeArrow(start,s,t,q);routes.set(s.id+'>'+t.key,r);const pts=[s,...r.points,r.e];all.push({x:Math.min(...pts.map(p=>p.x))-15,y:Math.min(...pts.map(p=>p.y))-15,w:Math.max(...pts.map(p=>p.x))-Math.min(...pts.map(p=>p.x))+30,h:Math.max(...pts.map(p=>p.y))-Math.min(...pts.map(p=>p.y))+30})}let x=Math.min(...all.map(b=>b.x)),y=Math.min(...all.map(b=>b.y)),right=Math.max(...all.map(b=>b.x+b.w)),bottom=Math.max(...all.map(b=>b.y+b.h));if(acid){x=Math.min(0,x);right=Math.max(700,right);}const view={x,y,w:right-x,h:bottom-y};const result={start,product,routes,view};layoutCache.set(q.id,result);return result}
function molecule(l,q){let html='';for(const b of l.bonds)for(const segment of bondSegments(b))html+=`<line class="bond" x1="${segment.a.x}" y1="${segment.a.y}" x2="${segment.b.x}" y2="${segment.b.y}"/>`;

for(const a of l.atoms){if(a.skeletal)continue;if(a.displayCarbon){html+=`<text class="atom-label" x="${a.x}" y="${a.y}">${esc(a.displayCarbon)}</text>`;continue;}if(a.element==='R'){html+=`<text class="atom-label" x="${a.x}" y="${a.y}">${chemicalText(a.displayLabel||a.label)}</text>`}else{html+=`<text class="atom-label" x="${a.x}" y="${a.y}">${a.element}</text>`;if(a.condensedMe)html+=`<text class="atom-label" style="text-anchor:${a.condensedMeSide<0?'end':'start'}" x="${a.x+a.condensedMeSide*13}" y="${a.y}">Me</text>`;if(a.condensedAlcohol)html+=`<text class="atom-label" style="text-anchor:start" x="${a.x+13}" y="${a.y}">H</text>`;if(a.condensedPrefix)html+=`<text class="atom-label" style="text-anchor:end" x="${a.x-13}" y="${a.y}">${chemicalText(a.condensedPrefix)}</text>`;if(a.condensedSuffix)html+=`<text class="atom-label" style="text-anchor:start" x="${a.x+13}" y="${a.y}">${chemicalText(a.condensedSuffix)}</text>`;else if(!a.condensedPrefix&&a.hAbove)html+=`<text class="atom-label" x="${a.x}" y="${a.y+(a.hLabelDy??-29)}">H${a.h>1?`<tspan baseline-shift="sub" font-size="17">${a.h}</tspan>`:''}</text>`;else if(!a.condensedPrefix&&a.h)html+=`<text class="atom-label" style="text-anchor:${a.hSide<0?'end':'start'}" x="${a.x+a.hSide*13}" y="${a.y}">H${a.h>1?`<tspan baseline-shift="sub" font-size="17">${a.h}</tspan>`:''}</text>`}}
html+=l.sources.filter(s=>s.type==='lp').map(LPsvg).join('');html+=l.charges.map(c=>`<g class="charge-symbol" data-charge-owner="${esc(c.owner)}" role="img" aria-label="${c.value>0?'Positive':'Negative'} formal charge on ${esc(l.atoms.find(a=>a.id===c.owner).element)}"><circle cx="${c.x}" cy="${c.y}" r="8.5"/><path d="M${c.x-3.8} ${c.y} H${c.x+3.8}${c.value>0?` M${c.x} ${c.y-3.8} V${c.y+3.8}`:''}"/></g>`).join('');if(chemistryTopic(q)==='acid')html+=`<text class="reaction-plus" x="${l.plus?.x??295}" y="${l.plus?.y??180}">+</text>`;return html}
function relationArrow(acid){return `<svg viewBox="0 0 48 30" aria-hidden="true">${acid?'<path d="M4 10 H44 L36 4 M44 20 H4 L12 26" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="butt" stroke-linejoin="miter"/>':'<path d="M10 15 H38" fill="none" stroke="#111" stroke-width="1.8"/><path d="M3 15 L13 11 L11 15 L13 19 Z M45 15 L35 11 L37 15 L35 19 Z" fill="#111"/>'}</svg>`}

function arrowPath(route){return cleanArrow(route.start,route.c1,route.c2,route.e)}
function cleanArrow(s,c1,c2,e,preview=false){
 const tangentLength=Math.hypot(e.x-c2.x,e.y-c2.y)||1,ux=(e.x-c2.x)/tangentLength,uy=(e.y-c2.y)/tangentLength;
 let t=.99;while(t>.05&&dist(bezier(s,c1,c2,e,t),e)<16)t-=.005;
 const mix=(a,b,n)=>({x:a.x+(b.x-a.x)*n,y:a.y+(b.y-a.y)*n}),a=mix(s,c1,t),b=mix(c1,c2,t),c=mix(c2,e,t),d=mix(a,b,t),f=mix(b,c,t),shaftEnd=mix(d,f,t);
 const left={x:e.x-ARROW_HEAD_LENGTH*ux-ARROW_HEAD_HALF_WIDTH*uy,y:e.y-ARROW_HEAD_LENGTH*uy+ARROW_HEAD_HALF_WIDTH*ux},right={x:e.x-ARROW_HEAD_LENGTH*ux+ARROW_HEAD_HALF_WIDTH*uy,y:e.y-ARROW_HEAD_LENGTH*uy-ARROW_HEAD_HALF_WIDTH*ux};
 return `<g class="electron-arrow"><path class="curly${preview?' preview':''}" d="M${s.x} ${s.y} C${a.x} ${a.y} ${d.x} ${d.y} ${shaftEnd.x} ${shaftEnd.y}"/><path class="electron-arrowhead" d="M${e.x} ${e.y} L${left.x} ${left.y} L${right.x} ${right.y} Z"/></g>`
}

function previewPath(s,t){const dx=t.x-s.x,dy=t.y-s.y,d=Math.hypot(dx,dy)||1,lead=Math.min(40,Math.max(12,d*.32));const out=s.type==='lp'?{x:Math.cos(s.angle),y:Math.sin(s.angle)}:{x:s.bond.uy,y:-s.bond.ux};const c1={x:s.x+out.x*lead,y:s.y+out.y*lead},bend=Math.min(20,d*.15),c2={x:t.x-dx*.25-dy/d*bend,y:t.y-dy*.25+dx/d*bend};return cleanArrow(s,c1,c2,t,true)}

// A single shared drawing surface keeps both sides on the same scale and baseline.
function mountReaction(startMarkup,ls,q){
 const v=ls.view,acid=chemistryTopic(q)==='acid',gap=acid?0:130,total=2*v.w+gap,styled=acid||chemistryTopic(q)==='resonance',size=styled?`class="reaction-canvas practice-reaction acid-reaction" style="width:${acid?'100%':total*.82+'px'};height:${v.h*.82}px"`:'class="reaction-canvas"';
 const center=acid?ls.start.plus.y-v.y:v.h/2;
 const arrowX=acid&&ls.start.compounds&&ls.product.compounds?(ls.start.compounds[1].right-v.x+v.w+ls.product.compounds[0].left-v.x)/2:v.w+gap/2;
 // One shared coordinate system keeps bonds, electron arrows and separators together.
 const connector=relationArrow(acid).replace(/<svg[^>]*>/,`<g class="scheme-connector" transform="translate(${arrowX-28.8} ${center-18}) scale(1.2)" aria-hidden="true">`).replace('</svg>','</g>');
 $('drawing').innerHTML=`<svg ${size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${v.h}" role="group" aria-label="${esc(q.title)}"><g id="board" transform="translate(${-v.x} ${-v.y})" role="group" aria-label="Starting structure: answer here">${startMarkup}</g>${connector}<g transform="translate(${v.w+gap-v.x} ${-v.y})" role="img" aria-label="Target structure">${molecule(ls.product,q)}</g></svg>`;
 $('product-drawing').innerHTML='';
}
