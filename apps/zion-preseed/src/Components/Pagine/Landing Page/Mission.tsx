import IconeCarosello from '../../Compositori/IconeCarosello';
import Titolo from '../../Compositori/Titolo';
import { Page } from '../../Elementi/Div';

interface IMission {
  page: any;
  titolo: any;
  iconeCarosello: any;
}

export default function Mission({ page, titolo, iconeCarosello }: IMission) {
  return (
    <Page {...page}>
      <Titolo {...titolo} />
      <IconeCarosello {...iconeCarosello} />
    </Page>
  );
}
