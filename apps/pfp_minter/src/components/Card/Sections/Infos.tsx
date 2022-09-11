import styled from "styled-components";
import { TextArea } from "./TextArea";

export const Area = styled.div`
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  grid-template-columns: 3px 1fr;
  align-items: center;
  a {
    margin: 0;
    padding: 0;
    margin: 0;
  }
`;

export type InfosProps = {
  collection?: string;
  id?: string;
  creator?: string;
};
export const Infos = (props: InfosProps) => {
  return (
    <Area>
      <div></div>
      <TextArea></TextArea>
    </Area>
  );
};
