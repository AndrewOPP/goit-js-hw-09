const e=document.querySelector("button"),t=document.querySelector("form"),{delay:o,step:n,amount:l}=t.elements;e.addEventListener("click",(function(){setTimeout((()=>{for(let e=0;e<l.value;e+=1)u+=1,c+=Number(n.value),m(u,c)}),o.value),setTimeout((()=>{u=0,c=0}),n.value*l+o.value)}));let u=0,c=0;function m(e,t){let o=new Promise(((e,t)=>{Math.random()>.3?e():t()}));setTimeout((()=>{!function(e,t,o){e.then((()=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((()=>{console.log(`❌ Rejected promise ${t} in ${o}ms`)}))}(o,e,t),t=0}),t)}
//# sourceMappingURL=03-promises.0e1f1e7b.js.map
