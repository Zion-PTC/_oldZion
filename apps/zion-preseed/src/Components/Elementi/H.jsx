import styled from "styled-components"
import { InitialStyle } from "../Styled/Utils"

export let H1 = styled.h1`
  ${InitialStyle};
  ${props => props.dynamic};

`