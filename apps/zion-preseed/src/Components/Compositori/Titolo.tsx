import * as styled from '@zionrepack/styled-components';
import { ReactFragment } from 'react';
import { DARK, MID } from '../../js/colori';
import { Div } from '../Elementi/Div';

let AreaTitolo2 = styled.div`
  display: flex;
  flex-direction: row;
`;

let Barra1 = styled.div<ITitolo>`
  border-radius: 5px;
  background-color: ${MID};
  height: 8px;
  width: 60%;
`;

let Barra2 = styled.div<ITitolo>`
  background-color: ${MID};
  width: 20%;
  margin-right: 10px;
`;

let Barra3 = styled.div<ITitolo>`
  background-color: ${DARK};
  width: 10%;
  margin-right: 10px;
`;

let Testo = styled.h1`
  margin: 0;
  border: 0;
  padding: 0;
  font-weight: 900;
  font-style: normal;
  color: ${({ color }) => color};
`;

let TestoSmall = styled.p`
  margin: 0;
  border: 0;
  padding: 0;
  color: ${({ color }) => color};
`;

interface ITitolo {
  div?: any;
  tipo?: number;
  color?: string;
  sottoTitolo?: string;
  barraColor?: string;
  children?: ReactFragment;
}

export default function Titolo({
  div,
  tipo,
  color, //
  sottoTitolo, //
  barraColor,
  children,
}: ITitolo) {
  let contenuto;

  let Titolo1 = (
    <>
      <Barra1 barraColor={barraColor}></Barra1>
      <Testo color={color}>{children}</Testo>
    </>
  );

  let Titolo2 = (
    <AreaTitolo2 id='titolo-tipo2'>
      <Barra2 id='barra2' barraColor={barraColor}></Barra2>
      <Testo id='testo' color={color}>
        {children}
      </Testo>
    </AreaTitolo2>
  );

  let Titolo3 = (
    <AreaTitolo2 id='titolo-tipo3'>
      <Barra3 id='barra3' barraColor={barraColor}></Barra3>
      <div>
        <Testo id='testo' color={color}>
          {children}
        </Testo>
        <TestoSmall id='testoSmall' color={color}>
          {sottoTitolo}
        </TestoSmall>
      </div>
    </AreaTitolo2>
  );

  switch (tipo) {
    case 1:
      contenuto = Titolo1;
      break;

    case 2:
      contenuto = Titolo2;
      break;

    case 3:
      contenuto = Titolo3;
      break;

    default:
      break;
  }

  return <Div {...div}>{contenuto}</Div>;
}
