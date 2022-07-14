const pathRegexp = /(?<=[/_])\d*/g;

let string = "/Users/WAW/Documents/Believe/1054079_84880_20150101_20150331.csv";

const res = string.match(pathRegexp);
console.log(res);
