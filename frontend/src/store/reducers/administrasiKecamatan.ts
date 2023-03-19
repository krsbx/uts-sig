/* eslint-disable no-param-reassign */
import _ from 'lodash';
import {
  AdministrasiKecamatanActionType,
  AdministrasiKecamatanReducer,
  DeleteAdministrasiKecamatan,
  OverwriteAdministrasiKecamatan,
  SetAdministrasiKecamatan,
  UpdateAdministrasiKecamatan,
} from '../actions-type/administrasiKecamatan';
import {
  createPageInfo,
  normalizeMultiPolygon,
  toArray,
} from './reducer.helper';

const initialState: AdministrasiKecamatanReducer = {
  data: new Map(),
  page: createPageInfo(),
};

const reducer = (
  state = initialState,
  action:
    | SetAdministrasiKecamatan
    | UpdateAdministrasiKecamatan
    | OverwriteAdministrasiKecamatan
    | DeleteAdministrasiKecamatan
) => {
  switch (action.type) {
    case AdministrasiKecamatanActionType.SET: {
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

    case AdministrasiKecamatanActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return {
        ...state,
        data: _.cloneDeep(state.data),
      };
    }

    case AdministrasiKecamatanActionType.OVERWRITE: {
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

    case AdministrasiKecamatanActionType.DELETE: {
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
