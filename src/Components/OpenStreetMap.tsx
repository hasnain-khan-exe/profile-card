import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PanTo from './PanTo';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  position: [number, number];
  vehicleId: string;
  mapStyle: 'street' | 'satellite' | 'dark'
}

const tileSources = {
  street: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
};


const OpenStreetMap: React.FC<MapProps> = ({ position, vehicleId, mapStyle }) => (
  <div style={{ width: '100%', height: 'calc(100vh - 50px)' }}>
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
      <TileLayer url={tileSources[mapStyle]} />
      <PanTo position={position} />
      <Marker position={position}>
        <Popup>
          <strong>{vehicleId}</strong>
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default OpenStreetMap;