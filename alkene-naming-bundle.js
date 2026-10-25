// products-core.js
/* Molecular answers are marked by chemistry, independently of drawing coordinates. */
(()=>{
'use strict';
const copy=x=>JSON.parse(JSON.stringify(x)),key=(a,b)=>[a,b].sort().join('~'),electrons={H:1,C:4,N:5,O:6,Cl:7,Br:7,I:7};
function bondOrder(g,id){return g.bonds.filter(b=>b.a===id||b.b===id).reduce((n,b)=>n+b.order,0);}
function hydrogens(g,a){if(a.element==='H'||a.element==='Ph')return 0;const capacity=a.element==='C'?4-Math.abs(a.charge||0):a.element==='N'?3+(a.charge||0):a.element==='O'?2+(a.charge||0):1+(a.charge||0);return Math.max(0,capacity-bondOrder(g,a.id));}
function fromChemical(g){return {atoms:g.atoms.map(a=>({id:a.id,element:a.element==='R'?a.label==='Me'?'C':a.label:a.element,charge:a.element==='R'?0:formal(g,a),x:a.x,y:a.y})),bonds:g.bonds.map(b=>({a:b.a,b:b.b,order:b.order}))};}
function normalized(g){
 const bonds=g.bonds.map(b=>({...b})),atoms=g.atoms.map(a=>({...a,h:hydrogens(g,a),charge:a.charge||0})),byId=new Map(atoms.map(a=>[a.id,a])),removed=new Set();
 for(const a of atoms.filter(a=>a.element==='H'&&!a.charge)){const attached=bonds.filter(b=>b.a===a.id||b.b===a.id);if(attached.length===1&&attached[0].order===1){const neighbor=byId.get(attached[0].a===a.id?attached[0].b:attached[0].a);if(neighbor.element!=='H'&&neighbor.element!=='Ph'){neighbor.h++;removed.add(a.id);}}}
 return {atoms:atoms.filter(a=>!removed.has(a.id)),bonds:bonds.filter(b=>!removed.has(b.a)&&!removed.has(b.b))};
}
function chemicalExpected(g){
 // Retain the specified hydrogen counts before folding explicitly drawn H atoms.
 const atoms=g.atoms.map(a=>({id:a.id,element:a.element==='R'?(a.label==='Me'?'C':a.label):a.element,charge:a.element==='R'?0:formal(g,a),h:a.element==='R'?(a.label==='Me'?3:0):a.h||0,x:a.x,y:a.y})),bonds=g.bonds.map(b=>({...b})),byId=new Map(atoms.map(a=>[a.id,a])),removed=new Set();
 for(const a of atoms.filter(a=>a.element==='H'&&!a.charge)){const attached=bonds.filter(b=>b.a===a.id||b.b===a.id);if(attached.length===1&&attached[0].order===1){const neighbor=byId.get(attached[0].a===a.id?attached[0].b:attached[0].a);if(neighbor.element!=='H'&&neighbor.element!=='Ph'){neighbor.h++;removed.add(a.id);}}}
 return {atoms:atoms.filter(a=>!removed.has(a.id)),bonds:bonds.filter(b=>!removed.has(b.a)&&!removed.has(b.b))};
}
function components(g){const remaining=new Set(g.atoms.map(a=>a.id)),out=[];while(remaining.size){const start=remaining.values().next().value,ids=new Set([start]),queue=[start];remaining.delete(start);while(queue.length){const id=queue.shift();for(const b of g.bonds.filter(b=>b.a===id||b.b===id)){const other=b.a===id?b.b:b.a;if(remaining.has(other)){remaining.delete(other);ids.add(other);queue.push(other);}}}out.push({atoms:g.atoms.filter(a=>ids.has(a.id)),bonds:g.bonds.filter(b=>ids.has(b.a)&&ids.has(b.b))});}return out;}
function label(a){return [a.element,a.charge||0,a.h||0].join(':');}
function isomorphic(a,b){
 if(a.atoms.length!==b.atoms.length||a.bonds.length!==b.bonds.length)return false;
 const maps=g=>{const adj=new Map(g.atoms.map(a=>[a.id,new Map()]));for(const e of g.bonds){adj.get(e.a).set(e.b,e.order);adj.get(e.b).set(e.a,e.order);}return adj;},aa=maps(a),bb=maps(b),signature=(g,adj,atom)=>label(atom)+'/'+[...adj.get(atom.id).values()].sort().join(','),as=a.atoms.map(x=>signature(a,aa,x)),bs=b.atoms.map(x=>signature(b,bb,x));
 if([...as].sort().join('|')!==[...bs].sort().join('|'))return false;
 const order=a.atoms.map((atom,i)=>({atom,i})).sort((x,y)=>bs.filter(s=>s===as[x.i]).length-bs.filter(s=>s===as[y.i]).length||aa.get(y.atom.id).size-aa.get(x.atom.id).size),mapped=new Map(),used=new Set();
 function visit(n){if(n===order.length)return true;const{atom,i}=order[n];for(let j=0;j<b.atoms.length;j++){const target=b.atoms[j];if(used.has(target.id)||as[i]!==bs[j])continue;let ok=true;for(const[id,to]of mapped)if((aa.get(atom.id).get(id)||0)!==(bb.get(target.id).get(to)||0)){ok=false;break;}if(!ok)continue;mapped.set(atom.id,target.id);used.add(target.id);if(visit(n+1))return true;mapped.delete(atom.id);used.delete(target.id);}return false;}
 return visit(0);
}
function inventory(g){const counts={};for(const a of g.atoms){counts[a.element]=(counts[a.element]||0)+1;if(a.h)counts.H=(counts.H||0)+a.h;}return Object.keys(counts).sort().map(k=>k+counts[k]).join(',');}
function validation(g){
 const ids=new Set();for(const a of g.atoms){if(ids.has(a.id))return'Duplicate atom.';ids.add(a.id);if(!['C','O','N','H','Cl','Br','I','Ph'].includes(a.element))return'Choose an atom from the toolbar.';if(a.element==='Ph'&&a.charge)return'Ph represents a neutral phenyl group. Place a charge on the appropriate atom.';if(!Number.isInteger(a.charge||0)||Math.abs(a.charge||0)>1)return'This set uses formal charges of +1, 0 or −1.';}
 const seen=new Set();for(const b of g.bonds){if(b.a===b.b||!ids.has(b.a)||!ids.has(b.b)||![1,2,3].includes(b.order)||seen.has(key(b.a,b.b)))return'Check the bonds in your drawing.';seen.add(key(b.a,b.b));}
 for(const a of g.atoms){const bo=bondOrder(g,a.id),capacity=a.element==='Ph'?1:a.element==='H'?(a.charge?0:1):a.element==='C'?4-Math.abs(a.charge||0):a.element==='N'?3+(a.charge||0):a.element==='O'?2+(a.charge||0):1+(a.charge||0);if(bo>capacity)return`Check the valence of ${a.element}: it has too many bonds for its charge.`;}
 return'';
}
function check(q,drawing){
 if(!drawing.atoms.length)return{correct:false,message:q.mainProductOnly?'Draw the main product before checking.':'Draw the product/s before checking.'};const invalid=validation(drawing);if(invalid)return{correct:false,message:invalid};
 const actual=normalized(drawing),expected=chemicalExpected(q.product);if(isomorphic(actual,expected))return{correct:true,message:'Correct. '+q.explanation};
 const charge=g=>g.atoms.reduce((sum,a)=>sum+(a.charge||0),0);
 if(charge(actual)!==charge(expected))return{correct:false,message:q.mainProductOnly?'Check the formal charges on the main product. The other species will be added automatically.':'Check the formal charges. Total charge must be conserved across this step.'};
 if(inventory(actual)!==inventory(expected))return{correct:false,message:q.mainProductOnly?'Draw only the main product, with the correct atoms and hydrogens. Leave out counterions and small by-products; these are added automatically.':'Check that every atom and hydrogen is present in the products. Hydrogens are added automatically from each atom’s bonds and formal charge.'};
 if(components(actual).length!==components(expected).length)return{correct:false,message:q.mainProductOnly?'Draw just the main product. The remaining species appear once it is correct.':'Check how many separate products form. Include the leaving group or the other proton-transfer product where applicable.'};
 return{correct:false,message:'Check the bonds and the positions of the charges. Follow every shown arrow, including any change in bond order.'};
}
// The drawing task follows the substrate; small coproducts remain part of the
// balanced answer but are supplied only after the student's main product is right.
function forDrawing(q){
 const parts=components(q.product),organic=id=>parts.find(c=>c.atoms.some(a=>a.id===id)&&c.atoms.some(a=>a.element==='C'||a.element==='R'));
 const chosen=q.drawingProductAnchor?parts.find(c=>c.atoms.some(a=>a.id===q.drawingProductAnchor)):q.topic==='proton'?(organic(q.acid||'acid')||parts.find(c=>c.atoms.some(a=>a.id===(q.donor||'base')))):parts.find(c=>c.atoms.some(a=>a.id===(q.acceptor||'c')));
 if(!chosen)throw Error('Missing main drawing product: '+q.id);
 return{...q,product:copy(chosen),mainProductOnly:true};
}
function checkMain(q,drawing){return check(forDrawing(q),drawing);}
// Measure what is actually visible, including label width, lone pairs and charges.
function visualBounds(g,layout){
 const ids=new Set(g.atoms.map(a=>a.id));if(!layout&&typeof layoutGraph==='function')layout=layoutGraph(display(g),7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true});
 const atoms=layout?layout.atoms.filter(a=>ids.has(a.id)):display(g).atoms.filter(a=>!a.hidden).map(a=>({...a,left:a.condensedMe?31:20,right:a.condensedMe?50:20,halfH:15})),pairs=layout?layout.sources.filter(a=>a.type==='lp'&&ids.has(a.owner)):[],charges=layout?layout.charges.filter(a=>ids.has(a.owner)):[],xs=atoms.flatMap(a=>[a.x-a.left,a.x+a.right]).concat(pairs.flatMap(a=>[a.x-6,a.x+6]),charges.flatMap(a=>[a.x-9,a.x+9])),ys=atoms.flatMap(a=>[a.y-a.halfH,a.y+a.halfH]).concat(pairs.flatMap(a=>[a.y-6,a.y+6]),charges.flatMap(a=>[a.y-9,a.y+9]));
 const pi=g.bonds.find(b=>b.order===2&&[b.a,b.b].every(id=>g.atoms.find(a=>a.id===id)?.element==='C')),baseline=pi?(g.atoms.find(a=>a.id===pi.a).y+g.atoms.find(a=>a.id===pi.b).y)/2:(Math.min(...atoms.map(a=>a.y))+Math.max(...atoms.map(a=>a.y)))/2;
 return{left:Math.min(...xs),right:Math.max(...xs),top:Math.min(...ys),bottom:Math.max(...ys),baseline};
}
function completeDrawing(q,drawing){
 const main=forDrawing(q),mainIds=new Set(main.product.atoms.map(a=>a.id)),extras=components(q.product).filter(c=>!c.atoms.some(a=>mainIds.has(a.id))),out=copy(drawing);
 const lengths=drawing.bonds.map(b=>{const a=drawing.atoms.find(a=>a.id===b.a),n=drawing.atoms.find(a=>a.id===b.b);return Math.hypot(a.x-n.x,a.y-n.y);}).filter(n=>n>10).sort((a,b)=>a-b),scale=(lengths.length?lengths[Math.floor(lengths.length/2)]:80)/110;
 const gap=Math.max(90,90*scale),mainBox=visualBounds(out);let edge=mainBox.right+gap;const cy=mainBox.baseline;
 extras.forEach((part,i)=>{const raw=fromChemical(part);raw.bonds=copy(part.bonds);const implicit=new Set(raw.atoms.filter(a=>a.element==='H'&&!a.charge&&raw.bonds.some(b=>(b.a===a.id||b.b===a.id)&&b.order===1&&raw.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)).element!=='H')).map(a=>a.id));raw.atoms=raw.atoms.filter(a=>!implicit.has(a.id));raw.bonds=raw.bonds.filter(b=>!implicit.has(b.a)&&!implicit.has(b.b));for(const a of raw.atoms){a.x*=scale;a.y*=scale;}const box=visualBounds(raw),dx=edge-box.left,dy=cy-box.baseline,ids=new Map();for(const a of raw.atoms){let id='auto-'+i+'-'+a.id;while(out.atoms.some(n=>n.id===id))id+='-';ids.set(a.id,id);a.id=id;a.x+=dx;a.y+=dy;}for(const b of raw.bonds){b.a=ids.get(b.a);b.b=ids.get(b.b);if(b.stereoFrom)b.stereoFrom=ids.get(b.stereoFrom);}out.atoms.push(...raw.atoms);out.bonds.push(...raw.bonds);edge=box.right+dx+gap;});
 return out;
}
function display(g){
 const graph={atoms:g.atoms.map(a=>{const h=hydrogens(g,a),bo=bondOrder(g,a.id),lp=a.element==='Ph'?0:(electrons[a.element]-(a.charge||0)-bo-h)/2;return{id:a.id,element:a.element==='Ph'?'R':a.element,label:a.element==='Ph'?'Ph':a.element,x:a.x,y:a.y,h,lp,skeletal:a.element==='C'&&bo>0,arrowGap:a.element==='C'?10:5,hideLonePairs:!Number.isInteger(lp)||lp<0||['O','N'].includes(a.element)&&(a.charge||0)>0,pairPadding:['Cl','Br','I'].includes(a.element)?3:undefined};}),bonds:copy(g.bonds)};
 for(const a of graph.atoms.filter(a=>a.element==='O'||a.element==='N')){const methyls=graph.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>graph.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a))).filter(n=>n.element==='C'&&hydrogens(g,g.atoms.find(x=>x.id===n.id))===3&&bondOrder(g,n.id)===1);if(methyls.length){if(a.element==='O'&&methyls.length===1){a.condensedMe=true;}else{const label=(a.h?'H'+(a.h>1?a.h:''):'')+'Me'+(methyls.length>1?methyls.length:'');const visible=graph.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>graph.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a))).filter(n=>!methyls.includes(n));if(visible.reduce((sum,n)=>sum+n.x-a.x,0)>0)a.condensedPrefix=label;else a.condensedSuffix=label;}for(const m of methyls)m.hidden=true;}if(a.element==='N'&&(g.atoms.find(n=>n.id===a.id).charge||0)>0)a.positiveChargeClearN=true;}
 return graph;
}
const api={copy,key,hydrogens,bondOrder,fromChemical,normalized,chemicalExpected,components,isomorphic,inventory,validation,check,forDrawing,checkMain,completeDrawing,visualBounds,display};globalThis.ProductChem=api;if(typeof module!=='undefined')module.exports=api;
})();

