import { FC } from 'react';
import { css } from 'styled-components';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import IconeCarosello, {
  IconeCarosello1,
} from '../../Compositori/IconeCarosello';
import { Page, TPage } from '../../Compositori/Page';
import { Titolo, TTitolo } from '../../Compositori/Titolo';

const errMess = 'titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

interface IMission extends PitchDeck.ISuperBasic {
  titolo: PitchDeck.TitoloOld;
  iconeCarosello: IconeCarosello1;
}

export class Mission implements IMission {
  static Missions: Mission[] = [];
  public id: number;
  public slug: string = 'mission';
  public prefix: string;

  public Page: FC<TPage>;

  public Titolo: FC<TTitolo>;

  constructor(public titolo: Titolo, public iconeCarosello: IconeCarosello1) {
    Mission.Missions.push(this);
    this.id = Mission.Missions.length;
    this.prefix = this.slug + this.id;

    let page = new Page(this.prefix);
    this.Page = page.Page;

    this.Titolo = new Titolo(
      1,
      'Mission',
      { id: '', dynamic: css`` },
      undefined,
      'mission'
    ).component;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;
    return (
      <this.Page>
        <this.Titolo {...this.titolo} />
        <IconeCarosello {...this.iconeCarosello} />
      </this.Page>
    );
  };
}
