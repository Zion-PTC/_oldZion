import { css } from '@zionrepack/styled-components';
import { DARK, MIDBRIGHT } from '../../js/colori';
import { connection, ease, security } from '../../js/icone';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { IconeCarosello1 } from '../Compositori/IconeCarosello';
import { Titolo } from '../Compositori/Titolo';
import { Mission as MissionClass } from '../Pagine/Landing Page/Mission';

// TODO #11 portare styled components in /Elementi
// TODO #7 usare classi

const slug = 'mission';
const id = 1;
const prefix = slug + id;
// const pageId = prefix + '-page';
const divId = prefix + '-titolo';
const carId = prefix + '-icone-carosello';
const respGridId = prefix + '-responsive-grid-div';

const titoloMessage = 'Mission';
const easeMess = 'Ease of Use';
const connMess = 'Connection';
const secuMess = 'Security and Privacy';

const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${DARK};
`;
const gridCss = css`
  margin: 0 0 1em 0;
`;
const respGrid = css`
  grid-area: contenuto;
`;
const cerchioCss = css`
  background-color: ${MIDBRIGHT};
`;
const pCss = css`
  color: ${DARK};
  margin: 10px 0 30px 0;
`;
const i1Css = css`
  height: 80%;
  place-self: center;
`;
const i2Css = css`
  top: -5%;
  height: 80%;
  place-self: center;
`;
const i3Css = css`
  height: 75%;
  place-self: center;
`;

const Carosello = IconeCarosello1;
// TITOLO
const div = new PitchDeck.Div(divId, titoloCss);
const titolo = new Titolo(1, titoloMessage, div, undefined, 'mission');
// ICONE CAROSELLO
const icona = new PitchDeck.IconaSettings(gridCss, cerchioCss, pCss);
const resGridDiv = new PitchDeck.ResponsiveGrid(respGridId, respGrid);
const icona1 = new PitchDeck.Icona(ease, i1Css, easeMess);
const icona2 = new PitchDeck.Icona(security, i2Css, secuMess);
const icona3 = new PitchDeck.Icona(connection, i3Css, connMess);
const icone = [icona1, icona2, icona3];
const testi = [easeMess, secuMess, connMess];
const iconeCarosello = new Carosello(carId, icona, icone, resGridDiv, testi);
// MISSION
const mission = new MissionClass(titolo, iconeCarosello);

export let missionData = mission;
