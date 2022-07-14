export function findItem(key, constructor, parameter, parsed, instance, callback, paramToParse) {
    // TODO ts error
    //@ts-expect-error
    if (parsed[parameter])
        // TODO ts error
        //@ts-expect-error
        parsed[parameter].map((parsedParam) => {
            // TODO ts error
            //@ts-expect-error
            let res = constructor[parameter].find(
            // TODO ts error
            //@ts-expect-error
            (item) => item[key] === parsedParam);
            // TODO ts error
            //@ts-expect-error
            if (res)
                instance[callback](res);
        });
    if (paramToParse !== undefined) {
        // TODO ts error
        //@ts-expect-error
        let res = constructor[parameter].find(
        // TODO ts error
        //@ts-expect-error
        (item) => item[key] === parsed[paramToParse]);
        // TODO ts error
        //@ts-expect-error
        if (res)
            instance[callback](res);
    }
}
// function foo() {
//   let res: IDesignPattern | undefined = DesignPattern.designPatterns.find(
//     (desPatt) => desPatt.nome === parsed.designPattern
//   );
//   if (res) nwTutorial.aggiungiOggetto(res);
// }
