export default function ProductArea({ children, gridPA }) {



  return (
    <div id='productarea'
      style={{
        display: 'grid',
        height:'100%',
        borderRadius: '6px',
        gridTemplateColumns: `${gridPA}`,
        gridAutoRows: '55px',
        gridArea: 'productarea',
        gridAutoFlow: 'dense',
        background: 'grey',
        padding:'2px',
        overflow: 'auto',
      }}>
      {children}
    </div>
  )
}
