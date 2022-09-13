import styled from "styled-components";

export const Area = styled.div<{
  colSpan: number;
  rowSpan: number;
  backgroundColor?: string;
  width: number;
}>`
  background-color: ${(props) => props.backgroundColor};
  grid-column: span ${(props) => props.colSpan};
  grid-row: span ${(props) => props.rowSpan};
  width: ${(props) => props.width};
`;
