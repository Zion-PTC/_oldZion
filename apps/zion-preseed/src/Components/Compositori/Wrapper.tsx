import { FC } from "react";
import styled, {
  css,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
  Interpolation,
} from "styled-components";
import { InitialStyle } from "../Styled/Utils";

const solutionCss = css`
  max-height: ${window.innerHeight * 1.3 + "px"};
  @media (max-width: 640px) {
    max-height: none;
    min-height: ${window.innerHeight * 1.3 + "px"};
  }
`;

const problemCss = css`
  max-height: ${window.innerHeight + "px"};
`;

// const productCss = css<TWrapper>`
//   height: ${window.innerHeight + 'px'};
//   grid-template-rows: ${props => (props.tipo === 2 ? '30% 70%' : '100%')};
//   grid-template-areas: ${props => (props.tipo === 2 ? "'a' 'b'" : "'a'")};
// `;

export enum WrapperEnums {
  solution = "solution",
  business = "business",
  cover = "cover",
  intro = "intro",
  problem = "problem",
  product = "product",
  normal = "normal",
}
export type WrapperTypes = keyof typeof WrapperEnums;
export type TWrapper = {
  id?: string;
  type?: WrapperTypes;
  tipo?: number;
  dynamic?:
    | FlattenSimpleInterpolation
    | Interpolation<ThemedStyledProps<TWrapper, any>>;
  display?: string;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gridTemplateAreas?: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
};

export class Wrapper implements TWrapper {
  static Wrappers: Wrapper[] = [];
  public suffix: string = "-wrapper";
  public wrapperId: string;

  get WrapperStyled() {
    return styled.div<TWrapper>`
      ${InitialStyle};
      width: ${this.width};
      min-height: ${window.innerHeight + "px"};
      display: ${this.display};
      grid-template-columns: ${this.gridTemplateColumns};
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-areas: ${this.gridTemplateAreas};
      ${(props) => props.dynamic};
    `;
  }

  public Wrapper: FC<TWrapper>;
  public dynamic?:
    | FlattenSimpleInterpolation
    | Interpolation<ThemedStyledProps<TWrapper, any>>;
  constructor(
    public type: WrapperTypes,
    public id: string,
    public tipo?: number,
    public width: string | number = "100%",
    public display: string = "grid",
    public gridTemplateRows: string = "100%",
    public gridTemplateColumns: string = "100%",
    public gridTemplateAreas: string = `'a'`,
    public children?: JSX.Element[],
    public className?: string
  ) {
    // const WS = this.WrapperStyled;
    Wrapper.Wrappers.push(this);
    this.wrapperId = id + this.suffix;
    switch (type) {
      case WrapperEnums.solution:
        this.dynamic = solutionCss;
        break;

      case WrapperEnums.business:
        this.dynamic = css``;
        break;

      case WrapperEnums.cover:
        this.dynamic = css``;
        break;

      case WrapperEnums.intro:
        this.dynamic = css``;
        break;

      case WrapperEnums.problem:
        this.dynamic = problemCss;
        break;

      case WrapperEnums.product:
        this.dynamic = css`
          height: ${window.innerHeight + "px"};
        `;
        switch (tipo) {
          case 1:
            this.gridTemplateRows = "100%";
            this.gridTemplateAreas = `'a'`;
            break;

          case 2:
            this.gridTemplateRows = "30% 70%";
            this.gridTemplateAreas = "'a' 'b'";
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }

    this.Wrapper = (props) => {
      return (
        <this.WrapperStyled
          id={this.wrapperId}
          className={props.className}
          dynamic={this.dynamic}
          {...props}
        />
      );
    };
  }
}
