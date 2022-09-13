import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Layout from "../../components/layout";
import { ContentArea } from "../../components/Sections/Content/ContentArea";
import { Area } from "../../components/Sections/Content/Area";
import { getStatic } from "../../lib/static/getStatic";
import { Data, NftData, NftsData } from "../api/types";
import underlord1 from "/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/database/batch1/pfp3_65_740512378.jpg";

const { getStaticProps: gst } = getStatic<NftData, NftsData>({
  type: "nft",
  hasPaths: false,
});

export const getStaticProps = gst;

const CollectionArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
`;

const rows = 14;
const columns = 8;

export default function Collection(props: Data<NftData>) {
  const contentArea = useRef<HTMLDivElement>();
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  useEffect(() => {
    setParentWidth(contentArea.current.clientWidth);
    setParentHeight(contentArea.current.clientHeight);
  }, []);
  useEffect(() => {
    setHeight(parentHeight * 0.99);
  }, [parentWidth]);
  useEffect(() => {
    const blockSize = height / rows;
    setBlockSize(blockSize);
    setWidth((height / rows) * columns);
  }, [height]);
  return (
    <Layout>
      <CollectionArea>
        <h1>Collection</h1>
        <ContentArea ref={contentArea}>
          <Area
            width={width}
            height={height}
            blockSize={blockSize}
            columns={columns}
          >
            <Card
              datas={props.data}
              type={"nft-pfp"}
              images={[underlord1]}
            ></Card>
            <Card
              datas={props.data}
              type={"nft-pfp"}
              images={[underlord1]}
            ></Card>
            <Card
              datas={props.data}
              type={"nft-pfp"}
              images={[underlord1]}
            ></Card>
          </Area>
        </ContentArea>
        <Link href="/">Home</Link>
      </CollectionArea>
    </Layout>
  );
}
