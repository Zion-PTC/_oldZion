import { css } from '@zionrepack/styled-components';
import { BRIGHT, MIDBRIGHT } from '../../js/colori';
import { invest, own, owned } from '../../js/icone';
import { highway } from '../../js/immagini';
// TODO usare classi

export let solution2Data = {
  slug: 'solution',
  id: 2,
  wrapper: {
    id: 'solution2-wrapper',
    dynamic: css`
      max-height: ${window.innerHeight * 1.3 + 'px'};
      @media (max-width: 640px) {
        max-height: none;
        min-height: ${window.innerHeight * 1.3 + 'px'};
      }
    `,
  },
  titolo: {
    tipo: 2,
    children: 'Own the Platform',
    div: {
      id: 'solution2-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        color: ${BRIGHT};
      `,
    },
  },
  iconeCarosello: {
    titolo: 'solution2-icone-carosello',
    icona: {
      gridDiv: {
        dynamic: css`
          margin: 0 0 1em 0;
        `,
      },
      cerchio: {
        dynamic: css`
          background-color: ${MIDBRIGHT};
        `,
      },
      p: {
        dynamic: css`
          color: ${BRIGHT};
        `,
      },
    },
    responsiveGridDiv: {
      id: 'solution1-responsive-grid-div',
      dynamic: css`
        grid-area: contenuto;
      `,
    },
    icone: [
      {
        icona: own,
        dynamic: css`
          height: 65%;
          place-self: center;
        `,
        testo: 'Rely on a trust-less protocol, built and owned by its users',
      },
      {
        icona: invest,
        dynamic: css`
          height: 52%;
          place-self: center;
        `,
        testo:
          'Invest in micro and macro cap artists, products, projects, studio, clubs, events ......',
      },
      {
        icona: owned,
        dynamic: css`
          top: 7%;
          height: 65%;
          place-self: center;
        `,
        testo:
          'Own, Share, Launch, Lend, Borrow physical/digital storage space, assets and services',
      },
    ],
  },
  background: {
    overFlowArea: {
      id: 'solution2-background-overflow-area',
      dynamic: css`
        grid-area: a;
      `,
    },
    filter: {
      dynamic: css`
        background-color: #010814c1;
      `,
    },
    img: {
      src: highway,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        height: ${window.innerHeight * 1.8 + 'px'};
      `,
    },
  },
};
