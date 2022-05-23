"use strict";
// String Unions in Types
const passedObject = {
    firstName: 'Saoirse',
    lastName: 'Ronan',
    age: 25,
};
const person = makeWatchedObject({
    ...passedObject,
});
function makeWatchedObject(obj) {
    //@ts-expect-error
    obj.on = function () { };
    //@ts-expect-error
    return obj;
}
person.on('ageChanged', newValue => console.log(`firstName was changed to ${newValue}`));
