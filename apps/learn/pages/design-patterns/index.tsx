import React, { useState } from "react";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";

type DesignPatternResponse = {
  nome: string;
  categoria: string;
  sorgentiTitoli: string[];
  tutorialsTitoli: string[];
  esempiTitoli: string[];
  isInCheatSheet: boolean;
};

export const getStaticProps: GetStaticProps = async function () {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/design-patterns`);
  const data: DesignPatternResponse[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function DesignPattern(props: {
  data: DesignPatternResponse[];
}) {
  const patterns = props.data;
  function checkBoxHandler() {
    console.log("clicked");
  }
  const pis = patterns.map((pattern) => {
    const [inCheatsheet, setInCheatSheet] = useState(
      pattern.isInCheatSheet ? true : false
    );
    function checkboxOnChange() {
      console.log("changed");
      setInCheatSheet(!inCheatsheet);
    }
    return (
      <div style={{ border: "solid" }} key={pattern.nome}>
        <p>Nome: {pattern.nome}</p>
        <p>Categoria: {pattern.categoria}</p>
        <p>Esempi: {pattern.esempiTitoli.join(", ")}</p>
        <p>Tutorials: {pattern.tutorialsTitoli.join(", ")}</p>
        <p>Sorgenti: {pattern.sorgentiTitoli.join(", ")}</p>
        <p>
          In Cheatsheet:
          <span>
            <input
              type="checkbox"
              checked={inCheatsheet}
              // onClick={checkBoxHandler}
              onChange={checkboxOnChange}
            ></input>
          </span>
        </p>
      </div>
    );
  });
  return (
    <Layout>
      <h1>Design Patterns</h1>
      <div>{pis}</div>
    </Layout>
  );
}
