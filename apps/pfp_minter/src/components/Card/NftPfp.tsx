import { StaticImageData } from "next/image";
import styled from "styled-components";
import { Head } from "./Sections/Head";
import { ImageSection } from "./Sections/Image";
import { Infos } from "./Sections/Infos";
import { Social } from "./Sections/Social";
import { Portrait } from "./Shape/Portrait";
import { NftPfp as NftPfpTypes } from "./types";

export const Area = styled(Portrait)`
  height: 100%;
  display: grid;
`;

export const CardArea = styled.div`
  background-color: #fafafa;
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  grid-template-rows: 1.4fr 9fr 1.5fr 1.3fr;
`;

export function NftPfp(props: NftPfpTypes.NftPfpProps) {
  let { backgroundColor } = props;
  return (
    <Area backgroundColor={backgroundColor}>
      <CardArea>
        <Head />
        <ImageSection src={props.src} />
        <Infos />
        <Social />
      </CardArea>
    </Area>
  );
}
