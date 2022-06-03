import { FlattenSimpleInterpolation } from "styled-components";
import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

interface IH1 {
  dynamic?: FlattenSimpleInterpolation;
}

export let H1 = styled.h1<IH1>`
  ${InitialStyle};
  ${(props) => props.dynamic};
`;
