import styled from "styled-components"
import { InitialStyle } from "../Styled/Utils"

export let P = styled.p`
  ${InitialStyle};
  ${props => props.dynamic};
  `