import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils"

export let Img = styled.img`
  ${InitialStyle};
  position: relative;
  grid-area: a;
  ${props => props.dynamic};
`