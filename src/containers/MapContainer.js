import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../components/MapComponent.js';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default MapContainer({
  apiKey: AIzaSyAD1OQJ9GI01WPuCAvHvZrOqLYoO9RHCck
})(MapContainer)