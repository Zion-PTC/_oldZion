import expr from 'express';
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
