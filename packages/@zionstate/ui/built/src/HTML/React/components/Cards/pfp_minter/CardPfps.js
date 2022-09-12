import React from "react";
import { CardPfp } from "./CardPfp";
export const CardPfps = (props) => {
    const { children, small, mid, big } = props;
    return (React.createElement(React.Fragment, null, children.map((child) => (React.createElement(CardPfp, { small: small, mid: mid, big: big, ...child, key: child.slug })))));
};
