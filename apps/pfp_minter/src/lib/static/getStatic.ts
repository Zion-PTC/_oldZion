import {
  Data,
  Database,
  DataByPath,
  DataType,
  StaticProps,
} from "../../pages/api/types";
import { getStaticPropsHandler } from "./getStaticPropsHandler";

const NFTS = "http://localhost:3000/api/nfts";

export type getStaticProps = {
  type: "nft";
  hasPaths: boolean;
};
export type getStaticReturn<D> = {
  getStaticPaths: () => {};
  getStaticProps: (
    props: StaticProps
  ) => Promise<{ props: Data<D> | DataByPath<D> }>;
};
export const getStatic = function <D extends DataType, Ds extends Database<D>>(
  props: getStaticProps
): getStaticReturn<D> {
  let URL: string;
  let { hasPaths, type } = props;
  if (type === "nft") URL = NFTS;
  async function getStaticPaths() {
    const response = await fetch(URL);
    const body: D = await response.json();
    let paths: StaticProps[] = [];
    for (let key in body) paths.push({ params: { id: key } });
    return {
      paths,
      fallback: false,
    };
  }
  async function getStaticProps(
    props?: StaticProps
  ): Promise<{ props: Data<D> | DataByPath<D> }> {
    if (hasPaths) {
      props.params.URL = URL;
      props.params.key = props.params.id;
    }
    return getStaticPropsHandler<D, Ds>(props, { URL });
  }

  return { getStaticPaths, getStaticProps };
};
