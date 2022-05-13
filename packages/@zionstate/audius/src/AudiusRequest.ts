import {
  ZionRequest,
  IZionRequest,
  ZionRequestInfo,
  ZionRequestInit,
} from '@zionstate_node/node-fetch';
import { AudiusURL as aURL, IAudiusURL } from './AudiusURL.js';
import AudiusURL, {
  AudiusURLsTypes,
  AudiusURLsEnum,
  AudiusURL_Enum,
} from './AudiusURL.js';

export interface IAudiusRequest extends IZionRequest {
  setPathname(string: string): IAudiusRequest;
}

export class AudiusRequest<I> extends ZionRequest implements IAudiusRequest {
  constructor(
    public input: IAudiusURL,
    public title?: string,
    public init?: ZionRequestInit,
    public __type?: AudiusURLsTypes
  ) {
    super(input, init);
  }
  setPathname(string: string): IAudiusRequest {
    this.input.setPaths(string);
    return this;
  }
}

enum AudiusHeaders {
  app_json = 'application/json',
}

type query = AudiusURL_Enum.query;
type pathname = AudiusURL_Enum.pathname;
let searchUsers = new AudiusRequest<query>(AudiusURL.searchUsers);
searchUsers.title = 'Search Users';
searchUsers.headers.set('Accept', AudiusHeaders.app_json);

let getUser = new AudiusRequest<pathname>(AudiusURL.getUser);
getUser.title = 'Get User';
getUser.headers.set('Accept', AudiusHeaders.app_json);

let getUserFavorites = new AudiusRequest<pathname>(AudiusURL.getUserFavorites);
getUserFavorites.title = `Get User's Favorite Tracks`;
getUserFavorites.headers.set('Accept', AudiusHeaders.app_json);

let getUsersReposts = new AudiusRequest<pathname>(AudiusURL.getUsersReposts);
getUsersReposts.title = `Get User's Reposts`;
getUsersReposts.headers.set('Accept', AudiusHeaders.app_json);

let gumutt = AudiusURL.getUsersMostUsedTrackTags;
let getUsersMostUsedTrackTags = new AudiusRequest<pathname>(gumutt);
getUsersMostUsedTrackTags.title = `Get User's Most Used Track Tags`;
getUsersMostUsedTrackTags.headers.set('Accept', AudiusHeaders.app_json);

let getUsersTracks = new AudiusRequest<pathname>(AudiusURL.getUsersTracks);
getUsersTracks.title = `Get User's Tracks`;
getUsersTracks.headers.set('Accept', AudiusHeaders.app_json);

let searchPlaylist = new AudiusRequest<query>(AudiusURL.searchPlaylist);
searchPlaylist.title = `Search Playlists`;
searchPlaylist.headers.set('Accept', AudiusHeaders.app_json);

let getPlaylist = new AudiusRequest<pathname>(AudiusURL.getPlaylist);
getPlaylist.title = `Get Playlist`;
getPlaylist.headers.set('Accept', AudiusHeaders.app_json);

let getPlaylistTracks = new AudiusRequest<pathname>(
  AudiusURL.getPlaylistTracks
);
getPlaylistTracks.title = `Get Playlist Tracks`;
getPlaylistTracks.headers.set('Accept', AudiusHeaders.app_json);

let searchTracks = new AudiusRequest<query>(AudiusURL.searchTracks);
searchTracks.title = `Search Tracks`;
searchTracks.headers.set('Accept', AudiusHeaders.app_json);

let trendingTracks = new AudiusRequest<query>(AudiusURL.trendingTracks);
trendingTracks.title = `Trending Tracks`;
trendingTracks.headers.set('Accept', AudiusHeaders.app_json);

let getTrack = new AudiusRequest<pathname>(AudiusURL.getTrack);
getTrack.title = `Get Track`;
getTrack.headers.set('Accept', AudiusHeaders.app_json);

let streamTrack = new AudiusRequest<pathname>(AudiusURL.streamTrack);
streamTrack.title = `Stream Track`;

enum SearchParamsTypes {
  app_name = 'app_name',
  query = 'query',
  only_downloadable = 'only_downloadable',
  user_id = 'user_id',
}

type AudiusSearchParamsType = 'app_name' | 'query' | 'only_downloadable';
type SetSearchParmsTypes<T> = [(T | never) | 'app_name', string];

type SearchUsersSearchParams = 'query' | 'only_downloadable';
type SetSearchUserArgs = SetSearchParmsTypes<SearchUsersSearchParams>;

type SetGetUserArgs = SetSearchParmsTypes<never>;

type SetGetUsersFavoritesArgs = SetSearchParmsTypes<never>;

type SetGetUsersRepostsArgs = SetSearchParmsTypes<never>;

type GetUsersMostUsedTrackTagsSearchParams = 'user_id';
type SetGetUsersMostUsedTrackTagArgs =
  SetSearchParmsTypes<GetUsersMostUsedTrackTagsSearchParams>;

type SetGetUsersTracksArgs = SetSearchParmsTypes<never>;

type SearchPlaylistSearchParam = 'query';
type SetSearchPlaylistArgs = SetSearchParmsTypes<SearchPlaylistSearchParam>;

type SetGetPlaylistArgs = SetSearchParmsTypes<never>;

type SetGetPlaylistTracksArgs = SetSearchParmsTypes<never>;

type SearchTracksSearchParam = 'query';
type SetSearchTracksArgs = SetSearchParmsTypes<SearchTracksSearchParam>;

type SetTrendingTracksArgs = SetSearchParmsTypes<never>;

type SetGetTrackArgs = SetSearchParmsTypes<never>;

type SetStreamTrackArgs = SetSearchParmsTypes<never>;

export {
  searchUsers,
  getUser,
  getUserFavorites,
  getUsersReposts,
  getUsersMostUsedTrackTags,
  getUsersTracks,
  searchPlaylist,
  getPlaylist,
  getPlaylistTracks,
  searchTracks,
  trendingTracks,
  getTrack,
  streamTrack,
};
