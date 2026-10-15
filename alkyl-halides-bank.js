/* Shared helpers used by the reviewed molecular renderer. */
const clone=x=>JSON.parse(JSON.stringify(x)),keyBond=(a,b)=>[a,b].sort().join('~');
const LP=id=>({type:'lp',id}),BD=(a,b)=>({type:'bond',a,b});
function formal(g,a){if(a.element==='R')return 0;return {H:1,C:4,N:5,O:6,Cl:7,Br:7,I:7}[a.element]-2*a.lp-a.h-g.bonds.filter(b=>b.a===a.id||b.b===a.id).reduce((s,b)=>s+b.order,0);}
(()=>{'use strict';const L=110,rad=d=>d*Math.PI/180;
const configs=[
 {degree:1,arms:[1],halogen:'Br'},
 {degree:3,arms:[1,2,1],halogen:'Cl'},
 {degree:2,arms:[1,1],halogen:'Cl'},
 {degree:1,arms:[2],halogen:'Cl',mirror:true},
 {degree:2,ring:5,halogen:'Br'},
 {degree:3,arms:[1,1,1],halogen:'Br'},
 {degree:1,arms:[3],halogen:'I'},
 {degree:2,arms:[1,2],halogen:'Br',mirror:true},
 {degree:3,ring:6,arms:[2],halogen:'Br'},
 {degree:1,arms:[4],halogen:'Br',mirror:true},
 {degree:2,arms:[2,2],halogen:'Cl'},
 {degree:3,arms:[2,2,1],halogen:'I',mirror:true},
 {degree:1,arms:[2],branch:true,halogen:'Cl'},
 {degree:2,ring:6,halogen:'I',mirror:true},
 {degree:3,ring:5,arms:[1],halogen:'I'},
 {degree:1,arms:['Ph'],halogen:'Br',mirror:true},
 {degree:2,arms:['Ph',2],halogen:'Cl'},
 {degree:3,arms:['Ph',1,1],halogen:'Cl'},
 {degree:1,arms:[1],attachedRing:6,halogen:'I'},
 {degree:2,arms:[1,3],halogen:'I',mirror:true}
];
function build(cfg,index){const g={atoms:[],bonds:[]},atom=(id,element,x,y)=>g.atoms.push({id,element,x,y}),at=id=>g.atoms.find(a=>a.id===id),bond=(a,b,ringCenter)=>g.bonds.push({a,b,order:1,...(ringCenter?{ringCenter}: {})});
function group(root,prefix,length,angle){let previous=root;for(let k=0;k<(length==='Ph'?1:length);k++){const p=at(previous),theta=rad(angle+(k%2?60:0)),id=prefix+k;atom(id,length==='Ph'?'Ph':'C',p.x+L*Math.cos(theta),p.y+L*Math.sin(theta));bond(previous,id);previous=id;}}
function ring(root,n,angle=0){const p=at(root),r=L/(2*Math.sin(Math.PI/n)),theta=rad(angle),centre={x:p.x-r*Math.cos(theta),y:p.y-r*Math.sin(theta)};let previous=root;for(let k=1;k<n;k++){const id=root+'ring'+k,t=theta+2*Math.PI*k/n;atom(id,'C',centre.x+r*Math.cos(t),centre.y+r*Math.sin(t));bond(previous,id,centre);previous=id;}bond(previous,root,centre);}
atom('c','C',450,220);let xAngle;
if(cfg.ring){ring('c',cfg.ring);if(cfg.degree===3)group('c','r',cfg.arms[0],-30);xAngle=cfg.degree===3?30:0;}
else{const angles=cfg.degree===1?[150]:cfg.degree===2?[150,30]:[150,30,-90];cfg.arms.forEach((arm,k)=>group('c','r'+k+'_',arm,angles[k]));xAngle=cfg.degree===3?90:cfg.degree===2?-90:30;if(cfg.branch)group('r0_0','branch',1,90);if(cfg.attachedRing)ring('r0_0',cfg.attachedRing,330);}
atom('x',cfg.halogen,450+L*Math.cos(rad(xAngle)),220+L*Math.sin(rad(xAngle)));bond('c','x');
const graph={atoms:g.atoms.map(a=>{if(a.element==='Ph')return{...a,element:'R',label:'Ph',h:0,lp:0};const h=ProductChem.hydrogens(g,a),bo=ProductChem.bondOrder(g,a.id);return{...a,h,lp:({C:4,Cl:7,Br:7,I:7}[a.element]-bo-h)/2};}),bonds:clone(g.bonds)};
if(cfg.mirror){for(const a of graph.atoms)a.x=900-a.x;for(const b of graph.bonds)if(b.ringCenter)b.ringCenter.x=900-b.ringCenter.x;}
const family={1:'primary',2:'secondary',3:'tertiary'}[cfg.degree];return{id:'ah-'+(index+1),family,degree:cfg.degree,start:graph,halogen:cfg.halogen,hint:'Find the carbon directly bonded to '+cfg.halogen+'. Count only the carbon atoms directly bonded to that carbon, including any ring carbons.',explanation:`The carbon bonded to ${cfg.halogen} is directly bonded to ${cfg.degree===1?'one other carbon':cfg.degree===2?'two other carbons':'three other carbons'}, so this is a ${family} alkyl halide.`};}
globalThis.ALKYL_HALIDE_BANK=configs.map(build);
})();
