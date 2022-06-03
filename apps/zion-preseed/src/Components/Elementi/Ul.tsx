import { FlattenSimpleInterpolation } from "styled-components";
import styled from "styled-components";

interface IUl {
  dynamic?: FlattenSimpleInterpolation;
}

export let Ul = styled.ul<IUl>`
  ${(props) => props.dynamic};
`;
