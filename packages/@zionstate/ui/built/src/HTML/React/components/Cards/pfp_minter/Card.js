import React from "react";
import { CardPfps } from "./CardPfps";
export var CardFormats;
(function (CardFormats) {
    CardFormats["landscape"] = "landscape";
    CardFormats["portrait"] = "portrait";
    CardFormats["square"] = "square";
    CardFormats["slim"] = "slim";
    CardFormats["resource"] = "resource";
})(CardFormats || (CardFormats = {}));
export const Card = (props) => {
    let Element;
    switch (props.type) {
        case "pfp":
            Element = () => React.createElement(CardPfps, { mid: true }, props.datas);
            break;
        default:
            Element = () => React.createElement(CardPfps, { mid: true }, props.datas);
            break;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Element, null)));
};
