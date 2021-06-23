import styled from "styled-components"

const PRODUCTAREA = styled.div`
  position: relative;
  grid-area: productarea;
  height: 100%;
  overflow: auto;
  background: blueviolet;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: ${props => props.gridTC};
  grid-auto-rows: 55px;
`

export default function Product({ children, gridPA }) {
  return (
    <PRODUCTAREA id='productarea' gridTC={gridPA}>
      {children}
    </PRODUCTAREA>
  )
}
