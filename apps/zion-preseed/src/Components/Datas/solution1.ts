import { css } from "styled-components";
import { BRIGHT } from "../../js/colori";
import { combine, functionalities, manage, wrap } from "../../js/icone";
import { server } from "../../js/immagini";
import { Solution1 } from "../Pagine/Landing Page/Solution";

// TODO #18 portare styled components in /Elementi
const slug = "solution";
const id = 1;

const titoloTipo = 2;
const divId = slug + id + "-titolo";
const iconeTitolo = slug + id + "-icone-carosello";
const ofId = slug + id + "-background-overflow-area";
const resGridId = slug + id + "-responsive-grid-div";
const alt = "background_image";

const titoloChildren = "zNFT Technologies";
const icona1Message =
  "Rely on a trust-less protocol, built and owned by its users";
const icona2Message =
  "Invest in micro and macro cap artists, products, projects, studio, clubs, events ......";
const icona3Message =
  "Own, Share, Launch, Lend, Borrow physical/digital storage space, assets and services";
const icona4Message =
  "Add functionalities to NFT via plug-in gamified applications";

const icona1img = wrap;
const icona2img = combine;
const icona3img = manage;
const icona4img = functionalities;
const src = server;

// TODO controllare parametri uguali in solutions

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
const imgCss = css`
  position: relative;
  height: ${window.innerHeight * 2.4 + "px"};
  transform: scaleX(-1);
`;

const icone = [
  { icona: icona1img, dynamic: icona1Css, testo: icona1Message },
  { icona: icona2img, dynamic: icona2Css, testo: icona2Message },
  { icona: icona3img, dynamic: icona3Css, testo: icona3Message },
  { icona: icona4img, dynamic: icona4Css, testo: icona4Message },
];

const solution1 = new Solution1(
  {
    tipo: titoloTipo,
    children: titoloChildren,
    div: { id: divId, dynamic: titoloCss },
    sottoTitolo: undefined,
    type: "solution",
  },
  {
    titolo: iconeTitolo,
    icone,
    responsiveGridDiv: { id: resGridId, dynamic: respGridCss },
  },
  {
    overFlowArea: { id: ofId },
    filter: { id: undefined },
    img: { src: server, alt, dynamic: imgCss },
    type: "solution",
  }
);

export let solution1Data = solution1;
