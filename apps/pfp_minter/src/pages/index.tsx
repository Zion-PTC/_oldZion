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
      `Long ago, the Intergalactic Empire (IGE) was erected to conquer or terraform all known galaxies in this universe. The IGE has been manipulating us using a technology that they control which allows them to freely access the multiverse and edit our universe to their liking. 

      They have been our overlords, and we, to them, are nothing but livestock. Their reign has been unquestionable and their acts of violence gone unpunished — until now. The citizens of the IGE have suffered this oppression long enough!
      
      Freedom Fighters! If we don't take the multiverse back, our universe is lost! This is a call to action. Will you stand with us and resist the cruelties and war crimes of our oppressors?`,
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
