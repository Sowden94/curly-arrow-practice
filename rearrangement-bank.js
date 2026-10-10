/* One adjacent 1,2 migration: the sigma-bond pair moves with H or Me. */
const REARRANGEMENT_BANK=[];
function makeRearrangement(level,index){
 const hydride=index%2===0,L=96,dx=L/2,dy=L*Math.sqrt(3)/2,g={atoms:[],bonds:[]};
 const atom=(id,element,x,y,h=0,label=element)=>g.atoms.push({id,element,x,y,h,lp:0,label}),bond=(a,b)=>g.bonds.push({a,b,order:1});
 const substituent=(id,parent,x,y,type)=>{
  if(type==='Ph'){const p=g.atoms.find(a=>a.id===parent);atom(id,'R',p.x+(x-p.x)*.75,p.y+(y-p.y)*.75,0,'Ph');bond(parent,id);return;}
  atom(id,'C',x,y,type==='Me'?3:type==='Et'?2:1);bond(parent,id);
  const p=g.atoms.find(a=>a.id===parent),angle=Math.atan2(y-p.y,x-p.x),directions=type==='Et'?[angle+(x<p.x?(y<p.y?-1:1):-1)*Math.PI/3]:[angle-Math.PI/3,angle+Math.PI/3];
  if(type!=='Me')for(let j=0;j<directions.length;j++){atom(id+'-'+j,'C',x+L*Math.cos(directions[j]),y+L*Math.sin(directions[j]),3);bond(id,id+'-'+j);}
 };
 atom('d','C',300,220);atom('c','C',300+L,220,1);bond('d','c');
 const variant=Math.floor(index/2),patterns={
  easy:[['Me','Me','Me'],['Me','Me','Et'],['Et','Me','Me'],['Me','Me','iPr'],['iPr','Me','Me']],
  moderate:[['Et','Me','Et'],['iPr','Me','Et'],['Et','Et','Me'],['Et','Et','Et'],['iPr','Me','iPr'],['iPr','Et','Me'],['iPr','Et','Et'],['iPr','Et','iPr'],['iPr','iPr','Et'],['iPr','iPr','iPr']],
  hard:[['Ph','Me','Me'],['Ph','Me','Et'],['Ph','Me','iPr'],['Ph','Et','Me'],['Ph','Et','Et'],['Ph','Et','iPr'],['Ph','iPr','Me'],['Ph','iPr','Et'],['Ph','iPr','iPr'],['Ph','Ph','Me']]
 },[r1,r2,r3]=patterns[level][variant%patterns[level].length];
 // Keep the skeletal framework on the standard 120-degree zigzag lattice.
 substituent('r1','d',300-dx,220-dy,r1);substituent('r2','d',300-dx,220+dy,r2);substituent('r3','c',300+L+dx,220+dy,r3);
 // An explicit migrating H/Me occupies the open sector as a compact labelled bond.
 const migrationLength=72;
 atom('m',hydride?'H':'C',300+migrationLength/2,220-migrationLength*Math.sqrt(3)/2,hydride?0:3);bond('d','m');
 const moves=[move(BD('d','m'),BD('c','m'))],product=apply(g,moves),m=product.atoms.find(a=>a.id==='m');m.x+=L;
 const competingMoves=[],decision=(level==='easy'?[0,1,2,4]:level==='moderate'?[0,1,2,3,5,6]:[0,1,3,4,6,7,9]).includes(variant)&&hydride;
 if(decision){
  // Expose an alternative adjacent C-H bond, without changing the formula.
  const a=g.atoms.find(a=>a.id==='r3'),p=product.atoms.find(a=>a.id==='r3');a.h--;p.h--;
  const h={id:'hAlt',element:'H',x:a.x-36,y:a.y+36*Math.sqrt(3),h:0,lp:0,label:'H'};
  g.atoms.push(h);product.atoms.push({...h});g.bonds.push({a:'r3',b:'hAlt',order:1});product.bonds.push({a:'r3',b:'hAlt',order:1});
  const preferred=level==='hard'?'tertiary benzylic':'tertiary',other=r3==='Me'?'primary':'secondary';
  competingMoves.push({move:move(BD('r3','hAlt'),BD('c','hAlt')),feedback:`That hydride shift leaves a ${other} carbocation on the other adjacent carbon. The competing migration gives the more stable ${preferred} carbocation.`});
  for(const id of ['r1','r2'])competingMoves.push({move:move(BD('d',id),BD('c',id)),feedback:`That ${g.atoms.find(a=>a.id===id).element==='R'?'phenyl':'alkyl'} shift leaves a secondary carbocation. The hydride shift gives the more stable ${preferred} carbocation.`});
  if(r3==='Et')competingMoves.push({move:move(BD('r3','r3-0'),BD('c','r3-0')),feedback:`That methyl shift leaves a primary carbocation. The competing migration gives the more stable ${preferred} carbocation.`});
 }
 const alternatives=[];if(!hydride)for(const a of g.atoms.filter(a=>a.id!=='m'&&a.element==='C'&&a.h===3&&g.bonds.some(b=>keyBond(b.a,b.b)===keyBond('d',a.id))))alternatives.push([move(BD('d',a.id),BD('c',a.id))]);
 const angle=[0,180,60,-60,120,-120,90,-90,30,-30][variant]*Math.PI/180;
 for(const graph of [g,product])for(const a of graph.atoms){const x=a.x-348,y=a.y-220;a.x=348+x*Math.cos(angle)-y*Math.sin(angle);a.y=220+x*Math.sin(angle)+y*Math.cos(angle);}
 REARRANGEMENT_BANK.push({id:`rearrangement-${level}-${index+1}`,topic:'rearrangement',level,kind:hydride?'hydride':'methyl',start:g,product,moves,alternativeMoves:alternatives,acceptor:'c',donor:'d',migrating:'m',benzylic:r1==='Ph',orientation:angle,competingMoves,decision,title:'Draw the curly arrow for the rearrangement.',productLabel:'Rearranged Carbocation',hint:'Start at the '+(hydride?'C–H':'migrating C–C')+' bond, then end at the adjacent positively charged carbon. The bond pair moves with '+(hydride?'H':'Me')+'.',explanation:'A 1,2-'+(hydride?'hydride':'methyl')+' shift transfers the '+(hydride?'C–H':'C–C')+' bond pair to the adjacent carbocation. The positive charge moves to the carbon that lost the group, giving a '+(r1==='Ph'?'tertiary benzylic':'tertiary')+' carbocation from a secondary carbocation.'+(decision?' Migration from the other side would give a less stable '+(r3==='Me'?'primary':'secondary')+' carbocation.':'')});
}
// Fresh practice order on each visit: retain a balanced bank without an alternating pattern.
function mixRearrangements(questions){
 const valid=items=>{let run=1,switches=0;for(let i=1;i<items.length;i++){
  if(items[i].orientation===items[i-1].orientation)return false;
  if(items[i].kind===items[i-1].kind){if(++run>3)return false;}else{run=1;switches++;}
 }return switches>=7&&switches<=13;};
 for(let attempt=0;attempt<1000;attempt++){
  const mixed=questions.slice();for(let i=mixed.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[mixed[i],mixed[j]]=[mixed[j],mixed[i]];}
  if(valid(mixed))return mixed;
 }
 return [0,7,12,4,19,9,2,17,6,14,11,1,16,8,5,18,3,13,10,15].map(i=>questions[i]);
}
for(const level of ['easy','moderate','hard']){
 const offset=REARRANGEMENT_BANK.length;for(let i=0;i<20;i++)makeRearrangement(level,i);
 const mixed=mixRearrangements(REARRANGEMENT_BANK.splice(offset));
 mixed.forEach((q,i)=>q.id=`rearrangement-${level}-${i+1}`);REARRANGEMENT_BANK.push(...mixed);
}
globalThis.REARRANGEMENT_BANK=REARRANGEMENT_BANK;
