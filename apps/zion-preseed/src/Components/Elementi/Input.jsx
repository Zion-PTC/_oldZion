import styled from "styled-components"
import { InitialStyle } from "../Styled/Utils"

export const Input = styled.input`
  ${InitialStyle};
  padding: 0 0 0 0.3em;
  font-size: 1em;
  box-sizing: border-box;
  border: 0.05em solid;
  border-radius: 0.1em;
  ${props => props.dynamic}
  ::placeholder {
    font-size: 90%;
  }
`
