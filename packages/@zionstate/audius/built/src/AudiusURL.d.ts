import { IZionURL, Input, ZionURL } from '@zionstate_js/url';
export interface IAudiusURL extends IZionURL {
    url: Input;
    pathnamePattern: string;
    __type?: AudiusURL_T;
    base?: Input | undefined;
}
export declare enum AudiusURL_Enum {
    query = "query",
    pathname = "pathname"
}
export declare type AudiusURL_T = keyof typeof AudiusURL_Enum;
export declare class AudiusURL extends ZionURL implements IAudiusURL {
    #private;
    pathnamePattern: string;
    readonly __type: AudiusURL_T;
    base?: import("@zionstate_js/url/built/src/ZionUrl").Input | undefined;
    constructor(url: Input, pathnamePattern: string, __type?: AudiusURL_T, base?: import("@zionstate_js/url/built/src/ZionUrl").Input | undefined);
    setPaths(string: string): IAudiusURL;
}
export declare class AudiusURL_v1 extends AudiusURL implements IAudiusURL {
    #private;
    pathnamePattern: string;
    readonly __type: AudiusURL_T;
    base?: import("@zionstate_js/url/built/src/ZionUrl").Input | undefined;
    constructor(url: Input, pathnamePattern: string, __type?: AudiusURL_T, base?: import("@zionstate_js/url/built/src/ZionUrl").Input | undefined);
    setPaths(string: string): IAudiusURL;
}
export declare class AudiusURL_Search extends AudiusURL {
    pathnamePattern: string;
    readonly __type: AudiusURL_Enum.query;
    constructor(url: Input, pathnamePattern: string, __type?: AudiusURL_Enum.query, base?: Input | undefined);
}
export declare enum AudiusURLsEnum {
    searchUsers = "searchUsers",
    getUser = "getUser",
    getUserFavorites = "getUserFavorites",
    getUsersReposts = "getUsersReposts",
    getUsersMostUsedTrackTags = "getUsersMostUsedTrackTags",
    getUsersTracks = "getUsersTracks",
    searchPlaylist = "searchPlaylist",
    getPlaylist = "getPlaylist",
    getPlaylistTracks = "getPlaylistTracks",
    searchTracks = "searchTracks",
    trendingTracks = "trendingTracks",
    getTrack = "getTrack",
    streamTrack = "streamTrack",
    searchHashtags = "searchHashtags"
}
declare const AudiusURLs: {
    readonly searchUsers: AudiusURL_Search;
    readonly getUser: AudiusURL;
    readonly getUserFavorites: AudiusURL;
    readonly getUsersReposts: AudiusURL;
    readonly getUsersMostUsedTrackTags: AudiusURL;
    readonly getUsersTracks: AudiusURL;
    readonly searchPlaylist: AudiusURL_Search;
    readonly getPlaylist: AudiusURL;
    readonly getPlaylistTracks: AudiusURL;
    readonly searchTracks: AudiusURL_Search;
    readonly trendingTracks: AudiusURL_Search;
    readonly getTrack: AudiusURL;
    readonly streamTrack: AudiusURL;
    readonly searchHashtags: AudiusURL_Search;
};
export declare type AudiusURLsTypes = keyof typeof AudiusURLsEnum;
export default AudiusURLs;
