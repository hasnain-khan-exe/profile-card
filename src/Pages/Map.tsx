import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Vehicle from '../Components/Vehicle';
import PanTo from '../Components/PanTo';
import 'leaflet/dist/leaflet.css';
import '../App.css'; 

const initialPositions: Record<string, [number, number]> = {
  "ABS-007": [33.5745, 71.4658],
  "CT-653": [33.6050, 71.4613],
  "BS-112": [33.5473, 71.5483],
  "HAS-666": [33.5877, 71.4427],
  "AAC-606": [33.5234, 71.4458]
};

const tileSources = {
  street: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
};

const MapPage = () => {
  const [vehiclePositions, setVehiclePositions] = useState(initialPositions);
  const vehicles = Object.keys(vehiclePositions);
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);
  const [mapStyle, setMapStyle] = useState<'street' | 'satellite' | 'dark'>('street');

  useEffect(() => {
    const interval = setInterval(() => {
      setVehiclePositions(prev => {
        const updated = { ...prev };
        Object.entries(prev).forEach(([v, [lat, lng]]) => {
          const driftLat = lat + (Math.random() - 0.5) * 0.001;
          const driftLng = lng + (Math.random() - 0.5) * 0.001;
          updated[v] = [driftLat, driftLng];
        });
        return updated;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [activeVehicle]);

  const position = vehiclePositions[activeVehicle] ?? [33.5745, 71.4658];

  return (
    <div className="container-flex">
      <h2 className="p-3 text-primary">Live Vehicles</h2>
      <div className="row flex-nowrap g-0" style={{width: '100%', height: '100vh' }}>
      
        <div className="col-md-9 ps-0 d-flex">
          <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100vh' }}>
            <TileLayer url={tileSources[mapStyle]} />
            <PanTo position={position} />
            <Marker position={position}>
              <Popup><strong>{activeVehicle}</strong></Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Vehicle Panel */}
        <div className="col-md-3 pe-0 d-flex flex-column">
          <div className="bg-white shadow-none flex-shrink-0 px-3" style={{ height: '100%' }}>
            <h3 className="mt-3 mb-2 text-secondary">Vehicles</h3>
            <div className="list-group mb-4">
              {vehicles.map(v => (
                <Vehicle key={v} vehicle={v} active={activeVehicle === v} onClick={() => setActiveVehicle(v)} />
              ))}
            </div>
            <h4 className="mb-3">Map Type</h4>
            <div className="btn-group">
              <button className="btn btn-outline-primary me-2" onClick={() => setMapStyle('street')}>Street</button>
              <button className="btn btn-outline-primary me-2" onClick={() => setMapStyle('satellite')}>Satellite</button>
              <button className="btn btn-outline-primary" onClick={() => setMapStyle('dark')}>Dark</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;