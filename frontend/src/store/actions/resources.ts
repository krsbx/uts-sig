import { Dispatch } from 'redux';
import { ResourceKey } from '../../types/axios';
import { RESOURCE_PATH } from '../../utils/constants';
import {
  ResourceActionType,
  ResourceResponse,
} from '../actions-type/type.helper';
import axios from '../axios';

export const setResource = <T extends ResourceKey>(
  resourceName: T,
  payload: unknown
) => ({
  type: ResourceActionType[resourceName].SET_RESOURCE,
  payload,
});

export const updateResource = <T extends ResourceKey>(
  resourceName: T,
  payload: unknown
) => ({
  type: ResourceActionType[resourceName].UPDATE_RESOURCE,
  payload, // { gid, data }
});

export const overwriteResource = <T extends ResourceKey>(
  resourceName: T,
  payload: unknown
) => ({
  type: ResourceActionType[resourceName].OVERWRITE_RESOURCE,
  payload,
});

export const deleteResource = <T extends ResourceKey>(
  resourceName: T,
  payload: unknown
) => ({
  type: ResourceActionType[resourceName].DELETE_RESOURCE,
  payload, // gid
});

export const getAllData =
  <
    T extends ResourceKey,
    U extends ResourceResponse[T]['MUTIPLE'],
    V extends U['data']
  >(
    resourceName: T,
    query = '',
    overwrite = true
  ) =>
  async () => {
    const urlPath = RESOURCE_PATH[resourceName];

    if (!urlPath) return null;

    const { data } = await axios.get<U>(`/${urlPath}?${query}`, {
      headers: {
        resourceName,
        overwrite,
      },
    });

    return data.data as V;
  };

export const getDataById =
  <
    T extends ResourceKey,
    U extends ResourceResponse[T]['SINGLE'],
    V extends U['data']
  >(
    resourceName: T,
    id: number | string,
    query = '',
    overwrite = false
  ) =>
  async () => {
    const urlPath = RESOURCE_PATH[resourceName];

    if (!urlPath) return null;

    const { data } = await axios.get<U>(`/${urlPath}/${id}?${query}`, {
      headers: {
        resourceName,
        overwrite,
      },
    });

    return data.data as V;
  };

export const addData =
  <
    T extends ResourceKey,
    U extends ResourceResponse[T]['SINGLE'],
    V extends U['data']
  >(
    resourceName: T,
    payload: unknown
  ) =>
  async (dispatch: Dispatch) => {
    const urlPath = RESOURCE_PATH[resourceName];

    if (!urlPath) return null;

    const { data } = await axios.post<U>(`/${urlPath}`, payload, {
      headers: {
        resourceName,
      },
    });

    dispatch(
      updateResource(resourceName, {
        gid: data.data.gid,
        data: data.data,
      })
    );

    return data.data as V;
  };

export const updateData =
  <
    T extends ResourceKey,
    U extends ResourceResponse[T]['SINGLE'],
    V extends U['data']
  >(
    resourceName: T
  ) =>
  (id: number, update: unknown, query = '') =>
  async () => {
    const urlPath = RESOURCE_PATH[resourceName];

    if (!urlPath) return null;

    const { data } = await axios.patch<U>(
      `/${urlPath}/${id}?${query}`,
      update,
      {
        headers: {
          resourceName,
        },
      }
    );

    return data.data as V;
  };

export const deleteData =
  <T extends ResourceKey>(resourceName: T, id: number) =>
  async (dispatch: Dispatch) => {
    const urlPath = RESOURCE_PATH[resourceName];

    if (!urlPath) return null;

    await axios.delete(`/${urlPath}/${id}`);

    dispatch(deleteResource(resourceName, id));
  };
