import styled from "styled-components"

const CONTENT = styled.div`
  position: relative;
  top: ${props => props.top};
  height: ${props => props.height};
  overflow: auto;
  grid-area: content;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props => props.gridTR};
  grid-template-areas: "menu" "productarea";
  transition: ease 0.5s;
`

export default function Content({ children, menuHidden, menuBarH }) {
  const contentHeight = menuHidden ? '100%' : 'calc(100% + ' + menuBarH + 'px)'
  const contentGridTR = 'auto 1fr'
  const top = menuHidden ? ('0' + 'px') : (-menuBarH + 'px')

  return (
    <CONTENT top={top} gridTR={contentGridTR} height={contentHeight} id='content'>
      {children}
    </CONTENT>
  )
}
