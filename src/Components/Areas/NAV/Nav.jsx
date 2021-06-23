import styled from "styled-components"

const NAV = styled.nav`
  position: relative;
  grid-area: nav;
  background: rgb(34, 27, 162);
  border-bottom: solid rgba(5, 53, 58, 0.501);
  display: grid;
  grid-template-columns: 55px 1fr 89px 55px;
  grid-template-rows: 27.5px 27.5px;
  grid-template-areas: "logo navmenu web3 menubtn" "logo navmenu web3 menubtn";
`

export default function Nav({children}) {
  return (
    <NAV id='nav'>
      {children}
    </NAV>
  )
}
