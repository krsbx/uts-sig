import { Flex, Stack } from '@chakra-ui/react';
import { Map } from 'leaflet';
import { createRef, useState } from 'react';
import AreaView from './components/AreaView';
import MapContainer from './components/MapContainer';
import Toggle from './components/Toggle';
import useResourceLoader from './hooks/useResourceLoader';
import { VIEWABLE_AREA } from './utils/constants';

const App = () => {
  const mapRef = createRef<Map>();
  const [selectedArea, setSelectedArea] = useState<FrontEnd.ViewableArea>(
    VIEWABLE_AREA.KABUPATEN
  );
  const [objects, setObjects] = useState<FrontEnd.ToggleableObject[]>([]);

  useResourceLoader();

  return (
    <Flex
      backgroundColor={'gray.800'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
      position={'relative'}
    >
      <MapContainer ref={mapRef}>
        <AreaView selected={selectedArea} />
      </MapContainer>
      <Stack position={'absolute'} zIndex={999} right={5} top={5}>
        <Toggle.ViewAbleArea
          selected={selectedArea}
          setSelected={setSelectedArea}
        />
        <Toggle.ObjectEnabler selected={objects} setSelected={setObjects} />
      </Stack>
    </Flex>
  );
};

export default App;
