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
function bondSegments(b){const ta=rectRadius(b.start,b.ux,b.uy,5),tb=rectRadius(b.end,-b.ux,-b.uy,5);return(b.order===1?[0]:b.order===2?[-5,5]:[-7,0,7]).map(off=>({a:{x:b.start.x+b.ux*ta-b.uy*off,y:b.start.y+b.uy*ta+b.ux*off},b:{x:b.end.x-b.ux*tb-b.uy*off,y:b.end.y-b.uy*tb+b.ux*off},off}))}
function coreRadius(a,angle){const halfW=a.element.length===2?16:10,halfH=13,gap=3,dx=Math.cos(angle),dy=Math.sin(angle);return Math.min(Math.abs(dx)>1e-7?(halfW+gap)/Math.abs(dx):Infinity,Math.abs(dy)>1e-7?(halfH+gap)/Math.abs(dy):Infinity)}
function LPsvg(s){const dx=-Math.sin(s.angle)*3.6,dy=Math.cos(s.angle)*3.6;return `<g class="lone-pair"><circle cx="${s.x-dx}" cy="${s.y-dy}" r="2.25"/><circle cx="${s.x+dx}" cy="${s.y+dy}" r="2.25"/></g>`}
function layoutGraph(g){
const atoms=g.atoms.map(n=>{const a={...n};const neighbors=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)));a.hSide=neighbors.reduce((s,n)=>s+n.x-a.x,0)>=0?-1:1;a.halfH=15;if(a.element==='R'){a.displayLabel=orientedGroupLabel(a.label,neighbors[0]?.x??a.x,a.x);a.left=a.right=labelWidth(a.displayLabel)/2}else{a.left=a.right=a.element.length===2?16:11;if(a.h){if(a.hSide<0)a.left+=a.h>1?29:20;else a.right+=a.h>1?29:20}}a.charge=formal(g,n);a.directions=neighbors.map(n=>Math.atan2(n.y-a.y,n.x-a.x));if(a.h)a.directions.push(a.hSide<0?Math.PI:0);return a});
const sources=[],targets=[];atoms.forEach(a=>targets.push({key:'atom:'+a.id,id:a.id,x:a.x,y:a.y,label:a.element==='R'?a.label:a.element+' atom',atom:a}));
function gap(t,dirs){return dirs.length?Math.min(...dirs.map(d=>Math.abs(Math.atan2(Math.sin(t-d),Math.cos(t-d))))):Math.PI}
for(const a of atoms){const dirs=[...a.directions];for(let n=0;n<a.lp;n++){let angle=0,best=-1;for(let i=0;i<24;i++){const t=i*Math.PI/12,score=gap(t,dirs);if(score>best+1e-5){angle=t;best=score}}dirs.push(angle);const rad=rectRadius(a,Math.cos(angle),Math.sin(angle),8.5);sources.push({key:'lp:'+a.id,id:'lp:'+a.id+':'+n,loc:LP(a.id),x:a.x+Math.cos(angle)*rad,y:a.y+Math.sin(angle)*rad,angle,type:'lp',owner:a.id,label:'Lone pair '+(n+1)+' on '+a.element});}}
const bonds=g.bonds.map(b=>{const a=atoms.find(a=>a.id===b.a),c=atoms.find(a=>a.id===b.b),len=dist(a,c),ux=(c.x-a.x)/len,uy=(c.y-a.y)/len;return{...b,start:a,end:c,ux,uy,len,key:'bond:'+keyBond(b.a,b.b)}});
for(const b of bonds){const segments=bondSegments(b),segment=segments[0],mid={x:(segment.a.x+segment.b.x)/2,y:(segment.a.y+segment.b.y)/2};const center={x:mid.x+b.uy*segment.off,y:mid.y-b.ux*segment.off};sources.push({key:b.key,id:b.key,loc:BD(b.a,b.b),x:mid.x,y:mid.y,type:'bond',bond:b,segment,label:(b.order>1?'π':'σ')+' pair in '+b.start.element+'–'+b.end.element+' bond'});targets.push({key:b.key,...center,label:b.start.element+'–'+b.end.element+' bond',bond:b})}

