import { Button, Stack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { VIEWABLE_AREA } from '../../utils/constants';

const ViewAbleArea: React.FC<Props> = React.memo(
  ({ selected, setSelected }) => {
    const changeToKabupaten = useCallback(() => {
      if (selected === VIEWABLE_AREA.KABUPATEN) return;

      setSelected(VIEWABLE_AREA.KABUPATEN);
    }, [selected, setSelected]);

    const changeToKecamatan = useCallback(() => {
      if (selected === VIEWABLE_AREA.KECAMATAN) return;

      setSelected(VIEWABLE_AREA.KECAMATAN);
    }, [selected, setSelected]);

    return (
      <Stack direction={'row'}>
        <Button
          onClick={changeToKabupaten}
          backgroundColor={
            selected === VIEWABLE_AREA.KABUPATEN ? 'whiteAlpha.800' : 'gray.300'
          }
        >
          Kabupaten
        </Button>
        <Button
          onClick={changeToKecamatan}
          backgroundColor={
            selected === VIEWABLE_AREA.KECAMATAN ? 'whiteAlpha.800' : 'gray.300'
          }
        >
          Kecamatan
        </Button>
      </Stack>
    );
  }
);

type Props = {
  selected: FrontEnd.ViewableArea;
  setSelected: React.StateSetter<FrontEnd.ViewableArea>;
};

export default ViewAbleArea;
