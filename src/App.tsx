import { useState, useEffect } from 'react';
import ProfileCard from './Components/ProfileCard'
import OpenStreetMap from './Components/OpenStreetMap';
import Vehicle from './Components/Vehicle';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mapStyle, setMapStyle] = useState<'street' | 'satellite' | 'dark'>('street');
  const initialPositions: Record<string, [number, number]> = {
    "ABS-007": [33.5745, 71.4658], // gpgc
    "CT-653": [33.6050, 71.4613], // kda park
    "BS-112": [33.5473, 71.5483], // cement factory
    "HAS-666": [33.5877, 71.4427], //king tehsil gate
    "AAC-606": [33.5234, 71.4458] // kust
  };
  const [vehiclePositions, setVehiclePositions] = useState(initialPositions);
  const vehicles = Object.keys(vehiclePositions);
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);
  const handleStyleChange = (style: 'street' | 'satellite' | 'dark') => {
    setMapStyle(style);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setVehiclePositions(prev => {
        const updatedPositions = { ...prev };

        Object.entries(prev).forEach(([vehicle, [lat, lng]]) => {
          // If you only want to move the activeVehicle, use:
          // if (vehicle !== activeVehicle) return;

          const driftLat = lat + (Math.random() - 0.5) * 0.001;
          const driftLng = lng + (Math.random() - 0.5) * 0.001;
          updatedPositions[vehicle] = [driftLat, driftLng];
        });

        return updatedPositions;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeVehicle]);



  return (
    <div className="container-flex">
      <div className="row justify-content-center">
        <ProfileCard
          name="Sarah Ali"
          image="https://randomuser.me/api/portraits/women/17.jpg"
          title="Frontend Developer"
          description="Loves building responsive UIs with React and TypeScript."
        />
        <ProfileCard
          name="Ahmad Khan"
          image="https://randomuser.me/api/portraits/men/75.jpg"
          title="Backend Engineer"
          description="Node.js database enthusiast."
        />
        <ProfileCard
          name="Homer Simpson"
          image="https://randomuser.me/api/portraits/men/65.jpg"
          title=""
          description="Loves erldor. Undessrrvises."
        />
      </div>
      <h2 className="p-3 text-primary">Live Vehicles</h2>
      <div className="row flex-nowrap g-0">
        <div className="col-md-3 pe-0 d-flex flex-column">
          <div className="bg-white shadow-none flex-shrink-0" id="vehicle-menu" style={{ border: 'none', boxShadow: 'none', minWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
            <div className="card-body">
              <h3 className="card-title mb-3 mt-1 ms-2">Vehicles</h3>
              <div className="list-group mb-3 ms-1" id='list-tab' role='tablist'>
                {vehicles.map(v => (
                  <Vehicle
                    key={v}
                    vehicle={v}
                    active={activeVehicle === v}
                    onClick={() => setActiveVehicle(v)}
                  />
                ))}
              </div>
              <h4 className="card-subtitle mb-4 ms-2">Map Type</h4>
              <div className="btn-group ms-2" role="group">
                <button className="btn btn-primary me-2" onClick={() => handleStyleChange('street')}>Street</button>
                <button className="btn btn-primary me-2" onClick={() => handleStyleChange('satellite')}>Satellite</button>
                <button className="btn btn-primary" onClick={() => handleStyleChange('dark')}>Dark</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 ps-0 d-flex" style={{ margin: 0, flex: 1 }}>
          <div className="bg-white shadow-none w-100 h-100 d-flex flex-column" style={{ border: 'none', boxShadow: 'none', margin: 0, height: '100%' }}>
            <div className="p-2 flex-grow-1 d-flex" style={{ border: 'none', margin: 0, height: '100%' }}>
              <OpenStreetMap
                position={vehiclePositions[activeVehicle] ?? [33.5745, 71.4658]}
                vehicleId={activeVehicle}
                mapStyle={mapStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;