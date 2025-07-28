interface SidebarProps {
  onNavigate: (page: 'map' | 'dashboard' | 'settings') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => (
  <div className="d-flex flex-column bg-light border-end p-3" style={{ width: "190px", height: "100vh" }}>
    <h3 className="mb-4">Tracking App</h3>
    <nav className="nav flex-column">
      <button className="mb-2 btn btn-outline-dark btn-lg" onClick={() => onNavigate('map')}>Map</button>
      <button className="mb-2 btn btn-outline-dark btn-lg" onClick={() => onNavigate('dashboard')}>Dashboard</button>
      <button className="btn btn-outline-dark btn-lg" onClick={() => onNavigate('settings')}>Settings</button>
    </nav>
  </div>
);

export default Sidebar;