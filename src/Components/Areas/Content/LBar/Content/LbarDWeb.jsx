import React from 'react'
import LbarNotConnected from './LbarNotConnected'
import LbarConnected from './LbarConnected'
import useWeb3 from '../../../../Hooks/useWeb3'

export default function LbarDWeb() {
  var userStatus = useWeb3()[3]
  var lbar = ''
  if (userStatus) { lbar = <LbarConnected></LbarConnected>}
  else { lbar = <LbarNotConnected></LbarNotConnected>}

  return (
    <>
      {lbar}
    </>
  )
}
