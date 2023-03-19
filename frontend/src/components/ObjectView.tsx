import React, { useMemo } from 'react';
import { TOGGLEABLE_OBJECT } from '../utils/constants';
import KantorPln from './KantorPln';
import KantorPos from './KantorPos';
import Spbu from './Spbu';

const ObjectView = React.memo<Props>(({ selected }) => {
  const Objects = useMemo(() => {
    const result: React.FC[] = [];

    if (selected.includes(TOGGLEABLE_OBJECT.PLN)) result.push(KantorPln);
    if (selected.includes(TOGGLEABLE_OBJECT.POS)) result.push(KantorPos);
    if (selected.includes(TOGGLEABLE_OBJECT.SPBU)) result.push(Spbu);

    return result;
  }, [selected]);

  return (
    <React.Fragment>
      {Objects.map((Object, index) => (
        <Object key={`object-${index}`} />
      ))}
    </React.Fragment>
  );
});

type Props = {
  selected: FrontEnd.ToggleableObject[];
};

export default ObjectView;
