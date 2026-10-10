/* Use the same reviewed labels, centred electron-pair heads and input controls. */
function rearrangementDisplayGraph(g,q){
 const graph=clone(g);
 for(const a of graph.atoms){if(a.element==='C'){a.skeletal=true;if(a.id==='m'){a.skeletal=false;a.displayCarbon='Me';}}a.arrowGap=a.skeletal?10:5;}
 // Equal visible line lengths, including the space reserved for explicit labels.
 // Use each original bond direction so angles and mapped frameworks stay intact.
 const byId=new Map(graph.atoms.map(a=>[a.id,a])),original=new Map(g.atoms.map(a=>[a.id,a])),visited=new Set(['d']),queue=['d'];
 const trim=(a,dx,dy)=>a.skeletal?0:rectRadius({left:a.displayCarbon||a.element==='R'?labelWidth(a.displayCarbon||a.label)/2:11,right:a.displayCarbon||a.element==='R'?labelWidth(a.displayCarbon||a.label)/2:11,halfH:15},dx,dy,5);
 while(queue.length){const id=queue.shift(),parent=byId.get(id),old=original.get(id);
  for(const bond of graph.bonds.filter(b=>b.a===id||b.b===id)){
   const childId=bond.a===id?bond.b:bond.a;if(visited.has(childId))continue;
   const child=byId.get(childId),oldChild=original.get(childId),length=Math.hypot(oldChild.x-old.x,oldChild.y-old.y),ux=(oldChild.x-old.x)/length,uy=(oldChild.y-old.y)/length,span=60+trim(parent,ux,uy)+trim(child,-ux,-uy);
   child.x=parent.x+ux*span;child.y=parent.y+uy*span;visited.add(childId);queue.push(childId);
  }
 }
 return graph;
}
function rearrangementLayout(q){
 if(cache.has(q.id))return cache.get(q.id);
 const options={cardinalPairs:true,chargePairClearance:17,chargePaddingChoices:[16,19,22,25]},start=layoutGraph(rearrangementDisplayGraph(q.start,q),7,options),product=layoutGraph(rearrangementDisplayGraph(q.product,q),7,options);
 const c=start.atoms.find(a=>a.id==='c'),charge=start.charges.find(a=>a.owner==='c');charge.x=c.x+19*Math.cos(q.orientation)+19*Math.sin(q.orientation);charge.y=c.y+19*Math.sin(q.orientation)-19*Math.cos(q.orientation);
 for(const a of start.atoms)start.sources.push({id:'origin:'+a.id,key:'origin:'+a.id,type:'atom',atom:a,x:a.x,y:a.y,angle:-Math.PI/2,label:'Start at '+(a.skeletal?'carbon':a.displayCarbon||a.element)+' atom'});
 for(const c of start.charges)start.sources.push({id:'charge:'+c.owner,key:'charge:'+c.owner,type:'charge',atom:start.atoms.find(a=>a.id===c.owner),x:c.x,y:c.y,angle:-Math.PI/2,label:'Start at positive charge'});
 const routes=new Map(),bounds={...start.bounds};
 for(const m of answerMoveSets(q).flat()){const source=start.sources.find(s=>s.key===locKey(m.from)),target=start.targets.find(t=>t.key===targetForMove(q,m)),key=source.id+'>'+target.key;if(routes.has(key))continue;const route=rearrangementRoute(start,source,target,q);routes.set(key,route);for(const p of [route.start,...route.points,route.e,...route.wings]){const right=Math.max(bounds.x+bounds.w,p.x+24),bottom=Math.max(bounds.y+bounds.h,p.y+24);bounds.x=Math.min(bounds.x,p.x-24);bounds.y=Math.min(bounds.y,p.y-24);bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;}}
 const result={start,product,routes,bounds};cache.set(q.id,result);return result;
}

