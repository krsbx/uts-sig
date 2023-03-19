/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  DeleteSpbu,
  OverwriteSpbu,
  SetSpbu,
  SpbuActionType,
  SpbuReducer,
  UpdateSpbu,
} from '../actions-type/spbu';
import { createPageInfo, toArray } from './reducer.helper';

const initialState: SpbuReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action: SetSpbu | UpdateSpbu | OverwriteSpbu | DeleteSpbu
) => {
  switch (action.type) {
    case SpbuActionType.SET: {
      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = {
        ...state.page,
        ...action.payload.page,
      };

      return state;
    }

    case SpbuActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return state;
    }

    case SpbuActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = action.payload.page;

      return state;
    }

    case SpbuActionType.DELETE: {
      state.data.delete(action.payload);

      return state;
    }

    default:
      return state;
  }
};

export default reducer;
