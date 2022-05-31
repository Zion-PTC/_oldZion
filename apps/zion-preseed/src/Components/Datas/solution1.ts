import { css } from '@zionrepack/styled-components';
import { BRIGHT, MIDBRIGHT } from '../../js/colori';
import { combine, functionalities, manage, wrap } from '../../js/icone';
import { server } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';

const slug = 'solution';
const id = 1;

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
const icona4Message =
  'Add functionalities to NFT via plug-in gamified applications';

const icona1img = wrap;
const icona2img = combine;
const icona3img = manage;
const icona4img = functionalities;
const src = server;

// TODO controllare parametri uguali in solutions

// TODO questo parametro è uguale in entrambi
const wrapCss = css`
  max-height: ${window.innerHeight * 1.3 + 'px'};
  @media (max-width: 640px) {
    max-height: none;
    min-height: ${window.innerHeight * 1.3 + 'px'};
  }
`;
// TODO questo parametro è uguale in entrambi
const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${BRIGHT};
`;
// TODO questo parametro è uguale in entrambi
const respGridCss = css`
  grid-area: contenuto;
`;
// TODO questo parametro è uguale in entrambi
const gridDiv = css`
  margin: 0 0 1em 0;
`;
// TODO questo parametro è uguale in entrambi
const cerchio = css`
  background-color: ${MIDBRIGHT};
`;
// TODO questo parametro è uguale in entrambi
const p = css`
  color: ${BRIGHT};
`;
// TODO questo parametro è uguale in entrambi
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
// TODO questo parametro è uguale in entrambi
const icona4Css = css`
  height: 65%;
  place-self: center;
`;
// TODO questo parametro è uguale in entrambi
const ofCss = css`
  grid-area: a;
`;
// TODO questo parametro è uguale in entrambi
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  height: ${window.innerHeight * 2.4 + 'px'};
  transform: scaleX(-1);
`;

const wrapper = new PitchDeck.Wrapper(wrapId, undefined, undefined, wrapCss);
const titoloDiv = new PitchDeck.Div(divId, titoloCss);
const titolo = new PitchDeck.Titolo(titoloTipo, titoloChildren, titoloDiv);
const icona = new PitchDeck.IconaSettings(gridDiv, cerchio, p);
const responsiveGridDiv = new PitchDeck.ResponsiveGrid(resGridId, respGridCss);
const icona1 = new PitchDeck.Icona(icona1img, icona1Css, icona1Message);
const icona2 = new PitchDeck.Icona(icona2img, icona2Css, icona2Message);
const icona3 = new PitchDeck.Icona(icona3img, icona3Css, icona3Message);
const icona4 = new PitchDeck.Icona(icona4img, icona4Css, icona4Message);
const iconeCarosello = new PitchDeck.IconeCarosello(
  iconeTitolo,
  icona,
  responsiveGridDiv,
  [icona1, icona2, icona3, icona4]
);
const overFlowArea = new PitchDeck.Overflow(ofId, ofCss);
const filter = new PitchDeck.Filter(undefined, filCss);
const img = new PitchDeck.Img(src, alt, undefined, imgCss);
const background = new PitchDeck.Background(overFlowArea, filter, img);
const solution1 = new PitchDeck.Solution(
  slug,
  id,
  wrapper,
  titolo,
  iconeCarosello,
  background
);

export let solution1Data = solution1;
