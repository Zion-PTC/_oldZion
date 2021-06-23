import React from 'react'
import { useState } from 'react'
import LbarDWeb from './Content/LbarDWeb'
import { LBAR } from '../../_ZION Styled Components/ZION.styled'


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
