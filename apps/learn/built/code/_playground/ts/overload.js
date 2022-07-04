export function plus(num1, num2, num3) {
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
plus(1, 2, 3);
export function toot(not) {
    if (typeof not === "number")
        return not.toString();
    else
        console.log(not);
}
toot(1);
toot("ciao");
function moo(prop, a) {
    if (a && !prop)
        return a;
    if (prop && !a)
        return prop;
    return;
}
