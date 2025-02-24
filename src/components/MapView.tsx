import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MapContainer = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MapPlaceholder = styled.div`
  width: 250px;
  height: 250px;
  background-color: #1a1a1a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;

const LocationInfo = styled.div`
  margin-top: 10px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #888;
  display: block;
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: block;
`;

const districts = {
  'SOMA': { x: 150, y: 150 },
  'Mission': { x: 100, y: 200 },
  'Financial District': { x: 200, y: 100 },
  'Hayes Valley': { x: 50, y: 150 },
};

const MapView: React.FC = () => {
  const { location } = useSelector((state: RootState) => state.game);

  return (
    <MapContainer>
      <MapPlaceholder>
        Map visualization coming soon...
      </MapPlaceholder>
      <LocationInfo>
        <Label>Current Location</Label>
        <Value>{location.district}</Value>
        <Label>Type</Label>
        <Value>{location.type}</Value>
      </LocationInfo>
    </MapContainer>
  );
};

export default MapView; 