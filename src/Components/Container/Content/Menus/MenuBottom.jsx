export default function MenuBottom({children}) {
  return (
    <div id='menu-bottom'
      style={{
        background: '#094FA2',
        gridArea:'menu-bottom',
        display:'none'
      }}>
        {children}
    </div>
  )
}
