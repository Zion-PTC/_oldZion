import styled from "styled-components";

export const BUTTON = styled.button`
  grid-area: ${props => props.gridArea};
`

export default function NavButton() {
  return (
    <BUTTON gridArea='menubtn'>
      
    </BUTTON>
  )
}
