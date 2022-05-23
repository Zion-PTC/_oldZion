import styled from "styled-components"
import { P } from "../Elementi/P"

let Label = styled.label`
  color: ${props => props.color};
`

let Area = styled.div`
    padding: 0;
    border: none;
    color: ${props => props.color};
    height: ${props => props.height};
    background-color: ${props => props.bkgColor};
    border-radius: ${props => props.borderRadius};
    display: grid;
    align-content: center;
    justify-content: center;
  `

export default function Display({
  display
}) {
  let { data, name, color, height, bkgColor, borderRadius, label } = display

  return (
    <>
      <Label {...label}></Label>
      <Area
        color={color}
        height={height}
        bkgColor={bkgColor}
        borderRadius={borderRadius}
        name={name}
      >
        <P >{data}</P>
      </Area>
    </>
  )
}
