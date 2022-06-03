import { css } from "styled-components";
import { BRIGHT } from "../../js/colori";
import { vinyl } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { ProductDatas } from "../Pagine/Landing Page/Product";

// TODO #14 portare styled components in /Elementi
const divCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${BRIGHT};
`;
const ofCss = css`
  grid-area: a;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  top: -30%;
  left: -20%;
  height: ${window.innerHeight * 2 + "px"};
  transform: scaleX(-1);
`;

const product = "product2";
const overFlId = product + "-background-overflow-area";
const filId = product + "-filter";
const divId = "solution2-titolo";
const imgId = product + "-image";
const alt = product + "-background-image";
const message = "We will provide users with:";
const titolo = "Evolving UI/UX";
const sub_sub_list = ["Sandbox", "Decentraland", "Netvrk", "Meta"];
const sub_list = [
  "Concrete Jungle : Social Network like, 2d standard UI",
  "Exodus : 2d/3d Zelda/Fat Princess like UI",
  "Promised Land : 3d Interfaces for several Metaverses",
  sub_sub_list,
];
const list = [
  "base protocol of smart contracts",
  "standardized database fields",
  "evolving UI/UX",
  sub_list,
];
const overFlow = new Overflow(overFlId, ofCss);
const filter = new Filter(filId, filCss);
const bkg = new Background(overFlow, filter, { src: vinyl, dynamic: imgCss });
const p2Page = css``;
const testo = new PitchDeck.Testo(2, BRIGHT);
const p2Datas = new ProductDatas(
  1,
  bkg,
  message,
  {
    tipo: 2,
    children: titolo,
    div: { id: divId, dynamic: divCss },
    sottoTitolo: undefined,
    type: "product",
  },
  p2Page,
  testo,
  list
);

export let product2Data = p2Datas;
