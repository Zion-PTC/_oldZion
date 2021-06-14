export default function PimpDiv({children, id, position, top, bottom, h, w, background, gridArea, overFlow, display, zIndex, transition, gtc, gtr, gar, gac}) {
  const style={
    height:`${h}`,
    width:`${w}`,
    background:`${background}`,
    display: `${display}`,
    gridTemplateColumns: `${gtc}`,
    gridTemplateRows: `${gtr}`,
    gridAutoColumns: `${gac}`,
    gridAutoRows: `${gar}`,
    gridArea:`${gridArea}`,
    overFlow: `${overFlow}`,
    position: `${position}`,
    zIndex: `${zIndex}`,
    top: `${top}`,
    bottom: `${bottom}`,
    transition: `${transition}`
  }
  return(
    <div id={id} position={position} bottom={bottom} style={style}>{children}</div>
  )
}