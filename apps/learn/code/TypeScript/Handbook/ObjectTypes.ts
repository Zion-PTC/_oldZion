class PropertyModifiers {
  static indexSignatures1() {
    const p1 = `A volte non si conoscono tutti i nomi delle prorpietà di un tipo in anticipo, ma si conosce la forma dei valori.`;
    console.log(p1);

    interface StringArray {
      [index: number]: string;
    }
    // const myArray:StringArray = getStringArray();
  }
}
