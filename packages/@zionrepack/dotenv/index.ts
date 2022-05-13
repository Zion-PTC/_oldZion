import * as dotenv from 'dotenv';
import {
  DotenvConfigOptions,
  DotenvConfigOutput,
  DotenvParseOutput,
} from 'dotenv';

export interface IDotenvConfigOptions extends DotenvConfigOptions {}
export interface IDotenvConfigOutput extends DotenvConfigOutput {}
export interface IDotenvParseOutput extends DotenvParseOutput {}

export let config = dotenv.config;
export let parse = dotenv.parse;
