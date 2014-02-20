//----------------------------------------------------
// EXAMPLE
//----------------------------------------------------

var CANVAS;
var CTX;
/*
var canvas;
var ctx;
var index= 20;
window.onload = function(){
    CANVAS = document.getElementById('canvas');
	CANVAS.width = 1000;
	CANVAS.height = 600;
	CTX = canvas.getContext('2d');
	map = new TiledMap({name:"map", src:"map.json"});
    setTimeout(function() {
        map.Render();
    }, 5000);
};

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
*/


//----------------------------------------------------
// BASIC CODE
//----------------------------------------------------

//----------------------------------------------------
// GLOBAL VARIABLES
//----------------------------------------------------

var objArray = new Array(), //http://stackoverflow.com/questions/5242050/how-to-access-js-array-defined-in-another-js-file
	CANVAS = document.getElementById('canvas'),
	CTX = canvas.getContext('2d'),
	CTXHEIGHT = canvas.height,
	CTXWIDTH = canvas.width,
	GRAVITY = 0.98;

//----------------------------------------------------
// INITIALIZE
//----------------------------------------------------
function initCanvas(){

}

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

//----------------------------------------------------
// EVENTS LISTENERS
//----------------------------------------------------
window.addEventListener('load', function(event) {
	initCanvas();
});
