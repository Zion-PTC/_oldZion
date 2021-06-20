import React from 'react'
import { useState } from 'react'
import LbarDWeb from './Content/LbarDWeb'


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
    <div id='lbar'
      style={{
        background: '#0909a1',
        position: 'relative',
        width: '300px',
        gridArea: 'productarea',
        left: `${pos}`,
        transition: 'ease 0.5s'
      }}
    >
      <button id='button'
        style={{
          position: 'relative',
          left: '185px'
        }}
        onClick={handleToggle}
      >MENU</button>
      {lbarcontent}
    </div>
  )
}
