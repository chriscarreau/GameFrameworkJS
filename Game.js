var canvas;
window.onload = function(){
	canvas = document.getElementById
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
  render();
})();

ctx.rect(index,20,150,100);
ctx.stroke();