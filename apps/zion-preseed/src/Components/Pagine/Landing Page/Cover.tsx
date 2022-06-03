import { FC } from 'react';
import { css } from 'styled-components';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import { Page } from '../../Compositori/Page';
import { Titolo, TTitolo } from '../../Compositori/Titolo';
import { TWrapper, Wrapper } from '../../Compositori/Wrapper';
import { AreaCover, Cornice } from '../../Elementi/Div';

const errMess = 'titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);
const message = 'ZION';

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
  public newPage: Page;
  public Page;
  public newWrapper: Wrapper;
  public Wrapper: FC<TWrapper>;

  public Titolo: FC<TTitolo>;

  constructor(
    public titolo: Titolo,
    public cornice: PitchDeck.Cornice,
    public img: PitchDeck.TImg,
    public background: PitchDeck.Background
  ) {
    Cover.Covers.push(this);
    this.id = Cover.Covers.length;
    this.prefix = this.slug + this.id;
    this.newPage = new Page(this.prefix);
    this.Page = this.newPage.Page;
    this.newWrapper = new Wrapper('cover', this.prefix);
    this.Wrapper = this.newWrapper.Wrapper;

    this.Titolo = new Titolo(
      3,
      message,
      { id: '', dynamic: css`` },
      undefined,
      'cover'
    ).component;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;

    return (
      <this.Wrapper>
        <Background {...this.background} />
        <AreaCover id={this.prefix}>
          <Cornice {...this.cornice}>
            <img {...this.img} alt={this.img.alt} />
          </Cornice>
          <this.Titolo {...this.titolo} />
        </AreaCover>
      </this.Wrapper>
    );
  };
}
