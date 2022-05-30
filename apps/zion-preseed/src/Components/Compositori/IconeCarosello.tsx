import styled from "styled-components";
import { media } from "../../js/responsiveness";
import { ResponsiveGridDiv } from "../Elementi/Div";
import Icona from "./Icona";

let IconeCaroselloArea = styled<typeof ResponsiveGridDiv>(ResponsiveGridDiv)`
  ${media.tabletPortrait} {
    div:last-child {
      grid-column: ${(props:{isIconePari:number}) => {
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

interface IIConeCarosello{
  titolo:any,
  icona:any,
  icone:any[],
  responsiveGridDiv:any,
}

export default function IconeCarosello({
  titolo,
  icona,
  icone,
  responsiveGridDiv,
}:IIConeCarosello) {

  let elements:any[] = []
  let counter = 0
  let slicedTitolo = titolo.slice(0, 3)

  function isOdd(num:number) { return num % 2; }
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