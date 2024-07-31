(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function u(){const r={count:0};let o=()=>{};return r.increment=()=>{r.count+=1,o(`count is ${r.count}`)},r.attach=function(n){o=c=>n.innerHTML=c,n.addEventListener("click",r.increment)},r}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Click!</button>
    </div>
  </div>
`;let s=u();s.attach(document.querySelector("#counter"));