;
// halide-naming-core.js
/* Saturated haloalkane nomenclature: connectivity and absolute stereochemistry. */
const LP=id=>({type:'lp',id}),BD=(a,b)=>({type:'bond',a,b});
const clone=x=>JSON.parse(JSON.stringify(x)),keyBond=(a,b)=>[a,b].sort().join('~');
function formal(g,a){return a.charge||0;}
globalThis.ADDITION_BANK=[];
(()=>{'use strict';
const Z={H:1,C:6,F:9,Cl:17,Br:35,I:53},prefix={F:'fluoro',Cl:'chloro',Br:'bromo',I:'iodo',Me:'methyl',Et:'ethyl'},parents=['','methane','ethane','propane','butane','pentane','hexane','heptane','octane','nonane','decane'];
const neighbours=(g,id)=>g.bonds.filter(b=>b.a===id||b.b===id).map(b=>b.a===id?b.b:b.a);
function priority(g,id,parent){if(id==='@H')return[1,[]];const a=g.atoms.find(a=>a.id===id),ns=neighbours(g,id).filter(n=>n!==parent),children=ns.map(n=>priority(g,n,id));for(let i=0;i<ProductChem.hydrogens(g,a);i++)children.push([1,[]]);children.sort((a,b)=>compare(b,a));return[Z[a.element],children];}
function compare(a,b){if(a[0]!==b[0])return a[0]-b[0];const x=a[1],y=b[1];for(let i=0;i<Math.max(x.length,y.length);i++){const d=(x[i]?.[0]||0)-(y[i]?.[0]||0);if(d)return d;}for(let i=0;i<x.length;i++){const d=compare(x[i],y[i]);if(d)return d;}return 0;}
function ordered(g,c){const ns=neighbours(g,c);if(ns.length===3)ns.push('@H');return ns.sort((a,b)=>compare(priority(g,b,c),priority(g,a,c)));}
function configuration(g,c){const order=ordered(g,c);if(order.length!==4)return null;for(let i=1;i<4;i++)if(compare(priority(g,order[i-1],c),priority(g,order[i],c))===0)return null;const v=SN2Chem.volume(g,c,order);return Math.abs(v)<.01?null:v>0?'R':'S';}
function make(level,n,subs,stereo={}){const g={atoms:[],bonds:[]},L=110,dx=L*Math.cos(Math.PI/6);for(let i=0;i<n;i++){g.atoms.push({id:'c'+(i+1),element:'C',charge:0,x:80+i*dx,y:220+(i%2?55:0)});if(i)g.bonds.push({a:'c'+i,b:'c'+(i+1),order:1});}
 const grouped={};subs.forEach(([pos,type])=>(grouped[pos]||=[]).push(type));for(const [position,types]of Object.entries(grouped)){const pos=+position,p=g.atoms[pos-1],sign=pos%2?-1:1;types.forEach((type,j)=>{let angle=sign*Math.PI/2;if(types.length===2)angle=sign*(j?2*Math.PI/3:Math.PI/3);if(pos===1)angle=-Math.PI/2;if(pos===n)angle=n%2?-Math.PI/2:Math.PI/2;const id='s'+pos+'_'+j,a={id,element:['Me','Et'].includes(type)?'C':type,charge:0,x:p.x+L*Math.cos(angle),y:p.y+L*Math.sin(angle)};g.atoms.push(a);g.bonds.push({a:p.id,b:id,order:1});if(type==='Et'){const angle2=angle+(sign>0?-1:1)*Math.PI/3;g.atoms.push({id:id+'e',element:'C',charge:0,x:a.x+L*Math.cos(angle2),y:a.y+L*Math.sin(angle2)});g.bonds.push({a:id,b:id+'e',order:1});}});}
 const groupedNames={};for(const[pos,t]of subs)(groupedNames[prefix[t]]||=[]).push(pos);let baseName=Object.keys(groupedNames).sort().map(k=>{const loc=groupedNames[k].sort((a,b)=>a-b);return loc.join(',')+'-'+(['','','di','tri','tetra'][loc.length]||'')+k;}).join('-')+parents[n];if(n===2&&subs.length===1)baseName=baseName.replace(/^1-/, '');
 for(const[pos,rs]of Object.entries(stereo)){const c='c'+pos,b=g.bonds.find(b=>b.a===c&&b.b.startsWith('s'));if(!b)throw Error('Missing side group');b.stereo='wedge';b.stereoFrom=c;if(configuration(g,c)!==rs)b.stereo='hash';if(configuration(g,c)!==rs)throw Error('Invalid stereo reference');}
 const stereoText=Object.entries(stereo).map(([p,s])=>p+s).join(','),name=(stereoText?'('+stereoText+')-':'')+baseName;return{level,name,baseName,n,subs,stereo,graph:g,id:level+'-'+name};}
function validate(g){if(g.atoms.some(a=>!['C','H','F','Cl','Br','I'].includes(a.element)))return'Use carbon, hydrogen and halogen atoms for this compound.';if(g.atoms.some(a=>a.charge))return'These haloalkanes are neutral: remove formal charges.';const copy=clone(g);copy.atoms.forEach(a=>{if(a.element==='F')a.element='Cl'});return ProductChem.validation(copy);}
function check(q,g){if(!g.atoms.length)return{correct:false,message:'Draw the complete named compound before checking.'};const error=validate(g);if(error)return{correct:false,message:error};const e=ProductChem.normalized(q.graph),a=ProductChem.normalized(g);if(!ProductChem.isomorphic(e,a))return{correct:false,message:'Check the parent chain, halogen identity, substituent positions and number of bonds.'};const centres=Object.keys(q.stereo).map(p=>'c'+p);if(!centres.length)return{correct:true,message:'Correct.'};
 const adj=x=>new Map(x.atoms.map(n=>[n.id,new Map(x.bonds.filter(b=>b.a===n.id||b.b===n.id).map(b=>[b.a===n.id?b.b:b.a,b.order]))])),ea=adj(e),aa=adj(a),sig=(n,m)=>[n.element,n.h,n.charge||0,m.get(n.id).size].join(':'),map=new Map(),used=new Set(),sequence=[...e.atoms].sort((x,y)=>ea.get(y.id).size-ea.get(x.id).size);
 function visit(i){if(i===sequence.length)return centres.every(c=>{const ev=SN2Chem.volume(q.graph,c,ordered(q.graph,c)),av=SN2Chem.volume(g,map.get(c),ordered(q.graph,c).map(id=>id==='@H'?id:map.get(id)));return Math.abs(av)>.01&&av*ev>0;});const n=sequence[i];for(const t of a.atoms){if(used.has(t.id)||sig(n,ea)!==sig(t,aa)||[...map].some(([id,to])=>(ea.get(n.id).get(id)||0)!==(aa.get(t.id).get(to)||0)))continue;map.set(n.id,t.id);used.add(t.id);if(visit(i+1))return true;used.delete(t.id);map.delete(n.id);}return false;}
 return visit(0)?{correct:true,message:'Correct. The connectivity and absolute configuration match the name.'}:{correct:false,message:'The connectivity is correct. Check R/S at every named stereocentre; use wedge/dashed bonds with their narrow end at the stereocentre.'};}

function centres(g){function branch(id,parent){const a=g.atoms.find(a=>a.id===id),children=neighbours(g,id).filter(n=>n!==parent).map(n=>branch(n,id));for(let i=0;i<ProductChem.hydrogens(g,a);i++)children.push('H[]');return a.element+'['+children.sort().join('|')+']';}return g.atoms.filter(a=>a.element==='C').filter(a=>{const groups=neighbours(g,a.id).map(n=>branch(n,a.id));for(let i=0;i<ProductChem.hydrogens(g,a);i++)groups.push('H[]');return groups.length===4&&new Set(groups).size===4;}).map(a=>a.id);}
function normalize(s){return s.trim().toLowerCase().replace(/[−–—]/g,'-').replace(/\s+/g,'');}
function nameCorrect(q,value){const names=[q.name];if(q.n===2&&q.subs.length===1)names.push('1-'+q.name);const keys=Object.keys(q.stereo);if(keys.length===1)names.push('('+q.stereo[keys[0]]+')-'+q.baseName);return names.some(n=>normalize(n)===normalize(value));}
globalThis.HalideNaming={make,check,validate,configuration,ordered,nameCorrect,neighbours,centres};})();

