class LinkAri {
    title;
    urlObj;
    url;
    constructor(title, urlObj, url = '') {
        this.title = title;
        this.urlObj = urlObj;
        this.url = url;
        this.url = urlObj.origin + urlObj.pathname;
    }
}
export class LinksAri {
    static LinkAri = LinkAri;
    ul1;
    ul2;
    //@ts-expect-error
    constructor(ul1, ul2) {
        this.ul1 = [...ul1];
        this.ul2 = [...ul2];
    }
    log() {
        console.log('ciao');
    }
}
///////////////
/// import {LinksAri} from './pat/to/LinkAri.js'
let url1 = new URL('https://github.com/Zion-PTC');
let url2 = new URL('https://instagram.com/ziondapp?utm_medium=copy_link');
let url3 = new URL('https://twitter.com/ZionDapp');
let LinkAri_ = LinksAri.LinkAri;
let linkari1 = new LinkAri_('Github', url1);
let linkari2 = new LinkAri_('Instagram', url2);
let linkari3 = new LinkAri_('Twitter', url3);
let linksAri = new LinksAri([linkari1, linkari2], [linkari3]);
linksAri.ul1;
let linksJSON = JSON.stringify(linksAri);
console.log(linksJSON);
let parseJson = JSON.parse(linksJSON);
console.log(parseJson);
/**
 *
 * Pagine statiche
 *  documento, animato
 *  legge dati
 *    internet
 *    database
 *
 * Pagine dinamice
 *  documenti, animati, interattivi
 *  legge dati (GET)http
 *  scrive dati (POST)http
 *    database
 *    blockchain
 *    user device
 *    server
 *
 *
 *
 *
 *
 */
