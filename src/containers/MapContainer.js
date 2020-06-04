//import React, { useState } from 'react';
//import Component from 'react';
//import fetch from 'isomorphic-unfetch';
//import InitalMap from '../components/Map.js';

//	function MapContainer(props)
//	{
//		this.state={
//			markers:[{
//				position: {lat: -37.78, lng: 175.28}
//			}]
//		};
//	}
//	render(){
//		return (
//			<div style={{height: "100%"}}>
//				<InitalMap
//					containerElement{
//						<div style={{height: "100%"}}/>
//					}
//					mapElement{
//						<div style={{height: "100%"}}/>
//					}
//					markers={this.state.makers}
//				/>
//			</div>
//		);
//	}

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAD1OQJ9GI01WPuCAvHvZrOqLYoO9RHCck'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
  
//export default MapContainer


