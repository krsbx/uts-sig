import { Button, Stack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { VIEWABLE_AREA } from '../../utils/constants';

const ViewAbleArea: React.FC<Props> = React.memo(
  ({ selected, setSelected }) => {
    const changeTo = useCallback(
      (type: FrontEnd.ViewableArea) => {
        if (selected === type) return;

        setSelected(type);
      },
      [selected, setSelected]
    );

    return (
      <Stack direction={'row'}>
        <Button
          onClick={() => changeTo(VIEWABLE_AREA.KABUPATEN)}
          backgroundColor={
            selected === VIEWABLE_AREA.KABUPATEN ? 'whiteAlpha.800' : 'gray.300'
          }
        >
          Kabupaten
        </Button>
        <Button
          onClick={() => changeTo(VIEWABLE_AREA.KECAMATAN)}
          backgroundColor={
            selected === VIEWABLE_AREA.KECAMATAN ? 'whiteAlpha.800' : 'gray.300'
          }
        >
          Kecamatan
        </Button>
        <Button
          onClick={() => changeTo(VIEWABLE_AREA.BANGUNAN)}
          backgroundColor={
            selected === VIEWABLE_AREA.BANGUNAN ? 'whiteAlpha.800' : 'gray.300'
          }
        >
          Bangunan
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
