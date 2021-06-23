import React, { useEffect, useState } from "react";
import './App.css'
import database from './Database/Accounts.json'
import NavMenu from "./Components/Areas/NAV/NavMenu";
import Web3Connection from "./Components/Areas/NAV/Web3Connection";
import {
  ZIONGRID,
  CONTENT,
  MENUAREA,
  PRODUCTAREA,
  NAV,
  ACCOUNTAVATAR,
  FOOTER,
  BUTTON
} from "./Components/_ZION Styled Components/ZION.styled";
import $ from 'jquery'
import Lbar from "./Components/Areas/LBar/Lbar";


function MenuTitle({ children }) {
  return (
    <p>{children}</p>
  )
}


// ========================= APPLICATION

export default function ZION() {
  // ========================= CONSTANTS
  const accounts = database
  const navbarColor = accounts.accounts[0].navbarColor
  const logoURL = accounts.accounts[0].logoURL

  const [menuActive, setmenuActive] = useState(false)
  const [menuBarH, setmenuBarH] = useState()
  const contentGridTR = 'auto 1fr'
  const contentHeight = menuActive ? '100%' : 'calc(100% + ' + menuBarH + 'px)'
  const top = menuActive ? ('0' + 'px') : (-menuBarH + 'px')
  const playlistMenu = [
    'TNLDGL',
    'TNL25'
  ]

  // ========================= NAV BAR LOGIC ===============
  useEffect(() => {
    const docReady = $(function () {
      const bar = $('#menubar').outerHeight()
      setmenuBarH(bar)
    })
  }, [])

  const playlistList = playlistMenu.map((list) =>
    <MenuTitle key={list}>{list}</MenuTitle>
  );

  $('#navmenuitem1').on('click', function (e) {
    e.preventDefault();
    setmenuActive(!menuActive)
  })

  // ========================= RESPONSIVENESS ==================
  // Here we will set up the sidebars movements
  // here we create a state to manate the number of columns in the product area
  var [gridPA, setgridPA] = useState()
  const mediaQuery = '(max-width: 867px)';
  const mediaQueryList = window.matchMedia(mediaQuery)
  // console.log(mediaQueryList.matches);
  if (mediaQueryList.matches) { gridPA = '1fr 1fr' } else { gridPA = '1fr 1fr 1fr 1fr' }
  mediaQueryList.addEventListener('change', event => {
    if (event.matches) {
      setgridPA('1fr 1fr')
    } else {
      setgridPA('1fr 1fr 1fr 1fr')
    }
  })
  // ===========================================================


  return (
    <ZIONGRID className='Zion'>
      <CONTENT top={top} gridTR={contentGridTR} height={contentHeight} id='content'>
        <MENUAREA menuActive={menuActive} id='menubar'>
          {playlistList}
        </MENUAREA>
        <PRODUCTAREA id='productarea' gridTC={gridPA}>
        </PRODUCTAREA>
        <Lbar></Lbar>
      </CONTENT>
      <NAV id='nav'>
        <ACCOUNTAVATAR src={logoURL}></ACCOUNTAVATAR>
        <NavMenu></NavMenu>
        <Web3Connection></Web3Connection>
        <BUTTON gridArea='menubtn'></BUTTON>
      </NAV>
      <FOOTER><p>FOOTER</p></FOOTER>
    </ZIONGRID>
  )
}

