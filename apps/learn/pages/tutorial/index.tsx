import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Tutorial as T } from "@zionstate/learn";
import Layout from "../../components/layout";

export const getStaticProps: GetStaticProps = async function () {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/tutorials`);
  const data: T[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function Tutorial(props: { data: T[] }) {
  const tutos = props.data;
  const pis = tutos.map((tuto) => (
    <p key={tuto.titolo}>Titolo: {tuto.titolo}</p>
  ));
  return (
    <Layout>
      <h1>Tutorial</h1>
      <div>{pis}</div>
    </Layout>
  );
}
