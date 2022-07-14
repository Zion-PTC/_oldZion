export const Surname = (Superclass) => {
    class NewClass extends Superclass {
        surname;
        constructor(...arg) {
            super(...arg);
            const surname = arg[1];
            this.surname = surname;
        }
    }
    return NewClass;
};
