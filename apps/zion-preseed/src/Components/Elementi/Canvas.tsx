import { FlattenSimpleInterpolation } from "styled-components";
import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

interface ICanvas {
  dynamic?: FlattenSimpleInterpolation;
}

export let Canvas = styled.canvas<ICanvas>`
  ${InitialStyle}
  ${(props) => props.dynamic};
`;
