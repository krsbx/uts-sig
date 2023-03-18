import _ from 'lodash';
import { extractCondition } from '../baseRepository';
import { AnyRecord, prisma } from '../prisma-repo';
import { hasOwnProperty, whereQueryBuilder } from './helper';

const fieldBuilder = (select: AnyRecord = {}, customField: string[] = []) => {
  const fields = (
    _.isEmpty(select)
      ? [
          'gid',
          'namobj',
          'fcode',
          'remark',
          'srs_id',
          'lcode',
          'metadata',
          'ST_AsGeoJSON(geom) geom',
          ...customField,
        ]
      : _.reduce(
          select,
          (prev, curr, key) => {
            if (!curr) return prev;

            if (key === 'geom') {
              prev.push('ST_AsGeoJSON(geom) geom');
            } else {
              prev.push(key);
            }

            return prev;
          },
          [] as string[]
        )
  ).join(', ');

  return fields;
};

export const findAllBuilder = async <Where, Return>(
  tableName: string,
  conditions: Where | number | string,
  query: AnyRecord = {},
  option: AnyRecord = {} as AnyRecord,
  customField: string[] = []
) => {
  const fields = fieldBuilder(option?.select ?? {}, customField);

  const limit = +(query.limit === 'all' ? 0 : _.get(query, 'limit', 10));
  const offset = query.page && query.page > 0 ? limit * (query.page - 1) : 0;

  const paginationQuery = _.compact([
    limit > 0 && `LIMIT ${limit}`,
    `OFFSET ${offset}`,
  ]).join(' ');
  const orderQuery = _.compact([
    query.orderBy ? `ORDER BY ${query.orderBy}` : null,
    query.order && query.orderBy ? `${query?.order?.toUpperCase?.()}` : null,
  ]).join(' ');
  const groupQuery = _.compact([
    query.groupBy && `GROUP BY ${query.groupBy}`,
  ]).join(' ');

  const wheres = _.isEmpty(conditions) ? {} : extractCondition(conditions);
  const condition = _.isEmpty(wheres)
    ? ''
    : ` WHERE ${_.map(wheres, (value, key) =>
        whereQueryBuilder({ [key]: value })
      ).join(' AND ')}`;

  const sql = `SELECT ${fields} FROM public."${tableName}" ${condition} ${groupQuery} ${orderQuery} ${paginationQuery}`;

  const rows: AnyRecord[] = await prisma.$queryRawUnsafe(sql);

  if (fields.includes('ST_AsGeoJSON(geom) geom')) {
    _.map(rows, (row) => {
      if (hasOwnProperty(row, 'geom') && typeof row.geom === 'string') {
        row.geom = JSON.parse(row.geom);
      }
    });
  }

  return rows as Return[];
};

export const findOneBuilder = async <Where, Return>(
  tableName: string,
  conditions: Where | number | string,
  option: AnyRecord = {} as AnyRecord,
  customField: string[] = []
) => {
  const fields = fieldBuilder(option?.select ?? {}, customField);
  const wheres = _.isEmpty(conditions) ? {} : extractCondition(conditions);
  const condition = _.isEmpty(wheres)
    ? ''
    : ` WHERE ${_.map(wheres, (value, key) =>
        whereQueryBuilder({ [key]: value })
      ).join(' AND ')}`;

  const sql = `SELECT ${fields} FROM public."${tableName}" ${condition} LIMIT 1`;

  const rows: AnyRecord[] = await prisma.$queryRawUnsafe(sql);

  if (!rows[0]) return null;

  if (
    fields.includes('ST_AsGeoJSON(geom) geom') &&
    hasOwnProperty(rows[0], 'geom') &&
    typeof rows[0].geom === 'string'
  ) {
    rows[0].geom = JSON.parse(rows[0].geom);
  }

  return rows[0] as Return;
};
