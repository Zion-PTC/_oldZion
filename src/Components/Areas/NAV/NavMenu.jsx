import {NavMenuStyled} from "../../_ZION Styled Components/ZION.styled"

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
    <NavMenuStyled id='navmenulist'>
      {navmenu}
    </NavMenuStyled>
  )
}
