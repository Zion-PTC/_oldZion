import { css, FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { BRIGHT } from '../../js/colori';
import { media } from '../../js/responsiveness';
import { IDiv, Page } from '../Elementi/Div';
import { InitialStyle } from '../Styled/Utils';

const problemCss = css`
  grid-template-rows: 1fr 2fr 8fr;
  grid-template-areas: 'background background background' '. titolo . ' '. contenuto . ';
`;
const prodCss = styled(Page)`
  grid-area: a;
  height: ${window.innerHeight + 'px'};
`;
const introCss = css`
  background-color: ${BRIGHT};
  ${media.tabletPortrait} {
    grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
  }
  ${media.desktop} {
    grid-template-rows: 0.5fr 0.6fr auto 1.5fr;
  }
  grid-template-rows: 0.5fr 1.2fr auto 1.5fr;
  grid-template-areas: '. . .' '. titolo .' '. video .' '. contenuto .';
`;
enum PageEnums {
  normal = 'normal',
  problem = 'problem',
  product = 'product',
  intro = 'intro',
}
type PageTypes = keyof typeof PageEnums;
interface TPage {
  id?: string;
  dynamic?:
    | FlattenSimpleInterpolation
    | StyledComponent<'div', any, IDiv, never>;
  display?: string;
  gridArea?: string;
  position?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gritTemplateAreas?: string;
  children?: (JSX.Element | undefined)[] | JSX.Element;
  className?: string;
}
export class PageClass implements TPage {
  static Pages: PageClass[] = [];
  public suffix: string = '-page';
  public pageId: string;

  get PageStyled() {
    return styled.div<TPage>`
      ${InitialStyle};
      display: ${this.display};
      grid-area: ${this.gridArea};
      position: ${this.position};
      grid-template-columns: ${this.gridTemplateColumns};
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-areas: ${this.gritTemplateAreas};
      ${this.dynamic};
    `;
  }

  public Page: FC<TPage>;
  public dynamic?:
    | FlattenSimpleInterpolation
    | StyledComponent<'div', any, IDiv, never>;
  constructor(
    public id: string,
    public type: PageTypes = PageEnums.normal,
    public display: string = 'grid',
    public gridArea: string = 'a',
    public position: string = 'relative',
    public gridTemplateColumns: string = '1fr 9fr 1fr',
    public gridTemplateRows: string = '1fr 1fr 12fr',
    public gritTemplateAreas: string = `'. . .' '. titolo .' '. contenuto .'`,
    public children?: (JSX.Element | undefined)[] | JSX.Element,
    public className?: string
  ) {
    PageClass.Pages.push(this);
    this.pageId = id + this.suffix;
    switch (type) {
      case PageEnums.normal:
        this.dynamic = css``;
        break;

      case PageEnums.problem:
        this.dynamic = problemCss;
        break;

      case PageEnums.product:
        this.dynamic = prodCss;
        break;

      case PageEnums.intro:
        this.dynamic = introCss;
        break;

      default:
        this.dynamic = css``;
        break;
    }
    this.Page = props => {
      return (
        <this.PageStyled
          className={props.className}
          id={this.pageId}
          {...props}
        />
      );
    };
  }
}
