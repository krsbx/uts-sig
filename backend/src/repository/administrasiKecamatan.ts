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

// This type will be used if you want to extends the functions in AdministrasiKecamatan Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Order'];
type Delegate =
  ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.ADMINISTRASIKECAMATAN]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.ADMINISTRASIKECAMATAN>;
type Model = ModelStructure[typeof MODELS_NAME.ADMINISTRASIKECAMATAN];
/*  eslint-enable @typescript-eslint/no-unused-vars */

// @ts-ignore
class AdministrasiKecamatan extends BaseRepository<
  (typeof MODELS_NAME)['ADMINISTRASIKECAMATAN'],
  Where,
  Select,
  Include,
  Create,
  Update,
  Cursor,
  Order,
  Delegate,
  Scalar
>(MODELS_NAME.ADMINISTRASIKECAMATAN) {
  protected static tableName = 'administrasikecamatan_ar_50k';
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
    Return extends ModelTypes<Args>['administrasiKecamatan']['Return']
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
    Return extends ModelTypes<Args>['administrasiKecamatan']['Return']
  >(conditions: Where | number | string, option: Option = {} as Option) {
    return findOneBuilder<Where, Return>(
      this.tableName,
      conditions,
      option,
      this.customFields
    );
  }
}

export default AdministrasiKecamatan;
