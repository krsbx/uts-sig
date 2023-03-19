import { LatLngTuple } from 'leaflet';
import { RESOURCE_NAME } from '../../utils/constants';
import {
  AdministrasiKabupatenActionType,
  AdministrasiKabupatenResource,
} from './administrasiKabupaten';
import {
  AdministrasiKecamatanActionType,
  AdministrasiKecamatanResource,
} from './administrasiKecamatan';
import { BangunanActionType, BangunanResource } from './bangunan';
import { KantorPlnActionType, KantorPlnResource } from './kantorPln';
import { KantorPosActionType, KantorPosResource } from './kantorPos';
import { SpbuActionType, SpbuResource } from './spbu';

export type GeometryCoordinates = LatLngTuple;

export type GeometryResource<T> = {
  Point: T & {
    geom: {
      type: 'Point';
      coordinates: GeometryCoordinates;
    };
  };
  Multipolygon: T & {
    geom: {
      type: 'Multipolygon';
      coordinates: GeometryCoordinates[][][];
    };
  };
};

export type GeometryResourceMap<T> = Map<string | number, T>;

export type ResourcesInfo = {
  size: number;
  total: number;
  totalPages: number;
  current: number;
};

export const ResourceActionType = {
  [RESOURCE_NAME.ADMINISTRASI_KABUPATEN]: {
    SET_RESOURCE: AdministrasiKabupatenActionType.SET,
    UPDATE_RESOURCE: AdministrasiKabupatenActionType.UPDATE,
    OVERWRITE_RESOURCE: AdministrasiKabupatenActionType.OVERWRITE,
    DELETE_RESOURCE: AdministrasiKabupatenActionType.DELETE,
  },
  [RESOURCE_NAME.ADMINISTRASI_KECAMATAN]: {
    SET_RESOURCE: AdministrasiKecamatanActionType.SET,
    UPDATE_RESOURCE: AdministrasiKecamatanActionType.UPDATE,
    OVERWRITE_RESOURCE: AdministrasiKecamatanActionType.OVERWRITE,
    DELETE_RESOURCE: AdministrasiKecamatanActionType.DELETE,
  },
  [RESOURCE_NAME.BANGUNAN]: {
    SET_RESOURCE: BangunanActionType.SET,
    UPDATE_RESOURCE: BangunanActionType.UPDATE,
    OVERWRITE_RESOURCE: BangunanActionType.OVERWRITE,
    DELETE_RESOURCE: BangunanActionType.DELETE,
  },
  [RESOURCE_NAME.KANTOR_PLN]: {
    SET_RESOURCE: KantorPlnActionType.SET,
    UPDATE_RESOURCE: KantorPlnActionType.UPDATE,
    OVERWRITE_RESOURCE: KantorPlnActionType.OVERWRITE,
    DELETE_RESOURCE: KantorPlnActionType.DELETE,
  },
  [RESOURCE_NAME.KANTOR_POS]: {
    SET_RESOURCE: KantorPosActionType.SET,
    UPDATE_RESOURCE: KantorPosActionType.UPDATE,
    OVERWRITE_RESOURCE: KantorPosActionType.OVERWRITE,
    DELETE_RESOURCE: KantorPosActionType.DELETE,
  },
  [RESOURCE_NAME.SPBU]: {
    SET_RESOURCE: SpbuActionType.SET,
    UPDATE_RESOURCE: SpbuActionType.UPDATE,
    OVERWRITE_RESOURCE: SpbuActionType.OVERWRITE,
    DELETE_RESOURCE: SpbuActionType.DELETE,
  },
};

export type SingleResposnse<T> = {
  data: T;
};

export type MultipleResponse<T> = {
  data: T;
  page: ResourcesInfo;
};

export type ResourceResponse = {
  [RESOURCE_NAME.ADMINISTRASI_KABUPATEN]: {
    SINGLE: SingleResposnse<AdministrasiKabupatenResource>;
    MUTIPLE: MultipleResponse<AdministrasiKabupatenResource>;
  };
  [RESOURCE_NAME.ADMINISTRASI_KECAMATAN]: {
    SINGLE: SingleResposnse<AdministrasiKecamatanResource>;
    MUTIPLE: MultipleResponse<AdministrasiKecamatanResource>;
  };
  [RESOURCE_NAME.BANGUNAN]: {
    SINGLE: SingleResposnse<BangunanResource>;
    MUTIPLE: MultipleResponse<BangunanResource>;
  };
  [RESOURCE_NAME.KANTOR_PLN]: {
    SINGLE: SingleResposnse<KantorPlnResource>;
    MUTIPLE: MultipleResponse<KantorPlnResource>;
  };
  [RESOURCE_NAME.KANTOR_POS]: {
    SINGLE: SingleResposnse<KantorPosResource>;
    MUTIPLE: MultipleResponse<KantorPosResource>;
  };
  [RESOURCE_NAME.SPBU]: {
    SINGLE: SingleResposnse<SpbuResource>;
    MUTIPLE: MultipleResponse<SpbuResource>;
  };
};