;
// geometry.js
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
const atoms=g.atoms.map(n=>{const a={...n};const neighbors=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)));a.hSide=neighbors.reduce((s,n)=>s+n.x-a.x,0)>=0?-1:1;a.halfH=15;if(a.element==='R'){a.displayLabel=orientedGroupLabel(a.label,neighbors[0]?.x??a.x,a.x);a.left=a.right=labelWidth(a.displayLabel)/2}else{a.left=a.right=a.element.length===2?16:11;if(a.h){if(a.hSide<0)a.left+=a.h>1?29:20;else a.right+=a.h>1?29:20}}if(a.skeletal){a.left=a.right=a.halfH=0;}else if(a.displayCarbon){a.left=a.right=labelWidth(a.displayCarbon)/2;}if(a.condensedMe){a.condensedMeSide=neighbors.filter(n=>!n.hidden).some(n=>n.x>a.x+1)?-1:1;if(a.h&&!a.hAbove){a.hSide=-a.condensedMeSide;a.left=a.right=a.element.length===2?16:11;if(a.hSide<0)a.left+=a.h>1?29:20;else a.right+=a.h>1?29:20;}if(a.condensedMeSide<0)a.left=50;else a.right=50;}if(a.condensedSuffix){a.hSide=1;a.left=11;a.right=13+labelWidth(a.condensedSuffix);}if(a.condensedPrefix){a.hSide=-1;a.left=13+labelWidth(a.condensedPrefix);a.right=11;}if(a.hAbove){a.left=a.right=a.element.length===2?16:11;a.halfH=15;}if(a.condensedAlcohol){a.condensedMeSide=-1;a.left=50;a.right=33;}a.compactOxygenBond=options.compactOxygenBonds&&a.element==='O'&&!a.h&&!a.condensedMe&&!a.condensedAlcohol;a.charge=formal(g,n);a.directions=neighbors.map(n=>a.condensedAlcohol&&n.element==='H'?0:(a.condensedMe||a.condensedSuffix||a.condensedPrefix)&&n.hidden?(a.condensedMeSide<0||a.condensedPrefix?Math.PI:0):Math.atan2(n.y-a.y,n.x-a.x));if(a.h&&!a.skeletal&&!a.displayCarbon)a.directions.push(a.hAbove?(a.hLabelDy>0?Math.PI/2:-Math.PI/2):a.hSide<0?Math.PI:0);return a}).filter(a=>!a.hidden);
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
 // Reuse obstacle geometry for every candidate curve; none changes during routing.
 const pairs=l.sources.filter(a=>a.type==='lp'),otherPairs=pairs.filter(a=>a.id!==s.id),obstacles=l.bonds.map(b=>({key:b.key,segments:bondSegments(b)})),sourceSegments=s.bond?bondSegments(s.bond):[],condensedOwners=new Set(l.atoms.filter(a=>a.condensedMe).map(a=>a.id));
 const source=s,resonance=chemistryTopic(q)==='resonance';let best;const direct=Math.atan2(s.y-target.y,s.x-target.x);
 const hardResonance=chemistryTopic(q)==='resonance'&&q.level==='hard';
 const angles=target.approachAngles|| (target.atom?[direct,direct-.7,direct+.7,direct-1.2,direct+1.2,-Math.PI/2,Math.PI/2,0,Math.PI]:[Math.atan2(target.bond.ux,-target.bond.uy),Math.atan2(-target.bond.ux,target.bond.uy)]);
 const startDirections=s.type==='lp'?(target.startAngles||[s.angle,s.angle-.75,s.angle+.75]).map(a=>({x:Math.cos(a),y:Math.sin(a)})):[{x:s.bond.uy,y:-s.bond.ux},{x:-s.bond.uy,y:s.bond.ux}];
 for(const angle of angles){const out={x:Math.cos(angle),y:Math.sin(angle)},radius=target.atom?coreRadius(target.atom,angle):(target.arrowGap??(resonance?(target.bond.order===1?5:target.bond.order===2?10:12):2.5)),e={x:target.x+out.x*radius,y:target.y+out.y*radius};
 const leadChoices=target.leadChoices||(target.approachAngles?[50,92,160,240,320]:hardResonance?[38,58,82,108,135]:[32,50,70,92]),endChoices=target.endChoices||(target.approachAngles?[70,115,160,220,280]:hardResonance?[58,82,108,135]:[50,70,92,115]);
 for(const startDirection of startDirections)for(const lead of leadChoices)for(const endLead of endChoices){
 let startGap=resonance?(source.type==='lp'?7:5):0;if(resonance&&source.type==='bond')while(startGap<25&&sourceSegments.some(seg=>segmentDistance({x:source.x+startDirection.x*startGap,y:source.y+startDirection.y*startGap},seg.a,seg.b)<5-1e-8))startGap+=4;const s={...source,x:source.x+startDirection.x*startGap,y:source.y+startDirection.y*startGap};
 const c1={x:s.x+startDirection.x*lead,y:s.y+startDirection.y*lead},c2={x:e.x+out.x*endLead,y:e.y+out.y*endLead};let score=(lead+endLead)*.012;
 const chord={x:e.x-s.x,y:e.y-s.y},side1=chord.x*(c1.y-s.y)-chord.y*(c1.x-s.x),side2=chord.x*(c2.y-s.y)-chord.y*(c2.x-s.x);
 if(side1*side2<0)score+=target.smoothBow||resonance?1000000:120;
 score+=Math.max(0,dist(s,c1)+dist(c1,c2)+dist(c2,e)-dist(s,e)*1.45)*1.25;
 if(resonance){const mid=bezier(s,c1,c2,e,.5),chordLength=dist(s,e)||1,bow=Math.abs(chord.x*(mid.y-s.y)-chord.y*(mid.x-s.x))/chordLength;score+=Math.max(0,(hardResonance?38:24)-bow)*10+Math.max(0,bow-82)*2;}
 if(target.atom)for(const dir of target.atom.directions){const gap=Math.abs(Math.atan2(Math.sin(angle-dir),Math.cos(angle-dir)));score+=Math.max(0,.65-gap)*40}const points=[];
 for(let i=1;i<30;i++){const p=bezier(s,c1,c2,e,i/30);points.push(p);if(l.plus&&dist(p,l.plus)<15)score+=target.approachAngles?3000:30;
 for(const a of l.atoms){if(a.hAbove&&Math.abs(p.x-a.x)<(a.h>1?18:13)&&Math.abs(p.y-(a.y+(a.hLabelDy??-29)))<17)score+=3000;const dx=Math.max(a.x-a.left-p.x,0,p.x-a.x-a.right),dy=Math.max(a.y-a.halfH-p.y,0,p.y-a.y-a.halfH),clearance=Math.hypot(dx,dy);if(clearance<2)score+=target.approachAngles?3000:50;score+=Math.max(0,30-clearance)*3}
 for(const pair of otherPairs)if(dist(p,pair)<7)score+=15;
 if(target.avoidPoints?.some(other=>dist(p,other)<10))score+=10000;
 for(const ch of l.charges)if(dist(p,ch)<14)score+=target.approachAngles||condensedOwners.has(ch.owner)?5000:60;
 for(const b of obstacles){if((b.key===s.key&&dist(p,s)<8)||(b.key===target.key&&dist(p,e)<8))continue;for(const seg of b.segments)if(segmentDistance(p,seg.a,seg.b)<(target.approachAngles?5:3))score+=target.approachAngles?3000:12}
 }
 // Include arrowhead wings, not only the curve, in the clearance check.
 const tx=(e.x-c2.x)/endLead,ty=(e.y-c2.y)/endLead;
 const wings=[{x:e.x-ARROW_HEAD_LENGTH*tx+ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty-ARROW_HEAD_HALF_WIDTH*tx},{x:e.x-ARROW_HEAD_LENGTH*tx-ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty+ARROW_HEAD_HALF_WIDTH*tx}];
 for(const p of wings){if(target.avoidPoints?.some(other=>dist(p,other)<10))score+=10000;for(const a of l.atoms)if(p.x>a.x-a.left-1&&p.x<a.x+a.right+1&&p.y>a.y-a.halfH&&p.y<a.y+a.halfH)score+=80;for(const pair of pairs)if(dist(p,pair)<6)score+=20;for(const ch of l.charges)if(dist(p,ch)<13)score+=target.approachAngles||condensedOwners.has(ch.owner)?5000:80}
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

;
// addition.js
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

;
// sn2-chemistry.js
/* Compare stereochemistry under a connectivity mapping, rather than screen orientation. */
(()=>{'use strict';
function raw(g){const r=ProductChem.fromChemical(g);r.bonds=clone(g.bonds);return r;}
function volume(g,centre,ordered){const c=g.atoms.find(a=>a.id===centre),edges=g.bonds.filter(b=>b.a===centre||b.b===centre),hydrogen=edges.map(b=>g.atoms.find(a=>a.id===(b.a===centre?b.b:b.a))).find(a=>a.element==='H');
const vec=id=>{const a=g.atoms.find(a=>a.id===id),edge=edges.find(b=>b.a===id||b.b===id),length=Math.hypot(a.x-c.x,a.y-c.y)||1,z=edge?.stereo?(edge.stereo==='wedge'?1:-1)*(edge.stereoFrom===centre?1:-1):0;return[(a.x-c.x)/length,(a.y-c.y)/length,z];};
const v=ordered.map(id=>id==='@H'?hydrogen?vec(hydrogen.id):null:vec(id));const missing=v.indexOf(null);if(missing>=0)v[missing]=[0,1,2].map(k=>-v.filter(Boolean).reduce((sum,n)=>sum+n[k],0));const sub=(a,b)=>a.map((n,i)=>n-b[i]),a=sub(v[0],v[3]),b=sub(v[1],v[3]),d=sub(v[2],v[3]);return a[0]*(b[1]*d[2]-b[2]*d[1])-a[1]*(b[0]*d[2]-b[2]*d[0])+a[2]*(b[0]*d[1]-b[1]*d[0]);}
function stereoMatches(q,drawing){if(!q.stereocentre)return true;const e=ProductChem.chemicalExpected(q.product),a=ProductChem.normalized(drawing),eraw=raw(q.product),centre=q.stereocentre,neighbours=q.product.bonds.filter(b=>b.a===centre||b.b===centre).map(b=>q.product.atoms.find(n=>n.id===(b.a===centre?b.b:b.a))),order=neighbours.map(n=>n.element==='H'?'@H':n.id),ev=volume(eraw,centre,order);if(Math.abs(ev)<.01)throw Error('Degenerate reference stereocentre');
const adjacency=g=>{const m=new Map(g.atoms.map(n=>[n.id,new Map()]));for(const b of g.bonds){m.get(b.a).set(b.b,b.order);m.get(b.b).set(b.a,b.order);}return m;},ea=adjacency(e),aa=adjacency(a),sig=(n,adj)=>[n.element,n.charge||0,n.h||0,[...adj.get(n.id).values()].sort().join(',')].join(':'),ordered=[...e.atoms].sort((x,y)=>aa.size&&a.atoms.filter(n=>sig(n,aa)===sig(x,ea)).length-a.atoms.filter(n=>sig(n,aa)===sig(y,ea)).length),mapped=new Map(),used=new Set();
function visit(i){if(i===ordered.length){const av=volume(drawing,mapped.get(centre),order.map(id=>id==='@H'?id:mapped.get(id)));return Math.abs(av)>.01&&av*ev>0;}const n=ordered[i];for(const target of a.atoms){if(used.has(target.id)||sig(n,ea)!==sig(target,aa))continue;if([...mapped].some(([id,to])=>(ea.get(n.id).get(id)||0)!==(aa.get(target.id).get(to)||0)))continue;mapped.set(n.id,target.id);used.add(target.id);if(visit(i+1))return true;mapped.delete(n.id);used.delete(target.id);}return false;}return visit(0);}
function check(q,drawing){const result=ProductChem.check(q,drawing);if(!result.correct)return result;if(!stereoMatches(q,drawing))return{correct:false,message:'Check the stereochemistry at the reacting carbon. SN2 causes inversion. Use a wedge or dashed bond to show the product configuration.'};return result;}
globalThis.SN2Chem={raw,volume,stereoMatches,check};
})();

;
// sn2-drawing.js
(()=>{'use strict';const baseMarkup=additionMarkup,cache=new Map();
function wedge(b){const segment=bondSegments(b)[0],from=b.stereoFrom===b.b?segment.b:segment.a,to=b.stereoFrom===b.b?segment.a:segment.b,length=dist(from,to),ux=(to.x-from.x)/length,uy=(to.y-from.y)/length,width=7;if(b.stereo==='wedge')return `<path class="stereo-bond" d="M${from.x} ${from.y} L${to.x-uy*width} ${to.y+ux*width} L${to.x+uy*width} ${to.y-ux*width} Z" fill="#172532"/>`;return `<g class="stereo-bond" stroke="#172532" stroke-width="1.7">`+Array.from({length:8},(_,i)=>{const t=(i+1)/9,x=from.x+(to.x-from.x)*t,y=from.y+(to.y-from.y)*t,w=width*t;return `<path d="M${x-uy*w} ${y+ux*w} L${x+uy*w} ${y-ux*w}"/>`;}).join('')+'</g>';}
additionMarkup=function(l,q){return baseMarkup({...l,bonds:l.bonds.filter(b=>!b.stereo)},q)+l.bonds.filter(b=>b.stereo).map(wedge).join('');};
function graph(g){const d=ProductChem.display(SN2Chem.raw(g));for(const a of d.atoms){if(a.element==='C'){a.skeletal=true;if(a.id==='nu'&&a.lp){a.skeletal=false;a.displayCarbon='C';}}a.pairPadding=['Cl','Br','I'].includes(a.element)?3:4;a.arrowGap=a.skeletal?13:5;}return d;}
function bow(l,s,t,others=[]){let best;const scoreRoute=(r,penalty)=>{const samples=visibleArrowSamples(r,s,50),plusScore=l.plus?samples.reduce((n,p)=>n+Math.max(0,18-dist(p,l.plus))*100000,0):0;const clipped=l.frame?samples.filter(p=>p.x<l.frame.minX||p.x>l.frame.maxX||p.y<12||p.y>508).length:0;const score=visibleAdditionBondScore(l,s,r)+visibleLonePairScore(l,s,r)+companionArrowScore(r,s,others)+penalty+plusScore+clipped*100000000;if(!best||score<best.score)best={...r,score};};const dx=t.x-s.x,dy=t.y-s.y,length=Math.hypot(dx,dy)||1;
for(const side of[-1,1])for(const bend of[50,70,95,125,165,210,270]){const control={x:(s.x+t.x)/2-dy/length*bend*side,y:(s.y+t.y)/2+dx/length*bend*side},angle=Math.atan2(control.y-t.y,control.x-t.x),radius=t.atom?coreRadius(t.atom,angle):9,e={x:t.x+Math.cos(angle)*radius,y:t.y+Math.sin(angle)*radius};let start={x:s.x,y:s.y};if(s.type==='atom'||s.type==='charge'){const theta=Math.atan2(control.y-s.y,control.x-s.x),r=s.type==='charge'?14:rectRadius(s.atom,Math.cos(theta),Math.sin(theta),6);start={x:s.x+Math.cos(theta)*r,y:s.y+Math.sin(theta)*r};}scoreRoute({start,c1:{x:start.x+(control.x-start.x)*2/3,y:start.y+(control.y-start.y)*2/3},c2:{x:e.x+(control.x-e.x)*2/3,y:e.y+(control.y-e.y)*2/3},e,headLength:16,headHalfWidth:6},bend*.1);}
if(s.type==='lp')for(const startAngle of[s.angle,s.angle-.6,s.angle+.6])for(const lead of[60,120,200,320])for(const endAngle of[Math.PI/2,-Math.PI/2])for(const endLead of[100,180,240]){const radius=t.atom?coreRadius(t.atom,endAngle):9,e={x:t.x+Math.cos(endAngle)*radius,y:t.y+Math.sin(endAngle)*radius},start={x:s.x,y:s.y},c1={x:s.x+Math.cos(startAngle)*lead,y:s.y+Math.sin(startAngle)*lead},c2={x:e.x+Math.cos(endAngle)*endLead,y:e.y+Math.sin(endAngle)*endLead},chord={x:e.x-start.x,y:e.y-start.y},side1=chord.x*(c1.y-start.y)-chord.y*(c1.x-start.x),side2=chord.x*(c2.y-start.y)-chord.y*(c2.x-start.x);scoreRoute({start,c1,c2,e,headLength:16,headHalfWidth:6},(lead+endLead)*.08+(side1*side2<0?1000:0));}
best.points=visibleArrowSamples(best,s);return best;}

function range(l,choose){const xs=l.atoms.filter(a=>choose(a.id)).flatMap(a=>[a.x-a.left-2,a.x+a.right+2]).concat(l.sources.filter(s=>s.type==='lp'&&choose(s.owner)).flatMap(s=>[s.x-6,s.x+6]),l.charges.filter(s=>choose(s.owner)).flatMap(s=>[s.x-10,s.x+10]));return{min:Math.min(...xs),max:Math.max(...xs)};}
function verticalRange(l,choose){const ys=l.atoms.filter(a=>choose(a.id)).flatMap(a=>[a.y-a.halfH-2,a.y+a.halfH+2]).concat(l.sources.filter(s=>s.type==='lp'&&choose(s.owner)).flatMap(s=>[s.y-6,s.y+6]),l.charges.filter(s=>choose(s.owner)).flatMap(s=>[s.y-10,s.y+10]));return{min:Math.min(...ys),max:Math.max(...ys)};}
function models(q){if(cache.has(q.id))return cache.get(q.id);const options={compactOxygenBonds:true,tightPositiveOxygen:true,negativeChargeAbove:true,raisedNegativeCharges:true,chargePairClearance:17,cardinalPairs:true},displayStart=graph(q.start),displayProduct=graph(q.product),beforeStart=layoutGraph(displayStart,7,options),beforeProduct=layoutGraph(displayProduct,7,options),isNu=id=>['nu','nm','nn'].includes(id),a=range(beforeStart,id=>!isNu(id)),b=range(beforeProduct,id=>id!=='x'),nu=range(beforeStart,isNu),lg=range(beforeProduct,id=>id==='x'),left=q.start.atoms.find(a=>a.id==='nu').x<500,nearLeft=Math.min(a.min,b.min),nearRight=Math.max(a.max,b.max),dx=left?nearLeft-80-Math.max(nu.max,lg.max):nearRight+80-Math.min(nu.min,lg.min);
const av=verticalRange(beforeStart,id=>!isNu(id)),bv=verticalRange(beforeProduct,id=>id!=='x'),organicDy=260-(Math.min(av.min,bv.min)+Math.max(av.max,bv.max))/2;for(const atom of displayStart.atoms.filter(a=>!isNu(a.id)))atom.y+=organicDy;for(const atom of displayProduct.atoms.filter(a=>a.id!=='x'))atom.y+=organicDy;for(const atom of displayStart.atoms.filter(a=>isNu(a.id)))atom.x+=dx;displayProduct.atoms.find(a=>a.id==='x').x+=dx;const start=layoutGraph(displayStart,7,options),product=layoutGraph(displayProduct,7,options),lo=Math.min(a.min,b.min,nu.min+dx,lg.min+dx),hi=Math.max(a.max,b.max,nu.max+dx,lg.max+dx),tx=760-hi,productTx=40-lo,plusX=left?nearLeft-40:nearRight+40;start.plus={x:plusX,y:260};product.plus={...start.plus};start.frame={minX:12-tx,maxX:788-tx};

for(const atom of start.atoms)start.sources.push({id:'origin:'+atom.id,key:'origin:'+atom.id,type:'atom',atom,x:atom.x,y:atom.y,angle:-Math.PI/2,label:'Start at '+(atom.skeletal?'carbon':atom.displayLabel||atom.element)+' atom'});for(const charge of start.charges)start.sources.push({id:'charge:'+charge.owner,key:'charge:'+charge.owner,type:'charge',x:charge.x,y:charge.y,atom:start.atoms.find(a=>a.id===charge.owner),angle:-Math.PI/2,label:'Start at a charge'});
const routes=new Map(),departure=start.sources.find(s=>s.key==='bond:'+keyBond('c','x')),destination=start.targets.find(t=>t.key==='atom:x'),leaving=bow(start,departure,destination);routes.set(departure.id+'>'+destination.key,leaving);
const m={start,product,routes,tx,productTx,organicDy,width:hi-lo};cache.set(q.id,m);return m;}
function route(q,s,t,others=[]){const m=models(q),key=s.id+'>'+t.key;if(!m.routes.has(key)){let avoid=others;if(s.key==='lp:nu'&&t.key==='atom:c'){const dep=m.start.sources.find(a=>a.key==='bond:'+keyBond('c','x')),end=m.start.targets.find(a=>a.key==='atom:x'),leaving=m.routes.get(dep.id+'>'+end.key);avoid=visibleArrowSamples(leaving,dep);}m.routes.set(key,bow(m.start,s,t,avoid));}return m.routes.get(key);}
function contents(q,l){return additionMarkup(l,q)+`<text x="${l.plus.x}" y="260" text-anchor="middle" dominant-baseline="central" font-family="Arial" font-size="24" fill="#172532">+</text>`;}
function productSVG(q){return `<svg class="sn2-board" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" role="img" aria-label="SN2 substitution product and halide ion${q.stereocentre?', with inversion at the reacting carbon':''}"><g transform="translate(${models(q).productTx} 0)">${contents(q,models(q).product)}</g></svg>`;}
globalThis.SN2Drawing={models,route,bow,contents,productSVG,wedge};
})();

;
// products-editor.js
/* Small, dependency-free molecular sketcher. Answer chemistry lives in ProductChem. */
(()=>{'use strict';
const $=id=>document.getElementById(id),cp=ProductChem.copy;
class StructureEditor{
 constructor(onChange=()=>{}){this.board=$('p-board');this.onChange=onChange;this.graph={atoms:[],bonds:[]};this.tool='bond1';this.history=[];this.future=[];this.anchor=null;this.cursor={x:410,y:185};this.serial=0;this.locked=false;
 this.board.addEventListener('pointerdown',e=>this.down(e));this.board.addEventListener('pointermove',e=>this.motion(e));this.board.addEventListener('pointerup',e=>this.up(e));this.board.addEventListener('pointercancel',()=>{this.drag=null;$('p-preview').innerHTML='';});this.board.addEventListener('keydown',e=>this.keydown(e));
 document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>this.setTool(b.dataset.tool)));
 for(const[name,fn]of Object.entries({undo:()=>this.undo(),redo:()=>this.redo(),clear:()=>this.setGraph({atoms:[],bonds:[]}),tidy:()=>this.tidy(),fit:()=>this.fit()}))$('p-'+name).addEventListener('click',()=>{if(!this.locked)fn();});this.render();}
 getGraph(){return cp(this.graph);} snapshot(){this.history.push(this.getGraph());if(this.history.length>100)this.history.shift();this.future=[];}
 changed(){this.render();this.onChange(this.getGraph());} setGraph(g,record=true){if(record)this.snapshot();this.graph=cp(g);this.anchor=null;this.drag=null;if(!record){this.history=[];this.future=[];}this.changed();this.fit();}
 undo(){if(!this.history.length)return;this.future.push(this.getGraph());this.graph=this.history.pop();this.anchor=null;this.changed();} redo(){if(!this.future.length)return;this.history.push(this.getGraph());this.graph=this.future.pop();this.anchor=null;this.changed();}
 setTool(tool){if(this.locked)return;this.tool=tool;this.anchor=null;this.render();} setLocked(value){this.locked=value;document.querySelectorAll('[data-tool],.editor-actions button').forEach(b=>b.disabled=value);this.render();}
 atom(id){return this.graph.atoms.find(a=>a.id===id);} addAtom(p,element='C'){let id;do{id='draw'+(++this.serial);}while(this.atom(id));const a={id,element,charge:0,x:p.x,y:p.y};this.graph.atoms.push(a);return a;}
 addBond(a,b,order){if(a===b)return;const existing=this.graph.bonds.find(e=>ProductChem.key(e.a,e.b)===ProductChem.key(a,b));if(existing)existing.order=order;else this.graph.bonds.push({a,b,order});}
 point(e){const r=this.board.getBoundingClientRect(),v=this.board.getAttribute('viewBox').split(/\s+/).map(Number),scale=Math.min(r.width/v[2],r.height/v[3]);return{x:v[0]+(e.clientX-r.left-(r.width-v[2]*scale)/2)/scale,y:v[1]+(e.clientY-r.top-(r.height-v[3]*scale)/2)/scale};}
 target(e,p){if(e.target.dataset.atom)return{atom:e.target.dataset.atom};if(e.target.dataset.bond)return{bond:Number(e.target.dataset.bond)};const near=this.graph.atoms.filter(a=>!this.hidden?.has(a.id)).map(a=>({a,d:Math.hypot(a.x-p.x,a.y-p.y)})).sort((a,b)=>a.d-b.d)[0];return near?.d<18?{atom:near.a.id}:{};}
 eraseTarget(p,t={}){const charge=this.layout.charges.find(c=>Math.hypot(c.x-p.x,c.y-p.y)<11);if(charge)return{charge:charge.owner};if(t.atom||t.bond!==undefined)return t;const atom=this.graph.atoms.find(a=>!this.hidden.has(a.id)&&Math.hypot(a.x-p.x,a.y-p.y)<15);if(atom)return{atom:atom.id};const bond=this.layout.bonds.find(b=>bondSegments(b).some(segment=>segmentDistance(p,segment.a,segment.b)<9));return bond?{bond:this.graph.bonds.findIndex(b=>ProductChem.key(b.a,b.b)===ProductChem.key(bond.a,bond.b))}:{};}
 eraseAt(p,t={},record=true){t=this.eraseTarget(p,t);if(!t.charge&&!t.atom&&t.bond===undefined)return false;if(record)this.snapshot();if(t.charge)this.atom(t.charge).charge=0;else if(t.atom){const ids=new Set([t.atom]);for(const b of this.graph.bonds)if(b.a===t.atom&&this.hidden.has(b.b))ids.add(b.b);else if(b.b===t.atom&&this.hidden.has(b.a))ids.add(b.a);this.graph.atoms=this.graph.atoms.filter(a=>!ids.has(a.id));this.graph.bonds=this.graph.bonds.filter(b=>!ids.has(b.a)&&!ids.has(b.b));}else this.graph.bonds.splice(t.bond,1);this.anchor=null;this.changed();return true;}
 eraseStroke(p,t={}){const d=this.drag;if(this.eraseAt(p,t,!d.erased))d.erased=true;}
 snapped(a,p){let angle=Math.atan2(p.y-a.y,p.x-a.x);angle=Math.round(angle/(Math.PI/6))*Math.PI/6;const label=a.element==='C'?0:a.element==='Ph'?17:12,length=60+label;return{x:a.x+Math.cos(angle)*length,y:a.y+Math.sin(angle)*length};}
 activate(p,t={}){if(this.locked)return;const a=this.atom(t.atom);if(this.tool.startsWith('bond')){const order=Number(this.tool.slice(-1));if(t.bond!==undefined){this.snapshot();this.graph.bonds[t.bond].order=order;this.anchor=null;this.changed();return;}if(!this.anchor){if(a)this.anchor=a.id;else{this.snapshot();this.anchor=this.addAtom(p).id;this.changed();}this.render();return;}if(a?.id===this.anchor){this.anchor=null;this.render();return;}this.snapshot();const start=this.atom(this.anchor),end=a||this.addAtom(this.snapped(start,p));this.addBond(start.id,end.id,order);this.anchor=end.id;this.changed();return;}
 if(this.tool==='move'){this.anchor=a?.id||null;this.render();return;}
 if(this.tool==='erase'){this.eraseAt(p,t);return;}
 if(['positive','negative','neutral'].includes(this.tool)){if(!a)return;if(a.element==='Ph'&&this.tool!=='neutral'){$('p-atom-status').textContent='Place a formal charge on an atom; Ph represents a phenyl group.';return;}this.snapshot();const charge=this.tool==='positive'?1:this.tool==='negative'?-1:0;a.charge=a.charge===charge?0:charge;this.changed();return;}
 this.snapshot();if(this.tool==='OMe'){const o=a||this.addAtom(p,'O');o.element='O';o.charge=0;const methyl=this.addAtom({x:o.x+72,y:o.y},'C');this.addBond(o.id,methyl.id,1);}else if(a){a.element=this.tool;a.charge=0;}else this.addAtom(p,this.tool);this.anchor=null;this.changed();}
 down(e){if(this.locked||e.button>0)return;e.preventDefault();const p=this.point(e),t=this.target(e,p);this.cursor=p;this.drag={p,t,id:e.pointerId,moved:false,before:this.getGraph(),shift:e.shiftKey,previous:p};this.board.setPointerCapture?.(e.pointerId);if(this.tool==='erase')this.eraseStroke(p,t);}
 motion(e){if(!this.drag||e.pointerId!==this.drag.id)return;const p=this.point(e),d=this.drag;if(this.tool==='erase'){const from=d.previous,steps=Math.max(1,Math.ceil(Math.hypot(p.x-from.x,p.y-from.y)/4));for(let i=1;i<=steps;i++)this.eraseStroke({x:from.x+(p.x-from.x)*i/steps,y:from.y+(p.y-from.y)*i/steps});d.previous=p;return;}if(Math.hypot(p.x-d.p.x,p.y-d.p.y)<5&&!d.moved)return;d.moved=true;if(this.tool==='move'&&d.t.atom){const comp=ProductChem.components(d.before).find(c=>c.atoms.some(a=>a.id===d.t.atom)),ids=new Set(d.shift?comp.atoms.map(a=>a.id):[d.t.atom]);this.graph=cp(d.before);for(const a of this.graph.atoms)if(ids.has(a.id)){a.x+=p.x-d.p.x;a.y+=p.y-d.p.y;}this.render();}else if(this.tool.startsWith('bond')&&d.t.bond===undefined){const start=this.atom(d.t.atom)||d.p,end=this.target(e,p).atom?this.atom(this.target(e,p).atom):this.snapped(start,p);$('p-preview').innerHTML=`<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="#44849b" stroke-width="2" stroke-dasharray="5 3"/>`;}}
 up(e){const d=this.drag;if(!d||d.id!==e.pointerId)return;const p=this.point(e),t=this.target(e,p);if(this.tool==='erase'){this.motion(e);this.drag=null;return;}this.drag=null;$('p-preview').innerHTML='';if(d.moved&&this.tool==='move'&&d.t.atom){this.history.push(d.before);this.future=[];this.changed();}else if(d.moved&&this.tool.startsWith('bond')&&d.t.bond===undefined){this.snapshot();const start=this.atom(d.t.atom)||this.addAtom(d.p),end=this.atom(t.atom)||this.addAtom(this.snapped(start,p));this.addBond(start.id,end.id,Number(this.tool.slice(-1)));this.anchor=null;this.changed();}else this.activate(p,t);}
 keydown(e){if(this.locked)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?this.redo():this.undo();return;}if(e.key==='Escape'){this.anchor=null;this.render();return;}const shortcuts={c:'C',o:'O',n:'N',h:'H','1':'bond1','2':'bond2','3':'bond3','+':'positive','-':'negative','−':'negative',Delete:'erase',Backspace:'erase'};if(shortcuts[e.key]||shortcuts[e.key.toLowerCase()]){e.preventDefault();this.setTool(shortcuts[e.key]||shortcuts[e.key.toLowerCase()]);return;}if(e.key.startsWith('Arrow')){e.preventDefault();this.cursor.x+=e.key==='ArrowLeft'?-20:e.key==='ArrowRight'?20:0;this.cursor.y+=e.key==='ArrowUp'?-20:e.key==='ArrowDown'?20:0;this.render(true);}else if(e.key==='Enter'||e.key===' '){e.preventDefault();this.activate(this.cursor,e.target.dataset.atom?{atom:e.target.dataset.atom}:e.target.dataset.bond!==undefined?{bond:Number(e.target.dataset.bond)}:{});}}
 tidy(){if(!this.graph.atoms.length)return;this.snapshot();let offset=75;for(const comp of ProductChem.components(this.graph)){const used=new Set(),by=new Map(comp.atoms.map(a=>[a.id,a]));const root=comp.atoms.filter(a=>a.element==='C').sort((a,b)=>comp.bonds.filter(e=>e.a===b.id||e.b===b.id).length-comp.bonds.filter(e=>e.a===a.id||e.b===a.id).length)[0]||comp.atoms[0];root.x=offset;root.y=185;function visit(a,parent,angle){used.add(a.id);const next=comp.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>by.get(b.a===a.id?b.b:b.a)).filter(n=>!used.has(n.id));next.forEach((n,i)=>{const linear=comp.bonds.filter(b=>b.a===a.id||b.b===a.id).some(b=>b.order===3)||comp.bonds.filter(b=>(b.a===a.id||b.b===a.id)&&b.order===2).length===2;const theta=parent?angle+(next.length===1?(linear?0:Math.sin(angle)>0?-Math.PI/3:Math.PI/3):next.length===3?[-Math.PI/2,0,Math.PI/2][i]:[-Math.PI/3,Math.PI/3][i]):(next.length===4?[-Math.PI/4,Math.PI/4,3*Math.PI/4,5*Math.PI/4]:[-Math.PI/6,Math.PI/2,7*Math.PI/6])[i];const len=60+(a.element==='C'?0:a.element==='Ph'?17:12)+(n.element==='C'?0:n.element==='Ph'?17:12);n.x=a.x+Math.cos(theta)*len;n.y=a.y+Math.sin(theta)*len;visit(n,a,theta);});}visit(root,null,0);const min=Math.min(...comp.atoms.map(a=>a.x)),max=Math.max(...comp.atoms.map(a=>a.x));for(const a of comp.atoms)a.x+=offset-min;offset+=max-min+140;}this.anchor=null;this.changed();this.fit();}
 fit(){const a=this.graph.atoms;if(!a.length){this.board.setAttribute('viewBox','0 0 820 370');return;}const b=this.layout.bounds,w=Math.max(820,b.w+100),h=Math.max(370,b.h+100);const x=b.x+b.w/2-w/2,y=b.y+b.h/2-h/2;this.board.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);const background=$('p-grid-background');if(background)for(const[k,v]of Object.entries({x,y,width:w,height:h}))background.setAttribute(k,v);}
 render(cursor=false){this.board.dataset.tool=this.tool;const g=ProductChem.display(this.graph);this.hidden=new Set(g.atoms.filter(a=>a.hidden).map(a=>a.id));this.layout=layoutGraph(g,7,{compactOxygenBonds:true,tightPositiveOxygen:true,chargePairClearance:17,negativeChargeAbove:true,raisedNegativeCharges:true,cardinalPairs:true});$('p-molecules').innerHTML=additionMarkup(this.layout,{topic:'product'});let hits='';for(let i=0;i<this.graph.bonds.length;i++){const b=this.graph.bonds[i];if(this.hidden.has(b.a)||this.hidden.has(b.b))continue;const a=this.atom(b.a),n=this.atom(b.b);hits+=`<line class="editor-hit" data-bond="${i}" tabindex="0" role="button" aria-label="${b.order===1?'Single':b.order===2?'Double':'Triple'} bond" x1="${a.x}" y1="${a.y}" x2="${n.x}" y2="${n.y}" style="stroke-width:16"/>`;}for(const a of this.layout.atoms)hits+=`<circle class="editor-hit" data-atom="${a.id}" tabindex="0" role="button" aria-label="${a.element==='R'?'Phenyl':a.element}, formal charge ${a.charge||0}" cx="${a.x}" cy="${a.y}" r="19"/>`;$('p-hit').innerHTML=hits;const s=this.atom(this.anchor);$('p-selection').innerHTML=s?`<circle cx="${s.x}" cy="${s.y}" r="12" fill="none" stroke="#44849b" stroke-width="1.5"/>`:cursor?`<path d="M ${this.cursor.x-8} ${this.cursor.y} h16 M ${this.cursor.x} ${this.cursor.y-8} v16" stroke="#44849b"/>`:'';
 const comps=ProductChem.components(this.graph).filter(c=>c.atoms.some(a=>!this.hidden.has(a.id))).sort((a,b)=>ProductChem.visualBounds(a,this.layout).left-ProductChem.visualBounds(b,this.layout).left),boxes=comps.map(c=>ProductChem.visualBounds(c,this.layout));for(let i=1;i<boxes.length;i++){const left=boxes[i-1].right,right=boxes[i].left;if(right-left>36)$('p-molecules').innerHTML+=`<text class="product-separator" x="${(left+right)/2}" y="${(boxes[i-1].baseline+boxes[i].baseline)/2}" text-anchor="middle" dominant-baseline="central" font-family="Arial" font-size="24" fill="#172532">+</text>`;}
 $('p-empty').hidden=!!this.graph.atoms.length;const names={bond1:'Single bond',bond2:'Double bond',bond3:'Triple bond',positive:'Positive charge',negative:'Negative charge',neutral:'Remove charge',move:'Move',erase:'Eraser'};$('p-tool-status').textContent=(names[this.tool]||this.tool+' atom')+(this.anchor&&this.tool.startsWith('bond')?' · choose the next atom or point':'');$('p-components').textContent=comps.length+' product'+(comps.length===1?'':'s')+' drawn';$('p-atom-status').textContent=ProductChem.validation(this.graph);$('p-undo').disabled=this.locked||!this.history.length;$('p-redo').disabled=this.locked||!this.future.length;document.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tool===this.tool)));}
}
globalThis.StructureEditor=StructureEditor;
})();

