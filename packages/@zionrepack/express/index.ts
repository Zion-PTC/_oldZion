import expr, {
  Application as exprApplication,
  CookieOptions as exprCookieOptions,
  Errback as exprErrback,
  ErrorRequestHandler as exprErrorRequestHandler,
  Express as exprExpress,
  Handler as exprHandler,
  IRoute as exprIRoute,
  IRouter as exprIRouter,
  IRouterHandler as exprIRouterHandler,
  IRouterMatcher as exprIRouterMatcher,
  MediaType as exprMediaType,
  NextFunction as exprNextFunction,
  Request as exprRequest,
  RequestHandler as exprRequestHandler,
  RequestParamHandler as exprRequestParamHandler,
  Response as exprResponse,
  Router as exprRouter,
  RouterOptions as exprRouterOptions,
  Send as exprSend,
} from 'express';

export type Application = exprApplication;
export type CookieOptions = exprCookieOptions;
export type Errback = exprErrback;
export type ErrorRequestHandler = exprErrorRequestHandler;
export type Express = exprExpress;
export type Handler = exprHandler;
export type IRoute = exprIRoute;
export type IRouter = exprIRouter;
export type IRouterHandler<T> = exprIRouterHandler<T>;
export type IRouterMatcher<T> = exprIRouterMatcher<T>;
export type MediaType = exprMediaType;
export type NextFunction = exprNextFunction;
export type Request = exprRequest;
export type RequestHandler = exprRequestHandler;
export type RequestParamHandler = exprRequestParamHandler;
export type Response = exprResponse;
export type Router = exprRouter;
export type RouterOptions = exprRouterOptions;
export type Send = exprSend;

let application = expr.application;
let json = expr.json;
let query = expr.query;
let raw = expr.raw;
let request = expr.request;
let response = expr.response;
let eStatic = expr.static;
let text = expr.text;
let urlencoded = expr.urlencoded;

let exportObj = {
  application,
  json,
  query,
  raw,
  request,
  response,
  static: eStatic,
  text,
  urlencoded,
};

export default exportObj;
