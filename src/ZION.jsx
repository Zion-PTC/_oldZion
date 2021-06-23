import React, { useEffect, useState } from "react";
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


function AppLogic() {
  var [menuHidden, setmenuHidden] = useState(false)
  var [gridPA, setgridPA] = useState()
  var [menuBarH, setmenuBarH] = useState()
  // funzione che determina lo stato del menu
  // dipende dal click effettuato sulla lista di elementi in NAV
  $('#navmenuitem1').on('click', function (e) {
    e.preventDefault();
    setmenuHidden(!menuHidden)
  })

  // This functions handles the gridPA dimention based on
  // Window dimension
  const mediaQuery = '(max-width: 867px)';
  const mediaQueryList = window.matchMedia(mediaQuery)
  if (mediaQueryList.matches) { gridPA = '1fr 1fr' } else { gridPA = '1fr 1fr 1fr 1fr' }
  mediaQueryList.addEventListener('change', event => {
    if (event.matches) {
      setgridPA('1fr 1fr')
    } else {
      setgridPA('1fr 1fr 1fr 1fr')
    }
  })

  useEffect(() => {
    $(function () {
      const bar = $('#menubar').outerHeight()
      setmenuBarH(bar)
    })
  }, [])

  return [menuHidden, gridPA, menuBarH]
}


const ZIONGRID = styled.div`
  display: grid;
  grid-template-rows: 55px calc(100vh - 110px) 55px;
  grid-template-areas: "nav" "content" "footer";
`


// ========================= APPLICATION

export default function ZION() {
  // ========================= DATAS
  const accounts = database
  const navbarColor = accounts.accounts[0].navbarColor
  const logoURL = accounts.accounts[0].logoURL
  const playlistMenu = [
    'TNLDGL',
    'TNL25'
  ]

  const menuHidden = AppLogic()[0]
  const gridPA = AppLogic()[1]
  const menuBarH = AppLogic()[2]

  const eth = window.ethereum

  // qui si potrebbero caricare le condizioni

  return (
    <ZIONGRID className='Zion'>
      <Content menuHidden={menuHidden} menuBarH={menuBarH}>
        <Menu playlistMenu={playlistMenu} eth={eth}>
        </Menu>
        <Product gridPA={gridPA}>
          <TNLAudiusPlaylist/>
        </Product>
        <Lbar></Lbar>
      </Content>
      <Nav>
        <AccountAvatar logoURL={logoURL}></AccountAvatar>
        <NavMenu></NavMenu>
        <Web3Connection eth={eth}/>
        <NavButton/>
      </Nav>
      <Footer><p>Footer</p></Footer>
    </ZIONGRID>
  )
}

