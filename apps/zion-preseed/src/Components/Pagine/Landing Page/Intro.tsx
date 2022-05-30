import Testo from '../../Compositori/Testo';
import Titolo from '../../Compositori/Titolo';
import YouTube from '../../Compositori/YouTube';
import { Wrapper, Page } from '../../Elementi/Div';
import { createLiElements } from '../../Utils/Utils';

interface IIntro {
  wrapper: any;
  page: any;
  titolo: any;
  testo: any;
  youTube: any;
}

export default function Intro({
  wrapper,
  page,
  titolo,
  testo,
  youTube,
}: IIntro) {
  let obj = {
    dynamic: '',
    pars: testo.list,
  };

  let liElements = createLiElements(obj);

  return (
    <Wrapper {...wrapper}>
      <Page {...page}>
        <Titolo {...titolo} />
        <YouTube {...youTube} />
        <Testo {...testo} list_={liElements} />
      </Page>
    </Wrapper>
  );
}