const charges=[];for(const a of atoms.filter(a=>a.charge)){let best;for(const padding of [10.5,13,15.5,18])for(let i=0;i<48;i++){const t=-Math.PI+i*Math.PI/24,rad=rectRadius(a,Math.cos(t),Math.sin(t))+padding,p={x:a.x+Math.cos(t)*rad,y:a.y+Math.sin(t)*rad};let score=(padding-10.5)*10+(p.y>a.y?8:0)+Math.abs(t+Math.PI/4)*.5;
for(const pair of sources.filter(s=>s.type==='lp'))score+=Math.max(0,17-dist(p,pair))*80;
for(const other of atoms){const dx=Math.max(other.x-other.left-p.x,0,p.x-other.x-other.right),dy=Math.max(other.y-other.halfH-p.y,0,p.y-other.y-other.halfH);score+=Math.max(0,12-Math.hypot(dx,dy))*100;if(other.id!==a.id&&dist(p,other)<dist(p,a)+8)score+=1000;}
for(const bond of bonds)for(const seg of bondSegments(bond))score+=Math.max(0,12-segmentDistance(p,seg.a,seg.b))*80;
for(const c of charges)score+=Math.max(0,24-dist(p,c))*100;
if(!best||score<best.score)best={...p,score};}charges.push({...best,value:a.charge,owner:a.id,r:8.5})}

