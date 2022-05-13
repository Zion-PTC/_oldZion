import fetch from 'node-fetch';
import { ZionError } from '@zionstate_js/error';
import { AudiusRequest, } from './AudiusRequest.js';
import AudiusURLs, { AudiusURLsEnum, } from './AudiusURL.js';
let audiusApiURLsArray = [
    AudiusURLs.getUser,
    AudiusURLs.getUserFavorites,
    AudiusURLs.getUsersReposts,
    AudiusURLs.getUsersMostUsedTrackTags,
    AudiusURLs.getUsersTracks,
    AudiusURLs.getPlaylist,
    AudiusURLs.getPlaylistTracks,
    AudiusURLs.getTrack,
    AudiusURLs.streamTrack,
    // SEARCH
    AudiusURLs.searchUsers,
    AudiusURLs.searchTracks,
    AudiusURLs.searchPlaylist,
    AudiusURLs.trendingTracks,
    AudiusURLs.searchHashtags,
];
export class AudiusApi {
    name;
    app_name;
    audiusApiURLs = audiusApiURLsArray;
    constructor(name, app_name) {
        this.name = name;
        this.app_name = app_name;
        this.name;
        this.setAppName();
    }
    async getFastestHost() {
        const AUDIUS_URL = 'https://api.audius.co';
        const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
        let r = await fetch(AUDIUS_URL);
        let j = await r.json();
        let d = j.data;
        let e = sample(d);
        return e;
    }
    async setUrlToFetch(type, query) {
        let host = await this.getFastestHost();
        const TAG_SEARC_URL_PREFIX = '/search/tags?kind=all&limit=15&offset=0&query=';
        const TAG_SEARCH_URL_SUFFIX = '&user_tag_count=1';
        const VERSION = '/v1';
        const USERS = '/users';
        const TRACKS = '/tracks';
        const PLAYLISTS = '/playlists';
        const FAVORITES = '/favorites';
        const REPOSTS = '/reposts';
        const TRENDING = '/trending';
        const TAGS = '/tags';
        const USERID = '?user_id=';
        const URL = '?url=';
        const STRING = '/string';
        const RESOLVE = '/resolve';
        const METRICS = '/metrics/app_name/trailing';
        const SEARCH = '/search?query=';
        const STREAM = '/stream';
        const APP = 'zion_dapp';
        const APPNAMESEARCH = '&app_name=' + APP;
        const APPNAME = '?app_name=' + APP;
        const QUERY = '/' + query;
        let method = 'GET';
        let headers = { Accept: 'application/json' };
        let getPlaylist = {
            url: host + VERSION + PLAYLISTS + QUERY,
            options: { method, headers },
        };
        let getPlaylistTracks = {
            url: host + VERSION + PLAYLISTS + QUERY + TRACKS + APPNAME,
            options: { method, headers },
        };
        let getTrack = {
            url: host + VERSION + TRACKS + QUERY + APPNAME,
            options: { method, headers },
        };
        let getUser = {
            url: host + VERSION + USERS + QUERY + APPNAME,
            options: { method, headers },
        };
        let getUserFavoriteTracks = {
            url: host + VERSION + USERS + QUERY + FAVORITES + APP,
            options: { method, headers },
        };
        let getUserMostUsedTags = {
            url: host + VERSION + USERS + STRING + TAGS + USERID + query + APPNAMESEARCH,
            options: { method, headers },
        };
        let getUserRepost = {
            url: host + VERSION + USERS + STRING + REPOSTS + APPNAME,
            options: { method, headers },
        };
        let searchPlaylist = {
            url: host + VERSION + PLAYLISTS + SEARCH + query + APPNAMESEARCH,
            options: { method, headers },
        };
        let searchTrack = {
            url: host + VERSION + TRACKS + SEARCH + query + APPNAMESEARCH,
            options: { method, headers },
        };
        let searchUsers = {
            url: host + VERSION + USERS + SEARCH + query + APPNAMESEARCH,
            options: { method, headers },
        };
        let userTracks = {
            url: host + VERSION + USERS + QUERY + TRACKS + APPNAME,
            options: { method, headers },
        };
        let trendingTracks = {
            url: host + VERSION + TRACKS + TRENDING + APPNAME,
            options: { method, headers },
        };
        let getTrailingMetrics = {
            url: host + VERSION + METRICS + QUERY + APPNAME,
            options: { method, headers },
        };
        let streamTrack = {
            url: host + VERSION + TRACKS + QUERY + STREAM + APPNAME,
            options: { method },
        };
        let searchTag = {
            url: host + TAG_SEARC_URL_PREFIX + query + TAG_SEARCH_URL_SUFFIX,
            // options: { method, headers }
        };
        // // che minchia è sto resolverURL?? lol
        // let resolveUrl = 'https://audius.co/camouflybeats/hypermantra-86216';
        // let resolve = {
        //   // url: host + VERSION + RESOLVE + URL + resolveUrl + APPNAMESEARCH + APP,
        //   url: '',
        //   options: {
        //     method,
        //     headers: { Accept: 'text/plain' },
        //   },
        // };
        let result;
        switch (type) {
            case 'getPlaylist': //
                result = getPlaylist;
                break;
            case 'getPlaylistTracks': //
                result = getPlaylistTracks;
                break;
            case 'getTrack': //
                result = getTrack;
                break;
            case 'getUser': //
                result = getUser;
                break;
            case 'getUserFavoriteTracks': //
                result = getUserFavoriteTracks;
                break;
            case 'getUserMostUsedTags': //
                result = getUserMostUsedTags;
                break;
            case 'getUserRepost': //
                result = getUserRepost;
                break;
            case 'searchPlaylist': //
                result = searchPlaylist;
                break;
            case 'searchTrack': //
                result = searchTrack;
                break;
            case 'searchUsers': //
                result = searchUsers;
                break;
            case 'userTracks': //
                result = userTracks;
                break;
            case 'trendingTracks': //
                result = trendingTracks;
                break;
            case 'getTrailingMetrics':
                result = getTrailingMetrics;
                break;
            // case 'resolve':
            //   result = resolve;
            //   break;
            case 'searchTag':
                result = searchTag;
                break;
            case 'streamTrack':
                result = streamTrack;
                break;
            default:
                break;
        }
        return result;
    }
    async fetchAudius(type, query) {
        return new Promise(async (resolve, reject) => {
            /*write code here*/
            let fetchAttrObj = await this.setUrlToFetch(type, query);
            if (!fetchAttrObj)
                return;
            if ('options' in fetchAttrObj) {
                let res = await fetch(fetchAttrObj.url, fetchAttrObj.options);
                if (type !== 'streamTrack') {
                    resolve(await res.json());
                }
                if (type === 'streamTrack') {
                    resolve({
                        //@ts-expect-error
                        url: res[Object.getOwnPropertySymbols(res)[1]].url,
                        stream: res,
                    });
                }
            }
        });
    }
    async createHashtagPlaylist(query) {
        console.log('createPlaylist called');
        const TAG_SEARC_URL_PREFIX = '/search/tags?kind=all&limit=15&offset=0&query=';
        const TAG_SEARCH_URL_SUFFIX = '&user_tag_count=1';
        let createdPlaylist;
        let host = await this.getFastestHost();
        let hashtag = await fetch(host + TAG_SEARC_URL_PREFIX + query + TAG_SEARCH_URL_SUFFIX);
        let res = await hashtag.json();
        let data = await res.data;
        let { tracks: trackNames } = data;
        let titles = trackNames.map(track => track.title);
        if (titles) {
            console.log('titles ready', titles.length);
            let tracks = [];
            for (let titleOfTrackUsingHashtag of titles) {
                let res = await this.fetchAudius('searchTrack', titleOfTrackUsingHashtag).catch(e => new ZionError('', 'createHastTagPlaylist', e, titleOfTrackUsingHashtag));
                let data;
                if ('data' in res) {
                    data = res.data;
                    if (data) {
                        let streamObject = await this.fetchAudius('streamTrack', await data[0].id);
                        if ('data' in streamObject) {
                            tracks.push(streamObject.data);
                        }
                        console.log('counter', tracks.length);
                    }
                    if (!data) {
                        new ZionError('No tracks matching the title', 'createHashTagPlaylist');
                    }
                }
            }
            tracks ? (createdPlaylist = this.composePlaylist(tracks)) : {};
        }
        return createdPlaylist;
    }
    composePlaylist(tracksUsingHashtag) {
        let playlist = [];
        for (let trackUsingHashtag of tracksUsingHashtag) {
            let { data: trackData, stream } = trackUsingHashtag;
            let { id, title, mood, user: { handle, name }, duration, artwork, } = trackData;
            let trackObj = {
                id,
                title,
                duration,
                handle,
                name,
                mood,
                thumb: artwork['150x150'],
                stream,
            };
            playlist.push(trackObj);
        }
        return playlist;
    }
    async fetchAudiusRequest(request) {
        let res = await fetch(request).catch();
        return res;
    }
    setAppName() {
        audiusApiURLsArray.forEach(this.#updateAppName);
        return this;
    }
    async fetchAudius2(type, query) {
        const fastestHost = new URL(await this.getFastestHost());
        let audiusURL, audiusResponse;
        let response;
        switch (type) {
            case AudiusURLsEnum.getUser:
                audiusURL = this.audiusApiURLs[0];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getUserFavorites:
                audiusURL = this.audiusApiURLs[1];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getUsersReposts:
                audiusURL = this.audiusApiURLs[2];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getUsersMostUsedTrackTags:
                audiusURL = this.audiusApiURLs[3];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getUsersTracks:
                audiusURL = this.audiusApiURLs[4];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getPlaylist:
                audiusURL = this.audiusApiURLs[5];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getPlaylistTracks:
                audiusURL = this.audiusApiURLs[6];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.getTrack:
                audiusURL = this.audiusApiURLs[7];
                audiusURL.setPaths(query);
                break;
            case AudiusURLsEnum.streamTrack:
                audiusURL = this.audiusApiURLs[8];
                audiusURL.setPaths(query);
                break;
            // SEARCH
            case AudiusURLsEnum.searchUsers:
                audiusURL = this.audiusApiURLs[9];
                audiusURL.setParams('query', query);
                break;
            case AudiusURLsEnum.searchTracks:
                audiusURL = this.audiusApiURLs[10];
                audiusURL.setParams('query', query);
                break;
            case AudiusURLsEnum.searchPlaylist:
                audiusURL = this.audiusApiURLs[11];
                audiusURL.setParams('query', query);
                break;
            case AudiusURLsEnum.trendingTracks:
                audiusURL = this.audiusApiURLs[11];
                audiusURL.setParams('query', query);
                break;
            default:
                audiusURL = this.audiusApiURLs[0];
                break;
        }
        audiusURL.setHost(fastestHost.host);
        response = await fetch(new AudiusRequest(audiusURL));
        audiusResponse = await response.json();
        return audiusResponse;
    }
    #updateAppName = (audiusApiURL) => {
        audiusApiURL.setParams('app_name', this.app_name);
    };
}
