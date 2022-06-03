import { FC } from 'react';
import { css } from 'styled-components';
import { PitchDeck } from '../../../PitchDeckApp/PitchDeck';
import { Page } from '../../Compositori/Page';
import Testo from '../../Compositori/Testo';
import { Titolo, TTitolo } from '../../Compositori/Titolo';
import { Wrapper } from '../../Compositori/Wrapper';
import YouTube from '../../Compositori/YouTube';
import { createLiElements } from '../../Utils/Utils';

const errMess = 'Titolo deve essere un oggetto di classe Titolo';
const error = new Error(errMess);
const message =
  'We build a decentralized protocol with tools for the Music Industry';

interface IIntro extends PitchDeck.IBasic {
  testo: PitchDeck.TTesto;
  youTube: PitchDeck.YouTube;
}

export class Intro implements IIntro {
  static Intros: Intro[] = [];
  public id: number;
  public slug: string = 'blintro';
  public prefix: string;
  public page: Page;
  public Page;
  public Wrapper;

  public Titolo: FC<TTitolo>;

  constructor(
    public titolo: Titolo,
    public testo: PitchDeck.TTesto,
    public youTube: PitchDeck.YouTube
  ) {
    Intro.Intros.push(this);
    this.id = Intro.Intros.length;
    this.prefix = this.slug + this.id;

    this.page = new Page(this.prefix, 'intro');
    this.Page = this.page.Page;

    let wrapper = new Wrapper('intro', this.prefix);
    this.Wrapper = wrapper.Wrapper;

    this.Titolo = new Titolo(
      2,
      message,
      { id: '', dynamic: css`` },
      undefined,
      'intro'
    ).component;
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
          <this.Titolo {...this.titolo} />
          <YouTube {...this.youTube} />
          <Testo {...this.testo} list_={liElements} />
        </this.Page>
      </this.Wrapper>
    );
  };
  // component = () => <p>ciao</p>
}
