import React, { useMemo } from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getKantorPlnDatas } from '../store/selectors/kantorPln';

const KantorPln = () => {
  const plns = useSelector(getKantorPlnDatas);
  const places = useMemo(() => {
    const entries = plns.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [plns]);

  return (
    <React.Fragment>
      {places.map((place) => (
        <CircleMarker
          center={place.geom.coordinates}
          pathOptions={{
            color: 'red',
            fill: true,
            fillColor: 'rgba(0,0,0,0.8)',
          }}
          radius={3}
          key={`pln-${place.gid}`}
        >
          <Popup>{place.namobj}</Popup>
        </CircleMarker>
      ))}
    </React.Fragment>
  );
};

export default KantorPln;
