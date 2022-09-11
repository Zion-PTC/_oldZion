import React from "react";
import styled from "styled-components";
import { Album } from "../Album";
import { NftPfp } from "../NftPfp";
import { Square } from "./Square";

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export const Area = styled.div<{
  colSpan: number;
  rowSpan: number;
  backgroundColor?: string;
  width: number;
}>`
  background-color: ${(props) => props.backgroundColor};
  grid-column: span ${(props) => props.colSpan};
  grid-row: span ${(props) => props.rowSpan};
  width: ${(props) => props.width};
`;

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
}
export type CardShapesTypes = keyof typeof CardShapesEnum;
export type CardProps = {
  type: "nft-pfp" | "album";
  backgroundColor?: string;
};
export default function Card(props: CardProps) {
  let { type, backgroundColor } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => <NftPfp backgroundColor={backgroundColor}></NftPfp>;
      break;
    case "album":
      Element = () => <Album backgroundColor={backgroundColor}></Album>;
    default:
      break;
  }
  return <Element></Element>;
}
