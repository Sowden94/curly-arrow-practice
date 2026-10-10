/* One elementary nucleophilic addition step. Products are derived from electron-pair moves. */
const clone=x=>JSON.parse(JSON.stringify(x)),keyBond=(a,b)=>[a,b].sort().join('~');
const LP=id=>({type:'lp',id}),BD=(a,b)=>({type:'bond',a,b}),move=(from,to)=>({from,to});
function formal(g,a){if(a.element==='R')return 0;return {H:1,C:4,N:5,O:6,Cl:7,Br:7,I:7}[a.element]-2*a.lp-a.h-g.bonds.filter(b=>b.a===a.id||b.b===a.id).reduce((s,b)=>s+b.order,0);}
function apply(g,moves){const p=clone(g);for(const m of moves)for(const [loc,delta]of [[m.from,-1],[m.to,1]]){if(loc.type==='lp')p.atoms.find(a=>a.id===loc.id).lp+=delta;else{let b=p.bonds.find(b=>keyBond(b.a,b.b)===keyBond(loc.a,loc.b));if(!b){b={a:loc.a,b:loc.b,order:0};p.bonds.push(b);}b.order+=delta;}}p.bonds=p.bonds.filter(b=>b.order>0);return p;}
const ADDITION_BANK=[];
function additionQuestion(level,index,type,donorType,r='Me'){
 if(donorType==='alcohol')donorType='alkoxide';
 const g={atoms:[],bonds:[]},a=(id,element,x,y,h=0,lp=0,label)=>{g.atoms.push({id,element,x,y,h,lp,label:label||element});return id;},b=(a,b,order=1)=>g.bonds.push({a,b,order}),group=(id,label,x,y,center)=>{a(id,'R',x,y,0,0,label);b(center,id);};
 const donorSpec={bromide:['Br',0,4],chloride:['Cl',0,4],hydroxide:['O',1,3],alkoxide:['O',0,3],water:['O',2,2],alcohol:['O',1,2],ammonia:['N',3,1],amine:['N',2,1],secondaryAmine:['N',1,1],cyanide:['C',0,1],carbanion:['C',3,1]}[donorType];
 a('nu',donorSpec[0],130,220,donorSpec[1],donorSpec[2]);
 if(['alkoxide','alcohol','amine','secondaryAmine'].includes(donorType))group('nu-r','Me',34.737,275,'nu');
 if(donorType==='secondaryAmine')group('nu-r2','Me',34.737,165,'nu');
 if(donorType==='cyanide'){a('nu-n','N',20,220,0,1);b('nu','nu-n',3);}
 const c=a('c','C',460,220,type==='secondaryCation'||type==='aldehyde'?1:0);
 let piAtom;
 if(type==='tertiaryCation'){group('r1',r,460,110,c);group('r2','Me',555.263,275,c);group('r3','Me',364.737,275,c);}
 else if(type==='secondaryCation'){group('r1',r,460,110,c);group('r2','Me',555.263,275,c);}
 else if(type==='nitrile'){a('x','N',460,110,0,1);b(c,'x',3);group('r1',r,460,330,c);piAtom='x';}
 else{
  const imine=type==='imine'||type==='iminium';a('x',imine?'N':'O',460,110,type==='imine'?1:0,type==='iminium'?0:imine?1:2);b(c,'x',2);piAtom='x';group('r1',r,555.263,275,c);
  if(type==='iminium'){group('n-r1','Me',364.737,55,'x');group('n-r2','Me',555.263,55,'x');}
  if(type!=='aldehyde'){
   if(type==='acylChloride'){a('r2','Cl',364.737,275,0,3);b(c,'r2');}
   else if(type==='ester'){a('r2','O',364.737,275,0,2);b(c,'r2');group('ester-r','Me',364.737,385,'r2');}
   else group('r2','Me',364.737,275,c);
  }
 }
 if(donorType==='amine'&&['aldehyde','secondaryCation'].includes(type))for(const atom of g.atoms.filter(a=>!a.id.startsWith('nu')))atom.x=920-atom.x;
 const moves=[move(LP('nu'),BD('nu','c'))];if(piAtom)moves.push(move(BD('c',piAtom),LP(piAtom)));
 const product=apply(g,moves),get=id=>product.atoms.find(a=>a.id===id);
 // Keep the electrophile in its original orientation: only the incoming nucleophile moves.
 // The original carbonyl/imine heteroatom and existing carbon skeleton retain their coordinates.
 if(type==='aldehyde'||type==='secondaryCation'||type==='nitrile'){
  get('nu').x=364.737;get('nu').y=275;
 }else {get('nu').x=460;get('nu').y=330;}
 // A nitrile changes from linear to trigonal on addition; retain nitrogen above carbon
 // and rotate the existing substituent into the lower-right sector by the required 60 degrees.
 if(type==='nitrile'){get('r1').x=555.263;get('r1').y=275;}
 // Leave a clear side for the inline NH2 label and attach all carbon bonds at N.
 if(donorType==='amine'){
  if(type==='nitrile'){get('nu').x=555.263;get('nu').y=275;get('r1').x=364.737;get('r1').y=275;}
  else if(['aldehyde','secondaryCation'].includes(type)){get('nu').x=555.263;get('nu').y=275;}
  else {get('nu').x=460;get('nu').y=330;}
 }
 if(get('nu-r2')&&r==='iPr'&&type!=='nitrile'&&type!=='aldehyde'&&type!=='secondaryCation')get('nu').y=385;
 if(get('nu-r')){const nu=get('nu'),c=get('c'),angle=Math.atan2(c.y-nu.y,c.x-nu.x)+(get('nu-r2')||(donorType==='amine'&&['aldehyde','secondaryCation'].includes(type))?1:-1)*2*Math.PI/3;get('nu-r').x=nu.x+110*Math.cos(angle);get('nu-r').y=nu.y+110*Math.sin(angle);}
 if(get('nu-r2')){const nu=get('nu'),c=get('c'),angle=Math.atan2(c.y-nu.y,c.x-nu.x)-2*Math.PI/3;get('nu-r2').x=nu.x+110*Math.cos(angle);get('nu-r2').y=nu.y+110*Math.sin(angle);}
 if(get('nu-n')){const nu=get('nu'),c=get('c');get('nu-n').x=nu.x+(nu.x-c.x);get('nu-n').y=nu.y+(nu.y-c.y);}
 expandAdditionGroups(g);expandAdditionGroups(product);
 // Vary the side of the incoming nucleophile without changing atom mapping.
 const mirrorX=index%2===1&&!(donorType==='amine'&&['aldehyde','secondaryCation','nitrile'].includes(type));
 for(const graph of [g,product])if(mirrorX)for(const atom of graph.atoms)atom.x=590-atom.x;
 const explanation=piAtom?'The nucleophile donates a lone pair to carbon. At the same time, one π pair moves to '+(get(piAtom).element==='O'?'oxygen':'nitrogen')+', so carbon does not exceed an octet. This is the addition intermediate; no proton transfer or leaving-group loss is included.':'A lone pair forms the new bond to the carbocation. Carbon gains an octet and the total formal charge is conserved.';
 ADDITION_BANK.push({id:`addition-${level}-${index+1}`,topic:'addition',level,type,donorType,start:g,product,moves,donor:'nu',acceptor:'c',piAtom,title:'Draw the curly arrow(s) for this addition step.',explanation,hint:piAtom?'Form the new bond from a nucleophilic lone pair. Carbon already has an octet, so a second arrow must move one π pair to the heteroatom.':'Begin at a nucleophilic lone pair and end at the positively charged carbon.',productLabel:piAtom?'Addition Intermediate':'Addition Product'});
}
function expandAdditionGroups(g){
 for(const a of [...g.atoms]){
  if(a.element!=='R'||!['Et','iPr'].includes(a.label))continue;
  const label=a.label,bond=g.bonds.find(b=>b.a===a.id||b.b===a.id),parent=g.atoms.find(n=>n.id===(bond.a===a.id?bond.b:bond.a));
  const angle=Math.atan2(a.y-parent.y,a.x-parent.x),add=(id,x,y,h)=>{g.atoms.push({id,element:'C',label:'C',x,y,h,lp:0});},join=(x,y,order=1)=>g.bonds.push({a:x,b:y,order});
  a.element='C';a.label='C';a.lp=0;
  if(label==='Et'){a.h=2;const t=angle+(Math.sin(angle)>=0?-Math.PI/3:Math.PI/3);add(a.id+'-2',a.x+110*Math.cos(t),a.y+110*Math.sin(t),3);join(a.id,a.id+'-2');}
  if(label==='iPr'){a.h=1;for(const [i,t]of [angle-Math.PI/3,angle+Math.PI/3].entries()){const id=a.id+'-'+(i+2);add(id,a.x+110*Math.cos(t),a.y+110*Math.sin(t),3);join(a.id,id);}}
 }
}
const easyDonors=['bromide','chloride','hydroxide','alkoxide','water','alcohol','ammonia','amine','cyanide','carbanion'];
for(let i=0;i<20;i++)additionQuestion('easy',i,i<10?'tertiaryCation':'secondaryCation',easyDonors[i%10],['Me','Et','iPr','Ph'][i%4]);
const moderateDonors=['hydroxide','alkoxide','water','alcohol','ammonia','amine','secondaryAmine','cyanide','carbanion','alcohol'];
// Begin the two-arrow set with methoxide addition to an acyl chloride.
// Only the addition step is shown: chloride remains attached and no proton is transferred.
for(let i=0;i<20;i++)additionQuestion('moderate',i,i===0?'acylChloride':i%2?'aldehyde':'ketone',i===0?'alcohol':moderateDonors[i%10],['Me','Et','iPr','Ph'][i%4]);
const hardTypes=['ketone','aldehyde','nitrile','imine','iminium','acylChloride','ester'];
for(let i=0;i<20;i++)additionQuestion('hard',i,hardTypes[i%hardTypes.length],['alkoxide','cyanide','amine','carbanion','alcohol'][i%5],['Et','Ph','iPr','Me'][i%4]);
if(typeof module!=='undefined')module.exports={ADDITION_BANK,formal,apply,keyBond};
