import styled from "styled-components";

export type SquareProps = {
  small?: boolean;
  backgroundColor?: string;
};
export const Square = styled.div<SquareProps>`
  grid-row: span ${(props) => (props.small ? 3 : 6)};
  grid-column: span ${(props) => (props.small ? 3 : 6)};
  background-color: ${(props) => props.backgroundColor};
`;
