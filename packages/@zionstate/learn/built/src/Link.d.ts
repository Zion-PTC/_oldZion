export interface IStaticLink {
    id: string;
}
export declare abstract class Link implements IStaticLink {
    id: string;
    constructor(id: string);
}
