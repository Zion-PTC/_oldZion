import React from 'react'
import { WEB3CONN } from '../../../_ZION Styled Components/ZION.styled'
import styled from 'styled-components'

  const P = styled.p`
    font-size: 65%;
  `

export default function NoWeb3() {

  return (
    <>
      <WEB3CONN>
        <P>Consider downloading Metamask</P>
      </WEB3CONN>
    </>
  )
}
