import styled from "styled-components";
import $ from 'jquery'
import './App.css'

import { database } from "./Database/users/database";

import Nav from "./Components/Areas/Nav/Nav";
import Content from "./Components/Areas/Content/Content";
import Footer from "./Components/Areas/Footer/Footer";


// import TNLAudiusPlaylist from './Components/Products/TNLAudiusPlaylist'
// import TNL25Tags from "./Components/Products/TNL25Tags";

import { useSelector } from "react-redux";
import { selectNavBarMenu } from "./features/navBarMenu/navBarMenuSlice";
import { selectAudioPlayer } from "./features/audioPlayer/audioPlayerSlice";
import MusicPlayer from "./Components/Areas/Footer/MusicPlayer";
// import { connectToMetamask } from "./features/ethereum/ethereumSlice";

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
  let ethereum = useSelector(state => state.ethereum)
  let isEth = ethereum.isEth
  let isConnected = ethereum.isConnected
  let audioPlayer = useSelector(selectAudioPlayer)
  let playlist = audioPlayer.playlist

  return (
    <ZIONGRID className='Zion'>
      <Content
        menuHidden={menuHidden}
        menuBarH={menuBarH}
        isEth={isEth}
        isConnected={isConnected}>
      </Content>
      <Nav
        numberOfNavBarMenus={numberOfNavBarMenus}
        backgroundColor={navbarColor}
        isEth={isEth}
      />
      <Footer>
        <MusicPlayer></MusicPlayer>
      </Footer>
    </ZIONGRID>
  )
}

