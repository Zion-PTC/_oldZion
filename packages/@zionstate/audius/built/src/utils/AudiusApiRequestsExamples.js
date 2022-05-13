import { ZionRequest, } from '@zionstate_node/node-fetch';
class AudiusRequest extends ZionRequest {
    input;
    __type;
    title;
    init;
    pathNameReference;
    constructor(input, __type, title, init, pathNameReference) {
        super(input, init);
        this.input = input;
        this.__type = __type;
        this.title = title;
        this.init = init;
        this.pathNameReference = pathNameReference;
    }
}
class AudiusExamples {
    title;
    pathNameReference;
    headers;
    examplePath;
    app_json = `'Accept':'application/json'`;
    method = 'GET';
    constructor(title, pathNameReference, headers, examplePath) {
        this.title = title;
        this.pathNameReference = pathNameReference;
        this.headers = headers;
        this.examplePath = examplePath;
    }
}
var AudiusHeaders;
(function (AudiusHeaders) {
    AudiusHeaders["app_json"] = "app_json";
})(AudiusHeaders || (AudiusHeaders = {}));
let searchUser = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/search?query=Brownies&app_name=EXAMPLEAPP');
searchUser.title = 'Search Users';
searchUser.pathNameReference = '/users/search';
searchUser.headers.set('accept', AudiusHeaders.app_json);
let getUser = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/nlGNe?app_name=EXAMPLEAPP');
getUser.title = 'Get User';
getUser.pathNameReference = '/users/{user_id}';
getUser.headers.set('accept', AudiusHeaders.app_json);
let getUserFavorites = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/nlGNe?app_name=EXAMPLEAPP');
getUserFavorites.title = `Get User's Favorite Tracks`;
getUserFavorites.pathNameReference = '/users/{user_id}/favorites';
getUserFavorites.headers.set('accept', AudiusHeaders.app_json);
let getUsersReposts = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/string/reposts?app_name=EXAMPLEAPP');
getUsersReposts.title = `Get User's Reposts`;
getUsersReposts.pathNameReference = '/users/{user_id}/reposts';
getUsersReposts.headers.set('accept', AudiusHeaders.app_json);
let getUsersMostUsedTracjTags = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP');
getUsersMostUsedTracjTags.title = `Get User's Most Used Track Tags`;
getUsersMostUsedTracjTags.pathNameReference = '/users/{user_id}/tags';
getUsersMostUsedTracjTags.headers.set('accept', AudiusHeaders.app_json);
let getUsersTracks = new AudiusRequest('https://discoveryprovider3.audius.co/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP');
getUsersTracks.title = `Get User's Tracks`;
getUsersTracks.pathNameReference = '/users/{user_id}/tracks';
getUsersTracks.headers.set('accept', AudiusHeaders.app_json);
let searchPlaylist = new AudiusRequest('https://discoveryprovider3.audius.co/v1/playlists/search?query=Hot%20New&app_name=EXAMPLEAPP');
searchPlaylist.title = `Search Playlists`;
searchPlaylist.pathNameReference = '/playlists/search';
searchPlaylist.headers.set('accept', AudiusHeaders.app_json);
let getPlaylist = new AudiusRequest('https://discoveryprovider3.audius.co/v1/playlists/DOPRl?app_name=EXAMPLEAPP');
getPlaylist.title = `Get Playlist`;
getPlaylist.pathNameReference = '/playlists/{playlist_id}';
getPlaylist.headers.set('accept', AudiusHeaders.app_json);
let getPlaylistTracks = new AudiusRequest('https://discoveryprovider3.audius.co/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP');
getPlaylistTracks.title = `Get Playlist Tracks`;
getPlaylistTracks.pathNameReference = '/playlists/{playlist_id}/tracks';
getPlaylistTracks.headers.set('accept', AudiusHeaders.app_json);
let searchTracks = new AudiusRequest('https://discoveryprovider3.audius.co/v1/tracks/search?query=baauer%20b2b&app_name=EXAMPLEAPP');
searchTracks.title = `Search Tracks`;
searchTracks.pathNameReference = '/tracks/search';
searchTracks.headers.set('accept', AudiusHeaders.app_json);
let trendingTracks = new AudiusRequest('https://discoveryprovider3.audius.co/v1/tracks/trending?app_name=EXAMPLEAPP');
trendingTracks.title = `Trending Tracks`;
trendingTracks.pathNameReference = '/tracks/trending';
trendingTracks.headers.set('accept', AudiusHeaders.app_json);
let getTrack = new AudiusRequest('https://discoveryprovider3.audius.co/v1/tracks/D7KyD?app_name=EXAMPLEAPP');
getTrack.title = `Get Track`;
getTrack.pathNameReference = '/tracks/{track_id}';
getTrack.headers.set('accept', AudiusHeaders.app_json);
let streamTrack = new AudiusRequest('https://discoveryprovider3.audius.co/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP');
streamTrack.title = `Stream Track`;
streamTrack.pathNameReference = '/tracks/{track_id}/stream';
export { searchUser, getUser, getUserFavorites, getUsersReposts, getUsersMostUsedTracjTags, getUsersTracks, searchPlaylist, getPlaylist, getPlaylistTracks, searchTracks, trendingTracks, getTrack, streamTrack, };
