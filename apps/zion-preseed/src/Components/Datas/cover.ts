import { css } from "styled-components";
import { BRIGHT, MID } from "../../js/colori";
import { coverPicture } from "../../js/immagini";
import { LOGOZION } from "../../js/loghi";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Background } from "../Compositori/Background";
import { Filter } from "../Compositori/Filter";
import { Overflow } from "../Compositori/Overflow";
import { Cover } from "../Pagine/Landing Page/Cover";

// TODO #9 portare styled components in /Elementi
const titoloCss = css`
  width: 100%;
  grid-area: titolo;
  place-self: top;
  color: ${BRIGHT};
`;
const ofCss = css`
  grid-area: a;
`;
const filterCss = css`
  background-color: #0643a4d1;
`;

const slug = "cover";
const titoloMessage = "ZION";
const divId = slug + "-titolo";
const cornId = "logo";
const cornGridArea = "logo";
const alt = "logoZion";
const ofId = slug + "-background-overflow-area";
const bkgAlt = "background_image";

const cornice = new PitchDeck.Cornice(cornId, MID, cornGridArea);
const overFlowArea = new Overflow(ofId, ofCss);
const filter = new Filter(undefined, filterCss);
const background = new Background(overFlowArea, filter, {
  src: coverPicture,
  alt: bkgAlt,
});
const cover = new Cover(
  {
    tipo: 3,
    children: titoloMessage,
    div: { id: divId, dynamic: titoloCss },
    sottoTitolo: undefined,
    type: "cover",
  },
  cornice,
  { src: LOGOZION, alt },
  background
);

export let coverData = cover;
