import React from 'react';
import { VIEWABLE_AREA } from '../utils/constants';
import AdministrasiKabupaten from './AdministrasiKabupaten';
import AdministrasiKecamatan from './AdministrasiKecamatan';
import Bangunan from './Bangunan';

const AreaView = React.memo<Props>(({ selected }) => {
  switch (selected) {
    case VIEWABLE_AREA.KABUPATEN:
      return <AdministrasiKabupaten />;

    case VIEWABLE_AREA.KECAMATAN:
      return <AdministrasiKecamatan />;

    case VIEWABLE_AREA.BANGUNAN:
      return <Bangunan />;

    default:
      return null;
  }
});

type Props = {
  selected: FrontEnd.ViewableArea;
};

export default AreaView;