const xs=atoms.flatMap(a=>[a.x-a.left,a.x+a.right]).concat(sources.map(s=>s.x),charges.map(a=>a.x)),ys=atoms.flatMap(a=>[a.y-a.halfH,a.y+a.halfH]).concat(sources.map(s=>s.y),charges.map(a=>a.y));return{atoms,bonds,sources,targets,charges,bounds:{x:Math.min(...xs)-28,y:Math.min(...ys)-32,w:Math.max(...xs)-Math.min(...xs)+56,h:Math.max(...ys)-Math.min(...ys)+64}};
}
function answerMoveSets(q){return[q.moves,...(q.alternativeMoves||[])]}
function sourceMoves(q,s){return answerMoveSets(q).flat().filter(m=>locKey(m.from)===s.key)}
function targetForMove(q,m){if(m.to.type==='lp')return'atom:'+m.to.id;const k=locKey(m.to);if(q.start.bonds.some(b=>'bond:'+keyBond(b.a,b.b)===k))return k;if(m.from.type==='lp')return'atom:'+(m.to.a===m.from.id?m.to.b:m.to.a);throw Error('Unsupported destination')}
function goodArrow(q,a){return answerMoveSets(q).some(set=>set.some(m=>locKey(m.from)===a.source.key&&targetForMove(q,m)===a.target.key))}
function bezier(s,c1,c2,e,t){const u=1-t;return{x:u*u*u*s.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*e.x,y:u*u*u*s.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*e.y}}
function segmentDistance(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)}
const ARROW_HEAD_LENGTH=20,ARROW_HEAD_HALF_WIDTH=8;
function routeArrow(l,s,target,q){
 let best;const direct=Math.atan2(s.y-target.y,s.x-target.x);
 const hardResonance=chemistryTopic(q)==='resonance'&&q.level==='hard';
 const angles=target.atom?[direct,direct-.7,direct+.7,direct-1.2,direct+1.2,-Math.PI/2,Math.PI/2,0,Math.PI]:[Math.atan2(target.bond.ux,-target.bond.uy),Math.atan2(-target.bond.ux,target.bond.uy)];
 const startDirections=s.type==='lp'?[s.angle,s.angle-.75,s.angle+.75].map(a=>({x:Math.cos(a),y:Math.sin(a)})):[{x:s.bond.uy,y:-s.bond.ux},{x:-s.bond.uy,y:s.bond.ux}];
 for(const angle of angles){const out={x:Math.cos(angle),y:Math.sin(angle)},radius=target.atom?coreRadius(target.atom,angle):2.5,e={x:target.x+out.x*radius,y:target.y+out.y*radius};
 const leadChoices=hardResonance?[38,58,82,108,135]:[32,50,70,92],endChoices=hardResonance?[58,82,108,135]:[50,70,92,115];
 for(const startDirection of startDirections)for(const lead of leadChoices)for(const endLead of endChoices){
 const c1={x:s.x+startDirection.x*lead,y:s.y+startDirection.y*lead},c2={x:e.x+out.x*endLead,y:e.y+out.y*endLead};let score=(lead+endLead)*.012;
 const chord={x:e.x-s.x,y:e.y-s.y},side1=chord.x*(c1.y-s.y)-chord.y*(c1.x-s.x),side2=chord.x*(c2.y-s.y)-chord.y*(c2.x-s.x);
 if(side1*side2<0)score+=120;
 score+=Math.max(0,dist(s,c1)+dist(c1,c2)+dist(c2,e)-dist(s,e)*1.45)*1.25;
 if(hardResonance){const mid=bezier(s,c1,c2,e,.5),chordLength=dist(s,e)||1,bow=Math.abs(chord.x*(mid.y-s.y)-chord.y*(mid.x-s.x))/chordLength;score+=Math.max(0,38-bow)*10+Math.max(0,bow-82)*2;}
 if(target.atom)for(const dir of target.atom.directions){const gap=Math.abs(Math.atan2(Math.sin(angle-dir),Math.cos(angle-dir)));score+=Math.max(0,.65-gap)*40}const points=[];
 for(let i=1;i<30;i++){const p=bezier(s,c1,c2,e,i/30);points.push(p);if(l.plus&&dist(p,l.plus)<15)score+=30;
 for(const a of l.atoms){const dx=Math.max(a.x-a.left-p.x,0,p.x-a.x-a.right),dy=Math.max(a.y-a.halfH-p.y,0,p.y-a.y-a.halfH),clearance=Math.hypot(dx,dy);if(clearance<2)score+=50;score+=Math.max(0,30-clearance)*3}
 for(const pair of l.sources.filter(a=>a.type==='lp'&&a.id!==s.id))if(dist(p,pair)<7)score+=15;
 for(const ch of l.charges)if(dist(p,ch)<14)score+=60;
 for(const b of l.bonds){if((b.key===s.key&&dist(p,s)<8)||(b.key===target.key&&dist(p,e)<8))continue;for(const seg of bondSegments(b))if(segmentDistance(p,seg.a,seg.b)<3)score+=12}
 }
 // Include arrowhead wings, not only the curve, in the clearance check.
 const tx=(e.x-c2.x)/endLead,ty=(e.y-c2.y)/endLead;
 const wings=[{x:e.x-ARROW_HEAD_LENGTH*tx+ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty-ARROW_HEAD_HALF_WIDTH*tx},{x:e.x-ARROW_HEAD_LENGTH*tx-ARROW_HEAD_HALF_WIDTH*ty,y:e.y-ARROW_HEAD_LENGTH*ty+ARROW_HEAD_HALF_WIDTH*tx}];
 for(const p of wings){for(const a of l.atoms)if(p.x>a.x-a.left-1&&p.x<a.x+a.right+1&&p.y>a.y-a.halfH&&p.y<a.y+a.halfH)score+=80;for(const pair of l.sources.filter(a=>a.type==='lp'))if(dist(p,pair)<6)score+=20;for(const ch of l.charges)if(dist(p,ch)<13)score+=80}
 if(!best||score<best.score)best={score,start:{x:s.x,y:s.y},c1,c2,e,points,wings,d:`M${s.x} ${s.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${e.x} ${e.y}`};
 }}return best;
}

