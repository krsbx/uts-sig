import _ from 'lodash';
import { hasOwnProperty } from '../../utils/common';
import { GeometryResource } from '../actions-type/type.helper';

export const createPageInfo = () => ({
  size: 0,
  total: 0,
  totalPages: 0,
  current: 0,
});

export const toArray = <T, U extends T extends ArrayLike<T> ? T[number] : T>(
  value: T
) => (_.isArray(value) ? value : [value]) as U[];

export const normalizeMultiPolygon = <T>(value: T) => {
  if (hasOwnProperty(value as object, 'geom')) {
    const values = value as object & {
      geom: GeometryResource<T>['Multipolygon']['geom'];
    };

    values.geom.coordinates = _.map(values.geom.coordinates, (vals) =>
      _.map(vals, (val) => _.map(val, (v) => [v[1], v[0]]))
    );
  }

  return value;
};

export const normalizePoint = <T>(value: T) => {
  if (hasOwnProperty(value as object, 'geom')) {
    const values = value as object & {
      geom: GeometryResource<T>['Point']['geom'];
    };

    values.geom.coordinates = [
      values.geom.coordinates[1],
      values.geom.coordinates[0],
    ];
  }

  return value;
};
