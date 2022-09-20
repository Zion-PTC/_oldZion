import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { getStatic } from "../../lib/static/getStatic";
import { dataByPath } from "../../lib/static/types";
import { NftData } from "../collection/types";

const { getStaticProps: gspr, getStaticPaths: gspt } = getStatic({
  type: "nft",
  hasPaths: true,
});

export const getStaticPaths = gspt;

export const getStaticProps = gspr;

export const Nft: (props: dataByPath<NftData>) => JSX.Element = function ({
  data,
}) {
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