const layoutCache=new Map();
function layouts(q){if(layoutCache.has(q.id))return layoutCache.get(q.id);const start=layoutGraph(q.start),product=layoutGraph(q.product),routes=new Map();if(chemistryTopic(q)==='acid'){start.plus={x:295,y:180};product.plus=start.plus;}const all=[start.bounds,product.bounds];for(const s of start.sources){const m=sourceMoves(q,s)[0];if(!m)continue;const t=start.targets.find(t=>t.key===targetForMove(q,m));if(!t)throw Error('No target '+q.id);const r=routeArrow(start,s,t,q);routes.set(s.id+'>'+t.key,r);const pts=[s,...r.points,r.e];all.push({x:Math.min(...pts.map(p=>p.x))-15,y:Math.min(...pts.map(p=>p.y))-15,w:Math.max(...pts.map(p=>p.x))-Math.min(...pts.map(p=>p.x))+30,h:Math.max(...pts.map(p=>p.y))-Math.min(...pts.map(p=>p.y))+30})}let x=Math.min(...all.map(b=>b.x)),y=Math.min(...all.map(b=>b.y)),right=Math.max(...all.map(b=>b.x+b.w)),bottom=Math.max(...all.map(b=>b.y+b.h));const view={x,y,w:right-x,h:bottom-y};const result={start,product,routes,view};layoutCache.set(q.id,result);return result}
function molecule(l,q){let html='';for(const b of l.bonds)for(const segment of bondSegments(b))html+=`<line class="bond" x1="${segment.a.x}" y1="${segment.a.y}" x2="${segment.b.x}" y2="${segment.b.y}"/>`;

for(const a of l.atoms){if(a.element==='R'){html+=`<text class="atom-label" x="${a.x}" y="${a.y}">${chemicalText(a.displayLabel||a.label)}</text>`}else{html+=`<text class="atom-label" x="${a.x}" y="${a.y}">${a.element}</text>`;if(a.h)html+=`<text class="atom-label" style="text-anchor:${a.hSide<0?'end':'start'}" x="${a.x+a.hSide*13}" y="${a.y}">H${a.h>1?`<tspan baseline-shift="sub" font-size="17">${a.h}</tspan>`:''}</text>`}}
html+=l.sources.filter(s=>s.type==='lp').map(LPsvg).join('');html+=l.charges.map(c=>`<g class="charge-symbol" data-charge-owner="${esc(c.owner)}" role="img" aria-label="${c.value>0?'Positive':'Negative'} formal charge on ${esc(l.atoms.find(a=>a.id===c.owner).element)}"><circle cx="${c.x}" cy="${c.y}" r="8.5"/><path d="M${c.x-3.8} ${c.y} H${c.x+3.8}${c.value>0?` M${c.x} ${c.y-3.8} V${c.y+3.8}`:''}"/></g>`).join('');if(chemistryTopic(q)==='acid')html+='<text class="reaction-plus" x="295" y="180">+</text>';return html}
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
function mountReaction(startMarkup,ls,q){const v=ls.view,gap=130,total=2*v.w+gap;const center=v.h/2;const connector=relationArrow(chemistryTopic(q)==='acid').replace('viewBox="0 0 48 30"',`x="${v.w+15}" y="${center-18}" width="100" height="36" viewBox="0 0 48 30"`);$('drawing').innerHTML=`<svg class="reaction-canvas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${v.h}" role="group" aria-label="${esc(q.title)}"><svg id="board" x="0" y="0" width="${v.w}" height="${v.h}" viewBox="${v.x} ${v.y} ${v.w} ${v.h}" overflow="visible" role="group" aria-label="Starting structure: answer here">${startMarkup}</svg>${connector}<svg x="${v.w+gap}" y="0" width="${v.w}" height="${v.h}" viewBox="${v.x} ${v.y} ${v.w} ${v.h}" role="img" aria-label="Target structure">${molecule(ls.product,q)}</svg></svg>`;$('product-drawing').innerHTML='';}
