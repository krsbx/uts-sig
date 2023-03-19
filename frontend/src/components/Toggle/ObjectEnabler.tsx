import { Button, Grid, GridItem } from '@chakra-ui/react';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { TOGGLEABLE_OBJECT } from '../../utils/constants';

const ObjectEnabler: React.FC<Props> = React.memo(
  ({ selected, setSelected }) => {
    const isEnabled = useCallback(
      (type: FrontEnd.ToggleableObject) => selected.includes(type),
      [selected]
    );

    const toggleObject = useCallback(
      (type: FrontEnd.ToggleableObject) => {
        setSelected((prev) => {
          const index = _.findIndex(prev, (val) => val === type);

          if (index === -1) return [...prev, type];

          prev.splice(index, 1);

          return [...prev];
        });
      },
      [selected, setSelected]
    );

    return (
      <Grid templateColumns={'repeat(3, 1fr)'}>
        <GridItem colSpan={1}>
          <Button
            backgroundColor={
              isEnabled(TOGGLEABLE_OBJECT.POS) ? 'whiteAlpha.800' : 'gray.300'
            }
            onClick={() => toggleObject(TOGGLEABLE_OBJECT.POS)}
          >
            Pos
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            backgroundColor={
              isEnabled(TOGGLEABLE_OBJECT.PLN) ? 'whiteAlpha.800' : 'gray.300'
            }
            onClick={() => toggleObject(TOGGLEABLE_OBJECT.PLN)}
          >
            Pln
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Button
            backgroundColor={
              isEnabled(TOGGLEABLE_OBJECT.SPBU) ? 'whiteAlpha.800' : 'gray.300'
            }
            onClick={() => toggleObject(TOGGLEABLE_OBJECT.SPBU)}
          >
            SPBU
          </Button>
        </GridItem>
      </Grid>
    );
  }
);

type Props = {
  selected: FrontEnd.ToggleableObject[];
  setSelected: React.StateSetter<FrontEnd.ToggleableObject[]>;
};

export default ObjectEnabler;
