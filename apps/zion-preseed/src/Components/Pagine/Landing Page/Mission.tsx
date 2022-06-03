import { FC } from "react";
import { css } from "styled-components";
import { PitchDeck } from "../../../PitchDeckApp/PitchDeck";
import {
  IconeCarosello,
  IIconeCarosello,
} from "../../Compositori/IconeCarosello";
import { Page, TPage } from "../../Compositori/Page";
import { Titolo, TTitolo } from "../../Compositori/Titolo";

const errMess = "titolo deve essere un oggetto di classe Titolo";
const error = new Error(errMess);

interface IMission extends PitchDeck.ISuperBasic {
  titolo: PitchDeck.TitoloOld;
  iconeCarosello: IIconeCarosello;
}

export class Mission implements IMission {
  static Missions: Mission[] = [];
  public id: number;
  public slug: string = "mission";
  public prefix: string;

  public Page: FC<TPage>;

  public Titolo: FC<TTitolo>;

  public IconeCarosello;

  constructor(public titolo: TTitolo, public iconeCarosello: IIconeCarosello) {
    Mission.Missions.push(this);
    this.id = Mission.Missions.length;
    this.prefix = this.slug + this.id;

    let page = new Page(this.prefix);
    this.Page = page.Page;

    let newtitolo = new Titolo(
      1,
      "Mission",
      { id: "", dynamic: css`` },
      undefined,
      "mission"
    );
    this.Titolo = newtitolo.component;

    let newiconeCarosello = new IconeCarosello(
      iconeCarosello.titolo,
      iconeCarosello.icone,
      iconeCarosello.responsiveGridDiv,
      iconeCarosello.testi
    );
    this.IconeCarosello = newiconeCarosello.component;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === "string") throw error;
    return (
      <this.Page>
        <this.Titolo {...this.titolo} />
        <this.IconeCarosello {...this.iconeCarosello} />
      </this.Page>
    );
  };
}
