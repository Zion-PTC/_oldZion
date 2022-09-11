import { StaticImageData } from "next/image";
import React from "react";
import Layout from "../components/layout";

type AppConfig = {
  slug: string;
  name: string;
  shortname: string;
  description: string[];
};

type ConfigDatas = {
  props: {
    appConfig: AppConfig;
  };
};

export function getStaticProps(): ConfigDatas {
  const appConfig = {
    slug: "underlords",
    name: "The Underlords", // used for Token long name
    shortname: "Underlords", // used for sorter displays
    description: [
      "The Underlords are Resistance. They are fighting back to bring the power back in the Under Worlds.",
      "It is a project built by Nate, John and Giacomo with the support of the Avriality Team, the Zion Community and <invetors who wants to be added here need to buy at least 200 tokens>",
    ],
  };
  return {
    props: {
      appConfig,
    },
  };
}

interface Landing {
  (props: { appConfig: AppConfig }): JSX.Element;
}

const Pis = (props: { children: string[] }): JSX.Element => {
  const { children } = props;
  return (
    <>
      {children.map((child) => (
        <p key={child}>{child}</p>
      ))}
    </>
  );
};

const Landing: Landing = function Landing({ appConfig }) {
  let O = () => <div></div>;
  const { name, description } = appConfig;
  return (
    <Layout landing>
      <div className="landing-page">
        <h1 className="landing-page-title">{name}</h1>
        <Pis>{description}</Pis>
      </div>
      <O></O>
    </Layout>
  );
};

export default Landing;
