import { css } from '@zionrepack/styled-components';
import { BRIGHT } from '../../js/colori';
import { tickets } from '../../js/immagini';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { Titolo } from '../Compositori/Titolo';
import { BusinessModelDatas } from '../Pagine/Landing Page/BusinessModel';

// TODO #8 portare styled components in /Elementi
const BMDatas = BusinessModelDatas;
const Dataset = PitchDeck.ChartStuff.Dataset;

const bmDivCss = css`
  grid-area: contenuto;
`;
const bmCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${BRIGHT};
`;
const ovCss = css`
  grid-area: a;
`;
const filCss = css`
  background-color: #010814c1;
`;
const imgCss = css`
  position: relative;
  @media (orientation: landscape) {
    width: 150%;
  }
  @media (orientation: portrait) {
    width: 180%;
  }
`;

const id = 1;
const slug = 'bmodel';
const stringId = slug + id;
const tag = 'background-image';
const ovFlId = 'business-background-overflow-area';
const color1 = 'rgba(23, 58, 51, 1)';
const color2 = 'rgba(52, 131, 115, 1)';
const color3 = 'rgba(21, 191, 157, 1)';
const color4 = 'rgba(106, 178, 248, 1)';
const color5 = 'rgba(153, 102, 255, 1)';
const l1 = 'Platform Fee';
const l2 = 'Smart Contract Usage';
const l3 = 'Audius Node';
const l4 = 'Staking';
const l5 = 'Interest';
const chTitle = 'Revenue Sources';

const bkgCol = [color1, color2, color3, color4, color5];
const borderColor = bkgCol;
const borWid = 1;
const labels = [l1, l2, l3, l4, l5];
const dataCh = [70, 20, 3, 5, 2];

const bmDiv = new PitchDeck.Div('solution2-titolo', bmCss);
const titolo = new Titolo(2, 'Business Model', bmDiv, undefined, 'business');
const legend = new PitchDeck.ChartStuff.Legend(true, { color: BRIGHT });
const title = new PitchDeck.ChartStuff.Title(true);
const plugins = new PitchDeck.ChartStuff.Plugins(title, legend);
const options = new PitchDeck.ChartStuff.Options(true, false, plugins);
const dataset = new Dataset(chTitle, dataCh, bkgCol, borderColor, borWid);
const datasets = [dataset];
const data = new PitchDeck.ChartStuff.Data(labels, datasets);
const div = new PitchDeck.Div(stringId, bmDivCss);
const bmChart = new PitchDeck.ChartStuff.Chart(data, options, div);
const overFlowArea = new PitchDeck.Overflow(ovFlId, ovCss);
const filter = new PitchDeck.Filter('filter', filCss);
const img = new PitchDeck.Img(tickets, tag, tag, imgCss);
const background = new PitchDeck.Background(overFlowArea, filter, img);
// const wrapper = new PitchDeck.Wrapper('business');
const bmd = new BMDatas(titolo, bmChart, background);
export const businessModelData = bmd;