;
// sn2-editor.js
/* Wedge tools are local to SN2; the previously reviewed editor is unchanged. */
(()=>{'use strict';class SN2Editor extends StructureEditor{
target(e,p){const t=super.target(e,p);if(t.atom||t.bond!==undefined)return t;const nearest=this.layout.bonds.filter(b=>!this.hidden.has(b.a)&&!this.hidden.has(b.b)).map(b=>({b,d:Math.min(...bondSegments(b).map(segment=>segmentDistance(p,segment.a,segment.b)))})).filter(x=>x.d<10).sort((a,b)=>a.d-b.d)[0];return nearest?{bond:this.graph.bonds.findIndex(b=>ProductChem.key(b.a,b.b)===ProductChem.key(nearest.b.a,nearest.b.b))}:t;}
motion(e){if(this.tool!=='wedge'&&this.tool!=='hash')return super.motion(e);const tool=this.tool;this.tool='bond1';try{super.motion(e);}finally{this.tool=tool;}}
up(e){const d=this.drag;if(!d||d.id!==e.pointerId)return;if(!d.moved&&d.t.bond!==undefined&&this.tool!=='erase'){this.drag=null;document.getElementById('p-preview').innerHTML='';this.activate(d.p,d.t);return;}if((this.tool==='wedge'||this.tool==='hash')&&d.moved&&d.t.bond===undefined){const p=this.point(e),t=this.target(e,p);this.drag=null;document.getElementById('p-preview').innerHTML='';if(d.t.atom&&d.t.atom===t.atom)return;this.snapshot();const start=this.atom(d.t.atom)||this.addAtom(d.p),end=this.atom(t.atom)||this.addAtom(this.snapped(start,p));this.addBond(start.id,end.id,1);const b=this.graph.bonds.find(b=>ProductChem.key(b.a,b.b)===ProductChem.key(start.id,end.id));b.stereo=this.tool;b.stereoFrom=start.id;this.anchor=null;this.changed();return;}super.up(e);}

activate(p,t={}){if(this.locked)return;if(this.tool==='wedge'||this.tool==='hash'){if(t.bond===undefined){const tool=this.tool,from=this.anchor;this.tool='bond1';try{super.activate(p,t);}finally{this.tool=tool;}if(from&&this.anchor&&from!==this.anchor){const b=this.graph.bonds.find(b=>ProductChem.key(b.a,b.b)===ProductChem.key(from,this.anchor));if(b){b.stereo=tool;b.stereoFrom=from;}}this.changed();return;}const b=this.graph.bonds[t.bond];if(b.order!==1){document.getElementById('p-atom-status').textContent='Wedges and dashed bonds apply to single bonds.';return;}this.snapshot();const previous=b.stereo;b.stereo=this.tool;if(previous===this.tool)b.stereoFrom=b.stereoFrom===b.a?b.b:b.a;else b.stereoFrom=b.a;this.anchor=null;this.changed();return;}if(this.tool.startsWith('bond')&&t.bond!==undefined){this.snapshot();const b=this.graph.bonds[t.bond];b.order=Number(this.tool.slice(-1));delete b.stereo;delete b.stereoFrom;this.anchor=null;this.changed();return;}super.activate(p,t);}
addBond(a,b,order){super.addBond(a,b,order);const edge=this.graph.bonds.find(e=>ProductChem.key(e.a,e.b)===ProductChem.key(a,b));if(order!==1){delete edge.stereo;delete edge.stereoFrom;}}
snapped(a,p){const angle=Math.round(Math.atan2(p.y-a.y,p.x-a.x)/(Math.PI/6))*Math.PI/6;return{x:a.x+110*Math.cos(angle),y:a.y+110*Math.sin(angle)};}
fit(){if(!this.graph.atoms.length){this.board.setAttribute('viewBox','0 0 800 520');return;}const b=this.layout.bounds,w=Math.max(800,b.w+100),h=Math.max(520,b.h+100),x=b.x+b.w/2-w/2,y=b.y+b.h/2-h/2;this.board.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);const background=document.getElementById('p-grid-background');for(const[k,v]of Object.entries({x,y,width:w,height:h}))background.setAttribute(k,v);}
tidy(){document.getElementById('p-atom-status').textContent='Use Move to adjust the drawing. Keeping the current geometry preserves your wedge and dashed-bond configuration.';}
render(cursor=false){super.render(cursor);if(this.tool==='wedge'||this.tool==='hash')document.getElementById('p-tool-status').textContent=this.tool==='wedge'?'Solid wedge · click a bond or drag to draw; click again to reverse its taper':'Dashed bond · click a bond or drag to draw; click again to reverse its taper';}
}
globalThis.SN2Editor=SN2Editor;})();

