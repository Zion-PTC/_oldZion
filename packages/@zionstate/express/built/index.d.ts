/// <reference types="body-parser" />
/// <reference types="connect" />
/// <reference types="qs" />
/// <reference types="serve-static" />
import expr, { Application as exprApplication, CookieOptions as exprCookieOptions, Errback as exprErrback, ErrorRequestHandler as exprErrorRequestHandler, Express as exprExpress, Handler as exprHandler, IRoute as exprIRoute, IRouter as exprIRouter, IRouterHandler as exprIRouterHandler, IRouterMatcher as exprIRouterMatcher, MediaType as exprMediaType, NextFunction as exprNextFunction, Request as exprRequest, RequestHandler as exprRequestHandler, RequestParamHandler as exprRequestParamHandler, Response as exprResponse, Router as exprRouter, RouterOptions as exprRouterOptions, Send as exprSend } from 'express';
export declare type Application = exprApplication;
export declare type CookieOptions = exprCookieOptions;
export declare type Errback = exprErrback;
export declare type ErrorRequestHandler = exprErrorRequestHandler;
export declare type Express = exprExpress;
export declare type Handler = exprHandler;
export declare type IRoute = exprIRoute;
export declare type IRouter = exprIRouter;
export declare type IRouterHandler<T> = exprIRouterHandler<T>;
export declare type IRouterMatcher<T> = exprIRouterMatcher<T>;
export declare type MediaType = exprMediaType;
export declare type NextFunction = exprNextFunction;
export declare type Request = exprRequest;
export declare type RequestHandler = exprRequestHandler;
export declare type RequestParamHandler = exprRequestParamHandler;
export declare type Response = exprResponse;
export declare type Router = exprRouter;
export declare type RouterOptions = exprRouterOptions;
export declare type Send = exprSend;
declare let exportObj: {
    application: expr.Application;
    json: (options?: import("body-parser").OptionsJson) => import("connect").NextHandleFunction;
    query: typeof expr.query;
    raw: (options?: import("body-parser").Options) => import("connect").NextHandleFunction;
    request: expr.Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    response: expr.Response<any, Record<string, any>>;
    static: import("serve-static").RequestHandlerConstructor<expr.Response<any, Record<string, any>>>;
    text: (options?: import("body-parser").OptionsText) => import("connect").NextHandleFunction;
    urlencoded: (options?: import("body-parser").OptionsUrlencoded) => import("connect").NextHandleFunction;
};
export default exportObj;
