import styled from "styled-components"

const FOOTER = styled.footer`
  position: relative;
  grid-area: footer;
  background: rgb(34, 27, 162);
  border-top: solid rgba(5, 53, 58, 0.501);
  p {
    color: aliceblue;
  }
`

export default function Footer({children}) {
  return (
    <FOOTER>
      {children}
    </FOOTER>
  )
}
