import { css } from '@zionrepack/styled-components';
import { BRIGHT } from '../../js/colori';
import { homeStudio } from '../../js/immagini';
// TODO usare classi

export let problemData = {
  wrapper: {
    id: 'problem-wrapper',
    dynamic: css`
      max-height: ${window.innerHeight + 'px'};
    `,
  },
  page: {
    id: 'problem-page',
    dynamic: css`
      grid-template-rows: 1fr 2fr 8fr;
      grid-template-areas: 'background background background' '. titolo . ' '. contenuto . ';
    `,
  },
  titolo: {
    tipo: 2,
    children: "'the Music Industry is broken'",
    div: {
      id: 'problem-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        place-self: center;
        color: ${BRIGHT};
      `,
    },
  },
  ul: {
    dynamic: css`
      grid-area: contenuto;
    `,
  },
  li: {
    dynamic: css`
      color: ${BRIGHT};
    `,
    pars: [
      'The Industry is shady and rough for artists',
      'Jeopardizing tech tools make it complex to manage activities',
      'Social platforms do not provide the necessary security',
    ],
  },
  background: {
    overFlowArea: {
      id: 'problem-background-overflow-area',
      dynamic: css`
        grid-area: a;
      `,
    },
    img: {
      src: homeStudio,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        @media (orientation: landscape) {
          width: 180%;
          top: -30%;
          left: -50%;
        }
        @media (orientation: portrait) {
          height: 100%;
          left: -30%;
        }
        transform: scaleX(-1);
      `,
    },
    filter: {
      dynamic: css`
        background-color: #010814c1;
      `,
    },
  },
};
