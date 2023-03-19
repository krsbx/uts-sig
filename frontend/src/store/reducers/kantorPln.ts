/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  DeleteKantorPln,
  KantorPlnActionType,
  KantorPlnReducer,
  OverwriteKantorPln,
  SetKantorPln,
  UpdateKantorPln,
} from '../actions-type/kantorPln';
import { createPageInfo, normalizePoint, toArray } from './reducer.helper';

const initialState: KantorPlnReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action: SetKantorPln | UpdateKantorPln | OverwriteKantorPln | DeleteKantorPln
) => {
  switch (action.type) {
    case KantorPlnActionType.SET: {
      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, normalizePoint(value));
        else
          value.forEach((val) => state.data.set(val.gid, normalizePoint(val)));
      });

      state.page = {
        ...state.page,
        ...action.payload.page,
      };

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case KantorPlnActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case KantorPlnActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, normalizePoint(value));
        else
          value.forEach((val) => state.data.set(val.gid, normalizePoint(val)));
      });

      state.page = action.payload.page;

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case KantorPlnActionType.DELETE: {
      state.data.delete(action.payload);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    default:
      return state;
  }
};

export default reducer;
