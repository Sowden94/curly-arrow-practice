/* Proton transfer reuses the reviewed labels, centered heads and collision-aware arcs. */
function protonDisplayGraph(g,q,product=false){
 const graph=clone(g);
 if(product){const base=graph.atoms.find(a=>a.id==='base'),h=graph.atoms.find(a=>a.id==='proton');h.hidden=true;if(base.element==='O'&&base.h===0&&q.baseType==='methoxide'){base.condensedAlcohol=true;}else{base.h+=1;graph.bonds=graph.bonds.filter(b=>keyBond(b.a,b.b)!==keyBond('base','proton'));}}
 const display=condensedMethoxyGraph(graph);
 for(const a of display.atoms){if(a.element==='C'){a.skeletal=true;if(a.lp)a.pairPadding=18;}if(['Cl','Br','I'].includes(a.element))a.pairPadding=3;a.arrowGap=a.skeletal?10:5;if(['O','N'].includes(a.element)&&formal(display,a)>0)a.hideLonePairs=true;if(a.element==='O'&&formal(display,a)>0)a.positiveChargeNearO=true;if(q.acidType==='iminium'&&a.id==='acid'){a.positiveChargeClearN=true;if(q.start.atoms.find(a=>a.id==='proton').x>q.start.atoms.find(a=>a.id==='acid').x){a.condensedPrefix=a.condensedSuffix;delete a.condensedSuffix;}}}
 return display;
}
function protonLayout(q){
 if(cache.has(q.id))return cache.get(q.id);
 const options={compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true,chargePaddingChoices:[10.5,13,15.5,18,21,24,28,32]},start=compactProtonFragments(protonDisplayGraph(q.start,q),options),product=compactProtonFragments(protonDisplayGraph(q.product,q,true),options);
 for(const a of start.atoms)start.sources.push({id:'origin:'+a.id,key:'origin:'+a.id,type:'atom',atom:a,x:a.x,y:a.y,angle:-Math.PI/2,label:'Start at '+(a.skeletal?'carbon':a.element)+' atom'});
 for(const c of start.charges.filter(c=>c.value>0))start.sources.push({id:'charge:'+c.owner,key:'charge:'+c.owner,type:'charge',atom:start.atoms.find(a=>a.id===c.owner),x:c.x,y:c.y,angle:-Math.PI/2,label:'Start at positive charge'});
 const routes=new Map(),bounds={...start.bounds},companions=[];
 // Reserve the plus sign along with the companion arrows.
 for(const dx of [-8,-4,0,4,8])for(const dy of [-8,-4,0,4,8])companions.push({x:start.plus.x+dx,y:start.plus.y+dy});
 const include=p=>{const right=Math.max(bounds.x+bounds.w,p.x+24),bottom=Math.max(bounds.y+bounds.h,p.y+24);bounds.x=Math.min(bounds.x,p.x-24);bounds.y=Math.min(bounds.y,p.y-24);bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;};
 for(const m of [...q.moves].sort((a,b)=>(a.from.type==='lp')-(b.from.type==='lp'))){const samples=[];for(const s of start.sources.filter(s=>s.key===locKey(m.from))){const t=start.targets.find(t=>t.key===targetForMove(q,m)),route=leavingRoute(start,s,t,q,companions);routes.set(s.id+'>'+t.key,route);samples.push(...visibleArrowSamples(route,s));for(const p of [route.start,...route.points,route.e,...route.wings])include(p);}companions.push(...samples);}
 const result={start,product,routes,bounds};cache.set(q.id,result);return result;
}
function compactProtonFragments(graph,options){
 const baseId=id=>id==='base'||id.startsWith('base-me'),extent=(layout,base,rowOnly=false)=>{
  const xs=[];
  for(const a of layout.atoms.filter(a=>baseId(a.id)===base&&(!rowOnly||Math.abs(a.y-220)<=a.halfH+10)))xs.push(a.x-a.left,a.x+a.right);
  for(const s of layout.sources.filter(s=>s.type==='lp'&&baseId(s.owner)===base&&(!rowOnly||Math.abs(s.y-220)<=16)))xs.push(s.x-6,s.x+6);
  for(const c of layout.charges.filter(c=>baseId(c.owner)===base&&(!rowOnly||Math.abs(c.y-220)<=c.r+10)))xs.push(c.x-c.r,c.x+c.r);
  if(rowOnly)for(const bond of layout.bonds.filter(b=>baseId(b.a)===base&&baseId(b.b)===base))for(const seg of bondSegments(bond)){
   const dy=seg.b.y-seg.a.y;
   if(Math.abs(dy)<1e-8){if(Math.abs(seg.a.y-220)<=10)xs.push(seg.a.x,seg.b.x);}
   else{const t0=Math.max(0,Math.min((210-seg.a.y)/dy,(230-seg.a.y)/dy)),t1=Math.min(1,Math.max((210-seg.a.y)/dy,(230-seg.a.y)/dy));if(t0<=t1)xs.push(seg.a.x+t0*(seg.b.x-seg.a.x),seg.a.x+t1*(seg.b.x-seg.a.x));}
  }
  return {min:Math.min(...xs),max:Math.max(...xs)};
 };
 const framework=layoutGraph(graph,7,options).atoms.filter(a=>!baseId(a.id)&&a.element!=='H'),centre=(Math.min(...framework.map(a=>a.y-a.halfH))+Math.max(...framework.map(a=>a.y+a.halfH)))/2;
 for(const a of graph.atoms)if(!baseId(a.id))a.y+=220-centre;
 const initial=layoutGraph(graph,7,options),base=extent(initial,true),acid=extent(initial,false),onLeft=graph.atoms.find(a=>a.id==='base').x<graph.atoms.find(a=>a.id==='acid').x,gap=76,dx=onLeft?acid.min-gap-base.max:acid.max+gap-base.min;
 for(const a of graph.atoms)if(baseId(a.id))a.x+=dx;
 const layout=layoutGraph(graph,7,options),b=extent(layout,true,true),a=extent(layout,false,true);
 layout.plus={x:onLeft?(b.max+a.min)/2:(a.max+b.min)/2,y:220};
 layout.rowExtent={min:Math.min(b.min,a.min),max:Math.max(b.max,a.max)};
 return layout;
}
