import { Flex } from '@chakra-ui/react';
import { Map } from 'leaflet';
import { createRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const App = () => {
  const mapRef = createRef<Map>();

  return (
    <Flex
      backgroundColor={'gray.800'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
    >
      <MapContainer
        center={[-5.45, 105.26667]}
        zoom={11}
        minZoom={10}
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
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Flex>
  );
};

export default App;
