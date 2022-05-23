import styled from "styled-components"
import { ResponsiveSizeYouTubeFrame } from "../Styled/Utils"

export let Iframe = styled.iframe`

`

export let YouTubeFrame = styled(Iframe)`
  grid-area: video;
  place-self: center;
  ${ResponsiveSizeYouTubeFrame}
  ${props => props.dynamic};
`