;
// e2-chemistry.js
/* E/Z is compared under a connectivity mapping, independent of sketch orientation. */
(()=>{'use strict';const raw=SN2Chem.raw;
function side(g,a,b,r){const at=id=>g.atoms.find(n=>n.id===id),x=at(a),y=at(b),z=at(r),length=Math.hypot(y.x-x.x,y.y-x.y)||1,rlength=Math.hypot(z.x-x.x,z.y-x.y)||1;return((y.x-x.x)*(z.y-x.y)-(y.y-x.y)*(z.x-x.x))/(length*rlength);}
function stereoMatches(q,drawing){if(!q.alkeneRefs)return true;const expected=ProductChem.chemicalExpected(q.product),actual=ProductChem.normalized(drawing),ref=q.alkeneRefs,adj=g=>{const m=new Map(g.atoms.map(n=>[n.id,new Map()]));for(const b of g.bonds){m.get(b.a).set(b.b,b.order);m.get(b.b).set(b.a,b.order);}return m;},ea=adj(expected),aa=adj(actual),sig=(n,adj)=>[n.element,n.charge||0,n.h||0,[...adj.get(n.id).values()].sort().join(',')].join(':'),order=[...expected.atoms].sort((x,y)=>actual.atoms.filter(n=>sig(n,aa)===sig(x,ea)).length-actual.atoms.filter(n=>sig(n,aa)===sig(y,ea)).length),mapped=new Map(),used=new Set(),eSign=side(raw(q.product),ref.a,ref.b,ref.ra)*side(raw(q.product),ref.a,ref.b,ref.rb);
function visit(i){if(i===order.length){const a=mapped.get(ref.a),b=mapped.get(ref.b),ra=mapped.get(ref.ra),rb=mapped.get(ref.rb),x=side(drawing,a,b,ra),y=side(drawing,a,b,rb);return Math.abs(x)>.15&&Math.abs(y)>.15&&x*y*eSign>0;}const n=order[i];for(const a of actual.atoms){if(used.has(a.id)||sig(n,ea)!==sig(a,aa))continue;if([...mapped].some(([id,to])=>(ea.get(n.id).get(id)||0)!==(aa.get(a.id).get(to)||0)))continue;mapped.set(n.id,a.id);used.add(a.id);if(visit(i+1))return true;mapped.delete(n.id);used.delete(a.id);}return false;}return visit(0);}
function check(q,drawing){const result=ProductChem.check(q,drawing);if(!result.correct)return result;const sp2=new Set(drawing.bonds.filter(b=>b.order===2).flatMap(b=>[b.a,b.b]));if(drawing.bonds.some(b=>b.stereo&&(sp2.has(b.a)||sp2.has(b.b))))return{correct:false,message:'Use ordinary bonds around the alkene carbons. Show E/Z by placing the substituents on the appropriate sides of the double bond.'};if(!stereoMatches(q,drawing))return{correct:false,message:'Check the alkene stereochemistry. Follow the shown anti conformation: the expected alkene is '+q.alkeneStereo+'. Put the substituents clearly on the appropriate sides of the double bond.'};return result;}
globalThis.E2Chem={raw,side,stereoMatches,check};})();

