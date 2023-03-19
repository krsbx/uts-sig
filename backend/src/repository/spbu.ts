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

// This type will be used if you want to extends the functions in Spbu Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.SPBU]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.SPBU]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.SPBU]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.SPBU]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.SPBU]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.SPBU]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.SPBU]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.SPBU]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.SPBU]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.SPBU>;
type Model = ModelStructure[typeof MODELS_NAME.SPBU];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class Spbu extends BaseRepository<
  (typeof MODELS_NAME)['SPBU'],
  Where,
  Select,
  Include,
  Create,
  Update,
  Cursor,
  Order,
  Delegate,
  Scalar
>(MODELS_NAME.SPBU) {
  protected static tableName = 'spbu_pt_50k';
  protected static customFields = [];

  public static async findAll<
    Option extends Find<Select, Include, Cursor, Order, Scalar>,
    Args extends Option & { where?: Where | undefined },
    Return extends ModelTypes<Args>['spbu']['Return']
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
    Return extends ModelTypes<Args>['spbu']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default Spbu;
