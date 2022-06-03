import { css } from "styled-components";
import { BRIGHT } from "../../js/colori";
import { homeStudio } from "../../js/immagini";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { Problem } from "../Pagine/Landing Page/Problem";

// TODO #12 portare styled components in /Elementi
const slug = "prolem";
const id = 1;
const prefix = slug + id;
const divId = prefix + "-titolo";
const ofId = prefix + "-background-overflow-area";

const titoloMessage = "'the Music Industry is broken'";
const liPars = [
  "The Industry is shady and rough for artists",
  "Jeopardizing tech tools make it complex to manage activities",
  "Social platforms do not provide the necessary security",
];
const alt = "background_image";

const titDivCss = css`
  width: 100%;
  grid-area: titolo;
  place-self: center;
  color: ${BRIGHT};
`;
const ulCss = css`
  grid-area: contenuto;
`;
const liCss = css`
  color: ${BRIGHT};
`;
const ofCss = css`
  grid-area: a;
`;
const imgCss = css`
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
`;
const filCss = css`
  background-color: #010814c1;
`;

const li = new PitchDeck.Li(liCss, liPars);
const overFlowArea = new Overflow(ofId, ofCss);
const filter = new Filter(undefined, filCss);
const background = new Background(overFlowArea, filter, {
  src: homeStudio,
  dynamic: ofCss,
});
const problem = new Problem(
  {
    tipo: 2,
    children: titoloMessage,
    div: { id: divId, dynamic: titDivCss },
    sottoTitolo: undefined,
    type: "problem",
  },
  { dynamic: ulCss },
  li,
  background
);

export let problemData = problem;
