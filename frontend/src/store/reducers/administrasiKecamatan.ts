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
import { createPageInfo, toArray } from './reducer.helper';

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
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = {
        ...state.page,
        ...action.payload.page,
      };

      return state;
    }

    case AdministrasiKecamatanActionType.UPDATE: {
      state.data.set(action.payload.gid, action.payload.data);

      return state;
    }

    case AdministrasiKecamatanActionType.OVERWRITE: {
      state.data.clear();

      toArray(action.payload.data).forEach((value) => {
        if (!_.isArray(value)) state.data.set(value.gid, value);
        else value.forEach((val) => state.data.set(val.gid, val));
      });

      state.page = action.payload.page;

      return state;
    }

    case AdministrasiKecamatanActionType.DELETE: {
      state.data.delete(action.payload);

      return state;
    }

    default:
      return state;
  }
};

export default reducer;
