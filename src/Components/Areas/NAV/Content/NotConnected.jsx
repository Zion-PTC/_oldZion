import styled from 'styled-components'
import useEthereum from '../../../Hooks/useEthereum'

const WEB3CONN = styled.div`
  grid-area: web3;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: ". . ." ". a ." ". b .";
  button {
    color: #F6E6D8;
    grid-area: a;
    border-radius: 1em;
    background: #E17D25;
    border: solid 0.1em #A15614;
  }
`

const MetaMaskButton = styled.button`
  font-size: 60%;
  border: solid 1px #174666;
  border-radius: 3px;
  place-self: center;
`

export default function NotConnected() {
  const metaConnectionMessage = useEthereum()[0]
  const meta = useEthereum()[1]

  return (
    <>
      <WEB3CONN>
        <button
          onClick={meta}
        >Connect</button>
        <p style={{ gridArea: 'b', margin: '0' }}>{metaConnectionMessage}</p>
      </WEB3CONN>
    </>
  )
}
