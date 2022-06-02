import { css } from '@zionrepack/styled-components';
import { crowdsurfin } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { ProductDatas } from '../Pagine/Landing Page/Product';

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
  height: ${window.innerHeight * 1.8 + 'px'};
  transform: scaleX(-1);
`;

const product = 'product4';
const overFlId = product + '-background-overflow-area';
const filId = product + '-filter';
const imgId = product + '-image';
const alt = product + '-background-image';
const prodFans = 'product-fans';
const message = 'Fans will interact with creators in never-seen ways.';

const overFlow = new PitchDeck.Overflow(overFlId, ofCss);
const filter = new PitchDeck.Filter(filId, filCss);
const image = new PitchDeck.Img(crowdsurfin, alt, imgId, imgCss);
const bkg = new PitchDeck.Background(overFlow, filter, image);
const prodWrap = new PitchDeck.Wrapper(prodFans, undefined, 2);
const p4Datas = new ProductDatas(2, prodWrap, bkg, message);

export let product4Data = p4Datas;
