import { AppState } from '..';

export const getAdministrasiKabupatens = (state: AppState) =>
  state.administrasiKabupaten;

export const getAdministrasiKabupatenDatas = (state: AppState) =>
  state.administrasiKabupaten.data;
