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
 if(!drawing.atoms.length)return{correct:false,message:'Draw the product/s before checking.'};const invalid=validation(drawing);if(invalid)return{correct:false,message:invalid};
 const actual=normalized(drawing),expected=chemicalExpected(q.product);if(isomorphic(actual,expected))return{correct:true,message:'Correct. '+q.explanation};
 const charge=g=>g.atoms.reduce((sum,a)=>sum+(a.charge||0),0);
 if(charge(actual)!==charge(expected))return{correct:false,message:'Check the formal charges. Total charge must be conserved across this step.'};
 if(inventory(actual)!==inventory(expected))return{correct:false,message:'Check that every atom and hydrogen is present in the products. Hydrogens are added automatically from each atom’s bonds and formal charge.'};
 if(components(actual).length!==components(expected).length)return{correct:false,message:'Check how many separate products form. Include the leaving group or the other proton-transfer product where applicable.'};
 return{correct:false,message:'Check the bonds and the positions of the charges. Follow every shown arrow, including any change in bond order.'};
}
function display(g){
 const graph={atoms:g.atoms.map(a=>{const h=hydrogens(g,a),bo=bondOrder(g,a.id),lp=a.element==='Ph'?0:(electrons[a.element]-(a.charge||0)-bo-h)/2;return{id:a.id,element:a.element==='Ph'?'R':a.element,label:a.element==='Ph'?'Ph':a.element,x:a.x,y:a.y,h,lp,skeletal:a.element==='C'&&bo>0,arrowGap:a.element==='C'?10:5,hideLonePairs:!Number.isInteger(lp)||lp<0||['O','N'].includes(a.element)&&(a.charge||0)>0,pairPadding:['Cl','Br','I'].includes(a.element)?3:undefined};}),bonds:copy(g.bonds)};
 for(const a of graph.atoms.filter(a=>a.element==='O'||a.element==='N')){const methyls=graph.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>graph.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a))).filter(n=>n.element==='C'&&hydrogens(g,g.atoms.find(x=>x.id===n.id))===3&&bondOrder(g,n.id)===1);if(methyls.length){if(a.element==='O'&&methyls.length===1){a.condensedMe=true;}else{a.condensedSuffix=(a.h?'H'+(a.h>1?a.h:''):'')+'Me'+(methyls.length>1?methyls.length:'');}for(const m of methyls)m.hidden=true;}}
 return graph;
}
const api={copy,key,hydrogens,bondOrder,fromChemical,normalized,chemicalExpected,components,isomorphic,inventory,validation,check,display};globalThis.ProductChem=api;if(typeof module!=='undefined')module.exports=api;
})();
