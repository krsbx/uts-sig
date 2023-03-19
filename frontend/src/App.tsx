import { Flex } from '@chakra-ui/react';
import { Map } from 'leaflet';
import { createRef, useCallback, useState } from 'react';
import AdministrasiKabupaten from './components/AdministrasiKabupaten';
import AdministrasiKecamatan from './components/AdministrasiKecamatan';
import MapContainer from './components/MapContainer';
import useResourceLoader from './hooks/useResourceLoader';
import { VIEWABLE_AREA } from './utils/constants';

const App = () => {
  const mapRef = createRef<Map>();
  const [selectedArea, setSelectedArea] = useState<
    (typeof VIEWABLE_AREA)[keyof typeof VIEWABLE_AREA]
  >(VIEWABLE_AREA.KABUPATEN);

  useResourceLoader();

  const changeToKecamatan = useCallback(
    () => setSelectedArea(VIEWABLE_AREA.KECAMATAN),
    []
  );
  const changeToKabupaten = useCallback(
    () => setSelectedArea(VIEWABLE_AREA.KABUPATEN),
    []
  );

  return (
    <Flex
      backgroundColor={'gray.800'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
    >
      <MapContainer ref={mapRef}>
        <AdministrasiKabupaten />
        <AdministrasiKecamatan />
      </MapContainer>
    </Flex>
  );
};

export default App;
