import { useSelector } from "react-redux";
import {selectProductAreaResponsive, setGridPASmall, setGridPAMid } from "../../../../features/productAreaResponsive/productAreaResponsiveSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { useEffect } from "react";

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
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1251px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

export default function Product({ children }) {
  // const gridPA = useSelector(selectProductAreaResponsive).gridPA
  // const dispatch = useDispatch()
  // console.log(gridPA);

  // const mediaQuery = '(max-width: 867px)';
  // const mediaQueryList = window.matchMedia(mediaQuery)
  // if (mediaQueryList.matches) {
  //   dispatch(setGridPASmall())
  // } else {
  //   dispatch(setGridPAMid())
  // }
  // mediaQueryList.addEventListener('change', event => {
  //   if (event.matches) {
  //     dispatch(setGridPASmall())
  //   } else {
  //     dispatch(setGridPAMid())
  //   }
  // })

  

  return (
    <PRODUCTAREA id='productarea' >
      {children}
    </PRODUCTAREA>
  )
}
