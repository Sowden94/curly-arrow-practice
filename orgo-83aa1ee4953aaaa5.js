;
/* home-previews.js */
document.querySelectorAll('.topic-card').forEach(function(card){card.addEventListener('keydown',function(event){if(event.key==='Escape'){card.classList.add('preview-dismissed');event.stopPropagation();}});['mouseleave','blur'].forEach(function(name){card.addEventListener(name,function(){card.classList.remove('preview-dismissed');});});});

;
/* radical-navigation.js */
/* One question-set menu throughout the Radicals section. */
(() => {
  'use strict';
  if (typeof document === 'undefined' || typeof location === 'undefined') return;
  const params = new URLSearchParams(location.search);
  const bromination = params.get('family') === 'radical-bromination';
  const nav = document.getElementById('rad-topics') || (bromination ? document.querySelector('.mechanism-topics') : null);
  if (!nav) return;

  const sets = [
    ['resonance', 'Radical Resonance'],
    ['cleavage', 'Homolytic Cleavage'],
    ['pi-addition', 'Addition to a π Bond'],
    ['abstraction', 'Hydrogen Abstraction'],
    ['halogen-abstraction', 'Halogen Abstraction'],
    ['elimination', 'Radical Elimination'],
    ['coupling', 'Radical Coupling'],
    ['product-choice', 'Bromination: Predict Products'],
    ['product-draw', 'Bromination: Draw Products']
  ];
  const requested = params.get('topic');
  const active = bromination
    ? (params.get('task') === 'product-choice' ? 'product-choice' : 'product-draw')
    : (sets.slice(0, 7).some(([key]) => key === requested) ? requested : 'resonance');
  nav.innerHTML = sets.map(([key, title], i) => {
    const href = i < 7 ? 'radicals.html?topic=' + key
      : 'alkyne-synthesis.html?family=radical-bromination&amp;task=' + key;
    return '<a href="' + href + '"' + (key === active ? ' aria-current="page"' : '') + '>' + title + '</a>';
  }).join('');

  if (bromination) document.querySelectorAll('.site-nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === 'radicals.html');
  });
})();

