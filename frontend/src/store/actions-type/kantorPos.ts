import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type KantorPosResource = GeometryResource<
  ModelStructure['kantorPos']
>['Point'];

export type KantorPosReducer = {
  data: GeometryResourceMap<KantorPosResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum KantorPosActionType {
  SET = 'kantorPos.set',
  UPDATE = 'kantorPos.update',
  OVERWRITE = 'kantorPos.overwrite',
  DELETE = 'kantorPos.delete',
}

export type SetKantorPos = {
  type: KantorPosActionType.SET;
  payload: {
    data: KantorPosResource | KantorPosResource[];
    page: ResourcesInfo;
  };
};

export type UpdateKantorPos = {
  type: KantorPosActionType.UPDATE;
  payload: {
    gid: number;
    data: KantorPosResource;
  };
};

export type OverwriteKantorPos = {
  type: KantorPosActionType.OVERWRITE;
  payload: {
    data: KantorPosResource | KantorPosResource[];
    page: ResourcesInfo;
  };
};

export type DeleteKantorPos = {
  type: KantorPosActionType.DELETE;
  payload: number;
};
