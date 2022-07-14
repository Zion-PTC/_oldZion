export function staticImplements() {
    return (constructor) => {
        constructor;
    };
}
