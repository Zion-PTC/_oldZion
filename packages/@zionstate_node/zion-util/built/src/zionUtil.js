import util from 'util';
import { Condizioni } from './Condizioni.js';
let o = {
    debug: util.debug,
    debuglog: util.debug,
    deprecate: util.deprecate,
    callbackify: util.callbackify,
    format: util.format,
    formatWithOptions: util.formatWithOptions,
    getSystemErrorMap: util.getSystemErrorMap,
    getSystemErrorName: util.getSystemErrorName,
    inspect: util.inspect,
    isDeepStrictEqual: util.isDeepStrictEqual,
    isArray: util.isArray,
    isBoolean: util.isBoolean,
    isBuffer: util.isBuffer,
    inherits: util.inherits,
    isDate: util.isDate,
    isError: util.isError,
    isFunction: util.isFunction,
    isNull: util.isNull,
    isNullOrUndefined: util.isNullOrUndefined,
    isNumber: util.isNumber,
    isObject: util.isObject,
    isPrimitive: util.isPrimitive,
    isRegExp: util.isRegExp,
    isString: util.isString,
    isSymbol: util.isSymbol,
    isUndefined: util.isUndefined,
    log: util.log,
    promisify: util.promisify,
    stripVTControlCharacters: util.stripVTControlCharacters,
    toUSVString: util.toUSVString,
    types: util.types,
    TextDecoder: util.TextDecoder,
    TextEncoder: util.TextEncoder,
};
class Utils {
    condizioni;
    constructor() {
        this.condizioni = new Condizioni();
    }
    ////// utils
    inspect = util.inspect;
    debuglog = util.debuglog;
    ////// zion
    checkArraysContent = checkArraysContent;
    checkArrayElementsConstructor = checkArrayElementsConstructor;
    checkObjectConstructor = checkObjectConstructor;
    hasArrayObjectElements = hasArrayObjectElements;
    isArrayEmpty = isArrayEmpty;
    changePosition = changePosition;
    extractSameElementsFromArray = extractSameElementsFromArray;
    popFirst = popFirst;
    removeSpaceFromString = removeSpaceFromString;
    sliceArray = sliceArray;
    // sorting
    sortDescending = sortDescending;
    // callback
    chiamaNVolteCallback = chiamaNVolteCallback;
    // Maths
    quantiDecimaliDopoLaVirgola = quantiDecimaliDopoLaVirgola;
    massimoComuneDivisore = massimoComuneDivisore;
    modulo = modulo;
    convertDecimalToFracionString = convertDecimalToFracionString;
}
export let zionUtil = new Utils();
/**
 * Il contenuto degli array deve essere identico anche nell'ordine
 * @param {*} array
 * @param {*} nextArray
 * @returns
 */
function checkArraysContent(array, nextArray) {
    if (array.length !== nextArray.length) {
        return false;
    }
    let results = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const elementOfNextArray = nextArray[index];
        if (element === elementOfNextArray) {
            results.push(true);
        }
        else {
            results.push(false);
        }
    }
    if (!results.includes(false)) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * Questa funzione controlla che tutti gli elementi di un
 * array siano della classe inviata come secondo
 * argomento.
 * @param {array} array array del quale bisogna
 * controllare gli elementi
 * @param {class} constructor la classe contro la quale
 * bisogna effettuare il check
 * @return True se tutti gli elementi matchano con il
 * costruttore fornito. False se un solo elemento non
 * matcha la classe fornita.
 */
function checkArrayElementsConstructor(array, constructor) {
    let risultatoControllo = [];
    const controllaIlConstructor = function (elemento) {
        //@ts-ignore
        let condizione = elemento.constructor === constructor;
        risultatoControllo.push(condizione);
        return risultatoControllo.some(el => el === false);
    };
    const controlloFinale = function (element) {
        return element === false;
    };
    array.forEach(controllaIlConstructor);
    return !risultatoControllo.some(controlloFinale);
}
/**
 *
 * @param object
 * @param constructor
 * @returns
 */
function checkObjectConstructor(object, constructor) {
    const oggettoUgualeConstructor = object.constructor === constructor;
    return oggettoUgualeConstructor;
}
// TODO descrizione metodo
/**
 *
 * @param array
 * @returns
 */
function hasArrayObjectElements(array) {
    // TODO capire uso di this in ext functions
    //@ts-expect-error
    if (this.isArrayEmpty(array)) {
        return 'Array is Empty';
    }
    let result = [];
    array.forEach(element => {
        if (typeof element === 'object')
            result.push(true);
        if (typeof element !== 'object')
            result.push(false);
    });
    if (!result.includes(true))
        return false;
    else
        return true;
}
/**
 *
 * @param array
 * @returns
 */
function isArrayEmpty(array) {
    if (array.length !== 0)
        return false;
    else
        return true;
}
/**
 *
 * @param {*[]} array Array da ricomporre
 * @param {number} old Indice di orgine dell'elemento da
 * spostare.
 * @param {number} new_pos Indice della posizione target
 * dell'elemento.
 * @returns Un array ricomposto nel quale l'elemento
 * situato precedentement all'indice di origine è situato,
 * nel risultato di ritorno, all'indice target.
 */
