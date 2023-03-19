import { ModelStructure } from 'backend/src/repository/prisma-repo';
import {
  GeometryResource,
  GeometryResourceMap,
  ResourcesInfo,
} from './type.helper';

export type SpbuResource = GeometryResource<ModelStructure['spbu']>['Point'];

export type SpbuReducer = {
  data: GeometryResourceMap<SpbuResource>;
  page: ResourcesInfo;
};

// eslint-disable-next-line no-shadow
export enum SpbuActionType {
  SET = 'spbu.set',
  UPDATE = 'spbu.update',
  OVERWRITE = 'spbu.overwrite',
  DELETE = 'spbu.delete',
}

export type SetSpbu = {
  type: SpbuActionType.SET;
  payload: {
    data: SpbuResource | SpbuResource[];
    page: ResourcesInfo;
  };
};

export type UpdateSpbu = {
  type: SpbuActionType.UPDATE;
  payload: {
    gid: number;
    data: SpbuResource;
  };
};

export type OverwriteSpbu = {
  type: SpbuActionType.OVERWRITE;
  payload: {
    data: SpbuResource | SpbuResource[];
    page: ResourcesInfo;
  };
};

export type DeleteSpbu = {
  type: SpbuActionType.DELETE;
  payload: number;
};
