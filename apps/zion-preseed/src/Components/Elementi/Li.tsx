import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import styled from 'styled-components';
import { InitialStyle } from '../Styled/Utils';

interface ILi {
  dynamic?: FlattenSimpleInterpolation;
}

export let Li = styled.li<ILi>`
  ${InitialStyle};
  ${props => props.dynamic};
`;
