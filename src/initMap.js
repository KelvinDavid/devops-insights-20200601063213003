import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './map.js';
import AppContainer from './containers/AppContainer.js';

class InitMap extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: -40.900558, lng: 174.885971 },
          zoom: 5
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: -37.787003, lng: 175.279251 },
            map: map,
            title: 'Hamilton Weather'
          });
	        map.addListener('center_changed', function() {
	          // 3 seconds after the center of the map has changed, pan back to the
	          // marker.
	          window.setTimeout(function() {
	            map.panTo(marker.getPosition());
	          }, 3000);
	        });
          marker.addListener('click', e => {
              map.setZoom(9)
              map.setCenter({ lat: -37.787003, lng: 175.279251 })
              AppContainer('Hamilton')
          })
        }}
      />
    );
  }
}

export default InitMap