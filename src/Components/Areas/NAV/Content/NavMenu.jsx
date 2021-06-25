import styled from "styled-components"
import { useDispatch } from "react-redux"
import { setNavBarMenu } from "../../../../features/navBarMenu/navBarMenuSlice"


const NAVMENU = styled.ul`
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
  p {
    color: aliceblue;
    font-size: 70%;
    :hover {
      cursor: pointer;
    }
  }
`

function NoDNavMenu() {
  const dispatch = useDispatch()
  return (
    <>
      <li onClick={() => dispatch(setNavBarMenu())} id='navmenuitem1'><p>Playlist</p></li>
      <li id='navmenuitem2'><p>Tracks</p></li>
      <li id='navmenuitem3'><p>12"</p></li>
      <li id='navmenuitem4'><p>Merchandise</p></li>
    </>
  )
}

function DWebNavMenu() {
  const dispatch = useDispatch()
  return (
    <>
      <li onClick={() => dispatch(setNavBarMenu())} id='navmenuitem1'><p>Playlist</p></li>
      <li id='navmenuitem2'><p>Tracks</p></li>
      <li id='navmenuitem3'><p>12"</p></li>
      <li id='navmenuitem4'><p>Merchandise</p></li>
    </>
  )
}

export default function NavMenu() {

  const eth = window.ethereum
  // ========================= RENDER CONDITIONS
  var navmenu = ''
  if (eth === undefined) { navmenu = <NoDNavMenu></NoDNavMenu> }

  if (eth !== undefined) { navmenu = <DWebNavMenu></DWebNavMenu> }

  return (
    <NAVMENU id='navmenulist'>
      {navmenu}
    </NAVMENU>
  )
}
