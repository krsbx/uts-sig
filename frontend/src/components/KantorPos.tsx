import React, { useMemo } from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getKantorPosDatas } from '../store/selectors/kantorPos';

const KantorPos = () => {
  const poss = useSelector(getKantorPosDatas);
  const places = useMemo(() => {
    const entries = poss.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [poss]);

  return (
    <React.Fragment>
      {places.map((place) => (
        <CircleMarker
          center={place.geom.coordinates}
          pathOptions={{
            color: 'orange',
            fill: true,
            fillColor: 'rgba(0,0,0,0.8)',
          }}
          radius={3}
          key={`pos-${place.gid}`}
        >
          <Popup>{place.namobj}</Popup>
        </CircleMarker>
      ))}
    </React.Fragment>
  );
};

export default KantorPos;
