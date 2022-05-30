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
const overFlow = new PitchDeck.Overflow(overFlId, ofCss);
const filId = 'product5-filter';
const filter = new PitchDeck.Filter(filId, filCss);
const imgId = 'product5-img';
const alt = 'background_image';
const image = new PitchDeck.Img(salvadanaio, alt, imgId, imgCss);
const bkg = new PitchDeck.Background(overFlow, filter, image);

export let product5Data = {
  tipo: 2,
  productWrapper: {
    id: 'product-investors',
    tipo: 2,
  },
  background: {
    overFlowArea: {
      id: 'product5-background-overflow-area',
      dynamic: css`
        grid-area: b;
      `,
    },
    filter: {
      dynamic: css`
        background-color: #010814c1;
      `,
    },
    img: {
      src: salvadanaio,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        top: -25%;
        left: -20%;
        height: ${window.innerHeight * 1.5 + 'px'};
        transform: scaleX(-1);
      `,
    },
  },
  children:
    'Investors will access micro-cap targets, which can bring differentiation to their portfolio.',
};
