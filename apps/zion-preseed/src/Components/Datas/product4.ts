import { css } from "styled-components";
import { crowdsurfin } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { ProductDatas } from "../Pagine/Landing Page/Product";

// TODO #16 portare styled components in /Elementi
const ofCss = css`
  grid-area: b;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  top: -10%;
  left: -20%;
  height: ${window.innerHeight * 1.8 + "px"};
  transform: scaleX(-1);
`;

const product = "product4";
const overFlId = product + "-background-overflow-area";
const filId = product + "-filter";
const imgId = product + "-image";
const alt = product + "-background-image";
const message = "Fans will interact with creators in never-seen ways.";

const overFlow = new Overflow(overFlId, ofCss);
const filter = new Filter(filId, filCss);
const bkg = new Background(overFlow, filter, {
  src: crowdsurfin,
  alt,
  id: imgId,
  dynamic: imgCss,
});
const p4Datas = new ProductDatas(2, bkg, message);

export let product4Data = p4Datas;
