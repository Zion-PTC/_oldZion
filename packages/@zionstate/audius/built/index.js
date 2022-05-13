import { AudiusApi as AAPI } from './src/AudiusApi.js';
import aURL from './src/AudiusURL.js';
import { AudiusRequest as aREQ, getUser } from './src/AudiusRequest.js';
export let AudiusApi = AAPI;
export let AudiusURL = aURL;
export let AudiusRequest = aREQ;
export const number = 0;
export let AudiusRequests = {
    getUser,
};
