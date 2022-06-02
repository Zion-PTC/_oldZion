import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import IconeCarosello, {
  IconeCarosello1,
} from '../../Compositori/IconeCarosello';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';

const errMess = 'titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

interface IMission extends PitchDeck.ISuperBasic {
  titolo: PitchDeck.Titolo;
  iconeCarosello: IconeCarosello1;
}

export class Mission implements IMission {
  static Missions: Mission[] = [];
  public newPage: PageClass;
  public Page;
  public id: number;
  public slug: string = 'mission';
  public prefix: string;
  constructor(
    public titolo: PitchDeck.Titolo,
    public iconeCarosello: IconeCarosello1
  ) {
    Mission.Missions.push(this);
    this.id = Mission.Missions.length;
    this.prefix = this.slug + this.id;
    this.newPage = new PageClass(this.prefix);
    this.Page = this.newPage.Page;
  }

  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;
    return (
      <this.Page>
        <Titolo {...this.titolo} />
        <IconeCarosello {...this.iconeCarosello} />
      </this.Page>
    );
  };
}
