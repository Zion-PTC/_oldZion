import { css } from "styled-components";
import { DARK } from "../../js/colori";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { TokenomicsDatas } from "../Pagine/Landing Page/Tokenomics";

// const Page = PitchDeck.Page;
const Div = PitchDeck.Div;
const Chart = PitchDeck.ChartStuff.Chart;
const Options = PitchDeck.ChartStuff.Options;
const Legend = PitchDeck.ChartStuff.Legend;
const NewLabels = PitchDeck.ChartStuff.Labels;
const Title = PitchDeck.ChartStuff.Title;
const Plugins = PitchDeck.ChartStuff.Plugins;
const Dataset = PitchDeck.ChartStuff.Dataset;
const Data = PitchDeck.ChartStuff.Data;
const TksDatas = TokenomicsDatas;

// TODO #20 portare styled components in /Elementi
const tksCss = css`
  width: 100%;
  grid-area: titolo;
  color: ${DARK};
`;

const color1 = "rgba(23, 58, 51, 1)";
const color2 = "rgba(52, 131, 115, 1)";
const color3 = "rgba(21, 191, 157, 1)";
const color4 = "rgba(106, 178, 248, 1)";
const bkgColor = [color1, color2, color3, color4];
const borCol = bkgColor;
const borWidth = 1;

const labels = ["Creators", "Team", "DAO/Community", "Investors"];
const darkLabel = new NewLabels(DARK);
const legend1 = new Legend(true, { color: darkLabel.color });
const title = new Title(true);
const plugins = new Plugins(title, legend1);
const options = new Options(true, false, plugins);

const chart1title = "Tokens Distribution";
const data1_1 = [10, 25, 25, 40];
const dataset1 = new Dataset(chart1title, data1_1, bkgColor, borCol, borWidth);
const datasets1 = [dataset1];
const data1 = new Data(labels, datasets1);
const tksChr1 = new Chart(data1, options);

const chart2title = "Staking";
const data2_1 = [10, 25, 25, 40];
const dataset2 = new Dataset(chart2title, data2_1, bkgColor, borCol, borWidth);
const datasets2 = [dataset2];
const data2 = new Data(labels, datasets2);
const tksChr2 = new Chart(data2, options);
const tksDiv = new Div("tokenomics-div");

export let tokenomicsData = new TksDatas(
  {
    tipo: 2,
    children: "Tokenomics",
    div: { id: "solution2-titolo", dynamic: tksCss },
    sottoTitolo: undefined,
    type: "tokenomics",
  },
  tksChr1,
  tksChr2,
  tksDiv
);
