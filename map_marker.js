function initMap() {

  // The location of British Columbia
  var british_columbia = {lat: 53.726669, lng: -127.647621};
  
  // The map, centered at British Columbia
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 5, center: british_columbia});

  //Window that would open when a marker is clicked
  var infoWindow = new google.maps.InfoWindow;

   // Adding markers on the map by using the function addMarker
   for(var i = 0;i < markers.length;i++){
        addMarker(markers[i]);
    }

    function addMarker(props){
    	var marker = new google.maps.Marker({
    		position:props.coords,
    		map:map,
			label:{text:props.name,color:'white'},
   	});

    //Changing the marker logo to pizza logo
   	marker.setIcon({url:'pizza.png',labelOrigin: new google.maps.Point(5,40)});;

   	//Opening the infoWindow when a user clicks the marker
    marker.addListener('click', function(){
    	infoWindow.setContent(props.content);
    	infoWindow.open(map, marker);
    });

  }
 }

//Reloading the infoWindow automatically by calling the function reloadIFrame()
window.setInterval("reloadIFrame();", 3000);

function reloadIFrame() {
	var x = document.getElementsByClassName("frame");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].src=x[i].src;
	}
}
 