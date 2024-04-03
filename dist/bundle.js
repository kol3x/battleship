(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'body {\n  background: rgb(0, 212, 255);\n  background: linear-gradient(\n    90deg,\n    rgba(0, 212, 255, 1) 50%,\n    rgba(2, 0, 36, 1) 50%\n  );\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row: 1fr 1fr;\n  grid-auto-flow: column;\n  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\ntr {\n  font-size: 30px;\n  margin-bottom: 10px;\n  display: grid;\n  grid-template-columns: repeat(10, 6vh);\n  place-items: center;\n}\n\ntd {\n  border: 4px outset rgb(101, 90, 223);\n  font-size: 25px;\n  height: 3vh;\n  width: 2vw;\n  display: grid;\n  place-content: center;\n  transition: 0.2s;\n}\n\n.truebot > tr > td:hover {\n  background-color: rgb(196, 196, 196);\n}\n\n.truebot:hover {\n  cursor: crosshair;\n}\n\n.falsebot > tr > td:hover {\n  cursor: default;\n}\n\n.gameboards {\n  grid-row: 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.truebot {\n  place-self: center;\n  display: grid;\n  background: linear-gradient(to right, #25c481, #25b7c4);\n  padding: 20px;\n  grid-column: 2;\n  background-color: rgb(255, 232, 229);\n}\n\n.falsebot {\n  place-self: center;\n  display: grid;\n  background: linear-gradient(to right, #25c481, #25b7c4);\n  padding: 20px;\n  grid-column: 1;\n  grid-row: 1;\n  background-color: rgb(231, 255, 239);\n}\n\nh2 {\n  place-self: center;\n  margin: 5px;\n}\n\n.mainHeader {\n  font-size: 20px;\n  grid-row: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\nh1.firstHead {\n  font-size: xx-large;\n  place-self: end;\n  border-left: 3px solid black;\n  padding-right: 25px;\n}\n\nh1.secondHead {\n  font-size: xx-large;\n  grid-column: 2;\n  place-self: start;\n  color: white;\n  border-right: 3px solid white;\n  padding-left: 33px;\n}\n\n.startButton {\n  margin-top: 300px;\n  grid-row: 2;\n  place-self: center;\n  border: none;\n  width: 30%;\n  height: 50%;\n  font-size: 50px;\n  background-color: black;\n  color: white;\n}\n.startButton:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n\n.ship {\n  background-color: rgba(124, 124, 255, 0.379);\n  border: 2px dashed rgb(0, 0, 0);\n}\n\n.hit {\n  background-color: rgb(255, 147, 147);\n  border: 2px dashed rgb(0, 0, 0);\n}\n\n.miss {\n  background-color: rgb(202, 202, 202);\n  border: 2px dashed rgb(0, 0, 0);\n}\n\n.placementButton {\n  border: none;\n  border-radius: 15px;\n  margin-top: 10px;\n  height: 30px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.placementButton:hover {\n  color: white;\n  background-color: black;\n}\n\n.startText {\n  grid-row: 1;\n  text-align: center;\n  margin: 0px;\n  border-bottom: 3px solid black;\n}\n\n.gameoverScreen {\n  grid-row: 2;\n  grid-column: 1 / 3;\n  place-self: center;\n  background-color: white;\n  padding: 50px;\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{class e{constructor(e){this.len=e,this.cords=[],this.timesHit=0}hit(){this.timesHit+=1}isSunk(){return this.len===this.timesHit}}class n{constructor(){this.map=Array.from({length:10},(()=>Array(10).fill(null))),this.ships=[]}placeShip(n,t,r){let o=n[0],a=n[1],i=new e(t),s=n[0],c=n[1];for(let e=0;e<t;e++){if(c<0||c>9||s<0||s>9)return!1;if(this.adjacentShips(s,c))return!1;if("ship"===this.map[o][a])return!1;"horizon"===r?c+=1:s+=1}for(let e=0;e<t;e++)i.cords.push([o,a]),this.map[o][a]="ship","horizon"===r?a+=1:o+=1;return this.ships.push(i),!0}randomPlaceShip(e){for(;;){const n=Math.random()>=.5?"horizon":"vertical",[t,r]=[Math.round(10*Math.random()),Math.round(10*Math.random())];if(!1!==this.placeShip([t,r],e,n))return}}allShipsSunk(){for(let e=0;e<this.ships.length;e++)for(let n=0;n<this.ships[e].cords.length;n++){const[t,r]=this.ships[e].cords[n];if("ship"===this.map[t][r])return!1}return!0}receiveAttack(e){let n=e[0],t=e[1];switch(this.map[n][t]){case null:return this.map[n][t]="miss",!0;case"ship":this.map[n][t]="hit";for(let n=0;n<this.ships.length;n++)return void 0!==this.ships[n].cords.find((n=>n[0]===e[0]&&n[1]===e[1]))&&this.ships[n].hit(),!0;case"hit":case"miss":return!1}}adjacentShips(e,n){return 0!==e&&"ship"===this.map[e-1][n]||0!==n&&"ship"===this.map[e][n-1]||9!==e&&"ship"===this.map[e+1][n]||9!==n&&"ship"===this.map[e][n+1]||0!==e&&0!==n&&"ship"===this.map[e-1][n-1]||0!==e&&9!==n&&"ship"===this.map[e-1][n+1]||9!==e&&0!==n&&"ship"===this.map[e+1][n-1]||9!==e&&9!==n&&"ship"===this.map[e+1][n+1]}}class r{constructor(e,t){this.gameboard=new n,this.turn=e,this.isBot=t}botTurn(e){let n,t;do{t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}while(!1===e.receiveAttack([t,n]))}humanTurn(e,n,t){return!!e.receiveAttack([n,t])}}let o=[],a="horizon",i=[0,0],s=[],c=!1;function d(e,n){return e.gameboard.allShipsSunk()?"win":!!n.gameboard.allShipsSunk()&&"lose"}function l(e,n,t){return 0===o.length&&"win"===d(n,t)?m(!0):0===o.length&&"lose"===d(n,t)?m(!1):void("bot"===e?(document.querySelector(".truebot").remove(),p(n,t)):(document.querySelector(".falsebot").remove(),u(t,n)))}function u(e,n){const t=document.createElement("table"),r=document.createElement("h2");r.innerText="You",t.append(r),t.classList.add("falsebot");for(let r=0;r<10;r++){const o=document.createElement("tr");for(let t=0;t<10;t++){const a=f(r,t,e,n);o.append(a)}t.append(o)}0!==o.length&&t.append(...function(){const e=document.createElement("h2");e.innerText="Place your ships to start the game",e.classList.add("startText");const n=document.createElement("button");n.innerText="Vertical",n.classList.add("placementButton","vertical"),n.addEventListener("click",(()=>{a="vertical"}));const t=document.createElement("button");return t.innerText="Horizontal",t.classList.add("placementButton","horizontal"),t.addEventListener("click",(()=>{a="horizon"})),[e,n,t]}()),document.querySelector(".gameboards").append(t)}function p(e,n){const t=document.createElement("table"),r=document.createElement("h2");r.innerText="Computer",t.append(r),t.classList.add("truebot");for(let r=0;r<10;r++){const o=document.createElement("tr");for(let t=0;t<10;t++){const a=g(r,t,n,e);o.append(a)}t.append(o)}document.querySelector(".gameboards").append(t),d(n,e)}function h(e){return"ship"===e?"🚢":"miss"===e?"🌊":"hit"===e?"💥":""}function m(e){document.querySelector(".gameboards").remove();const n=document.createElement("h1");n.classList.add("gameoverScreen"),n.innerText=e?"You've sunk all enemy ships! Congratulations! Refresh the page to start over.":"You've lost the fight, but the war is not over yet... Refresh the page to start over.",document.querySelector("body").append(n)}function f(e,n,t,r){const d=document.createElement("td");return d.innerText=h(t.gameboard.map[e][n]),d.classList.add(t.gameboard.map[e][n]),0!==o&&function(e,n,t,r,d,u){c?(function(e,n){return i[1]>0&&e==s[0]&&n>=s[1]?(i[1]-=1,!0):i[0]>0&&e>=s[0]&&n==s[1]&&(i[0]-=1,!0)}(e,n)&&(u.innerText="🚢"),u.addEventListener("mouseout",(()=>{!function(e,n){s=[],i=[0,0],c=!1,l("player",n,e)}(t,r)}))):u.addEventListener("mouseenter",(()=>{!function(e,n,t,r,o){c=!0,s.push(e,n),"horizon"===a?i[1]=t:i[0]=t,l("player",o,r)}(e,n,d,t,r)})),u.addEventListener("click",(()=>{!function(e,n,t,r,i){!1!==i.gameboard.placeShip([e,n],t,a)&&o.pop(),l("player",r,i),l("bot",r,i)}(e,n,d,r,t)}))}(e,n,t,r,o[o.length-1],d),d}function g(e,n,t,r){const a=document.createElement("td");return"ship"!==r.gameboard.map[e][n]&&(a.innerText=h(r.gameboard.map[e][n]),a.classList.add(r.gameboard.map[e][n])),0===o.length&&a.addEventListener("click",(()=>{setTimeout((()=>{t.turn&&t.humanTurn(r.gameboard,e,n)&&([t.turn,r.turn]=[!1,!0],l("bot",r,t))}),200)})),r.turn&&(r.botTurn(t.gameboard),[t.turn,r.turn]=[!0,!1],l("player",r,t)),a}var b=t(379),v=t.n(b),y=t(795),x=t.n(y),S=t(569),k=t.n(S),w=t(565),E=t.n(w),T=t(216),L=t.n(T),M=t(589),z=t.n(M),P=t(426),A={};A.styleTagTransform=z(),A.setAttributes=E(),A.insert=k().bind(null,"head"),A.domAPI=x(),A.insertStyleElement=L(),v()(P.Z,A),P.Z&&P.Z.locals&&P.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".startButton");e.addEventListener("click",(()=>{e.remove();let n=new r(!0,!1),t=new r(!1,!0);t.gameboard.randomPlaceShip(5),t.gameboard.randomPlaceShip(4),t.gameboard.randomPlaceShip(3),t.gameboard.randomPlaceShip(2),t.gameboard.randomPlaceShip(2),t.gameboard.randomPlaceShip(1),t.gameboard.randomPlaceShip(1),function(){const e=document.createElement("div");e.classList.add("gameboards"),document.querySelector("body").append(e),o.push(1,1,2,2,3,4,5)}(),u(n,t),p(t,n)}))}))})()})();