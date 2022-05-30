import Background from '../../Compositori/Background';
import IconeCarosello from '../../Compositori/IconeCarosello';
import Titolo from '../../Compositori/Titolo';
import { Page, Wrapper } from '../../Elementi/Div';

interface ISolution {
  id: number;
  slug?: string;
  wrapper?: any;
  page?: any;
  titolo?: any;
  iconeCarosello?: any;
  background?: any;
}

export default function Solution({
  wrapper,
  page,
  titolo,
  iconeCarosello,
  background,
}: ISolution) {
  return (
    <Wrapper {...wrapper}>
      <Background {...background} />
      <Page {...page}>
        <Titolo {...titolo} />
        <IconeCarosello {...iconeCarosello} />
      </Page>
    </Wrapper>
  );
}
