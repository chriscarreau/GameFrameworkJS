var GameObject = function(options)
{
	//----------------------------------------------------
	// GLOBAL VARIABLES
	//----------------------------------------------------
	var height = 600, //si non spécifé, prendre celle de l'image/sprite
		width = 1000,
		accelX = 0,
		accelY = 0,
		posX = 0,
		posY = 0;
		dir = 'Left';
		sprite = 'Sprite';
		gravity = 0;
		isAffectedByGravity = true;
		
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