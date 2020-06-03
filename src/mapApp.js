import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/MapComponent';
import MapContainer from './containers/MapContainer';

function MapApp() {
  return (
    <div className="App">
      <MapContainer />
    </div>
  );
}

export default MapApp;
