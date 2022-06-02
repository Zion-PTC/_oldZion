import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import Background from '../../Compositori/Background';
import IconeCarosello, {
  IconeCarosello1,
} from '../../Compositori/IconeCarosello';
import { PageClass } from '../../Compositori/Page';
import Titolo from '../../Compositori/Titolo';
import { WrapperClass } from '../../Compositori/Wrapper';

const errMess = 'Carosello deve essere un oggetto di classe Carosello';
const error = new Error(errMess);

interface ISolution {
  slug?: string;
  id: number;
  wrapper?: PitchDeck.Wrapper;
  page?: PitchDeck.Page;
  titolo?: PitchDeck.Titolo;
  iconeCarosello?: IconeCarosello1;
  background?: PitchDeck.Background;
}

export class Solution1 implements ISolution {
  static Solutions: Solution1[] = [];
  public id: number;
  public slug: string = 'solution';
  public prefix: string;
  public newPage: PageClass | undefined;
  public Page;
  public newWrapper: WrapperClass;
  public Wrapper;
  constructor(
    public titolo: PitchDeck.Titolo,
    public iconeCarosello: IconeCarosello1,
    public background: PitchDeck.Background,
    public page?: PitchDeck.Page
  ) {
    Solution1.Solutions.push(this);
    this.id = Solution1.length;
    this.prefix = this.slug + this.id;
    this.newPage = new PageClass(this.prefix);
    this.Page = this.newPage.Page;
    this.newWrapper = new WrapperClass('solution', this.prefix);
    this.Wrapper = this.newWrapper.Wrapper;
  }

  component: FC = (): JSX.Element => {
    if (!this.iconeCarosello) throw error;
    return (
      <this.Wrapper>
        <Background {...this.background} />
        <this.Page>
          <Titolo {...this.titolo} />
          <IconeCarosello {...this.iconeCarosello} />
        </this.Page>
      </this.Wrapper>
    );
  };
}
