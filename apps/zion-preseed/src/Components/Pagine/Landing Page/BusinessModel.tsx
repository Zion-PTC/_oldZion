import { FC } from "react";
import { css } from "styled-components";
import { PitchDeck } from "../../../PitchDeckApp/PitchDeck";
import { Background, TBackground } from "../../Compositori/Background";
import Chart from "../../Compositori/Chart";
import { Page } from "../../Compositori/Page";
import { Titolo, TTitolo } from "../../Compositori/Titolo";
import { Wrapper } from "../../Compositori/Wrapper";

const errorMess = "titolo should be of class Titolo";
const error = new Error(errorMess);

interface IBusinessModel extends PitchDeck.ISuperBasic {
  chart: PitchDeck.ChartStuff.Chart;
  background: TBackground;
}

export class BusinessModelDatas implements IBusinessModel {
  public id: number;
  public slug: string = "business-model";
  public prefix: string;

  static BusinessModels: BusinessModelDatas[] = [];

  public Page;

  public BusinessWrapper;

  public Titolo: FC<TTitolo>;

  public Background;

  constructor(
    public titolo: TTitolo,
    public chart: PitchDeck.ChartStuff.Chart,
    public background: TBackground
  ) {
    if (typeof titolo === "string") throw error;

    BusinessModelDatas.BusinessModels.push(this);
    this.id = BusinessModelDatas.BusinessModels.length;
    this.prefix = this.slug + this.id;

    let newPage = new Page(this.prefix);
    this.Page = newPage.Page;

    let wrapper = new Wrapper("business", this.prefix);
    this.BusinessWrapper = wrapper.Wrapper;

    let newtitolo = new Titolo(
      2,
      "Business Model",
      { id: "", dynamic: css`` },
      undefined,
      "business"
    );
    this.Titolo = newtitolo.component;

    let newbackground = new Background(
      background.overFlowArea,
      background.filter,
      background.img
    );
    this.Background = newbackground.component;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === "string")
      throw new Error("Titolo deve essere di classe Titolo");

    return (
      <this.BusinessWrapper>
        <this.Background {...this.background} />
        <this.Page>
          <this.Titolo {...this.titolo} />
          <Chart {...this.chart}></Chart>
        </this.Page>
      </this.BusinessWrapper>
    );
  };
}
