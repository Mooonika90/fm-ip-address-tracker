import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import locationIcon from '../assets/icon-location.svg';

function Map({ coordinates }) {
	const position = [coordinates.lat, coordinates.lng];
	const newIcon = new L.icon({ iconUrl: locationIcon });
	return (
		<MapContainer
			key={coordinates.lat}
			className='map'
			center={position}
			zoom={12}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='Google Maps'
				url='https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
			/>
			<Marker position={position} icon={newIcon}></Marker>
		</MapContainer>
	);
}

export default Map;
