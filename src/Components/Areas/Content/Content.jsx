import styled from "styled-components"
import { useDispatch } from "react-redux"

import Product from "./Product/Product"
import Lbar from "./LBar/Lbar"
import Menu from "./Menu/Menu"
import database from '../../../Database/Accounts.json'
import { connectToMetamask } from "../../../features/ethereum/ethereumSlice";

const CONTENT = styled.div`
  position: relative;
  top: ${props => props.top};
  height: ${props => props.height};
  overflow: auto;
  grid-area: content;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props => props.gridTR};
  grid-template-areas: "menu" "productarea";
  transition: ease 0.5s;
`

export default function Content({ children, menuHidden, menuBarH, isEth, isConnected }) {
  const accounts = database.accounts
  const contentHeight = menuHidden ? 'calc(100% + ' + menuBarH + 'px)' : '100%'
  const contentGridTR = 'auto 1fr'
  const top = menuHidden ? (-menuBarH + 'px') : ('0px')
  const playlistMenu = accounts[0].menus[0].subMenus[0].subMenus
  let checkMess = e => {
    if (e === true) { return 'yes eth' }
    if (e === false) { return 'no eth' }
    if (e === null) { return 'null' }
  }
  let mess = checkMess(isEth)
  let mess2 = isConnected ? 'connected' : 'not connected'
  const dispatch = useDispatch()

  return (
    <CONTENT top={top} gridTR={contentGridTR} height={contentHeight} id='content'>
      <Menu playlistMenu={playlistMenu}>
        </Menu>
        <p>{mess}</p>
        <p>{mess2}</p>
        {/* <button
          onClick={() => dispatch(connectToMetamask())}
        >
          META
        </button> */}
        <Product>
          {/* <TNLAudiusPlaylist playlist={playlist}></TNLAudiusPlaylist> */}
        </Product>
        <Lbar></Lbar>
    </CONTENT>
  )
}
