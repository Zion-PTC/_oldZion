import { FC } from 'react';
import { css } from 'styled-components';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import IconeCarosello, {
  IconeCarosello1,
} from '../../Compositori/IconeCarosello';
import { Page } from '../../Compositori/Page';
import { Titolo, TTitolo } from '../../Compositori/Titolo';
import { Wrapper } from '../../Compositori/Wrapper';

const errMess = 'Carosello deve essere un oggetto di classe Carosello';
const error = new Error(errMess);

interface ISolution {
  slug?: string;
  id: number;
  titolo?: PitchDeck.TitoloOld;
  iconeCarosello?: IconeCarosello1;
  background?: PitchDeck.Background;
}

export class Solution1 implements ISolution {
  static Solutions: Solution1[] = [];
  public id: number;
  public slug: string = 'solution';
  public prefix: string;
  public newPage: Page | undefined;
  public Page;
  public newWrapper: Wrapper;
  public Wrapper;

  public Titolo: FC<TTitolo>;

  constructor(
    public titolo: Titolo,
    public iconeCarosello: IconeCarosello1,
    public background: PitchDeck.Background
  ) {
    Solution1.Solutions.push(this);
    this.id = Solution1.length;
    this.prefix = this.slug + this.id;
    this.newPage = new Page(this.prefix);
    this.Page = this.newPage.Page;
    this.newWrapper = new Wrapper('solution', this.prefix);
    this.Wrapper = this.newWrapper.Wrapper;

    this.Titolo = new Titolo(
      2,
      titolo.children,
      { id: '', dynamic: css`` },
      undefined,
      'solution'
    ).component;
  }

  component: FC = (): JSX.Element => {
    if (!this.iconeCarosello) throw error;
    return (
      <this.Wrapper>
        <Background {...this.background} />
        <this.Page>
          <this.Titolo {...this.titolo} />
          <IconeCarosello {...this.iconeCarosello} />
        </this.Page>
      </this.Wrapper>
    );
  };
}
