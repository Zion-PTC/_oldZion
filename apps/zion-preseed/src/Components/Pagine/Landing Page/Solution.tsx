import { FC } from "react";
import { css } from "styled-components";
import { PitchDeck } from "../../../PitchDeckApp/PitchDeck";
import { Background, TBackground } from "../../Compositori/Background";
import {
  IconeCarosello,
  IIconeCarosello,
} from "../../Compositori/IconeCarosello";
import { Page } from "../../Compositori/Page";
import { Titolo, TTitolo } from "../../Compositori/Titolo";
import { Wrapper } from "../../Compositori/Wrapper";

const errMess = "Carosello deve essere un oggetto di classe Carosello";
const error = new Error(errMess);

interface ISolution {
  slug?: string;
  id: number;
  titolo?: PitchDeck.TitoloOld;
  iconeCarosello?: IIconeCarosello;
  background?: TBackground;
}

export class Solution1 implements ISolution {
  static Solutions: Solution1[] = [];
  public id: number;
  public slug: string = "solution";
  public prefix: string;

  public Page;

  public Wrapper;

  public Titolo: FC<TTitolo>;

  public IconeCarosello;

  public Background;

  constructor(
    public titolo: TTitolo,
    public iconeCarosello: IIconeCarosello,
    public background: TBackground
  ) {
    Solution1.Solutions.push(this);
    this.id = Solution1.length;
    this.prefix = this.slug + this.id;

    let newPage = new Page(this.prefix);
    this.Page = newPage.Page;

    let newWrapper = new Wrapper("solution", this.prefix);
    this.Wrapper = newWrapper.Wrapper;

    let newtitolo = new Titolo(
      2,
      titolo.children,
      { id: "", dynamic: css`` },
      undefined,
      "solution"
    );
    this.Titolo = newtitolo.component;

    let newiconeCarosello = new IconeCarosello(
      iconeCarosello.titolo,
      iconeCarosello.icone,
      iconeCarosello.responsiveGridDiv,
      iconeCarosello.testi
    );
    this.IconeCarosello = newiconeCarosello.component;

    let newbackground = new Background(
      background.overFlowArea,
      background.filter,
      background.img,
      background.type
    );
    this.Background = newbackground.component;
  }

  component: FC = (): JSX.Element => {
    if (!this.iconeCarosello) throw error;
    return (
      <this.Wrapper>
        <this.Background {...this.background} />
        <this.Page>
          <this.Titolo {...this.titolo} />
          <this.IconeCarosello {...this.iconeCarosello} />
        </this.Page>
      </this.Wrapper>
    );
  };
}
