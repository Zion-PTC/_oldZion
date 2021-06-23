import React from 'react'
import { useState } from 'react'
import LbarDWeb from './Content/LbarDWeb'
import styled from 'styled-components'

const LBAR = styled.div`
  background: #0909a1 ;
  position: relative;
  width: 300px;
  grid-area: productarea;
  left: ${props => props.left};
  transition: ease 0.5s;
  p {
    color: aliceblue;
  }
`

export default function Lbar() {
  
  var [lbarHidden, setLbarHidden] = useState(true)
  var pos = ''
  if(lbarHidden) {pos = '-300px'} else { pos = '0px'}

  function handleToggle() {
    setLbarHidden(!lbarHidden)
  }
  var lbarcontent = ''
  if (window.ethereum === undefined) { lbarcontent = <p>no metamask,fuck you</p> }
  else {
    
    lbarcontent = <LbarDWeb></LbarDWeb> }

  return (
    <LBAR id='lbar'
    left = {pos}
    >
      <button id='button'
        style={{
          position: 'relative',
          left: '185px'
        }}
        onClick={handleToggle}
      >MENU</button>
      {lbarcontent}
    </LBAR>
  )
}
