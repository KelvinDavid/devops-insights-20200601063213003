import React, { useState } from 'react';
import Component from 'react';
import fetch from 'isomorphic-unfetch';
import InitalMap from '../components/Map.js';

export default class MapContainer extends Component
{
	function MapContainer(props)
	{
		this.state={
			markers:[{
				position: {lat: -37.78, lng: 175.28}
			}]
		};
	}
	render(){
		return (
			<div style={{height: "100%"}}>
				<InitalMap
					containerElement{
						<div style={{height: "100%"}}/>
					}
					mapElement{
						<div style={{height: "100%"}}/>
					}
					markers={this.state.makers}
				/>
			</div>
		);
	}
}

  
export default MapContainer


