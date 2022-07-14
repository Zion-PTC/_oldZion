import { ZionResponse as ZR, IZionResponse as IZR } from "./src/Response.js";
import {
  ZionRequest as ZReq,
  IZionRequest as IZReq,
  ZionRequestInfo as ZReqInfo,
  ZionRequestInit as ZReqInit,
} from "./src/Request.js";

export let ZionResponse = ZR;
export type IZionResponse = IZR;
//
export let ZionRequest = ZReq;
export type IZionRequest = IZReq;
export type ZionRequestInfo = ZReqInfo;
export type ZionRequestInit = ZReqInit;
export default ZionResponse;
