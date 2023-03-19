/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  DeleteKantorPos,
  KantorPosActionType,
  KantorPosReducer,
  OverwriteKantorPos,
  SetKantorPos,
  UpdateKantorPos,
} from '../actions-type/kantorPos';
import { createPageInfo, toArray } from './reducer.helper';

const initialState: KantorPosReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action: SetKantorPos | UpdateKantorPos | OverwriteKantorPos | DeleteKantorPos
) => {
  switch (action.type) {
    case KantorPosActionType.SET: {
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

    case KantorPosActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return state;
    }

    case KantorPosActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = action.payload.page;

      return state;
    }

    case KantorPosActionType.DELETE: {
      state.data.delete(action.payload);

      return state;
    }

    default:
      return state;
  }
};

export default reducer;
