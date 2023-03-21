import _ from 'lodash';
import React, { useMemo } from 'react';
import { Polygon, Tooltip } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { getBangunanDatas } from '../store/selectors/bangunan';

const Bangunan = () => {
  const bangunans = useSelector(getBangunanDatas);
  const places = useMemo(() => {
    const entries = bangunans.entries();

    return Array.from(entries).map(([, value]) => value);
  }, [bangunans]);

  return (
    <React.Fragment>
      {places.map((place) => {
        const { coordinates } = place.geom;

        return (
          <React.Fragment key={`bangunan-${place.gid}`}>
            {_.map(coordinates, (coord, index) => (
              <Polygon
                pathOptions={{
                  color: 'green',
                  fill: true,
                  fillColor: 'rgba(0,0,0,0.8)',
                  weight: 8,
                }}
                positions={coord}
                key={`bangunan-${place.gid}-${index}`}
              >
                <Tooltip>{place.remark}</Tooltip>
              </Polygon>
            ))}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Bangunan;
