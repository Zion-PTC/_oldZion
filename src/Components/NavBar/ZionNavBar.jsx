export default function ZionNavBar({ children }) {
  return (
    <div id='nav'
      style={{
        background: '#0C3A6F',
        gridArea: 'nav',
        height:'100%',
        display: 'grid',
        gridTemplateColumns: ' 55px 1fr 89px 55px',
        gridTemplateRows: '27.5px 27.5px',
        gridTemplateAreas:
          '"logo nav-menu1 web3 menu-btn" "logo nav-menu1 web3 menu-btn"',
      }}>
      {children}
    </div>
  )
}
