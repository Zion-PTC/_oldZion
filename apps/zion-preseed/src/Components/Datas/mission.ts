import { css } from "styled-components";
import { DARK } from "../../js/colori";
import { connection, ease, security } from "../../js/icone";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Mission as MissionClass } from "../Pagine/Landing Page/Mission";

// TODO #11 portare styled components in /Elementi

const slug = "mission";
const id = 1;
const prefix = slug + id;
const divId = prefix + "-titolo";
const carId = prefix + "-icone-carosello";
const respGridId = prefix + "-responsive-grid-div";

const titoloMessage = "Mission";
const easeMess = "Ease of Use";
const connMess = "Connection";
const secuMess = "Security and Privacy";

const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${DARK};
`;
const respGrid = css`
  grid-area: contenuto;
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

// TITOLO
// ICONE CAROSELLO
const resGridDiv = new PitchDeck.ResponsiveGrid(respGridId, respGrid);
const icone = [
  { icona: ease, dynamic: i1Css, testo: easeMess },
  { icona: security, dynamic: i2Css, testo: secuMess },
  { icona: connection, dynamic: i3Css, testo: connMess },
];
const testi = [easeMess, secuMess, connMess];
// MISSION
const mission = new MissionClass(
  {
    tipo: 1,
    children: titoloMessage,
    div: { id: divId, dynamic: titoloCss },
    sottoTitolo: undefined,
    type: "mission",
  },
  { titolo: carId, icone, responsiveGridDiv: resGridDiv, testi }
);

export let missionData = mission;
