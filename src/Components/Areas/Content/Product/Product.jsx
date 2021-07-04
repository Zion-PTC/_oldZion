import { useSelector } from "react-redux"
import styled from "styled-components"
import { store } from '../../../../app/store'


const PRODUCTAREA = styled.div`
  position: relative;
  grid-area: productarea;
  height: 100%;
  overflow: auto;
  background: blueviolet;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 55px;
  grid-template-columns: ${props => props.gridPATC};
  /* @media screen and (min-width: 800px) {
  }
  @media only screen and (min-width: 1251px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  } */
`

export default function Product({ children }) {
  const gridPATC = store.getState().productAreaResponsive.gridPA
  const gridPA = useSelector(state => state.productAreaResponsive.gridPA)
  console.log(gridPA);
  return (
    <PRODUCTAREA id='productarea' gridPATC={gridPA}>
      {children}
    </PRODUCTAREA>
  )
}
