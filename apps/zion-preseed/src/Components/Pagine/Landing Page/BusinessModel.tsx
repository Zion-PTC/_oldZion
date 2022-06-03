import { FC } from 'react';
import { css } from 'styled-components';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import Chart from '../../Compositori/Chart';
import { Page } from '../../Compositori/Page';
import { Titolo, TTitolo } from '../../Compositori/Titolo';
import { Wrapper } from '../../Compositori/Wrapper';

interface IBusinessModel extends PitchDeck.ISuperBasic {
  chart: PitchDeck.ChartStuff.Chart;
  background: PitchDeck.Background;
}

export class BusinessModelDatas implements IBusinessModel {
  public id: number;
  public slug: string = 'business-model';
  public prefix: string;
  static BusinessModels: BusinessModelDatas[] = [];
  public newPage: Page;
  public Page;

  public BusinessWrapper;

  public Titolo: FC<TTitolo>;

  constructor(
    public titolo: Titolo,
    public chart: PitchDeck.ChartStuff.Chart,
    public background: PitchDeck.Background
  ) {
    if (typeof titolo === 'string')
      throw new Error('titolo should be of class Titolo');
    BusinessModelDatas.BusinessModels.push(this);
    this.id = BusinessModelDatas.BusinessModels.length;
    this.prefix = this.slug + this.id;
    this.newPage = new Page(this.prefix);
    this.Page = this.newPage.Page;
    let wrapper = new Wrapper('business', this.prefix);
    this.BusinessWrapper = wrapper.Wrapper;

    this.Titolo = new Titolo(
      2,
      'Business Model',
      { id: '', dynamic: css`` },
      undefined,
      'business'
    ).component;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string')
      throw new Error('Titolo deve essere di classe Titolo');

    return (
      <this.BusinessWrapper>
        <Background {...this.background} />
        <this.Page>
          <this.Titolo {...this.titolo} />
          <Chart {...this.chart}></Chart>
        </this.Page>
      </this.BusinessWrapper>
    );
  };
}
