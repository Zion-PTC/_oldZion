import styled from 'styled-components';
import { P } from '../Elementi/P';

interface IArea {
  gridArea?: string;
}

let Area = styled.div<IArea>`
  place-self: center;
  text-align: center;
  grid-area: ${props => props.gridArea};
`;

interface IH1 {
  testoColore?: string;
}

let H1 = styled.h1<IH1>`
  color: ${props => props.testoColore};
`;

interface IPSmall extends IH1 {}

let Psmall = styled.p<IPSmall>`
  font-size: 1.4vh;
  color: ${props => props.testoColore};
`;

let Plimited = styled(P)`
  width: 13em;
`;

interface ITesto1 {
  gridArea?: string;
  testoColore?: string;
  par1?: string;
  par2?: string;
  par3?: string;
}

let Testo1 = ({ gridArea, testoColore, par1, par2, par3 }: ITesto1) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <P testoColore={testoColore}>{par1}</P>
        <H1 testoColore={testoColore}>{par2}</H1>
        <Psmall testoColore={testoColore}>{par3}</Psmall>
      </Area>
    </>
  );
};

interface ITesto2 {
  gridArea?: string;
  testoColore?: string;
  par1?: string;
  par2?: string;
}

let Testo2 = ({ gridArea, testoColore, par1, par2 }: ITesto2) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <H1 testoColore={testoColore}>{par1}</H1>
        <Psmall testoColore={testoColore}>{par2}</Psmall>
      </Area>
    </>
  );
};

interface ITesto3 {
  gridArea?: string;
  testoColore?: string;
  par1?: string;
  list_?: string[];
  par2?: string;
}

let Testo3 = ({ gridArea, par1, list_, par2 }: ITesto3) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <p>{par1}</p>
        <ul>{list_}</ul>
        <p>{par2}</p>
      </Area>
    </>
  );
};

interface ITesto {
  tipo?: number;
  testoColore?: string;
  gridArea: string;
  par1?: string;
  par2?: string;
  par3?: string;
  list_: string[];
  children: any;
}

export default function Testo({
  tipo,
  testoColore,
  gridArea,
  par1,
  par2,
  par3,
  list_,
  children,
}: ITesto) {
  let contenuto;

  switch (tipo) {
    case 1:
      contenuto = (
        <Testo1
          gridArea={gridArea}
          testoColore={testoColore}
          par1={par1}
          par2={par2}
          par3={par3}
        />
      );
      break;

    case 2:
      contenuto = (
        <Testo2
          gridArea={gridArea}
          testoColore={testoColore}
          par1={par1}
          par2={par2}
        />
      );
      break;

    case 3:
      contenuto = (
        <Testo3 gridArea={gridArea} list_={list_} par1={par1} par2={par2} />
      );
      break;

    case 4:
      contenuto = <P testoColore={testoColore}>{children}</P>;
      break;

    case 5:
      contenuto = <Plimited>{children}</Plimited>;
      break;

    default:
      break;
  }

  return <>{contenuto}</>;
}
