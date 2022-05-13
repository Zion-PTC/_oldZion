import a, {
  Axios as axAxios,
  AxiosAdapter as axAxiosAdapter,
  AxiosBasicCredentials as axAxiosBasicCredentials,
  AxiosDefaults as axAxiosDefaults,
  AxiosError as axAxiosError,
  AxiosInstance as axAxiosInstance,
  AxiosInterceptorManager as axAxiosInterceptorManager,
  AxiosInterceptorOptions as axAxiosInterceptorOptions,
  AxiosPromise as axAxiosPromise,
  AxiosProxyConfig as axAxiosProxyConfig,
  AxiosRequestConfig as axAxiosRequestConfig,
  AxiosRequestHeaders as axAxiosRequestHeaders,
  AxiosRequestTransformer as axAxiosRequestTransformer,
  AxiosResponse as axAxiosResponse,
  AxiosResponseHeaders as axAxiosResponseHeaders,
  AxiosResponseTransformer as axAxiosResponseTransformer,
  AxiosStatic as axAxiosStatic,
  Cancel as axCancel,
  CancelStatic as axCancelStatic,
  CancelToken as axCancelToken,
  CancelTokenSource as axCancelTokenSource,
  CancelTokenStatic as axCancelTokenStatic,
  CanceledError as axCanceledError,
  Canceler as axCanceler,
  HeadersDefaults as axHeadersDefaults,
  Method as axMethod,
  ResponseType as axResponseType,
  responseEncoding as axresponseEncoding,
  TransitionalOptions as axTransitionalOptions,
} from 'axios';

export type Axios = axAxios;
export type AxiosAdapter = axAxiosAdapter;
export type AxiosBasicCredentials = axAxiosBasicCredentials;
export type AxiosDefaults = axAxiosDefaults;
export type AxiosError = axAxiosError;
export type AxiosInstance = axAxiosInstance;
export type AxiosInterceptorManager<V> = axAxiosInterceptorManager<V>;
export type AxiosInterceptorOptions = axAxiosInterceptorOptions;
export type AxiosPromise = axAxiosPromise;
export type AxiosProxyConfig = axAxiosProxyConfig;
export type AxiosRequestConfig = axAxiosRequestConfig;
export type AxiosRequestHeaders = axAxiosRequestHeaders;
export type AxiosRequestTransformer = axAxiosRequestTransformer;
export type AxiosResponse = axAxiosResponse;
export type AxiosResponseHeaders = axAxiosResponseHeaders;
export type AxiosResponseTransformer = axAxiosResponseTransformer;
export type AxiosStatic = axAxiosStatic;
export type Cancel = axCancel;
export type CancelStatic = axCancelStatic;
export type CancelToken = axCancelToken;
export type CancelTokenSource = axCancelTokenSource;
export type CancelTokenStatic = axCancelTokenStatic;
export type CanceledError<T> = axCanceledError<T>;
export type Canceler = axCanceler;
export type HeadersDefaults = axHeadersDefaults;
export type Method = axMethod;
export type ResponseType = axResponseType;
export type responseEncoding = axresponseEncoding;
export type TransitionalOptions = axTransitionalOptions;

let create = a.create;
let defaults = a.defaults;
let deleteF = a.delete;
let get = a.get;
let getUri = a.getUri;
let head = a.head;
let interceptors = a.interceptors;
let isAxiosError = a.isAxiosError;
let isCancel = a.isCancel;
let options = a.options;
let patch = a.patch;
let patchForm = a.patchForm;
let post = a.post;
let postForm = a.postForm;
let put = a.put;
let putForm = a.putForm;
let request = a.request;
let spread = a.spread;
let VERSION = a.VERSION;

let obj = {
  create,
  defaults,
  delete: deleteF,
  get,
  getUri,
  head,
  interceptors,
  isAxiosError,
  isCancel,
  options,
  patch,
  patchForm,
  post,
  postForm,
  put,
  putForm,
  request,
  spread,
  VERSION,
};

export default obj;
