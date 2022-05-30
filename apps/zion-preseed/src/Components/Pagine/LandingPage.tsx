import styled from 'styled-components';
import { businessModelData } from '../Datas/businessModel';
import { product5Data } from '../Datas/product5';
import { tokenomicsData } from '../Datas/tokenomics';

import BusinessModel from './Landing Page/BusinessModel';
import Cover from './Landing Page/Cover';
import Intro from './Landing Page/Intro';
import Mission from './Landing Page/Mission';
import Problem from './Landing Page/Problem';
import Product from './Landing Page/Product';
import Solution from './Landing Page/Solution';
import Tokenomics from './Landing Page/Tokenomics';
import {
  coverData,
  introData,
  missionData,
  problemData,
  product1Data,
  product2Data,
  product3Data,
  product4Data,
  solution1Data,
  solution2Data,
} from './LandingPageData';

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
