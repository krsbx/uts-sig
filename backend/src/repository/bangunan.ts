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

// This type will be used if you want to extends the functions in Bangunan Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.BANGUNAN]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.BANGUNAN]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.BANGUNAN>;
type Model = ModelStructure[typeof MODELS_NAME.BANGUNAN];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class Bangunan extends BaseRepository(MODELS_NAME.BANGUNAN) {
  protected static tableName = 'bangunan_ar_50k';
  protected static customFields = ['shape_leng', 'shape_area'];

  public static async findAll<
    Option extends Find<
      Select & { geom?: boolean },
      Include,
      Cursor,
      Order,
      Scalar
    >,
    Args extends Option & { where?: Where },
    Return extends ModelTypes<Args>['bangunan']['Return']
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
    Return extends ModelTypes<Args>['bangunan']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default Bangunan;
