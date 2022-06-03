import { FC } from "react";
import { css, FlattenSimpleInterpolation } from "styled-components";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { OverflowArea, Filter as FilterComp } from "../Elementi/Div";
import { Img } from "../Elementi/Img";
import { Filter } from "./Filter";
import { TImg } from "./Image";
import { Overflow } from "./Overflow";

enum BackgroundEnums {
  solution = "solution",
  business = "business",
  cover = "cover",
  problem = "problem",
  product = "product",
}
type BackgroundTypes = keyof typeof BackgroundEnums;

export type TBackground = {
  overFlowArea: Overflow;
  filter: Filter;
  img: TImg;
  type?: BackgroundTypes;
};
export class Background implements TBackground {
  solutionOf = css`
    grid-area: a;
  `;
  solutionFilter = css`
    background-color: #010814c1;
  `;

  constructor(
    public overFlowArea: Overflow,
    public filter: Filter,
    public img: TImg,
    public type?: BackgroundTypes
  ) {
    switch (type) {
      case BackgroundEnums.solution:
        this.overFlowArea.dynamic = this.solutionOf;
        this.filter.dynamic = this.solutionFilter;
        break;

      default:
        break;
    }
  }
  component: FC<TBackground> = () => {
    return (
      <>
        <OverflowArea {...this.overFlowArea}>
          <Img {...this.img} />
          <FilterComp {...this.filter} />
        </OverflowArea>
      </>
    );
  };
}

export default function BackgroundComponent({
  overFlowArea,
  img,
  filter,
}: {
  overFlowArea?: Overflow;
  img?: TImg;
  filter?: Filter;
}): JSX.Element {
  return (
    <>
      <OverflowArea {...overFlowArea}>
        <Img {...img} />
        <FilterComp {...filter} />
      </OverflowArea>
    </>
  );
}
