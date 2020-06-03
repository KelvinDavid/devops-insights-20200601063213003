import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";
import Map from './map.js'
import './map.css'

//function MapApp() {
//  return (
//    <div className="map">
//      <Map />
//    </div>
//  );
//}

function MapApp(){
	return(
		<div className="MapApp">
			<Helmet>
				<script src="./map.js"></script>
			</Helmet>
		</div>
	);
}

export default MapApp;

