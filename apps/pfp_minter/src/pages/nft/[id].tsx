import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { getStatic } from "../../lib/static/getStatic";
import { DataByPath, NftData } from "../api/types";

const { getStaticProps: gspr, getStaticPaths: gspt } = getStatic({
  type: "nft",
  hasPaths: true,
});

export const getStaticPaths = gspt;

export const getStaticProps = gspr;

const Nft: (props: DataByPath<NftData>) => JSX.Element = function ({ data }) {
  const { name } = data;

  return (
    <Layout nft>
      <h1>Nft:</h1>
      <p>{name}</p>
      <Link href="/mint">Mint</Link>
    </Layout>
  );
};

export default Nft;
