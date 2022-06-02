import { css, FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import styled from 'styled-components';
import { BRIGHT } from '../../js/colori';
import { media } from '../../js/responsiveness';
import { TWrapper } from '../Compositori/Wrapper';
import { InitialStyle, ResponsiveGrid, ResponsiveSize } from '../Styled/Utils';

export interface IDiv {
  dynamic?: FlattenSimpleInterpolation;
}

export const Div = styled.div<IDiv>`
  ${InitialStyle};
  ${props => props.dynamic};
`;

export const GridDiv = styled.div<IDiv>`
  display: grid;
  ${props => props.dynamic};
`;

export const CenteredItemsGridDiv = styled.div<IDiv>`
  display: grid;
  justify-items: center;
`;

export const ResponsiveGridDiv = styled(CenteredItemsGridDiv)`
  ${ResponsiveGrid}
  ${props => props.dynamic};
`;

export const FormWrapper = styled.div<IDiv>`
  ${InitialStyle};
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  ${props => props.dynamic};
`;

// TODO cancellare dopo aver creato file
export const Wrapper = styled.div<IDiv>`
  ${InitialStyle};
  width: 100%;
  min-height: ${window.innerHeight + 'px'};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'a';
  ${props => props.dynamic};
`;

// TODO cancellare dopo aver creato file
export const Page = styled.div<IDiv>`
  ${InitialStyle};
  display: grid;
  grid-area: a;
  position: relative;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 1fr 1fr 12fr;
  grid-template-areas: '. . .' '. titolo .' '. contenuto .';
  ${props => props.dynamic};
`;

export const OverflowArea = styled.div<IDiv>`
  ${InitialStyle};
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas: 'a';
  ${props => props.dynamic};
`;

export const Filter = styled.div<IDiv>`
  ${InitialStyle};
  position: relative;
  grid-area: a;
  ${props => props.dynamic};
`;

export let checkBarra = () => {};

export const Barra = styled.div``;

export const Cerchio = styled.div<IDiv>`
  width: 230px;
  height: 230px;
  place-self: center;
  display: grid;
  grid-template-areas: 'a';
  border-radius: 100%;
  ${ResponsiveSize}
  ${props => props.dynamic};
`;

export const Chart = styled.div<IDiv>`
  border-radius: 100%;
  height: 18rem;
  width: 18rem;
  @media (max-width: 641px) {
    height: 18rem;
    width: 18rem;
  }
  :last-child {
    margin: 1rem 0 1rem 0;
  }
  ${props => props.dynamic};
`;

interface ICornice {
  backgroundColor: string;
  gridArea: string;
}

export const Cornice = styled.div<ICornice>`
  display: grid;
  place-self: center;
  align-items: center;
  text-align: center;
  height: 234px;
  width: 234px;
  border-radius: 100%;
  // PROPS //
  background-color: ${props => props.backgroundColor};
  grid-area: ${props => props.gridArea};
`;

export const AreaCover = styled.div`
  display: grid;
  position: relative;
  grid-area: a;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 1fr 5fr 3fr;
  grid-template-areas: '. . .' '. logo .' '. titolo .';
`;

export let BusinessWrapper = styled(Wrapper)`
  max-height: ${window.innerHeight + 'px'};
`;

//  TODO cancellare
export let ProductWrapper = styled(Wrapper)<TWrapper>`
  height: ${window.innerHeight + 'px'};
  grid-template-rows: ${props => (props.tipo === 2 ? '30% 70%' : '100%')};
  grid-template-areas: ${props => (props.tipo === 2 ? "'a' 'b'" : "'a'")};
`;

//  TODO cancellare
export let ProductPage = styled(Page)`
  grid-area: a;
  height: ${window.innerHeight + 'px'};
`;

// TODO portare in p
export let Text = styled.p`
  grid-area: contenuto;
  color: ${props => props.color};
`;

// TODO portare in p
export let Text2 = styled(Text)`
  width: 13em;
`;

export let div = {
  dynamic: css`
    grid-area: contenuto;
    ul {
      color: ${BRIGHT};
    }
  `,
};

export let TokenomixDiv = styled.div`
  grid-area: contenuto;
  display: grid;
  grid-template-columns: 1fr;
  ${media.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
  }
  place-items: center;
`;
