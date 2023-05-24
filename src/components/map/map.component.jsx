import React, { useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import "./map.css";

const MapComponent = (props) => {
  const defaultPosition = [31.506281, 35.090419]; // Coordinates for Palestine Polytechnic University (PPU)

  const mapStyle = {
    height: '400px',
    width: '600px'
  };

//   function LocationMarker() {
//     const [location, setLocation] = useState({ latitude: '', longitude: '' });

//     const map = useMapEvents({
//       click(e) {
//         const { lat, lng } = e.latlng;
//         setLocation({ latitude: lat.toString(), longitude: lng.toString() });
//         console.log(location);
//         map.flyTo(e.latlng, map.getZoom());
//       },
//     });

//     return location.latitude === '' ? null : (
//       <Marker position={[location.latitude, location.longitude]}>
//         <Popup>You clicked here</Popup>
//       </Marker>
//     );
//   }
function LocationMarker() {
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
  
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const newLocation = { latitude: lat.toString(), longitude: lng.toString() };
        setLocation(newLocation);
        props.setLocation(newLocation); // Set location in props
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    return location.latitude === '' ? null : (
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>You clicked here</Popup>
      </Marker>
    );
  }
  
  return (
    <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom={true} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
