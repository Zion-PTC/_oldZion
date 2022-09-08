import React from "react";
import { GetStaticProps } from "next";
import { Esercizio } from "@zionstate/learn";
import Layout from "../../components/layout";

export const getStaticProps: GetStaticProps = async function () {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/esercizi`);
  const data: Esercizio[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function Esercizi(props: { data: Esercizio[] }) {
  const esercizi = props.data.map((esercizio) => {
    return (
      <div style={{ border: "solid" }} key={esercizio.nome}>
        <p>Nome file: {esercizio.nome}</p>
        <p>Oggetti: {esercizio.oggetti.join(", ")}</p>
      </div>
    );
  });

  return (
    <Layout>
      <h1>Esercizi</h1>
      <div>{esercizi}</div>
    </Layout>
  );
}
