import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type KantorPlnResource = GeometryResource<
  ModelStructure['kantorPln']
>['Point'];

export type KantorPlnReducer = {
  data: GeometryResourceMap<KantorPlnResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum KantorPlnActionType {
  SET = 'kantorPln.set',
  UPDATE = 'kantorPln.update',
  OVERWRITE = 'kantorPln.overwrite',
  DELETE = 'kantorPln.delete',
}

export type SetKantorPln = {
  type: KantorPlnActionType.SET;
  payload: {
    data: KantorPlnResource | KantorPlnResource[];
    page: ResourcesInfo;
  };
};

export type UpdateKantorPln = {
  type: KantorPlnActionType.UPDATE;
  payload: {
    gid: number;
    data: KantorPlnResource;
  };
};

export type OverwriteKantorPln = {
  type: KantorPlnActionType.OVERWRITE;
  payload: {
    data: KantorPlnResource | KantorPlnResource[];
    page: ResourcesInfo;
  };
};

export type DeleteKantorPln = {
  type: KantorPlnActionType.DELETE;
  payload: number;
};
