/* Five questions from each elementary mechanism per difficulty, interleaved. */
(()=>{
const bank=[],selection={addition:{easy:[0,2,4,6,8],moderate:[0,1,4,6,8],hard:[2,3,4,5,6]},leaving:{easy:[0,2,4,6,8],moderate:[0,2,4,6,8],hard:[0,2,4,6,8]},proton:{easy:[0,3,5,8,15],moderate:[0,1,2,3,4],hard:[0,1,2,3,4]}};
const pools={addition:ADDITION_BANK,leaving:LEAVING_BANK,proton:PROTON_BANK,rearrangement:REARRANGEMENT_BANK};
for(const level of ['easy','moderate','hard']){
 const sets={};for(const topic of ['addition','leaving','proton']){const qs=pools[topic].filter(q=>q.level===level);sets[topic]=selection[topic][level].map(i=>qs[i]);}
 const shifts=pools.rearrangement.filter(q=>q.level===level).sort((a,b)=>a.orientation-b.orientation||a.kind.localeCompare(b.kind));sets.rearrangement=[0,3,7,12,19].map(i=>shifts[i]);
 const orders=[['addition','proton','rearrangement','leaving'],['leaving','rearrangement','addition','proton'],['proton','addition','leaving','rearrangement'],['rearrangement','leaving','proton','addition'],['addition','leaving','rearrangement','proton']];
 for(let row=0;row<5;row++)for(const topic of orders[row])bank.push({...ProductChem.copy(sets[topic][row]),id:`product-${level}-${bank.filter(q=>q.level===level).length+1}`,sourceId:sets[topic][row].id});
}
globalThis.PRODUCT_BANK=bank;
})();
