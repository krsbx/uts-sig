import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  Find,
  ModelScalarFields,
  ModelStructure,
  MODELS_NAME,
  ModelTypes,
} from './prisma-repo';
import { findAllBuilder, findOneBuilder } from './query/builder';

// This type will be used if you want to extends the functions in KantorPln Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.KANTOR_PLN]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.KANTOR_PLN>;
type Model = ModelStructure[typeof MODELS_NAME.KANTOR_PLN];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class KantorPln extends BaseRepository<
  (typeof MODELS_NAME)['KANTOR_PLN'],
  Where,
  Select,
  Include,
  Create,
  Update,
  Cursor,
  Order,
  Delegate,
  Scalar
>(MODELS_NAME.KANTOR_PLN) {
  protected static tableName = 'kantorpln_pt_50k';
  protected static customFields = [];

  public static async findAll<
    Option extends Find<
      Select & { geom?: boolean },
      Include,
      Cursor,
      Order,
      Scalar
    >,
    Args extends Option & { where?: Where },
    Return extends ModelTypes<Args>['kantorPln']['Return']
  >(
    conditions: Where | number | string,
    filterQueryParams: AnyRecord = {},
    query: AnyRecord = {},
    option: Option = {} as Option
  ) {
    const rows = await findAllBuilder(
      this.tableName,
      conditions,
      query,
      option,
      []
    );

    return {
      rows,
      count: await this.count(conditions, {
        ...option,
        ...(option?.select && {
          select: {
            ..._.omit(option.select, ['geom']),
          },
        }),
      }),
    } as unknown as Promise<{ rows: Return[]; count: number }>;
  }

  public static async findOne<
    Option extends Find<Select, Include, Cursor, Order, Scalar>,
    Args extends Option & { where?: Where },
    Return extends ModelTypes<Args>['kantorPln']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default KantorPln;
