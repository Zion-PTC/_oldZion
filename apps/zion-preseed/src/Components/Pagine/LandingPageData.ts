import { css } from 'styled-components';
import { BRIGHT, DARK, MID, MIDBRIGHT } from '../../js/colori';
import {
  combine,
  connection,
  ease,
  functionalities,
  invest,
  manage,
  own,
  owned,
  security,
  wrap,
} from '../../js/icone';
import {
  coverPicture,
  crowdsurfin,
  highway,
  homeStudio,
  salvadanaio,
  server,
  streaming,
  teamwork,
  tickets,
  vinyl,
} from '../../js/immagini';
import { LOGOZION } from '../../js/loghi';
import {
  calculateYouTubeResponsiveValues,
  media,
} from '../../js/responsiveness';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { P } from '../Elementi/P';

export let landingPageData = {
  pageBkg: BRIGHT,
};

export let introData = {
  wrapper: {
    id: 'intro-wrapper',
  },
  page: {
    id: 'intro-page',
    dynamic: css`
      background-color: ${BRIGHT};
      ${media.tabletPortrait} {
        grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
      }
      ${media.desktop} {
        grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
      }
      grid-template-rows: 0.5fr 1.2fr auto 1.5fr;
      grid-template-areas: '. . .' '. titolo .' '. video .' '. contenuto .';
    `,
  },
  titolo: {
    tipo: 2,
    children:
      'We build a decentralized protocol with tools for the Music Industry',
    div: {
      id: 'intro-titolo',
      dynamic: css`
        grid-area: titolo;
        color: ${DARK};
      `,
    },
  },
  testo: {
    tipo: 3,
    testoColore: DARK,
    gridArea: 'contenuto',
    par1: 'At ZION we build assuming a simple concept: everything comes from an idea and evolves into a concrete project following these steps:',
    list: [
      'Conception => Creators',
      'Financing => Investors',
      'Building => Team',
      'Networking => DAO and Community',
    ],
    par2: 'Therefore we are building a technological decentralized protocol to enable micro and macro cap organizations to leverage the power of DLT and de-fi.',
  },
  youTube: {
    url: 'https://www.youtube.com/embed/wPOfEfFPCK8',
    youTubeFrameResponsiveValues: calculateYouTubeResponsiveValues(200),
  },
};
////////////////////////////////////////
export let coverData = {
  wrapper: {
    id: 'cover-wrapper',
  },
  page: {
    id: 'cover',
    dynamic: css`
      grid-template-rows: 1fr 5fr 3fr;
      grid-template-areas: '. . .' '. logo .' '. titolo .';
    `,
  },
  titolo: {
    tipo: 3,
    children: 'ZION',
    div: {
      id: 'cover-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        place-self: top;
        color: ${BRIGHT};
      `,
    },
    sottoTitolo: 'Decentralized Protocol for the Music Industry',
  },
  cornice: {
    id: 'logo',
    backgroundColor: MID,
    gridArea: 'logo',
  },
  img: {
    src: LOGOZION,
    alt: 'logoZion',
  },
  background: {
    overFlowArea: {
      id: 'cover-background-overflow-area',
      dynamic: css`
        grid-area: a;
      `,
    },
    filter: {
      dynamic: css`
        background-color: #0643a4d1;
      `,
    },
    img: {
      src: coverPicture,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        height: ${window.innerHeight * 1.2 + 'px'};
      `,
    },
  },
};
/////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////
export let missionData = {
  page: {
    id: '',
    dynamic: css``,
  },
  titolo: {
    tipo: 1,
    children: 'Mission',
    div: {
      id: 'mission-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        color: ${DARK};
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
          color: ${DARK};
          margin: 10px 0 30px 0;
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
        icona: ease,
        dynamic: css`
          height: 80%;
          place-self: center;
        `,
        testo: 'Ease of Use',
      },
      {
        icona: security,
        dynamic: css`
          top: -5%;
          height: 80%;
          place-self: center;
        `,
        testo: 'Security and Privacy',
      },
      {
        icona: connection,
        dynamic: css`
          height: 75%;
          place-self: center;
        `,
        testo: 'Connection',
      },
    ],
    testi: ['Ease of Use', 'Security and Privacy', 'Connection'],
  },
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let product1Data = {
  tipo: 1,
  productWrapper: {
    id: 'product-cover',
    tipo: 1,
  },
  productPage: {
    dynamic: css``,
  },
  testo: {
    tipo: 4,
  },
  titolo: {
    tipo: 2,
    children: 'Product',
    div: {
      id: 'solution2-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        color: ${BRIGHT};
      `,
    },
  },
  background: {
    overFlowArea: {
      id: 'product1-background-overflow-area',
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
      src: teamwork,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        top: -50%;
        height: ${window.innerHeight * 2.3 + 'px'};
        transform: rotate(90deg);
      `,
    },
  },
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let product2Data = {
  tipo: 1,
  productWrapper: {
    id: 'product-explanation',
    tipo: 1,
  },
  productPage: {
    dynamic: css``,
  },
  testo: {
    tipo: 2,
    color: BRIGHT,
  },
  titolo: {
    tipo: 2,
    children: 'Evolving UI/UX',
    div: {
      id: 'solution2-titolo',
      dynamic: css`
        width: 100%;
        grid-area: titolo;
        color: ${BRIGHT};
      `,
    },
  },
  background: {
    overFlowArea: {
      id: 'product2-background-overflow-area',
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
      src: vinyl,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        top: -30%;
        left: -20%;
        height: ${window.innerHeight * 2 + 'px'};
        transform: scaleX(-1);
      `,
    },
  },
  children: 'We will provide users with:',
  list: [
    'base protocol of smart contracts',
    'standardized database fields',
    'evolving UI/UX',
    [
      'Concrete Jungle : Social Network like, 2d standard UI',
      'Exodus : 2d/3d Zelda/Fat Princess like UI',
      'Promised Land : 3d Interfaces for several Metaverses',
      ['Sandbox', 'Decentraland', 'Netvrk', 'Meta'],
    ],
  ],
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let product3Data = {
  tipo: 2,
  productWrapper: {
    id: 'product-creators',
    tipo: 2,
  },
  background: {
    overFlowArea: {
      id: 'product3-background-overflow-area',
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
      src: streaming,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        height: ${window.innerHeight * 2.4 + 'px'};
      `,
    },
  },
  children:
    'Creators, Teams and their communities will discover new simple ways to manage and distribute their projects.',
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let product4Data = {
  tipo: 2,
  productWrapper: {
    id: 'product-fans',
    tipo: 2,
  },
  background: {
    overFlowArea: {
      id: 'product4-background-overflow-area',
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
      src: crowdsurfin,
      alt: 'background_image',
      dynamic: css`
        position: relative;
        top: -10%;
        left: -20%;
        height: ${window.innerHeight * 1.8 + 'px'};
        transform: scaleX(-1);
      `,
    },
  },
  children: 'Fans will interact with creators in never-seen ways.',
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// Footer

export let links = {
  ul1: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/ZionDapp',
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/QrVfMgGPeH',
    },
    // {
    //   title:"Medium"
    // },
    {
      title: 'Github',
      url: 'https://github.com/Zion-PTC',
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/ziondapp?utm_medium=copy_link',
    },
  ],
  ul2: [
    // "About",
    // "Community Guidelines",
    // "Terms of Service",
    // "Privacy",
    // "Help"
  ],
};
