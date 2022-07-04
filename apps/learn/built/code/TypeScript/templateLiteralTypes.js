const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 25,
};
const person = makeWatchedObject({
    ...passedObject,
});
function makeWatchedObject(obj) {
    obj.on = function () { };
    return obj;
}
person.on("ageChanged", (newValue) => console.log(`firstName was changed to ${newValue}`));
export {};
