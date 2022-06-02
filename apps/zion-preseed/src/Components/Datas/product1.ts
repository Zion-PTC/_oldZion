import { css } from '@zionrepack/styled-components';
import { BRIGHT } from '../../js/colori';
import { teamwork } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { ProductDatas } from '../Pagine/Landing Page/Product';

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
  height: ${window.innerHeight * 2.3 + 'px'};
  transform: rotate(90deg);
`;

const product = 'product1';
const overFlId = product + '-background-overflow-area';
const filId = product + '-filter';
const divId = 'solution1-titolo';
const imgId = product + '-image';
const alt = product + '-background-image';
const prodExpl = 'product-cover';
const titolo = 'Product';
const overFlow = new PitchDeck.Overflow(overFlId, ofCss);
const filter = new PitchDeck.Filter(filId, filCss);
const image = new PitchDeck.Img(teamwork, alt, imgId, imgCss);
const bkg = new PitchDeck.Background(overFlow, filter, image);
const prodWrap = new PitchDeck.Wrapper(prodExpl, undefined, 1);
const p1Div = new PitchDeck.Div(divId, divCss);
const p1Titolo = new PitchDeck.Titolo(2, titolo, p1Div);
const p1Page = css``;
const testo = new PitchDeck.Testo(4);
const p1Datas = new ProductDatas(
  1,
  prodWrap,
  bkg,
  undefined,
  p1Titolo,
  p1Page,
  testo
);

export let product1Data = p1Datas;
