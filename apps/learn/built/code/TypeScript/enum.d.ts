declare enum Colors1 {
    Blue = 0,
    Green = 1
}
declare enum Colors2 {
    Blue = "blue",
    Green = "gree"
}
declare function showColor(color: Colors2): void;
declare enum Colors3 {
    Blue = "blue",
    Green = "green"
}
declare const ColorsObj: {
    Blue: string;
    Green: string;
};
declare type DesiredArgs = 'blue' | 'green';
declare function showColor2(color: DesiredArgs): void;
declare enum Colors4 {
    Blue = "blue",
    Green = "green"
}
declare const ColorsObj2: {
    Blue: string;
    Green: string;
};
declare const ColorsObj3: {
    readonly Blue: "blue";
    readonly Green: "green";
};
declare type ColorsObjType1 = typeof ColorsObj2;
declare type ColorsObjType2 = typeof ColorsObj3;
declare type DesiredArgs2 = 'blue' | 'green';
declare function showColor3(color: DesiredArgs2): void;
declare enum Colors5 {
    Blue = "blue",
    Green = "green"
}
declare const ColorsObj4: {
    readonly Blue: "blue";
    readonly Green: "green";
};
declare type ColorsObjType3 = typeof ColorsObj4;
declare type ColorsObjType4 = keyof typeof ColorsObj4;
declare type ColorsObjType5 = typeof ColorsObj4[keyof typeof ColorsObj4];
declare function showColor4(color: ColorsObjType5): void;
