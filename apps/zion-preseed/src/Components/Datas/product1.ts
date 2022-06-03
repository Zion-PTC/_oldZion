import { css } from "styled-components";
import { BRIGHT } from "../../js/colori";
import { teamwork } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { ProductDatas } from "../Pagine/Landing Page/Product";

// TODO #13 portare styled components in /Elementi
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
  top: -50%;
  height: ${window.innerHeight * 2.3 + "px"};
  transform: rotate(90deg);
`;

const product = "product1";
const overFlId = product + "-background-overflow-area";
const filId = product + "-filter";
const divId = "solution1-titolo";
const imgId = product + "-image";
const alt = product + "-background-image";
const titolo = "Product";
const overFlow = new Overflow(overFlId, ofCss);
const filter = new Filter(filId, filCss);
const bkg = new Background(overFlow, filter, {
  src: teamwork,
  dynamic: imgCss,
});
const p1Page = css``;
const testo = new PitchDeck.Testo(4);
const p1Datas = new ProductDatas(
  1,
  bkg,
  undefined,
  {
    tipo: 2,
    children: titolo,
    div: { id: divId, dynamic: divCss },
    sottoTitolo: undefined,
    type: "product",
  },
  p1Page,
  testo
);

export let product1Data = p1Datas;
