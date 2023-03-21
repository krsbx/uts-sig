import React, { useMemo } from 'react';
import { CircleMarker, Tooltip } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getSpbuDatas } from '../store/selectors/spbu';

const Spbu = () => {
  const spbus = useSelector(getSpbuDatas);
  const places = useMemo(() => {
    const entries = spbus.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [spbus]);

  return (
    <React.Fragment>
      {places.map((place) => (
        <CircleMarker
          center={place.geom.coordinates}
          pathOptions={{
            color: 'cyan',
            fill: true,
            fillColor: 'rgba(0,0,0,0.8)',
          }}
          radius={3}
          key={`spbu-${place.gid}`}
        >
          <Tooltip>{place.namobj}</Tooltip>
        </CircleMarker>
      ))}
    </React.Fragment>
  );
};

export default Spbu;
