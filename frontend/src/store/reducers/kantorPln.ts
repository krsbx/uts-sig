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
import { createPageInfo, toArray } from './reducer.helper';

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
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = {
        ...state.page,
        ...action.payload.page,
      };

      return state;
    }

    case KantorPlnActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return state;
    }

    case KantorPlnActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = action.payload.page;

      return state;
    }

    case KantorPlnActionType.DELETE: {
      state.data.delete(action.payload);

      return state;
    }

    default:
      return state;
  }
};

export default reducer;
