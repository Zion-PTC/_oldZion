import styled from 'styled-components';
import { Div } from '../Elementi/Div';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

let ChartWrap = styled(Div)`
  width: 23em;
  height: 23em;
  place-self: center;
  ${(props: { dynamic: any }) => props.dynamic};
`;

export default function Chart({
  div,
  data,
  options,
}: {
  div?: any;
  data?: any;
  options?: any;
}): JSX.Element {
  return (
    <ChartWrap {...div}>
      <Doughnut data={data} options={options}></Doughnut>
    </ChartWrap>
  );
}
