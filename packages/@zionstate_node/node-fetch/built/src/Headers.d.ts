import { Headers } from 'node-fetch';
export interface IZionHeader extends Headers {
}
export declare type ZionHeaderInit = Headers | string[][] | {
    [key: string]: string;
};
export declare class ZionHeaders extends Headers implements IZionHeader {
    constructor(init?: ZionHeaderInit | undefined);
}
