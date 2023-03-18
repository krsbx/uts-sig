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
import { AREA_EXTRA_FIELDS } from './query/constant';

// This type will be used if you want to extends the functions in AdministrasiKabupaten Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Order'];
type Delegate =
  ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKABUPATEN]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.ADMINISTRASIKABUPATEN>;
type Model = ModelStructure[typeof MODELS_NAME.ADMINISTRASIKABUPATEN];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class AdministrasiKabupaten extends BaseRepository<
  (typeof MODELS_NAME)['ADMINISTRASIKABUPATEN'],
  Where,
  Select,
  Include,
  Create,
  Update,
  Cursor,
  Order,
  Delegate,
  Scalar
>(MODELS_NAME.ADMINISTRASIKABUPATEN) {
  protected static tableName = 'administrasikabupaten_ar_50k';
  protected static customFields = AREA_EXTRA_FIELDS;

  public static async findAll<
    Option extends Find<
      Select & { geom?: boolean },
      Include,
      Cursor,
      Order,
      Scalar
    >,
    Args extends Option & { where?: Where },
    Return extends ModelTypes<Args>['administrasiKabupaten']['Return']
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
    Return extends ModelTypes<Args>['administrasiKabupaten']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default AdministrasiKabupaten;
