import styled from 'styled-components';
import { MIDDARK } from '../../js/colori';

interface ICerchio {
  gridArea: string;
  placeSelf: string;
}

function Cerchio({ gridArea, placeSelf }: ICerchio) {
  let Cerchio = styled.div<ICerchio>`
    background-color: ${MIDDARK};
    border-radius: 100%;
    height: 18rem;
    width: 18rem;
    grid-area: ${props => props.gridArea};
    place-self: ${props => props.placeSelf};
  `;

  return <Cerchio gridArea={gridArea} placeSelf={placeSelf} />;
}

export { Cerchio };
