import styled from 'styled-components';
import { businessModelData } from '../Datas/businessModel';
import { coverData } from '../Datas/cover';
import { introData } from '../Datas/intro';
import { missionData } from '../Datas/mission';
import { problemData } from '../Datas/problem';
import { product1Data } from '../Datas/product1';
import { product2Data } from '../Datas/product2';
import { product3Data } from '../Datas/product3';
import { product4Data } from '../Datas/product4';
import { product5Data } from '../Datas/product5';
import { solution1Data } from '../Datas/solution1';
import { solution2Data } from '../Datas/solution2';
import { tokenomicsData } from '../Datas/tokenomics';

import BusinessModel from './Landing Page/BusinessModel';
import Cover from './Landing Page/Cover';
import Intro from './Landing Page/Intro';
import Mission from './Landing Page/Mission';
import Problem from './Landing Page/Problem';
import Product from './Landing Page/Product';
import Solution from './Landing Page/Solution';
import Tokenomics from './Landing Page/Tokenomics';

export default function LandingPage() {
  let Area = styled.div`
    display: grid;
  `;

  let Div = styled.div`
    z-index: 1;
  `;

  return (
    <Area id='landingPage'>
      <Div id='landingPageContent'>
        <Intro {...introData} />
        <Cover {...coverData} />
        <Problem {...problemData} />
        <Solution {...solution1Data} />
        <Solution {...solution2Data} />
        <Mission {...missionData} />
        <Product {...product1Data} />
        <Product {...product2Data} />
        <Product {...product3Data} />
        <Product {...product4Data} />
        <Product {...product5Data} />
        <BusinessModel {...businessModelData} />
        <Tokenomics {...tokenomicsData} />
      </Div>
    </Area>
  );
}
