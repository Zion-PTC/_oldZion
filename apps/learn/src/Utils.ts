class Utils {
  cii() {
    console.log('ciao');
  }
  staticImplements<T>() {
    return <U extends T>(constructor: U) => {
      constructor;
    };
  }
}
export const utils = new Utils();
