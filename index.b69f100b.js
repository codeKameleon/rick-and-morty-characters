let e=JSON.parse(localStorage.getItem("characters"))||[];const t=document.querySelector(".searchbar"),a=document.querySelector(".autocomplete-results"),c=document.querySelector(".characters"),n=document.querySelector(".load-more-btn");let o=0,s=!1;const r=async()=>{o++;const t=`https://rickandmortyapi.com/api/character?page=${o}`,a=await fetch(t);console.log(a);const c=(await a.json()).results;if(0==e.length||s){for(let t=0;t<c.length;t++)e.push(c[t]);localStorage.setItem("characters",JSON.stringify(e)),d(e)}},l=()=>{const a=e.filter((e=>e.name.toLowerCase().includes(t.value.toLowerCase())));d(a)},d=e=>{c.innerHTML="";for(const t of e){const e=document.createElement("div");e.className="character-card";const a=document.createElement("img");a.className="character-image",a.src=t.image;const n=document.createElement("div");n.className="character-details";const o=document.createElement("span");o.className="character-name",o.textContent=t.name;const s=document.createElement("span");s.className="character-species",s.textContent=t.species;const r=document.createElement("div");r.className="character-location-wrapper";const l=document.createElement("span");l.className="character-location-label",l.textContent="Last known location : ";const d=document.createElement("span");d.textContent=t.location.name;const m=document.createElement("div");m.className="character-episode-wrapper";const i=document.createElement("span");i.className="character-episode-label",i.textContent="First seen in : ";const p=document.createElement("span");(async()=>{const e=t.episode[0],a=await fetch(e),c=await a.json(),n=[c.name,c.episode];return p.textContent=`${n[0]}  (${n[1]})`,n})(),m.appendChild(i),m.appendChild(p),r.appendChild(l),r.appendChild(d),n.appendChild(o),n.appendChild(s),n.appendChild(r),n.appendChild(m),e.appendChild(a),e.appendChild(n),c.appendChild(e)}};t.addEventListener("input",(()=>{l(),(()=>{const c=t.value,n=e.filter((e=>e.name.toLowerCase().includes(c.toLowerCase())));for(const e of n){const c=document.createElement("li");c.textContent=e.name,c.className="autocomplete-result",c.addEventListener("click",(e=>{t.value=e.target.textContent,l(),a.classList.remove("show-autocomplete")})),a.appendChild(c)}a.classList.add("show-autocomplete")})()})),n.addEventListener("click",(()=>{s=!0,r()})),document.addEventListener("click",(e=>{t.contains(e.target)||a.classList.remove("show-autocomplete")})),t.value="",r(),d(e);
//# sourceMappingURL=index.b69f100b.js.map
