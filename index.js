import{S as u,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="48427757-fc949e79797ba7e940d238484",f="https://pixabay.com/api/";async function p(n,t=1,o=20){const s=`${f}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function d({webformatURL:n,largeImageURL:t,tags:o,likes:s,views:e,comments:r,downloads:i}){return`
    <a href="${t}" class="gallery__item">
        <img src="${n}" alt="${o}" class="gallery__image" />
        <div class="info">
        <p><b>Likes:</b> ${s}</p>
        <p><b>Views:</b> ${e}</p>
        <p><b>Comments:</b> ${r}</p>
        <p><b>Downloads:</b> ${i}</p>
        </div>
    </a>
    `}function y(n,t){const o=n.map(d).join("");t.innerHTML=o}const g=document.querySelector(".search-form"),h=document.querySelector(".form-input"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let b=new u(".gallery a"),w=1;g.addEventListener("submit",$);async function $(n){n.preventDefault();const t=h.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term!"});return}l.innerHTML="",c.style.display="block";try{const o=await p(t,w);if(c.style.display="none",o.hits.length===0){a.error({title:"No Results",message:"Sorry, no images match your search query."});return}y(o.hits,l),b.refresh()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."}),c.style.display="none"}}
//# sourceMappingURL=index.js.map
