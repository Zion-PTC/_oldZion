import { OverflowArea, Filter } from "../Elementi/Div"
import { Img } from "../Elementi/Img"

export default function Background({
  overFlowArea,
  img,
  filter,
}) {

  return (
    <>
      <OverflowArea {...overFlowArea}>
        <Img {...img} />
        <Filter {...filter} />
      </OverflowArea>
    </>
  )
}
