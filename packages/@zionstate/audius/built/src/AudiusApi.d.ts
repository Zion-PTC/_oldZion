/// <reference types="node" />
import { ApiResponses } from './AudiusResponse.js';
import { FetchAudiusTypes, IAudiusRequest } from './AudiusRequest.js';
import { IAudiusURL, AudiusURLsTypes } from './AudiusURL.js';
declare type AudiusResponses = ApiResponses.AudiusResponses;
declare type url = {
    url: string;
};
declare type ReqObj = {
    url: string;
    options: {
        method: string;
        headers: {
            Accept: string;
        };
    };
};
declare type response = Promise<{
    url: string;
    stream: AudiusResponses;
} | {
    data: object;
}>;
declare type trackResponse = {
    data: {
        id: string;
        title: string;
        mood: string;
        user: {
            handle: string;
            name: string;
        };
        duration: number;
        artwork: {
            [key: string]: string;
        };
    };
    stream: Buffer;
};
export interface IAudiusApi {
    name: string;
    app_name: string;
    audiusApiURLs: IAudiusURL[];
    getFastestHost(): Promise<URL>;
    setUrlToFetch(type: string, query: string): Promise<ReqObj | url | undefined>;
    fetchAudius(type: string, query: string): response;
    fetchAudius2(type: AudiusURLsTypes, query: string): Promise<AudiusResponses>;
    createHashtagPlaylist(query: string): unknown;
    composePlaylist(tracksUsingHashtag: trackResponse[]): unknown;
    setAppName(app_name: string): IAudiusApi;
}
export declare class AudiusApi implements IAudiusApi {
    #private;
    name: string;
    app_name: string;
    audiusApiURLs: IAudiusURL[];
    constructor(name: string, app_name: string);
    getFastestHost(): Promise<URL>;
    setUrlToFetch(type: FetchAudiusTypes, query: string): Promise<{
        url: string;
        options: {
            method: string;
            headers: {
                Accept: string;
            };
        };
    } | {
        url: string;
    } | undefined>;
    fetchAudius(type: FetchAudiusTypes, query: string): Promise<{
        url: string;
        stream: AudiusResponses;
    } | {
        data: object;
    }>;
    createHashtagPlaylist(query: string): Promise<object | undefined>;
    composePlaylist(tracksUsingHashtag: {
        data: {
            id: string;
            title: string;
            mood: string;
            user: {
                handle: string;
                name: string;
            };
            duration: number;
            artwork: {
                [key: string]: string;
            };
        };
        stream: Buffer;
    }[]): object;
    fetchAudiusRequest(request: IAudiusRequest): Promise<AudiusResponses>;
    setAppName(): IAudiusApi;
    fetchAudius2(type: AudiusURLsTypes, query: string): Promise<ApiResponses.AudiusResponses>;
}
export {};
