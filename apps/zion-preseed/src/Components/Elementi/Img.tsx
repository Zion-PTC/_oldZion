import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import styled from 'styled-components';
import { InitialStyle } from '../Styled/Utils';

interface IImg {
  dynamic?: FlattenSimpleInterpolation;
}

export let Img = styled.img<IImg>`
  ${InitialStyle};
  position: relative;
  grid-area: a;
  ${props => props.dynamic};
`;
