import { StaticImageData } from "next/image";
import styled from "styled-components";
import Image from "next/image";

export const Area = styled.div`
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
`;

export type ImageProps = {
  image: StaticImageData;
};
export const ImageSection = (props: ImageProps) => {
  return (
    <Area>
      <Image src={props.image}></Image>
    </Area>
  );
};
