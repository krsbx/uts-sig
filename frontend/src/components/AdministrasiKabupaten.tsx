import _ from 'lodash';
import React, { useMemo } from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getAdministrasiKabupatenDatas } from '../store/selectors/administrasiKabupaten';

const AdministrasiKabupaten = () => {
  const administrasiKabupatens = useSelector(getAdministrasiKabupatenDatas);
  const places = useMemo(() => {
    const entries = administrasiKabupatens.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [administrasiKabupatens]);

  return (
    <React.Fragment>
      {places.map((place) => {
        const { coordinates } = place.geom;

        return (
          <React.Fragment key={`kabupaten-${place.gid}`}>
            {_.map(coordinates, (coord, index) => (
              <Polygon
                pathOptions={{
                  color: 'red',
                  fill: true,
                  fillColor: 'rgba(0,0,0,0.8)',
                }}
                positions={coord}
                key={`kabupaten-${place.gid}-${index}`}
              >
                <Popup>{place.namobj}</Popup>
              </Polygon>
            ))}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default AdministrasiKabupaten;
