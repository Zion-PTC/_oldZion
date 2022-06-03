import { css } from 'styled-components';
import { BRIGHT, DARK } from '../../js/colori';

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
let tipo = '';
let divCss: TitoloDivProps;
switch (tipo) {
  case TitoloEnums.business:
    divCss = {
      bright: true,
      width: true,
    };
    break;

  case TitoloEnums.tokenomics:
    divCss = {
      dark: true,
      width: true,
    };
    break;

  case TitoloEnums.cover:
    divCss = {
      bright: true,
      width: true,
      placeSelf: true,
    };
    break;

  case TitoloEnums.intro:
    divCss = {
      dark: true,
    };
    break;

  case TitoloEnums.mission:
    divCss = {
      dark: true,
      width: true,
    };
    break;

  case TitoloEnums.problem:
    divCss = {
      bright: true,
      width: true,
      placeSelf: true,
    };
    break;

  case TitoloEnums.product:
    divCss = {
      bright: true,
      width: true,
    };
    break;

  case TitoloEnums.solution:
    divCss = {
      bright: true,
      width: true,
    };
    break;

  default:
    divCss = {};
    break;
}

const base = css<TitoloDivProps>`
  color: ${props => {
    if (props.bright) return BRIGHT;
    if (props.dark) return DARK;
  }};
  width: ${props => {
    if (props.width) return '100%';
  }};
`;
