// File contente delle utility css per styled components
// Questo file contiene solo "css" di styled components
// Gli elementi predefiniti si trovano nella cartella Components/Elementi

import { css } from "styled-components";
import { calculateDisplayRatio } from "../../js/utils";
import { media } from "../../js/responsiveness"
import { BLUE, GREEN, ORANGE, RED, VIOLET, YELLOW } from "../../js/colori";

export let checkColor = (props) => {
  let color
  
  const red = css`background-color:${RED};`
  const orange = css`background-color:${ORANGE};`
  const yellow = css`background-color:${YELLOW};`
  const green = css`background-color:${GREEN};`
  const blue = css`background-color:${BLUE};`
  const violet = css`background-color:${VIOLET};`
  
  if (props.red) {color=red}
  else if (props.orange) {color=orange}
  else if (props.green) {color=green}
  else if (props.yellow) {color=yellow}
  else if (props.violet) {color=violet}
  else {color=blue}
  
  return color
}

export let defineBackgroundImgSize = css`
  ${props => {
    let ratio = window.addEventListener("resize",calculateDisplayRatio)
    console.log(ratio);
    
    let size
    if (ratio >= 1) { size = css`
      width:"";
      height:100%;
    `}
    else { size = css`
      width:100%;
      height:"";
    `}
    return size
  }}
`

export let InitialStyle = css`
  border: 0;
  margin: 0;
  padding: 0;
`

export let ResponsiveGrid = css`
  ${media.tabletLandscape} {
    grid-template-columns: 1fr;
  }
  ${media.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
  }
  ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ResponsiveSize = css`
  ${media.phone} {
    width: 250px;
    height: 250px;
  }
  ${media.tabletPortrait} {
    width: 260px;
    height: 260px;
  }
  ${media.tabletLandscape} {
    width: 300px;
    height: 300px;
  }
  ${media.desktop} {
    width: 314px;
    height: 314px;
  }
`

export const ResponsiveSizeYouTubeFrame = css`
  width: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.mobile.width :
    ""
  }px;
  height: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.mobile.height :
    ""
  }px;
  ${media.tabletPortrait} {
    width: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.portrait.width :
    ""
    }px;
  height: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.portrait.height :
    ""
  }px;
  ${media.desktop} {
    width: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.desktop.width :
    ""
    }px;
  height: ${props =>
    props.youTubeFrameResponsiveValues ?
    props.youTubeFrameResponsiveValues.desktop.height :
    ""
  }px;
`