import styled from "styled-components"
import { P } from "../Elementi/P"

let Area = styled.div`
    place-self: center;
    text-align: center;
    grid-area: ${props => props.gridArea};
  `

let H1 = styled.h1`
    color: ${props => props.testoColore};
  `



let Psmall = styled.p`
    font-size: 1.4vh;
    color: ${props => props.testoColore};
  `

let Plimited = styled(P)`
    width: 13em;
  `

let Testo1 = ({
  gridArea,
  testoColore,
  par1,
  par2,
  par3
}) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <P testoColore={testoColore}>{par1}</P>
        <H1 testoColore={testoColore}>{par2}</H1>
        <Psmall testoColore={testoColore}>{par3}</Psmall>
      </Area>
    </>
  )
}

let Testo2 = ({
  gridArea,
  testoColore,
  par1,
  par2,
}) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <H1 testoColore={testoColore}>{par1}</H1>
        <Psmall testoColore={testoColore}>{par2}</Psmall>
      </Area>
    </>
  )
}

let Testo3 = ({
  gridArea,
  par1,
  list_,
  par2
}) => {
  return (
    <>
      <Area gridArea={gridArea}>
        <p>{par1}</p>
        <ul>
          {list_}
        </ul>
        <p>{par2}</p>
      </Area>
    </>
  )
}

export default function Testo({
  tipo,
  testoColore,
  gridArea,
  par1,
  par2,
  par3,
  list_,
  children
}) {

  let contenuto

  switch (tipo) {
    case 1:
      contenuto = <Testo1
        gridArea={gridArea}
        testoColore={testoColore}
        par1={par1}
        par2={par2}
        par3={par3}
      />
      break;

    case 2:
      contenuto = <Testo2
        gridArea={gridArea}
        testoColore={testoColore}
        par1={par1}
        par2={par2}
      />
      break;

    case 3:
      contenuto = <Testo3
        gridArea={gridArea}
        list_={list_}
        par1={par1}
        par2={par2}
      />
      break;

    case 4:
      contenuto = <P testoColore={testoColore}>{children}</P>
      break;

    case 5:
      contenuto = <Plimited>{children}</Plimited>
      break;

    default:
      break;
  }

  return (
    <>
      {contenuto}
    </>
  )
}
