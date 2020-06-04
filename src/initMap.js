import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './map'

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
          marker.addListener('click', e => {
              map.setZoom(9)
              map.setCenter({ lat: -37.787003, lng: 175.279251 })
          })
        }}
      />
    );
  }
}

export default InitMap