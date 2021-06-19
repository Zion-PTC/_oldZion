import React, { useEffect, useState } from "react";
import './App.css'
import database from './Database/Accounts.json'
import { NFTInviteAbi } from './blockchain/ABIs/NFTInviteAbi'
import ZionNavBar from './Components/NavBar/ZionNavBar'
import ZionContainer from "./Components/Container/ZionContainer";
import ZionFooter from "./Components/Footer/ZionFooter";
import ZionLBar from "./Components/Container/Sidebars/ZionLBar";
import ZionContent from "./Components/Container/Content/ZionContent";
import ZionRBar from "./Components/Container/Sidebars/ZionRBar";
import MenuTop from "./Components/Container/Content/Menus/MenuTop";
import MenuBottom from "./Components/Container/Content/Menus/MenuBottom";
import TNLAudiusPlaylist from "./Components/Products/TNLAudiusPlaylist";
import AccountLogo from "./Components/NavBar/Navbar Contents/AccountLogo";
// import MetamaskBtn from "./Components/NavBar/Navbar Contents/Web3/MetamaskBtn";
import MenuBtn from "./Components/NavBar/Navbar Contents/MenuBtn";
import NavMenu1 from "./Components/NavBar/Navbar Contents/NavMenu1";
// import Web3Connection from "./Components/NavBar/Navbar Contents/Web3Connection";
import { ethers } from "ethers"
import useGetBalance from "./Components/Hooks/useGetBalance";
// import useGetUserAddr from "./Components/Hooks/useGetUserAddr";
import useGetAccounts from "./Components/Hooks/useGetAccounts";
import acc from './Components/States/MetaOK'
import {
  ZionGrid,
  Content,
  MenuArea,
  ProductArea,
  Nav,
  AccountAvatar,
  NavMenu,
  Footer,
  Button
} from "./Components/_ZION Styled Components/ZION.styled";
// import {
//   eth,
  // userAddr,
  // isMeta,
  // connectMetamask,
  // onEthConnect,
  // onAccountChange,
  // onChainChange,
  // getMainNetBalance
// } from "./_JS Functions/web3Function";
import NFTInvite from "./Components/Container/Content/Areas/NFTInvite";
import $ from 'jquery'
import MetamaskBtn from "./Components/NavBar/Navbar Contents/Web3/MetamaskBtn";


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
  const top = menuActive ? '0' + 'px' : -menuBarH + 'px'
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
const eth = window.ethereum
var a = ''
new Promise (() => {
  if (eth !== undefined) {
    const addressOK = eth.selectedAddress
    if (addressOK === null) {
      console.log('nul')
      a = <MetamaskBtn></MetamaskBtn>
    }
    else { console.log('got accounts'); }
  } 
})
  return (
    <ZionGrid className='Zion'>
      <Content top={top} gridTR={contentGridTR} height={contentHeight} id='content'>
        <MenuArea menuActive={menuActive} id='menubar'>
          {playlistList}
        </MenuArea>
        <ProductArea id='productarea' gridTC={gridPA}>
          {/* {invite} */}
        </ProductArea>
      </Content>
      <Nav id='nav'>
        <AccountAvatar src={logoURL}></AccountAvatar>
        <NavMenu id='navmenulist'>
          <li id='navmenuitem1'><a href=''>Playlist</a></li>
          <li id='navmenuitem2'><a href=''>Tracks</a></li>
          <li id='navmenuitem3'><a href=''>12"</a></li>
          <li id='navmenuitem4'><a href=''>Merchandise</a></li>
        </NavMenu>
        {a}
        <Button gridArea='menubtn'></Button>
      </Nav>
      <Footer><p>FOOTER</p></Footer>
    </ZionGrid>
  )


}

