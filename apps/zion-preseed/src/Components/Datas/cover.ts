import { css } from '@zionrepack/styled-components';
import { BRIGHT, MID } from '../../js/colori';
import { coverPicture } from '../../js/immagini';
import { LOGOZION } from '../../js/loghi';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';

const pageCss = css`
  grid-template-rows: 1fr 5fr 3fr;
  grid-template-areas: '. . .' '. logo .' '. titolo .';
`;
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

const coverID = 1;
const slug = 'cover';
const wrapId = slug + '-wrapper';
const pageId = slug + '-wrapper';
const titoloMessage = 'ZION';
const divId = slug + '-titolo';
const sottotitolo = 'Decentralized Protocol for the Music Industry';
const cornId = 'logo';
const cornGridArea = 'logo';
const alt = 'logoZion';
const ofId = slug + '-background-overflow-area';
const bkgAlt = 'background_image';

const wrapper = new PitchDeck.Wrapper(wrapId);
const page = new PitchDeck.Page(pageId, pageCss);
const div = new PitchDeck.Div(divId, titoloCss);
const titolo = new PitchDeck.Titolo(3, titoloMessage, div, sottotitolo);
const cornice = new PitchDeck.Cornice(cornId, MID, cornGridArea);
const img = new PitchDeck.Img(LOGOZION, alt);
const overFlowArea = new PitchDeck.Overflow(ofId, ofCss);
const filter = new PitchDeck.Filter(undefined, filterCss);
const bkgImg = new PitchDeck.Img(coverPicture, bkgAlt);
const background = new PitchDeck.Background(overFlowArea, filter, bkgImg);
const cover = new PitchDeck.Cover(
  coverID,
  page,
  slug,
  titolo,
  wrapper,
  cornice,
  img,
  background
);

export let coverData = cover;
