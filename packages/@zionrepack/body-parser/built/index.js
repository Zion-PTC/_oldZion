import bp from 'body-parser';
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
