import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type BangunanResource = GeometryResource<
  ModelStructure['bangunan']
>['Multipolygon'];

export type BangunanReducer = {
  data: GeometryResourceMap<BangunanResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum BangunanActionType {
  SET = 'bangunan.set',
  UPDATE = 'bangunan.update',
  OVERWRITE = 'bangunan.overwrite',
  DELETE = 'bangunan.delete',
}

export type SetBangunan = {
  type: BangunanActionType.SET;
  payload: {
    data: BangunanResource | BangunanResource[];
    page: ResourcesInfo;
  };
};

export type UpdateBangunan = {
  type: BangunanActionType.UPDATE;
  payload: {
    gid: number;
    data: BangunanResource;
  };
};

export type OverwriteBangunan = {
  type: BangunanActionType.OVERWRITE;
  payload: {
    data: BangunanResource | BangunanResource[];
    page: ResourcesInfo;
  };
};

export type DeleteBangunan = {
  type: BangunanActionType.DELETE;
  payload: number;
};
