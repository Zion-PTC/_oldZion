import React from "react";
import Layout from "../../components/layout";
import { stringify } from "yaml";

type Scanner = (props: { data: any }) => JSX.Element;

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/scanner");
  const data = await response.json();
  console.log(data.parsed);
  return { props: { data: data } };
}

const Scanner: Scanner = function ({ data }) {
  let tuples = [];
  let texts = [];
  let content;

  data.parsed.added = "content i added";

  const stringified = stringify(data.parsed);

  for (let key in data.parsed) {
    const stringedKey = key;
    const stringedData = data.parsed[key];
    const tuple = [stringedKey, stringedData];
    tuples.push(tuple);
  }

  for (let member of tuples) {
    const test = `${member[0]}: ${member[1]}`;
    texts.push(test);
  }

  content = texts.map((text) => <p>{text}</p>);

  return (
    <Layout>
      <div>{content}</div>
      <div>{stringified}</div>
    </Layout>
  );
};

export default Scanner;
