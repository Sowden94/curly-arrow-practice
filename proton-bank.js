/* Proton transfer, including two-arrow steps and three-arrow enolate formation. */
const PROTON_BANK=[];
function makeProton(level,index,acidType,baseType,r='Me'){
 const g={atoms:[],bonds:[]},atom=(id,element,x,y,h=0,lp=0,label=element)=>g.atoms.push({id,element,x,y,h,lp,label}),bond=(a,b,order=1)=>g.bonds.push({a,b,order}),group=(id,label,x,y,parent)=>{atom(id,'R',x,y,0,0,label);bond(parent,id);};
 const bs={hydroxide:['O',1,3],methoxide:['O',0,3],water:['O',2,2],ammonia:['N',3,1],methylamine:['N',2,1],dimethylamine:['N',1,1],trimethylamine:['N',0,1],amide:['N',2,2]}[baseType];
 atom('base',bs[0],130,220,bs[1],bs[2]);
 const methylCount={methoxide:1,methylamine:1,dimethylamine:2,trimethylamine:3}[baseType]||0;
 for(let j=0;j<methylCount;j++){const angle=[150,270,30][j]*Math.PI/180;group('base-me'+j,'Me',130+110*Math.cos(angle),220+110*Math.sin(angle),'base');}
 const simpleAcid=['HCl','HBr','HI','hydronium','ammonium','methylammonium','dimethylammonium','trimethylammonium'].includes(acidType);
 atom('proton','H',simpleAcid?340:354.737,simpleAcid?220:275);let acidElement='O',acidH=0,acidLP=2;
 if(['HCl','HBr','HI'].includes(acidType)){acidElement={HCl:'Cl',HBr:'Br',HI:'I'}[acidType];acidLP=3;}
 if(acidType==='hydronium'){acidH=2;acidLP=1;}
 if(acidType==='ammonium'){acidElement='N';acidH=3;acidLP=0;}
 if(['methylammonium','dimethylammonium','trimethylammonium'].includes(acidType)){acidElement='N';acidH={methylammonium:2,dimethylammonium:1,trimethylammonium:0}[acidType];acidLP=0;}
 if(['ketoneOxonium','amideOxonium'].includes(acidType))acidLP=1;
 if(acidType==='iminium'){acidElement='N';acidLP=0;}
 if(['alphaKetone','alphaEster'].includes(acidType)){acidElement='C';acidH=2;acidLP=0;}
 atom('acid',acidElement,450,220,acidH,acidLP);bond('acid','proton');
 if(['phenol','methanol'].includes(acidType))group('acid-r',acidType==='phenol'?'Ph':'Me',545.263,275,'acid');
 if(acidType==='carboxylic'||['alphaKetone','alphaEster'].includes(acidType)){
  atom('acyl','C',545.263,275);bond('acid','acyl');atom('carbonyl-o','O',640.526,220,0,2);bond('acyl','carbonyl-o',2);
  if(acidType==='alphaEster'){atom('ester-o','O',545.263,385,0,2);bond('acyl','ester-o');group('ester-me','Me',640.526,440,'ester-o');}else group('acid-r',r,545.263,385,'acyl');
 }
 if(['ketoneOxonium','amideOxonium','iminium'].includes(acidType)){
  atom('acyl','C',450,110);bond('acid','acyl',2);group('acid-r',r,354.737,55,'acyl');
  if(acidType==='amideOxonium'){atom('amide-n','N',545.263,55,2,1);bond('acyl','amide-n');}else group('acid-r2','Me',545.263,55,'acyl');
  if(acidType==='iminium')group('acid-me0','Me',545.263,275,'acid');
 }
 const acidMethyls={methylammonium:1,dimethylammonium:2,trimethylammonium:3}[acidType]||0;
 for(let j=0;j<acidMethyls;j++){const angle=[30,-90,-210][j]*Math.PI/180;group('acid-me'+j,'Me',450+110*Math.cos(angle),220+110*Math.sin(angle),'acid');}
 expandAdditionGroups(g);
 const carbonAcid=acidElement==='C',enolate=carbonAcid&&Math.floor(index/5)%2===0;
 const moves=enolate?[move(LP('base'),BD('base','proton')),move(BD('acid','proton'),BD('acid','acyl')),move(BD('acyl','carbonyl-o'),LP('carbonyl-o'))]:[move(LP('base'),BD('base','proton')),move(BD('acid','proton'),LP('acid'))],product=apply(g,moves);
 const transferred=product.atoms.find(a=>a.id==='proton');transferred.x=225.263;transferred.y=275;
 // Mirror both axes independently, retaining the atoms of each original fragment.
 for(const graph of [g,product])for(const a of graph.atoms){if(index%2)a.x=600-a.x;if(Math.floor(index/2)%2)a.y=440-a.y;}
 PROTON_BANK.push({id:`proton-${level}-${index+1}`,topic:'proton',level,acidType,baseType,enolate,start:g,product,moves,donor:'base',acid:'acid',proton:'proton',title:'Draw the curly arrows for proton transfer.',productLabel:'Conjugate Acid + Conjugate Base',hint:enolate?'Send a base lone pair to H. Move the C–H bond pair into the adjacent C–C bond, and move the carbonyl π pair onto O. All three arrows are needed.':'Send a base lone pair to the labelled H. Move the original '+acidElement+'–H bond pair back onto '+(carbonAcid?'carbon':acidElement)+'. Both arrows are needed.',explanation:enolate?'The base removes H while the C–H pair forms a C=C bond and the carbonyl π pair moves onto oxygen. The enolate is shown with its negative charge on O. This combines proton transfer with resonance; total charge is conserved.':'The base lone pair forms a bond to H. The original '+acidElement+'–H electron pair stays with '+(carbonAcid?'carbon':acidElement)+', producing the conjugate acid and conjugate base. Total charge is conserved.'+(carbonAcid?' The conjugate base is shown as one valid resonance form.':'')});
}
for(let i=0;i<20;i++)makeProton('easy',i,['HCl','HBr','HI','hydronium','ammonium'][i%5],['hydroxide','methoxide','ammonia','methylamine'][Math.floor(i/5)]);
for(let i=0;i<20;i++)makeProton('moderate',i,['carboxylic','phenol','methylammonium','dimethylammonium','trimethylammonium'][i%5],i%5===0?['water','ammonia','dimethylamine','trimethylamine'][Math.floor(i/5)]:['hydroxide','methoxide','amide','hydroxide'][Math.floor(i/5)],['Me','Et','Ph','iPr'][Math.floor(i/5)]);
for(let i=0;i<20;i++)makeProton('hard',i,['ketoneOxonium','amideOxonium','iminium','alphaKetone','alphaEster'][i%5],i%5>=3?'amide':['water','ammonia','dimethylamine','trimethylamine'][Math.floor(i/5)],['Me','Et','Ph','iPr'][Math.floor(i/5)]);
globalThis.PROTON_BANK=PROTON_BANK;
