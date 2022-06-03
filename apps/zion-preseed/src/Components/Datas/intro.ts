import { css } from '@zionrepack/styled-components';
import { DARK } from '../../js/colori';
import { calculateYouTubeResponsiveValues } from '../../js/responsiveness';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { Titolo } from '../Compositori/Titolo';
import { Intro } from '../Pagine/Landing Page/Intro';

// TODO #10 portare styled components in /Elementi
// const pageCss = css`
//   background-color: ${BRIGHT};
//   ${media.tabletPortrait} {
//     grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
//   }
//   ${media.desktop} {
//     grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
//   }
//   grid-template-rows: 0.5fr 1.2fr auto 1.5fr;
//   grid-template-areas: '. . .' '. titolo .' '. video .' '. contenuto .';
// `;
const divCss = css`
  grid-area: titolo;
  color: ${DARK};
`;

// const id = 1;
const slug = 'intro';
// const wrapId = slug + '-wrapper';
// const pageId = slug + '-page';
const divId = slug + '-titolo';
const testoGrid = 'contenuto';

const message =
  'We build a decentralized protocol with tools for the Music Industry';
const par1 =
  'At ZION we build assuming a simple concept: everything comes from an idea and evolves into a concrete project following these steps:';
const list = [
  'Conception => Creators',
  'Financing => Investors',
  'Building => Team',
  'Networking => DAO and Community',
];
const par2 =
  'Therefore we are building a technological decentralized protocol to enable micro and macro cap organizations to leverage the power of DLT and de-fi.';
const url = 'https://www.youtube.com/embed/wPOfEfFPCK8';
const youTubeFrameResponsiveValues = calculateYouTubeResponsiveValues(200);

// const wrapper = new PitchDeck.Wrapper(wrapId);
// const page = new PitchDeck.Page(pageId, pageCss);
const div = new PitchDeck.Div(divId, divCss);
const titolo = new Titolo(2, message, div, undefined, 'intro');
const youtube = new PitchDeck.YouTube(url, youTubeFrameResponsiveValues);
const testo = new PitchDeck.Testo(
  3,
  undefined,
  DARK,
  testoGrid,
  par1,
  list,
  par2
);
const intro = new Intro(titolo, testo, youtube);

export let introData = intro;
