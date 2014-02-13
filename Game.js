var canvas;
var ctx;
var index= 20;
window.onload = function(){
	canvas = document.getElementById("canvas");
	canvas.width = 1000;
	canvas.height = 600;
	ctx = canvas.getContext("2d");
}

var index = 20;
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function animloop(){
  requestAnimFrame(animloop);
  ctx.rect(index,20,150,100);
  ctx.stroke();
  index++;
})();

