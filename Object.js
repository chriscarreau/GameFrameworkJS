var GameObject = function(options)
{
	//----------------------------------------------------
	// GLOBAL VARIABLES
	//----------------------------------------------------
	var gameObj = {};
		gameObj.Height = options.height || 0, //si non spécifé, prendre celle de l'image/sprite
		gameObj.Width = options.width || 0,
		gameObj.AccelerationX = options.accelX,
		gameObj.AccelerationY = options.accelY,
		gameObj.PositionX = options.posX,
		gameObj.PositionY = options.posY,
		gameObj.Direction = {LEFT:false, RIGHT:false, UP:false, DOWN:false},
		gameObj.Sprite = options.sprite, //Image du joueur
		gameObj.Gravity = options.gravity || 0,
		gameObj.IsAffectedByGravity = options.isAffectedByGravity || false;
	
	//----------------------------------------------------
	// RENDER
	//----------------------------------------------------
	function render()
	{
		//Code pour render les objets
		Map.Render();
		ctx.save();
		ctx.translate(); //http://jlongster.com/Making-Sprite-based-Games-with-Canvas
		ctx.restore;
	}

	//----------------------------------------------------
	// UPDATE
	//----------------------------------------------------
	function update()
	{
		//Code pour updater les objets;
		
	}
	
	function updateMovement()
	{
		//Code pour updater le mouvement des objets;
		 gameObj.PositionX += gameObj.AccelX;
		 if (gameObj.isAffectedByGravity)
		 {
			gameObj.AccelY += GRAVITY;
		 }
		 gameObj.PositionY += gameObj.AccelY;
	}
	//----------------------------------------------------
	// CHECK COLLISION
	//----------------------------------------------------
	function checkCollision()
	{
		//Code pour vérifier la collision
	}

	//----------------------------------------------------
	// ON COLLISION
	//----------------------------------------------------
	function onCollision()
	{
		//To be defined by the coder
	}
	return gameObj;
}