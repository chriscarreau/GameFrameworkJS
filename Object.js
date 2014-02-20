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
		gameObj.Direction = options.direction,
		gameObj.Sprite = options.sprite, //Image du joueur
		gameObj.Gravity = options.gravity,
		gameObj.IsAffectedByGravity = options.isAffectedByGravity || false;
	
	//----------------------------------------------------
	// RENDER
	//----------------------------------------------------
	function render()
	{
		//Code pour render les objets
	}

	//----------------------------------------------------
	// UPDATE
	//----------------------------------------------------
	function update()
	{
		//Code pour updater les objets;
		gameObj.Height =
		gameObj.Width = options.width || 0,
		gameObj.AccelerationX = options.accelX,
		gameObj.AccelerationY = options.accelY,
		gameObj.PositionX = options.posX,
		gameObj.PositionY = options.posY,
		gameObj.Direction = options.direction,
		gameObj.Sprite = options.sprite,
		gameObj.Gravity = options.gravity,
		gameObj.IsAffectedByGravity = options.isAffectedByGravity || false;		
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