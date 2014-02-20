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
	GRAVITY = 0.98;

//----------------------------------------------------
// INITIALIZE
//----------------------------------------------------
<<<<<<< HEAD
function initCanvas(){
	CANVAS = document.getElementById('canvas'),
	CANVAS.width = 1000,
	CANVAS.height = 600,
	CTX = CANVAS.getContext('2d');
=======
function initCanvas()
{

>>>>>>> 53359bcb05e083256a519adb6625ec0a83842e0e
}

//----------------------------------------------------
// REQUEST ANIMATION FRAME
//----------------------------------------------------
window.requestAnimationFrame  = function()
{
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
function gameLoop()
{
	gameUpdate();
	gameRender();
	requestAnimationFrame(gameLoop);
}

//----------------------------------------------------
// GAME RENDER
//----------------------------------------------------
function gameRender()
{
	ctx.clear();
	//Code pour render les objets
	objArray.forEach(function(obj) 
	{
		obj.render();
	}
}

//----------------------------------------------------
// GAME UPDATE
//----------------------------------------------------
function gameUpdate()
{
	//Code pour updater les objets;
	objArray.forEach(function(obj) 
	{
		obj.update();
	}
}

//----------------------------------------------------
// EVENTS LISTENERS
//----------------------------------------------------
window.addEventListener('load', function(event) {
	initCanvas();
});
