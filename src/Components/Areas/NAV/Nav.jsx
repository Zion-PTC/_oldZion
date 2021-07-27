import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import detectEthereumProvider from '@metamask/detect-provider'

import AccountAvatar from "../../AccountAvatar"
import { selectNavBarMenu } from "../../../features/navBarMenu/navBarMenuSlice"
import database from '../../../Database/newDatas.json'
import { useRef } from "react"
import { useEffect } from "react"

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

const BurgerButton = styled.div`
  grid-area: menubtn;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .5s ease-in-out;
  #topBurger {
    transform: translateY(-9px);
  }
  #bottomBurger {
    transform: translateY(9px);
  }
  &[open]{
    #topBurger {
      transform: rotate(45deg);
    }
    #centerBurger {
      background: transparent;
      transform: translateX(151%);
    }
    #bottomBurger {
      transform: rotate(-45deg);
    }
  }
  `

const Burger = styled.div`
  position: absolute;
  width: 50%;
  height: 3px;
  background: #e7e7e7;
  border-radius: 5px;
  transition: all .3s ease-in-out;
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

export default function Nav({ backgroundColor, isEth }) {
  const accounts = database.accounts
  const logoURL = accounts[0].logoURL
  const dispatch = useDispatch()
  const navBarMenu = useSelector(selectNavBarMenu);
  const menus = navBarMenu.menus;
  const gridTemplateColumns = navBarMenu.gridTemplateColumns;
  const activeMenu = navBarMenu.activeMenu
  const topBurger = useRef()
  const bottomBurger = useRef()
  const burgerButton = useRef()

  useEffect(() => {
    let menuOpen = false
    burgerButton.current.addEventListener('click', () => {
      console.log('works');
      if(!menuOpen){
        burgerButton.current.setAttribute('open', '')
        menuOpen = true
      } else {
        burgerButton.current.removeAttribute('open')
        menuOpen = false
      }
    })
  }, [])


  let handleClick = e => {
    let connect = async () => {
      const provider = await detectEthereumProvider();
      const { connectToMetamask } = await import("../../../features/ethereum/ethereumSlice")
      dispatch(connectToMetamask(provider))
    }
    connect()
  }

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
        <li><a><p>prova</p></a></li>
        <li><a><p>prova</p></a></li>
        <li><a><p>prova</p></a></li>
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
      <BurgerButton id='AccountButton' ref={burgerButton} open={false}>
        <Burger id='topBurger' ref={topBurger}></Burger>
        <Burger id='centerBurger'></Burger>
        <Burger id='bottomBurger' ref={bottomBurger}></Burger>
      </BurgerButton>
    </NavArea>
  )
}
