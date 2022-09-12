import { CardPfpProps } from "./CardPfp";
export declare enum CardFormats {
    landscape = "landscape",
    portrait = "portrait",
    square = "square",
    slim = "slim",
    resource = "resource"
}
export declare type CardFormatsTypes = keyof typeof CardFormats;
export declare const Card: (props: {
    datas: CardPfpProps[];
    type: "pfp";
    format?: CardFormatsTypes;
}) => JSX.Element;
