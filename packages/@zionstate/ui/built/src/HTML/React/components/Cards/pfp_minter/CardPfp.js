import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { checkSize } from "./util";
export const CardStyle = styled.div `
  border: 1px solid;
  ${(props) => checkSize(props)};
`;
export const CardPfp = (props) => {
    const { name, slug, small, mid, big, id } = props;
    const href = `/nft/${id}`;
    return (React.createElement(CardStyle, { small: small, mid: mid, big: big },
        React.createElement("div", { className: "top-section" },
            React.createElement("div", { className: "avatar" },
                "Avatar ",
                name),
            React.createElement("div", { className: "action" }, "Action")),
        React.createElement(Link, { href: "/" },
            React.createElement("div", { className: "image-section" },
                React.createElement(Link, { href: href }, "Image"))),
        React.createElement("div", { className: "info-section" }, "Infos"),
        React.createElement("div", { className: "social-section" }, "Social")));
};
