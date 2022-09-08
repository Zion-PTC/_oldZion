import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import Layout from "../components/layout";

export const getStaticProps: GetStaticProps = async function () {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/`);
  const data: any = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function HomePage(props: { data: number }) {
  const names = [
    ["Blog Posts", "blog"],
    ["Design Patterns", "design-patterns"],
    ["Esercizi", "esercizi"],
    ["Packages"],
    ["Questions"],
    ["Sorgenti"],
    ["Tutorial", "tutorial"],
    ["Web App"],
    ["Table", "table"],
    ["Scanner", "scanner"],
    ["Code Editor", "code-editor"],
  ];
  const [likes, setLikes] = useState(props.data);
  const [isLoading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    let response, value;
    try {
      response = await fetch(`http://localhost:3000/api/like`);
    } catch (error) {
      console.log(error);
    }
    if (response) value = await response.json();
    setLikes(value);
    setLoading(false);
  }

  return (
    <Layout home>
      <Header title="Learn. Try. Evolve. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name[0]}>
            {name[1] ? <Link href={name[1]}>{name[0]}</Link> : name[0]}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </Layout>
  );
}
