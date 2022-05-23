import styled, { css } from "styled-components";
import { Cerchio, GridDiv } from "../Elementi/Div"
import { Img } from "../Elementi/Img"
import { P } from "../Elementi/P"

let IconaP = styled(P)`
  ${props => props.dynamic}
  font-family: 'Space Mono', monospace;
  text-align: center;
`

export default function Icona({
  id,
  children,
  gridDiv,
  cerchio,
  img,
  p
}) {

  // img.dynamic = css`
  //   height: 80%;
  //   place-self: center;
  // `

  let idCerchio = "cerchio" + id
  let idTesto = "testo" + id
  let margin = "0.4em"

  gridDiv.dynamic = css`margin: 0 ${margin} 0 ${margin} ;`

  return (
    <GridDiv
      id={id}
      key={id}
      {...gridDiv}
    >
      <Cerchio
        id={idCerchio}
        key={idCerchio}
        {...cerchio}
      >
        <Img {...img}></Img>
      </Cerchio>
      <IconaP
        id={idTesto}
        key={idTesto}
        {...p}
      >
        {children}
      </IconaP>
    </GridDiv>
  )
}
