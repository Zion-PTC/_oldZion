import styled from "styled-components"

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
`

function NoDNavMenu() {
  return (
    <>
      <li id='navmenuitem1'><a href=''>Playlist</a></li>
      <li id='navmenuitem2'><a href=''>Tracks</a></li>
      <li id='navmenuitem3'><a href=''>12"</a></li>
      <li id='navmenuitem4'><a href=''>Merchandise</a></li>
    </>
  )
}

function DWebNavMenu() {
  return (
    <>
      <li id='navmenuitem1'><a href=''>Playlist</a></li>
      <li id='navmenuitem2'><a href=''>Tracks</a></li>
      <li id='navmenuitem3'><a href=''>12"</a></li>
      <li id='navmenuitem4'><a href=''>Merchandise</a></li>
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
