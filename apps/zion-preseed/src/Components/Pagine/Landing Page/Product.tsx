import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';
import { WrapperClass } from '../../Compositori/Wrapper';
import { Div, Text, Text2, div } from '../../Elementi/Div';

// TODO sistemare if statement / switch
interface IProduct {
  tipo: number;
  productWrapper: PitchDeck.Wrapper;
  background: PitchDeck.Background;
  children?: string;
  titolo?: PitchDeck.Titolo;
  productPage?: FlattenSimpleInterpolation;
  testo?: PitchDeck.Testo;
  list?: (string | any[])[];
}
export class ProductDatas implements IProduct {
  static Products: ProductDatas[] = [];
  public id: number;
  public slug: string = 'product';
  public prefix: string;
  public Page;
  public Wrapper;
  constructor(
    public tipo: number,
    public productWrapper: PitchDeck.Wrapper,
    public background: PitchDeck.Background,
    public children?: string,
    public titolo?: PitchDeck.Titolo,
    public productPage?: FlattenSimpleInterpolation,
    public testo?: PitchDeck.Testo,
    public list?: (string | any[])[]
  ) {
    ProductDatas.Products.push(this);
    this.id = ProductDatas.Products.length;
    this.prefix = this.slug + this.id;
    let page = new PageClass(this.prefix);
    this.Page = page.Page;

    let wrapper = new WrapperClass('product', this.prefix, tipo);
    this.Wrapper = wrapper.Wrapper;
  }
  component: FC = (): JSX.Element => {
    let testo_;

    switch (this.tipo) {
      case 1:
        testo_ = <Text2 {...this.testo}>{this.children}</Text2>;
        break;
      case 2:
        testo_ = <Text {...this.testo}>{this.children}</Text>;
        break;

      default:
        break;
    }

    // TODO decouple Ul
    if (this.list) {
      let liEl1 = this.list[0];
      let liEl2 = this.list[1];
      let liEl3 = this.list[2];
      let el3LiEl1 = this.list[3][0];
      let el3LiEl2 = this.list[3][1];
      let el3LiEl3 = this.list[3][2];
      let metaversesCounter = 0;
      // TODO capire che tipo mettere qui
      let metaversesList: any[] = [];
      // TODO correggere errore TS
      //@ts-expect-error
      list[3][3].forEach(element => {
        metaversesCounter++;
        metaversesList.push(<li key={metaversesCounter}>{element}</li>);
      });

      testo_ = (
        <Div {...div}>
          <ul>
            <li>{liEl1}</li>
            <li>{liEl2}</li>
            <li>{liEl3}</li>
            <ul>
              <li>{el3LiEl1}</li>
              <li>{el3LiEl2}</li>
              <li>{el3LiEl3}</li>
              <ul>{metaversesList}</ul>
            </ul>
          </ul>
        </Div>
      );
    }

    return (
      <this.Wrapper>
        <Background {...this.background} />
        <this.Page>
          <Titolo {...this.titolo} />
          {testo_}
        </this.Page>
      </this.Wrapper>
    );
  };
}
