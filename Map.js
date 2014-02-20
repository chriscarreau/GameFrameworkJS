var TiledMap = function(options)
{
	//Variables
	var Map = {},
		Map.mapUrl = options.src,						//url of the map on the server 
		Map.Name = options.name, 						//name you want to give to the map
		Map.JsonObject = loadMap(),						//Json object containing all the information of the map
		Map.Height = Map.JsonObject.height,					//Height of the map
		Map.Width = Map.JsonObject.width,					//Width of the map
		Map.TileWidth = Map.JsonObject.tilewidth,			//width of a tile
		Map.TileHeight = Map.JsonObject.tileheight,			//height of a tile
		Map.Layers = Map.JsonObject.layers,					//collection of all the layers
		Map.TileSets = Map.JsonObject.tilesets,				//collection of tilesets
		Map.IsScrolling = options.isScrolling || false,	//Tell if the background should scroll
		Map.PositionX = options.positionX || 0,
		Map.PositionY = options.positionY || 0,
		Map.ScrollSpeed = options.scrollSpeed,			//Map scrollSpeed
		Map.ScrollDirection = options.scrollDirection;	//Map scrollDirection ('Horizontal','Vertical')
		
	//Functions
	Map.Update = function()
	{
		if (Map.IsScrolling)
		{
			if(Map.ScrollDirection == 'Horizontal')
			{
				Map.PositionX += Map.ScrollSpeed
			}
			else
			{
				Map.PositionY += Map.ScrollSpeed
			}
		}
	}
	
	Map.Render = function()
	{
		Map.layers.forEach(function(layer){
			for(var row = 0; row < layer.width; row++){
				for(var col = 0; col < layer.height; col++){
					
				}
			}
		});
	}

	function loadMap() {
		var xmlhttp;

		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200){
				return JSON.parse(xmlhttp.responseText);
			}
		  else{
				alert("The map couldn't be loaded correctly");
		  }
		}
		xmlhttp.open("GET", mapUrl, true);
		xmlhttp.send();
	}
	return Map;
}