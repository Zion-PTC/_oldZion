import { ZionRequest, IZionRequest } from '@zionstate_node/node-fetch';
import { IAudiusURL } from './AudiusURL.js';
import { AudiusURL_Enum } from './AudiusURL.js';
export interface IAudiusRequest extends IZionRequest {
    setPathname(string: string): IAudiusRequest;
}
export declare class AudiusRequest<I> extends ZionRequest implements IAudiusRequest {
    input: IAudiusURL;
    title?: string | undefined;
    init?: import("@zionstate_node/node-fetch/built/src/Request").ZionRequestInit | undefined;
    __type?: "searchUsers" | "getUser" | "getUserFavorites" | "getUsersReposts" | "getUsersMostUsedTrackTags" | "getUsersTracks" | "searchPlaylist" | "getPlaylist" | "getPlaylistTracks" | "searchTracks" | "trendingTracks" | "getTrack" | "streamTrack" | "searchHashtags" | undefined;
    constructor(input: IAudiusURL, title?: string | undefined, init?: import("@zionstate_node/node-fetch/built/src/Request").ZionRequestInit | undefined, __type?: "searchUsers" | "getUser" | "getUserFavorites" | "getUsersReposts" | "getUsersMostUsedTrackTags" | "getUsersTracks" | "searchPlaylist" | "getPlaylist" | "getPlaylistTracks" | "searchTracks" | "trendingTracks" | "getTrack" | "streamTrack" | "searchHashtags" | undefined);
    setPathname(string: string): IAudiusRequest;
}
declare let searchUsers: AudiusRequest<AudiusURL_Enum.query>;
declare let getUser: AudiusRequest<AudiusURL_Enum.pathname>;
declare let getUserFavorites: AudiusRequest<AudiusURL_Enum.pathname>;
declare let getUsersReposts: AudiusRequest<AudiusURL_Enum.pathname>;
declare let getUsersMostUsedTrackTags: AudiusRequest<AudiusURL_Enum.pathname>;
declare let getUsersTracks: AudiusRequest<AudiusURL_Enum.pathname>;
declare let searchPlaylist: AudiusRequest<AudiusURL_Enum.query>;
declare let getPlaylist: AudiusRequest<AudiusURL_Enum.pathname>;
declare let getPlaylistTracks: AudiusRequest<AudiusURL_Enum.pathname>;
declare let searchTracks: AudiusRequest<AudiusURL_Enum.query>;
declare let trendingTracks: AudiusRequest<AudiusURL_Enum.query>;
declare let getTrack: AudiusRequest<AudiusURL_Enum.pathname>;
declare let streamTrack: AudiusRequest<AudiusURL_Enum.pathname>;
export { searchUsers, getUser, getUserFavorites, getUsersReposts, getUsersMostUsedTrackTags, getUsersTracks, searchPlaylist, getPlaylist, getPlaylistTracks, searchTracks, trendingTracks, getTrack, streamTrack, };
