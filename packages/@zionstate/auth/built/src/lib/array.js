export function ramArray(name, array) {
    return array.find((user) => (user.name = name)) ? true : false;
}
