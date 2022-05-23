import Testo from "../../Compositori/Testo";
import Titolo from "../../Compositori/Titolo";
import YouTube from "../../Compositori/YouTube";
import { Wrapper, Page } from "../../Elementi/Div";
import { createLiElements } from "../../Utils/Utils";

export default function Intro({
  wrapper,
  page,
  titolo,
  testo,
  youTube,
}) {

  let obj = {
    dynamic:"",
    pars :testo.list
  }

  let liElements = createLiElements(obj)
  
  return (
    <Wrapper {...wrapper}>
      <Page {...page}>
        <Titolo {...titolo}/>
        <YouTube {...youTube}/>
        <Testo {...testo} list_={liElements} />
      </Page>
    </Wrapper>
  )
}
