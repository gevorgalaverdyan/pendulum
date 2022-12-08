const timeDiv = document.querySelector("#timeDiv");

function myFunction() {
  timeDiv.innerHTML = new Date();
}

var interval = setInterval(function () {
  myFunction();
}, 2000);

myFunction();

function objects(element, ctx) {
  //line/* w   w  w . d  e    m o  2 s   . c  o  m  */
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 190);
  ctx.closePath();
  ctx.strokeStyle = "#a29376";
  ctx.stroke();
  //circle 01
  ctx.beginPath();
  ctx.arc(200, 225, 35, 0, 360);
  ctx.fillStyle = "#828386";
  ctx.fill();
}
var rotation = Math.PI / 180,
  translation = -3.5,
  counter = 0;
function draw() {
  var element = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, element.width, element.height);
  ctx.translate(0, translation);
  ctx.rotate(rotation);
  objects(element, ctx);
  if (counter == 25) {
    rotation *= -1;
    translation *= -1;
    counter = -25;
  }
  counter += 1;
  window.requestAnimationFrame(draw);
}
window.onload = draw;
