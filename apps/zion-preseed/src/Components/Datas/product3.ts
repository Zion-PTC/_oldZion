import { css } from "styled-components";
import { streaming } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { ProductDatas } from "../Pagine/Landing Page/Product";

// TODO #15 portare styled components in /Elementi
const ofCss = css`
  grid-area: b;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  height: ${window.innerHeight * 2.4 + "px"};
`;

const product = "product3";
const overFlId = product + "-background-overflow-area";
const filId = product + "-filter";
const imgId = product + "-image";
const alt = product + "-background-image";
const message =
  "Creators, Teams and their communities will discover new simple ways to manage and distribute their projects.";
const overFlow = new Overflow(overFlId, ofCss);
const filter = new Filter(filId, filCss);
const bkg = new Background(overFlow, filter, {
  src: streaming,
  alt,
  id: imgId,
  dynamic: imgCss,
});
const p3Datas = new ProductDatas(2, bkg, message);

export let product3Data = p3Datas;
