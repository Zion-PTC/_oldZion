class Utils {
    cii() {
        console.log('ciao');
    }
    staticImplements() {
        return (constructor) => {
            constructor;
        };
    }
}
export const utils = new Utils();
