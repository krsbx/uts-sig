import { Map } from 'leaflet';
import React from 'react';
import {
  MapContainer as Container,
  MapContainerProps,
  TileLayer,
} from 'react-leaflet';

const MapContainer = React.forwardRef<Map, MapContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <Container
        center={[-5.45, 105.26667]}
        zoom={12}
        minZoom={11}
        maxZoom={12}
        scrollWheelZoom={true}
        style={{
          width: '100%',
          height: '100%',
        }}
        attributionControl={false}
        maxBounds={[
          [81.427274, -173.201662],
          [-84.136577, 178.66761],
        ]}
        {...props}
        ref={ref}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </Container>
    );
  }
);

export default MapContainer;
