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
  overflow: auto;
`;

const rows = 14;
const columns = 8;
const Area = styled.div<{ width: number; height: number; blockSize: number }>`
  border: 1px solid;
  width: ${(props) => props.width}px;
  height: 100%;
  display: grid;
  place-self: center;
  grid-template-rows: ${(props) => props.blockSize}+ "px";
  grid-template-columns: repeat(
    ${columns},
    ${(props) => props.blockSize}+ "px"
  );
`;

export default function testPage() {
  const iphone = useRef<HTMLDivElement>();
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  useEffect(() => {
    setParentWidth(iphone.current.clientWidth);
    setParentHeight(iphone.current.clientHeight);
  }, []);
  useEffect(() => {
    setHeight(parentHeight * 0.99);
  }, [parentWidth]);
  useEffect(() => {
    const blockSize = height / rows;
    setBlockSize(blockSize);
    setWidth((height / rows) * columns);
  }, [height]);
  console.log(blockSize);

  return (
    <Grid>
      <IPhonePlus>
        <PhoneInfos />
        <ZionHeader />
        <SearchArea />
        <ContentArea ref={iphone}>
          <Area width={width} height={height} blockSize={blockSize}>
            <Card
              type="nft-pfp"
              backgroundColor="lightblue"
              images={[underlord1]}
            />
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
