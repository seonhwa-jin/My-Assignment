const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
]; /* 18개 */

const body = document.querySelector("body");
const btn = document.querySelector("button");



function colorChange(){
  const colorpick1 = colors[Math.floor(Math.random()*18)];
  const colorpick2 = colors[Math.floor(Math.random()*18)];
  body.style.background =  "linear-gradient(90deg,"+colorpick1+","+colorpick2+")";
}


btn.addEventListener("click",colorChange);