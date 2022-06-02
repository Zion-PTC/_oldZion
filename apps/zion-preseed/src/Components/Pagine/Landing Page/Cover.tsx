import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';
import { TWrapper, WrapperClass } from '../../Compositori/Wrapper';
import { AreaCover, Cornice } from '../../Elementi/Div';

const errMess = 'titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

interface ICover extends PitchDeck.IBasic {
  cornice: PitchDeck.Cornice;
  img: PitchDeck.TImg;
  background: PitchDeck.Background;
}

export class Cover implements ICover {
  public id: number;
  public slug: string = 'cover';
  public prefix: string;
  static Covers: Cover[] = [];
  public newPage: PageClass;
  public Page;
  public newWrapper: WrapperClass;
  public Wrapper: FC<TWrapper>;
  constructor(
    public page: PitchDeck.Page,
    public titolo: PitchDeck.Titolo,
    public wrapper: PitchDeck.Wrapper,
    public cornice: PitchDeck.Cornice,
    public img: PitchDeck.TImg,
    public background: PitchDeck.Background
  ) {
    Cover.Covers.push(this);
    this.id = Cover.Covers.length;
    this.prefix = this.slug + this.id;
    this.newPage = new PageClass(this.prefix);
    this.Page = this.newPage.Page;
    this.newWrapper = new WrapperClass('cover', this.prefix);
    this.Wrapper = this.newWrapper.Wrapper;
  }
  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;
    let { id } = this.page;

    return (
      <this.Wrapper>
        <Background {...this.background} />
        <AreaCover id={id}>
          <Cornice {...this.cornice}>
            <img {...this.img} alt={this.img.alt} />
          </Cornice>
          <Titolo {...this.titolo} />
        </AreaCover>
      </this.Wrapper>
    );
  };
}
