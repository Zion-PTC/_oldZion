/**
 * 
 * RegExp() constructor
 * The RegExp constructor creates a regular expression object for matching text with a pattern.

For an introduction to regular expressions, read the Regular Expressions chapter in the JavaScript Guide.
 * SYNTAX
 * Literal, constructor, and factory notations are possible:
 * /pattern/flags
 * new RegExp(pattern[, flags])
 * RegExp(pattern[, flags])
 * @param {*} pattern Il testo per la regular expression. A partire da ES5 si può usare un altro oggetto RegEx o una literal expression. I pattern possono includere cattari speciali per farla combaciare con un numero maggiore di valore di quanti ne potrebbe fornire una string literal.
 * @param {*} flags Se specicifcato, contiene le flags da aggiungere alla RegEx. Altrimenti, se un oggetto è fornito come pattern, allora le string flag rimpiazzerà le flag fornite con l'oggetto. Le flag possono contenere una qualsiasi di questi caratteri:
 * d(indici) genera gli indici per le substring abbinate.
 * g(global match) trova tutti gli abbinamenti al posto che fermarsi al primo che trova.
 * i(ignore case) se anche la u flag è abilitata, usa Unicode case.
 * m(multiline) tratta i caratteri iniziali e finali (^ e $) come se funzionassero su linee multiple. In altre parole abbina l'inizio o la fine di ogni linea (delimitate da \n o \r), non esclusivamente al vero e proprio inizio e fine di tutta la string input.
 * s('dotall') permette a . di abbinare su nuove linee.
 * u(unicode) tratta il pattern come una sequenza di punti di codice Unicode.
 * y(sticky) abbinano solo fra gli indici indicati dalla proprietà lastIndex di questa regular expression nella target string. Non cercherà abbinamenti con nessuno degli indici successivi.
 * ECCEZIONI
 * se il pattern non può essere parsato come un'espressione regolare viene lanciato un syntax error.
 * @returns 
 */
function constructor(pattern, flags) {
  return new RegExp(pattern, flags);
}
/**
 *
 */
function tryIt() {
  const regex1 = /\w+/;
  const regex2 = new RegExp('\\w+');

  console.log(regex1);
  // expected output: /\w+/

  console.log(regex2);
  // expected output: /\w+/

  console.log(regex1 === regex2);
  // expected output: false
}
