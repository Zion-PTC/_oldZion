import { css } from "styled-components";
import { BRIGHT } from "../../js/colori";
import { invest, own, owned } from "../../js/icone";
import { highway } from "../../js/immagini";
import { Solution1 } from "../Pagine/Landing Page/Solution";

// TODO #19 portare styled components in /Elementi
const slug = "solution";
const id = 2;

// const wrapId = slug + id + '-wrapper';
const titoloTipo = 2;
const titoloChildren = "Own the Platform";
const divId = slug + id + "-titolo";
const iconeTitolo = slug + id + "-icone-carosello";
const ofId = slug + id + "-background-overflow-area";
const resGridId = slug + id + "-responsive-grid-div";
const alt = "background_image";

const icona1Message =
  "Rely on a trust-less protocol, built and owned by its users";
const icona2Message =
  "Invest in micro and macro cap artists, products, projects, studio, clubs, events ......";
const icona3Message =
  "Own, Share, Launch, Lend, Borrow physical/digital storage space, assets and services";

const icona1img: string = own;
const icona2img: string = invest;
const icona3img: string = owned;

const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${BRIGHT};
`;
const respGridCss = css`
  grid-area: contenuto;
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
const imgCss = css`
  position: relative;
  height: ${window.innerHeight * 1.8 + "px"};
`;

const icone = [
  { icona: icona1img, dynamic: icona1Css, testo: icona1Message },
  { icona: icona2img, dynamic: icona2Css, testo: icona2Message },
  { icona: icona3img, dynamic: icona3Css, testo: icona3Message },
];
const solution2 = new Solution1(
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
    img: { src: highway, alt, dynamic: imgCss },
    type: "solution",
  }
);

export let solution2Data = solution2;
