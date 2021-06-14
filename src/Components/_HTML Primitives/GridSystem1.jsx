export default function GridSystem1({children, c, r, a, left}) {
  const style = {
    height:'100vh',
    width:'100vw',
    display: 'grid',
    gridTemplateColumns: `${c}`,
    gridTemplateRows: `${r}`,
    gridTemplateAreas: `${a}`,
    position:'relative',
    left: `${left}`
}
  return(
    <div id='GridSystem1' style={style}>
      {children}
    </div>
  )  
}