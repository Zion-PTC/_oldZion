import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import styled from 'styled-components';
import { InitialStyle } from '../Styled/Utils';

interface IP {
  children?: string;
  testoColore?: string;
  dynamic?: FlattenSimpleInterpolation;
}

export let P = styled.p<IP>`
  ${InitialStyle};
  ${props => props.dynamic};
`;
