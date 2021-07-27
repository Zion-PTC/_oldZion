import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import Product from "../../Products/Product"
import Lbar from "./Lbar"
import Menu from "./Menu"
import { database } from "../../../Database/users/database"
import { connectToMetamask } from "../../../features/ethereum/ethereumSlice";
import FakeUsersCreation from "../../FakeUsersCreation"
import TNLAudiusPlaylist from "../../Products/TNLAudiusPlaylist"

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
  let playlist = useSelector(state => state.audioPlayer.playlist)
  const accounts = database.accounts
  const contentHeight = menuHidden ? 'calc(100% + ' + menuBarH + 'px)' : '100%'
  const contentGridTR = 'auto 1fr'
  const top = menuHidden ? (-menuBarH + 'px') : ('0px')
  const playlistMenu = accounts[0].menus[0].subMenus[0].subMenus
  let checkMess = e => {
    let result
    switch (e) {
      case true: result = 'yes eth'; break;
      case false: result = 'no eth'; break;
      case null: result = 'null'; break;
    }
    return result
  }
  let checkMess2 = e => {
    let result
    switch (e) {
      case true: result = 'connected'; break;
      case false: result = 'not connected'; break;
      case null: result = 'null'; break;
    }
    return result
  }
  let mess = checkMess(isEth)
  let mess2 = checkMess2(isConnected)
  const dispatch = useDispatch()

  return (
    <CONTENT top={top} gridTR={contentGridTR} height={contentHeight} id='content'>

      {/* <FakeUsersCreation></FakeUsersCreation> */}
      <Menu playlistMenu={playlistMenu}>
      </Menu>
      <p>{mess}</p>
      <p>{mess2}</p>
      <button
          onClick={() => dispatch(connectToMetamask())}
        >
          META
        </button>
      <Product>
        <TNLAudiusPlaylist playlist={playlist}></TNLAudiusPlaylist>
      </Product>
      <Lbar>

      </Lbar>
    </CONTENT>
  )
}
