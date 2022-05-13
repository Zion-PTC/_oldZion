import { AudiusApi, AudiusURL, AudiusRequests } from '@zionstate/audius';

let newApi = new AudiusApi('prova');
// console.log(await newApi.getFastestHost()); // works
// console.log(await newApi.setUrlToFetch('searchUsers', 'gotek'));

// AudiusURL.searchUsers.setPaths('ccc').show();
// AudiusURL.searchUsers.setParams('app_name', 'ccciiiii').show();
let bob = new AudiusApi('bob', 'ZION');
let response = await bob.fetchAudius2('searchUsers', 'gotek');
console.log(bob.audiusApiURLs[13]);
console.log(response);

// console.log(bob.audiusApiURLs);
// bob.fetchAudius2('getUser', 'gotek');
