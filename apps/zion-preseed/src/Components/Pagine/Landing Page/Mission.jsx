import IconeCarosello from "../../Compositori/IconeCarosello"
import Titolo from "../../Compositori/Titolo"
import { Page } from "../../Elementi/Div"

export default function Mission({
  page,
  titolo,
  iconeCarosello
}) {

  return (
    <Page {...page}>
      <Titolo {...titolo} />
      <IconeCarosello {...iconeCarosello}/>
    </Page>
  )
}
