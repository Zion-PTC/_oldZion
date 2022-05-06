import fetch from 'node-fetch';
import { ZionError } from './Standard Classes/ZionError.js';
export class Audius {
    constructor() {
        this.name;
    }
    async getFastestHost() {
        const AUDIUS_URL = 'https://api.audius.co';
        const sample = arr => arr[Math.floor(Math.random() * arr.length)];
        let r = await fetch(AUDIUS_URL);
        let j = await r.json();
        let d = j.data;
        let e = sample(d);
        // console.log("getFastestHost", e);
        // .then(r => r.json())
        // .then(j => j.data)
        // .then(d => sample(d))
        // .catch(e => new ZionError(
        //   "Error Fetchin faster Audius Host",
        //   "getFastestHost",
        //   e,
        //   AUDIUS_URL
        // ))
        // console.log("getFastestHost", fetchResult);
        return e;
    }
    async setUrlToFetch(type, query) {
        let host = await this.getFastestHost();
        const TAG_SEARC_URL_PREFIX = '/search/tags?kind=all&limit=15&offset=0&query=';
        const TAG_SEARCH_URL_SUFFIX = '&user_tag_count=1';
        const VERSION = '/v1';
        const USERS = '/v1';
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
        let searchTag = {
            url: host + TAG_SEARC_URL_PREFIX + query + TAG_SEARCH_URL_SUFFIX,
            // options: { method, headers }
        };
        let streamTrack = {
            url: host + VERSION + TRACKS + QUERY + STREAM + APPNAME,
            options: { method },
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
        let resolveUrl = 'https://audius.co/camouflybeats/hypermantra-86216';
        let resolve = {
            url: host + VERSION + RESOLVE + URL + resolveUrl + APPNAMESEARCH + APP,
            options: {
                method,
                headers: { Accept: 'text/plain' },
            },
        };
        let result;
        switch (type) {
            case 'getPlaylist':
                result = getPlaylist;
                break;
            case 'getPlaylistTracks':
                result = getPlaylistTracks;
                break;
            case 'getTrack':
                result = getTrack;
                break;
            case 'getUser':
                result = getUser;
                break;
            case 'getUserFavoriteTracks':
                result = getUserFavoriteTracks;
                break;
            case 'getUserMostUsedTags':
                result = getUserMostUsedTags;
                break;
            case 'getUserRepost':
                result = getUserRepost;
                break;
            case 'searchPlaylist':
                result = searchPlaylist;
                break;
            case 'searchTrack':
                result = searchTrack;
                break;
            case 'searchUsers':
                result = searchUsers;
                break;
            case 'searchTag':
                result = searchTag;
                break;
            case 'streamTrack':
                result = streamTrack;
                break;
            case 'userTracks':
                result = userTracks;
                break;
            case 'trendingTracks':
                result = trendingTracks;
                break;
            case 'getTrailingMetrics':
                result = getTrailingMetrics;
                break;
            case 'resolve':
                result = resolve;
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
            let res = await fetch(fetchAttrObj.url, fetchAttrObj.options);
            if (type !== 'streamTrack') {
                resolve(await res.json());
            }
            if (type === 'streamTrack') {
                resolve({
                    url: res[Object.getOwnPropertySymbols(res)[1]].url,
                    stream: res,
                });
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
        let data = res.data;
        let { tracks: trackNames, users } = await data;
        let titles = trackNames.map(track => track.title);
        if (titles) {
            console.log('titles ready', titles.length);
            let tracks = [];
            for (let titleOfTrackUsingHashtag of titles) {
                let res = await this.fetchAudius('searchTrack', titleOfTrackUsingHashtag).catch(e => new ZionError('', 'createHastTagPlaylist', e, titleOfTrackUsingHashtag));
                let data = res.data;
                if (!data) {
                    new ZionError('No tracks matching the title', 'createHastTagPlaylist');
                }
                if (data) {
                    let streamObject = await this.fetchAudius('streamTrack', await data[0].id);
                    tracks.push(streamObject);
                    console.log('counter', tracks.length);
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
}
