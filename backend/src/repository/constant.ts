export const QUERY_CONDITIONS_MAP: Record<
  string,
  string | ((str: string) => string)
> = {
  equals: '=',
  in: 'IN',
  notIn: 'NOT IN',
  lt: '<',
  lte: '<=',
  gt: '>',
  gte: '>',
  not: 'NOT',
  contains(str: string) {
    return `%${str}%`;
  },
  startsWith(str: string) {
    return `%${str}`;
  },
  endsWith(str: string) {
    return `${str}%`;
  },
};
