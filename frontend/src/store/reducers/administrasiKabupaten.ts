/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  AdministrasiKabupatenActionType,
  AdministrasiKabupatenReducer,
  DeleteAdministrasiKabupaten,
  OverwriteAdministrasiKabupaten,
  SetAdministrasiKabupaten,
  UpdateAdministrasiKabupaten,
} from '../actions-type/administrasiKabupaten';
import {
  createPageInfo,
  normalizeMultiPolygon,
  toArray,
} from './reducer.helper';

const initialState: AdministrasiKabupatenReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action:
    | SetAdministrasiKabupaten
    | UpdateAdministrasiKabupaten
    | OverwriteAdministrasiKabupaten
    | DeleteAdministrasiKabupaten
) => {
  switch (action.type) {
    case AdministrasiKabupatenActionType.SET: {
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

    case AdministrasiKabupatenActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case AdministrasiKabupatenActionType.OVERWRITE: {
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

    case AdministrasiKabupatenActionType.DELETE: {
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