// Judge the displayed shaft, including the centered arrowhead join.
// A single arch must turn consistently and have no tight corner or cusp.
function rearrangementCurvePenalty(route,source){
 const g=additionHeadGeometry(lonePairTailGap(route,source));let sign=0,penalty=0;
 for(let i=0;i<=24;i++){
  const t=i/24,u=1-t,dx=3*(u*u*(g.a.x-g.s.x)+2*u*t*(g.joinControl.x-g.a.x)+t*t*(g.base.x-g.joinControl.x)),dy=3*(u*u*(g.a.y-g.s.y)+2*u*t*(g.joinControl.y-g.a.y)+t*t*(g.base.y-g.joinControl.y)),ddx=6*(u*(g.joinControl.x-2*g.a.x+g.s.x)+t*(g.base.x-2*g.joinControl.x+g.a.x)),ddy=6*(u*(g.joinControl.y-2*g.a.y+g.s.y)+t*(g.base.y-2*g.joinControl.y+g.a.y)),cross=dx*ddy-dy*ddx,speed=Math.hypot(dx,dy),radius=speed**3/(Math.abs(cross)||1e-9);
  if(Math.abs(cross)>1e-5){if(sign&&Math.sign(cross)!==sign)penalty+=1e9;sign=Math.sign(cross);}
  penalty+=Math.max(0,16-radius)*1e7+Math.max(0,5-speed)*1e8;
 }
 return penalty;
}
function rearrangementRoute(layout,source,target,q){
 if(source.type!=='bond'||!goodArrow(q,{source,target}))return incorrectArrowRoute(layout,source,target,{headLength:12,headHalfWidth:4.8,bends:[40,65,90,110]});
 // The tail belongs to the migrating sigma bond, not to either carbon vertex.
 // Depart perpendicular to its midpoint before arching toward the carbocation.
 const normal={x:source.bond.uy,y:-source.bond.ux};let best;
 for(const side of [-1,1])for(const tilt of [-Math.PI/2,-Math.PI/3,-Math.PI/4,0,Math.PI/4,Math.PI/3,Math.PI/2])for(const lead of [18,28,42,60,85,120])for(const endLead of [18,28,42,60,85,120])for(let turn=0;turn<12;turn++){
  const start={x:source.x+normal.x*side*8.6,y:source.y+normal.y*side*8.6},angle=turn*Math.PI/6,radius=target.atom?coreRadius(target.atom,angle):9,e={x:target.x+Math.cos(angle)*radius,y:target.y+Math.sin(angle)*radius},c1={x:start.x+(normal.x*Math.cos(tilt)-normal.y*Math.sin(tilt))*side*lead,y:start.y+(normal.x*Math.sin(tilt)+normal.y*Math.cos(tilt))*side*lead},c2={x:e.x+Math.cos(angle)*endLead,y:e.y+Math.sin(angle)*endLead};
  const chord={x:e.x-start.x,y:e.y-start.y},side1=chord.x*(c1.y-start.y)-chord.y*(c1.x-start.x),side2=chord.x*(c2.y-start.y)-chord.y*(c2.x-start.x);if(side1*side2<0)continue;
  const route={start,c1,c2,e,headLength:12,headHalfWidth:4.8},points=visibleArrowSamples(route,source,60),arch=Math.max(...points.slice(0,61).map(p=>segmentDistance(p,points[0],points[60]))),length=points.slice(0,61).reduce((n,p,i,a)=>n+(i?dist(p,a[i-1]):0),0),clearance=visibleAdditionBondScore(layout,source,route)+visibleLonePairScore(layout,source,route),score=clearance*1e12+rearrangementCurvePenalty(route,source)+Math.max(0,12-arch)*500+length+(lead+endLead)*.1;
  if(!best||score<best.score)best={...route,score};
 }
 best.points=Array.from({length:29},(_,i)=>bezier(best.start,best.c1,best.c2,best.e,(i+1)/30));const head=additionHeadGeometry(lonePairTailGap(best,source));best.wings=[head.left,head.right];return best;
}
