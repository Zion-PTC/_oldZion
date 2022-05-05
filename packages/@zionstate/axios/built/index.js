import a from 'axios';
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
