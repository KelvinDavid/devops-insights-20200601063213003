import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8
    });
  }

  render() {
    return (
      <div style={{ width: '70%', height: '70%', margin: 0 auto  }} id="map" />
    );
  }
}

export default Map

  
//export default MapContainer


