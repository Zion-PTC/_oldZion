export default function ZionContainer({ left, children }) {
  return (
    <div id='container'
      style={{
        gridArea: 'container',
        background: 'green',
        overflow: 'auto',
        height: '100%'
      }}>
      <div id='container-grid'
        style={{
          position: 'relative',
          left: `${left}`,
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '144px 100vw 144px',
          gridTemplateAreas: ' "lbar content rbar" '
        }}>
        {children}
      </div>
    </div>
  )
}
