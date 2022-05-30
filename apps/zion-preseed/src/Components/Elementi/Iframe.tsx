import styled from 'styled-components';
import { ResponsiveSizeYouTubeFrame } from '../Styled/Utils';

interface IIFrame {
  src?: any;
  dynamic?: any;
  frameborder?: string;
  youTubeFrameResponsiveValues?: any;
}

export let Iframe = styled.iframe<IIFrame>``;

export let YouTubeFrame = styled(Iframe)`
  grid-area: video;
  place-self: center;
  ${ResponsiveSizeYouTubeFrame}
  ${props => props.dynamic};
`;
