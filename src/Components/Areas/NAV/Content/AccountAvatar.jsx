import styled from "styled-components"

const ACCOUNTAVATAR = styled.img`
  height: 85%;
  grid-area: logo;
  place-self: center;
`

export default function AccountAvatar({logoURL}) {
  return (
    <ACCOUNTAVATAR src={logoURL} alt='AccountLogo'>
      
    </ACCOUNTAVATAR>
  )
}
