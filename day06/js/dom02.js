const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#out-over");
console.log(boxClick);
console.log(boxOver);
console.log(boxOut);
console.log(boxOverOut);

function changeBgGreen() {
  this.setAttribute("style", "background-color:green");
  console.log(this);
}

boxClick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", changeBgGreen);

boxOut.addEventListener("mouseout", function () {
  boxOut.setAttribute("style", "background-color:lightblue");
});

function changeBgPink() {
  this.setAttribute("style", "background-color:pink");
  console.log(this);
}

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgPink);

const click2 = document.querySelector("#click2");
// dblclick : 더블 클릭시 이벤트 적용됨
click2.addEventListener("dblclick", function (e) {
  this.setAttribute("style", "background-color:yellow");
  console.log("클릭 좌표:", e.clientX, e.clientY);
});
