import { css } from '@zionrepack/styled-components';
import { BRIGHT, MIDBRIGHT } from '../../js/colori';
import { invest, own, owned } from '../../js/icone';
import { highway } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { IconeCarosello1 } from '../Compositori/IconeCarosello';
import { Solution1 } from '../Pagine/Landing Page/Solution';

// TODO #19 portare styled components in /Elementi
const slug = 'solution';
const id = 2;

const wrapId = slug + id + '-wrapper';
const titoloTipo = 2;
const titoloChildren = 'Own the Platform';
const divId = slug + id + '-titolo';
const iconeTitolo = slug + id + '-icone-carosello';
const ofId = slug + id + '-background-overflow-area';
const resGridId = slug + id + '-responsive-grid-div';
const alt = 'background_image';

const icona1Message =
  'Rely on a trust-less protocol, built and owned by its users';
const icona2Message =
  'Invest in micro and macro cap artists, products, projects, studio, clubs, events ......';
const icona3Message =
  'Own, Share, Launch, Lend, Borrow physical/digital storage space, assets and services';

const icona1img = own;
const icona2img = invest;
const icona3img = owned;
const src = highway;

const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${BRIGHT};
`;
const respGridCss = css`
  grid-area: contenuto;
`;
const gridDiv = css`
  margin: 0 0 1em 0;
`;
const cerchio = css`
  background-color: ${MIDBRIGHT};
`;
const p = css`
  color: ${BRIGHT};
`;
const icona1Css = css`
  height: 65%;
  place-self: center;
`;
const icona2Css = css`
  height: 52%;
  place-self: center;
`;
const icona3Css = css`
  top: 7%;
  height: 65%;
  place-self: center;
`;
const ofCss = css`
  grid-area: a;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  height: ${window.innerHeight * 1.8 + 'px'};
`;

const titoloDiv = new PitchDeck.Div(divId, titoloCss);
const titolo = new PitchDeck.Titolo(titoloTipo, titoloChildren, titoloDiv);
const icona = new PitchDeck.IconaSettings(gridDiv, cerchio, p);
const responsiveGridDiv = new PitchDeck.ResponsiveGrid(resGridId, respGridCss);
const icona1 = new PitchDeck.Icona(icona1img, icona1Css, icona1Message);
const icona2 = new PitchDeck.Icona(icona2img, icona2Css, icona2Message);
const icona3 = new PitchDeck.Icona(icona3img, icona3Css, icona3Message);
const iconeCarosello = new IconeCarosello1(
  iconeTitolo,
  icona,
  [icona1, icona2, icona3],
  responsiveGridDiv
);
const overFlowArea = new PitchDeck.Overflow(ofId, ofCss);
const filter = new PitchDeck.Filter(undefined, filCss);
const img = new PitchDeck.Img(src, alt, undefined, imgCss);
const background = new PitchDeck.Background(overFlowArea, filter, img);
const solution2 = new Solution1(titolo, iconeCarosello, background);

export let solution2Data = solution2;
