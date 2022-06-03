import { css } from '@zionrepack/styled-components';
import { BRIGHT, MID } from '../../js/colori';
import { coverPicture } from '../../js/immagini';
import { LOGOZION } from '../../js/loghi';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { Titolo } from '../Compositori/Titolo';
import { Cover } from '../Pagine/Landing Page/Cover';

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

const slug = 'cover';
const titoloMessage = 'ZION';
const divId = slug + '-titolo';
const sottotitolo = 'Decentralized Protocol for the Music Industry';
const cornId = 'logo';
const cornGridArea = 'logo';
const alt = 'logoZion';
const ofId = slug + '-background-overflow-area';
const bkgAlt = 'background_image';

const div = new PitchDeck.Div(divId, titoloCss);
const titolo = new Titolo(3, titoloMessage, div, sottotitolo, 'cover');
const cornice = new PitchDeck.Cornice(cornId, MID, cornGridArea);
const img = new PitchDeck.Img(LOGOZION, alt);
const overFlowArea = new PitchDeck.Overflow(ofId, ofCss);
const filter = new PitchDeck.Filter(undefined, filterCss);
const bkgImg = new PitchDeck.Img(coverPicture, bkgAlt);
const background = new PitchDeck.Background(overFlowArea, filter, bkgImg);
const cover = new Cover(titolo, cornice, img, background);

export let coverData = cover;
