import { css } from 'styled-components';
import { Button } from './Elementi/Button';
import { Div, Page } from './Elementi/Div';
import { Form } from './Elementi/Form';
import { Input } from './Elementi/Input';
import { Label } from './Elementi/Label';

const page = {
  id: 'pagina',
  dynamic: css`
    grid-area: contenuto;
  `,
};

const button = {
  dynamic: css`
    grid-area: titolo;
  `,
};

const div = {
  id: 'Contenitore',
  dynamic: css`
    display: grid;
    grid-area: contenuto;
    place-items: center;
  `,
};

const form = {
  id: 'form',
  dynamic: css`
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas: 'label field';
  `,
};

const label = {
  htmlfor: 'strano',
  children: 'boh',
  dynamic: css`
    grid-area: label;
  `,
};

const input = {
  placeholder: 'boh',
  dynamic: css`
    grid-area: field;
  `,
};

export default function TuttiGliElementi() {
  return (
    <Page {...page}>
      <Button {...button} small violet>
        Cliccami
      </Button>
      <Div {...div}>
        <Form {...form}>
          <Label {...label}></Label>
          <Input {...input}></Input>
        </Form>
      </Div>
    </Page>
  );
}
