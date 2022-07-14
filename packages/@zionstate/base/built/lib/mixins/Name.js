export const Name = (Superclass) => {
    class NewClass extends Superclass {
        name;
        constructor(...arg) {
            super(...arg);
            const name = arg[0];
            this.name = name;
        }
    }
    return NewClass;
};
