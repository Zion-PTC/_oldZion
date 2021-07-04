import React from 'react'
import LbarNotConnected from './LbarNotConnected'
import LbarConnected from './LbarConnected'
import { useSelector } from 'react-redux'

export default function LbarDWeb() {
  const userStatus = useSelector(state => state.ethereum.isUserConnected)
  var lbar = ''
  if (userStatus) { lbar = <LbarConnected></LbarConnected> }
  else { lbar = <LbarNotConnected></LbarNotConnected> }

  return (
    <>
      {lbar}
    </>
  )
}
