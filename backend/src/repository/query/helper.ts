import _ from 'lodash';
import { ModelTypes } from '../prisma-repo';

export const whereQueryBuilder = (where: ModelTypes['kantorPln']['Where']) => {
  const result: any[] = _.map(where, (value, key) => {
    if (value === null) {
      return `${key} IS NULL`;
    }

    return `${key} = ${typeof value === 'string' ? `"${value}"` : value}`;
  });

  return result.join(' AND ');
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
  obj: X,
  property: Y
  // eslint-disable-next-line no-prototype-builtins
): obj is X & Record<Y, unknown> => obj.hasOwnProperty(property);
