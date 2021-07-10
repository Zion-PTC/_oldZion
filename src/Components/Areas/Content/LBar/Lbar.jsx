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
  const userStatus = useSelector(state => state.ethereum.isUserConnected)
  const userInviteBalance = useSelector(state => state.ethereum.userTNLinvitationTokenBalance)
  const width = useSelector(state => state.responsiveDesign.screenMaxWidth)
  const colSize = useSelector(state => state.productArea.colSize)
  const innerWidth = window.innerWidth
  var pos = ''
  if (isLeftBarHidden) { pos = '-300px' } else { pos = '0px' }

  let lbarcontent
  switch (isEth) {
    case false:
      lbarcontent = <p>no metamask,fuck you</p>
      break;
    case true:
      switch (userStatus) {
        case false:
          lbarcontent = <LbarNotConnected></LbarNotConnected>
          break;
        case true:
          switch (userInviteBalance) {
            case '0':
              console.log('no invitation token');
              lbarcontent = <LbarConnected></LbarConnected>
              break;
            default:
              lbarcontent = <LbarInvite userInviteBalance={userInviteBalance}></LbarInvite>
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

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
      screen width: {width} <br/>
      colsize : {colSize} <br/>
      innerwidth: {innerWidth}
    </LBAR>
  )
}

function LbarConnected() {
  return (
    <>
      <p>good metamask</p>
      <p>and you are also connected =)</p>
    </>
  )
}

function LbarNotConnected() {
  return (
    <>
      <p>good metamask</p>
      <p>but in fact you are not connected</p>
    </>
  )
}

function LbarInvite({ userInviteBalance }) {
  return (
    <>
      <p>good metamask</p>
      <p>but in fact you are not connected</p>
      <p>an your token balance is : {userInviteBalance}</p>

    </>
  )
}

