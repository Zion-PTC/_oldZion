import { css } from "styled-components";
import { DARK } from "../../js/colori";
import { calculateYouTubeResponsiveValues } from "../../js/responsiveness";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Intro } from "../Pagine/Landing Page/Intro";

// TODO #10 portare styled components in /Elementi
const divCss = css`
  grid-area: titolo;
  color: ${DARK};
`;

const slug = "intro";
const divId = slug + "-titolo";
const testoGrid = "contenuto";

const message =
  "We build a decentralized protocol with tools for the Music Industry";
const par1 =
  "At ZION we build assuming a simple concept: everything comes from an idea and evolves into a concrete project following these steps:";
const list = [
  "Conception => Creators",
  "Financing => Investors",
  "Building => Team",
  "Networking => DAO and Community",
];
const par2 =
  "Therefore we are building a technological decentralized protocol to enable micro and macro cap organizations to leverage the power of DLT and de-fi.";
const url = "https://www.youtube.com/embed/wPOfEfFPCK8";
const youTubeFrameResponsiveValues = calculateYouTubeResponsiveValues(200);

const youtube = new PitchDeck.YouTube(url, youTubeFrameResponsiveValues);
const testo = new PitchDeck.Testo(
  3,
  undefined,
  DARK,
  testoGrid,
  par1,
  list,
  par2
);
const intro = new Intro(
  {
    tipo: 2,
    children: message,
    div: { id: divId, dynamic: divCss },
    sottoTitolo: undefined,
    type: "intro",
  },
  testo,
  youtube
);

export let introData = intro;
