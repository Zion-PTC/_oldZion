import styled from "styled-components"

import AccountAvatar from "./Content/AccountAvatar"
import database from '../../../Database/Accounts.json'
import { useDispatch, useSelector } from "react-redux"
import { selectNavBarMenu } from "../../../features/navBarMenu/navBarMenuSlice"

const NavArea = styled.nav`
  position: relative;
  grid-area: nav;
  background: ${props => props.backgroundColor};
  border-bottom: solid rgba(5, 53, 58, 0.501);
  display: grid;
  grid-template-columns: 55px 1fr 89px 55px;
  grid-template-rows: 27.5px 27.5px;
  grid-template-areas: "logo navmenu web3 menubtn" "logo navmenu web3 menubtn";
`

const Web3ConnArea = styled.div`
  grid-area: web3;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: ". . ." ". a .";
`

const MetaButton = styled.button`
  grid-area: a;
  color: #F6E6D8;
  border-radius: 1em;
  background: #E17D25;
  border: solid 0.1em #A15614;
`

const Text = styled.p`
  grid-area: a;
  margin: 0;
  font-size: 65%;
`

const AccountButton = styled.button`
  grid-area: menubtn;
`

const NavMenu = styled.ul`
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
      cursor: pointer;
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

let handleClick = e => {
  console.log(e);
}

export default function Nav({ backgroundColor, isEth }) {
  const accounts = database.accounts
  const logoURL = accounts[0].logoURL
  const dispatch = useDispatch()
  const navBarMenu = useSelector(selectNavBarMenu);
  const menus = navBarMenu.menus;
  const gridTemplateColumns = navBarMenu.gridTemplateColumns;
  const activeMenu = navBarMenu.activeMenu

  return (
    <NavArea
      backgroundColor={backgroundColor}
      id='nav'
    >
      <AccountAvatar logoURL={logoURL} />
      <NavMenu
      gridTemplateColumns={gridTemplateColumns}
      id='navmenulist'
      >
        <li className='active'><a><p>prova</p></a></li>
        <li onClick={handleClick}><a><p>prova</p></a></li>
        <li><a><p>prova</p></a></li>
        <li><a><p>prova</p></a></li>
      </NavMenu>
      <Web3ConnArea>
        <MetaButton hidden={!isEth}>
          Connect
        </MetaButton>
        <Text hidden={isEth}>Consider downloading Metamask</Text>
      </Web3ConnArea>
      <AccountButton />
    </NavArea>
  )
}
