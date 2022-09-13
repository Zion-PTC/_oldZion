import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Layout from "../../components/layout";
import { ContentArea } from "../../components/Sections/Content/ContentArea";
import { Area } from "../../components/Sections/Content/Area";
import { getStatic } from "../../lib/static/getStatic";
import { Data, NftData, NftsData } from "../api/types";
import underlord1 from "../../../database/batch1/pfp3_65_740512378.jpg";

const { getStaticProps: gst } = getStatic<NftData, NftsData>({
  type: "nft",
  hasPaths: false,
});

export const getStaticProps = gst;

const CollectionArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 0.5fr;
  height: 100%;
`;

export default function Collection(
  props: Data<NftData> & {
    parentWidth: number;
    parentHeight: number;
    width: number;
    height: number;
    blockSize: number;
    contentArea: React.MutableRefObject<HTMLDivElement>;
    columns: number;
  }
) {
  return (
    <Layout>
      <CollectionArea>
        <h1>Collection</h1>
        <ContentArea ref={props.contentArea}>
          <Area
            width={props.width}
            height={props.height}
            blockSize={props.blockSize}
            columns={props.columns}
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
