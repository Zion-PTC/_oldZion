import { css } from '@zionrepack/styled-components';
import { salvadanaio } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';

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
  height: ${window.innerHeight * 1.5 + 'px'};
  transform: scaleX(-1);
`;

const overFlId = 'product5-background-overflow-area';
const filId = 'product5-filter';
const imgId = 'product5-img';
const alt = 'background_image';
const investors = 'product-investors';
const message =
  'Investors will access micro-cap targets, which can bring differentiation to their portfolio.';

const overFlow = new PitchDeck.Overflow(overFlId, ofCss);
const filter = new PitchDeck.Filter(filId, filCss);
const image = new PitchDeck.Img(salvadanaio, alt, imgId, imgCss);
const bkg = new PitchDeck.Background(overFlow, filter, image);
const prodWrap = new PitchDeck.Wrapper(investors, undefined, 2);
const p5Datas = new PitchDeck.ProductDatas(2, prodWrap, bkg, message);
export const product5Data = p5Datas;