;
// alkene-naming-core.js
/* Monoalkene names and E/Z marking under a complete connectivity mapping. */
(()=>{'use strict';const cp=clone,parents={2:'eth',3:'prop',4:'but',5:'pent',6:'hex',7:'hept',8:'oct',9:'non',10:'dec'};
const adj=(g,id)=>g.bonds.filter(b=>b.a===id||b.b===id).map(b=>b.a===id?b.b:b.a),at=(g,id)=>g.atoms.find(a=>a.id===id);
function signature(g,id,parent){if(id==='@H')return[1,[]];const a=at(g,id),children=adj(g,id).filter(n=>n!==parent).map(n=>signature(g,n,id));for(let i=0;i<ProductChem.hydrogens(g,a);i++)children.push([1,[]]);children.sort((a,b)=>compare(b,a));return[6,children];}
function compare(a,b){if(a[0]!==b[0])return a[0]-b[0];for(let i=0;i<Math.max(a[1].length,b[1].length);i++){const d=(a[1][i]?.[0]||0)-(b[1][i]?.[0]||0);if(d)return d;}for(let i=0;i<a[1].length;i++){const d=compare(a[1][i],b[1][i]);if(d)return d;}return 0;}
function ligands(g,id,other){const ns=adj(g,id).filter(n=>n!==other);for(let i=0;i<ProductChem.hydrogens(g,at(g,id));i++)ns.push('@H');return ns.sort((a,b)=>compare(signature(g,b,id),signature(g,a,id)));}
function refs(g){const db=g.bonds.find(b=>b.order===2);const left=ligands(g,db.a,db.b),right=ligands(g,db.b,db.a);if(left.length!==2||right.length!==2)throw Error('Alkene valence');if(!compare(signature(g,left[0],db.a),signature(g,left[1],db.a))||!compare(signature(g,right[0],db.b),signature(g,right[1],db.b)))return null;return{a:db.a,b:db.b,ra:left[0],rb:right[0]};}
function stereo(g,r=refs(g)){if(!r)return null;const product=E2Chem.side(g,r.a,r.b,r.ra)*E2Chem.side(g,r.a,r.b,r.rb);return Math.abs(product)<.02?null:product<0?'E':'Z';}
function reflect(g,r){const a=at(g,r.a),b=at(g,r.b),dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy),ux=dx/len,uy=dy/len,seen=new Set([r.a]),queue=[r.b];while(queue.length){const id=queue.shift();if(seen.has(id))continue;seen.add(id);const p=at(g,id),x=p.x-a.x,y=p.y-a.y,dot=x*ux+y*uy;p.x=a.x+2*dot*ux-x;p.y=a.y+2*dot*uy-y;queue.push(...adj(g,id).filter(n=>!seen.has(n)));}}
function make(level,n,p,subs=[],ez=null){const q=HalideNaming.make(level,n,subs.map(([pos,type])=>[pos,type==='Pr'?'Et':type]));for(const [i,[pos,type]]of subs.entries())if(type==='Pr'){const local=subs.slice(0,i).filter(s=>s[0]===pos).length,id='s'+pos+'_'+local+'e',a=at(q.graph,id),prev=at(q.graph,'s'+pos+'_'+local),parent=at(q.graph,'c'+pos),theta=Math.atan2(prev.y-parent.y,prev.x-parent.x),next={id:id+'p',element:'C',charge:0,x:a.x+110*Math.cos(theta),y:a.y+110*Math.sin(theta)};q.graph.atoms.push(next);q.graph.bonds.push({a:id,b:next.id,order:1});}
q.graph.bonds.find(b=>b.a==='c'+p&&b.b==='c'+(p+1)).order=2;const r=refs(q.graph);if(!!r!==!!ez)throw Error('E/Z descriptor mismatch');if(r&&stereo(q.graph,r)!==ez)reflect(q.graph,r);const grouped={};for(const[pos,type]of subs)(grouped[type]||=[]).push(pos);const prefix=Object.keys(grouped).sort((a,b)=>({Me:'methyl',Et:'ethyl',Pr:'propyl'}[a]).localeCompare({Me:'methyl',Et:'ethyl',Pr:'propyl'}[b])).map(t=>grouped[t].sort((a,b)=>a-b).join(',')+'-'+({2:'di',3:'tri',4:'tetra'}[grouped[t].length]||'')+({Me:'methyl',Et:'ethyl',Pr:'propyl'}[t])).join('-'),parent=n<4?parents[n]+'ene':parents[n]+'-'+p+'-ene',base=(prefix?prefix:'')+parent,old=(prefix?prefix+'-':'')+(n<4?parents[n]+'ene':p+'-'+parents[n]+'ene'),st=ez?'('+ez+')-':'';return{...q,n,p,subs,stereo:{},ez,refs:r,name:st+base,aliases:[st+old,...(ez?[`(${p}${ez})-`+base,`(${p}${ez})-`+old]:[])],id:level+'-'+st+base};}
function validate(g){if(g.atoms.some(a=>!['C','H'].includes(a.element)))return'Use carbon and hydrogen for these alkene structures.';if(g.atoms.some(a=>a.charge))return'These alkenes are neutral.';if(g.bonds.some(b=>b.order!==1&&b.order!==2))return'These questions use single bonds and one C=C double bond.';return ProductChem.validation(g);}
function check(q,g){if(!g.atoms.length)return{correct:false,message:'Draw the complete named alkene first.'};const error=validate(g);if(error)return{correct:false,message:error};if(!ProductChem.isomorphic(ProductChem.normalized(q.graph),ProductChem.normalized(g)))return{correct:false,message:'Check the parent chain containing C=C, the double-bond position and the substituents.'};if(q.refs){const expected=cp(q.graph);for(const a of expected.atoms){a.h=ProductChem.hydrogens(expected,a);a.lp=0;}if(g.bonds.some(b=>b.stereo))return{correct:false,message:'Use ordinary bonds. Show E/Z by placing substituents on the appropriate sides of C=C.'};if(!E2Chem.stereoMatches({product:expected,alkeneRefs:q.refs},g))return{correct:false,message:'The connectivity is correct. Check E/Z: the higher-priority groups must be '+(q.ez==='E'?'on opposite sides.':'on the same side.')};}return{correct:true,message:'Correct. '+(q.ez?'The connectivity and '+q.ez+' configuration match the name.':'The connectivity matches the name.')};}
const norm=s=>s.trim().toLowerCase().replace(/[−–—]/g,'-').replace(/\s+/g,'');function nameCorrect(q,s){return[q.name,...q.aliases].some(a=>norm(a)===norm(s));}
globalThis.AlkeneNaming={make,check,validate,nameCorrect,refs,stereo,ligands,reflect};})();

