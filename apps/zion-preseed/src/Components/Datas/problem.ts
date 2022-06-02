import { css } from '@zionrepack/styled-components';
import { BRIGHT } from '../../js/colori';
import { homeStudio } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { Problem } from '../Pagine/Landing Page/Problem';

// TODO #12 portare styled components in /Elementi
const slug = 'prolem';
const id = 1;
const prefix = slug + id;
const wrapId = prefix + '-wrapper';
const pageId = prefix + '-page';
const divId = prefix + '-titolo';
const ofId = prefix + '-background-overflow-area';

const titoloMessage = "'the Music Industry is broken'";
const liPars = [
  'The Industry is shady and rough for artists',
  'Jeopardizing tech tools make it complex to manage activities',
  'Social platforms do not provide the necessary security',
];
const alt = 'background_image';

const wrapCss = css`
  max-height: ${window.innerHeight + 'px'};
`;
const pageCss = css`
  grid-template-rows: 1fr 2fr 8fr;
  grid-template-areas: 'background background background' '. titolo . ' '. contenuto . ';
`;
const titDivCss = css`
  width: 100%;
  grid-area: titolo;
  place-self: center;
  color: ${BRIGHT};
`;
const ulCss = css`
  grid-area: contenuto;
`;
const liCss = css`
  color: ${BRIGHT};
`;
const ofCss = css`
  grid-area: a;
`;
const imgCss = css`
  position: relative;
  @media (orientation: landscape) {
    width: 180%;
    top: -30%;
    left: -50%;
  }
  @media (orientation: portrait) {
    height: 100%;
    left: -30%;
  }
  transform: scaleX(-1);
`;
const filCss = css`
  background-color: #010814c1;
`;

const wrapper = new PitchDeck.Wrapper(wrapId, undefined, undefined, wrapCss);
const page = new PitchDeck.Page(pageId, pageCss);
const div = new PitchDeck.Div(divId, titDivCss);
const titolo = new PitchDeck.Titolo(2, titoloMessage, div);
const ul = new PitchDeck.Dynamic(ulCss);
const li = new PitchDeck.Li(liCss, liPars);
const overFlowArea = new PitchDeck.Overflow(ofId, ofCss);
const img = new PitchDeck.Img(homeStudio, alt, undefined, imgCss);
const filter = new PitchDeck.Filter(undefined, filCss);
const background = new PitchDeck.Background(overFlowArea, filter, img);
const problem = new Problem(titolo, ul, li, background);

export let problemData = problem;
