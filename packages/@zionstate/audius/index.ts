import { AudiusApi as AAPI, IAudiusApi as IAAPI } from './src/AudiusApi.js';
import aURL, { AudiusURLsTypes as aURLs_T } from './src/AudiusURL.js';
import { AudiusRequest as aREQ, getUser } from './src/AudiusRequest.js';

export type AudiusURLsTypes = aURLs_T;
export type IAudiusApi = IAAPI;
export let AudiusApi = AAPI;
export let AudiusURL = aURL;
export let AudiusRequest = aREQ;
export const number = 0;
export let AudiusRequests = {
  getUser,
};
