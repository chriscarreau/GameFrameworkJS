var GameObject = function(options)
{
	//----------------------------------------------------
	// GLOBAL VARIABLES
	//----------------------------------------------------
	var Object.Height = 0, //si non spécifé, prendre celle de l'image/sprite
		Object.Width = 0,
		Object.AccelerationX = 0,
		Object.AccelerationY = 0,
		Object.PositionX = 0,
		Object.PositionY = 0,
		Object.Direction = 'Left',
		Object.Sprite = 'Sprite',
		Object.Gravity = 0,
		Object.IsAffectedByGravity = true;
	
	//----------------------------------------------------
	// RENDER
	//----------------------------------------------------
	function render{
		//Code pour render les objets
	}

	//----------------------------------------------------
	// UPDATE
	//----------------------------------------------------
	function update{
		//Code pour updater les objets;
	}

	//----------------------------------------------------
	// CHECK COLLISION
	//----------------------------------------------------
	function checkCollision{
		//Code pou vérifier la collision
	}

	//----------------------------------------------------
	// ON COLLISION
	//----------------------------------------------------
	function onCollision{
		//To be defined by the coder
	}
}