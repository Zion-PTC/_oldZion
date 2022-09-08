import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { TableContent } from "../../components/Tables/TableContent";
import { TableContents } from "../../components/Tables/TableContents";

export type DesignPatternResponse = {
  nome: string;
  categoria: string;
  sorgentiTitoli: string[];
  tutorialsTitoli: string[];
  esempiTitoli: string[];
  isInCheatSheet: boolean;
  isInTSCheatSheet: boolean;
  isInBase: boolean;
};

export const getStaticProps: GetStaticProps = async function () {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/design-patterns`);
  const data: DesignPatternResponse[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

const TableElement = styled.table`
  table,
  td {
    border: 1px solid #333;
  }
  input {
    border: none;
  }
  thead,
  tfoot {
    background-color: #333;
    color: #fff;
  }
`;

export default function Table(props: { data: DesignPatternResponse[] }) {
  const designPatterns = props.data;

  return (
    <Layout>
      <TableElement>
        <thead>
          <tr>
            <th colSpan={6}>The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>nome</th>
            <th>categoria</th>
            <th>esempi</th>
            <th>tutorial</th>
            <th>sorgenti</th>
            <th>inCheatSheet</th>
          </tr>
          <TableContents data={designPatterns} />
        </tbody>
      </TableElement>
    </Layout>
  );
}
