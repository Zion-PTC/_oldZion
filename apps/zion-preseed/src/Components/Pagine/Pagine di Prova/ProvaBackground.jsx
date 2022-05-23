import Background from "../../Compositori/Background";
import { vinyl } from "../../../js/immagini"
import styled from "styled-components";

let Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: ". . . " ". a . " " . . . ";
`

let provaBkgObj = {
  area: {
    id: "bkgArea",
    gridArea: "a"
  },
  filter: {
    backgrounColor: "#010814c1",
  },
  img: {
    position: "relative",
    top: "-30%",
    left: "-50%",
    width: "200%",
    src: vinyl,
    alt: "background_image",
  }
}


export default function ProvaBackground() {
  return (
    <Wrapper>
      <Background {...provaBkgObj} />
    </Wrapper>
  )
}
