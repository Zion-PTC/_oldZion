import { ZionError } from '@zionstate_js/error';
export declare class AudiusApi {
    name: string;
    constructor();
    getFastestHost(): Promise<any>;
    setUrlToFetch(type: any, query: any): Promise<any>;
    fetchAudius<T>(type: any, query: any): Promise<T extends 'streamTrack' ? {
        url: any;
        stream: any;
    } : {
        data: any;
    } | ZionError>;
    createHashtagPlaylist(query: any): Promise<any>;
    composePlaylist(tracksUsingHashtag: any): any[];
}
