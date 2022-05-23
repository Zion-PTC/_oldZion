import styled from "styled-components";
import { media } from "../../js/responsiveness";
import { ResponsiveGridDiv } from "../Elementi/Div";
import Icona from "./Icona";

let IconeCaroselloArea = styled(ResponsiveGridDiv)`
  ${media.tabletPortrait} {
    div:last-child {
      grid-column: ${props => {
        if (props.isIconePari === 0) {
          return "span 1"
        } else {
          return "span 2;"
        }
      }}
    }
  }
  ${media.desktop} {
    div:last-child {
      grid-column: ${props => {
        if (props.isIconePari === 0) {
          return "span 3"
        } else {
          return "span 1"
        }
      }}
    }
  }
`


export default function IconeCarosello({
  titolo,
  icona,
  icone,
  responsiveGridDiv,
}) {

  let elements = []
  let counter = 0
  let slicedTitolo = titolo.slice(0, 3)

  function isOdd(num) { return num % 2; }
  let isIconePari = isOdd(icone.length)

  icone.forEach(element => {
    let id = slicedTitolo + counter

    counter++
    icona.img = {
      src: element.icona,
      dynamic: element.dynamic
    }
    let e = <Icona
      id={id}
      key={id}
      {...icona}
    >{element.testo}</Icona>
    elements.push(e)
  });

  return (
    <>
      <IconeCaroselloArea
        key={slicedTitolo}
        {...responsiveGridDiv}
        isIconePari={isIconePari}
      >
        {elements}
      </IconeCaroselloArea>
    </>
  )
}