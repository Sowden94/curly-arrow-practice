/* Electron-pair bookkeeping is shared with the addition bank. */
const LEAVING_BANK=[];
function makeLeaving(level,index,kind,lgType,r='Me',r2='Me'){
 const g={atoms:[],bonds:[]};const atom=(id,element,x,y,h=0,lp=0,label=element)=>g.atoms.push({id,element,x,y,h,lp,label}),bond=(a,b,order=1)=>g.bonds.push({a,b,order}),group=(id,label,x,y,parent)=>{atom(id,'R',x,y,0,0,label);bond(parent,id);};
 const aromatic=kind==='ortho'||kind==='para';
 if(aromatic){const pts=[[300,110],[395.263,165],[395.263,275],[300,330],[204.737,275],[204.737,165]];pts.forEach(([x,y],i)=>atom(i?'ring'+i:'c','C',x,y,1,kind==='para'&&i===3||kind==='ortho'&&i===1?1:0));for(let i=0;i<6;i++)bond(i?'ring'+i:'c',i===5?'c':'ring'+(i+1),kind==='para'?(i===1||i===4?2:1):(i===2||i===4?2:1));}
 else{atom('c','C',300,220,0,0);group('r1',r,204.737,275,'c');group('r2',r2,395.263,275,'c');if(kind==='ionization')group('r3','Me',300,110,'c');else{atom('o','O',300,110,0,3);bond('c','o');}}
 if(aromatic){g.atoms.find(a=>a.id==='ring4').h=0;group('ring-sub',r,109.474,330,'ring4');}
 const cx=300,cy=aromatic?110:220,lgX=aromatic?300:395.263,lgY=aromatic?0:165;
 const spec={Cl:['Cl',0,3],Br:['Br',0,3],I:['I',0,3],water:['O',2,1],methanol:['O',1,1],methoxide:['O',0,2],amine:['N',2,0],dimethylamine:['N',1,0],trimethylamine:['N',0,0]}[lgType];
 atom('lg',spec[0],lgX,lgY,lgType==='methanol'?0:spec[1],spec[2]);bond('c','lg');
 if(lgType==='methanol'){atom('lg-h','H',lgX,lgY-75);bond('lg','lg-h');}
 if(['methanol','methoxide','amine','dimethylamine','trimethylamine'].includes(lgType))group('lg-me','Me',lgX+110,lgY,'lg');
 if(['dimethylamine','trimethylamine'].includes(lgType))group('lg-me2','Me',lgX+55,lgY+95.263,'lg');
 if(lgType==='trimethylamine')group('lg-me3','Me',lgX+55,lgY-95.263,'lg');
 const cleavage=move(BD('c','lg'),LP('lg'));
 const moves=kind==='ionization'?[cleavage]:kind==='collapse'?[move(LP('o'),BD('c','o')),cleavage]:kind==='ortho'?[move(LP('ring1'),BD('c','ring1')),cleavage]:[move(LP('ring3'),BD('ring2','ring3')),move(BD('ring1','ring2'),BD('c','ring1')),cleavage];
 const product=apply(g,moves);for(const a of product.atoms.filter(a=>a.id.startsWith('lg'))){a.x+=aromatic?260:204.737;a.y+=aromatic?220:55;}
 expandAdditionGroups(g);expandAdditionGroups(product);if(aromatic)for(const graph of [g,product])for(const b of graph.bonds.filter(b=>!b.a.startsWith('lg')&&!b.b.startsWith('lg')))b.ringCenter={x:300,y:220};
 // Rotate each complete structure, keeping atom labels upright in the renderer.
 const directions=[90,210,0,300,150,60,270,30,180,120,240,330,60,300,180,90,30,240,0,270],offset=level==='easy'?0:level==='moderate'?7:13,desired=(lgType==='amine'&&r==='Ph'&&r2==='Ph'?90:directions[(index+offset)%directions.length])*Math.PI/180;
 const rotation=desired-(aromatic?-Math.PI/2:-Math.PI/6),cos=Math.cos(rotation),sin=Math.sin(rotation);
 const rotate=(a,cx=300,cy=220)=>{const x=a.x-cx,y=a.y-cy;a.x=cx+x*cos-y*sin;a.y=cy+x*sin+y*cos;};
 for(const a of g.atoms)rotate(a);
 for(const a of product.atoms){if(a.id.startsWith('lg'))rotate(a,aromatic?560:600,220);else rotate(a);}
 for(const graph of [g,product])for(const b of graph.bonds)if(b.ringCenter)rotate(b.ringCenter);
 // Keep the O-H bond clear of the upright OMe abbreviation after rotation.
 for(const graph of [g,product]){const h=graph.atoms.find(a=>a.id==='lg-h'),o=graph.atoms.find(a=>a.id==='lg');if(h){h.x=o.x;h.y=o.y+(o.y>graph.atoms.find(a=>a.id==='c')?.y?75:-75);}}
 const free=product.atoms.find(a=>a.id==='lg'),fragmentShift=Math.max(...product.atoms.filter(a=>!a.id.startsWith('lg')).map(a=>a.x))+220-free.x;
 for(const a of product.atoms.filter(a=>a.id.startsWith('lg')))a.x+=fragmentShift;
 const hint=kind==='ionization'?'Start at the C–leaving-group bond and send its electron pair to the leaving-group atom.':kind==='collapse'?'Form C=O from an oxygen lone pair while the C–leaving-group bond pair moves to the leaving group.':kind==='ortho'?'Use the carbon lone pair to form the adjacent ring π bond and move the C–leaving-group pair onto the leaving group.':'Move the carbon lone pair into the ring, shift the neighbouring π pair, and move the C–leaving-group pair onto the leaving group.';
 const explanation=kind==='ionization'?'The leaving group takes both electrons from the C–leaving-group bond. Carbon becomes a carbocation; the leaving group gains a lone pair.':kind==='collapse'?'An oxygen lone pair restores the carbonyl as the leaving group takes the C–leaving-group electron pair. Both arrows belong to this one elementary step.':'The electron shifts restore the aromatic ring as the leaving group takes the C–leaving-group electron pair.';
 LEAVING_BANK.push({id:`leaving-${level}-${index+1}`,topic:'leaving',level,kind,lgType,start:g,product,moves,acceptor:'c',leaving:'lg',title:'Draw the curly arrow(s) for loss of the leaving group.',hint,explanation,productLabel:kind==='ionization'?'Carbocation + Leaving Group':kind==='collapse'?'Carbonyl + Leaving Group':'Aromatic Product + Leaving Group'});
}
for(let i=0;i<20;i++)makeLeaving('easy',i,'ionization',['Br','Cl','I','water','methanol'][i%5],['Me','Et','iPr','Ph'][Math.floor(i/5)]);
for(let i=0;i<20;i++)makeLeaving('moderate',i,i<6?'ionization':'collapse',i<6?['amine','dimethylamine','trimethylamine'][i%3]:['Cl','Br','methoxide','water','methanol','amine','dimethylamine'][i%7],['Me','Et','Ph','iPr'][i%4]);
// Nitro-stabilized addition intermediates: restore the aromatic ring as halide leaves.
function makeNitroLeaving(index,lgType,nuType,flipped=false){
 const g={atoms:[],bonds:[]},atom=(id,element,x,y,h=0,lp=0,label=element)=>g.atoms.push({id,element,x,y,h,lp,label}),bond=(a,b,order=1)=>g.bonds.push({a,b,order});
 const pts=[[300,330],[204.737,275],[204.737,165],[300,110],[395.263,165],[395.263,275]];
 pts.forEach(([x,y],i)=>atom(i?'ring'+i:'c','C',x,y,i===0||i===3?0:1));
 for(let i=0;i<6;i++){const a=i?'ring'+i:'c',b=i===5?'c':'ring'+(i+1);bond(a,b,i===1||i===4?2:1);g.bonds.at(-1).ringCenter={x:300,y:220};}
 atom('nitro-n','N',300,0);bond('nitro-n','ring3',2);
 atom('nitro-o1','O',204.737,-55,0,3);atom('nitro-o2','O',395.263,-55,0,3);bond('nitro-n','nitro-o1');bond('nitro-n','nitro-o2');
 atom('lg',lgType,300+110*Math.cos(130*Math.PI/180),330+110*Math.sin(130*Math.PI/180),0,3);bond('c','lg');
 const nuX=300+110*Math.cos(50*Math.PI/180),nuY=330+110*Math.sin(50*Math.PI/180);
 if(nuType==='OH')atom('attached-nu','O',nuX,nuY,1,2);
 else if(nuType==='OMe'){atom('attached-nu','O',nuX,nuY,0,2);atom('attached-me','R',nuX+110*Math.cos(-10*Math.PI/180),nuY+110*Math.sin(-10*Math.PI/180),0,0,'Me');bond('attached-nu','attached-me');}
 else if(nuType==='NH2')atom('attached-nu','N',nuX,nuY,2,1);
 else atom('attached-nu','R',nuX,nuY,0,0,'Me');
 bond('c','attached-nu');
 const shifts=[move(BD('nitro-n','ring3'),BD('ring2','ring3')),move(BD('ring1','ring2'),BD('c','ring1')),move(BD('c','lg'),LP('lg'))];
 const reverseShifts=[move(BD('nitro-n','ring3'),BD('ring3','ring4')),move(BD('ring4','ring5'),BD('c','ring5')),move(BD('c','lg'),LP('lg'))];
 const plans=['nitro-o2','nitro-o1'].flatMap(id=>[shifts,reverseShifts].map(path=>[move(LP(id),BD('nitro-n',id)),...path]));
 const [moves,...alternativeMoves]=plans;
 const product=apply(g,moves);
 // On rearomatization this carbon becomes trigonal: the retained group follows
 // the external bisector, giving 120 degrees to each ring bond.
 const retained=product.atoms.find(a=>a.id==='attached-nu');retained.x=300;retained.y=440;
 const methyl=product.atoms.find(a=>a.id==='attached-me');if(methyl){methyl.x=300+110*Math.cos(30*Math.PI/180);methyl.y=440+110*Math.sin(30*Math.PI/180);}
 if(flipped)for(const graph of [g,product]){for(const a of graph.atoms){a.x=600-a.x;a.y=440-a.y;}for(const b of graph.bonds)if(b.ringCenter){b.ringCenter.x=600-b.ringCenter.x;b.ringCenter.y=440-b.ringCenter.y;}}
 const free=product.atoms.find(a=>a.id==='lg');free.x=Math.max(...product.atoms.filter(a=>a.id!=='lg').map(a=>a.x))+220;free.y=220;
 LEAVING_BANK.push({id:`leaving-hard-${index+1}`,topic:'leaving',level:'hard',kind:'nitro-aromatic',lgType,start:g,product,moves,alternativeMoves,acceptor:'c',leaving:'lg',title:'Draw the curly arrow(s) for loss of the leaving group.',hint:'Start at a negatively charged nitro oxygen. Reform N=O, move the N=C π pair into the ring, shift the ring π pair, and send the C–halogen bond pair onto the halogen.',explanation:'Four electron-pair movements restore the aromatic ring and the nitro group as the halide leaves. Either negatively charged nitro oxygen can start the electron flow, and either side of the ring can carry the complete rearomatization sequence.',productLabel:'Aromatic Product + Halide'});
}
for(let i=0;i<20;i++){
 if([10,13,16,19].includes(i))makeNitroLeaving(i,i%2?'Br':'Cl',['OH','OMe','NH2','Me'][[10,13,16,19].indexOf(i)],i%2===1);
 else makeLeaving('hard',i,'collapse',i<10?['Cl','methoxide','water','amine','dimethylamine'][i%5]:['Br','methanol','methoxide','water','amine','Cl'][[11,12,14,15,17,18].indexOf(i)],['Ph','Et','iPr','Me'][i%4],['Et','Ph','Me','iPr'][(i+1)%4]);
}
globalThis.LEAVING_BANK=LEAVING_BANK;
