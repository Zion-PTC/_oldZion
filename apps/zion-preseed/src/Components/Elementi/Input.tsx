import { FlattenSimpleInterpolation } from "styled-components";
import styled from "styled-components";
import { InitialStyle } from "../Styled/Utils";

interface IInput {
  dynamic?: FlattenSimpleInterpolation;
  borderColor?: string;
  borderRadius?: string;
  height?: string;
  placeHolder?: string;
  onChange?: Function;
}

export const Input = styled.input<IInput>`
  ${InitialStyle};
  padding: 0 0 0 0.3em;
  font-size: 1em;
  box-sizing: border-box;
  border: 0.05em solid;
  border-radius: 0.1em;
  ${(props) => props.dynamic}
  ::placeholder {
    font-size: 90%;
  }
`;
