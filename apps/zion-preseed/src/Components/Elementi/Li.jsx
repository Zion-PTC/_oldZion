import styled from "styled-components"
import { InitialStyle } from "../Styled/Utils"

export let Li = styled.li`
  ${InitialStyle};
  ${props => props.dynamic};
`