/*eslint-disable no-unreachable */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './map.js';
import AppContainer from './containers/AppContainer.js';
import CityNResponse from './components/CityNResponse';
import CityN from './components/CityN';
const MarkerCity = "Hamilton";

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
              const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${MarkerCity},nz`)
        	  const json = await res.json()
              return(
              	<div>
	                <table className="table table-info table-hover marker">
	                    <tbody>
	                        <tr>
	                            <td>City</td>
	                            <td>{json.name}</td>
	                        </tr>
	                        <tr>
	                            <td>Temperature</td>
	                            <td>{json.main.temp}</td>
	                        </tr>
	                        <tr>
	                            <td>Pressure</td>
	                            <td>{json.main.pressure}</td>
	                        </tr>
	                        <tr>
	                            <td>Humidity</td>
	                            <td>{json.main.humidity}</td>
	                        </tr>
	                        <tr>
	                            <td>Temperature (Min)</td>
	                            <td>{json.main.temp_min}</td>
	                        </tr>
	                        <tr>
	                            <td>Temperature (Max)</td>
	                            <td>{json.main.temp_max}</td>
	                        </tr>
	                        <tr>
	                            <td>Conditions</td>
	                            <td>{json.weather[0].description}</td>
	                        </tr>
	                    </tbody>
	                </table>
              	</div>
              );
          })
        }}
      />
    );
  }
}

export default InitMap