import styled from "styled-components";
import './App.css'

import database from './Database/Accounts.json'

import Nav from "./Components/Areas/Nav/Nav";
import Content from "./Components/Areas/Content/Content";
import Footer from "./Components/Areas/Footer/Footer";

import AccountAvatar from "./Components/Areas/Nav/Content/AccountAvatar";
import NavMenu from "./Components/Areas/Nav/Content/NavMenu";
import Web3Connection from "./Components/Areas/Nav/Content/Web3Connection";
import NavButton from "./Components/Areas/Nav/Content/NavButton";

import Lbar from "./Components/Areas/Content/LBar/Lbar";
import Menu from "./Components/Areas/Content/Menu/Menu";
import Product from "./Components/Areas/Content/Product/Product";
import TNLAudiusPlaylist from './Components/Products/TNLAudiusPlaylist'
// import TNL25Tags from "./Components/Products/TNL25Tags";

import { useSelector } from "react-redux";
import { selectNavBarMenu } from "./features/navBarMenu/navBarMenuSlice";
import MusicPlayer from "./Components/Products/MusicPlayer";

const ZIONGRID = styled.div`
  display: grid;
  grid-template-rows: 55px calc(100vh - 110px) 55px;
  grid-template-areas: "nav" "content" "footer";
`
// ========================= APPLICATION
export default function ZION() {
  const accounts = database.accounts
  const navbarColor = accounts[0].navbarColor
  const numberOfNavBarMenus = accounts[0].menus.length
  const logoURL = accounts[0].logoURL
  const playlistMenu = [
    'TNLDGL',
    'TNL25'
  ]
  const navBarMenu = useSelector(selectNavBarMenu)
  // const dispatch = useDispatch()
  // const audiusProvider = dispatch(getAudiusProvider())
  const menuHidden = navBarMenu.hidden
  const menuBarH = navBarMenu.menuBarH
  // WEB 3
  const isEth = useSelector(state => state.ethereum.isEth) // checks if user has Metamask, true id installed
  let isUserConnected = useSelector(state => state.ethereum.isUserConnected)
  let userAddr = useSelector(state => state.ethereum.userAddr)
  let userChain = useSelector(state => state.ethereum.userChain)

  // console.log(isEth, isUserConnected, userAddr, userChain);


  return (
    <ZIONGRID className='Zion'>
      <Content menuHidden={menuHidden} menuBarH={menuBarH}>
        <Menu playlistMenu={playlistMenu}>
        </Menu>
        <Product>
          <TNLAudiusPlaylist></TNLAudiusPlaylist>
        </Product>
        <Lbar></Lbar>
      </Content>
      <MusicPlayer></MusicPlayer>
      <Nav
        numberOfNavBarMenus={numberOfNavBarMenus}
        backgroundColor={navbarColor}
      >
        <AccountAvatar logoURL={logoURL}></AccountAvatar>
        <NavMenu></NavMenu>
        <Web3Connection eth={isEth} />
        <NavButton />
      </Nav>
      <Footer><p>Footer</p></Footer>
    </ZIONGRID>
  )
}

