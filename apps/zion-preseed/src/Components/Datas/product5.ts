import { css } from "styled-components";
import { salvadanaio } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { ProductDatas } from "../Pagine/Landing Page/Product";

// TODO #17 portare styled components in /Elementi
const ofCss = css`
  grid-area: b;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  top: -25%;
  left: -20%;
  height: ${window.innerHeight * 1.5 + "px"};
  transform: scaleX(-1);
`;

const overFlId = "product5-background-overflow-area";
const filId = "product5-filter";
const imgId = "product5-img";
const alt = "background_image";
const message =
  "Investors will access micro-cap targets, which can bring differentiation to their portfolio.";

const overFlow = new Overflow(overFlId, ofCss);
const filter = new Filter(filId, filCss);
const bkg = new Background(overFlow, filter, {
  src: salvadanaio,
  alt,
  id: imgId,
  dynamic: imgCss,
});
const p5Datas = new ProductDatas(2, bkg, message);
export const product5Data = p5Datas;
