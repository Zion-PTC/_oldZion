import Link from "next/link";
import React from "react";
import { Card } from "../../components/Card/Card";
import Layout from "../../components/layout";
import { getStatic } from "../../lib/static/getStatic";
import { Data, NftData, NftsData } from "../api/types";

const { getStaticProps: gst } = getStatic<NftData, NftsData>({
  type: "nft",
  hasPaths: false,
});

export const getStaticProps = gst;

export default function Collection(props: Data<NftData>) {
  return (
    <Layout>
      <h1>Collection</h1>
      <div className="product-area">
        <Card datas={props.data} type={"pfp"}></Card>
      </div>
      <Link href="/">Home</Link>
    </Layout>
  );
}
