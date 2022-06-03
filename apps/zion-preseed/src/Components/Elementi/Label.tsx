import { FlattenSimpleInterpolation } from "styled-components";
import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

interface IImg {
  dynamic?: FlattenSimpleInterpolation;
}

export const Label = styled.label<IImg>`
  ${InitialStyle};
  font-size: 80%;
  ${(props) => props.dynamic}
`;
