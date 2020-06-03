import React from 'react';
const google = window.google;


function initMap(){
	var location = {lat: -37.78, lng: 175.28};
	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom:4, 
	   	center: location
	});
	var marker = new google.maps.Marker({
	    position: location,
	   	map: map,
	    title: 'Hamilton'
	});
	marker.addListener('click', function(){
	    map.setZoom(8);
	    map.setCenter(marker.getPosition());
	});
}


export default Map