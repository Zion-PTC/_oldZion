import styled from "styled-components";
import { Area } from "../Shape/Card";

export const TextArea = styled.div<{ gridArea: string }>`
  height: 60%;
  background-color: grey;
  grid-area: ${(props) => props.gridArea};
`;
