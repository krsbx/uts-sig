import _ from 'lodash';
import React, { useMemo } from 'react';
import { Polygon, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getAdministrasiKecamatanDatas } from '../store/selectors/administrasiKecamatan';

const AdministrasiKecamatan = () => {
  const administrasiKecamatans = useSelector(getAdministrasiKecamatanDatas);
  const places = useMemo(() => {
    const entries = administrasiKecamatans.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [administrasiKecamatans]);

  return (
    <React.Fragment>
      {places.map((place) => {
        const { coordinates } = place.geom;

        return (
          <React.Fragment key={`kecamatan-${place.gid}`}>
            {_.map(coordinates, (coord, index) => (
              <Polygon
                pathOptions={{
                  color: 'blue',
                  fill: true,
                  fillColor: 'rgba(0,0,0,0.8)',
                }}
                positions={coord}
                key={`kecamatan-${place.gid}-${index}`}
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

export default AdministrasiKecamatan;
