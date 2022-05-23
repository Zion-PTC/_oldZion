import styled from "styled-components"
import Background from "../../Compositori/Background"
import Chart from "../../Compositori/Chart"
import Titolo from "../../Compositori/Titolo"
import { Wrapper, Page } from "../../Elementi/Div"

let BusinessWrapper = styled(Wrapper)`
  max-height: ${window.innerHeight+"px"};
`

export default function BusinessModel({
  businessWrapper,
  page,
  titolo,
  chart,
  background,
}) {

  return (
    <BusinessWrapper {...businessWrapper}>
      <Background {...background}/>
      <Page {...page}>
        <Titolo {...titolo} />
        <Chart {...chart}></Chart>
      </Page>
    </BusinessWrapper>
  )
}
