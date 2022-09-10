import Link from "next/link";
import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Card } from "../../components/Card/Card";
import { CardPfpProps } from "../../components/Card/CardPfp";
import Layout from "../../components/layout";
import { NftData, NftsData } from "../api/types";

const URL = "http://localhost:3000/api/nfts";

export const datas: NftData[] = [
  { id: 0, name: "ciao", slug: "boo" },
  { id: 1, name: "zion", slug: "goo" },
  { id: 2, name: "flyon", slug: "foo" },
];

export async function getStaticProps() {
  const response = await fetch(URL);
  const body: NftsData = await response.json();
  let datas: NftData[] = [];
  for (let key in body) {
    datas.push(body[key]);
  }
  return {
    props: {
      datas,
    },
  };
}

export default function Collection(props: { datas: NftData[] }) {
  return (
    <Layout>
      <h1>Collection</h1>
      <div className="product-area">
        <Card datas={props.datas} type={"pfp"}></Card>
      </div>
      <Link href="/">Home</Link>
    </Layout>
  );
}
