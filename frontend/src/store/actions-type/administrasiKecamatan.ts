import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type AdministrasiKecamatanResource = GeometryResource<
  ModelStructure['administrasiKecamatan']
>['Multipolygon'];

export type AdministrasiKecamatanReducer = {
  data: GeometryResourceMap<AdministrasiKecamatanResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum AdministrasiKecamatanActionType {
  SET = 'administrasiKecamatan.set',
  UPDATE = 'administrasiKecamatan.update',
  OVERWRITE = 'administrasiKecamatan.overwrite',
  DELETE = 'administrasiKecamatan.delete',
}

export type SetAdministrasiKecamatan = {
  type: AdministrasiKecamatanActionType.SET;
  payload: {
    data: AdministrasiKecamatanResource | AdministrasiKecamatanResource[];
    page: ResourcesInfo;
  };
};

export type UpdateAdministrasiKecamatan = {
  type: AdministrasiKecamatanActionType.UPDATE;
  payload: {
    gid: number;
    data: AdministrasiKecamatanResource;
  };
};

export type OverwriteAdministrasiKecamatan = {
  type: AdministrasiKecamatanActionType.OVERWRITE;
  payload: {
    data: AdministrasiKecamatanResource | AdministrasiKecamatanResource[];
    page: ResourcesInfo;
  };
};

export type DeleteAdministrasiKecamatan = {
  type: AdministrasiKecamatanActionType.DELETE;
  payload: number;
};
