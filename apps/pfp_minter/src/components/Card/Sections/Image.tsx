import { StaticImageData } from "next/image";
import styled from "styled-components";
import Image from "next/image";
import { ImageProps } from "./types";

export const Area = styled.div`
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
`;

export const ImageSection = (props: ImageProps) => {
  return (
    <Area>
      {/* <Image src={props.src}></Image> */}
      <Img src={props.src} alt="nft"></Img>
    </Area>
  );
};
