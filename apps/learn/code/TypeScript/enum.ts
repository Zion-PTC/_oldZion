enum Colors1 {
  Blue,
  Green,
}
console.log(Colors1.Blue);

enum Colors2 {
  Blue = 'blue',
  Green = 'gree',
}
console.log(Colors2.Blue);

function showColor(color: Colors2) {
  console.log(color);
}

showColor(Colors2.Blue);
// showColor('blue'); // funziona ma Typescript si lamenta

enum Colors3 {
  Blue = 'blue',
  Green = 'green',
}

const ColorsObj = {
  Blue: 'blue',
  Green: 'gree',
};

type DesiredArgs = 'blue' | 'green';

function showColor2(color: DesiredArgs) {
  console.log(color);
}

showColor2('blue');
// showColor2(ColorsObj.Blue); ///  like this TS complains

enum Colors4 {
  Blue = 'blue',
  Green = 'green',
}

const ColorsObj2 = {
  Blue: 'blue',
  Green: 'gree',
};

const ColorsObj3 = {
  Blue: 'blue',
  Green: 'green',
} as const;

type ColorsObjType1 = typeof ColorsObj2;
type ColorsObjType2 = typeof ColorsObj3;

type DesiredArgs2 = 'blue' | 'green';

function showColor3(color: DesiredArgs2) {
  console.log(color);
}

showColor3('blue');
showColor3(ColorsObj3.Blue);

enum Colors5 {
  Blue = 'blue',
  Green = 'green',
}

const ColorsObj4 = {
  Blue: 'blue',
  Green: 'green',
} as const;

type ColorsObjType3 = typeof ColorsObj4;
type ColorsObjType4 = keyof typeof ColorsObj4;
type ColorsObjType5 =
  typeof ColorsObj4[keyof typeof ColorsObj4];

// type DesiredArgs3 = 'blue' | 'green';

function showColor4(color: ColorsObjType5) {
  console.log(color);
}

showColor4('green');
showColor4(ColorsObj4.Green);
