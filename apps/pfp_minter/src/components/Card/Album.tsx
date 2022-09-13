import { StaticImageData } from "next/image";
import styled from "styled-components";
import { Head } from "./Sections/Head";
import { ImageSection } from "./Sections/Image";
import { Infos } from "./Sections/Infos";
import { Social } from "./Sections/Social";
import { Portrait } from "./Shape/Portrait";
import { Album as AlbumTypes } from "./types";

export const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

export const CardArea = styled.div`
  background-color: #eeeeee;
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  grid-template-rows: 1.4fr 6fr 1fr 1.8fr;
`;
export function Album(props: AlbumTypes.AlbumProps) {
  let { backgroundColor } = props;
  return (
    <Area backgroundColor={backgroundColor}>
      <CardArea>
        <Head />
        <ImageSection src={props.src} />
        <Infos collection="CBBBB" id="#10" creator="THE RIPPER" />
        <Social />
      </CardArea>
    </Area>
  );
}
