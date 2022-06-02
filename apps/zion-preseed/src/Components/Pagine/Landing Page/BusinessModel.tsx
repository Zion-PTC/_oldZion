import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import Chart from '../../Compositori/Chart';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';
import { WrapperClass } from '../../Compositori/Wrapper';
import { BusinessWrapper } from '../../Elementi/Div';

interface IBusinessModel extends PitchDeck.ISuperBasic {
  chart: PitchDeck.ChartStuff.Chart;
  background: PitchDeck.Background;
}

export class BusinessModelDatas implements IBusinessModel {
  public id: number;
  public slug: string = 'business-model';
  public prefix: string;
  static BusinessModels: BusinessModelDatas[] = [];
  public newPage: PageClass;
  public Page;
  public newWrapper: WrapperClass;
  public BusinessWrapper;
  constructor(
    public titolo: PitchDeck.Titolo,
    public chart: PitchDeck.ChartStuff.Chart,
    public background: PitchDeck.Background
  ) {
    if (typeof titolo === 'string')
      throw new Error('titolo should be of class Titolo');
    BusinessModelDatas.BusinessModels.push(this);
    this.id = BusinessModelDatas.BusinessModels.length;
    this.prefix = this.slug + this.id;
    this.newPage = new PageClass(this.prefix);
    this.Page = this.newPage.Page;
    this.newWrapper = new WrapperClass('business', this.prefix);
    this.BusinessWrapper = this.newWrapper.Wrapper;
  }
  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string')
      throw new Error('Titolo deve essere di classe Titolo');

    return (
      <BusinessWrapper>
        <Background {...this.background} />
        <this.Page>
          <Titolo {...this.titolo} />
          <Chart {...this.chart}></Chart>
        </this.Page>
      </BusinessWrapper>
    );
  };
}
