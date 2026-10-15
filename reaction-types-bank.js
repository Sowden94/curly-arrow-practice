/* Shared molecular helpers, followed by a curated set of overall reactions. */
const clone=x=>JSON.parse(JSON.stringify(x)),keyBond=(a,b)=>[a,b].sort().join('~');
const LP=id=>({type:'lp',id}),BD=(a,b)=>({type:'bond',a,b});
function formal(g,a){if(a.element==='R')return 0;return {H:1,C:4,N:5,O:6,Cl:7,Br:7,I:7}[a.element]-2*a.lp-a.h-g.bonds.filter(b=>b.a===a.id||b.b===a.id).reduce((s,b)=>s+b.order,0);}
(()=>{'use strict';const all=[],L=110;
function add(g,id,element,x,y){g.atoms.push({id,element,x,y,charge:0});}
function bond(g,a,b,order=1,ringCenter){g.bonds.push({a,b,order,...(ringCenter?{ringCenter}: {})});}
function at(g,id){return g.atoms.find(a=>a.id===id);}
function group(g,root,prefix,length,angle,ph=false){let previous=root;for(let i=0;i<length;i++){const a=at(g,previous),theta=angle+(i%2?Math.PI/3:0),id=prefix+i;add(g,id,ph&&i===length-1?'Ph':'C',a.x+L*Math.cos(theta),a.y+L*Math.sin(theta));bond(g,previous,id);previous=id;}}
function ring(g,n){const c=at(g,'c'),r=L/(2*Math.sin(Math.PI/n)),center={x:c.x-r,y:c.y};for(let k=1;k<n;k++){const t=2*Math.PI*k/n;add(g,'ring'+k,'C',center.x+r*Math.cos(t),center.y+r*Math.sin(t));bond(g,k===1?'c':'ring'+(k-1),'ring'+k,1,center);}bond(g,'ring'+(n-1),'c',1,center);}
function chemical(g){return{atoms:g.atoms.map(a=>{if(a.element==='Ph')return{id:a.id,element:'R',label:'Ph',x:a.x,y:a.y,h:0,lp:0};const h=ProductChem.hydrogens(g,a),bo=ProductChem.bondOrder(g,a.id);return{id:a.id,element:a.element,x:a.x,y:a.y,h,lp:({C:4,O:6,Cl:7,Br:7,I:7}[a.element]-bo-h)/2};}),bonds:clone(g.bonds)};}
// Balance every level across all four pathways. Hard cases require interpreting
// benzylic stabilization, steric hindrance, cyclic sites or less familiar bases.
const difficulty={SN1:{easy:[0,1,2,10,11],hard:[3,4,6,13,14]},SN2:{easy:[0,6,7,10,11],hard:[4,8,9,13,14]},E1:{easy:[0,1,5,10,11],hard:[7,8,9,13,14]},E2:{easy:[0,1,7,10,11],hard:[3,8,9,13,14]}};
const sets={
 SN1:[
  {r:1,lg:'Br',nu:'OH'},{r:2,lg:'Cl',nu:'OMe'},{r:3,lg:'I',nu:'OH'},
  {ph:true,r:1,lg:'Br',nu:'OH'},{ph:true,r:2,lg:'Cl',nu:'OMe'},
  {r:2,s:2,lg:'Br',nu:'OH'},{ph:true,tertiary:true,r:1,lg:'I',nu:'OH'},
  {ring:5,lg:'Br',nu:'OMe'},{ring:6,lg:'Cl',nu:'OH'},{r:3,lg:'Br',nu:'OMe'},
  {r:1,s:2,lg:'Cl',nu:'OH'},{r:2,s:2,lg:'I',nu:'OMe'},
  {ring:6,lg:'Br',nu:'OMe'},{ph:true,tertiary:true,r:2,lg:'Cl',nu:'OH'},{ring:5,lg:'I',nu:'OH'}
 ],
 SN2:[
  {r:1,lg:'Br',nu:'OH'},{r:2,lg:'I',nu:'OMe'},{r:3,lg:'Cl',nu:'I'},
  {r:2,lg:'Cl',nu:'Br'},{ph:true,r:1,lg:'Br',nu:'OMe'},
  {r:3,lg:'Br',nu:'OH'},{r:1,lg:'Cl',nu:'OMe'},{r:1,lg:'Br',nu:'I'},
  {r:2,branch:true,lg:'Br',nu:'OH'},{r:3,ph:true,lg:'I',nu:'OH'},
  {r:2,lg:'Br',nu:'I'},{r:2,lg:'Cl',nu:'OMe'},{r:3,lg:'I',nu:'OMe'},
  {r:2,branch:true,lg:'Cl',nu:'OMe'},{r:2,ph:true,lg:'I',nu:'OMe'}
 ],
 E1:[
  {r:0,lg:'Br',solvent:'EtOH'},{r:1,lg:'Cl',solvent:'H2O'},
  {r:2,lg:'I',solvent:'EtOH'},{r:1,s:2,lg:'Br',solvent:'EtOH'},
  {r:2,lg:'Br',solvent:'H2O'},{r:0,lg:'Cl',solvent:'H2O'},
  {r:1,s:2,lg:'I',solvent:'H2O'},{r:2,s:2,lg:'Cl',solvent:'EtOH'},
  {ring:5,lg:'Br',solvent:'EtOH'},{ring:6,lg:'I',solvent:'H2O'},
  {r:0,lg:'I',solvent:'H2O'},{r:1,lg:'Br',solvent:'H2O'},
  {r:2,s:2,lg:'Br',solvent:'EtOH'},{ring:5,lg:'Cl',solvent:'H2O'},{ring:6,lg:'Br',solvent:'EtOH'}
 ],
 E2:[
  {r:1,lg:'Br',base:'NaOMe',solvent:'MeOH'},
  {r:2,lg:'Cl',base:'NaOH',solvent:'EtOH'},
  {r:1,tertiary:true,lg:'I',base:'NaOMe',solvent:'MeOH'},
  {r:0,tertiary:true,lg:'Br',base:'KOtBu',solvent:'tBuOH'},
  {r:2,tertiary:true,lg:'Cl',base:'NaOMe',solvent:'MeOH'},
  {r:1,s:2,lg:'I',base:'NaOH',solvent:'EtOH'},
  {r:2,lg:'Br',base:'NaOMe',solvent:'MeOH'},
  {r:0,tertiary:true,lg:'Cl',base:'NaOH',solvent:'EtOH'},
  {r:2,s:2,lg:'I',base:'NaOMe',solvent:'MeOH'},
  {r:1,s:2,tertiary:true,lg:'Br',base:'NaOH',solvent:'EtOH'},
  {r:1,lg:'Cl',base:'NaOMe',solvent:'MeOH'},{r:0,tertiary:true,lg:'I',base:'NaOH',solvent:'EtOH'},
  {r:2,s:2,lg:'Br',base:'NaOH',solvent:'EtOH'},
  {r:1,s:2,tertiary:true,lg:'Cl',base:'NaOMe',solvent:'MeOH'},{r:2,tertiary:true,lg:'I',base:'NaOH',solvent:'EtOH'}
 ]
};
for(const family of Object.keys(sets))sets[family].forEach((cfg,i)=>{
 const g={atoms:[],bonds:[]};add(g,'c','C',450,220);let angle,beta,substrate;
 if(family==='SN2'){
  angle=Math.PI/6;group(g,'c','r',cfg.r,5*Math.PI/6,cfg.ph);if(cfg.branch)group(g,'r0','branch',1,Math.PI/2);substrate=cfg.ph&&cfg.r===1?'primary benzylic alkyl halide':'primary alkyl halide';
 }else if(cfg.ring){
  ring(g,cfg.ring);group(g,'c','s',1,-Math.PI/6);angle=Math.PI/6;beta='ring1';substrate='tertiary cyclic alkyl halide';
 }else if(family==='SN1'){
  if(cfg.ph){group(g,'c','ph',1,5*Math.PI/6,true);group(g,'c','s',cfg.r,Math.PI/6);if(cfg.tertiary)group(g,'c','t',1,-Math.PI/2);substrate=(cfg.tertiary?'tertiary':'secondary')+' benzylic alkyl halide';}
  else{group(g,'c','r',cfg.r,5*Math.PI/6);group(g,'c','s',cfg.s||1,Math.PI/6);group(g,'c','t',1,-Math.PI/2);substrate='tertiary alkyl halide';}angle=Math.PI/2;
 }else{
  add(g,'beta','C',450-L*Math.cos(Math.PI/6),275);bond(g,'c','beta');beta='beta';if(cfg.r)group(g,beta,'r',cfg.r,7*Math.PI/6);group(g,'c','s',cfg.s||1,Math.PI/6);if(family==='E1'||cfg.tertiary){group(g,'c','t',1,-Math.PI/2);angle=Math.PI/2;substrate='tertiary alkyl halide';}else{angle=-Math.PI/2;substrate='secondary alkyl halide';}
 }
 add(g,'x',cfg.lg,450+L*Math.cos(angle),220+L*Math.sin(angle));bond(g,'c','x');const p=clone(g);p.atoms=p.atoms.filter(a=>a.id!=='x');p.bonds=p.bonds.filter(b=>b.a!=='x'&&b.b!=='x');let reagent,solvent,temp,hint,explanation;
 if(family==='SN1'||family==='SN2'){
  const element=['Br','I'].includes(cfg.nu)?cfg.nu:'O';add(p,'nu',element,450+L*Math.cos(angle),220+L*Math.sin(angle));bond(p,'c','nu');if(cfg.nu==='OMe')group(p,'nu','nm',1,angle-Math.PI/3);
  if(family==='SN1'){reagent=cfg.nu==='OH'?'H2O':'MeOH';solvent=reagent;temp='room temperature';hint='Consider whether the substrate can form a stable carbocation and whether the reagent is a neutral, weak nucleophile.';explanation=`SN1. The ${substrate} can form a stable carbocation. ${reagent==='H2O'?'Water':'Methanol'} is a neutral nucleophile; capture of the carbocation and proton transfer give the substitution product shown. Elimination can compete, but this product comes from substitution.`;}
  else{reagent={OH:'NaOH',OMe:'NaOMe',I:'NaI',Br:'NaBr'}[cfg.nu];solvent=cfg.nu==='I'?'acetone':'DMSO';temp='room temperature';hint='Look at the carbon bonded to the leaving group. A primary substrate with a good nucleophile favours a concerted substitution.';explanation=`SN2. This ${substrate} reacts with a good nucleophile. The nucleophile replaces the halogen in a concerted substitution, without a carbocation intermediate.`;}
 }else{
  p.bonds.find(b=>keyBond(b.a,b.b)===keyBond('c',beta)).order=2;
  if(family==='E1'){reagent=cfg.solvent;solvent=reagent;temp='heat';hint='The product is an alkene. The substrate can form a stable carbocation, and the reagent is a weak base.';explanation='E1. The tertiary alkyl halide ionizes to a carbocation. A weak base then removes a beta hydrogen to form the alkene shown. Substitution can compete under these conditions; the displayed product follows the elimination pathway.';}
  else{reagent=cfg.base;solvent=cfg.solvent;temp='heat';hint='The product is an alkene and the reagent supplies a strong base. Consider a concerted removal of a beta hydrogen and the leaving group.';explanation='E2. A strong base removes a beta hydrogen while the C–H electron pair forms the double bond and the halogen leaves. The elimination is concerted rather than proceeding through a carbocation.';}
 }
 const start=chemical(g),product=chemical(p);if([2,4,7].includes(i))for(const graph of[start,product]){for(const a of graph.atoms)a.x=900-a.x;for(const b of graph.bonds)if(b.ringCenter)b.ringCenter.x=900-b.ringCenter.x;}
 const level=difficulty[family].easy.includes(i)?'easy':difficulty[family].hard.includes(i)?'hard':'moderate';
 all.push({level,id:`rt-${family}-${i+1}`,family,start,product,reagent,solvent,temp,hint,explanation,substrate,beta,cfg});
});
let seed=7331;const random=()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return(seed>>>0)/4294967296;};for(let i=all.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[all[i],all[j]]=[all[j],all[i]];}const first=all.findIndex(q=>q.id==='rt-SN2-1');[all[0],all[first]]=[all[first],all[0]];
globalThis.REACTION_TYPE_BANK=all;
})();
