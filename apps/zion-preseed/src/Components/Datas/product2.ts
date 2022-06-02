import { css } from '@zionrepack/styled-components';
import { BRIGHT } from '../../js/colori';
import { vinyl } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { ProductDatas } from '../Pagine/Landing Page/Product';

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
  height: ${window.innerHeight * 2 + 'px'};
  transform: scaleX(-1);
`;

const product = 'product2';
const overFlId = product + '-background-overflow-area';
const filId = product + '-filter';
const divId = 'solution2-titolo';
const imgId = product + '-image';
const alt = product + '-background-image';
const prodExpl = 'product-explanation';
const message = 'We will provide users with:';
const titolo = 'Evolving UI/UX';
const sub_sub_list = ['Sandbox', 'Decentraland', 'Netvrk', 'Meta'];
const sub_list = [
  'Concrete Jungle : Social Network like, 2d standard UI',
  'Exodus : 2d/3d Zelda/Fat Princess like UI',
  'Promised Land : 3d Interfaces for several Metaverses',
  sub_sub_list,
];
const list = [
  'base protocol of smart contracts',
  'standardized database fields',
  'evolving UI/UX',
  sub_list,
];
const overFlow = new PitchDeck.Overflow(overFlId, ofCss);
const filter = new PitchDeck.Filter(filId, filCss);
const image = new PitchDeck.Img(vinyl, alt, imgId, imgCss);
const bkg = new PitchDeck.Background(overFlow, filter, image);
const prodWrap = new PitchDeck.Wrapper(prodExpl, undefined, 1);
const p2Div = new PitchDeck.Div(divId, divCss);
const p2Titolo = new PitchDeck.Titolo(2, titolo, p2Div);
const p2Page = css``;
const testo = new PitchDeck.Testo(2, BRIGHT);
const p2Datas = new ProductDatas(
  1,
  prodWrap,
  bkg,
  message,
  p2Titolo,
  p2Page,
  testo,
  list
);

export let product2Data = p2Datas;
