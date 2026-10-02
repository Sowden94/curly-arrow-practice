(()=>{
const atom=(id,x,y,label='',element='C')=>({id,x,y,label,element});
const edge=(a,b,stereo='')=>({a,b,order:1,stereo});
const flip=s=>s==='wedge'?'dash':s==='dash'?'wedge':s;
const clone=x=>JSON.parse(JSON.stringify(x));
const answers=['enantiomers','same','diastereomers','constitutional','same','diastereomers','enantiomers','constitutional','diastereomers','same','constitutional','enantiomers','same','constitutional','enantiomers','diastereomers','constitutional','enantiomers','diastereomers','same'];
function chain(level,i){
 const n=level==='hard'&&i%3===0?7:6,step=n===7?41:49,rise=step/Math.sqrt(3);
 const atoms=Array.from({length:n},(_,j)=>atom(`c${j}`,320+(j-(n-1)/2)*step,205+(j%2?-rise/2:rise/2)));
 const bonds=Array.from({length:n-1},(_,j)=>edge(`c${j}`,`c${j+1}`));
 const centers=n===7?['c2','c3','c4']:['c3','c4'];
 const groups=[['Br','OH'],['Cl','NH₂'],['F','Br'],['OH','Cl'],['I','OH']][i%5];
 centers.forEach((id,j)=>{
  const a=atoms.find(a=>a.id===id),label=j===2?['F','I','OH','Br','Cl'][i%5]:groups[j],dir=a.y<205?-1:1;
  atoms.push(atom(`g${j}`,a.x,a.y+dir*55,label,label==='OH'?'O':label==='NH₂'?'N':label));
  bonds.push(edge(id,`g${j}`,(i+j)%2?'dash':'wedge'));
  if(level==='hard'&&i%3===1&&j===0){
   const methyl=atoms[atoms.length-1];methyl.label='';methyl.element='C';methyl.x=a.x+27;methyl.y=a.y-47;
   atoms.push(atom('explicitH',a.x-27,a.y-47,'H','H'));
   bonds.push(edge(id,'explicitH',flip(bonds[bonds.length-1].stereo)));
  }
 });
 return{kind:'Substituted chain',atoms,bonds,centers};
}
function ring(level,i,answer){
 const atoms=Array.from({length:6},(_,j)=>{const angle=(-90+j*60)*Math.PI/180;return atom(`r${j}`,320+55*Math.cos(angle),210+55*Math.sin(angle))});
 const bonds=Array.from({length:6},(_,j)=>edge(`r${j}`,`r${(j+1)%6}`));
 const centers=answer==='diastereomers'||level!=='easy'?['r0','r2']:['r0'];
 centers.forEach((id,j)=>{const a=atoms[+id.slice(1)],angle=(-90+(+id.slice(1))*60)*Math.PI/180,label=j?'OH':['Br','Cl','I','F'][i%4];atoms.push(atom(`g${j}`,a.x+50*Math.cos(angle),a.y+50*Math.sin(angle),label,j?'O':label));bonds.push(edge(id,`g${j}`,(i+j)%2?'dash':'wedge'))});
 const a=atoms[5];
 for(const [j,angle] of [[0,-150],[1,150]]){atoms.push(atom(`m${j}`,a.x+40*Math.cos(angle*Math.PI/180),a.y+40*Math.sin(angle*Math.PI/180)));bonds.push(edge(a.id,`m${j}`))}
 return{kind:'Substituted cyclohexane',atoms,bonds,centers};
}
function moveGroup(graph){
 if(graph.kind==='Substituted chain'){
  const bond=graph.bonds.find(b=>b.b==='g1'),old=bond.a,a=graph.atoms.find(a=>a.id==='c1'),g=graph.atoms.find(a=>a.id==='g1');
  bond.a='c1';g.x=a.x;g.y=a.y-55;graph.centers=graph.centers.map(id=>id===old?'c1':id);
 }else{
  const old=graph.atoms.find(a=>a.id==='r5'),a=graph.atoms.find(a=>a.id==='r4');
  for(const id of ['m0','m1']){const b=graph.bonds.find(b=>b.b===id),m=graph.atoms.find(x=>x.id===id);b.a='r4';const angle=(id==='m0'?180:240)*Math.PI/180;m.x=a.x+40*Math.cos(angle);m.y=a.y+40*Math.sin(angle);}
 }
}
function transform(graph,type){
 const sx=type===1||type===2?-1:1,sy=type===2||type===3?-1:1;
 graph.atoms.forEach(a=>{a.x=320+(a.x-320)*sx;a.y=205+(a.y-205)*sy});
 if(sx*sy<0)graph.bonds.forEach(b=>b.stereo=flip(b.stereo));
}
function make(level,i){
 const answer=answers[(i+{easy:0,moderate:4,hard:8}[level])%20];
 const left=(i>=12?ring:chain)(level,i,answer),right=clone(left);
 if(answer==='constitutional')moveGroup(right);
 else if(answer==='enantiomers')right.bonds.forEach(b=>b.stereo=flip(b.stereo));
 else if(answer==='diastereomers'){const center=right.centers[i%right.centers.length];right.bonds.filter(b=>b.a===center&&b.stereo).forEach(b=>b.stereo=flip(b.stereo))}
 transform(right,level==='easy'?(i%3===0?2:1):1+i%3);
 const explanation=answer==='same'?'The connectivity and configuration at every corresponding stereogenic centre are unchanged. Reorienting the drawing gives the same molecule.':answer==='enantiomers'?'The connectivity is the same, and every corresponding stereogenic centre has the opposite configuration. These are enantiomers.':answer==='diastereomers'?'The connectivity is the same. Some corresponding stereogenic centres invert and others retain their configuration, so these are diastereomers.':'The molecular formula is the same, but a substituent is attached to a different carbon. These are constitutional isomers.';
 return{level,leftGraph:left,rightGraph:right,answer,explanation};
}
globalThis.stereoisomerPairBanks=Object.fromEntries(['easy','moderate','hard'].map(level=>[level,Array.from({length:20},(_,i)=>make(level,i))]));
})();
