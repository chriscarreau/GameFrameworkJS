//----------------------------------------------------
// EXAMPLE
//----------------------------------------------------

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
window.requestAnimFrame = function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
};

function animloop(){
  requestAnimFrame(animloop);
  ctx.rect(index,20,150,100);
  ctx.stroke();
  index++;
};



//----------------------------------------------------
// BASIC CODE
//----------------------------------------------------

//----------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------
var objArray = new arrray(), //http://stackoverflow.com/questions/5242050/how-to-access-js-array-defined-in-another-js-file
	CANVAS = document.getElementById('canvas'),
	CTX = canvas.getContext('2d'),
	GRAVITY = 0.98;
	

//----------------------------------------------------
// REQUEST ANIMATION FRAME
//----------------------------------------------------
window.requestAnimationFrame  = function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
};

//----------------------------------------------------
// GAME LOOP
//----------------------------------------------------
function gameLoop(){
	gameUpdate();
	gameRender();
	requestAnimationFrame(gameLoop);
}

//----------------------------------------------------
// GAME RENDER
//----------------------------------------------------
function gameRender(){
	ctx.clear();
	//Code pour render les objets
}

//----------------------------------------------------
// GAME UPDATE
//----------------------------------------------------
function gameUpdate(){
	//Code pour updater les objets;
}