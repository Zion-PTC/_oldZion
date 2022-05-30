import { FlattenSimpleInterpolation } from '@zionrepack/styled-components';
import styled from 'styled-components';
import { DARK } from '../../js/colori';
import { InitialStyle } from '../Styled/Utils';

interface IForm {
  dynamic?: FlattenSimpleInterpolation;
  backgroundColor?: string;
  onSubmit?: Function;
}

export const Form = styled.form<IForm>`
  ${InitialStyle};
  display: grid;
  align-items: center;
  padding: 1em 1em 1em 1em;
  border: 1px solid ${DARK};
  border-radius: 25px;
  background-color: ${props => props.backgroundColor};
  width: 23em;
  height: 15em;
  ${props => props.dynamic}
`;
