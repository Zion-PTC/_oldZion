import styled, { css } from "styled-components"
import { BRIGHT } from "../../../js/colori"
import Background from "../../Compositori/Background"
import Titolo from "../../Compositori/Titolo"
import { Wrapper, Page, Div } from "../../Elementi/Div"

let ProductWrapper = styled(Wrapper)`
  height: ${window.innerHeight + "px"};
  grid-template-rows: ${props => props.tipo === 2 ? "30% 70%" : "100%"};
  grid-template-areas: ${props => props.tipo === 2 ? "'a' 'b'" : "'a'"};
`

let ProductPage = styled(Page)`
  grid-area: a;
  height: ${window.innerHeight + "px"};
`

let Text = styled.p`
  grid-area: contenuto;
  color: ${props => props.color};
`

let Text2 = styled(Text)`
  width: 13em;
`

let div = {
  dynamic: css`
    grid-area: contenuto;
    ul {
      color: ${BRIGHT};
    }
  `
}

export default function Product({
  tipo,
  productWrapper,
  productPage,
  testo,
  titolo,
  background,
  children,
  list
}) {

  let testo_


  switch (tipo) {
    case 1:
      testo_ = <Text2 {...testo}>{children}</Text2>
      break;
    case 2:
      testo_ = <Text {...testo}>{children}</Text>
      break;

    default:
      break;
  }

  if (list) {
    let liEl1 = list[0];
    let liEl2 = list[1];
    let liEl3 = list[2];
    let el3LiEl1 = list[3][0]
    let el3LiEl2 = list[3][1]
    let el3LiEl3 = list[3][2]
    let metaversesCounter = 0
    let metaversesList = []
    list[3][3].forEach(element => {
      metaversesCounter ++
      metaversesList.push(<li key={metaversesCounter}>{element}</li>)
    });

    testo_ =
      <Div {...div}>
        <ul>
          <li>{liEl1}</li>
          <li>{liEl2}</li>
          <li>{liEl3}</li>
          <ul>
            <li>{el3LiEl1}</li>
            <li>{el3LiEl2}</li>
            <li>{el3LiEl3}</li>
            <ul>
              {metaversesList}
            </ul>
          </ul>
        </ul>
      </Div>

  }

  return (
    <ProductWrapper {...productWrapper}>
      <Background {...background} />
      <ProductPage {...productPage}>
        <Titolo {...titolo} />
        {testo_}
      </ProductPage>
    </ProductWrapper>
  )
}
