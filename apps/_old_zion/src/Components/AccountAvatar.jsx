import styled from 'styled-components'

const ACCOUNTAVATAR = styled.img`
  height: 85%;
  grid-area: logo;
  place-self: center;
`

let AccountAvatar = ({ logoURL }) => (
  <ACCOUNTAVATAR src={logoURL} alt='AccountLogo' />
)

export default AccountAvatar