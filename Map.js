var TiledMap = function(options)
{
	//Variables
	var Map = {};
		Map.mapUrl = options.src,						//url of the map on the server
		loadMap(),
		Map.Name = options.name,						//name you want to give to the map
		Map.IsScrolling = options.isScrolling || false,	//Tell if the background should scroll
		Map.PositionX = options.positionX || 0,
		Map.PositionY = options.positionY || 0,
		Map.ScrollSpeed = options.scrollSpeed,			//Map scrollSpeed
		Map.ScrollDirection = options.scrollDirection;	//Map scrollDirection ('Horizontal','Vertical')
		
	Map.Init = function()
	{
	    loadMap();
	    Map.TileSets.forEach(function(tileset){
	        var img = new Image();
	        img.src = tileset.image;
	    });
	};
	//Functions
	Map.Update = function()
	{
		if (Map.IsScrolling)
		{
			if(Map.ScrollDirection == 'Horizontal')
			{
				Map.PositionX += Map.ScrollSpeed;
			}
			else
			{
				Map.PositionY += Map.ScrollSpeed;
			}
		}
	};
	
	Map.Render = function()
	{
		Map.Layers.forEach(function(layer){
			for(var row = 0; row < layer.height; row++){
				for(var col = 0; col < layer.width; col++){
                    var tile = layer.data[(row*layer.width) + col];
                    if (tile)
                    {
                        var tileset = getTileSetFromGid(tile);
                        var nbTilePerLine = tileset.imagewidth / Map.TileWidth;
                        var image = new Image();
                        image.src = tileset.image;
                        //image.onload = function(){
                    					CTX.drawImage(  image,                              //Tileset(image) to use
                                        ((tile / nbTilePerLine) | 0) * Map.TileWidth, //X coord where to start clipping
                                        ((tile % nbTilePerLine) | 0) * Map.TileHeight,//Y coord where to start clipping
                                        Map.TileWidth,                              //Width of the image to clip
                                        Map.TileHeight,                             //Height of the image to clip
                                        Map.PositionX + col * Map.TileWidth,                        //X position on canvas where to draw
                                        Map.PositionY + row * Map.TileHeight,                       //Y position on canvas where to draw
                                        Map.TileWidth,                              //width of the canvas to draw on
                                        Map.TileHeight);                            //height of the canvas to draw on
                       // }
                    }
				}
			}
		});
	};

	function loadMap() {
		var xmlhttp;

		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
		        Map.JsonObject = JSON.parse(xmlhttp.responseText);						//Json object containing all the information of the map
				Map.Height = Map.JsonObject.height;					//Height of the map
        		Map.Width = Map.JsonObject.width;					//Width of the map
        		Map.TileWidth = Map.JsonObject.tilewidth;			//width of a tile
        		Map.TileHeight = Map.JsonObject.tileheight;			//height of a tile
        		Map.Layers = Map.JsonObject.layers;					//collection of all the layers
        		Map.TileSets = Map.JsonObject.tilesets;		//collection of tilesets
			}
            else{
				//alert("The map couldn't be loaded correctly\n" + xmlhttp.readyState + " et " + xmlhttp.status);
            }
		};
		xmlhttp.open("GET", Map.mapUrl, false);
		xmlhttp.send();
	}
	
	function getTileSetFromGid(gid){
        var goodTileSet;
        Map.TileSets.forEach(function(tileSet){
            if (tileSet.firstgid < gid)
            {
                goodTileSet = tileSet;
            }
        });
        return goodTileSet;
    }
	return Map;
};
