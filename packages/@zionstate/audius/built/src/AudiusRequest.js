import { ZionRequest, } from '@zionstate_node/node-fetch';
import AudiusURL from './AudiusURL.js';
export class AudiusRequest extends ZionRequest {
    input;
    title;
    init;
    __type;
    constructor(input, title, init, __type) {
        super(input, init);
        this.input = input;
        this.title = title;
        this.init = init;
        this.__type = __type;
    }
    setPathname(string) {
        this.input.setPaths(string);
        return this;
    }
}
var AudiusHeaders;
(function (AudiusHeaders) {
    AudiusHeaders["app_json"] = "application/json";
})(AudiusHeaders || (AudiusHeaders = {}));
let searchUsers = new AudiusRequest(AudiusURL.searchUsers);
searchUsers.title = 'Search Users';
searchUsers.headers.set('Accept', AudiusHeaders.app_json);
let getUser = new AudiusRequest(AudiusURL.getUser);
getUser.title = 'Get User';
getUser.headers.set('Accept', AudiusHeaders.app_json);
let getUserFavorites = new AudiusRequest(AudiusURL.getUserFavorites);
getUserFavorites.title = `Get User's Favorite Tracks`;
getUserFavorites.headers.set('Accept', AudiusHeaders.app_json);
let getUsersReposts = new AudiusRequest(AudiusURL.getUsersReposts);
getUsersReposts.title = `Get User's Reposts`;
getUsersReposts.headers.set('Accept', AudiusHeaders.app_json);
let gumutt = AudiusURL.getUsersMostUsedTrackTags;
let getUsersMostUsedTrackTags = new AudiusRequest(gumutt);
getUsersMostUsedTrackTags.title = `Get User's Most Used Track Tags`;
getUsersMostUsedTrackTags.headers.set('Accept', AudiusHeaders.app_json);
let getUsersTracks = new AudiusRequest(AudiusURL.getUsersTracks);
getUsersTracks.title = `Get User's Tracks`;
getUsersTracks.headers.set('Accept', AudiusHeaders.app_json);
let searchPlaylist = new AudiusRequest(AudiusURL.searchPlaylist);
searchPlaylist.title = `Search Playlists`;
searchPlaylist.headers.set('Accept', AudiusHeaders.app_json);
let getPlaylist = new AudiusRequest(AudiusURL.getPlaylist);
getPlaylist.title = `Get Playlist`;
getPlaylist.headers.set('Accept', AudiusHeaders.app_json);
let getPlaylistTracks = new AudiusRequest(AudiusURL.getPlaylistTracks);
getPlaylistTracks.title = `Get Playlist Tracks`;
getPlaylistTracks.headers.set('Accept', AudiusHeaders.app_json);
let searchTracks = new AudiusRequest(AudiusURL.searchTracks);
searchTracks.title = `Search Tracks`;
searchTracks.headers.set('Accept', AudiusHeaders.app_json);
let trendingTracks = new AudiusRequest(AudiusURL.trendingTracks);
trendingTracks.title = `Trending Tracks`;
trendingTracks.headers.set('Accept', AudiusHeaders.app_json);
let getTrack = new AudiusRequest(AudiusURL.getTrack);
getTrack.title = `Get Track`;
getTrack.headers.set('Accept', AudiusHeaders.app_json);
let streamTrack = new AudiusRequest(AudiusURL.streamTrack);
streamTrack.title = `Stream Track`;
var SearchParamsTypes;
(function (SearchParamsTypes) {
    SearchParamsTypes["app_name"] = "app_name";
    SearchParamsTypes["query"] = "query";
    SearchParamsTypes["only_downloadable"] = "only_downloadable";
    SearchParamsTypes["user_id"] = "user_id";
})(SearchParamsTypes || (SearchParamsTypes = {}));
export { searchUsers, getUser, getUserFavorites, getUsersReposts, getUsersMostUsedTrackTags, getUsersTracks, searchPlaylist, getPlaylist, getPlaylistTracks, searchTracks, trendingTracks, getTrack, streamTrack, };
