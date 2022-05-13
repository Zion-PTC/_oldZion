import { ZionRequest, ZionRequestInfo } from '@zionstate_node/node-fetch';
declare class AudiusRequest<T> extends ZionRequest {
    input: ZionRequestInfo;
    __type?: T | undefined;
    title?: string | undefined;
    init?: import("@zionstate_node/node-fetch/built/src/Request").ZionRequestInit | undefined;
    pathNameReference?: string | undefined;
    constructor(input: ZionRequestInfo, __type?: T | undefined, title?: string | undefined, init?: import("@zionstate_node/node-fetch/built/src/Request").ZionRequestInit | undefined, pathNameReference?: string | undefined);
}
declare let searchUser: AudiusRequest<unknown>;
declare let getUser: AudiusRequest<unknown>;
declare let getUserFavorites: AudiusRequest<unknown>;
declare let getUsersReposts: AudiusRequest<unknown>;
declare let getUsersMostUsedTracjTags: AudiusRequest<unknown>;
declare let getUsersTracks: AudiusRequest<unknown>;
declare let searchPlaylist: AudiusRequest<unknown>;
declare let getPlaylist: AudiusRequest<unknown>;
declare let getPlaylistTracks: AudiusRequest<unknown>;
declare let searchTracks: AudiusRequest<unknown>;
declare let trendingTracks: AudiusRequest<unknown>;
declare let getTrack: AudiusRequest<unknown>;
declare let streamTrack: AudiusRequest<unknown>;
export { searchUser, getUser, getUserFavorites, getUsersReposts, getUsersMostUsedTracjTags, getUsersTracks, searchPlaylist, getPlaylist, getPlaylistTracks, searchTracks, trendingTracks, getTrack, streamTrack, };
