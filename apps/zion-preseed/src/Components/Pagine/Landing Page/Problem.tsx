import Background from '../../Compositori/Background';
import Titolo from '../../Compositori/Titolo';
import { createLiElements } from '../../Utils/Utils';
import { Ul } from '../../Elementi/Ul';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import { FC } from 'react';
import { PageClass } from '../../Compositori/Page';
import { WrapperClass } from '../../Compositori/Wrapper';

const errMess = 'Titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

interface IProblem extends PitchDeck.IBasic {
  ul: PitchDeck.Dynamic;
  li: PitchDeck.Li;
  background: PitchDeck.Background;
}

export class Problem implements IProblem {
  static Problems: Problem[] = [];
  public id: number;
  public slug: string = 'problem';
  public prefix: string;
  public Page;
  public Wrapper;
  constructor(
    public titolo: PitchDeck.Titolo | string,
    public ul: PitchDeck.Dynamic,
    public li: PitchDeck.Li,
    public background: PitchDeck.Background
  ) {
    Problem.Problems.push(this);
    this.id = Problem.Problems.length;
    this.prefix = this.slug + this.id;
    let page = new PageClass(this.prefix, 'problem');
    this.Page = page.Page;
    let wrapper = new WrapperClass('problem', this.prefix);
    this.Wrapper = wrapper.Wrapper;
  }
  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;
    return (
      <this.Wrapper>
        <Background {...this.background} />
        <this.Page>
          <Titolo {...this.titolo}></Titolo>
          <Ul {...this.ul}>{createLiElements(this.li)}</Ul>
        </this.Page>
      </this.Wrapper>
    );
  };
}
