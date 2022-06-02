import { FC } from 'react';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import { PageClass } from '../../Compositori/Page';
import Testo from '../../Compositori/Testo';
import Titolo from '../../Compositori/Titolo';
import { WrapperClass } from '../../Compositori/Wrapper';
import YouTube from '../../Compositori/YouTube';
import { createLiElements } from '../../Utils/Utils';

const errMess = 'Titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);

interface IIntro extends PitchDeck.IBasic {
  testo: PitchDeck.TTesto;
  youTube: PitchDeck.YouTube;
}

export class Intro implements IIntro {
  static Intros: Intro[] = [];
  public id: number;
  public slug: string = 'blintro';
  public prefix: string;
  public page: PageClass;
  public Page;
  public Wrapper;
  constructor(
    public titolo: PitchDeck.Titolo,
    public testo: PitchDeck.TTesto,
    public youTube: PitchDeck.YouTube
  ) {
    Intro.Intros.push(this);
    this.id = Intro.Intros.length;
    this.prefix = this.slug + this.id;
    this.page = new PageClass(this.prefix, 'intro');
    this.Page = this.page.Page;
    let wrapper = new WrapperClass('intro', this.prefix);
    this.Wrapper = wrapper.Wrapper;
  }
  component: FC = (): JSX.Element => {
    if (typeof this.titolo === 'string') throw error;

    let obj = {
      dynamic: undefined,
      pars: this.testo.list,
    };

    let liElements = createLiElements(obj);

    return (
      <this.Wrapper>
        <this.Page>
          <Titolo {...this.titolo} />
          <YouTube {...this.youTube} />
          <Testo {...this.testo} list_={liElements} />
        </this.Page>
        {/* <Page {...this.Expage}>
          <Titolo {...this.titolo} />
          <YouTube {...this.youTube} />
          <Testo {...this.testo} list_={liElements} />
        </Page> */}
      </this.Wrapper>
    );
  };
}
