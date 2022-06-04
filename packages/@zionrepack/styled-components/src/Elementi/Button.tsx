import styled, { FlattenSimpleInterpolation } from "styled-components";

interface IButton {
  type?: "button" | "submit" | "reset";
  children?: string | JSX.Element;
  tipo?: string;
  message?: string;
  color?: string;
  height?: string;
  borderRadius?: string;
  bkgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  id?: string;
  small?: boolean;
  mid?: boolean;
  large?: boolean;
  dynamic?: FlattenSimpleInterpolation;
  red?: boolean;
  orange?: boolean;
  green?: boolean;
  yellow?: boolean;
  violet?: boolean;
  onClick?: Function;
}

export const Button = styled.button<IButton>`
  padding: 0;
  font-size: 1em;
  border: none;
  box-sizing: border-box;
  border-radius: ${RADIUMMID};
  ${checkSize};
  ${checkColor};
  color: ${BRIGHT};
  cursor: pointer;
  :hover {
    color: ${MID};
  }
  :active {
    color: ${MIDBRIGHT};
  }
  ${(props) => props.dynamic};
`;
