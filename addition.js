'use strict';
const PRACTICE_BANK=globalThis.REARRANGEMENT_BANK||globalThis.PROTON_BANK||globalThis.LEAVING_BANK||ADDITION_BANK;
const $=id=>document.getElementById(id),done=new Set();let level='easy',index=0,placed=[],selected=null,drag=null,locked=false;
const questions=()=>PRACTICE_BANK.filter(q=>q.level===level),current=()=>questions()[index];
function tell(text,state='hint'){$('a-feedback').textContent=text;$('a-feedback').dataset.state=state;}
function additionMarkup(layout,q){return molecule(layout,q).replace(/class="bond"/g,'class="bond" stroke="#172532" stroke-width="2"').replace(/class="atom-label"/g,'class="atom-label" font-family="Arial,sans-serif" font-size="26" text-anchor="middle" dominant-baseline="central" fill="#172532"').replace(/class="lone-pair"/g,'class="lone-pair" fill="#172532"').replace(/class="charge-symbol"/g,'class="charge-symbol" stroke="#172532" stroke-width="1.5" fill="white"').replace(/<path d="M/g,'<path fill="none" d="M');}
function lonePairTailGap(route,source){
 
 const dx=-Math.sin(source.angle)*3.6,dy=Math.cos(source.angle)*3.6;
 const dots=source.type==='lp'?[{x:source.x-dx,y:source.y-dy},{x:source.x+dx,y:source.y+dy}]:[{x:source.x,y:source.y}];
 // Allow for the dot radius and the round shaft cap, leaving at least 5 SVG units of visible white space.
 let t=0;while(t<.5&&(dots.some(dot=>dist(bezier(route.start,route.c1,route.c2,route.e,t),dot)<8.5)||(source.type==='bond'&&bondSegments(source.bond).some(seg=>segmentDistance(bezier(route.start,route.c1,route.c2,route.e,t),seg.a,seg.b)<7.2))))t+=.002;
 const mix=(a,b)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
 const a=mix(route.start,route.c1),b=mix(route.c1,route.c2),c=mix(route.c2,route.e),d=mix(a,b),f=mix(b,c);
 // Exact subdivision preserves the original curve and its destination tangent.
 return {...route,start:mix(d,f),c1:f,c2:c};
}
function additionHeadGeometry(route){
 const {start:s,c1,c2,e}=route,mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
 let low=0,high=1;for(let i=0;i<40;i++){const t=(low+high)/2;if(dist(bezier(s,c1,c2,e,t),e)>(route.headLength??ARROW_HEAD_LENGTH))low=t;else high=t;}
 const t=(low+high)/2,a=mix(s,c1,t),b=mix(c1,c2,t),c=mix(c2,e,t),d=mix(a,b,t),f=mix(b,c,t),base=mix(d,f,t);
 const len=dist(base,e)||1,ux=(e.x-base.x)/len,uy=(e.y-base.y)/len,lead=dist(d,base);
 const joinControl={x:base.x-ux*lead,y:base.y-uy*lead};
 return {s,a,base,joinControl,e,left:{x:base.x-uy*(route.headHalfWidth??ARROW_HEAD_HALF_WIDTH),y:base.y+ux*(route.headHalfWidth??ARROW_HEAD_HALF_WIDTH)},right:{x:base.x+uy*(route.headHalfWidth??ARROW_HEAD_HALF_WIDTH),y:base.y-ux*(route.headHalfWidth??ARROW_HEAD_HALF_WIDTH)}};
}
function centeredAdditionArrow(route){const g=additionHeadGeometry(route);return `<g class="electron-arrow"><path class="curly" d="M${g.s.x} ${g.s.y} C${g.a.x} ${g.a.y} ${g.joinControl.x} ${g.joinControl.y} ${g.base.x} ${g.base.y}"/><path class="electron-arrowhead" d="M${g.e.x} ${g.e.y} L${g.left.x} ${g.left.y} L${g.right.x} ${g.right.y} Z"/></g>`;}
function additionArrow(route,source){return centeredAdditionArrow(lonePairTailGap(route,source)).replace(/class="curly"/g,'class="curly" stroke="#c62828" stroke-width="2.35" stroke-linecap="round" fill="none"').replace(/class="electron-arrowhead"/g,'class="electron-arrowhead" fill="#c62828"');}
function additionPreview(source,p){
 const dx=p.x-source.x,dy=p.y-source.y,d=Math.hypot(dx,dy)||1,lead=Math.min(40,Math.max(12,d*.32));
 const out=source.type!=='bond'?{x:Math.cos(source.angle),y:Math.sin(source.angle)}:{x:source.bond.uy,y:-source.bond.ux},bend=Math.min(20,d*.15);
 return additionArrow({start:source,c1:{x:source.x+out.x*lead,y:source.y+out.y*lead},c2:{x:p.x-dx*.25-dy/d*bend,y:p.y-dy*.25+dx/d*bend},e:p},source);
}
function visibleAdditionBondScore(layout,source,route){
 const g=additionHeadGeometry(lonePairTailGap(route,source));let score=0;
 const segments=layout.bonds.flatMap(b=>bondSegments(b));
 const check=p=>{for(const a of layout.atoms)if(p.x>a.x-a.left-1&&p.x<a.x+a.right+1&&p.y>a.y-a.halfH-1&&p.y<a.y+a.halfH+1)score+=1000000;for(const c of layout.charges)if(dist(p,c)<14)score+=1000000;for(const seg of segments){const d=segmentDistance(p,seg.a,seg.b);if(d<6)score+=(6-d)*10000;}};
 for(let i=0;i<=100;i++)check(bezier(g.s,g.a,g.joinControl,g.base,i/100));
 for(let i=0;i<=20;i++)for(const edge of [g.left,g.right])check({x:g.e.x+(edge.x-g.e.x)*i/20,y:g.e.y+(edge.y-g.e.y)*i/20});
 return score;
}
function visibleArrowSamples(route,source,count=60){const g=additionHeadGeometry(lonePairTailGap(route,source)),points=Array.from({length:count+1},(_,i)=>bezier(g.s,g.a,g.joinControl,g.base,i/count));for(let i=0;i<=20;i++)for(const edge of [g.left,g.right])points.push({x:g.e.x+(edge.x-g.e.x)*i/20,y:g.e.y+(edge.y-g.e.y)*i/20});return points;}
function companionArrowScore(route,source,others){if(!others.length)return 0;let score=0;for(const p of visibleArrowSamples(route,source,70))for(const other of others){const d=dist(p,other);if(d<9)score+=(9-d)*1000000;}return score;}
function visibleLonePairScore(layout,source,r){const g=additionHeadGeometry(lonePairTailGap(r,source)),dots=layout.sources.filter(s=>s.type==='lp').flatMap(s=>[-1,1].map(sign=>({x:s.x-sign*Math.sin(s.angle)*3.6,y:s.y+sign*Math.cos(s.angle)*3.6})));let score=0;const check=p=>{for(const dot of dots){const d=dist(p,dot);if(d<8)score+=(8-d)*100000;}};for(let i=0;i<=100;i++)check(bezier(g.s,g.a,g.joinControl,g.base,i/100));for(let i=0;i<=20;i++)for(const edge of [g.left,g.right])check({x:g.e.x+(edge.x-g.e.x)*i/20,y:g.e.y+(edge.y-g.e.y)*i/20});return score;}
function incorrectArrowRoute(layout,source,target,options={}){
 let best;
 // One quadratic bow converted exactly to a cubic cannot form an S bend or hairpin.
 const dx=target.x-source.x,dy=target.y-source.y,length=Math.hypot(dx,dy)||40,nx=-dy/(Math.hypot(dx,dy)||1),ny=dx/(Math.hypot(dx,dy)||1);
 for(const side of [-1,1])for(const bend of (options.bends||[24,40,65,Math.min(110,Math.max(45,length*.45))])){
 const control={x:(source.x+target.x)/2+nx*bend*side,y:(source.y+target.y)/2+ny*bend*side};
 let start={x:source.x,y:source.y};
 if(source.type==='atom'){const angle=Math.atan2(control.y-source.y,control.x-source.x),r=rectRadius(source.atom,Math.cos(angle),Math.sin(angle),6);start={x:source.x+Math.cos(angle)*r,y:source.y+Math.sin(angle)*r};}
 if(source.type==='charge'){const angle=Math.atan2(control.y-source.y,control.x-source.x);start={x:source.x+Math.cos(angle)*14,y:source.y+Math.sin(angle)*14};}
 const angle=Math.atan2(control.y-target.y,control.x-target.x),rad=target.atom?coreRadius(target.atom,angle):9,e={x:target.x+Math.cos(angle)*rad,y:target.y+Math.sin(angle)*rad};
 if(dist(start,e)<22)continue;
 const c1={x:start.x+(control.x-start.x)*2/3,y:start.y+(control.y-start.y)*2/3},c2={x:e.x+(control.x-e.x)*2/3,y:e.y+(control.y-e.y)*2/3},r={start,c1,c2,e,...options};
 const score=visibleAdditionBondScore(layout,source,r)+visibleLonePairScore(layout,source,r)+bend;
 if(!best||score<best.score)best={...r,score};
 }
 if(!best){const start={x:source.x-20,y:source.y},e={x:target.x+20,y:target.y};best={start,e,c1:{x:start.x,y:start.y-50},c2:{x:e.x,y:e.y-50}};}
 best.points=Array.from({length:29},(_,i)=>bezier(best.start,best.c1,best.c2,best.e,(i+1)/30));const head=additionHeadGeometry(lonePairTailGap(best,source));best.wings=[head.left,head.right];return best;
}
function additionRoute(layout,source,target,q){if(q.topic==='rearrangement')return rearrangementRoute(layout,source,target,q);if(!goodArrow(q,{source,target}))return incorrectArrowRoute(layout,source,target);if(q.topic==='proton'||q.topic==='leaving'||q.topic==='rearrangement')return leavingRoute(layout,source,target,q);
 // A fixed, smooth semicircular route keeps the pi-pair arrow on the open side of C=O/C=N.
 // Imines with an N-H label use the established collision-aware router.
 if(source.type==='bond'&&source.bond.order>1&&target.atom&&source.key==='bond:'+keyBond('c',q.piAtom)&&!target.atom.h){
  const side=target.atom.element==='O'||target.atom.condensedSuffix?-1:q.start.atoms.find(a=>a.id==='nu').x<q.start.atoms.find(a=>a.id==='c').x?-1:1;const e={x:target.x+side*15,y:target.y},c1={x:source.x+side*60,y:source.y},c2={x:e.x+side*60,y:e.y};const start={x:source.x,y:source.y},points=Array.from({length:29},(_,i)=>bezier(start,c1,c2,e,(i+1)/30)),wings=[{x:e.x+side*ARROW_HEAD_LENGTH,y:e.y-ARROW_HEAD_HALF_WIDTH},{x:e.x+side*ARROW_HEAD_LENGTH,y:e.y+ARROW_HEAD_HALF_WIDTH}];
  return {start,c1,c2,e,points,wings,d:`M${start.x} ${start.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${e.x} ${e.y}`};
 }
 // Route carbonyl attack against the visible companion arrow as well as the molecule.
 const carbonylAttack=source.key==='lp:nu'&&target.key==='atom:c'&&q.piAtom;
 let avoidPoints=[];
 if(carbonylAttack){const piSource=layout.sources.find(s=>s.key==='bond:'+keyBond('c',q.piAtom)),piTarget=layout.targets.find(t=>t.key==='atom:'+q.piAtom);if(piSource&&piTarget){const pi=additionHeadGeometry(lonePairTailGap(additionRoute(layout,piSource,piTarget,q),piSource));avoidPoints=Array.from({length:61},(_,i)=>bezier(pi.s,pi.a,pi.joinControl,pi.base,i/60));for(let i=0;i<=20;i++){const t=i/20;for(const edge of [pi.left,pi.right])avoidPoints.push({x:pi.e.x+(edge.x-pi.e.x)*t,y:pi.e.y+(edge.y-pi.e.y)*t});}}}
 const routingSource=source.type==='atom'||source.type==='charge'?{...source,type:'lp'}:source;const destination={...target,...(target.atom?{approachAngles:[0,Math.PI,-Math.PI/2,Math.PI/2,-Math.PI/4,-3*Math.PI/4,Math.PI/4,3*Math.PI/4]}:{}),...(carbonylAttack?{...(q.start.atoms.find(a=>a.id===q.piAtom).element==='O'?{approachAngles:[Math.PI/2]}:{}),avoidPoints}:{}),...(source.type==='lp'?{startAngles:[source.angle,source.angle-.75,source.angle+.75,source.angle-1.57,source.angle+1.57,source.angle-2.1,source.angle+2.1]}:{}),visibleRouteScore:route=>visibleAdditionBondScore(layout,source,route)+visibleLonePairScore(layout,source,route)+companionArrowScore(route,source,avoidPoints)};const route=routeArrow(layout,routingSource,destination,q),angle=Math.atan2(route.e.y-target.y,route.e.x-target.x),offset=0;
 const shift={x:Math.cos(angle)*offset,y:Math.sin(angle)*offset};route.e={x:route.e.x+shift.x,y:route.e.y+shift.y};route.c2={x:route.c2.x+shift.x,y:route.c2.y+shift.y};
 route.points=Array.from({length:29},(_,i)=>bezier(route.start,route.c1,route.c2,route.e,(i+1)/30));
 const d=dist(route.e,route.c2),ux=(route.e.x-route.c2.x)/d,uy=(route.e.y-route.c2.y)/d;route.wings=[{x:route.e.x-ARROW_HEAD_LENGTH*ux+ARROW_HEAD_HALF_WIDTH*uy,y:route.e.y-ARROW_HEAD_LENGTH*uy-ARROW_HEAD_HALF_WIDTH*ux},{x:route.e.x-ARROW_HEAD_LENGTH*ux-ARROW_HEAD_HALF_WIDTH*uy,y:route.e.y-ARROW_HEAD_LENGTH*uy+ARROW_HEAD_HALF_WIDTH*ux}];return route;
}
function condensedMethoxyGraph(g){
 const graph=clone(g);
 // Keep methylated amines compact, with N as the bond and electron-pair anchor.
 for(const atom of graph.atoms.filter(a=>a.element==='N')){const methyls=graph.bonds.map(b=>b.a===atom.id?graph.atoms.find(a=>a.id===b.b):b.b===atom.id?graph.atoms.find(a=>a.id===b.a):null).filter(a=>a?.element==='R'&&a.label==='Me');if(methyls.length){atom.condensedSuffix=(atom.h?'H'+(atom.h>1?atom.h:''):'')+'Me'+(methyls.length>1?methyls.length:'');for(const methyl of methyls)methyl.hidden=true;}}
 for(const atom of graph.atoms)if(atom.element==='O'||atom.element==='N')atom.pairPadding=4;
 for(const atom of graph.atoms.filter(a=>a.element==='O'&&a.h===0)){
  const methylBond=graph.bonds.find(b=>{const other=graph.atoms.find(a=>a.id===(b.a===atom.id?b.b:b.b===atom.id?b.a:null));return other?.element==='R'&&other.label==='Me';});
  if(methylBond){atom.condensedMe=true;graph.atoms.find(a=>a.id===(methylBond.a===atom.id?methylBond.b:methylBond.a)).hidden=true;}
 }
 return graph;
}
const cache=new Map();
function additionLayout(q){if(q.topic==='rearrangement')return rearrangementLayout(q);if(q.topic==='proton')return protonLayout(q);if(q.topic==='leaving')return leavingLayout(q);if(cache.has(q.id))return cache.get(q.id);const displayStart=condensedMethoxyGraph(q.start);for(const a of displayStart.atoms)if(a.element==='C'){if(a.h===3&&a.lp)a.displayCarbon='Me';else a.skeletal=true;}for(const a of displayStart.atoms)a.arrowGap=a.skeletal?10:5;for(const a of displayStart.atoms)if(a.element==='Cl')a.pairPadding=3;const start=layoutGraph(displayStart,7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true}),displayProduct=condensedMethoxyGraph(q.product);for(const a of displayProduct.atoms)if(a.id==='nu'&&q.donorType==='carbanion'&&a.element==='C'&&a.h===3&&formal(q.product,a)===0){a.element='R';a.h=0;a.label='Me';}for(const a of displayProduct.atoms)if(a.element==='C')a.skeletal=true;for(const a of displayProduct.atoms)if(a.element==='Cl')a.pairPadding=3;const product=layoutGraph(displayProduct,7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true});start.plus={x:285,y:220};for(const atom of start.atoms)start.sources.push({id:'origin:'+atom.id,key:'origin:'+atom.id,type:'atom',atom,x:atom.x,y:atom.y,angle:-Math.PI/2,label:'Start at '+(atom.skeletal?'carbon':atom.displayLabel||atom.element)+' atom'});for(const charge of start.charges.filter(c=>c.value>0))start.sources.push({id:'charge:'+charge.owner,key:'charge:'+charge.owner,type:'charge',atom:start.atoms.find(a=>a.id===charge.owner),x:charge.x,y:charge.y,angle:-Math.PI/2,label:'Start at positive charge'});const routes=new Map(),bounds={...start.bounds};
 const include=p=>{const right=Math.max(bounds.x+bounds.w,p.x+24),bottom=Math.max(bounds.y+bounds.h,p.y+24);bounds.x=Math.min(bounds.x,p.x-24);bounds.y=Math.min(bounds.y,p.y-24);bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;};
 for(const source of start.sources){const m=sourceMoves(q,source)[0];if(!m)continue;const target=start.targets.find(t=>t.key===targetForMove(q,m)),route=additionRoute(start,source,target,q);routes.set(source.id+'>'+target.key,route);for(const p of [route.start,...route.points,route.e,...route.wings])include(p);}
 const result={start,product,routes,bounds};cache.set(q.id,result);return result;
}
function renderReaction(q,showArrows=true,interactive=true){const ls=additionLayout(q),left={...(['proton','rearrangement'].includes(q.topic)?ls.start.bounds:ls.bounds)};if(showArrows)for(const arrow of placed){const key=arrow.source.id+'>'+arrow.target.key;let route=ls.routes.get(key);if(!route){route=additionRoute(ls.start,arrow.source,arrow.target,q);ls.routes.set(key,route);}for(const p of [route.start,...route.points,route.e,...route.wings]){const right=Math.max(left.x+left.w,p.x+24),bottom=Math.max(left.y+left.h,p.y+24);left.x=Math.min(left.x,p.x-24);left.y=Math.min(left.y,p.y-24);left.w=right-left.x;left.h=bottom-left.y;}}const right=ls.product.bounds,anchor=['leaving','proton','rearrangement'].includes(q.topic)?220:ls.start.atoms.find(a=>a.id==='c').y,top=Math.max(anchor-left.y,anchor-right.y),bottom=Math.max(left.y+left.h-anchor,right.y+right.h-anchor),h=top+bottom+30,gap=70,w=left.w+gap+right.w;let markup=additionMarkup(ls.start,q)+(['leaving','rearrangement'].includes(q.topic)?'':`<text x="${ls.start.plus.x}" y="${ls.start.plus.y}" text-anchor="middle" dominant-baseline="central" font-family="Arial,sans-serif" font-size="24" fill="#172532">+</text>`);
 if(showArrows)for(const arrow of placed){const k=arrow.source.id+'>'+arrow.target.key;let route=ls.routes.get(k);if(!route){route=additionRoute(ls.start,arrow.source,arrow.target,q);ls.routes.set(k,route);}markup+=additionArrow(route,arrow.source);}
 if(interactive&&!locked){
  if(selected){markup+=ls.start.targets.map(t=>`<circle fill="#fff" fill-opacity="0" class="a-hit" data-destination="${t.key}" cx="${t.x}" cy="${t.y}" r="18" role="button" tabindex="0" aria-label="Destination: ${esc(t.label)}"/>`).join('');markup+=`<circle class="a-selected" cx="${selected.x}" cy="${selected.y}" r="10" fill="none" stroke="#163d68" stroke-width="1.5"/><g id="a-live"></g>`;}
  else markup+=ls.start.sources.map(s=>`<circle fill="#fff" fill-opacity="0" class="a-hit" data-source="${s.id}" cx="${s.x}" cy="${s.y}" r="13" role="button" tabindex="0" aria-label="${esc(s.label)}"/>`).join('');
 }
 const displayScale=q.kind==='nitro-aromatic'?.78:1,connectorX=q.topic==='proton'?((ls.start.rowExtent.max-left.x)+(left.w+gap+ls.product.rowExtent.min-right.x))/2-23:left.w+12,connectorY=15+top,connector=q.topic==='proton'?'<g class="reaction-equilibrium" role="img" aria-label="Equilibrium"><path d="M '+connectorX+' '+(connectorY-4)+' H '+(connectorX+46)+' L '+(connectorX+38)+' '+(connectorY-10)+' M '+(connectorX+46)+' '+(connectorY+4)+' H '+connectorX+' L '+(connectorX+8)+' '+(connectorY+10)+'" stroke="#172532" stroke-width="1.8" fill="none"/></g>':'<path d="M '+connectorX+' '+connectorY+' H '+(connectorX+46)+' M '+(connectorX+38)+' '+(connectorY-5)+' L '+(connectorX+46)+' '+connectorY+' L '+(connectorX+38)+' '+(connectorY+5)+'" stroke="#172532" stroke-width="1.8" fill="none"/>';return `<svg xmlns="http://www.w3.org/2000/svg" class="addition-canvas${q.kind==='nitro-aromatic'?' aromatic-canvas':q.topic==='proton'?' proton-canvas':q.topic==='rearrangement'?' rearrangement-canvas':''}" width="${w*displayScale}" height="${h*displayScale}" viewBox="0 0 ${w} ${h}" style="width:${w*displayScale}px;max-width:100%" role="group" aria-label="Draw electron-flow arrows on the reactants to form the product shown."><svg id="a-board" x="0" y="${15+top-(anchor-left.y)}" width="${left.w}" height="${left.h}" viewBox="${left.x} ${left.y} ${left.w} ${left.h}" overflow="visible">${markup}</svg>${connector}<svg x="${left.w+gap}" y="${15+top-(anchor-right.y)}" width="${right.w}" height="${right.h}" viewBox="${right.x} ${right.y} ${right.w} ${right.h}" role="img" aria-label="${q.productLabel}">${additionMarkup(ls.product,q)}${['leaving','proton'].includes(q.topic)?`<text x="${ls.product.plus.x}" y="${ls.product.plus.y}" text-anchor="middle" dominant-baseline="central" font-family="Arial,sans-serif" font-size="24" fill="#172532">+</text>`:''}</svg></svg>`;
}
function draw(){const q=current();$('a-drawing').innerHTML=renderReaction(q);const board=$('a-board');board.addEventListener('pointerdown',pointerDown);board.addEventListener('pointermove',pointerMove);board.addEventListener('pointerup',pointerUp);board.addEventListener('pointercancel',()=>{drag=null;});board.addEventListener('keydown',keyDown);$('a-check').disabled=locked;$('a-undo').disabled=locked||!placed.length;$('a-clear').disabled=locked||(!placed.length&&!selected);}
function begin(n=0){index=n;placed=[];selected=null;drag=null;locked=false;const q=current();$('a-count').textContent=`Question ${index+1} of ${questions().length}`;$('a-score').textContent=`Completed: ${done.size} / ${PRACTICE_BANK.length}`;$('a-progress').style.width=100*questions().filter(q=>done.has(q.id)).length/questions().length+'%';$('a-question').value=index;$('a-title').textContent=`Question ${index+1}: ${q.title}`;$('a-prev').disabled=index===0;$('a-next').disabled=index===questions().length-1;tell('');draw();}
function choose(nextLevel){level=nextLevel;document.querySelectorAll('[data-a-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.aLevel===level)));$('a-question').innerHTML=questions().map((q,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');begin();}
function selectSource(id){if(locked)return;const source=additionLayout(current()).start.sources.find(s=>s.id===id);if(!source)return;selected=source;drag=null;tell('Choose the destination for this electron pair.');draw();}
function destination(key){if(!selected||locked)return;const target=additionLayout(current()).start.targets.find(t=>t.key===key);if(!target)return;placed.push({source:selected,target});selected=null;drag=null;tell(`${placed.length} arrow${placed.length===1?'':'s'} placed.`);draw();}
function point(e){return new DOMPoint(e.clientX,e.clientY).matrixTransform($('a-board').getScreenCTM().inverse());}
function nearestTarget(p){return additionLayout(current()).start.targets.map(t=>({t,d:dist(t,p)})).filter(x=>x.d<25).sort((a,b)=>a.d-b.d)[0]?.t;}
function pointerDown(e){if(locked||e.button>0)return;if(e.target.dataset.source){const id=e.pointerId,start=point(e);selectSource(e.target.dataset.source);drag={id,start,moved:false};$('a-board').setPointerCapture?.(id);e.preventDefault();}else if(e.target.dataset.destination){destination(e.target.dataset.destination);e.preventDefault();}}
function pointerMove(e){if(!drag||drag.id!==e.pointerId||!selected)return;const p=point(e);if(!drag.moved&&dist(p,drag.start)<5)return;drag.moved=true;const target=nearestTarget(p),ls=additionLayout(current());$('a-live').innerHTML=target?additionArrow(ls.routes.get(selected.id+'>'+target.key)||additionRoute(ls.start,selected,target,current()),selected):additionPreview(selected,p);}
function pointerUp(e){if(!drag||drag.id!==e.pointerId)return;const moved=drag.moved;drag=null;if(moved){const target=nearestTarget(point(e));if(target)destination(target.key);else tell('Release on an atom or bond, or click a destination.');}}
function keyDown(e){if(e.key==='Escape'){selected=null;drag=null;tell('Selection cleared.');draw();return;}if(e.key!=='Enter'&&e.key!==' ')return;e.preventDefault();if(e.target.dataset.source){selectSource(e.target.dataset.source);$('a-board').querySelector('[data-destination]')?.focus();}else if(e.target.dataset.destination)destination(e.target.dataset.destination);}
function grade(q,arrows){const keys=arrows.map(a=>a.source.key+'>'+a.target.key);return new Set(keys).size===keys.length&&q.moves.length===arrows.length&&answerMoveSets(q).some(plan=>plan.every(m=>arrows.some(a=>a.source.key===locKey(m.from)&&a.target.key===targetForMove(q,m))));}
function check(){if(locked)return;const q=current();selected=null;drag=null;if(grade(q,placed)){locked=true;done.add(q.id);$('a-score').textContent=`Completed: ${done.size} / ${PRACTICE_BANK.length}`;$('a-progress').style.width=100*questions().filter(q=>done.has(q.id)).length/questions().length+'%';tell('Correct. '+q.explanation,'correct');}else{const wrong=placed.find(a=>!goodArrow(q,a));tell('Incorrect—try again. Hint: '+(['leaving','proton','rearrangement'].includes(q.topic)? (wrong?.source.type==='charge'?'A positive charge is not an electron source. ':wrong?.source.type==='atom'?'An atom label is not an electron source. ':'')+(q.competingMoves?.find(option=>wrong?.source.key===locKey(option.move.from)&&wrong?.target.key===targetForMove(q,option.move))?.feedback||q.hint):(wrong?(wrong.source.key==='lp:nu'?'Direct the nucleophilic lone pair to the electrophilic carbon. ':wrong.source.key==='bond:'+keyBond('c',q.piAtom)?'Move the π pair onto the heteroatom, not onto carbon. ':wrong.source.type==='charge'?'A positive charge is not an electron source. Start at a lone pair or bond. ':wrong.source.type==='atom'?'An atom label is not an electron source. Select its lone pair or a bond. ':'That electron pair does not move in this step. '):placed.length>q.moves.length?'Remove any extra or repeated arrows. ':'')+q.hint),'incorrect');}draw();}
if(!globalThis.PRODUCT_PRACTICE_MODE){
$('a-check').addEventListener('click',check);$('a-hint').addEventListener('click',()=>tell('Hint: '+current().hint));$('a-undo').addEventListener('click',()=>{placed.pop();selected=null;drag=null;tell('Last arrow removed.');draw();});$('a-clear').addEventListener('click',()=>{placed=[];selected=null;drag=null;tell('Arrows cleared.');draw();});$('a-prev').addEventListener('click',()=>{if(index>0)begin(index-1);});$('a-next').addEventListener('click',()=>{if(index<questions().length-1)begin(index+1);});$('a-question').addEventListener('change',e=>begin(Number(e.target.value)));document.querySelectorAll('[data-a-level]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.aLevel)));
if(globalThis.__ADDITION_TEST__)globalThis.additionApi={incorrectArrowRoute,lonePairTailGap,additionHeadGeometry,additionLayout,renderReaction,grade,choose,begin,selectSource,destination,check,getState:()=>({placed,selected,locked,level,index}),getBank:()=>PRACTICE_BANK};
choose('easy');

}

function mechanismPromptSVG(q){
 const ls=additionLayout(q),layout=ls.start,bounds={...layout.bounds},include=p=>{const right=Math.max(bounds.x+bounds.w,p.x+18),bottom=Math.max(bounds.y+bounds.h,p.y+18);bounds.x=Math.min(bounds.x,p.x-18);bounds.y=Math.min(bounds.y,p.y-18);bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;};
 let markup=additionMarkup(layout,q);
 if(layout.plus)markup+=`<text x="${layout.plus.x}" y="${layout.plus.y}" font-family="Arial,sans-serif" font-size="24" text-anchor="middle" dominant-baseline="central" fill="#172532">+</text>`;
 for(const m of q.moves){const source=layout.sources.find(s=>s.key===locKey(m.from)),target=layout.targets.find(t=>t.key===targetForMove(q,m)),route=ls.routes.get(source.id+'>'+target.key)||additionRoute(layout,source,target,q);for(const p of [route.start,...route.points,route.e,...route.wings])include(p);markup+=additionArrow(route,source);}
 return `<svg class="product-prompt-svg" xmlns="http://www.w3.org/2000/svg" viewBox="${bounds.x-18} ${bounds.y-18} ${bounds.w+36} ${bounds.h+36}" role="img" aria-label="Starting structures with the electron-pair arrows for one elementary step">${markup}</svg>`;
}
