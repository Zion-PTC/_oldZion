import { FC } from "react";
import { css } from "styled-components";
import { PitchDeck } from "../../../PitchDeckApp/PitchDeck";
import { Background, TBackground } from "../../Compositori/Background";
import { TImg } from "../../Compositori/Image";
import { Page } from "../../Compositori/Page";
import { Titolo, TTitolo } from "../../Compositori/Titolo";
import { TWrapper, Wrapper } from "../../Compositori/Wrapper";
import { AreaCover, Cornice } from "../../Elementi/Div";

const errMess = "titolo deve essere un oggetto di classe Titolo";
const error = new Error(errMess);
const message = "ZION";

interface ICover extends PitchDeck.IBasic {
  cornice: PitchDeck.Cornice;
  img: TImg;
  background: TBackground;
}

export class Cover implements ICover {
  public id: number;
  public slug: string = "cover";
  public prefix: string;
  static Covers: Cover[] = [];

  public Page;

  public Wrapper: FC<TWrapper>;

  public Titolo: FC<TTitolo>;

  public Background;

  constructor(
    public titolo: TTitolo,
    public cornice: PitchDeck.Cornice,
    public img: TImg,
    public background: TBackground
  ) {
    Cover.Covers.push(this);
    this.id = Cover.Covers.length;
    this.prefix = this.slug + this.id;

    let newPage = new Page(this.prefix);
    this.Page = newPage.Page;

    let newWrapper = new Wrapper("cover", this.prefix);
    this.Wrapper = newWrapper.Wrapper;

    let newtitolo = new Titolo(
      3,
      message,
      { id: "", dynamic: css`` },
      undefined,
      "cover"
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
    if (typeof this.titolo === "string") throw error;

    return (
      <this.Wrapper>
        <this.Background {...this.background} />
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
