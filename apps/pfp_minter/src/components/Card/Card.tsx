import React from "react";
import { CardPfpProps } from "./CardPfp";
import { CardPfps } from "./CardPfps";

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export type CardFormatsTypes = keyof typeof CardFormats;

export const Card = (props: {
  datas: CardPfpProps[];
  type: "pfp";
  format?: CardFormatsTypes;
}): JSX.Element => {
  let Element: () => JSX.Element;
  switch (props.type) {
    case "pfp":
      Element = () => <CardPfps mid>{props.datas}</CardPfps>;
      break;

    default:
      break;
  }
  return (
    <>
      <Element />
    </>
  );
};
