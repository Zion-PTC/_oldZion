import styled from 'styled-components';
import { P } from '../Elementi/P';

let Label = styled.label`
  color: ${props => props.color};
`;

interface IArea {
  color: any;
  height: any;
  bkgColor: any;
  borderRadius: any;
  name: any;
}

let Area = styled.div<IArea>`
  padding: 0;
  border: none;
  color: ${props => props.color};
  height: ${props => props.height};
  background-color: ${props => props.bkgColor};
  border-radius: ${props => props.borderRadius};
  display: grid;
  align-content: center;
  justify-content: center;
`;

interface IDisplay {
  display: {
    data?: string;
    type?: 'text';
    name?: string;
    color?: string;
    height?: string;
    bkgColor?: string;
    borderRadius?: string;
    label?: {
      color?: string;
      htmlFor?: string;
      children?: string;
    };
  };
}

export default function Display({ display }: IDisplay) {
  let { data, name, color, height, bkgColor, borderRadius, label } = display;

  return (
    <>
      <Label {...label}></Label>
      <Area
        color={color}
        height={height}
        bkgColor={bkgColor}
        borderRadius={borderRadius}
        name={name}
      >
        <P>{data}</P>
      </Area>
    </>
  );
}
