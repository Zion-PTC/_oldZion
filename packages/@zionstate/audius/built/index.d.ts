import { AudiusApi as AAPI, IAudiusApi as IAAPI } from './src/AudiusApi.js';
import { AudiusURLsTypes as aURLs_T } from './src/AudiusURL.js';
import { AudiusRequest as aREQ } from './src/AudiusRequest.js';
export declare type AudiusURLsTypes = aURLs_T;
export declare type IAudiusApi = IAAPI;
export declare let AudiusApi: typeof AAPI;
export declare let AudiusURL: {
    readonly searchUsers: import("./src/AudiusURL.js").AudiusURL_Search;
    readonly getUser: import("./src/AudiusURL.js").AudiusURL;
    readonly getUserFavorites: import("./src/AudiusURL.js").AudiusURL;
    readonly getUsersReposts: import("./src/AudiusURL.js").AudiusURL;
    readonly getUsersMostUsedTrackTags: import("./src/AudiusURL.js").AudiusURL;
    readonly getUsersTracks: import("./src/AudiusURL.js").AudiusURL;
    readonly searchPlaylist: import("./src/AudiusURL.js").AudiusURL_Search;
    readonly getPlaylist: import("./src/AudiusURL.js").AudiusURL;
    readonly getPlaylistTracks: import("./src/AudiusURL.js").AudiusURL;
    readonly searchTracks: import("./src/AudiusURL.js").AudiusURL_Search;
    readonly trendingTracks: import("./src/AudiusURL.js").AudiusURL_Search;
    readonly getTrack: import("./src/AudiusURL.js").AudiusURL;
    readonly streamTrack: import("./src/AudiusURL.js").AudiusURL;
    readonly searchHashtags: import("./src/AudiusURL.js").AudiusURL_Search;
};
export declare let AudiusRequest: typeof aREQ;
export declare const number = 0;
export declare let AudiusRequests: {
    getUser: aREQ<import("./src/AudiusURL.js").AudiusURL_Enum.pathname>;
};
