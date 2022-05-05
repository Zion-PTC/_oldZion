// Classe
console.log(Number.prototype); // {}

let twoHundredThousands = 200000.1;

// Si puo creare un nuovo numero creando una nuova istanza della classe Number

let newNumberInstance = new Number(2.003);

/**
 *
 * @param {Number} fractionDigits sono il numero di virgole del risultato
 * @returns {String} Ritorna il valore numerico convertito in stringa di tipo
 * esponenziale con il formato <numero>.<virgola>e+<numero di zeri dopo la virgola
 */
function toExponential(fractionDigits) {
  return twoHundredThousands.toExponential(fractionDigits);
}
/**
 * EXAMPLE
 * expected 2.000001e+5
 */
console.log(toExponential(6)); // 2.000001e+5

/**
 *
 * @param {Number} fractionDigits Numero di dopo il punto decimale. Deve essere un valore incluso fra 0 - 20, incluso.
 * @returns Ritorna una stringa che rappresenta un numero con la notazione a punto-fisso.
 */
function toFixed(fractionDigits) {
  return newNumberInstance.toFixed(fractionDigits);
}
/**
 * ESEMPIO
 * expected 2.003000
 */
console.log(toFixed(6)); // 2.003000
