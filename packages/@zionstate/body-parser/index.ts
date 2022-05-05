import bp, {
  BodyParser as bpBodyParser,
  Options as bpOptions,
  OptionsJson as bpOptionsJson,
  OptionsText as bpOptionsText,
  OptionsUrlencoded as bpOptionsUrlencoded,
} from 'body-parser';

export type BodyParser = bpBodyParser;
export type Options = bpOptions;
export type OptionsJson = bpOptionsJson;
export type OptionsText = bpOptionsText;
export type OptionsUrlencoded = bpOptionsUrlencoded;

let json = bp.json;
let raw = bp.raw;
let text = bp.text;
let urlencoded = bp.urlencoded;

let exportObj = {
  json,
  raw,
  text,
  urlencoded,
};

export default exportObj;
