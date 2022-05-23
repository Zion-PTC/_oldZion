import styled from "styled-components"
import { InitialStyle, ResponsiveGrid, ResponsiveSize } from "../Styled/Utils"

export const Div = styled.div`
  ${InitialStyle};
  ${props => props.dynamic};
  `

export const GridDiv = styled.div`
  display: grid;
  ${props => props.dynamic};
  `

export const CenteredItemsGridDiv = styled.div`
  display: grid;
  justify-items: center;
  `

export const ResponsiveGridDiv = styled(CenteredItemsGridDiv)`
  ${ResponsiveGrid}
  ${props => props.dynamic};
`

export const FormWrapper = styled.div`
  ${InitialStyle};
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  ${props => props.dynamic};
`

export const Wrapper = styled.div`
  ${InitialStyle};
  width: 100%;
  min-height: ${window.innerHeight + "px"};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: "a";
  ${props => props.dynamic};
`

export const Page = styled.div`
  ${InitialStyle};
  display: grid;
  grid-area: a;
  position: relative;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 1fr 1fr 12fr;
  grid-template-areas: ". . ." ". titolo ." ". contenuto .";
  ${props => props.dynamic};
`

export const OverflowArea = styled.div`
  ${InitialStyle};
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: "a";
  ${props => props.dynamic};
`

export const Filter = styled.div`
  ${InitialStyle};
  position: relative;
  grid-area: a;
  ${props => props.dynamic};
`

export let checkBarra = () => {
}

export const Barra = styled.div`

`

export const Cerchio = styled.div`
  width: 230px;
  height: 230px;
  place-self: center;
  display: grid;
  grid-template-areas: "a";
  border-radius: 100%;
  ${ResponsiveSize}
  ${props => props.dynamic};
  `

export const Chart = styled.div`
  border-radius: 100%;
  height: 18rem;
  width: 18rem;
  @media (max-width: 641px) {
    height: 18rem;
    width: 18rem;
  }
  :last-child {
    margin: 1rem 0 1rem 0;
  }
  ${props => props.dynamic};
`