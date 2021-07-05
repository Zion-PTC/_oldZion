import React from 'react'
import LbarDWeb from './Content/LbarDWeb'
import styled from 'styled-components'
import { setLeftBarHidden } from '../../../../features/leftBar/leftBarSlice'
import { useDispatch, useSelector } from 'react-redux'

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
  const dispatch = useDispatch()
  const isLeftBarHidden = useSelector(state => state.leftBar.isHidden)
  const isEth = useSelector(state => state.ethereum.isEth)
  var pos = ''
  if (isLeftBarHidden) { pos = '-300px' } else { pos = '0px' }

  var lbarcontent = ''
  if (isEth === '0000') { lbarcontent = <p>no metamask,fuck you</p> }
  else { lbarcontent = <LbarDWeb></LbarDWeb> }

  return (
    <LBAR id='lbar'
      left={pos}
    >
      <button id='button'
        style={{
          position: 'relative',
          left: '185px'
        }}
        onClick={() => dispatch(setLeftBarHidden())}
      >MENU</button>
      {lbarcontent}
    </LBAR>
  )
}