;
// alkene-naming-bank.js
(()=>{const bank=[],add=(level,n,p,s,ez)=>bank.push(AlkeneNaming.make(level,n,p,s,ez));
[[2,1,[]],[3,1,[]],[4,1,[]],[5,1,[]],[6,1,[]],[7,1,[]],[8,1,[]],[3,1,[[2,'Me']]],[4,1,[[2,'Me']]],[4,1,[[3,'Me']]],[5,1,[[2,'Me']]],[5,1,[[4,'Me']]],[4,1,[[3,'Me'],[3,'Me']]],[4,1,[[2,'Me'],[3,'Me']]],[5,1,[[2,'Me'],[4,'Me']]],[5,1,[[3,'Me'],[3,'Me']]],[5,1,[[4,'Me'],[4,'Me']]],[4,1,[[2,'Me'],[3,'Me'],[3,'Me']]],[5,1,[[2,'Me'],[4,'Me'],[4,'Me']]],[5,1,[[3,'Et']]]].forEach(x=>add('easy',...x));
[[4,2,[],'E'],[5,2,[],'Z'],[6,3,[],'E'],[6,2,[],'Z'],[7,3,[],'Z'],[7,2,[],'E'],[8,2,[],'Z'],[8,3,[],'E'],[4,2,[],'Z'],[5,2,[],'E'],[6,2,[],'E'],[6,3,[],'Z'],[7,2,[],'Z'],[7,3,[],'E'],[8,2,[],'E'],[8,3,[],'Z'],[4,2,[[2,'Me']],null],[5,2,[[2,'Me']],null],[5,2,[[3,'Me']],'E'],[5,2,[[3,'Me']],'Z']].forEach(x=>add('moderate',...x));
[[7,2,[[5,'Me'],[5,'Me'],[6,'Me']],'E'],[6,2,[[3,'Me']],'Z'],[7,3,[[4,'Me']],'E'],[8,2,[[3,'Et']],'Z'],[7,2,[[4,'Me'],[4,'Me']],'E'],[8,3,[[6,'Me'],[6,'Me']],'Z'],[7,2,[[3,'Et'],[5,'Me'],[5,'Me']],'E'],[7,2,[[3,'Me'],[6,'Me']],'Z'],[7,2,[[4,'Me'],[4,'Me'],[6,'Me']],'E'],[7,3,[[3,'Me']],'Z'],[7,2,[[5,'Me'],[5,'Me'],[6,'Me']],'Z'],[6,2,[[3,'Me']],'E'],[7,3,[[4,'Me']],'Z'],[8,2,[[3,'Et']],'E'],[7,2,[[4,'Me'],[4,'Me']],'Z'],[8,3,[[6,'Me'],[6,'Me']],'E'],[7,2,[[3,'Et'],[5,'Me'],[5,'Me']],'Z'],[7,2,[[3,'Me'],[6,'Me']],'E'],[7,1,[[3,'Pr'],[3,'Pr']]], [8,1,[[3,'Pr'],[3,'Pr']]]].forEach(x=>add('hard',...x));
for(const q of bank){if(AlkeneNaming.stereo(q.graph)!==q.ez)throw Error('Wrong E/Z in '+q.name);}globalThis.ALKENE_NAMING_BANK=bank;})();

