import * as dotenv from 'dotenv';
import { DotenvConfigOptions, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
export interface IDotenvConfigOptions extends DotenvConfigOptions {
}
export interface IDotenvConfigOutput extends DotenvConfigOutput {
}
export interface IDotenvParseOutput extends DotenvParseOutput {
}
export declare let config: typeof dotenv.config;
export declare let parse: typeof dotenv.parse;
