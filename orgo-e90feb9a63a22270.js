;
/* startup */
location.replace('e2.html?set=complete&v=273');
;
/* chemical-typography.js */
/* Presentation only: preserve question data, answers, graph coordinates and input values. */
(()=>{'use strict';const subs='₀₁₂₃₄₅₆₇₈₉',supers='⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ',normal='0123456789+-n',pattern=/([₀₁₂₃₄₅₆₇₈₉]+|[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+)/g;
function parts(value){const result=[];let end=0;for(const m of value.matchAll(pattern)){if(m.index>end)result.push({text:value.slice(end,m.index)});const sub=subs.includes(m[0][0]);result.push({kind:sub?'sub':'sup',text:[...m[0]].map(c=>sub?String(subs.indexOf(c)):normal[supers.indexOf(c)]).join('')});end=m.index+m[0].length;}if(end<value.length)result.push({text:value.slice(end)});return result;}
globalThis.ChemTypography={parts};if(typeof MutationObserver==='undefined'||!document.body||!document.createTreeWalker)return;
const svgNS='http://www.w3.org/2000/svg',skip='script,style,textarea,input,select,option,code,pre,sub,sup,[contenteditable]:not([contenteditable="false"]),[data-chemical-index],tspan[baseline-shift]';
function format(node){const parent=node.parentElement;if(!parent||parent.closest(skip)||!/[₀-₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]/.test(node.nodeValue))return;const svg=parent.namespaceURI===svgNS;if(svg&&!['text','tspan'].includes(parent.localName))return;const fragment=document.createDocumentFragment();for(const part of parts(node.nodeValue)){if(!part.kind){fragment.appendChild(document.createTextNode(part.text));continue;}const el=svg?document.createElementNS(svgNS,'tspan'):document.createElement(part.kind);el.setAttribute('data-chemical-index',part.kind);if(svg)el.setAttribute('baseline-shift',part.kind==='sub'?'sub':'super');el.textContent=part.text;fragment.appendChild(el);}node.replaceWith(fragment);}
function scan(root){if(root.nodeType===3){format(root);return;}if(root.nodeType!==1||root.closest(skip))return;const walker=document.createTreeWalker(root,4),nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(format);}
scan(document.body);new MutationObserver(records=>{const roots=new Set();for(const record of records){if(record.type==='characterData')roots.add(record.target);else for(const node of record.addedNodes)roots.add(node);}for(const root of roots)if(root.isConnected)scan(root);}).observe(document.body,{childList:true,subtree:true,characterData:true});})();

