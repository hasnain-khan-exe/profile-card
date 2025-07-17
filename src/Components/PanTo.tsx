import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface PanToProps {
  position: [number, number];
}

const PanTo: React.FC<PanToProps> = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.panTo(position);
  }, [position]);

  return null;
};

export default PanTo;