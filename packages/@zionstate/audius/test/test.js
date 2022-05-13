import { AudiusApi, AudiusURL, AudiusRequests } from '@zionstate/audius';

let newApi = new AudiusApi('prova');
// console.log(await newApi.getFastestHost()); // works
// console.log(await newApi.setUrlToFetch('searchUsers', 'gotek'));

// AudiusURL.searchUsers.setPaths('ccc').show();
// AudiusURL.searchUsers.setParams('app_name', 'ccciiiii').show();
let bob = new AudiusApi('bob', 'ZION');
let response = await bob.fetchAudius2('searchHashtags', 'tnldao');
console.log(response.data.tracks);
// console.log(response);

// console.log(bob.audiusApiURLs);
// bob.fetchAudius2('getUser', 'gotek');
