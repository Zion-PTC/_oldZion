export default function NoMetamaskMess() {
  const noMetaMaskMess = {
    p1: 'In order to fully exploit the possibilities of our dAPP, we suggest you to download {MetaMask}',
    p2: 'We will soon show our TNLDGL Playlist from Audius',
    p3: 'We will show the TNL25 submissions playlist'
  }

  return (
    <div style={{gridArea:'content', height:'100%'}}>
      <p>{noMetaMaskMess.p1}</p>
      <p>{noMetaMaskMess.p2}</p>
      <p>{noMetaMaskMess.p3}</p>
    </div>
  )
}
