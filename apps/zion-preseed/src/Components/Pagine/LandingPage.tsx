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

const Mission = missionData.component;
const Intro = introData.component;
const Cover = coverData.component;
const Problem1 = problemData.component;
const Solution1 = solution1Data.component;
const Solution2 = solution2Data.component;
const Product1 = product1Data.component;
const Product2 = product2Data.component;
const Product3 = product3Data.component;
const Product4 = product4Data.component;
const Product5 = product5Data.component;
const BusinessModel = businessModelData.component;
const Tokenomics = tokenomicsData.component;

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
        <Intro />
        <Cover />
        <Problem1 />
        <Solution1 />
        <Solution2 />
        <Mission />
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
        <Product5 />
        <BusinessModel />
        <Tokenomics />
      </Div>
    </Area>
  );
}