;
/* chemical-typography.js */
/* Presentation only: preserve question data, answers, graph coordinates and input values. */
(()=>{'use strict';const subs='₀₁₂₃₄₅₆₇₈₉',supers='⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ',normal='0123456789+-n',pattern=/([₀₁₂₃₄₅₆₇₈₉]+|[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+)/g;
function parts(value){const result=[];let end=0;for(const m of value.matchAll(pattern)){if(m.index>end)result.push({text:value.slice(end,m.index)});const sub=subs.includes(m[0][0]);result.push({kind:sub?'sub':'sup',text:[...m[0]].map(c=>sub?String(subs.indexOf(c)):normal[supers.indexOf(c)]).join('')});end=m.index+m[0].length;}if(end<value.length)result.push({text:value.slice(end)});return result;}
globalThis.ChemTypography={parts};if(typeof MutationObserver==='undefined'||!document.body||!document.createTreeWalker)return;
const svgNS='http://www.w3.org/2000/svg',skip='script,style,textarea,input,select,option,code,pre,sub,sup,[contenteditable]:not([contenteditable="false"]),[data-chemical-index],tspan[baseline-shift]';
function format(node){const parent=node.parentElement;if(!parent||parent.closest(skip)||!/[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]/.test(node.nodeValue))return;const svg=parent.namespaceURI===svgNS;if(svg&&!['text','tspan'].includes(parent.localName))return;const fragment=document.createDocumentFragment();for(const part of parts(node.nodeValue)){if(!part.kind){fragment.appendChild(document.createTextNode(part.text));continue;}const el=svg?document.createElementNS(svgNS,'tspan'):document.createElement(part.kind);el.setAttribute('data-chemical-index',part.kind);if(svg)el.setAttribute('baseline-shift',part.kind==='sub'?'sub':'super');el.textContent=part.text;fragment.appendChild(el);}node.replaceWith(fragment);}
function scan(root){if(root.nodeType===3){format(root);return;}if(root.nodeType!==1||root.closest(skip))return;const walker=document.createTreeWalker(root,4),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(format);}
scan(document.body);new MutationObserver(records=>{const roots=new Set();for(const record of records){if(record.type==='characterData')roots.add(record.target);else for(const node of record.addedNodes)roots.add(node);}for(const root of roots)if(root.isConnected)scan(root);}).observe(document.body,{childList:true,subtree:true,characterData:true});})();

;
/* radicals.js */
/* Single-electron mechanisms with shared drawing and grading destinations. */
(()=>{'use strict';
const clone=x=>JSON.parse(JSON.stringify(x)),bk=(a,b)=>'b:'+Math.min(a,b)+'-'+Math.max(a,b),bank=[];
// Molecule rendering and electron tails use these same physical bond segments.
function radicalBondSegments(atoms,bonds,bond,dx=0){
 const a=atoms[bond.a],b=atoms[bond.b],length=Math.hypot(b.x-a.x,b.y-a.y),ux=(b.x-a.x)/length,uy=(b.y-a.y)/length,pa=a.label?(a.label.length>2?30:19):0,pb=b.label?(b.label.length>2?30:19):0;
 const point=(t,off)=>({x:a.x+dx+ux*t-uy*off,y:a.y+uy*t+ux*off}),segment=(t,u,off)=>({a:point(t,off),b:point(u,off)}),out=[segment(pa,length-pb,0)];if(bond.o!==2)return out;
 const seen=new Set([bond.a]),queue=[[bond.a]];let cycle;
 while(queue.length&&!cycle){const path=queue.shift(),id=path.at(-1);for(const e of bonds){if(e===bond||e.a!==id&&e.b!==id)continue;const n=e.a===id?e.b:e.a;if(n===bond.b){cycle=[...path,n];break;}if(!seen.has(n)){seen.add(n);queue.push([...path,n]);}}}
 let side=1;if(cycle){const centre=cycle.map(i=>atoms[i]).reduce((p,v)=>({x:p.x+v.x/cycle.length,y:p.y+v.y/cycle.length}),{x:0,y:0});side=((centre.x-a.x)*(-uy)+(centre.y-a.y)*ux)>=0?1:-1;}
 else{const neighbors=bonds.filter(e=>e!==bond&&[e.a,e.b].some(i=>i===bond.a||i===bond.b)).flatMap(e=>[e.a,e.b]).filter(i=>i!==bond.a&&i!==bond.b),toward=neighbors.reduce((v,i)=>v+(atoms[i].x-a.x)*(-uy)+(atoms[i].y-a.y)*ux,0);if(toward<0)side=-1;}
 if(bond.displaySide===1||bond.displaySide===-1)side=bond.displaySide;
 const trim=id=>bonds.filter(e=>e.a===id||e.b===id).length===1?0:10;
 out.push(segment(a.label?pa+8:trim(bond.a),length-(b.label?pb+8:trim(bond.b)),8*side));return out;
}
function radicalBondLines(atoms,bonds,bond,dx=0){return radicalBondSegments(atoms,bonds,bond,dx).map(r=>`<line class="rad-bond" x1="${r.a.x}" y1="${r.a.y}" x2="${r.b.x}" y2="${r.b.y}"/>`).join('');}
// Correct acute bends in acyclic tails without changing ring geometry or connectivity.
function polishRadicalGeometry(atoms,bonds){for(let pass=0;pass<2;pass++)for(let id=0;id<atoms.length;id++){const edges=bonds.filter(b=>b.a===id||b.b===id);if(edges.length!==2||atoms[id].label)continue;const [left,right]=edges.map(b=>b.a===id?b.b:b.a),seen=new Set([id,right]),part=[right];for(let i=0;i<part.length;i++)for(const e of bonds){if(e.a!==part[i]&&e.b!==part[i])continue;const n=e.a===part[i]?e.b:e.a;if(!seen.has(n)){seen.add(n);part.push(n);}}if(seen.has(left))continue;const a=atoms[id],l=atoms[left],r=atoms[right],t=Math.atan2(l.y-a.y,l.x-a.x),old=Math.atan2(r.y-a.y,r.x-a.x),angle=Math.abs(Math.atan2(Math.sin(old-t),Math.cos(old-t)));if(Math.abs(angle-2*Math.PI/3)<.01)continue;const targets=[t+2*Math.PI/3,t-2*Math.PI/3],delta=targets.map(v=>Math.atan2(Math.sin(v-old),Math.cos(v-old))).sort((a,b)=>Math.abs(a)-Math.abs(b))[0];for(const i of part){const v=atoms[i],x=v.x-a.x,y=v.y-a.y;v.x=a.x+x*Math.cos(delta)-y*Math.sin(delta);v.y=a.y+x*Math.sin(delta)+y*Math.cos(delta);}}
return atoms;}
function question(level,n){let atoms=[],bonds=[],path,title;const edge=(a,b,o=1)=>bonds.push({a,b,o}),point=(x,y)=>{atoms.push({x,y});return atoms.length-1;};
if(level==='easy'||level==='moderate'&&n<10){const len=level==='easy'?3:5;for(let i=0;i<len;i++)point(100+i*78,220+(i%2?-45:0));for(let i=0;i<len-1;i++)edge(i,i+1,i%2?2:1);path=Array.from({length:len},(_,i)=>i);title=len===3?'Allylic radical':'Extended conjugated radical';const site=n%3;if(n%5){const id=point(atoms[site].x,atoms[site].y+(site%2?-90:90));edge(site,id);if(n%5>2){const id2=point(atoms[id].x+78,atoms[id].y+45);edge(id,id2);}}if(n%5===2&&level==='easy'){const at=2,id=point(atoms[at].x+78,atoms[at].y-45);edge(at,id);}}
else if(level==='moderate'){for(let i=0;i<6;i++){const t=-Math.PI/2+i*Math.PI/3;point(245+90*Math.cos(t),215+90*Math.sin(t));}for(let i=0;i<6;i++)edge(i,(i+1)%6,i===1?2:1);const c=point(atoms[2].x+78,atoms[2].y+45);edge(2,c);const d=point(atoms[c].x+78,atoms[c].y-45);edge(c,d,2);path=[0,1,2,c,d];title='Cyclic conjugated radical';if(n%3){const site=n%3===1?4:5,t=-Math.PI/2+site*Math.PI/3,id=point(atoms[site].x+90*Math.cos(t),atoms[site].y+90*Math.sin(t));edge(site,id);}}
else {for(let i=0;i<6;i++){const t=-Math.PI/2+i*Math.PI/3;point(270+90*Math.cos(t),230+90*Math.sin(t));}for(let i=0;i<6;i++)edge(i,(i+1)%6,i%2===0?2:1);const z=point(atoms[0].x,atoms[0].y-90);edge(0,z);const phase=n%4;path=phase===0?[z,0,1]:phase===1?[1,2,3]:phase===2?[3,4,5]:[5,0,z];if(phase>0){bonds.find(b=>bk(b.a,b.b)===bk(z,0)).o=2;bonds.find(b=>bk(b.a,b.b)===bk(0,1)).o=1;}if(phase>1){bonds.find(b=>bk(b.a,b.b)===bk(1,2)).o=2;bonds.find(b=>bk(b.a,b.b)===bk(2,3)).o=1;}if(phase>2){bonds.find(b=>bk(b.a,b.b)===bk(3,4)).o=2;bonds.find(b=>bk(b.a,b.b)===bk(4,5)).o=1;}title='Benzylic radical';if(n>=4){const site=Math.floor(n/4)%2?(n%2?z:3):(n%2?1:4),t=site===z?-Math.PI/6:-Math.PI/2+site*Math.PI/3,id=point(atoms[site].x+90*Math.cos(t),atoms[site].y+90*Math.sin(t));edge(site,id);if(n>=12){const id2=point(atoms[id].x+90*Math.cos(t+Math.PI/3),atoms[id].y+90*Math.sin(t+Math.PI/3));edge(id,id2);}}}
let radical=path[0],product=clone(bonds),moves=[['r:'+radical,bk(path[0],path[1])]];
for(let i=1;i<path.length-1;i+=2){moves.push([bk(path[i],path[i+1]),bk(path[i-1],path[i])]);moves.push([bk(path[i],path[i+1]),i+2<path.length?bk(path[i+1],path[i+2]):'a:'+path[i+1]]);}
for(let i=0;i<path.length-1;i++)product.find(b=>bk(b.a,b.b)===bk(path[i],path[i+1])).o+=i%2?-1:1;
if(n%2){[bonds,product]=[product,bonds];radical=path.at(-1);const rev=[...path].reverse();moves=[['r:'+rev[0],bk(rev[0],rev[1])]];for(let i=1;i<rev.length-1;i+=2){moves.push([bk(rev[i],rev[i+1]),bk(rev[i-1],rev[i])],[bk(rev[i],rev[i+1]),i+2<rev.length?bk(rev[i+1],rev[i+2]):'a:'+rev[i+1]]);}path=rev;}
polishRadicalGeometry(atoms,bonds);
// Rotate or reflect entire contributors together; preserve every bond length and atom position.
const turn=(n%4)*Math.PI/3;atoms=atoms.map(a=>{const x=a.x-260,y=a.y-200;return{x:260+x*Math.cos(turn)-y*Math.sin(turn),y:200+x*Math.sin(turn)+y*Math.cos(turn)};});
return{id:level+'-'+n,level,title,atoms,bonds,product,radical,end:path.at(-1),moves};}
for(const level of ['easy','moderate','hard'])for(let n=0;n<20;n++)bank.push(question(level,n));
// Ten different substrates; orientation alone never creates another cleavage question.
const cleavageBank=[];
function cleavage(title,left,right,groupLeft,groupRight,condition='hν'){const atoms=[{x:-70,y:0,label:left},{x:70,y:0,label:right}],bonds=[{a:0,b:1,o:1}];if(groupLeft){atoms.push({x:-115,y:77.942286,label:groupLeft});bonds.push({a:0,b:atoms.length-1,o:1});}if(groupRight){atoms.push({x:115,y:-77.942286,label:groupRight});bonds.push({a:1,b:atoms.length-1,o:1});}cleavageBank.push({id:'cleavage-distinct-'+cleavageBank.length,level:'cleavage',kind:'cleavage',title,condition,atoms,bonds,product:bonds.slice(1),radicals:[0,1],moves:[['b:0-1','a:0'],['b:0-1','a:1']]});}
cleavage('Chlorine homolysis','Cl','Cl');cleavage('Bromine homolysis','Br','Br');cleavage('Iodine homolysis','I','I');
cleavage('Hydrogen peroxide: O–O homolysis','O','O','H','H');
cleavage('Dimethyl peroxide: O–O homolysis','O','O','Me','Me','Δ');
cleavage('Di-tert-butyl peroxide: O–O homolysis','O','O','t-Bu','t-Bu','Δ');
cleavage('tert-Butyl hydroperoxide: unequal radical fragments','O','O','t-Bu','H','Δ');
cleavage('Dimethyl disulfide: S–S homolysis','S','S','Me','Me');
cleavage('Diphenyl disulfide: S–S homolysis','S','S','Ph','Ph');
{const atoms=[{x:-40,y:0,label:'N'},{x:100,y:0,label:'Br'},{x:-92.9,y:-72.8},{x:-178.5,y:-45},{x:-178.5,y:45},{x:-92.9,y:72.8},{x:-65.1,y:-158.4,label:'O'},{x:-65.1,y:158.4,label:'O'}],bonds=[{a:0,b:1,o:1},{a:0,b:2,o:1},{a:2,b:3,o:1},{a:3,b:4,o:1},{a:4,b:5,o:1},{a:5,b:0,o:1},{a:2,b:6,o:2},{a:5,b:7,o:2}];cleavageBank.push({id:'cleavage-nbs',level:'cleavage',kind:'cleavage',title:'NBS: initial N–Br homolysis',condition:'hν',nbs:true,atoms,bonds,product:bonds.slice(1),radicals:[0,1],moves:[['b:0-1','a:0'],['b:0-1','a:1']]});}
const additionBank=Array.from({length:20},(_,n)=>{const atoms=[{x:0,y:0},{x:78,y:-45},{x:-125,y:-100,label:n<10?'Br':'Cl'}],bonds=[{a:0,b:1,o:2}];const add=(parent,x,y)=>{atoms.push({x,y});bonds.push({a:parent,b:atoms.length-1,o:1});return atoms.length-1;};const variant=n%5;if(variant){const a=add(1,156,0);if(variant===2||variant===4)add(a,234,-45);if(variant>=3)add(0,0,90);if(variant===4)add(1,78,-135);}const product=clone(bonds);product[0].o=1;product.push({a:0,b:2,o:1});const productAtoms=clone(atoms);productAtoms[2]={...productAtoms[2],x:-78,y:-45};const turn=0,rotate=a=>({...a,x:a.x*Math.cos(turn)-a.y*Math.sin(turn),y:a.x*Math.sin(turn)+a.y*Math.cos(turn)});return{id:'pi-addition-'+n,level:'pi-addition',kind:'pi-addition',title:'Radical addition to an alkene',atoms:atoms.map(rotate),productAtoms:productAtoms.map(rotate),bonds,product,radical:2,end:1,moves:[['r:2','b:0-2'],['b:0-1','b:0-2'],['b:0-1','a:1']]};});
const abstractionBank=Array.from({length:20},(_,n)=>{const atoms=[{x:45,y:0},{x:-45,y:0,label:'H'},{x:-165,y:-20,label:n<10?'Br':'Cl'}],bonds=[{a:0,b:1,o:1}],add=(parent,x,y)=>{atoms.push({x,y});bonds.push({a:parent,b:atoms.length-1,o:1});return atoms.length-1;};const v=n%5;if(!v)atoms[0].label='Me';if(v){const a=add(0,90,-77.942286);if(v===2||v===4)add(a,180,-77.942286);if(v>=3)add(0,90,77.942286);}const product=bonds.filter(b=>!(b.a===0&&b.b===1));product.push({a:1,b:2,o:1});const productAtoms=clone(atoms);productAtoms[1]={...productAtoms[1],x:-75,y:-20};const turn=0,rotate=a=>({...a,x:a.x*Math.cos(turn)-a.y*Math.sin(turn),y:a.x*Math.sin(turn)+a.y*Math.cos(turn)});return{id:'hydrogen-abstraction-'+n,level:'abstraction',kind:'abstraction',title:'Hydrogen abstraction',atoms:atoms.map(rotate),productAtoms:productAtoms.map(rotate),bonds,product,radical:2,end:0,moves:[['r:2','b:1-2'],['b:0-1','b:1-2'],['b:0-1','a:0']]};});
const halogenAbstractionBank=Array.from({length:20},(_,n)=>{const el=n<10?'Br':'Cl',atoms=[{x:45,y:0,label:el},{x:-45,y:0,label:el},{x:-165,y:-20}],bonds=[{a:0,b:1,o:1}],add=(parent,x,y)=>{atoms.push({x,y});bonds.push({a:parent,b:atoms.length-1,o:1});return atoms.length-1;};const v=n%5;if(!v)atoms[2].label='Me';if(v){const a=add(2,-210,-97.942286);if(v===2||v===4)add(a,-300,-97.942286);if(v>=3)add(2,-210,57.942286);}const product=bonds.filter(b=>!(b.a===0&&b.b===1));product.push({a:1,b:2,o:1});const productAtoms=clone(atoms);productAtoms[1]={...productAtoms[1],x:-75,y:-20};const turn=0,rotate=a=>({...a,x:a.x*Math.cos(turn)-a.y*Math.sin(turn),y:a.x*Math.sin(turn)+a.y*Math.cos(turn)});return{id:'halogen-abstraction-'+n,level:'halogen-abstraction',kind:'halogen-abstraction',title:'Halogen abstraction',atoms:atoms.map(rotate),productAtoms:productAtoms.map(rotate),bonds,product,radical:2,end:0,moves:[['r:2','b:1-2'],['b:0-1','b:1-2'],['b:0-1','a:0']]};});
const eliminationBank=additionBank.map((q,i)=>({...clone(q),id:'radical-elimination-'+i,level:'elimination',kind:'elimination',title:'Radical elimination',atoms:clone(q.productAtoms),productAtoms:clone(q.atoms),bonds:clone(q.product),product:clone(q.bonds),radical:q.end,end:q.radical,moves:[['r:1','b:0-1'],['b:0-2','b:0-1'],['b:0-2','a:2']]}));
// Keep the forming π stroke in the open sector vacated by the departing group.
for(const q of eliminationBank){const b=q.product.find(b=>b.o===2),a=q.atoms[b.a],c=q.atoms[b.b],x=q.atoms[q.end];b.displaySide=(x.x-a.x)*(-(c.y-a.y))+(x.y-a.y)*(c.x-a.x)>=0?1:-1;}
function couplingFragment(name){
 const atoms=[{x:0,y:0}],bonds=[],add=(parent,x,y,label,o=1)=>{atoms.push({x,y,...label?{label}:{}});bonds.push({a:parent,b:atoms.length-1,o});return atoms.length-1;};
 if(['methyl','tert-butyl','Br','Cl'].includes(name))atoms[0].label=name==='methyl'?'Me':name==='tert-butyl'?'t-Bu':name;
 else if(name==='ethyl')add(0,-45,-77.942286);
 else if(name==='isopropyl'){add(0,-45,-77.942286);add(0,-45,77.942286);}
 else if(name==='allyl'){const n=add(0,-45,-77.942286);add(n,-135,-77.942286,undefined,2);}
 else if(name==='benzyl')add(0,-45,-77.942286,'Ph');
 else if(name.startsWith('cyclo')){const count=name==='cyclohexyl'?6:5,radius=90/(2*Math.sin(Math.PI/count));for(let i=1;i<count;i++){const angle=i*2*Math.PI/count;atoms.push({x:radius*(Math.cos(angle)-1),y:radius*Math.sin(angle)});bonds.push({a:i-1,b:i,o:1});}bonds.push({a:count-1,b:0,o:1});}
 else throw new Error('Unknown coupling fragment '+name);
 return{atoms,bonds};
}
const couplingPairs=[['methyl','methyl'],['methyl','ethyl'],['ethyl','ethyl'],['methyl','isopropyl'],['methyl','tert-butyl'],['ethyl','isopropyl'],['isopropyl','isopropyl'],['allyl','methyl'],['benzyl','methyl'],['benzyl','benzyl'],['methyl','cyclohexyl'],['ethyl','cyclopentyl'],['methyl','Br'],['ethyl','Br'],['isopropyl','Br'],['tert-butyl','Br'],['allyl','Br'],['benzyl','Br'],['methyl','Cl'],['cyclohexyl','Cl']];
const couplingBank=couplingPairs.map(([left,right],i)=>{
 const fragments=[couplingFragment(left),couplingFragment(right)],atoms=[{},{}],bonds=[];
 fragments.forEach((fragment,side)=>{const map=new Map([[0,side]]);fragment.atoms.forEach((a,j)=>{const id=j?atoms.length:side;map.set(j,id);const p={...a,x:(side?45:-45)+(side?-a.x:a.x)};if(j)atoms.push(p);else atoms[id]=p;});fragment.bonds.forEach(b=>bonds.push({...b,a:map.get(b.a),b:map.get(b.b)}));});
 return{id:'radical-coupling-'+i,level:'coupling',kind:'coupling',title:left[0].toUpperCase()+left.slice(1)+' and '+({Br:'bromine',Cl:'chlorine'}[right]||right)+' radical coupling',fragments:[left,right],category:['Br','Cl'].includes(right)?'C–X':'C–C',atoms,productAtoms:clone(atoms),bonds,product:[...clone(bonds),{a:0,b:1,o:1}],radicals:[0,1],condition:'',moves:[['r:0','b:0-1'],['r:1','b:0-1']]};
});
const transferKinds=new Set(['abstraction','halogen-abstraction','elimination','coupling']);
function radicalFormingEdge(q){return q.product.find(p=>p.o>(q.bonds.find(b=>bk(b.a,b.b)===bk(p.a,p.b))?.o||0));}
function radicalBreakingEdge(q){return q.bonds.find(b=>b.o>(q.product.find(p=>bk(p.a,p.b)===bk(b.a,b.b))?.o||0));}
function radicalElement(a){return ['H','Br','Cl','O','S','N'].includes(a.label)?a.label:'C';}
function radicalTransferDestination(q,source,target){
 const formed=radicalFormingEdge(q),key=bk(formed.a,formed.b);
 if(source.startsWith('r:')){const owner=Number(source.slice(2)),other=formed.a===owner?formed.b:formed.b===owner?formed.a:null;if(other!==null&&target==='a:'+other)return key;}
 const broken=radicalBreakingEdge(q);
 if(broken&&source===bk(broken.a,broken.b)&&target==='a:'+q.radical)return key;
 return target;
}
function radicalTransferGrade(q,arrows){const keys=arrows.map(([s,t])=>s+'>'+radicalTransferDestination(q,s,t));return keys.length===q.moves.length&&new Set(keys).size===keys.length&&q.moves.every(m=>keys.includes(m.join('>')));}
function radicalTransferFeedback(q,arrows){
 const coupling=q.kind==='coupling',broken=radicalBreakingEdge(q),formed=radicalFormingEdge(q),target=bk(formed.a,formed.b),moves=arrows.map(([s,t])=>[s,radicalTransferDestination(q,s,t)]);
 if(moves.length!==q.moves.length)return coupling?'Use two fishhooks, one from each radical dot, to the same forming-bond marker.':'Use three fishhooks: one from the radical dot and two from the bond that breaks.';
 const radicalIds=q.radicals||[q.radical];
 if(radicalIds.some(id=>moves.filter(m=>m[0]==='r:'+id).length!==1)||broken&&moves.filter(m=>m[0]===bk(broken.a,broken.b)).length!==2)return coupling?'Each radical must contribute one electron. Start one fishhook at each radical dot.':'Start one fishhook at the radical dot and both remaining fishhooks at the breaking bond.';
 if(!coupling&&moves.filter(m=>m[1]===target).length>2)return q.kind==='abstraction'?'Only two electrons form X–H. Send the remaining C–H electron to the carbon that lost H.':q.kind==='halogen-abstraction'?'Only two electrons form C–X. Send the remaining X–X electron to the departing halogen.':'Only two electrons form the π bond. Send the remaining C–X electron to the departing halogen.';
 if(moves.filter(m=>m[1]===target).length!==2)return 'Send both bond-forming electrons to the same forming-bond marker.';
 return q.kind==='abstraction'?'The remaining C–H electron stays on the carbon that lost H. Select that carbon.':q.kind==='halogen-abstraction'?'The remaining X–X electron stays on the other halogen atom, giving X•.':q.kind==='elimination'?'The remaining C–X electron goes to the departing halogen, giving X•.':'Both fishhooks must end at the same forming-bond marker.';
}
// Pack complete fragments, but align the reacting sites rather than their bounding boxes.
function radicalReactionLayout(q,product=false){
 const raw=product?(q.productAtoms||q.atoms):q.atoms,bs=product?q.product:q.bonds,left=new Set(raw.map((_,i)=>i)),groups=[];
 while(left.size){const ids=[left.values().next().value];left.delete(ids[0]);for(let j=0;j<ids.length;j++)for(const b of bs){if(b.a!==ids[j]&&b.b!==ids[j])continue;const id=b.a===ids[j]?b.b:b.a;if(left.delete(id))ids.push(id);}groups.push(ids);}
 const first=q.kind==='coupling'?0:q.kind==='halogen-abstraction'?2:q.kind==='abstraction'&&!product?2:0;groups.sort((a,b)=>Number(b.includes(first))-Number(a.includes(first)));
 const scale=.85,gap=90,boxes=groups.map(ids=>({left:Math.min(...ids.map(i=>raw[i].x*scale-(raw[i].label?(raw[i].label.length>2?42:30):18))),right:Math.max(...ids.map(i=>raw[i].x*scale+(raw[i].label?(raw[i].label.length>2?42:30):18)))})),width=boxes.reduce((s,b)=>s+b.right-b.left,0)+gap*(groups.length-1),pts=raw.map(a=>({...a}));let cursor=(product?830:240)-width/2;
 groups.forEach((ids,j)=>{let baseline;
  if(q.kind==='coupling')baseline=raw[ids.includes(0)?0:1].y;
  else if(q.kind==='elimination')baseline=ids.includes(0)?(raw[0].y+raw[1].y)/2:raw[2].y;
  else if(q.kind==='abstraction')baseline=raw[product?(ids.includes(0)?0:1):(ids.includes(2)?2:1)].y;
  else baseline=raw[ids.includes(2)?2:product?0:1].y;
  for(const i of ids){pts[i].x=raw[i].x*scale+cursor-boxes[j].left;pts[i].y=raw[i].y*scale+285-baseline*scale;}cursor+=boxes[j].right-boxes[j].left+gap;
 });return pts;
}
function radicalDotPoint(q,pts,bs,id,product=false){
 const a=pts[id],radius=a.label?(a.label.length>2?36:26):12;let toward;
 if(!product&&q.kind==='coupling')toward=pts[id===0?1:0];
 else if(!product&&['abstraction','halogen-abstraction'].includes(q.kind))toward=pts[1];
 if(toward){const d=Math.hypot(toward.x-a.x,toward.y-a.y);return{x:a.x+(toward.x-a.x)/d*radius,y:a.y+(toward.y-a.y)/d*radius};}
 const neighbors=bs.filter(b=>b.a===id||b.b===id).map(b=>pts[b.a===id?b.b:b.a]);let best,piSide;
 if(!product&&q.kind==='elimination'){const edge=radicalFormingEdge(q),target=radicalFormingTarget(q,pts);piSide={x:target.x-(pts[edge.a].x+pts[edge.b].x)/2,y:target.y-(pts[edge.a].y+pts[edge.b].y)/2};}
 for(let k=0;k<24;k++){const t=k*Math.PI/12,p={x:a.x+Math.cos(t)*radius,y:a.y+Math.sin(t)*radius};if(piSide&&(p.x-a.x)*piSide.x+(p.y-a.y)*piSide.y<1)continue;const score=Math.min(...neighbors.map(n=>Math.hypot(n.x-p.x,n.y-p.y)));if(!best||score>best.score)best={...p,score};}return{x:best.x,y:best.y};
}
function radicalFormingTarget(q,pts){
 const formed=radicalFormingEdge(q),key=bk(formed.a,formed.b),atoms=q.atoms.map((a,i)=>({...a,...pts[i]}));let segment;
 if(formed.o===2)segment=radicalBondSegments(atoms,q.product,formed)[1];
 else{const a=atoms[formed.a],b=atoms[formed.b],d=Math.hypot(b.x-a.x,b.y-a.y),ux=(b.x-a.x)/d,uy=(b.y-a.y)/d,pa=a.label?(a.label.length>2?42:32):10,pb=b.label?(b.label.length>2?42:32):10;segment={a:{x:a.x+ux*pa,y:a.y+uy*pa},b:{x:b.x-ux*pb,y:b.y-uy*pb}};}
 const a=atoms[formed.a],b=atoms[formed.b],x=formed.o===2?(segment.a.x+segment.b.x)/2:(a.x+b.x)/2,y=formed.o===2?(segment.a.y+segment.b.y)/2:(a.y+b.y)/2;
 let labels=[radicalElement(a),radicalElement(b)];if(labels[1]==='C'&&labels[0]!=='C'||labels[0]==='H')labels.reverse();
 return{key,x,y,segment,label:formed.o===2?'Forming π bond':'Forming '+labels.join('–')+' bond'};
}
function radicalTransferRouter(q,positions,sources=[]){
 const atoms=q.atoms.map((a,i)=>({...a,...positions[i]})),formed=radicalFormingEdge(q),forming=radicalFormingTarget(q,atoms),breaking=radicalBreakingEdge(q),unit=v=>{const d=Math.hypot(v.x,v.y)||1;return{x:v.x/d,y:v.y/d};},sub=(a,b)=>({x:a.x-b.x,y:a.y-b.y}),add=(a,b,k=1)=>({x:a.x+b.x*k,y:a.y+b.y*k}),distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),dot=(a,b)=>a.x*b.x+a.y*b.y;
 const rails=q.bonds.flatMap(b=>radicalBondSegments(atoms,q.bonds,b)),point=(r,t)=>{const u=1-t;return{x:u*u*u*r.start.x+3*u*u*t*r.c1.x+3*u*t*t*r.c2.x+t*t*t*r.end.x,y:u*u*u*r.start.y+3*u*u*t*r.c1.y+3*u*t*t*r.c2.y+t*t*t*r.end.y};};
 const segmentDistance=(p,a,b)=>{const v=sub(b,a),length=dot(v,v),t=length?Math.max(0,Math.min(1,dot(sub(p,a),v)/length)):0;return distance(p,add(a,v,t));};
 function destination(key){if(key===forming.key)return forming;if(key.startsWith('a:'))return{key,...atoms[Number(key.slice(2))]};const b=q.bonds.find(b=>bk(b.a,b.b)===key),r=radicalBondSegments(atoms,q.bonds,b)[0];return{key,x:(r.a.x+r.b.x)/2,y:(r.a.y+r.b.y)/2};}
 function startAt(source,target,normal,height=32){
  if(source.startsWith('r:')){const id=Number(source.slice(2)),s=sources.find(s=>s.key===source);return s?{x:s.x,y:s.y}:radicalDotPoint(q,atoms,q.bonds,id);}
  const b=q.bonds.find(b=>bk(b.a,b.b)===source),r=radicalBondSegments(atoms,q.bonds,b)[0],axis=unit(sub(r.b,r.a)),n={x:-axis.y,y:axis.x};let near;
  if(target.key===forming.key)near=[b.a,b.b].find(i=>i===formed.a||i===formed.b);
  else if(target.key.startsWith('a:'))near=Number(target.key.slice(2));
  const fraction=near===b.a?.32:near===b.b?.68:.5,p=add(r.a,sub(r.b,r.a),fraction),departure=add(sub(target,p),normal,height/.24);return add(p,n,dot(n,departure)>=0?2.5:-2.5);
 }
 function make(source,target,normal,height){
  const origin=startAt(source,target,normal,height),delta=sub(target,origin),c1=add(add(origin,delta,.24),normal,height),c2=add(add(target,delta,-.22),normal,height),id=target.key.startsWith('a:')?Number(target.key.slice(2)):null,direction=unit(sub(c2,target)),label=id===null?null:atoms[id].label,rx=label?(label==='H'?10:Math.max(17,label.length*6.3))+8:0,clearance=id===null?3:label?1/Math.hypot(direction.x/rx,direction.y/20):8,start=source.startsWith('r:')?add(origin,unit(sub(c1,origin)),4.5):origin,end=add(target,direction,clearance),route={source,target,start,c1,c2,end,clearance,origin};let cost=height*.02;
  for(let i=1;i<40;i++){const t=i/40,p=point(route,t);for(const r of rails)cost+=Math.max(0,5-segmentDistance(p,r.a,r.b))**2*(t>.14&&t<.9?12:1);
   for(let j=0;j<atoms.length;j++){if(j===id&&t>.8||source==='r:'+j&&t<.18)continue;const a=atoms[j];if(a.label){const rx=(a.label==='H'?10:Math.max(17,a.label.length*6.3))+5,ry=19,d=Math.hypot((p.x-a.x)/rx,(p.y-a.y)/ry);cost+=Math.max(0,1-d)**2*1800;}else cost+=Math.max(0,9-distance(p,a))**2*8;}
  }route.cost=cost;return route;
 }
 const collision=(a,b)=>{let cost=0;for(let i=2;i<17;i++)for(let j=2;j<17;j++)cost+=Math.max(0,7-distance(point(a,i/20),point(b,j/20)))**2*8;return cost;};
 function best(source,target,normal,heights=[24,32,42,54],others=[]){return heights.map(h=>{const r=make(source,target,normal,h);r.cost+=others.reduce((s,v)=>s+collision(r,v),0);return r;}).sort((a,b)=>a.cost-b.cost)[0];}
 return{atoms,forming,breaking,unit,sub,point,destination,startAt,make,best,collision};
}
function shortenFishhookCurve(route,amount){
 const lerp=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
 const at=t=>{const a=lerp(route.start,route.c1,t),b=lerp(route.c1,route.c2,t),c=lerp(route.c2,route.end,t);return lerp(lerp(a,b,t),lerp(b,c,t),t);};
 let t=1,last=route.end,left=amount;
 for(let i=1;i<=200;i++){const nextT=1-i/200,next=at(nextT),d=Math.hypot(next.x-last.x,next.y-last.y);if(d>=left){t=nextT+(1/200)*(1-left/d);break;}left-=d;last=next;}
 const a=lerp(route.start,route.c1,t),b=lerp(route.c1,route.c2,t),c=lerp(route.c2,route.end,t),end=lerp(lerp(a,b,t),lerp(b,c,t),t);
 // Subdivision retains the original arc and barb size; it only removes its last few pixels.
 return{...route,c1:a,c2:lerp(a,b,t),end,clearance:Math.hypot(end.x-route.target.x,end.y-route.target.y),headLength:Math.min(13,Math.max(8,Math.hypot(route.end.x-route.start.x,route.end.y-route.start.y)*.22))};
}
function radicalTransferPlan(q,positions,sources=[]){
 const router=radicalTransferRouter(q,positions,sources),{forming,atoms,unit,sub,best,collision}=router,edge=radicalFormingEdge(q),axis=unit(sub(atoms[edge.b],atoms[edge.a])),normal={x:-axis.y,y:axis.x},formingMoves=q.moves.filter(m=>m[1]===forming.key),remaining=q.moves.find(m=>m[1]!==forming.key);
 const middle={x:(atoms[edge.a].x+atoms[edge.b].x)/2,y:(atoms[edge.a].y+atoms[edge.b].y)/2},offset=sub(forming,middle),side=offset.x*normal.x+offset.y*normal.y>=0?1:-1,piNormal=edge.o===2?{x:normal.x*side,y:normal.y*side}:null;
 // For a new π stroke both arcs stay outside the existing σ bond, rounding its ends.
 const plans=(piNormal?[1]:[-1,1]).map(side=>{const n=piNormal||{x:normal.x*side,y:normal.y*side},r=best(formingMoves[0][0],forming,n),p=best(formingMoves[1][0],forming,piNormal?n:{x:-n.x,y:-n.y}),routes=[r,p];let cost=r.cost+p.cost+collision(r,p);
  if(remaining){const target=router.destination(remaining[1]),origin=router.startAt(remaining[0],target,n),d=unit(sub(target,origin)),perp={x:-d.y,y:d.x},tail=[perp,{x:-perp.x,y:-perp.y}].map(v=>best(remaining[0],target,v,[22,30,40,52],routes)).sort((a,b)=>a.cost-b.cost)[0];routes.push(tail);cost+=tail.cost;}return{routes,cost};
 }).sort((a,b)=>a.cost-b.cost);
 const chosen=plans[0];
 if(q.kind==='elimination')chosen.routes=chosen.routes.map((route,i)=>i<2?shortenFishhookCurve(route,6):route);
 return{...chosen,router,forming};
}
function radicalTransferRoute(q,positions,source,target,sources=[],plan){
 plan=plan||radicalTransferPlan(q,positions,sources);const key=radicalTransferDestination(q,source.key,target.key),ready=plan.routes.find(r=>r.source===source.key&&r.target.key===key);if(ready)return ready;
 const router=plan.router,destination=router.destination(key),origin=router.startAt(source.key,destination,{x:0,y:1}),d=router.unit(router.sub(destination,origin)),normal={x:-d.y,y:d.x};return[normal,{x:-normal.x,y:-normal.y}].map(n=>router.best(source.key,destination,n)).sort((a,b)=>a.cost-b.cost)[0];
}
// Both bond-forming electrons meet at one shared destination; the third goes to carbon.
function additionAttack(q,arrows=[]){
 const r=arrows.find(m=>m[0]==='r:2');
 if(r){if(['a:0','b:0-2'].includes(r[1]))return 0;if(['a:1','b:1-2'].includes(r[1]))return 1;}
 const forming=arrows.find(m=>m[0]==='b:0-1'&&['b:0-2','b:1-2'].includes(m[1]));
 if(forming)return Number(forming[1][2]);
 const retained=arrows.find(m=>m[0]==='b:0-1'&&['a:0','a:1'].includes(m[1]));
 return retained?1-Number(retained[1].slice(2)):0;
}
function additionBondMoves(q,arrows=[]){const site=additionAttack(q,arrows),bond=bk(site,2);return[['r:2',bond],['b:0-1',bond],['b:0-1','a:'+(1-site)]];}
function additionDestination(q,source,target,arrows=[]){
 if(source==='r:2'&&['a:0','a:1'].includes(target))return bk(Number(target.slice(2)),2);
 if(source==='b:0-1'&&target==='a:2')return bk(additionAttack(q,arrows),2);
 return target;
}
function additionBondTarget(positions,site){const a=positions[site],b=positions[2];return{key:bk(site,2),x:(a.x+b.x)/2,y:(a.y+b.y)/2};}
function additionArrowRoute(q,positions,source,target,arrows=[],radicalSource){
 const unit=v=>{const length=Math.hypot(v.x,v.y)||1;return{x:v.x/length,y:v.y/length};},add=(a,b,k=1)=>({x:a.x+b.x*k,y:a.y+b.y*k}),sub=(a,b)=>({x:a.x-b.x,y:a.y-b.y}),distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),dot=(a,b)=>a.x*b.x+a.y*b.y;
 const segmentDistance=(p,a,b)=>{const v=sub(b,a),length=v.x*v.x+v.y*v.y,u=length?Math.max(0,Math.min(1,dot(sub(p,a),v)/length)):0;return distance(p,add(a,v,u));};
 const point=(r,t)=>{const u=1-t;return{x:u*u*u*r.start.x+3*u*u*t*r.c1.x+3*u*t*t*r.c2.x+t*t*t*r.end.x,y:u*u*u*r.start.y+3*u*u*t*r.c1.y+3*u*t*t*r.c2.y+t*t*t*r.end.y};};
 const rails=q.bonds.flatMap(b=>radicalBondSegments(positions,q.bonds,b)),pi=q.bonds.find(b=>b.o===2),piRails=radicalBondSegments(positions,q.bonds,pi),attack=additionAttack(q,arrows),formingAxis=unit(sub(positions[attack],positions[2])),formingNormal={x:-formingAxis.y,y:formingAxis.x};
 const radical=radicalSource||{key:'r:2',...add(positions[2],unit(sub(positions[0],positions[2])),26)};
 function startAtPi(normal,retained){const f=(retained?1-attack:attack)===0?.32:.68,points=piRails.map(r=>add(r.a,sub(r.b,r.a),f));points.sort((a,b)=>dot(b,normal)-dot(a,normal));return add(points[0],normal,2.5);}
 function make(from,destination,normal,height){
  const id=destination.key.startsWith('a:')?Number(destination.key.slice(2)):null,retained=id!==null,startPoint=from.key==='r:2'?{x:from.x,y:from.y}:startAtPi(normal,retained),delta=sub(destination,startPoint),c1=add(add(startPoint,delta,.24),normal,height),c2=add(add(destination,delta,-.22),normal,height),clearance=id===null?3:q.atoms[id].label?26:8,end=add(destination,unit(sub(c2,destination)),clearance),start=from.key==='r:2'?add(startPoint,unit(sub(c1,startPoint)),4.5):startPoint;
  const route={start,c1,c2,end,target:destination,clearance,source:from.key};let cost=height*.015;
  for(let i=1;i<40;i++){const t=i/40,p=point(route,t);for(const rail of rails)cost+=Math.max(0,5-segmentDistance(p,rail.a,rail.b))**2*(t>.15&&t<.88?12:1);for(let j=0;j<positions.length;j++){if(j===id&&t>.8||j===2&&from.key==='r:2'&&t<.2)continue;const gap=q.atoms[j].label?23:10;cost+=Math.max(0,gap-distance(p,positions[j]))**2*4;}}
  route.cost=cost;return route;
 }
 function best(from,destination,normal,heights){return heights.map(h=>make(from,destination,normal,h)).sort((a,b)=>a.cost-b.cost)[0];}
 const bondTarget=additionBondTarget(positions,attack),piSource={key:'b:0-1'};
 // Opposite arcs bring the two electrons to the SAME point on the forming bond.
 const plans=[-1,1].map(side=>{const n={x:formingNormal.x*side,y:formingNormal.y*side},r=best(radical,bondTarget,n,[24,32,42]),p=best(piSource,bondTarget,{x:-n.x,y:-n.y},[24,32,42]);let cost=r.cost+p.cost;for(let i=2;i<17;i++){const a=point(r,i/20);for(let j=2;j<17;j++)cost+=Math.max(0,6-distance(a,point(p,j/20)))**2*5;}return{side,r,p,cost};}).sort((a,b)=>a.cost-b.cost),plan=plans[0];
 const key=additionDestination(q,source.key,target.key,arrows),destination=key.startsWith('b:')?additionBondTarget(positions,Number(key[2])):{key,...positions[Number(key.slice(2))]};
 if(destination.key===bondTarget.key)return source.key==='r:2'?plan.r:plan.p;
 if(source.key==='r:2')return best(source,destination,{x:formingNormal.x*plan.side,y:formingNormal.y*plan.side},[24,32,42]);
 const d=unit(sub(destination,startAtPi({x:0,y:1},true))),normal={x:-d.y,y:d.x};return[normal,{x:-normal.x,y:-normal.y}].map(n=>best(source,destination,n,[22,30,40])).sort((a,b)=>a.cost-b.cost)[0];
}

function additionSites(q){if(q.kind!=='pi-addition')return[0];const adjacency=bs=>q.atoms.map((_,i)=>q.atoms.map((_,j)=>bs.find(b=>b.a===i&&b.b===j||b.a===j&&b.b===i)?.o||0)),expected=adjacency(q.product);return[0,1].filter(site=>{const bs=clone(q.bonds);bs.find(b=>b.o===2).o=1;bs.push({a:site,b:2,o:1});const actual=adjacency(bs),rad=1-site,signature=(i,adj,r)=>[q.atoms[i].label||'C',i===r,adj[i].filter(Boolean).sort().join(',')].join(':'),order=q.atoms.map((_,i)=>i),map=new Map(),used=new Set();function match(k){if(k===order.length)return true;const i=order[k];for(let j=0;j<order.length;j++){if(used.has(j)||signature(i,expected,q.end)!==signature(j,actual,rad)||[...map].some(([a,b])=>expected[i][a]!==actual[j][b]))continue;map.set(i,j);used.add(j);if(match(k+1))return true;map.delete(i);used.delete(j);}return false;}return match(0);});}
function additionGrade(q,arrows){if(arrows.length!==3)return false;return additionSites(q).some(site=>{const other=1-site,newBond=bk(site,2),rad=arrows.filter(m=>m[0]==='r:2'),pi=arrows.filter(m=>m[0]==='b:0-1');return rad.length===1&&pi.length===2&&[newBond,'a:'+site].includes(rad[0][1])&&pi.some(m=>m[1]==='a:'+other)&&pi.some(m=>[newBond,'a:2'].includes(m[1]));});}
function additionFeedback(q,arrows){if(arrows.length!==3)return 'Use three fishhooks: one from the radical dot and two from the π bond.';const r=arrows.find(m=>m[0]==='r:2'),attack=r?.[1]==='a:0'||r?.[1]==='b:0-2'?0:r?.[1]==='a:1'||r?.[1]==='b:1-2'?1:null;if(attack!==null&&arrows.some(m=>m[0]==='b:0-1'&&m[1]==='a:'+attack))return 'The remaining π electron must go to the other alkene carbon. You placed it on the carbon forming the new C–'+q.atoms[2].label+' bond.';if(attack!==null&&!additionSites(q).includes(attack))return 'That addition site gives a different radical product. Use the carbon that gives the product shown.';return 'Send one electron from the radical and one from the π bond into the same new C–'+q.atoms[2].label+' bond. The other π electron stays on the other carbon. Select the shared forming-bond marker for those two electrons, then the other carbon.';}

function grade(q,arrows){if(q.kind==='pi-addition')return additionGrade(q,arrows);if(transferKinds.has(q.kind))return radicalTransferGrade(q,arrows);const keys=arrows.map(x=>x.join('>'));return keys.length===q.moves.length&&new Set(keys).size===keys.length&&q.moves.every(x=>keys.includes(x.join('>')));}
if(typeof module!=='undefined'&&module.exports)module.exports={bank,cleavageBank,additionBank,abstractionBank,halogenAbstractionBank,eliminationBank,couplingBank,grade,additionSites,additionFeedback,additionAttack,additionBondMoves,additionDestination,additionBondTarget,additionArrowRoute,radicalFormingEdge,radicalBreakingEdge,radicalTransferDestination,radicalTransferGrade,radicalTransferFeedback,radicalReactionLayout,radicalDotPoint,radicalFormingTarget,radicalTransferPlan,radicalTransferRoute,radicalBondSegments,radicalBondLines,polishRadicalGeometry};
if(typeof document==='undefined'||!document.getElementById('rad-practice'))return;
const $=id=>document.getElementById('rad-'+id);const requestedTopic=new URLSearchParams(location.search).get('topic'),topic=['resonance','cleavage','pi-addition','abstraction','halogen-abstraction','elimination','coupling'].includes(requestedTopic)?requestedTopic:'resonance',isCleavage=topic==='cleavage',isAddition=topic==='pi-addition',isAbstraction=topic==='abstraction',isHalogen=topic==='halogen-abstraction',isElimination=topic==='elimination',isCoupling=topic==='coupling';const isTransfer=transferKinds.has(topic);
$('practice').hidden=false;if(isCleavage){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Draw two fishhook arrows from the bond that breaks: one electron goes to each atom. The radical products are shown.';$('help').textContent='Click a bond, then an atom. Select the same bond again for the second electron. You can also drag, or use Tab and Enter.';}
if(isAddition){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Add the three fishhook arrows that form the new bond and place the remaining unpaired electron on carbon. Match the radical product shown.';$('help').textContent='Send the radical electron and one π electron to the same forming C–X bond marker. Send the second π electron to the other alkene carbon. The dashed guide shows the bond being formed. Keyboard: Tab and Enter.';}
if(isAbstraction){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Add three fishhook arrows to transfer the shown H atom to the radical and leave a radical on carbon. Both products are shown.';$('help').textContent='Send the radical electron and one C–H electron to the same forming X–H bond marker. Send the other C–H electron to carbon. The dashed guide marks the new bond. Keyboard: Tab and Enter.';}
if(isHalogen){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Add three fishhook arrows to form the C–X bond and leave the second halogen atom as a radical. Both products are shown.';$('help').textContent='Send the carbon radical electron and one X–X electron to the same forming C–X bond marker. Send the other X–X electron to the departing halogen. Keyboard: Tab and Enter.';}
if(isElimination){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Add three fishhook arrows to form the alkene and release the halogen radical. Both products are shown.';$('help').textContent='Send the carbon radical electron and one C–X electron to the same forming π bond marker. Send the other C–X electron to the departing halogen. The dashed stroke marks the new π bond. Keyboard: Tab and Enter.';}
if(isCoupling){document.querySelector('.level-picker').hidden=true;$('instruction').textContent='Draw two fishhook arrows, one from each radical, to form the new bond. The closed-shell product is shown.';$('help').textContent='Select one radical dot, then the forming-bond marker. Repeat from the other radical to the same marker. Each fishhook contributes one electron to the new bond. Keyboard: Tab and Enter.';}
let level='easy',index=0,placed=[],selected=null,solved=false,hints=0,drag=null;const completed=new Set();let sources=[],targets=[];const activeBank=()=>isCleavage?cleavageBank:isAddition?additionBank:isAbstraction?abstractionBank:isHalogen?halogenAbstractionBank:isElimination?eliminationBank:isCoupling?couplingBank:bank.filter(q=>q.level===level),current=()=>activeBank()[index];
function say(text,state='neutral'){$('feedback').textContent=text;$('feedback').dataset.state=state;}
function render(){const q=current(),xs=q.atoms.map(a=>a.x),ys=q.atoms.map(a=>a.y),cx=(Math.min(...xs)+Math.max(...xs))/2,cy=(Math.min(...ys)+Math.max(...ys))/2,as=q.atoms.map(a=>({x:a.x-cx+270,y:a.y-cy+285}));sources=[];targets=[];let h='',transferPlan;
function structure(bs,rad,dx,interactive){let out='';for(const b of bs){const a=as[b.a],c=as[b.b],len=Math.hypot(c.x-a.x,c.y-a.y),nx=-(c.y-a.y)/len,ny=(c.x-a.x)/len;out+=radicalBondLines(as,bs,b,dx);if(interactive){const p={key:bk(b.a,b.b),x:(a.x+c.x)/2,y:(a.y+c.y)/2,label:(b.o===2?'π':'σ')+' bond '+(b.a+1)+'–'+(b.b+1)};sources.push({...p,x:p.x+(b.o===2?nx*4:0),y:p.y+(b.o===2?ny*4:0)});targets.push(p);}}
const a=as[rad],neighbors=bs.filter(b=>b.a===rad||b.b===rad).map(b=>as[b.a===rad?b.b:b.a]);let best;for(let k=0;k<24;k++){const t=k*Math.PI/12,p={x:a.x+Math.cos(t)*12,y:a.y+Math.sin(t)*12},score=Math.min(...neighbors.map(v=>Math.hypot(p.x-v.x,p.y-v.y)));if(!best||score>best.score)best={...p,score};}out+=`<circle class="rad-dot" cx="${best.x+dx}" cy="${best.y}" r="3.5" role="img" aria-label="Unpaired electron on carbon ${rad+1}"/>`;if(interactive){sources.unshift({key:'r:'+rad,x:best.x,y:best.y,label:'Unpaired electron on carbon '+(rad+1)});as.forEach((a,i)=>targets.push({key:'a:'+i,...a,label:'Carbon '+(i+1)}));}return out;}
if(isTransfer){
function transferStructure(product){
 const bs=product?q.product:q.bonds,pts=radicalReactionLayout(q,product);let out='';
 if(!product)pts.forEach((a,i)=>{as[i]={...a};});
 for(const b of bs){out+=radicalBondLines(pts,bs,b);if(!product){const rail=radicalBondSegments(pts,bs,b)[0],p={key:bk(b.a,b.b),x:(rail.a.x+rail.b.x)/2,y:(rail.a.y+rail.b.y)/2,label:(b.o===2?'π':'σ')+' bond '+(b.a+1)+'–'+(b.b+1)};sources.push(p);targets.push({...p});}}
 pts.forEach((a,i)=>{if(a.label)out+=`<text class="rad-atom" x="${a.x}" y="${a.y}">${a.label}</text>`;if(!product)targets.push({key:'a:'+i,x:a.x,y:a.y,label:(a.label||'Carbon')+' atom '+(i+1)});});
 const radicalIds=product?(isCoupling?[]:[q.end]):(q.radicals||[q.radical]);
 for(const id of radicalIds){const a=pts[id],dot=radicalDotPoint(q,pts,bs,id,product),label='Unpaired electron on '+(a.label||'carbon')+' atom '+(id+1);out+=`<circle class="rad-dot" cx="${dot.x}" cy="${dot.y}" r="3.5" role="img" aria-label="${label}"/>`;if(!product)sources.unshift({key:'r:'+id,...dot,label});}
 if(!product){const formed=radicalFormingTarget(q,pts),i=targets.findIndex(t=>t.key===formed.key);if(i>=0)targets.splice(i,1);targets.push(formed);if(selected||placed.some(([s,t])=>radicalTransferDestination(q,s,t)===formed.key)){const r=formed.segment;out+=`<line class="rad-forming-bond" x1="${r.a.x}" y1="${r.a.y}" x2="${r.b.x}" y2="${r.b.y}"/>`;}}
 return out;
}
h=transferStructure(false)+transferStructure(true)+'<path class="rad-bond" d="M510 285H590 M578 278L590 285L578 292"/>';
}else if(isAddition){
function alignedSide(raw,bs,product){const remaining=new Set(raw.map((a,i)=>i)),groups=[];while(remaining.size){const first=remaining.values().next().value,ids=[first];remaining.delete(first);for(let i=0;i<ids.length;i++)for(const b of bs){if(b.a!==ids[i]&&b.b!==ids[i])continue;const n=b.a===ids[i]?b.b:b.a;if(remaining.delete(n))ids.push(n);}groups.push(ids);}const anchor=isHalogen||isAddition&&!product?2:0;groups.sort((a,b)=>Number(b.includes(anchor))-Number(a.includes(anchor)));const scale=.85,gap=90,boxes=groups.map(ids=>{const entries=ids.map(i=>{const a=raw[i],pad=a.label?30:18;return{x:a.x*scale,y:a.y*scale,pad};});return{left:Math.min(...entries.map(a=>a.x-a.pad)),right:Math.max(...entries.map(a=>a.x+a.pad)),top:Math.min(...entries.map(a=>a.y-a.pad)),bottom:Math.max(...entries.map(a=>a.y+a.pad))};}),width=boxes.reduce((sum,b)=>sum+b.right-b.left,0)+gap*(groups.length-1),pts=raw.map(a=>({...a})),pluses=[];let cursor=(product?830:240)-width/2;groups.forEach((ids,j)=>{const b=boxes[j],dx=cursor-b.left,dy=285-(b.top+b.bottom)/2;for(const i of ids){pts[i].x=raw[i].x*scale+dx;pts[i].y=raw[i].y*scale+dy;}cursor+=b.right-b.left;if(j<groups.length-1){pluses.push({x:cursor+gap/2,y:285});cursor+=gap;}});return{pts,pluses};}
function additionStructure(product){const raw=product?q.productAtoms:q.atoms,bs=product?q.product:q.bonds,{pts,pluses}=alignedSide(raw,bs,product);if(!product)pts.forEach((a,i)=>{as[i].x=a.x;as[i].y=a.y;});let out='';for(const b of bs){const a=pts[b.a],c=pts[b.b],d=Math.hypot(c.x-a.x,c.y-a.y),ux=(c.x-a.x)/d,uy=(c.y-a.y)/d;out+=radicalBondLines(pts,bs,b);if(!product){const p={key:bk(b.a,b.b),x:(a.x+c.x)/2-uy*(b.o===2?4:0),y:(a.y+c.y)/2+ux*(b.o===2?4:0),label:(b.o===2?'π':'σ')+' bond '+(b.a+1)+'–'+(b.b+1)};if(!isAddition||b.o===2)sources.push(p);if(!isAddition)targets.push({...p,x:(a.x+c.x)/2,y:(a.y+c.y)/2});}}
pts.forEach((a,i)=>{if(a.label)out+=`<text class="rad-atom" x="${a.x}" y="${a.y}">${a.label}</text>`;if(!product&&(!isAddition||i!==2))targets.push({key:'a:'+i,x:a.x,y:a.y,label:isAddition&&i<2?(i===0?'Left':'Right')+' alkene carbon':(a.label||'Carbon')+' atom '+(i+1)});});const owner=product?q.end:q.radical,a=pts[owner];let dot;if(!product&&!isElimination){const b=pts[(isAbstraction||isHalogen)?1:0],d=Math.hypot(b.x-a.x,b.y-a.y);dot={x:a.x+(b.x-a.x)/d*(a.label?26:12),y:a.y+(b.y-a.y)/d*(a.label?26:12)};}else{const ns=bs.filter(b=>b.a===owner||b.b===owner).map(b=>pts[b.a===owner?b.b:b.a]);let score=-Infinity;for(let k=0;k<24;k++){const t=k*Math.PI/12,p={x:a.x+Math.cos(t)*(a.label?26:12),y:a.y+Math.sin(t)*(a.label?26:12)},d=Math.min(...ns.map(b=>Math.hypot(p.x-b.x,p.y-b.y)));if(d>score){score=d;dot=p;}}}out+=`<circle class="rad-dot" cx="${dot.x}" cy="${dot.y}" r="3.5" role="img" aria-label="Unpaired electron on ${a.label||'carbon'}"/>`;if(!product){sources.unshift({key:'r:'+q.radical,x:dot.x,y:dot.y,label:'Unpaired electron on '+(a.label||'carbon')});if(!isElimination){const b=pts[(isAbstraction||isHalogen)?1:0],x=(a.x+b.x)/2,y=(a.y+b.y)/2;if(isAddition){const site=additionAttack(q,placed),carbon=pts[site],bond=additionBondTarget(pts,site);targets.push({...bond,label:'Forming C–'+a.label+' bond'});if(selected||placed.some(m=>['b:0-2','b:1-2'].includes(additionDestination(q,m[0],m[1],placed)))){const length=Math.hypot(carbon.x-a.x,carbon.y-a.y),ux=(carbon.x-a.x)/length,uy=(carbon.y-a.y)/length;out+=`<line class="rad-forming-bond" x1="${a.x+ux*32}" y1="${a.y+uy*32}" x2="${carbon.x-ux*10}" y2="${carbon.y-uy*10}"/>`;}}else{targets.push({key:'b:1-2',x,y,label:isHalogen?'New C–'+q.atoms[1].label+' bond':'New '+a.label+'–H bond'});if(selected)out+=`<circle class="rad-new-bond" cx="${x}" cy="${y}" r="9"/>`;}}}for(const p of pluses)out+=`<text class="rad-label" x="${p.x}" y="${p.y}" dominant-baseline="central">+</text>`;return out;}
h=additionStructure(false)+additionStructure(true)+'<text class="rad-label" x="270" y="35">Starting materials</text><text class="rad-label" x="830" y="35">Products</text><path class="rad-bond" d="M510 285H590 M578 278L590 285L578 292"/>';
}else if(isCleavage){
const points=q.atoms.map(a=>({...a,x:a.x+270,y:a.y+260})),u={x:(points[1].x-points[0].x)/140,y:(points[1].y-points[0].y)/140};
const left=new Set([0]),queue=[0];for(let i=0;i<queue.length;i++)for(const b of q.product){if(b.a!==queue[i]&&b.b!==queue[i])continue;const n=b.a===queue[i]?b.b:b.a;if(!left.has(n)){left.add(n);queue.push(n);}}
// Place product components by their full label/dot bounds, with reserved arrow and plus gaps.
function fragmentBounds(ids){const extents=[...ids].map(i=>{const a=q.atoms[i],half=a.label?(a.label.length>2?30:20):0;return{left:a.x-half,right:a.x+half};});for(const i of [0,1])if(ids.has(i)){const x=q.atoms[i].x+(i===0?1:-1)*u.x*22;extents.push({left:x-4,right:x+4});}return{left:Math.min(...extents.map(b=>b.left)),right:Math.max(...extents.map(b=>b.right))};}
const right=new Set(q.atoms.map((a,i)=>i).filter(i=>!left.has(i))),lb=fragmentBounds(left),rb=fragmentBounds(right),leftShift=670-lb.left,leftEnd=lb.right+leftShift,plusX=leftEnd+50,rightShift=leftEnd+100-rb.left,productsCentre=(670+rb.right+rightShift)/2;
function fragment(bs,product){let out='';const pts=points.map((a,i)=>({...a,x:product?q.atoms[i].x+(left.has(i)?leftShift:rightShift):a.x,y:a.y}));for(const b of bs){const a=pts[b.a],c=pts[b.b],len=Math.hypot(c.x-a.x,c.y-a.y),ux=(c.x-a.x)/len,uy=(c.y-a.y)/len,pa=a.label?(a.label.length>2?30:20):0,pb=c.label?(c.label.length>2?30:20):0;for(const off of b.o===2?[-4,4]:[0])out+=`<line class="rad-bond" x1="${a.x+ux*pa-uy*off}" y1="${a.y+uy*pa+ux*off}" x2="${c.x-ux*pb-uy*off}" y2="${c.y-uy*pb+ux*off}"/>`;if(!product)sources.push({key:bk(b.a,b.b),x:(a.x+c.x)/2,y:(a.y+c.y)/2,label:(a.label||'C')+'–'+(c.label||'C')+' bond'});}
pts.forEach((a,i)=>{if(a.label)out+=`<text class="rad-atom" x="${a.x}" y="${a.y}">${a.label}</text>`;if(!product)targets.push({key:'a:'+i,x:a.x,y:a.y,label:(a.label||'Carbon')+' atom '+(i+1)});});if(product){for(const i of [0,1]){const a=pts[i],sign=i===0?1:-1;out+=`<circle class="rad-dot" cx="${a.x+sign*u.x*22}" cy="${a.y+sign*u.y*22}" r="3.5" role="img" aria-label="Unpaired electron on ${a.label}"/>`;}out+=`<text class="rad-label" x="${plusX}" y="266">+</text>`;}return out;}

h=fragment(q.bonds,false)+fragment(q.product,true)+`<text class="rad-label" x="270" y="35">Starting material</text><text class="rad-label" x="${productsCentre}" y="35">Radical products</text><text class="rad-label" x="530" y="232">${q.condition}</text><path class="rad-bond" d="M480 260H580 M568 253L580 260L568 267"/>`;
}else{h+=structure(q.bonds,q.radical,0,true)+structure(q.product,q.end,560,false);h+='<text class="rad-label" x="270" y="35">Contributor A</text><text class="rad-label" x="830" y="35">Contributor B</text><path class="rad-bond" d="M510 285H590 M520 279L510 285L520 291 M580 279L590 285L580 291"/>';}
function hook(source,t){let s={...source};
// Give the two electrons from a π bond distinct, stable tail positions.
if(source.key.startsWith('b:')){const q=current(),bond=q.bonds.find(b=>bk(b.a,b.b)===source.key);if(bond&&bond.o===2){const a=as[bond.a],b=as[bond.b],d=Math.hypot(b.x-a.x,b.y-a.y),ux=(b.x-a.x)/d,uy=(b.y-a.y)/d,side=(t.x-source.x)*ux+(t.y-source.y)*uy>=0?1:-1;s.x+=ux*side*11;s.y+=uy*side*11;}}

// A continuous curve and one open barb share a single path.
function fishhook(a,b,c,e,headLength){const len=Math.hypot(e.x-c.x,e.y-c.y)||1,ux=(e.x-c.x)/len,uy=(e.y-c.y)/len,turn=(b.x-a.x)*(e.y-c.y)-(b.y-a.y)*(e.x-c.x),side=turn>=0?-1:1,head=headLength??Math.min(13,Math.max(8,Math.hypot(e.x-a.x,e.y-a.y)*.22)),barb={x:e.x-ux*head-uy*head*.5*side,y:e.y-uy*head+ux*head*.5*side};const n=v=>Number(v.toFixed(3));return `<g class="rad-fishhook" data-arrow-style="single-barb"><path class="rad-fishhook-shaft" d="M${n(a.x)} ${n(a.y)}C${n(b.x)} ${n(b.y)} ${n(c.x)} ${n(c.y)} ${n(e.x)} ${n(e.y)}L${n(barb.x)} ${n(barb.y)}"/></g>`;}

if(isAddition||isTransfer){if(isTransfer)transferPlan=transferPlan||radicalTransferPlan(current(),as,sources);const route=isTransfer?radicalTransferRoute(current(),as,source,t,sources,transferPlan):additionArrowRoute(current(),as,source,t,placed,sources.find(s=>s.key==='r:2'));return fishhook(route.start,route.c1,route.c2,route.end,route.headLength).replace('<g class="rad-fishhook"',`<g class="rad-fishhook" data-electron-source="${route.source}" data-electron-destination="${route.target.key}" data-destination-x="${route.target.x}" data-destination-y="${route.target.y}"`);}
if(isCleavage){const q=current(),a=q.atoms[0],b=q.atoms[1],len=Math.hypot(b.x-a.x,b.y-a.y),nx=(b.y-a.y)/len,ny=-(b.x-a.x)/len,dx=t.x-s.x,dy=t.y-s.y,d=Math.hypot(dx,dy)||1,ux=dx/d,uy=dy/d;
const start={x:s.x+ux*2+nx*3,y:s.y+uy*2+ny*3},end={x:t.x-ux*17+nx*9,y:t.y-uy*17+ny*9},c1={x:s.x+ux*14+nx*42,y:s.y+uy*14+ny*42},c2={x:end.x-ux*13+nx*20,y:end.y-uy*13+ny*20};return fishhook(start,c1,c2,end);}
const dx=t.x-s.x,dy=t.y-s.y,d=Math.hypot(dx,dy)||1,ux=dx/d,uy=dy/d,nx=-uy,ny=ux,q=current();
function segDist(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,v=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a.x-v*dx,p.y-a.y-v*dy);}
const sb=q.bonds.find(b=>bk(b.a,b.b)===s.key),terminal=sb&&t.key.startsWith('a:')&&[sb.a,sb.b].includes(Number(t.key.slice(2)))&&!q.atoms[Number(t.key.slice(2))].label,labelTarget=t.key.startsWith('a:')&&q.atoms[Number(t.key.slice(2))].label;let best;for(const side of [-1,1])for(const bend of [24,34,46]){const start={x:s.x+nx*side*5,y:s.y+ny*side*5},end={x:t.x+ux*(terminal?7:labelTarget?-24:-9)+nx*side*(terminal?7:9),y:t.y+uy*(terminal?7:labelTarget?-24:-9)+ny*side*(terminal?7:9)},c1={x:start.x+dx*.28+nx*side*bend,y:start.y+dy*.28+ny*side*bend},c2={x:end.x-dx*.28+nx*side*bend,y:end.y-dy*.28+ny*side*bend};let cost=bend*.05;for(let k=1;k<20;k++){const v=k/20,u=1-v,p={x:u*u*u*start.x+3*u*u*v*c1.x+3*u*v*v*c2.x+v*v*v*end.x,y:u*u*u*start.y+3*u*u*v*c1.y+3*u*v*v*c2.y+v*v*v*end.y};for(const b of q.bonds){const a=as[b.a],c=as[b.b],distance=segDist(p,a,c);cost+=Math.max(0,10-distance)**2*(k>3&&k<17?10:1);}for(const a of as)cost+=Math.max(0,12-Math.hypot(p.x-a.x,p.y-a.y))**2*12;}
if(!best||cost<best.cost)best={start,end,c1,c2,cost};}return fishhook(best.start,best.c1,best.c2,best.end);}

for(const [s,t]of placed)h+=hook(sources.find(x=>x.key===s),targets.find(x=>x.key===t));if(!solved){for(const a of selected?targets:sources)h+=`<circle class="rad-hit${(isAddition||isTransfer)&&selected?(a.key===(isAddition?additionBondTarget(as,additionAttack(q,placed)):radicalFormingTarget(q,as)).key?' rad-new-bond-target':' rad-atom-target'):''}" data-${selected?'target':'source'}="${a.key}" cx="${a.x}" cy="${a.y}" r="15" tabindex="0" role="button" aria-label="${selected?'Destination: ':'Start: '}${a.label}"/>`;if(selected){const s=sources.find(x=>x.key===selected);h+=`<circle class="rad-selected" cx="${s.x}" cy="${s.y}" r="12"/>`;}}
h=h.replace(/<text\b[^>]*>\+<\/text>/g,'').replace(/<text\b[^>]*>(?:Starting materials?|Radical products|Products|Radicals|Coupled product|Contributor [AB])<\/text>/g,'');
$('canvas').innerHTML=`<svg id="rad-board" viewBox="0 ${isAddition||isTransfer?110:0} 1100 ${isAddition||isTransfer?350:550}" role="group" aria-label="${isCoupling?'Radical coupling; add two fishhook arrows':isElimination?'Radical elimination; add three fishhook arrows':isHalogen?'Halogen abstraction; add three fishhook arrows':isAbstraction?'Hydrogen abstraction; add three fishhook arrows':isAddition?'Radical addition to a pi bond; add three fishhook arrows':isCleavage?'Homolytic cleavage; add two fishhook arrows from the breaking bond':'Radical resonance contributors; add fishhook arrows to contributor A'}">${h}</svg>`;$('prev').disabled=index===0;$('next').disabled=index===activeBank().length-1;$('undo').disabled=!placed.length||solved;$('clear').disabled=!placed.length||solved;$('check').disabled=solved;$('count').textContent='Question '+(index+1)+' of '+activeBank().length;$('score').textContent='Completed: '+activeBank().filter(q=>completed.has(q.id)).length+' / '+activeBank().length;$('progress').style.width=activeBank().filter(q=>completed.has(q.id)).length*100/activeBank().length+'%';$('family').textContent=q.title;if(isCleavage)$('instruction').textContent=q.nbs?'Show only the initial N–Br bond homolysis in NBS. Send one bonding electron to N and one to Br; the subsequent bromination chain is not shown.':'Draw two fishhook arrows from the bond that breaks: one electron goes to each atom. The radical products are shown.';}
function begin(){placed=[];selected=null;solved=false;hints=0;$('question').value=index;say('');render();}
function pick(key,isTarget){if(solved)return;if(isTarget&&selected){placed.push([selected,isTransfer?radicalTransferDestination(current(),selected,key):isAddition&&selected==='r:2'?additionDestination(current(),selected,key,placed):key]);selected=null;say(placed.length+' fishhook arrow'+(placed.length===1?'':'s')+' drawn.');}else if(!isTarget){selected=key;say('Electron source selected. Choose its destination.');}render();}
$('canvas').addEventListener('click',e=>{if(e.target.dataset.source)pick(e.target.dataset.source,false);else if(e.target.dataset.target)pick(e.target.dataset.target,true);});
$('canvas').addEventListener('keydown',e=>{if(e.key==='Escape'){selected=null;render();}if(e.key==='Enter'||e.key===' '){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));$('canvas').querySelector('[data-target]')?.focus();}});
$('canvas').addEventListener('pointerdown',e=>{if(!e.target.dataset.source)return;drag={key:e.target.dataset.source,x:e.clientX,y:e.clientY};});
$('canvas').addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;if(Math.hypot(e.clientX-d.x,e.clientY-d.y)<8)return;const svg=$('canvas').querySelector('svg'),p=new DOMPoint(e.clientX,e.clientY).matrixTransform(svg.getScreenCTM().inverse()),t=targets.map(t=>({...t,d:Math.hypot(t.x-p.x,t.y-p.y)})).sort((a,b)=>a.d-b.d)[0];if(t&&t.d<25){selected=d.key;pick(t.key,true);e.preventDefault();}});
$('check').onclick=()=>{selected=null;if(grade(current(),placed)){solved=true;completed.add(current().id);say(isCoupling?'Correct. Each radical contributes one electron to the new σ bond. The unpaired electrons are now paired, so no radical remains.':isElimination?'Correct. The carbon radical and one C–X bonding electron form the π bond. The other C–X electron leaves with X as a neutral radical.':isHalogen?'Correct. The carbon radical and one X–X electron form C–X. The other bonding electron stays on the departing halogen, giving X•.':isAbstraction?'Correct. The radical takes H•: one C–H electron joins the incoming radical electron in the new X–H bond; the other remains on carbon. No ions form.':isAddition?'Correct. One radical electron and one π electron form the new σ bond; the other π electron becomes the carbon radical.':isCleavage?'Correct. Each atom receives one electron from the broken bond, giving two neutral radicals.':'Correct. The nuclei stay fixed; only the π electrons and unpaired electron move.','correct');}else say(isTransfer?radicalTransferFeedback(current(),placed):isAddition?additionFeedback(current(),placed):isCleavage?'Start both fishhook arrows at the same breaking bond, and send one electron to each atom.':placed.length?'Check the complete electron flow. Two fishhooks form each new π bond, and one electron becomes the new radical.':'Start at the radical dot or a π bond and add the fishhook arrows.','incorrect');render();};
$('hint').onclick=()=>{const q=current(),moves=isAddition?additionBondMoves(q,placed):q.moves,m=moves.find(m=>!placed.some(p=>p.join('>')===m.join('>')))||moves[0];hints++;say(hints===1&&isCoupling?'Reverse homolytic cleavage: bring one unpaired electron from each fragment into the bond between them.':hints===1&&isElimination?'Reverse the addition step. One C–X electron pairs with the adjacent carbon radical to form a π bond; the second leaves on X.':hints===1&&isHalogen?'The new C–X bond needs one electron from carbon and one from X–X. The second X–X electron becomes the new halogen radical.':hints===1&&isAbstraction?'This is H-atom transfer, not proton transfer. Split the C–H pair: one electron goes into X–H and one remains on carbon.':hints===1&&isAddition?'The new bond needs two electrons: one from the incoming radical and one from the π bond. The other π electron stays on the second carbon.':hints===1&&isCleavage?'Homolysis divides the two bonding electrons equally. Begin both fishhook arrows at the bond.':hints===1?'The radical electron combines with one electron from the adjacent π bond. The other π electron moves onward.':`Move one electron from ${sources.find(s=>s.key===m[0]).label.toLowerCase()} to ${targets.find(t=>t.key===m[1]).label.toLowerCase()}.`);};
$('undo').onclick=()=>{placed.pop();selected=null;say('Last arrow removed.');render();};$('clear').onclick=()=>{placed=[];selected=null;say('Arrows cleared.');render();};$('prev').onclick=()=>{if(index>0){index--;begin();}};$('next').onclick=()=>{if(index<activeBank().length-1){index++;begin();}};$('question').onchange=e=>{index=Number(e.target.value);begin();};document.querySelectorAll('[data-level]').forEach(b=>b.onclick=()=>{level=b.dataset.level;index=0;document.querySelectorAll('[data-level]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));begin();});$('question').innerHTML=Array.from({length:activeBank().length},(_,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');begin();
})();

