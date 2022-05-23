import styled from "styled-components"
import Background from "../../Compositori/Background"

import Titolo from "../../Compositori/Titolo"
import { Wrapper } from "../../Elementi/Div"

let AreaCover = styled.div`
    display: grid;
    position: relative;
    grid-area: a;
    grid-template-columns: 1fr 9fr 1fr;
    grid-template-rows: 1fr 5fr 3fr;
    grid-template-areas: ". . ." ". logo ." ". titolo .";
  `

let Cornice = styled.div`
    display: grid;
    place-self: center;
    align-items: center;
    text-align: center;
    height: 234px;
    width: 234px;
    border-radius: 100%;
    // PROPS //
    background-color: ${props => props.backgroundColor};
    grid-area: ${props => props.gridArea};
  `

export default function Cover({
  wrapper,
  page,
  titolo,
  cornice,
  img,
  background
}) {

  let { id } = page

  return (
    <Wrapper {...wrapper}>
      <Background {...background} />
      <AreaCover id={id}>
        <Cornice {...cornice}>
          <img {...img} alt={img.alt}/>
        </Cornice>
        <Titolo {...titolo}/>
      </AreaCover>
    </Wrapper>
  )
}

