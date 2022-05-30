import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { OverflowArea, Filter } from '../Elementi/Div';
import { Img } from '../Elementi/Img';

export default function Background({
  overFlowArea,
  img,
  filter,
}: {
  overFlowArea?: PitchDeck.Overflow;
  img?: PitchDeck.Img;
  filter?: PitchDeck.Filter;
}): JSX.Element {
  return (
    <>
      <OverflowArea {...overFlowArea}>
        <Img {...img} />
        <Filter {...filter} />
      </OverflowArea>
    </>
  );
}
