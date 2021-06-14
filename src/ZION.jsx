import { useState } from "react";
import somma from './_JS Functions/somma'
import { ethers } from 'ethers'
import Web3 from 'web3'
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
import ProductArea from "./Components/Container/Content/Areas/ProductArea";
import TNLAudiusPlaylist from "./Components/Products/TNLAudiusPlaylist";
import AccountLogo from "./Components/NavBar/Navbar Contents/AccountLogo";
import MetamaskBtn from "./Components/NavBar/Navbar Contents/Web3/MetamaskBtn";
import MenuBtn from "./Components/NavBar/Navbar Contents/MenuBtn";
import NavMenu1 from "./Components/NavBar/Navbar Contents/NavMenu1";
import Web3Connection from "./Components/NavBar/Navbar Contents/Web3Connection";



export default function ZION() {
  // This is the main APP Component. In this Component we set the Layout for the page, by calling one of the preset
  // which are in the Layout folder, for the moment its <ZIONv001>: it accepts 5 zones:
  //          " . nav . "
  // " sidebar content rbar "
  //        " . footer . " '
  // from here we can send props to the ZIONv001 layout to react responsively
  // First we set up a button to show the menu
  const [navHidden, setNavHidden] = useState(true)
  const onClick = () => setNavHidden(!navHidden)
  const top = navHidden ? '-100px' : '0'
  // Here we will set up the sidebars movements
  const left = '-144px'
  // this function is just to remind me how to import fuctions from JS files
  const sum = somma(4, 5)
  console.log(sum);
  // here we create a state to manate the number of columns in the product area
  var [gridPA, setgridPA] = useState()
  const mediaQuery = '(max-width: 867px)';
  const mediaQueryList = window.matchMedia(mediaQuery)
  console.log(mediaQueryList.matches);
  if (mediaQueryList.matches) { gridPA = '1fr 1fr' } else { gridPA = '1fr 1fr 1fr 1fr' }
  mediaQueryList.addEventListener('change', event => {
    if (event.matches) {
      setgridPA('1fr 1fr')
    } else {
      setgridPA('1fr 1fr 1fr 1fr')
    }
  })
  // Now we are going to set the state for the application which is given by the user interactions with it
  const accounts = database
  const navbarColor = accounts.accounts[0].navbarColor
  const logoURL = accounts.accounts[0].logoURL
  // We will have 4 main states :
  // 1 - no MetaMask installed
  // 2 - Metamask installed but not connected to the dApp
  // 3 - Connected but without Invitation NFT
  // 4 - Connected and with the Invitation NFT. Having the invitation NFT give user access to more features
  const eth = window.ethereum
  // this variable is a prop that we pass down to the child with the Metamask button
  var metamask = ''
  // we create several states :
  // 1 - Metamask installed (boolean)
  var [metaOK, setMetaOK] = useState(false)
  // 2 - User Ethereum Address
  var [userAddr, setUserAddr] = useState()
  // 3 - Network to which the user is connected
  var [netID, setNetID] = useState()
  // 4 - User MAINNET Balance
  var [balance, setBalance] = useState()
  // 5 - User's balance of Invite NFT of selected account
  var [NFTBalance, setNFTBal] = useState()
  new Promise(() => {
    // if metamask is not installed we do nothing
    if (eth === undefined) {
      metamask = <div>no metamask</div>
    }
    // now we chech if the user address is undefinded, which means user is not connected
    else if (userAddr == undefined) {
      // if use address is undefined we show metamask button
      metaOK = eth.isMetaMask
      metamask = <MetamaskBtn />
      console.log(userAddr);
    } else {
      eth.on('connect', () => { userAddr = eth.selectedAddress })

      // if use address is not undefined we set the state for the user eth address
      setTimeout(() => {
        setUserAddr(eth.selectedAddress)
        setMetaOK(eth.isMetaMask)
      }, 1000)
      // we hide Metamask button
      metamask = ''
      // and when the user changed address on his metamask
      eth.on('accountsChanged', () => {
        setTimeout(() => {
          setUserAddr(eth.selectedAddress)
        }, 1000);
      })
      // now we have to check the network connection
      const provider = new ethers.providers.Web3Provider(eth)
      setTimeout(() => {
        setNetID(provider.network.name)
      }, 1000);
      // same thing on Network change we update the state
      eth.on('chainChanged', () => {
        setTimeout(() => {
          setNetID(provider.network.name)
        }, 1000);
        // now we check user MAINNET BALANCE
        setTimeout(() => {
          getBalance()
        }, 1000);
        async function getBalance() {
          const balance = await provider.getBalance(userAddr)
          const decBalance = ethers.utils.formatEther(balance)
          setBalance(decBalance);
        }
      })
      // now we check NFT BALANCE
      const nftInviteAddr = database.accounts[0].nftInviteAddr
      const web3 = new Web3(Web3.givenProvider)
      const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: userAddr })
      new Promise(() => {
        if (userAddr === undefined) {

        } else if (userAddr === null) {

        } else {
          setTimeout(() => {
            getNFTBalance()
          }, 1000);
        }
      })
      const getNFTBalance = async () => {
        const result = await NFTInviteContract.methods.balanceOf(userAddr).call();
        setNFTBal(result);
      }
      eth.on('accountsChanged', () => {
        setTimeout(() => {
          getNFTBalance()
        }, 1000);
      });
      new Promise(() => {
        if (NFTBalance === '0') {

        } else {

        }
      })

    }
  })

  return (
    <div id='ZION'
      style={{
        height: '100vh',
        position: 'fixed',
        display: 'grid',
        gridTemplateColumns: '100vw',
        gridTemplateRows: '55px 1fr 34px',
        gridTemplateAreas: ' "nav" "container" "footer" ',
        background: 'red'
      }}>
      <ZionNavBar>
        <AccountLogo src={logoURL} />
        <NavMenu1 />
        <Web3Connection metamask={metamask} metaOK={metaOK} />
        <MenuBtn onClick={onClick} />
      </ZionNavBar>
      <ZionContainer left={left}>
        <ZionLBar />
        <ZionContent top={top} >
          <MenuTop />
          <ProductArea gridPA={gridPA}>
            {/* <TNLAudiusPlaylist /> */}
          </ProductArea>
          <MenuBottom />
        </ZionContent>
        <ZionRBar />
      </ZionContainer>
      <ZionFooter />
    </div>
  )


}

