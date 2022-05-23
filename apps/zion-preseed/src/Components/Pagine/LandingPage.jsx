import styled from "styled-components";

import BusinessModel from "./Landing Page/BusinessModel";
import Cover from "./Landing Page/Cover";
import Intro from "./Landing Page/Intro";
import Mission from "./Landing Page/Mission";
import Problem from "./Landing Page/Problem";
import Product from "./Landing Page/Product";
import Solution from "./Landing Page/Solution";
import Tokenomics from "./Landing Page/Tokenomics";
import {
  businessModelData,
  coverData,
  introData,
  missionData,
  problemData,
  product1Data,
  product2Data,
  product3Data,
  product4Data,
  product5Data,
  solution1Data,
  solution2Data,
  tokenomicsData
} from "./LandingPageData";

export default function LandingPage() {

  let Area = styled.div`
    display: grid;
  `

  let Div = styled.div`
    z-index: 1;
  `

  return (
    <Area id="landingPage">
      <Div id="landingPageContent">
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
  )
}
