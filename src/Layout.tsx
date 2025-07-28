import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import MapPage from './Pages/Map';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';

const Layout = () => {
  const [currentPage, setCurrentPage] = useState<'map' | 'dashboard' | 'settings'>('map');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'settings': return <Settings />;
      default: return <MapPage />;
    }
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar onNavigate={setCurrentPage} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;