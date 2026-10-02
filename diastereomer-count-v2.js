(()=>{
// Graphs for the interactive stereocentre-first questions. All structures
// have asymmetric substituent patterns or unequal ring substituents, so none
// has a meso form.
const sideGroups=['OH','NH₂','Br','Cl','F','I','CH₃','CF₃'];
const atom=(id,x,y,label='',element='C')=>({id,x,y,label,element});
const edge=(a,b,order=1,stereo='')=>({a,b,order,stereo});

function chain(level,i){
 const n=level==='easy'?(i<6?1:2):level==='moderate'?(i<10?2:3):(i<6?4:i<12?5:6);
 // Unlabelled line ends are methyl carbons. The carbonyl carbon, when
 // present, is bonded to carbons on both sides (a ketone).
 const length=n+4,step=Math.min(68,504/(length-1)),rise=step/Math.sqrt(3),left=320-(length-1)*step/2;
 const atoms=Array.from({length},(_,j)=>atom(`c${j}`,left+j*step,195+(j%2?rise/2:-rise/2)));
 const bonds=Array.from({length:length-1},(_,j)=>edge(`c${j}`,`c${j+1}`,i%5===1&&j===0?2:1));
 if(i%5===0){
  atoms.push(atom('oxo',atoms[1].x,atoms[1].y+(atoms[1].y>195?60:-60),'O','O'));
  bonds.push(edge('c1','oxo',2));
 }
 const centers=[];
 for(let j=0;j<n;j++){
  // In simple one-centre chains, put the centre off the midpoint so its
  // two carbon-chain paths remain different without an artificial end group.
  const position=n===1&&i%5>=2?j+1:j+2;
  const id=`c${position}`,base=atoms[position],label=sideGroups[(i+j*2)%sideGroups.length];
  const element=label==='OH'?'O':label==='NH₂'?'N':label==='CH₃'||label==='CF₃'?'C':label;
  atoms.push(atom(`group${j}`,base.x,base.y+(base.y>195?61:-61),label,element));
  bonds.push(edge(id,`group${j}`));
  centers.push(id);
 }
 return{level,kind:'Functionalized chain',atoms,bonds,centers,answer:2**n};
}

function ring(level,i){
 const n=level==='easy'?2:3,r=80;
 const variant=i-(level==='easy'?14:12);
 const atoms=Array.from({length:6},(_,j)=>{
  const angle=(-90+j*60)*Math.PI/180;
  return atom(`r${j}`,320+Math.cos(angle)*r,195+Math.sin(angle)*r);
 });
 const bonds=Array.from({length:6},(_,j)=>edge(`r${j}`,`r${(j+1)%6}`));
 const centers=[0,2,4].slice(0,n).map(j=>`r${j}`);
 centers.forEach((id,j)=>{
  const carbon=atoms[+id.slice(1)],angle=(-90+(+id.slice(1))*60)*Math.PI/180;
  const groups=['OH','NH₂','Br','Cl','F','I','CH₃','CF₃'];
  const label=groups[(variant+j*2)%groups.length];
  const element=label==='OH'?'O':label==='NH₂'?'N':label==='CH₃'||label==='CF₃'?'C':label;
  atoms.push(atom(`ringGroup${j}`,carbon.x+Math.cos(angle)*60,carbon.y+Math.sin(angle)*60,label,element));
  bonds.push(edge(id,`ringGroup${j}`));
 });
 return{level,kind:'Substituted cyclohexane',atoms,bonds,centers,answer:2**n};
}

function sterol(level,i){
 const atoms=[],bonds=[],lookup=new Map(),seen=new Set();
 const add=(x,y)=>{const key=`${x},${y}`;if(!lookup.has(key)){const id=`s${atoms.length}`;lookup.set(key,id);atoms.push(atom(id,x,y))}return lookup.get(key)};
 const connect=(a,b,order=1)=>{const key=[a,b].sort().join(':');if(!seen.has(key)){seen.add(key);bonds.push(edge(a,b,order))}};
 const cycle=points=>{const ids=points.map(([x,y])=>add(x,y));ids.forEach((id,j)=>connect(id,ids[(j+1)%ids.length]));};
 cycle([[130,115],[186,147],[186,212],[130,245],[74,212],[74,147]]);
 cycle([[243,115],[299,147],[299,212],[243,245],[186,212],[186,147]]);
 cycle([[356,115],[412,147],[412,212],[356,245],[299,212],[299,147]]);
 cycle([[412,147],[466,127],[496,180],[466,231],[412,212]]);
 const id=(x,y)=>lookup.get(`${x},${y}`);
 const double=bonds.find(b=>[b.a,b.b].sort().join(':')===[id(186,147),id(243,115)].sort().join(':'));
 double.order=2;
 const junctions=[[186,212],[299,147],[299,212],[412,147],[412,212]];
 const centers=[id(74,212),...junctions.map(([x,y])=>id(x,y)),id(496,180)];
 const label=['OH','Cl','Br','NH₂'][i%4],element=label==='OH'?'O':label==='NH₂'?'N':label;
 atoms.push(atom('sterolGroup',24,242,label,element));
 bonds.push(edge(id(74,212),'sterolGroup'));
 atoms.push(atom('side',545,145),atom('sideMe',545,80,'CH₃'),atom('tail',588,180),atom('tailA',623,151),atom('tailB',623,215));
 bonds.push(edge(id(496,180),'side'),edge('side','sideMe'),edge('side','tail'),edge('tail','tailA'),edge('tail','tailB'));
 centers.push('side');
 // Leave space for left-facing condensed formulas, including H₂N.
 // Scale the entire graph uniformly so angles and selection targets agree.
 atoms.forEach(a=>{a.x=320+(a.x-320)*.94;a.y=195+(a.y-195)*.94});
 return{level,kind:'Sterol-like tetracycle',atoms,bonds,centers,answer:256};
}

function question(level,i){
 if(level==='hard'&&i>=16)return sterol(level,i-16);
 if((level==='easy'&&i>=14)||(level==='moderate'&&i>=12))return ring(level,i);
 return chain(level,i);
}
globalThis.diastereomerCountBanks=Object.fromEntries(['easy','moderate','hard'].map(level=>[level,Array.from({length:20},(_,i)=>question(level,i))]));
})();
