import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Chart from '../../Compositori/Chart';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';
import { TokenomixDiv } from '../../Elementi/Div';

const errMess = 'Titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

// TODO cambiare a this.page e wrapper
interface ITokenomics extends PitchDeck.ISuperBasic {
  chart1: PitchDeck.ChartStuff.Chart;
  chart2: PitchDeck.ChartStuff.Chart;
  div: PitchDeck.Div;
}

export class TokenomicsDatas implements ITokenomics {
  static Tokenomics: TokenomicsDatas[] = [];
  public id: number;
  public slug: string = 'solution';
  public prefix: string;
  public Page;
  constructor(
    public titolo: PitchDeck.Titolo,
    public chart1: PitchDeck.ChartStuff.Chart,
    public chart2: PitchDeck.ChartStuff.Chart,
    public div: PitchDeck.Div
  ) {
    TokenomicsDatas.Tokenomics.push(this);
    this.id = TokenomicsDatas.Tokenomics.length;
    this.prefix = this.slug + this.id;
    let page = new PageClass(this.prefix);
    this.Page = page.Page;
  }
  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;
    if (!this.div) throw error;
    return (
      <this.Page>
        <Titolo {...this.titolo} />
        <TokenomixDiv {...this.div}>
          <Chart {...this.chart1}></Chart>
          <Chart {...this.chart2}></Chart>
        </TokenomixDiv>
      </this.Page>
    );
  };
}