function changePosition(array, old, new_pos) {
    // i numeri devono essere inclusi nella lunghezza
    // massima
    if (new_pos > array.length - 1 ||
        old > array.length ||
        new_pos < 0 ||
        old < 0) {
        return 'not';
    }
    array.splice(new_pos, 0, array.splice(old, 1)[0]);
    return array;
}
/**
 *
 * @param array1
 * @param array2
 * @returns
 */
function extractSameElementsFromArray(array1, array2) {
    let sameValues = [];
    if (
    // controllo se gli array sono vuoti
    !zionUtil.isArrayEmpty(array1) &&
        !zionUtil.isArrayEmpty(array2)) {
        // controllo se uno dei due array contiene oggetti
        if (
        //@ts-expect-error
        zionUtil.hasArrayObjectElements(array1) ||
            //@ts-expect-error
            zionUtil.hasArrayObjectElements(array2)) {
            throw new Error(`Uno dei due array contiente oggetti, questa funziona richiede che l'array contenga valori (string, number, boolan)`);
        }
        for (let element2 of array2) {
            let match = array1.find(element1 => element1 === element2);
            match ? sameValues.push(match) : 'no match found';
        }
        return sameValues;
    }
    throw new Error('Uno dei due array è vuoto');
}
/**
 *
 * @param {*[]} array Array sorgente di lunghezza n.
 * @returns Ritorna un array ricomposto, dove il primo
 * elemeno del array è stato eliminato. L'array risultato
 * ha un lunghezza n-1.
 */
function popFirst(array) {
    array.shift();
    return array;
}
// TODO descrizione metodo
/**
 * @param type
 * @param string
 * @returns
 */
function removeSpaceFromString(type, string) {
    // TODO Migliorare inizializzazione
    let newString = '';
    switch (type) {
        case 1:
            method1(string);
            break;
        case 2:
            method2(string);
            break;
        case 3:
            method3(string);
            break;
        default:
            break;
    }
    function method1(string) {
        newString = string.replace(/ /g, '');
    }
    function method2(string) {
        newString = string.replace(/\s+/g, '');
    }
    function method3(string) {
        newString = string.split(' ').join('');
    }
    return newString;
}
/**
 *
 * @param size : ;
 * @param array
 * @returns
 */
function sliceArray(size, array) {
    if (typeof size === 'number' && Array.isArray(array)) {
        var s = size;
        var arrayOfArrays = [];
        for (var i = 0; i < array.length; i += s) {
            arrayOfArrays.push(array.slice(i, i + s));
        }
        return arrayOfArrays;
    }
    else {
        let res;
        typeof size !== 'number'
            ? (res = 'size is not a number')
            : (res = 'The second argument shall be an array');
        return res;
    }
}
function sortDescending(a, b, index) {
    if (typeof a[index] !== 'number' && typeof b[index] !== 'number')
        return;
    return b[index] - a[index];
}
/**
 *
 * @param volte
 * @param callback
 * @returns
 */
function chiamaNVolteCallback(volte, callback) {
    let array = [];
    while (volte) {
        array.push(callback());
        volte--;
    }
    return array;
}
/**
 * @param number
 * @returns
 */
function quantiDecimaliDopoLaVirgola(number) {
    const len = number.toString().length - 2;
    return len;
}
/**
 *
 * @param a
 * @param b
 * @returns
 */
function massimoComuneDivisore(a, b) {
    if (b < 0.0000001)
        return a;
    function mcdmcm(A, B) {
        var a, b, r, MCD, mcm;
        a = parseInt(A.toString());
        b = parseInt(B.toString());
        r = a % b;
        while (r != 0) {
            a = b;
            b = r;
            r = a % b;
        }
        MCD = b;
        mcm = (parseInt(A.toString()) * parseInt(B.toString())) / MCD;
        return { MCD: MCD, mcm: mcm };
    }
    return mcdmcm(a, b).MCD;
}
/**
 *
 * @param a
 * @param b
 * @returns
 */
function modulo(a, b) {
    return a % b;
}
/**
 * Crea una string con il formato di frazione a partire da
 * un numero con la virgola.
 * @param decimale numero con virgola per il quale deve
 * essere creata la string.
 * @returns una string con formato frazione (0,2 => '1/5')
 */
function convertDecimalToFracionString(decimale) {
    let frazioneInString;
    if (decimale === 1)
        return '1';
    if (decimale >= 1)
        return 'il valore passato deve essere un numero decimale!';
    // TODO capire uso di this in ext functions
    //@ts-expect-error
    const numeriDopoLaVirgola = this.quantiDecimaliDopoLaVirgola(decimale);
    let denominatore = Math.pow(10, numeriDopoLaVirgola);
    let numeratore = decimale * denominatore;
    // TODO capire uso di this in ext functions
    //@ts-expect-error
    const divisore = this.massimoComuneDivisore(numeratore, denominatore);
    numeratore /= divisore;
    denominatore /= divisore;
    frazioneInString =
        `${Math.floor(numeratore)}` + `/${Math.floor(denominatore)}`;
    return frazioneInString;
}
