import styled from "styled-components";
import $ from 'jquery'
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
import { selectAudioPlayer } from "./features/audioPlayer/audioPlayerSlice";
import MusicPlayer from "./Components/Products/MusicPlayer";

import appLogic from "./app/appLogic";
$(appLogic())

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
  const playlistMenu = accounts[0].menus[0].subMenus[0].subMenus
  const navBarMenu = useSelector(selectNavBarMenu)
  const menuHidden = navBarMenu.hidden
  const menuBarH = navBarMenu.menuBarH
  // WEB 3
  let isEth = useSelector(state => state.ethereum.isEth) // checks if user has Metamask, true if installed
  // let store = useSelector(state => state)
  // let isUserConnected = useSelector(state => state.ethereum.isUserConnected)
  // let userAddr = useSelector(state => state.ethereum.userAddr)
  // let userChain = useSelector(state => state.ethereum.userChain)
  // let isE = useSelector(state => state.ethereum.isEth)
  let audioPlayer = useSelector(selectAudioPlayer)
  let playlist = audioPlayer.playlist
  // const { data, error, isLoading }
  // const { data, error, isLoading } = useGetPlaylistTracksQuery(playlistID)
  // if (error) { console.log(error); }
  // const dispatch = useDispatch()
  // dispatch(setPlaylist(data))
  // let playlist = useSelector(state => state.audioPlayer.playlist)
  // console.log(playlist);

  return (
    <ZIONGRID className='Zion'>
      <Content menuHidden={menuHidden} menuBarH={menuBarH}>
        <Menu playlistMenu={playlistMenu}>
        </Menu>
        <Product>
          <TNLAudiusPlaylist playlist={playlist}></TNLAudiusPlaylist>
        </Product>
        <Lbar></Lbar>
      </Content>
      <Nav
        numberOfNavBarMenus={numberOfNavBarMenus}
        backgroundColor={navbarColor}
      >
        <AccountAvatar logoURL={logoURL}></AccountAvatar>
        <NavMenu></NavMenu>
        <Web3Connection eth={isEth} />
        <NavButton />
      </Nav>
      <Footer><MusicPlayer></MusicPlayer></Footer>
    </ZIONGRID>
  )
}

