export declare class Audius {
    constructor();
    getFastestHost(): Promise<any>;
    setUrlToFetch(type: any, query: any): Promise<any>;
    fetchAudius(type: any, query: any): Promise<unknown>;
    createHashtagPlaylist(query: any): Promise<any>;
    composePlaylist(tracksUsingHashtag: any): any[];
}
