import { StaticImageData } from "next/image";
import React from "react";
import { Album } from "../Card/Album";
import { NftPfp } from "../Card/NftPfp";
import { Card as CardTypes } from "./types";

export default function Card(props: CardTypes.CardProps) {
  let { type, backgroundColor } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => (
        <NftPfp src={props.src} backgroundColor={backgroundColor}></NftPfp>
      );
      break;
    case "album":
      Element = () => (
        // TODO togliere indice dopo aver inserito CardPfps
        <Album src={props.src} backgroundColor={backgroundColor}></Album>
      );
    default:
      break;
  }
  return <Element></Element>;
}
