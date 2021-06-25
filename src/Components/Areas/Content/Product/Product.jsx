import { useSelector } from "react-redux";
import {selectProductAreaResponsive, setGridPASmall, setGridPAMid } from "../../../../features/productAreaResponsive/productAreaResponsiveSlice";
import { useDispatch } from "react-redux";
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

export default function Product({ children }) {
  const gridPA = useSelector(selectProductAreaResponsive).gridPA
  const dispatch = useDispatch()
  console.log(gridPA);

  const mediaQuery = '(max-width: 867px)';
  const mediaQueryList = window.matchMedia(mediaQuery)
  if (mediaQueryList.matches) {
    dispatch(setGridPASmall())
  } else {
    dispatch(setGridPAMid())
  }
  mediaQueryList.addEventListener('change', event => {
    if (event.matches) {
      dispatch(setGridPASmall())
    } else {
      dispatch(setGridPAMid())
    }
  })


  return (
    <PRODUCTAREA id='productarea' gridTC={gridPA}>
      {children}
    </PRODUCTAREA>
  )
}
