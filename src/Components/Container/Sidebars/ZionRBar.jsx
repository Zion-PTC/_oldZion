export default function ZionRBar({children}) {
  return (
    <div id='rbar'
    style={{
      background: '#183251',
      gridArea: 'rbar',
      display: 'none'
      }}>
        {children}
    </div>
  )
}
