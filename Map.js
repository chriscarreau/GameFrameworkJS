var TiledMap = function(options)
{
	var mapUrl = options.src,
		Name = options.name;
	
	function loadMap() {
		var xmlhttp;

		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200){
				document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET", mapUrl, true);
		xmlhttp.send();
	}
}