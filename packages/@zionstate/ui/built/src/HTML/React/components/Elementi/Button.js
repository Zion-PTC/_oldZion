import React from "react";
import styled from "styled-components";
// export const Button = styled.button<IButton>`
//   padding: 0;
//   font-size: 1em;
//   border: none;
//   box-sizing: border-box;
//   border-radius: ${RADIUMMID};
//   ${checkSize};
//   ${checkColor};
//   color: ${BRIGHT};
//   cursor: pointer;
//   :hover {
//     color: ${MID};
//   }
//   :active {
//     color: ${MIDBRIGHT};
//   }
//   ${(props) => props.dynamic};
// `;
const qualcosa = "";
const UnComponente = styled.div `
  border: ${(props) => props.blue}rem;
`;
function Loo() {
    return React.createElement(UnComponente, null, "adsasd");
}
