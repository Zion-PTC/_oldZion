import Background from "../../Compositori/Background"
import IconeCarosello from "../../Compositori/IconeCarosello"
import Titolo from "../../Compositori/Titolo"
import { Page, Wrapper } from "../../Elementi/Div"

export default function Solution({
  wrapper,
  page,
  titolo,
  iconeCarosello,
  background,
}) {

  return (
    <Wrapper {...wrapper}>
      <Background {...background} />
      <Page {...page}>
        <Titolo {...titolo} />
        <IconeCarosello {...iconeCarosello} />
      </Page>
    </Wrapper>
  )
}
