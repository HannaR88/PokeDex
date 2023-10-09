let pokemonRepository=function(){let e=[];function t(t){if("object"==typeof t){let n=!0;["name","detailsUrl"].forEach(e=>{if(!Object.keys(t).includes(e)){n=!1,console.log("Incorrect key of object");return}}),n&&e.push(t)}else console.log("Incorrect type of data")}function n(){return e}function i(){document.querySelector("#my-modal-container").classList.remove("is-visible")}function a(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.other["official-artwork"].front_default,e.imageUrlBack=t.sprites.other["official-artwork"].front_shiny,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}return window.addEventListener("keydown",e=>{let t=document.querySelector("#my-modal-container");"Escape"===e.key&&t.classList.contains("is-visible")&&i()}),{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".page-main__pokemon-list"),l=document.createElement("li"),r=document.createElement("button"),c=document.createElement("img");r.innerText=t.name,r.classList.add("pokemon-list__item"),c.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t.id}.png`,r.appendChild(c),l.appendChild(r),n.appendChild(l),function e(t,n){t.addEventListener("click",function(){!function e(t){a(t).then(function(){let e=document.querySelector("#my-modal-container");e.innerHTML="";let n=document.createElement("div");n.classList.add("my-modal");let a=document.createElement("button");a.classList.add("my-modal-close"),a.innerText="X",a.addEventListener("click",i);let l=document.createElement("h1");l.innerText=t.name;let r=document.createElement("h3");r.innerText="Height: ";let c=document.createElement("span");c.innerText=`${t.height/10} m`;let d=document.createElement("h3");d.innerText="Type:";let s=document.createElement("p");s.innerText=t.types[0].type.name;let o=document.createElement("p");t.types.length>1?o.innerText=t.types[1].type.name:o.innerText="";let p=document.createElement("img");p.src=t.imageUrl;let m=document.createElement("img");m.src=t.imageUrlBack;let h=document.createElement("div");h.classList.add("scene"),h.classList.add("scene--card");let u=document.createElement("div");u.classList.add("card");let f=document.createElement("div");f.classList.add("card__face"),f.classList.add("card__face--front");let y=document.createElement("div");y.classList.add("card__face"),y.classList.add("card__face--back"),f.appendChild(p),y.appendChild(m),u.appendChild(f),u.appendChild(y),h.appendChild(u);let E=document.createElement("p"),g;E.innerText="Click on the image!",n.appendChild(a),n.appendChild(l),n.appendChild(r),n.appendChild(c),n.appendChild(d),n.appendChild(s),n.appendChild(o),n.appendChild(h),n.appendChild(E),e.appendChild(n),e.classList.add("is-visible"),e.addEventListener("click",t=>{t.target===e&&i()}),(g=document.querySelector(".card")).addEventListener("click",function(){g.classList.toggle("is-flipped")})})}(n)})}(r,t);let d=document.getElementById("datalistOptions"),s=document.createElement("option");s.value=t.name,d.appendChild(s),r.setAttribute("id",t.id)},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e,n){t({id:n+1,name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:a,clickSearch:function t(){document.getElementById("searchBtn").addEventListener("click",function(){var t;document.getElementById("result").href="";let n;t=document.getElementById("exampleDataList").value.toLowerCase(),n="",(n=e.filter(e=>e.name===t)).forEach(function(e){let t=document.getElementById("result");t.href=`#${e.id}`,t.classList.remove("hidden_result"),t.addEventListener("click",function(){t.classList.add("hidden_result")})}),0===n.length&&alert("Sorry, we have no such a Pok\xe9mon! Try again!")})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)}),pokemonRepository.clickSearch()});