import { AppState } from '..';

export const getKantorPlns = (state: AppState) => state.kantorPln;

export const getKantorPlnDatas = (state: AppState) => state.kantorPln.data;
