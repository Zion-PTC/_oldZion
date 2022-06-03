import styled from "styled-components"
import { useSelector } from "react-redux"

import Product from "../../Products/Product"
import Lbar from "../Content/Lbar"
import Menu from "../Content/Menu"

const ContainerArea = styled.div`
  position: relative;
  top: ${props => props.top};
  height: ${props => props.height};
  overflow: auto;
  grid-area: container;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props => props.gridTR};
  grid-template-areas: "menu" "productarea";
  transition: ease 0.5s;
`

export default function Container() {
  const stateObj = useSelector(state => {
    return {
      hidden: state.navBarMenu.hidden,
      menuBarH: state.navBarMenu.menuBarH,
      isEth: state.ethereum.isEth,
      isConnected: state.ethereum.isConnected,
      playlist: state.audioPlayer.playlist,
      top: state.container.top
    }
  })
  let { hidden:menuHidden, menuBarH, top } = stateObj
  const contentHeight = menuHidden ? 'calc(100% + ' + menuBarH + 'px)' : '100%'
  const contentGridTR = 'auto 1fr'
  // const top = menuHidden ? (-menuBarH + 'px') : ('0px')

  return (
    <ContainerArea top={top} gridTR={contentGridTR} height={contentHeight} id='container'>
      <Menu/>
      <Product/>
      <Lbar/>
    </ContainerArea>
  )
}
