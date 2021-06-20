
import { WEB3CONN } from '../../../_ZION Styled Components/ZION.styled'
import useEthereum from '../../../Hooks/useEthereum'

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
