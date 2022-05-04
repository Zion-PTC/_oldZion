import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import detectEthereumProvider from '@metamask/detect-provider'

import database from '../../../Database/newDatas.json'

import BurgerButton from "../../BurgerButton"
import AccountAvatar from "../../AccountAvatar"
import { selectNavBarMenu } from "../../../features/navBarMenu/navBarMenuSlice"
import { handleActiveMenu } from "../../../features/navBarMenu/navBarThunksSlice"

const NavArea = styled.nav`
  position: relative;
  grid-area: nav;
  background: ${props => props.backgroundColor};
  border-bottom: solid rgba(5, 53, 58, 0.501);
  display: grid;
  grid-template-columns: 55px auto 1fr 89px 55px;
  grid-template-rows: 27.5px 27.5px;
  grid-template-areas: "logo select navmenu web3 menubtn" "logo select navmenu web3 menubtn";
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

export default function Nav() {
  const accounts = database.accounts
  const navbarColor = accounts[0].navbarColor
  const logoURL = accounts[0].logoURL
  const navBarMenu = useSelector(selectNavBarMenu);
  const menus = navBarMenu.menus;
  const gridTemplateColumns = navBarMenu.gridTemplateColumns;
  const activeMenu = navBarMenu.activeMenu
  const isEth = useSelector(state => state.ethereum.isEth)
  const topBurger = useRef()
  const bottomBurger = useRef()
  const burgerButton = useRef()
  const dispatch = useDispatch()

  let handleClick = e => {
    let connect = async () => {
      const provider = await detectEthereumProvider();
      const { connectToMetamask } = await import("../../../features/ethereum/ethereumSlice")
      dispatch(connectToMetamask(provider))
    }
    connect()
  }

  let handleMenuClick = (menus, menu, e) => {
    e.preventDefault()
    dispatch(handleActiveMenu({ menu, menus }))
  }

  return (
    <NavArea
      backgroundColor={navbarColor}
      id='nav'
    >
      <AccountAvatar logoURL={logoURL} />
      <select style={{ gridArea: 'select' }}>
        <option>
          cio
        </option>
      </select>
      <NavMenu
        gridTemplateColumns={gridTemplateColumns}
        id='navmenulist'
      >
        {menus.map(menu => (
          <li
            id={menu}
            key={menu + 'li'}
            onClick={e => handleMenuClick(menus, menu, e)}>
            <a key={menu + 'a'}>
              <p key={menu + 'p'}>
                {menu}
              </p>
            </a>
          </li>))}
      </NavMenu>
      <Web3ConnArea>
        <MetaButton
          hidden={!isEth}
          onClick={handleClick}
        >
          Connect
        </MetaButton>
        <Text hidden={isEth}>Consider downloading Metamask</Text>
      </Web3ConnArea>
      <BurgerButton gridArea='menubtn'></BurgerButton>
    </NavArea>
  )
}
