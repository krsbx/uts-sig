import type {
  AxiosRequestConfig as OriginalAxiosRequestConfig,
  AxiosRequestHeaders as OriginalAxiosRequestHeaders,
} from 'axios';

declare module 'axios' {
  interface AxiosRequestHeaders extends OriginalAxiosRequestHeaders {
    Authorization: string;
    resourceName: FrontEnd.ResourceKey;
    overwrite: boolean;
  }

  interface AxiosInstance {
    config?: {
      headers?: AxiosRequestHeaders;
    };
  }

  interface AxiosRequestConfig extends OriginalAxiosRequestConfig {
    headers?: AxiosRequestHeaders;
    resourceName?: FrontEnd.ResourceKey;
    overwrite?: boolean;
  }
}
