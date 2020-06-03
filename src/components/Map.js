import {
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const InitalMap = withGoogleMap(props => {
	return(
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={8}
			defaultCenter={{lat: -37.78, lng: 175.28}}
		>
		<Marker
			key(index)
			position={marker.position}
			onClick={() => props.onMarkerClick(marker)}
		/>
		</GoogleMap>
		)

});

export default InitalMap
