import { Background, TBackground } from "../../Compositori/Background";
import { Titolo, TTitolo } from "../../Compositori/Titolo";
import { createLiElements } from "../../Utils/Utils";
import { Ul } from "../../Elementi/Ul";
import { PitchDeck } from "../../../PitchDeckApp/PitchDeck";
import { FC } from "react";
import { Page, TPage } from "../../Compositori/Page";
import { TWrapper, Wrapper } from "../../Compositori/Wrapper";
import { css } from "styled-components";

const errMess = "Titolo deve essere un oggetto di classe Titolo";
const error = new Error(errMess);
const titoloMessage = "'the Music Industry is broken'";

interface IProblem extends PitchDeck.IBasic {
  ul: PitchDeck.TDynamic;
  li: PitchDeck.Li;
  background: TBackground;
}

export class Problem implements IProblem {
  static Problems: Problem[] = [];
  public id: number;
  public slug: string = "problem";
  public prefix: string;

  public Page: FC<TPage>;

  public Wrapper: FC<TWrapper>;

  public Titolo: FC<TTitolo>;

  public Background;

  constructor(
    public titolo: TTitolo,
    public ul: PitchDeck.TDynamic,
    public li: PitchDeck.Li,
    public background: TBackground
  ) {
    Problem.Problems.push(this);
    this.id = Problem.Problems.length;
    this.prefix = this.slug + this.id;

    let page = new Page(this.prefix, "problem");
    this.Page = page.Page;

    let wrapper = new Wrapper("problem", this.prefix);
    this.Wrapper = wrapper.Wrapper;

    let newtitolo = new Titolo(
      2,
      titoloMessage,
      { id: "", dynamic: css`` },
      undefined,
      "problem"
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
        <this.Page>
          <this.Titolo {...this.titolo}></this.Titolo>
          <Ul {...this.ul}>{createLiElements(this.li)}</Ul>
        </this.Page>
      </this.Wrapper>
    );
  };
}
