import axios, { type AxiosInstance } from 'axios';
import _ from 'lodash';
import { Dispatch } from 'redux';
import {
  overwriteResource,
  setResource,
  updateResource,
} from './actions/resources';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const applyInterceptors = (dispatch: Dispatch) => {
  instance.interceptors.request.use(
    (config) => {
      if (config.headers) {
        if (_.isString(config.headers.resourceName))
          config.resourceName = <FrontEnd.ResourceKey>(
            config.headers.resourceName
          );

        if (_.isBoolean(config.headers.overwrite))
          config.overwrite = config.headers.overwrite;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  instance.interceptors.response.use((res) => {
    const { config, data } = res;

    if (!config.resourceName) return res;

    if (config.overwrite) {
      dispatch(overwriteResource(config.resourceName, data));
    } else if (config.method === 'patch') {
      dispatch(
        updateResource(config.resourceName, {
          id: data.data.id,
          data: data.data,
        })
      );
    } else {
      dispatch(setResource(config.resourceName, data));
    }

    return res;
  });
};

export default instance;
