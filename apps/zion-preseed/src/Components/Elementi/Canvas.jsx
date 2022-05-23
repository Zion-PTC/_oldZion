import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

export let Canvas = styled.canvas`
  ${InitialStyle}
  ${props => props.dynamic};
`