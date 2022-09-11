import styled from "styled-components";
import { Head } from "./Sections/Head";
import { Image } from "./Sections/Image";
import { Infos } from "./Sections/Infos";
import { Social } from "./Sections/Social";
import { Portrait } from "./Shape/Portrait";

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
  grid-template-rows: 1.4fr 9fr 1fr 1.8fr;
`;

export type NftPfProps = {
  small?: boolean;
  normal?: boolean;
  backgroundColor?: string;
};
export function NftPfp(props: NftPfProps) {
  let { backgroundColor } = props;
  return (
    <Area backgroundColor={backgroundColor}>
      <CardArea>
        <Head />
        <Image />
        <Infos />
        <Social />
      </CardArea>
    </Area>
  );
}
