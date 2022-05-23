import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

export const Label = styled.label`
  ${InitialStyle};
  font-size: 80%;
  ${props => props.dynamic}
`
