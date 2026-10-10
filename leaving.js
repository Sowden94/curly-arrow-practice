/* Uses the reviewed SVG labels, arrowheads, tail gaps and input controls from addition.js. */
function leavingDisplayGraph(g,showHalogenPairs=false){const graph=condensedMethoxyGraph(g);for(const a of graph.atoms){a.hideLonePairs=(!showHalogenPairs&&['F','Cl','Br','I'].includes(a.element))||(a.element!=='C'&&a.element!=='R'&&formal(graph,a)>0);if(a.element==='C'){a.skeletal=true;if(a.lp){a.displayCarbon='';a.pairPadding=18;}}a.arrowGap=a.skeletal?10:5;if(['Cl','Br','I'].includes(a.element))a.pairPadding=3;}const h=graph.atoms.find(a=>a.id==='lg-h'),o=graph.atoms.find(a=>a.id==='lg');if(h&&o&&!graph.bonds.some(b=>keyBond(b.a,b.b)==='c~lg')){h.hidden=true;o.condensedAlcohol=true;}return graph;}
function leavingLayout(q){
 if(cache.has(q.id))return cache.get(q.id);
 const start=layoutGraph(leavingDisplayGraph(q.start,['collapse','nitro-aromatic'].includes(q.kind)),7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true,chargePaddingChoices:[10.5,13,15.5,18,21,24,28,32]}),product=layoutGraph(leavingDisplayGraph(q.product,['collapse','nitro-aromatic'].includes(q.kind)),7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true,chargePaddingChoices:[10.5,13,15.5,18,21,24,28,32]});
 for(const a of start.atoms)start.sources.push({id:'origin:'+a.id,key:'origin:'+a.id,type:'atom',atom:a,x:a.x,y:a.y,angle:-Math.PI/2,label:'Start at '+(a.skeletal?'carbon':a.element)+' atom'});
 for(const c of start.charges.filter(c=>c.value>0))start.sources.push({id:'charge:'+c.owner,key:'charge:'+c.owner,type:'charge',atom:start.atoms.find(a=>a.id===c.owner),x:c.x,y:c.y,angle:-Math.PI/2,label:'Start at positive charge'});
 const routes=new Map(),bounds={...start.bounds};const include=p=>{const right=Math.max(bounds.x+bounds.w,p.x+24),bottom=Math.max(bounds.y+bounds.h,p.y+24);bounds.x=Math.min(bounds.x,p.x-24);bounds.y=Math.min(bounds.y,p.y-24);bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;};
 const companions=[];
 // Bond shifts have one origin; route these first, then every equivalent lone pair
 // around the same reserved arrows. The result is independent of placement order.
 const moveGroups=new Map();for(const plan of answerMoveSets(q))for(let i=0;i<plan.length;i++){if(!moveGroups.has(i))moveGroups.set(i,[]);const group=moveGroups.get(i),m=plan[i];if(!group.some(other=>locKey(other.from)===locKey(m.from)&&locKey(other.to)===locKey(m.to)))group.push(m);}
 for(const group of [...moveGroups.values()].sort((a,b)=>(a[0].from.type==='lp')-(b[0].from.type==='lp'))){const samples=[];
  for(const m of group)for(const s of start.sources.filter(s=>s.key===locKey(m.from))){const t=start.targets.find(t=>t.key===targetForMove(q,m)),route=leavingRoute(start,s,t,q,companions);routes.set(s.id+'>'+t.key,route);samples.push(...visibleArrowSamples(route,s));for(const p of [route.start,...route.points,route.e,...route.wings])include(p);}
  companions.push(...samples);
 }
 product.plus={x:q.product.atoms.find(a=>a.id==='lg').x-110,y:220};
 const result={start,product,routes,bounds};cache.set(q.id,result);return result;
}
function leavingRoute(layout,source,target,q,companions=[]){
 const routingSource=source.type==='atom'||source.type==='charge'?{...source,type:'lp'}:source;
 const dest={...target,smoothBow:true,leadChoices:[24,38,55,80,120,180,260,320],endChoices:[28,42,60,90,140,220,280],arrowGap:9,avoidPoints:companions,startAngles:source.type==='lp'?[source.angle,source.angle-.75,source.angle+.75,source.angle-1.57,source.angle+1.57,source.angle-2.1,source.angle+2.1]:undefined,visibleRouteScore:r=>visibleAdditionBondScore(layout,source,r)+visibleLonePairScore(layout,source,r)+companionArrowScore(r,source,companions)};
 if(target.bond)dest.approachAngles=[Math.atan2(target.bond.ux,-target.bond.uy),Math.atan2(-target.bond.ux,target.bond.uy)];
 if(target.atom)dest.approachAngles=[-Math.PI/4,-3*Math.PI/4,Math.PI/4,3*Math.PI/4,-Math.PI/2,Math.PI/2,0,Math.PI];
 // Keep return arrows compact and clear of atom labels and charges.
 if(q.topic==='proton'&&source.key==='bond:'+keyBond('acid','proton')&&target.atom&&['O','N'].includes(target.atom.element)){
  const b=source.bond,normal={x:b.uy,y:-b.ux},neighbors=layout.bonds.filter(b=>b.a===target.atom.id||b.b===target.atom.id).map(b=>b.start.id===target.atom.id?b.end:b.start).filter(a=>a.id!=='proton');
  dest.leadChoices=[12,18,24,32,42,60,90];dest.endChoices=[12,18,24,32,42,60,90];
  const clearanceScore=dest.visibleRouteScore;dest.visibleRouteScore=r=>{const mid=visibleArrowSamples(r,source)[30],bow=Math.abs((mid.x-source.x)*normal.x+(mid.y-source.y)*normal.y);return clearanceScore(r)+Math.max(0,bow-28)*250;};
  const occupied=neighbors.reduce((sum,a)=>sum+(a.x-source.x)*normal.x+(a.y-source.y)*normal.y,0);
  if(neighbors.length&&Math.abs(occupied)>1){
   if((q.acidType==='iminium'?normal.y<0:occupied>0)){normal.x*=-1;normal.y*=-1;}
   const angle=Math.atan2(normal.y,normal.x),score=clearanceScore;
   dest.approachAngles=q.acidType==='iminium'?[source.x<target.x?(source.y>target.y?3*Math.PI/4:Math.PI):(source.y>target.y?Math.PI/4:0)]:[angle,angle-.45,angle+.45,angle-.85,angle+.85];
   dest.visibleRouteScore=r=>{const points=visibleArrowSamples(r,source),mid=points[Math.floor(60/2)],bow=(mid.x-source.x)*normal.x+(mid.y-source.y)*normal.y;return score(r)+points.reduce((sum,p)=>sum+Math.max(0,-((p.x-source.x)*normal.x+(p.y-source.y)*normal.y))*1000000,0)+Math.max(0,12-bow)*250+Math.max(0,bow-28)*250;};
  }
 }
 if(q.kind==='collapse'&&source.key==='bond:'+keyBond('c','lg')&&!target.atom?.condensedSuffix){const o=layout.atoms.find(a=>a.id==='o'),b=source.bond;let angle=Math.atan2(b.ux,-b.uy);if(Math.cos(angle)*(o.x-source.x)+Math.sin(angle)*(o.y-source.y)>0)angle+=Math.PI;dest.approachAngles=[-Math.PI/4,-3*Math.PI/4,Math.PI/4,3*Math.PI/4].filter(a=>Math.cos(a-angle)>.1);const score=dest.visibleRouteScore;dest.visibleRouteScore=r=>score(r)+visibleArrowSamples(r,source).reduce((sum,p)=>sum+Math.max(0,-((p.x-source.x)*Math.cos(angle)+(p.y-source.y)*Math.sin(angle)))*1000000,0);}
 const r=routeArrow(layout,routingSource,dest,q);r.points=Array.from({length:29},(_,i)=>bezier(r.start,r.c1,r.c2,r.e,(i+1)/30));return r;
}
