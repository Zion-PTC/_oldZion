import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { NftData, NftsData } from "../api/types";

const URL = "http://localhost:3000/api/nfts";

export async function getStaticPaths() {
  const response = await fetch(URL);
  const body: NftsData = await response.json();
  let paths: StaticProps[] = [];
  for (let key in body) paths.push({ params: { id: key } });
  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  params: { id: string };
}

export async function getStaticProps(
  props: StaticProps
): Promise<{ props: { nftsData: NftsData } }> {
  const response = await fetch(URL);
  const body: NftsData[] = await response.json();
  const nftsData = body[Number(props.params.id)];

  return {
    props: { nftsData },
  };
}

const Nft: (props: { nftsData: NftData }) => JSX.Element = function ({
  nftsData,
}) {
  const { name } = nftsData;

  return (
    <Layout nft>
      <h1>Nft:</h1>
      <p>{name}</p>
      <Link href="/mint">Mint</Link>
    </Layout>
  );
};

export default Nft;
