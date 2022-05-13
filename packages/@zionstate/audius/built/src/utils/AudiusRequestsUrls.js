import ZionURL from '@zionstate_js/url';
var SearchParamsTypes;
(function (SearchParamsTypes) {
    SearchParamsTypes[SearchParamsTypes["app_name"] = 0] = "app_name";
    SearchParamsTypes[SearchParamsTypes["query"] = 1] = "query";
    SearchParamsTypes[SearchParamsTypes["only_downloadable"] = 2] = "only_downloadable";
    SearchParamsTypes[SearchParamsTypes["user_id"] = 3] = "user_id";
})(SearchParamsTypes || (SearchParamsTypes = {}));
class AudiusURL extends ZionURL {
    pathnameVariable;
    constructor(url, pathnameVariable) {
        super(url);
        this.pathnameVariable = pathnameVariable;
    }
    showD() {
        this.logger(this);
    }
}
