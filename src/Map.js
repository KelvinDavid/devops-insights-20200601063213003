//import React, { useState } from 'react';
//import Component from 'react';
import fetch from 'isomorphic-unfetch';
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

//import React, { Component } from 'react';
//import GoogleMapReact from 'google-map-react';
//
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
//class MapContainer extends Component {
//  static defaultProps = {
//    center: {
//      lat: 59.95,
//      lng: 30.33
//    },
//    zoom: 11
//  };
//
//  render() {
//    return (
//      // Important! Always set the container height explicitly
//      <div style={{ height: '100%', width: '100%' }}>
//        <GoogleMapReact
//          bootstrapURLKeys={{ key: 'AIzaSyAD1OQJ9GI01WPuCAvHvZrOqLYoO9RHCck'}}
//          defaultCenter={this.props.center}
//          defaultZoom={this.props.zoom}
//        >
//          <AnyReactComponent
//            lat={59.955413}
//            lng={30.337844}
//            text="My Marker"
//          />
//        </GoogleMapReact>
//      </div>
//    );
//  }
//}

import React, { Component } from 'react';
import { render } from 'react-dom';
//
//class Map extends Component {
//  constructor(props) {
//    super(props);
//    this.onScriptLoad = this.onScriptLoad.bind(this)
//  }
//
//  onScriptLoad() {
//    const map = new window.google.maps.Map(
//      document.getElementById(this.props.id),
//      this.props.options);
//    this.props.onMapLoad(map)
//  }
//
//  componentDidMount() {
//    if (!window.google) {
//      var s = document.createElement('script');
//      s.type = 'text/javascript';
//      s.src = `https://maps.google.com/maps/api/js?key=YOUR_API_KEY`;
//      var x = document.getElementsByTagName('script')[0];
//      x.parentNode.insertBefore(s, x);
//      // Below is important. 
//      //We cannot access google.maps until it's finished loading
//      s.addEventListener('load', e => {
//        this.onScriptLoad()
//      })
//    } else {
//      this.onScriptLoad()
//    }
//  }
//
//  render() {
//    return (
//      <div style={{ width: 500, height: 500 }} id={this.props.id} />
//    );
//  }
//}

class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8
    });
  }

  render() {
    return (
      <div style={{ width: 500, height: 500,  }} id="map" />
    );
  }
}

export default Map

  
//export default MapContainer


