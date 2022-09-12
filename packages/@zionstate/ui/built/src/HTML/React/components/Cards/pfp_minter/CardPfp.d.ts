export declare const CardStyle: import("styled-components").StyledComponent<"div", any, {
    small?: boolean | undefined;
    mid?: boolean | undefined;
    big?: boolean | undefined;
}, never>;
export interface CardPfpProps {
    id?: number;
    name?: string;
    slug?: string;
    small?: boolean;
    mid?: boolean;
    big?: boolean;
}
export interface CardPfp {
    (props: CardPfpProps): JSX.Element;
}
export declare const CardPfp: CardPfp;
