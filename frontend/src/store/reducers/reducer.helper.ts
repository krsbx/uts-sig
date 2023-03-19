import _ from 'lodash';

export const createPageInfo = () => ({
  size: 0,
  total: 0,
  totalPages: 0,
  current: 0,
});

export const toArray = <T, U extends T extends ArrayLike<T> ? T[number] : T>(
  value: T
) => (_.isArray(value) ? value : [value]) as U[];
