import { ZionRegExp } from '@zionstate_js/regexp';
import { IZionURL, Input, ZionURL } from '@zionstate_js/url';
import audiusApiUrls from './utils/audiusApiUrls.js';

export interface IAudiusURL extends IZionURL {
  url: Input;
  pathnamePattern: string;
  __type?: AudiusURL_T;
  base?: Input | undefined;
}

export enum AudiusURL_Enum {
  query = 'query',
  pathname = 'pathname',
}
export type AudiusURL_T = keyof typeof AudiusURL_Enum;

export class AudiusURL extends ZionURL implements IAudiusURL {
  #URL: URL;
  constructor(
    url: Input,
    public pathnamePattern: string,
    readonly __type: AudiusURL_T = AudiusURL_Enum.pathname,
    public base?: Input | undefined
  ) {
    super(url, pathnamePattern, base);
    this.#URL = new URL(url, base);
  }
  setPaths(string: string): IAudiusURL {
    let regexp = ZionRegExp.everythingBetweenDyn('{', '}');
    let suffix = '/v1';
    this.#URL.pathname = '/v1' + this.pathnamePattern.replace(regexp, string);
    this.refreshThis();
    return this;
  }
}

export class AudiusURL_v1 extends AudiusURL implements IAudiusURL {
  #URL: URL;

  constructor(
    url: Input,
    public pathnamePattern: string,
    readonly __type: AudiusURL_T = AudiusURL_Enum.pathname,
    public base?: Input | undefined
  ) {
    super(url, pathnamePattern, __type, base);
    this.#URL = new URL(url, base);
  }
  setPaths(string: string): IAudiusURL {
    let regexp = ZionRegExp.everythingBetweenDyn('{', '}');
    let suffix = '/v1';
    this.#URL.pathname = suffix + this.pathnamePattern.replace(regexp, string);
    this.refreshThis();
    return this;
  }
}

export class AudiusURL_Search extends AudiusURL {
  constructor(
    url: Input,
    public pathnamePattern: string,
    readonly __type: AudiusURL_Enum.query = AudiusURL_Enum.query,
    base?: Input | undefined
  ) {
    super(url, pathnamePattern, AudiusURL_Enum.query, base);
  }
}

const SEARCHUSERS = audiusApiUrls.searchUsers;
const GETUSER = audiusApiUrls.getUser;
const GETUSERFAVS = audiusApiUrls.getUserFavorites;
const GETUSERREPOSTS = audiusApiUrls.getUsersReposts;
const GUMUTT = audiusApiUrls.getUsersMostUsedTrackTags;
const GETUSERTRACKS = audiusApiUrls.getUsersTracks;
const SEARCHPLAYLIST = audiusApiUrls.searchPlaylist;
const GETPLAYLIST = audiusApiUrls.getPlaylist;
const GPT = audiusApiUrls.getPlaylistTracks;
const SEARCHTRACKS = audiusApiUrls.searchTracks;
const TRENDINGTRACKS = audiusApiUrls.trendingTracks;
const GETTRACK = audiusApiUrls.getTrack;
const STREAMTRACK = audiusApiUrls.streamTrack;
const SEARCHHASHTAGS = audiusApiUrls.searchHashtag;
const GETUSER_P = '/users/{user_id}';
const GETUSERFAVS_P = '/users/{user_id}/favorites';
const GETUSERREPOSTS_P = '/users/{user_id}/reposts';
const GUMUTT_P = '/users/{user_id}/tags';
const GETUSERTRACKS_P = '/users/{user_id}/tracks';
const GETPLAYLIST_P = '/playlists/{playlist_id}/tracks';
const GPT_P = '/playlists/{playlist_id}/tracks';
const GETTRACK_P = '/tracks/{track_id}';
const STREAMTRACK_P = '/tracks/{track_id}/stream';
// SEARCH
const SEARCHUSERS_P = '/users/search';
const SEARCHPLAYLIST_P = '/playlists/search';
const SEARCHTRACKS_P = '/tracks/search';
const TRENDINGTRACKS_P = '/tracks/trending';
const SEARCHHASHTAG_P = '/search/tags';

let getUser = new AudiusURL(GETUSER, GETUSER_P);
let getUserFavorites = new AudiusURL(GETUSERFAVS, GETUSERFAVS_P);
let getUsersReposts = new AudiusURL(GETUSERREPOSTS, GETUSERREPOSTS_P);
let getUsersMostUsedTrackTags = new AudiusURL(GUMUTT, GUMUTT_P);
let getUsersTracks = new AudiusURL(GETUSERTRACKS, GETUSERTRACKS_P);
let getPlaylist = new AudiusURL(GETPLAYLIST, GETPLAYLIST_P);
let getPlaylistTracks = new AudiusURL(GPT, GPT_P);
let getTrack = new AudiusURL(GETTRACK, GETTRACK_P);
let streamTrack = new AudiusURL(STREAMTRACK, STREAMTRACK_P);
// SEARCH
let searchUsers = new AudiusURL_Search(SEARCHUSERS, SEARCHUSERS_P);
let searchPlaylist = new AudiusURL_Search(SEARCHPLAYLIST, SEARCHPLAYLIST_P);
let searchTracks = new AudiusURL_Search(SEARCHTRACKS, SEARCHTRACKS_P);
let trendingTracks = new AudiusURL_Search(TRENDINGTRACKS, TRENDINGTRACKS_P);
let searchHashtags = new AudiusURL_Search(SEARCHHASHTAGS, SEARCHHASHTAG_P);

export enum AudiusURLsEnum {
  searchUsers = 'searchUsers',
  getUser = 'getUser',
  getUserFavorites = 'getUserFavorites',
  getUsersReposts = 'getUsersReposts',
  getUsersMostUsedTrackTags = 'getUsersMostUsedTrackTags',
  getUsersTracks = 'getUsersTracks',
  searchPlaylist = 'searchPlaylist',
  getPlaylist = 'getPlaylist',
  getPlaylistTracks = 'getPlaylistTracks',
  searchTracks = 'searchTracks',
  trendingTracks = 'trendingTracks',
  getTrack = 'getTrack',
  streamTrack = 'streamTrack',
  searchHashtags = 'searchHashtags',
}

const AudiusURLs = {
  [AudiusURLsEnum.searchUsers]: searchUsers,
  [AudiusURLsEnum.getUser]: getUser,
  [AudiusURLsEnum.getUserFavorites]: getUserFavorites,
  [AudiusURLsEnum.getUsersReposts]: getUsersReposts,
  [AudiusURLsEnum.getUsersMostUsedTrackTags]: getUsersMostUsedTrackTags,
  [AudiusURLsEnum.getUsersTracks]: getUsersTracks,
  [AudiusURLsEnum.searchPlaylist]: searchPlaylist,
  [AudiusURLsEnum.getPlaylist]: getPlaylist,
  [AudiusURLsEnum.getPlaylistTracks]: getPlaylistTracks,
  [AudiusURLsEnum.searchTracks]: searchTracks,
  [AudiusURLsEnum.trendingTracks]: trendingTracks,
  [AudiusURLsEnum.getTrack]: getTrack,
  [AudiusURLsEnum.streamTrack]: streamTrack,
  [AudiusURLsEnum.searchHashtags]: searchHashtags,
} as const;

export type AudiusURLsTypes = keyof typeof AudiusURLsEnum;

export default AudiusURLs;
