import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type AdministrasiKabupatenResource = GeometryResource<
  ModelStructure['administrasiKabupaten']
>['Multipolygon'];

export type AdministrasiKabupatenReducer = {
  data: GeometryResourceMap<AdministrasiKabupatenResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum AdministrasiKabupatenActionType {
  SET = 'administrasiKabupaten.set',
  UPDATE = 'administrasiKabupaten.update',
  OVERWRITE = 'administrasiKabupaten.overwrite',
  DELETE = 'administrasiKabupaten.delete',
}

export type SetAdministrasiKabupaten = {
  type: AdministrasiKabupatenActionType.SET;
  payload: {
    data: AdministrasiKabupatenResource | AdministrasiKabupatenResource[];
    page: ResourcesInfo;
  };
};

export type UpdateAdministrasiKabupaten = {
  type: AdministrasiKabupatenActionType.UPDATE;
  payload: {
    gid: number;
    data: AdministrasiKabupatenResource;
  };
};

export type OverwriteAdministrasiKabupaten = {
  type: AdministrasiKabupatenActionType.OVERWRITE;
  payload: {
    data: AdministrasiKabupatenResource | AdministrasiKabupatenResource[];
    page: ResourcesInfo;
  };
};

export type DeleteAdministrasiKabupaten = {
  type: AdministrasiKabupatenActionType.DELETE;
  payload: number;
};
