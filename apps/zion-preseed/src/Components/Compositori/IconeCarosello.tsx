import { FC } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BRIGHT, MIDBRIGHT, DARK } from "../../js/colori";
import { media } from "../../js/responsiveness";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { ResponsiveGridDiv } from "../Elementi/Div";
import IconaComponent, { Icona, IIcona } from "./Icona";
import { TImg } from "./Image";

type TIconaSettings = {
  gridDiv: PitchDeck.TDynamic;
  cerchio: PitchDeck.TDynamic;
  p: PitchDeck.TDynamic;
  img?: TImg;
};
export class IconaSettings implements TIconaSettings {
  constructor(
    gridInput: FlattenSimpleInterpolation,
    cerchioInput: FlattenSimpleInterpolation,
    pInput: FlattenSimpleInterpolation,
    public gridDiv: PitchDeck.TDynamic = { dynamic: gridInput },
    public cerchio: PitchDeck.TDynamic = { dynamic: cerchioInput },
    public p: PitchDeck.TDynamic = { dynamic: pInput },
    public img?: TImg
  ) {}
}

enum IconeCaroselloEnums {
  solution = "solution",
  mission = "mission",
}
type IconeCaroselloTypes = keyof typeof IconeCaroselloEnums;

export interface IIconeCarosello {
  titolo: string;
  responsiveGridDiv: PitchDeck.ResponsiveGrid;
  icone: IIcona[];
  testi?: string[];
  type?: IconeCaroselloTypes;
}

export class IconeCarosello implements IIconeCarosello {
  lastChildCondition = (props: { isIconePari: number }) => {
    if (props.isIconePari === 0) return "span 3";
    else return "span 1";
  };
  IconeCaroselloArea = styled<typeof ResponsiveGridDiv>(ResponsiveGridDiv)`
    ${media.tabletPortrait} {
      div:last-child {
        grid-column: ${this.lastChildCondition};
      }
    }
    ${media.desktop} {
      div:last-child {
        grid-column: ${this.lastChildCondition};
      }
    }
  `;

  gridDiv = css`
    margin: 0 0 1em 0;
  `;

  cerchio = css`
    background-color: ${MIDBRIGHT};
  `;

  solutionP = css`
    color: ${BRIGHT};
  `;

  missionP = css`
    color: ${DARK};
    margin: 10px 0 30px 0;
  `;

  solutionGrid = css`
    grid-area: contenuto;
  `;

  icona: IconaSettings;

  constructor(
    public titolo: string,
    public icone: IIcona[],
    public responsiveGridDiv: PitchDeck.ResponsiveGrid,
    public testi?: string[],
    public type?: IconeCaroselloTypes
  ) {
    // responsiveGridDiv.dynamic = this.solutionGrid;
    switch (type) {
      case IconeCaroselloEnums.solution:
        this.icona = new IconaSettings(
          this.gridDiv,
          this.cerchio,
          this.solutionP
        );
        break;

      case IconeCaroselloEnums.mission:
        this.icona = new IconaSettings(
          this.gridDiv,
          this.cerchio,
          this.missionP
        );
        break;

      default:
        this.icona = new IconaSettings(
          this.gridDiv,
          this.cerchio,
          this.solutionP
        );
        break;
    }
  }
  component: FC<IIconeCarosello> = () => {
    let elements: any[] = [];
    let counter = 0;
    let slicedTitolo = this.titolo.slice(0, 3);

    let isIconePari = this.isOdd(this.icone.length);

    this.icone.forEach((element) => {
      let id = slicedTitolo + counter;

      counter++;

      this.icona.img = {
        src: element.icona!,
        dynamic: element.dynamic,
      };
      let e = (
        <IconaComponent id={id} key={id} {...this.icona}>
          {element.testo}
        </IconaComponent>
      );
      elements.push(e);
    });

    return (
      <>
        <this.IconeCaroselloArea
          key={slicedTitolo}
          {...this.responsiveGridDiv}
          isIconePari={isIconePari}
        >
          {elements}
        </this.IconeCaroselloArea>
      </>
    );
  };
  isOdd(num: number) {
    return num % 2;
  }
}
