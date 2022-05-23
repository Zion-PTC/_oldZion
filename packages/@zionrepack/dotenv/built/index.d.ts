import * as dotenv from '@zionrepack/dotenv';
import {
  DotenvConfigOptions,
  DotenvConfigOutput,
  DotenvParseOutput,
} from '@zionrepack/dotenv';
export interface IDotenvConfigOptions extends DotenvConfigOptions {}
export interface IDotenvConfigOutput extends DotenvConfigOutput {}
export interface IDotenvParseOutput extends DotenvParseOutput {}
export declare let config: typeof dotenv.config;
export declare let parse: typeof dotenv.parse;
