import styled from 'styled-components'


// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const CONTENT = styled.div`
  position: relative;
  top: ${props => props.top};
  height: ${props => props.height};
  overflow: auto;
  grid-area: content;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props => props.gridTR};
  grid-template-areas: "menu" "productarea";
  transition: ease 0.5s;
`
// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const PRODUCTAREA = styled.div`
  position: relative;
  grid-area: productarea;
  height: 100%;
  overflow: auto;
  background: blueviolet;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: ${props => props.gridTC};
  grid-auto-rows: 55px;
`

// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const NAV = styled.nav`
  position: relative;
  grid-area: nav;
  background: rgb(34, 27, 162);
  border-bottom: solid rgba(5, 53, 58, 0.501);
  display: grid;
  grid-template-columns: 55px 1fr 89px 55px;
  grid-template-rows: 27.5px 27.5px;
  grid-template-areas: "logo navmenu web3 menubtn" "logo navmenu web3 menubtn";
`
// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const NavMenuStyled = styled.ul`
  grid-area: navmenu;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: wrap;
  align-content: space-around;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: aliceblue;
    font-size: 70%;
  }
`

// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const LBAR = styled.div`
  background: #0909a1 ;
  position: relative;
  width: 300px;
  grid-area: productarea;
  left: ${props => props.left};
  transition: ease 0.5s;
  p {
    color: aliceblue;
  }
`

// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const FOOTER = styled.footer`
  position: relative;
  grid-area: footer;
  background: rgb(34, 27, 162);
  border-top: solid rgba(5, 53, 58, 0.501);
  p {
    color: aliceblue;
  }
`
// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const ZIONGRID = styled.div`
  display: grid;
  grid-template-rows: 55px calc(100vh - 110px) 55px;
  grid-template-areas: "nav" "content" "footer";
`

// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const MENUAREA = styled.div`
  grid-area: menu;
  background: rgb(199, 48, 48);
`

// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const BUTTON = styled.button`
  grid-area: ${props => props.gridArea};
`


// TRASPORTATO ALLINTERNO DEL COMPONENTE
export const WEB3CONN = styled.div`
  grid-area: web3;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: ". . ." ". a ." ". b .";
  button {
    color: #F6E6D8;
    grid-area: a;
    border-radius: 1em;
    background: #E17D25;
    border: solid 0.1em #A15614;
  }
`

export const buttonfromStackOvreflow = styled.button`
  box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
`