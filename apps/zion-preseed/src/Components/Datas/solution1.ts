import { css } from '@zionrepack/styled-components';
import { BRIGHT, MIDBRIGHT } from '../../js/colori';
import { combine, functionalities, manage, wrap } from '../../js/icone';
import { server } from '../../js/immagini';

export let solution1Data = {
  id: 1,
  wrapper: {
    id: 'solution1-wrapper',
    dynamic: css`
      max-height: ${window.innerHeight * 1.3 + 'px'};
      @media (max-width: 640px) {
        max-height: none;
        min-height: ${window.innerHeight * 1.3 + 'px'};
      }
    `,
  },
  page: {
    id: 'solution1-page',
    dynamic: css``,
  },
  titolo: {
    tipo: 2,
    children: 'zNFT Technology',
    div: {
      id: 'solution1-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        color: ${BRIGHT};
      `,
    },
  },
  iconeCarosello: {
    titolo: 'solution1-icone-carosello',
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
        icona: wrap,
        dynamic: css`
          height: 80%;
          place-self: center;
        `,
        testo: 'Wrap any ERC20,ERC721 or ERC1155 into a zNFT',
      },
      {
        icona: combine,
        dynamic: css`
          height: 80%;
          place-self: center;
        `,
        testo: 'Combine NFTs into zNFT and enhance creativity',
      },
      {
        icona: manage,
        dynamic: css`
          height: 80%;
          place-self: center;
        `,
        testo: 'Manage your Profile, Products, Projects with DAO capabilities',
      },
      {
        icona: functionalities,
        dynamic: css`
          height: 65%;
          place-self: center;
        `,
        testo: 'Add functionalities to NFT via plug-in gamified applications',
      },
    ],
  },
  background: {
    overFlowArea: {
      id: 'solution1-background-overflow-area',
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
      src: server,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        height: ${window.innerHeight * 2.4 + 'px'};
        transform: scaleX(-1);
      `,
    },
  },
};
