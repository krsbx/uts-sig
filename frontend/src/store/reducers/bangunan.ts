/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  BangunanActionType,
  BangunanReducer,
  DeleteBangunan,
  OverwriteBangunan,
  SetBangunan,
  UpdateBangunan,
} from '../actions-type/bangunan';
import {
  createPageInfo,
  normalizeMultiPolygon,
  toArray,
} from './reducer.helper';

const initialState: BangunanReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action: SetBangunan | UpdateBangunan | OverwriteBangunan | DeleteBangunan
) => {
  switch (action.type) {
    case BangunanActionType.SET: {
      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value))
          state.data.set(value.gid, normalizeMultiPolygon(value));
        else
          value.forEach((val) =>
            state.data.set(val.gid, normalizeMultiPolygon(val))
          );
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

    case BangunanActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case BangunanActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value))
          state.data.set(value.gid, normalizeMultiPolygon(value));
        else
          value.forEach((val) =>
            state.data.set(val.gid, normalizeMultiPolygon(val))
          );
      });

      state.page = action.payload.page;

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case BangunanActionType.DELETE: {
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
