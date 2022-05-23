import Background from "../../Compositori/Background";
import Titolo from "../../Compositori/Titolo"
import { Wrapper, Page } from "../../Elementi/Div";
import { createLiElements } from "../../Utils/Utils";
import { Ul } from "../../Elementi/Ul"

export default function Problem({
  wrapper,
  page,
  titolo,
  ul,
  li,
  background
}) {

  return (
    <Wrapper {...wrapper}>
      <Background {...background}/>
      <Page {...page}>
        <Titolo {...titolo}></Titolo>
        <Ul {...ul}>
          {createLiElements(li)}
        </Ul>
      </Page>
    </Wrapper>
  )
}