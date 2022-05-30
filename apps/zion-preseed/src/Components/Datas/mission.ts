import { css } from '@zionrepack/styled-components';
import { DARK, MIDBRIGHT } from '../../js/colori';
import { connection, ease, security } from '../../js/icone';
// TODO usare classi

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
