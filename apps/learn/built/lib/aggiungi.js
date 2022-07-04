export function aggiungiPath(fileInFolder) {
    this.push(fileInFolder.path);
}
export function aggiungi(obj1, key, obj, parameter, map, path) {
    if (!map && !path) {
        obj1[key] = obj[parameter];
    }
    else if (!map) {
        if (obj[parameter])
            obj1[key] = obj[path[0]][path[1]];
    }
    return obj1;
}
