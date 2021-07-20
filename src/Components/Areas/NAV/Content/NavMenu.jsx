import styled from "styled-components"
import { useDispatch } from "react-redux"
import { setNavBarMenu, setActiveMenu } from "../../../../features/navBarMenu/navBarMenuSlice"
import { useSelector } from "react-redux"
import { selectNavBarMenu } from "../../../../features/navBarMenu/navBarMenuSlice"

const NAVMENU = styled.ul`
  grid-area: navmenu;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-auto-flow: dense;
  li {
    height: 100%;
    :hover {
      background-color: #063c7a;
    }
    :active {
      background-color: #092f5a;
    }
  }
  .active{
    background-color: #092f5a;
    :hover{
      background-color: #092f5a
    }
  }
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

export default function NavMenu() {
  const dispatch = useDispatch()

  const navBarMenu = useSelector(selectNavBarMenu);
  const menus = navBarMenu.menus;
  const gridTemplateColumns = navBarMenu.gridTemplateColumns;
  const activeMenu = navBarMenu.activeMenu

  let displayMenus
  displayMenus = menus.map(
    (menu) => {
      let className
      if (menu === activeMenu) {
        className = "active"
      } else {
        className = "inactive"
      }

      return <li
        id={menu}
        className={className}
        onClick={() => dispatch(setActiveMenu(menu))}
        key={menu}
      >
        <p
          onClick={() => dispatch(setNavBarMenu())}
        >{menu}</p>
      </li>
    }
  )

  return (
    <NAVMENU
      gridTemplateColumns={gridTemplateColumns}
      id='navmenulist'>
      {displayMenus}
    </NAVMENU>
  )
}
