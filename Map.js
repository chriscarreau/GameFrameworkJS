var TiledMap = function(options)
{
	var Map = {},
		mapUrl = options.src,
		Map.Name = options.name,
		Map.JsonObject = loadMap(),
		Map.Height = JsonObject.height,
		Map.Width = JsonObject.width,
		Map.TileWidth = JsonObject.tilewidth,
		Map.TileHeight = JsonObject.tileheight;
	
	var 
	function loadMap() {
		var xmlhttp;

		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200){
				return JSON.parse(xmlhttp.responseText);
			}
		  else{
				alert("The map couldn't be load correctly");
		  }
		}
		xmlhttp.open("GET", mapUrl, true);
		xmlhttp.send();
	}
	
	
}