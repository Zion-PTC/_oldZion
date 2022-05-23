import styled from "styled-components"
import { media } from "../../../js/responsiveness"
import Chart from "../../Compositori/Chart"
import Titolo from "../../Compositori/Titolo"
import { Page } from "../../Elementi/Div"

let Div = styled.div`
  grid-area: contenuto;
  display: grid;
  grid-template-columns: 1fr;
  grid-area: ${props => props.gridArea};
  ${media.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
  }
  place-items: center;
`

export default function Tokenomics({
  page,
  titolo,
  chart1,
  chart2,
  div
}) {

  return (
    <Page {...page}>
      <Titolo {...titolo} />
      <Div {...div}>
        <Chart {...chart1}></Chart>
        <Chart {...chart2}></Chart>
      </Div>
    </Page>
  )
}