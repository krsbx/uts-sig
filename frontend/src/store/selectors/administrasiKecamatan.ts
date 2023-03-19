import { AppState } from '..';

export const getAdministrasiKecamatans = (state: AppState) =>
  state.administrasiKecamatan;

export const getAdministrasiKecamatanDatas = (state: AppState) =>
  state.administrasiKecamatan.data;
