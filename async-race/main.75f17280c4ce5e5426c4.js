(()=>{"use strict";function e(e,t,n=t){const a=document.createElement(e);return a.className=t,a.id=n,a}class t{constructor(){this.container=document.createElement("nav"),this.container.className="navigation"}renderNavButtons(){const t=[];for(let n=0;n<2;n++){const a=e("button",`navigation__btn navigation__btn-${n} button`,`navigation__btn-${n}`);t.push(a),a.textContent=0===n?"TO GARAGE":"TO WINNERS"}this.container.append(t[0]),this.container.append(t[1])}render(){return this.renderNavButtons(),this.container}}const n="http://127.0.0.1:3000",a="/garage",r="/winners";async function o(e){try{await fetch(`${n}${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){throw new Error}}function i(t,n){const a=e("form",`controlPanel__${t} ${t}`),r=e("input",`${t}__input`);r.name="name",r.type="text";const o=e("input",`${t}__input-color`);o.name="color",o.type="color",o.value="#D5F0C7";const i=e("input",`${t}__button button`);return i.value=n,i.type="submit",a.append(r),a.append(o),a.append(i),a}function s(t,n,a,r=t){const o=e("form",t);o.method=a,o.id=r;const i=e("input",`${t}-input button`);return i.name="name",i.type="submit",i.value=n,o.append(i),o}class c{constructor(){this.container=document.createElement("div"),this.container.className="controlPanel"}renderControlPanels(){const e=i("create","CREATE");this.container.append(e);const t=i("update","UPDATE");this.container.append(t)}renderControlButtons(){const t=e("div","controlPanel__buttons buttons"),n=s("race","RACE","get"),a=s("buttons__reset","RESET","DELETE"),r=s("buttons__generate","GENERATE CARS","get");t.append(n),t.append(a),t.append(r),this.container.append(t)}static async createNewCar(){const e=document.querySelector(".controlPanel__create"),t=document.body;e&&e.addEventListener("submit",(async n=>{n.preventDefault();const a=new FormData(e),r={color:"",name:""};a.forEach(((e,t)=>{r[t]=e})),await o(r);const i=document.querySelector("#create__input");i&&(i.value="");const s=document.querySelector("#create__input-color");s&&(s.value="#D5F0C7"),t.innerHTML="",(new v).run()}))}static updateCar(){let e=0;document.addEventListener("click",(t=>{const n=t.target;n.classList.contains("select-button")&&(e=+n.id.slice(7))}));const t=document.querySelector(".controlPanel__update"),r=document.body;t&&t.addEventListener("submit",(async o=>{o.preventDefault();const i=new FormData(t),s={};i.forEach(((e,t)=>{""!==e&&"#d5f0c7"!==e&&(s[t]=e)})),await async function(e,t){try{await fetch(`${n}${a}/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}catch(e){throw new Error}}(e,s);const c=document.querySelector("#update__input");c&&(c.value="");const d=document.querySelector("#update__input-color");d&&(d.value="#D5F0C7"),r.innerHTML="",(new v).run()}))}static setRandomCars(){const e=document.querySelector("#buttons__generate"),t=["Tesla","Ford","Chevrolet","Toyota","Honda","Nissan","BMW","Mercedes-Benz","Audi","Lamborghini","Ferrari","Porsche","Subaru","Volkswagen","Mitsubishi","Hyundai","Volvo","Mazda","Kia","Jaguar","Land Rover","Jeep","Lexus","Buick","Chrysler","Dodge","GMC","Lincoln","Cadillac"],n=["Model S","Mustang","Civic","Camry","Leaf","X5","C-Class","A4","Huracan","488 GTB","911","Outback","Golf","Outlander","Santa Fe","S60","MX-5 Miata","Soul","F-PACE","Range Rover","Wrangler","RX 350","Enclave","300","Challenger","Sierra","Navigator","Escalade"],a=["#FF0000","#0000FF","#00FF00","#FFFF00","#000000","#FFFFFF","#C0C0C0","#808080","#FFA500","#800080","#FFC0CB","#A52A2A","#FFD700","#CD7F32","#B87333","#008080","#000080","#800000","#00FF00","#FF00FF","#40E0D0","#708090","#4B0082","#F5F5DC","#808000","#800000","#98FF98","#E6E6FA","#36454F"],r=document.body,i=e=>Math.floor(Math.random()*e);e&&e.addEventListener("submit",(async e=>{e.preventDefault(),await(async()=>{const e=[];for(let r=0;r<100;r++){const r=t[i(t.length)],s=n[i(n.length)],c={color:`${a[i(a.length)]}`,name:`${r} ${s}`};e.push(o(c))}await Promise.all(e)})(),r.innerHTML="",(new v).run()}))}render(){return this.renderControlPanels(),this.renderControlButtons(),this.container}}class d{constructor(){this.container=document.createElement("header"),this.navigation=new t,this.controlPanel=new c}renderOnlyNavigation(){return this.navigation.render()}render(){return this.container.append(this.navigation.render()),this.container.append(this.controlPanel.render()),this.container}}async function l(e=[]){try{const t=(e=[])=>e.length?`?${e.map((e=>`${e.key}=${e.value}`)).join("&")}`:"",r=await fetch(`${n}${a}${t(e)}`);return{items:await r.json(),count:Number(r.headers.get("X-Total-Count"))}}catch(e){throw new Error}}async function u(){try{const e=await fetch(`${n}${a}`);return(await e.json()).length}catch(e){throw new Error}}function m(e){return`\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\nwidth="1280.000000pt" height="867.000000pt" viewBox="0 0 1280.000000 300.000000"\npreserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,867.000000) scale(0.100000,-0.100000)"\nfill="${e}" stroke="none">\n<path d="M6201 5679 c-569 -30 -1155 -158 -1689 -370 -426 -170 -836 -397\n-1252 -693 l-115 -82 -121 4 -120 4 -34 62 c-56 101 -184 286 -260 374 -40 46\n-108 112 -151 145 -69 55 -79 66 -79 95 0 41 -35 62 -75 44 -53 -24 -12 -115\n44 -97 37 11 243 -205 361 -380 49 -73 120 -209 120 -230 0 -7 -125 -11 -372\n-12 -322 -2 -816 -18 -825 -27 -2 -1 6 -29 17 -61 11 -32 20 -62 20 -66 0 -5\n-18 -12 -41 -15 -51 -8 -103 -43 -107 -72 -4 -24 40 -56 91 -68 l29 -6 -31\n-19 c-52 -32 -33 -77 44 -103 l36 -13 -25 -17 c-54 -35 -22 -79 76 -105 l63\n-16 33 -108 34 -107 -47 -52 c-96 -107 -130 -198 -100 -262 33 -70 2 -67 612\n-56 301 5 640 12 753 15 113 2 217 5 233 5 22 0 27 4 27 26 0 92 60 182 135\n203 45 12 265 15 265 3 0 -4 -16 -16 -35 -26 -50 -27 -132 -117 -158 -173 -18\n-39 -22 -66 -22 -143 0 -109 15 -148 82 -212 61 -59 124 -83 218 -83 71 0 89\n4 148 33 36 18 88 54 113 80 106 106 140 264 81 384 -15 31 -44 71 -64 89\nl-37 32 59 -6 c33 -4 95 -10 139 -13 l78 -7 29 -45 c34 -53 39 -133 13 -183\n-8 -17 -13 -33 -10 -36 3 -3 851 -1 1883 6 1033 6 2063 11 2288 11 l410 0 0\n108 c0 95 3 113 27 164 34 72 95 131 166 160 52 21 72 23 217 22 140 -1 173\n-4 259 -27 306 -82 489 -263 474 -468 -2 -33 -4 -59 -4 -60 2 -2 581 -56 584\n-54 2 1 -9 70 -23 153 -14 83 -32 215 -40 294 l-15 144 133 278 132 279 93 48\nc185 95 295 217 310 344 l5 45 -459 0 c-892 0 -1880 -58 -2699 -158 l-140 -17\n-140 79 c-77 43 -146 85 -153 91 -12 11 -8 27 22 96 20 45 35 83 33 85 -3 3\n-325 -370 -322 -374 2 -2 48 26 103 62 l101 65 108 -45 c59 -25 119 -50 132\n-55 13 -5 22 -11 20 -13 -2 -2 -116 -21 -254 -41 -931 -136 -1744 -339 -2367\n-591 -87 -35 -161 -64 -163 -64 -2 0 -13 21 -25 47 -66 150 -280 294 -590 396\n-74 25 -150 48 -168 52 -37 8 -37 7 2 105 32 82 88 160 170 238 313 297 927\n493 1816 581 365 36 497 43 991 48 l486 6 257 -349 c142 -192 263 -353 268\n-359 5 -5 2 8 -7 30 -9 22 -67 166 -130 320 -62 154 -121 297 -130 319 l-16\n39 123 -7 c68 -4 152 -9 188 -11 l65 -5 -40 20 c-60 29 -351 124 -505 164\n-535 137 -1102 194 -1659 165z"/>\n<path d="M6214 4866 l-21 -15 38 -202 c21 -112 38 -204 36 -205 -1 -1 -372\n-28 -824 -60 -452 -32 -820 -60 -818 -62 2 -2 39 -16 82 -31 177 -59 314 -168\n376 -299 l34 -70 44 20 c80 36 461 175 634 231 450 147 937 265 1313 318 46 6\n82 13 80 14 -2 2 -116 -5 -253 -15 -138 -10 -277 -20 -310 -21 l-59 -3 -78\n199 c-43 109 -80 201 -84 204 -3 3 -42 7 -87 9 -61 2 -87 -1 -103 -12z"/>\n<path d="M9508 3631 c-74 -24 -116 -51 -166 -105 -63 -68 -94 -139 -100 -222\n-6 -93 15 -158 73 -222 62 -69 127 -96 230 -96 69 -1 89 4 147 31 220 103 294\n370 149 536 -73 83 -216 117 -333 78z"/>\n</g>\n</svg>\n`}class h{constructor(){this.container=e("div","garage")}async renderHeading(){const t=e("h1","garage__heading");t.textContent=`Garage (${await u()})`,this.container.append(t)}renderInfo(t){const n=e("h2","garage__info");n.textContent=`Page #${t}`,this.container.append(n)}async renderList(t){try{const n=await l(t),a=e("ul","garage__list");n.items?.forEach((e=>a.append(this.renderItem(e)))),this.container.append(a)}catch(e){throw new Error}}renderItem(t){const n=e("li","item",`item-${t.id}`),a=e("div","item__content"),r=e("button","select-button button",`select-${t.id}`);r.textContent="select";const o=e("button","remove-button button",`remove-${t.id}`);o.textContent="remove";const i=e("button","item__start button",`item__start-${t.id}`);i.textContent="A";const s=e("button","item__end button",`item__end-${t.id}`);s.textContent="B",s.disabled=!0;const c=e("div","item__car-name");c.textContent=t.name||"";const d=e("div","item__car-img",`item__car-img-${t.id}`);d.innerHTML=m(t.color);const l=e("div","item__flag-img",`item__flag-img-${t.id}`);return l.innerHTML='<svg width="31" height="60" viewBox="0 0 31 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <rect x="6" y="2" width="2" height="58" fill="#9E4E4E"/>\n      <path d="M30.8278 17.4543L8.09547 32.3266L8.00646 2.71908L30.8278 17.4543Z" fill="#F40707"/>\n      </svg>',a.append(r),a.append(o),a.append(c),a.append(i),a.append(s),a.append(d),n.append(a),n.append(l),n}static removeCar(){const e=document.body;let t=0;document.addEventListener("click",(o=>{const i=o.target;if(i.classList.contains("remove-button")){t=+i.id.slice(7),async function(e){try{await fetch(`${n}${a}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}catch(e){throw new Error}}(t),async function(e){try{await fetch(`${n}${r}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}catch(e){throw new Error}}(t);const o=new h;e.lastChild?.remove(),e.append(o.render())}}))}render(e=1){return this.renderHeading(),this.renderInfo(1),this.renderList([{key:"_page",value:e},{key:"_limit",value:7}]),this.container}}class p{constructor(){this.container=document.createElement("div"),this.container.className="navigation-garage"}renderGarageNavButtons(){const t=[];for(let n=0;n<2;n++){const a=e("button",`navigation-garage__btn navigation-garage__btn-${n} button`,`navigation-garage__btn-${n}`);t.push(a),a.textContent=0===n?"PREV":"NEXT"}this.container.append(t[0]),this.container.append(t[1])}static pagination(){const e=document.querySelector(".navigation-garage__btn-1"),t=document.querySelector(".navigation-garage__btn-0"),n=document.body;e&&e.addEventListener("click",(()=>(async()=>{const a=document.querySelector("#garage__info");let r=0;a&&(r=Number(a.textContent?.slice(6)));const o=(await l([{key:"_page",value:r},{key:"_limit",value:7}])).count,i=Math.ceil(o/7);if(r<i){t&&(t.disabled=!1),r+=1;const e=new h;n.lastChild?.remove(),n.append(e.render(r));const a=document.querySelector("#garage__info");a&&(a.textContent=`Page #${r}`)}r===i&&e&&(e.disabled=!0)})())),t&&t.addEventListener("click",(()=>(()=>{const a=document.querySelector("#garage__info");let r=0;if(a&&(r=Number(a.textContent?.slice(6))),r>1){e&&(e.disabled=!1),r-=1;const t=new h;n.lastChild?.remove(),n.append(t.render(r));const a=document.querySelector("#garage__info");a&&(a.textContent=`Page #${r}`)}1===r&&t&&(t.disabled=!0)})()))}render(){return this.renderGarageNavButtons(),this.container}}class g{constructor(){this.container=e("div","winners")}renderInfo(t){const n=e("h2","Winner__info");n.textContent=`Page #${t}`,this.container.append(n)}async renderList(t){try{const a=await async function(e=[]){try{const t=(e=[])=>e.length?`?${e.map((e=>`${e.key}=${e.value}`)).join("&")}`:"",a=await fetch(`${n}${r}${t(e)}`);return{items:await a.json(),count:Number(a.headers.get("X-Total-Count"))}}catch(e){throw new Error}}(t),o=e("ul","winner__list");a.items?.forEach((async e=>{o.append(await this.renderItem(e,e.id))})),this.container.append(this.renderHederOfTable()),this.container.append(o)}catch(e){throw new Error}}async renderItem(t,n){const a=e("li","winner",`winner-${t.id}`),r=e("div","winner__content"),o=e("div","winner__number",`number-${t.id}`);o.textContent="1";const i=await l([{key:"id",value:n}]),s=e("div","winner__car-img");s.innerHTML=m(i.items[0].color);const c=e("div","winner__car-name");c.textContent=i.items[0].name||"";const d=e("div","winner__wins"),u=e("div","winner__besttime");return r.append(o),r.append(s),r.append(c),r.append(d),r.append(u),a.append(r),a}renderHederOfTable(){const t=e("div","table"),n=e("div","table__header");return["#","Car","Name","Wins","Best Times (sec)"].forEach((t=>{const a=e("div","table__header-cell");a.textContent=t,n.append(a)})),t.append(n),t}async renderHeading(){const t=e("h1","winner__heading");t.textContent=`Winners (${await async function(){try{const e=await fetch(`${n}${r}`);return(await e.json()).length}catch(e){throw new Error}}()})`,this.container.append(t)}render(){return this.container.innerHTML="",this.renderHeading(),this.renderInfo(1),this.renderList([{key:"_page",value:0},{key:"_limit",value:10}]),this.container}}async function _(e=[]){try{const t=(e=[])=>e.length?`?${e.map((e=>`${e.key}=${e.value}`)).join("&")}`:"",a=await fetch(`${n}/engine${t(e)}`,{method:"PATCH"});return a.ok||500===a.status&&console.error("Car has been stopped suddenly. It's engine was broken down."),await a.json()}catch(e){throw new Error("Ошибка при выполнении запроса к серверу")}}class y{constructor(){this.animationFrameId=null}carAnimation(e,t){const n=document.getElementById(`item__car-img-${t}`),a=document.getElementById(`item__flag-img-${t}`);if(n&&a){const t=a.getBoundingClientRect().left-n.getBoundingClientRect().left;let r;const o=a=>{r||(r=a);const i=(a-r)/e;if(i<1){const e=t*i;n.style.transform=`translateX(${e}px)`,this.animationFrameId=requestAnimationFrame(o)}};this.animationFrameId=requestAnimationFrame(o)}}stopAnimation(){null!==this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}async doAnimationProcess(e,t){try{const n=e.target;let a=t;if(a||(a=+n.id.slice(12)),n.id===`item__start-${a}`||"race"===n.id){const e=document.querySelector(`#item__end-${a}`);e&&(e.disabled=!1);const t=document.querySelector(`#item__start-${a}`);t&&(t.disabled=!0);const n=await _([{key:"id",value:a},{key:"status",value:"started"}]),r=n.distance/n.velocity;this.carAnimation(r,a);const o=await _([{key:"id",value:a},{key:"status",value:"drive"}]);o.ok||(500===o.status&&console.error("Car has been stopped suddenly. It's engine was broken down."),this.stopAnimation())}}catch(e){e instanceof Error&&(console.error(`Something wrong. Problem is "${e}"`),this.stopAnimation())}}startAnimation(){document.addEventListener("click",(e=>this.doAnimationProcess(e)))}restart(){document.addEventListener("click",(async e=>{try{const t=e.target,n=+t.id.slice(10);if(t.id===`item__end-${n}`){const e=document.getElementById(`item__car-img-${n}`),a=document.querySelector(`#item__start-${n}`);a&&(a.disabled=!1),t.disabled=!0,await _([{key:"id",value:n},{key:"status",value:"stopped"}]),e&&(this.stopAnimation(),e.style.transform="translateX(0)")}}catch(e){e instanceof Error&&console.error(`Car has been stopped suddenly. It's engine was broken down.${e}`)}}))}allCarAnimation(){const e=document.querySelector("#race");e&&e.addEventListener("submit",(async e=>{e.preventDefault();try{const e=await u(),t=[];for(let n=0;n<e;n++)t.push(_([{key:"id",value:n+1},{key:"status",value:"started"}]));const n=Promise.all(t),a=(await n).map((e=>e.distance/e.velocity));for(let t=0;t<e;t++){const e=document.querySelector(`#item__end-${t+1}`);e&&(e.disabled=!1);const n=document.querySelector(`#item__start-${t+1}`);n&&(n.disabled=!0),this.carAnimation(a[t],t+1)}const r=[];for(let t=0;t<e;t++)r.push(_([{key:"id",value:t+1},{key:"status",value:"drive"}]));Promise.any(r)}catch(e){e instanceof Error&&console.error(`Car has been stopped suddenly. It's engine was broken down.${e}`)}}))}allCarAnimationRestart(){const e=document.querySelector("#buttons__reset");e&&e.addEventListener("submit",(async e=>{e.preventDefault();try{const e=await u(),t=[];for(let n=0;n<e;n++)t.push(_([{key:"id",value:n+1},{key:"status",value:"stopped"}]));await Promise.all(t);for(let t=0;t<e;t++){const e=document.querySelector(`#item__end-${t+1}`);e&&(e.disabled=!0);const n=document.querySelector(`#item__start-${t+1}`);n&&(n.disabled=!1);const a=document.querySelectorAll(".item__car-img");a?.forEach((e=>{const t=e;this.stopAnimation(),t.style.transform="translateX(0)"}))}}catch(e){e instanceof Error&&console.error(`Car has been stopped suddenly. It's engine was broken down.${e}`)}}))}}class v{constructor(){this.container=document.body,this.header=new d,this.garage=new h,this.navigationGarage=new p,this.winners=new g,this.raceAction=new y}loadGarage(){const e=document.querySelector("#navigation__btn-0"),t=document.querySelector(".garage"),n=()=>{if(t)for(t.remove();t.firstChild;)t.firstChild.remove();const n=document.querySelectorAll(".winners");n&&n.forEach((e=>e.remove())),t?t.remove():this.container.append(this.garage.render()),this.container.append(this.garage.render());const a=document.querySelector("#navigation-garage__btn-1");a&&(a.disabled=!1);const r=document.querySelector("#navigation-garage__btn-0");r&&(r.disabled=!1),e&&(e.disabled=!0);const o=document.querySelector("#navigation__btn-1");o&&(o.disabled=!1);const i=document.querySelector(".controlPanel");i&&i.classList.remove("disactive")};e&&(e.removeEventListener("click",n),e.addEventListener("click",n),e.disabled=!0)}loadWinners(){const e=document.querySelector("#navigation__btn-1"),t=document.querySelector(".winners"),n=document.querySelectorAll(".winners"),a=()=>{const a=document.querySelectorAll(".garage");if(a&&a.forEach((e=>e.remove())),n&&n.forEach((e=>{e.innerHTML=""})),t)for(;t.firstChild;)t.firstChild.remove();const r=document.querySelector("#navigation__btn-0");r&&(r.disabled=!1),e&&(e.disabled=!0);const o=document.querySelector(".controlPanel");o&&o.classList.add("disactive");const i=document.querySelector("#navigation-garage__btn-1");i&&(i.disabled=!0);const s=document.querySelector("#navigation-garage__btn-0");s&&(s.disabled=!0),this.container.append(this.winners.render())};e&&(e.removeEventListener("click",a),e.addEventListener("click",a))}run(){this.container.append(this.header.render()),this.container.append(this.navigationGarage.render()),this.container.append(this.garage.render()),c.createNewCar(),h.removeCar(),c.updateCar(),c.setRandomCars(),this.loadGarage(),this.loadWinners(),p.pagination(),this.raceAction.startAnimation(),this.raceAction.restart(),this.raceAction.allCarAnimation(),this.raceAction.allCarAnimationRestart()}}(new v).run()})();