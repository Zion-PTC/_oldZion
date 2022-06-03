import * as styled from '@zionrepack/styled-components';
import { FC, ReactElement } from 'react';
import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from 'styled-components';
import { BRIGHT, DARK, MID } from '../../js/colori';
import { PitchDeck } from '../../PitchDeckApp/PitchDeck';
import { Div } from '../Elementi/Div';
import { InitialStyle } from '../Styled/Utils';

type TitoloDivProps = {
  bright?: boolean;
  dark?: boolean;
  width?: boolean;
  placeSelf?: boolean;
};

enum TitoloEnums {
  solution = 'solution',
  business = 'business',
  cover = 'cover',
  intro = 'intro',
  problem = 'problem',
  product = 'product',
  tokenomics = 'tokenomics',
  mission = 'mission',
  normal = 'normal',
}
type TitoloTypes = keyof typeof TitoloEnums;

let AreaTitolo2 = styled.div`
  display: flex;
  flex-direction: row;
`;

let Barra1 = styled.div<ITitolo>`
  border-radius: 5px;
  background-color: ${MID};
  height: 8px;
  width: 60%;
`;

let Barra2 = styled.div<ITitolo>`
  background-color: ${MID};
  width: 20%;
  margin-right: 10px;
`;

let Barra3 = styled.div<ITitolo>`
  background-color: ${DARK};
  width: 10%;
  margin-right: 10px;
`;

let Testo = styled.h1`
  margin: 0;
  border: 0;
  padding: 0;
  font-weight: 900;
  font-style: normal;
  color: ${({ color }) => color};
`;

let TestoSmall = styled.p`
  margin: 0;
  border: 0;
  padding: 0;
  color: ${({ color }) => color};
`;

interface ITitolo {
  div?: any;
  tipo?: number;
  color?: string;
  sottoTitolo?: string;
  barraColor?: string;
  children?: ReactElement[] | ReactElement | string;
}
export type TTitolo = {
  tipo: number;
  div: PitchDeck.Div;
  color?: string;
  sottoTitolo?: string;
  barraColor?: string;
  children?: ReactElement[] | ReactElement | string;
};
export class Titolo implements TTitolo {
  static Titoli: Titolo[] = [];

  public suffix: string = '-titolo';
  public pageId: string;
  public Titolo: FC<TTitolo>;
  public dynamic?: FlattenSimpleInterpolation;

  get TitoloStyled() {
    return styled.div<TTitolo & { dynamic: FlattenSimpleInterpolation }>`
      ${InitialStyle}
      ${this.dynamic}
    `;
  }

  get TitoloStyled2(): FlattenInterpolation<styled.ThemeProps<any>> {
    return css`
      grid-area: titolo;
      color: ${() => {
        if (this.divCss) {
          if (this.divCss.bright) return BRIGHT;
          if (this.divCss.dark) return DARK;
        }
      }};
      width: ${() => {
        if (this.divCss) if (this.divCss.width) return '100%';
      }};
    `;
  }

  constructor(
    public tipo: number,
    public children: string,
    public div: PitchDeck.Div,
    public sottoTitolo?: string,
    public type?: TitoloTypes,
    public color?: string,
    public barraColor?: string,
    public divCss?: TitoloDivProps
  ) {
    Titolo.Titoli.push(this);
    this.pageId = this.suffix;
    this.Titolo = props => <this.component {...props} />;

    switch (type) {
      case TitoloEnums.business:
        this.divCss = {
          bright: true,
          width: true,
        };
        break;

      case TitoloEnums.tokenomics:
        this.divCss = {
          dark: true,
          width: true,
        };
        break;

      case TitoloEnums.cover:
        this.divCss = {
          bright: true,
          width: true,
          placeSelf: true,
        };
        break;

      case TitoloEnums.intro:
        this.divCss = {
          dark: true,
        };
        break;

      case TitoloEnums.mission:
        this.divCss = {
          dark: true,
          width: true,
        };
        break;

      case TitoloEnums.problem:
        this.divCss = {
          bright: true,
          width: true,
          placeSelf: true,
        };
        break;

      case TitoloEnums.product:
        this.divCss = {
          bright: true,
          width: true,
        };
        break;

      case TitoloEnums.solution:
        this.divCss = {
          bright: true,
          width: true,
        };
        break;

      default:
        this.divCss = {};
        break;
    }
  }

  component: FC<TTitolo> = () => {
    let contenuto;
    this.div.dynamic = this.TitoloStyled2;

    let Titolo1 = (
      <>
        <Barra1 barraColor={this.barraColor}></Barra1>
        <Testo color={this.color}>{this.children}</Testo>
      </>
    );

    let Titolo2 = (
      <AreaTitolo2 id='titolo-tipo2'>
        <Barra2 id='barra2' barraColor={this.barraColor}></Barra2>
        <Testo id='testo' color={this.color}>
          {this.children}
        </Testo>
      </AreaTitolo2>
    );

    let Titolo3 = (
      <AreaTitolo2 id='titolo-tipo3'>
        <Barra3 id='barra3' barraColor={this.barraColor}></Barra3>
        <div>
          <Testo id='testo' color={this.color}>
            {this.children}
          </Testo>
          <TestoSmall id='testoSmall' color={this.color}>
            {this.sottoTitolo}
          </TestoSmall>
        </div>
      </AreaTitolo2>
    );

    switch (this.tipo) {
      case 1:
        contenuto = Titolo1;
        break;

      case 2:
        contenuto = Titolo2;
        break;

      case 3:
        contenuto = Titolo3;
        break;

      default:
        break;
    }

    return <Div {...this.div}>{contenuto}</Div>;
  };
}
