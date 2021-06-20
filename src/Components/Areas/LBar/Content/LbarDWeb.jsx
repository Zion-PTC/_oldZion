import React from 'react'
import LbarNotConnected from './LbarNotConnected'
import LbarConnected from './LbarConnected'
import useGetAccounts from '../../../Hooks/useGetAccounts'

export default function LbarDWeb() {
  var connected = useGetAccounts()[1]
  var lbar = ''
  if (connected) { lbar = <LbarConnected></LbarConnected>}
  else { lbar = <LbarNotConnected></LbarNotConnected>}

  return (
    <>
      {lbar}
    </>
  )
}
