import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import underlord1 from "/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/database/batch1/pfp3_65_740512378.jpg";

const Grid = styled.div`
  display: grid;
  place-items: center;
`;

const IPhonePlus = styled.div`
  border: 1px solid;
  width: 375px;
  height: 677px;
  display: grid;
  grid-template-rows: 0.08fr 0.08fr 0.08fr 1fr 0.08fr;
`;

const PhoneInfos = styled.div`
  border: 1px solid;
  width: 100%;
`;

const ZionHeader = styled.div`
  border: 1px solid;
  width: 100%;
`;

const SearchArea = styled.div`
  border: 1px solid;
  width: 100%;
`;

const Footer = styled.div`
  border: 1px solid;
  width: 100%;
`;

const ContentArea = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
  display: grid;
  place-self: center;
`;

const Area = styled.div<{ width: number; height: number }>`
  border: 1px solid;
  width: ${(props) => props.width}px;
  height: 100%;
  display: grid;
  place-self: center;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default function testPage() {
  const iphone = useRef<HTMLDivElement>();
  const [parentWidth, setParentWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    console.log(window.innerHeight);
    setParentWidth(iphone.current.clientWidth);
    setViewportHeight(iphone.current.clientHeight);
  }, []);
  useEffect(() => {
    setHeight(viewportHeight * 0.99);
  }, [parentWidth]);

  return (
    <Grid>
      <IPhonePlus>
        <PhoneInfos />
        <ZionHeader />
        <SearchArea />
        <ContentArea ref={iphone}>
          <Area width={(height / 14) * 8} height={height}>
            <Card
              type="nft-pfp"
              backgroundColor="lightblue"
              images={[underlord1]}
            />
          </Area>
        </ContentArea>
        <Footer />
      </IPhonePlus>
    </Grid>
  );
}
