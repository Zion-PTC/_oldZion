import { ZionURL } from '@zionstate_js/url';
// import { defineSearchParams } from '../built/src/utils/defineSearchParameter.js';

const URLEXAMPLE1 =
  'https://discoveryprovider3.audius.co/v1/users/search?query=Brownies&app_name=EXAMPLEAPP';
const URLEXAMPLE2 =
  'https://discoveryprovider3.audius.co/v1/users/nlGNe?app_name=EXAMPLEAPP';

let newZionURL1 = new ZionURL(URLEXAMPLE1);
let newZionURL2 = new ZionURL(URLEXAMPLE2);
// newZionURL2.setPaths('/ciao/ole');
console.log(newZionURL2[Object.getOwnPropertySymbols(newZionURL2)[0]]);
console.log(newZionURL2);
// .showSearchParams()
// .setParams('query', 'gotek')
// .setParams('app_name', 'ZION');
// .showSearchParamsEntries();
