import { useSelector } from "react-redux"
import styled from "styled-components"


const PRODUCTAREA = styled.div`
  position: relative;
  grid-area: productarea;
  height: 100%;
  overflow: auto;
  background: blueviolet;
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 55px;
  grid-template-columns: ${props => props.gridPATC};
  place-self: center;
`

export default function Product({ children }) {
  const gridPA = useSelector(state => state.productArea.gridPA)
  return (
    <PRODUCTAREA id='productarea' gridPATC={gridPA}>
      {children}
    </PRODUCTAREA>
  )
}