;
// alkene-naming.js
(()=>{'use strict';const $=id=>document.getElementById(id),all=s=>[...document.querySelectorAll(s)],copy=clone;
const baseDisplay=ProductChem.display;ProductChem.display=g=>{const d=baseDisplay(g);for(const a of d.atoms)a.hideLonePairs=true;return d;};
class HaloEditor extends SN2Editor{snapped(a,p){const t=Math.round(Math.atan2(p.y-a.y,p.x-a.x)/(Math.PI/6))*Math.PI/6;return{x:a.x+110*Math.cos(t),y:a.y+110*Math.sin(t)};}fit(){const b=this.layout.bounds,w=Math.max(1100,b.w+100),h=Math.max(600,b.h+100),x=this.graph.atoms.length?b.x+b.w/2-w/2:0,y=this.graph.atoms.length?b.y+b.h/2-h/2:0;this.board.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);for(const[k,v]of Object.entries({x,y,width:w,height:h}))$('p-grid-background').setAttribute(k,v);}render(cursor=false){super.render(cursor);$('p-atom-status').textContent=AlkeneNaming.validate(this.graph);$('p-components').textContent=this.graph.atoms.length+' atoms';}}
let mode='draw',level='easy',index=0,hint=0,restoring=false;const drafts=new Map(),completed=new Set(),responses=new Map();const editor=new HaloEditor(()=>{if(!restoring)save();});
const questions=()=>ALKENE_NAMING_BANK.filter(q=>q.level===level),current=()=>questions()[index],key=()=>mode+':'+current().id;
function save(){if(!current())return;drafts.set(key(),mode==='draw'?editor.getGraph():$('halo-answer').value);}
function formattedText(id,text){$(id).textContent=text;$(id).innerHTML=esc(text).replace(/\b[EZ]\b/g,'<i>$&</i>');}function message(text,state='hint'){formattedText('halo-feedback',text);$('halo-feedback').dataset.state=state;}
function svg(g){const d=ProductChem.display(g),l=layoutGraph(d,7,{}),b=l.bounds,w=Math.max(1100,b.w+100),h=Math.max(600,b.h+100);return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${b.x+b.w/2-w/2} ${b.y+b.h/2-h/2} ${w} ${h}" role="img" aria-label="Alkene bond-line structure for question ${index+1}">${additionMarkup(l,{topic:'product'})}</svg>`;}
function begin(i=index){index=i;hint=0;restoring=true;editor.setLocked(false);$('halo-question').innerHTML=questions().map((q,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');$('halo-question').value=index;$('halo-count').textContent=`Question ${index+1} of 20`;$('halo-score').textContent='Completed: '+questions().filter(q=>completed.has(mode+':'+q.id)).length+' / 20';$('halo-progress').style.width=questions().filter(q=>completed.has(mode+':'+q.id)).length*5+'%';$('halo-draw-panel').hidden=mode!=='draw';$('halo-name-panel').hidden=mode!=='name';formattedText('halo-prompt',mode==='draw'?'Draw '+current().name+'.':'Name this alkene.');formattedText('halo-instruction',current().ez?'Include the E/Z configuration in the name and drawing.':'This alkene does not have E/Z isomers.');
 if(mode==='draw'){editor.setGraph(drafts.get(key())||{atoms:[],bonds:[]},false);editor.setTool('bond1');editor.fit();}else{$('halo-structure').innerHTML=svg(current().graph);$('halo-answer').value=drafts.get(key())||'';}
 const prior=responses.get(key());message(prior?.text||(mode==='draw'?'Draw the named compound in bond-line form.':'Enter the complete IUPAC name.'),prior?.state||'hint');$('halo-answer').readOnly=mode==='name'&&completed.has(key());$('halo-check').disabled=completed.has(key());editor.setLocked(mode==='draw'&&completed.has(key()));$('halo-previous').disabled=index===0;$('halo-next').disabled=index===19;all('[data-halo-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.haloMode===mode));all('[data-halo-level]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.haloLevel===level));restoring=false;}
function choose(m=mode,l=level){save();mode=m;level=l;begin(0);}
function check(){save();const q=current(),r=mode==='draw'?AlkeneNaming.check(q,editor.getGraph()):{correct:AlkeneNaming.nameCorrect(q,$('halo-answer').value),message:AlkeneNaming.nameCorrect(q,$('halo-answer').value)?'Correct. '+q.name:'Check the parent chain, numbering, double-bond position and alphabetical order.'+(q.ez?' Include the E/Z configuration.':'')};responses.set(key(),{text:r.message,state:r.correct?'correct':'incorrect'});if(r.correct){completed.add(key());begin(index);}else message(r.message,'incorrect');return r;}
function giveHint(){const q=current();hint=Math.min(3,hint+1);message(hint===1?`Hint 1/3: Choose the longest chain containing C=C; it has ${q.n} carbons.`:hint===2?`Hint 2/3: Number to put C=C at carbon ${q.p}, before considering substituent locants.`:q.ez?'Hint 3/3: Rank the two groups on each alkene carbon. Higher-priority groups on opposite sides give E; the same side gives Z.':'Hint 3/3: This alkene cannot have E/Z isomers. Alphabetise substituents and use -ene for the parent.');}
all('[data-halo-mode]').forEach(b=>b.onclick=()=>choose(b.dataset.haloMode));all('[data-halo-level]').forEach(b=>b.onclick=()=>choose(mode,b.dataset.haloLevel));$('halo-question').onchange=e=>{save();begin(+e.target.value)};$('halo-previous').onclick=()=>{save();begin(Math.max(0,index-1))};$('halo-next').onclick=()=>{save();begin(Math.min(19,index+1))};$('halo-check').onclick=check;$('halo-hint').onclick=giveHint;$('halo-answer').oninput=save;$('halo-answer').onkeydown=e=>{if(e.key==='Enter'&&!completed.has(key()))check()};begin();if(globalThis.__ALKENE_TEST__)globalThis.alkeneNamingApi={choose,begin,current,check,editor,svg,giveHint};})();
