import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  Find,
  MODELS_NAME,
  ModelScalarFields,
  ModelStructure,
  ModelTypes,
} from './prisma-repo';
import { findAllBuilder, findOneBuilder } from './query/builder';

// This type will be used if you want to extends the functions in KantorPos Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.KANTORPOS]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.KANTORPOS]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.KANTORPOS>;
type Model = ModelStructure[typeof MODELS_NAME.KANTORPOS];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class KantorPos extends BaseRepository<
  (typeof MODELS_NAME)['KANTORPOS'],
  Where,
  Select,
  Include,
  Create,
  Update,
  Cursor,
  Order,
  Delegate,
  Scalar
>(MODELS_NAME.KANTORPOS) {
  protected static tableName = 'kantorpos_pt_50k';
  protected static customFields = ['jnkpos'];

  public static async findAll<
    Option extends Find<
      Select & { geom?: boolean },
      Include,
      Cursor,
      Order,
      Scalar
    >,
    Args extends Option & { where?: Where },
    Return extends ModelTypes<Args>['kantorPos']['Return']
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
      this.customFields
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
    Return extends ModelTypes<Args>['kantorPos']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default KantorPos;
