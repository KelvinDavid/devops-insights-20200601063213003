import React from 'react';
import './map.css';
import ReactDOM from 'react-dom';


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

