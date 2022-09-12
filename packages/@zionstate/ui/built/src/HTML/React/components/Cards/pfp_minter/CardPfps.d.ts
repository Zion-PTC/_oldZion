import { CardPfpProps } from "./CardPfp";
export interface CardPfpsProps {
    children: CardPfpProps[];
    small?: boolean;
    mid?: boolean;
    big?: boolean;
}
export interface CardPfps {
    (props: CardPfpsProps): JSX.Element;
}
export declare const CardPfps: CardPfps;
