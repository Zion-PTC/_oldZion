import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { checkSize } from "./util";

export const CardStyle = styled.div<{
  small?: boolean;
  mid?: boolean;
  big?: boolean;
}>`
  border: 1px solid;
  ${(props) => checkSize(props)};
`;

export interface CardPfpProps {
  id?: number;
  name?: string;
  slug?: string;
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  images: StaticImageData[];
}

export interface CardPfp {
  (props: CardPfpProps): JSX.Element;
}

export const CardPfp: CardPfp = (props) => {
  const { name, slug, small, mid, big, id, images } = props;
  const href = `/nft/${id}`;
  return (
    <CardStyle small={small} mid={mid} big={big}>
      <div className="top-section">
        <div className="avatar">Avatar {name}</div>
        <div className="action">Action</div>
      </div>
      <Link href="/">
        <div className="image-section">
          <Link href={href}>Image</Link>
        </div>
      </Link>
      <div className="info-section">Infos</div>
      <div className="social-section">Social</div>
    </CardStyle>
  );
};
