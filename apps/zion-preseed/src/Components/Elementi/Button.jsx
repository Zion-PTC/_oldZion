import styled, { css } from "styled-components"
import { RADIUMMID } from "../../js/altezze"
import { BLUE, BRIGHT, GREEN, MID, MIDBRIGHT, ORANGE, RED, VIOLET, YELLOW } from "../../js/colori"

let checkColor = (props) => {
  let color
  
  const red = css`background-color:${RED};`
  const orange = css`background-color:${ORANGE};`
  const yellow = css`background-color:${YELLOW};`
  const green = css`background-color:${GREEN};`
  const blue = css`background-color:${BLUE};`
  const violet = css`background-color:${VIOLET};`
  
  if (props.red) {color=red}
  else if (props.orange) {color=orange}
  else if (props.green) {color=green}
  else if (props.yellow) {color=yellow}
  else if (props.violet) {color=violet}
  else {color=blue}
  
  return color
}

let checkSize = (props) => {
  let defaultValue = css`
  width: 70%;
  height: 3em;
  place-self: center;
  `

  const small = css`
  width: 50%;
  height: 2.5em;
  place-self: center;
  font-size: 0.9em;
  `

  const mid = css`
  width: 99%;
  height: 3.5em;
  place-self: center;
  `

  const large = css`
  width: 100%;
  height: 3.5em;
  font-size: 1.3em;
  `

  let size

  if (props.small) { size = small }
  else if (props.mid) { size = mid }
  else if (props.large) { size = large }
  else { size = defaultValue }
  return size
}

export const Button = styled.button`
  padding: 0;
  font-size: 1em;
  border: none;
  box-sizing: border-box;
  border-radius: ${RADIUMMID};
  ${checkSize};
  ${checkColor};
  color: ${BRIGHT};
  cursor: pointer;
  :hover {
    color: ${MID};
  }
  :active {
    color: ${MIDBRIGHT};
  }
  ${props => props.dynamic};
`
