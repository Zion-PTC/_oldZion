export class Combinator {
  /**
   *
   * @param {*[]} array Array da ricomporre
   * @param {number} old Indice di orgine dell'elemento da spostare
   * @param {number} new_pos Indice della posizione target dell'elemento
   * @returns Un array ricomposto nel quale l'elemento situato precedentement all'indice
   * di origine è situato, nel risultato di ritorno, all'indice target.
   */
  static changePosition(array: unknown[], old: number, new_pos: number) {
    return array.splice(new_pos, 0, array.splice(old, 1)[0]);
  }
  /**
   *
   * @param {*[]} array Array sorgente di lunghezza n.
   * @returns Ritorna un array ricomposto, dove il primo elemeno del
   * array è stato eliminato. L'array risultato ha un lunghezza n-1.
   */
  static popFirst(array: unknown[]) {
    Combinator.changePosition(array, 0, array.length - 1);
    array.pop();
    return;
  }
  /**
   *
   * @param {*[]} arrA Array sorgente A contenente n elementi
   * @param {*[]} arrB Array sorgente B contenente m elementi
   * @returns Ritorna un array che contiene tutte le possibili combinazioni
   * di ogniuno degli n elementi di A con gli m elementi di B.
   */
  static combineArrays(arrA: unknown[], arrB: unknown[]) {
    let newArr = [];
    for (let a of arrA) {
      for (let b of arrB) {
        let arr = [];
        Array.isArray(a)
          ? a.forEach(el => {
              arr.push(el);
            })
          : arr.push(a);
        arr.push(b);
        newArr.push(arr);
      }
    }
    return newArr;
  }
  /**
   *
   * @param {*[][]} array Array contenente n arrays contenenti m elementi.
   * @returns {*[][]} Ritorna un array contenente k arrays. K è uguale al numero totale di
   * combinazioni di ogni elemento m con ognuno degli elementi m di degli altri m array.
   * In sostanza tutte le combinazioni possibili fra gli array contenuti nell'array.
   */
  static generateCombinations<T>(array: T): T {
    let combos: T;
    // TODO cercare di capire il conflitto (combine)
    //@ts-expect-error
    combos = array.reduce((p, c) => Combinator.combineArrays(p, c));
    return combos;
  }
}
