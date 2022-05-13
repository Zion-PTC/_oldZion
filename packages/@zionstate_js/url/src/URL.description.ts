let newUrl = new URL('');

let newUrlOrigin = newUrl.origin;
let searchParams = newUrl.searchParams;
let hash = newUrl.hash;
let host = newUrl.host;
let hostname = newUrl.hostname;
let href = newUrl.href;
let password = newUrl.password;
let pathname = newUrl.pathname;
let port = newUrl.port;
let protocol = newUrl.protocol;
let search = newUrl.search;
let username = newUrl.username;
let newUlrToJson = newUrl.toJSON;
let newUrlToString = newUrl.toString;

let {
  append,
  delete: spDelete,
  forEach,
  get,
  getAll,
  has,
  keys,
  set,
  sort,
  toString: spToString,
  values,
} = searchParams;
