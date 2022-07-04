interface ILinkAri {
    title: string;
    url: string;
}
interface ILinksAri {
    ul1: ILinkAri[];
    ul2: ILinkAri[];
}
declare class LinkAri implements ILinkAri {
    title: string;
    urlObj: URL;
    url: string;
    constructor(title: string, urlObj: URL, url?: string);
}
export declare class LinksAri implements ILinksAri {
    static LinkAri: typeof LinkAri;
    ul1: ILinkAri[];
    ul2: ILinkAri[];
    constructor(ul1: any, ul2: any);
    log(): void;
}
export {};
