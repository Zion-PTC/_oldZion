export default function NavMenu1() {
  const li_style = {

  }

  const a_style = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '70%',
    
  }

  return (
    <ul id='nav-menu1' style={{
      gridArea: 'nav-menu1',
      width: '100%',
      height: '100%',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    }} >
      <div style={{
        display: 'flex',
        gridAutoRows: '1fr',
        
        width: '100%'
      }}>
        <li id='nav-menu-item'><a href='' style={a_style}>Playlists</a></li>
        <li id='nav-menu-item'><a href='' style={a_style}>Playlists</a></li>
      </div>
    </ul>
  )
}
