export function findItem(key, constructor, parameter, parsed, instance, callback, paramToParse) {
    if (parsed[parameter])
        parsed[parameter].map((parsedParam) => {
            let res = constructor[parameter].find((item) => item[key] === parsedParam);
            if (res)
                instance[callback](res);
        });
    if (paramToParse !== undefined) {
        let res = constructor[parameter].find((item) => item[key] === parsed[paramToParse]);
        if (res)
            instance[callback](res);
    }
}
