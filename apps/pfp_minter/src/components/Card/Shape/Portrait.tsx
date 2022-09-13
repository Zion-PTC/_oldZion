import styled from "styled-components";

export type PortraitProps = {
  small?: boolean;
  backgroundColor?: string;
};
export const Portrait = styled.div<PortraitProps>`
  grid-row: span ${(props) => (props.small ? 7 : 14)};
  grid-column: span ${(props) => (props.small ? 4 : 8)};
  background-color: ${(props) => props.backgroundColor};
`;
