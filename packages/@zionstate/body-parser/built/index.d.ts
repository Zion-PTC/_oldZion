/// <reference types="connect" />
import bp, { BodyParser as bpBodyParser, Options as bpOptions, OptionsJson as bpOptionsJson, OptionsText as bpOptionsText, OptionsUrlencoded as bpOptionsUrlencoded } from 'body-parser';
export declare type BodyParser = bpBodyParser;
export declare type Options = bpOptions;
export declare type OptionsJson = bpOptionsJson;
export declare type OptionsText = bpOptionsText;
export declare type OptionsUrlencoded = bpOptionsUrlencoded;
declare let exportObj: {
    json: (options?: bp.OptionsJson) => import("connect").NextHandleFunction;
    raw: (options?: bp.Options) => import("connect").NextHandleFunction;
    text: (options?: bp.OptionsText) => import("connect").NextHandleFunction;
    urlencoded: (options?: bp.OptionsUrlencoded) => import("connect").NextHandleFunction;
};
export default exportObj;
