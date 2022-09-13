import { OpenSeaMetadata } from "../types/Opensea";

type decorateProps<T, R> = {
  json1: T;
  json0: R;
  i: number;
  external_url: string;
  trait1: string;
  trait2: string;
};
type edit<T, R> = (props: decorateProps<T, R>) => T;

const edit: edit<OpenSeaMetadata, { path: string }> = function (props) {
  const { i, json0, json1, external_url, trait1, trait2 } = props;
  json1.image = nameImage(json1, json0);
  json1.external_url = external_url;
  json1.name = makeName(json1, i, trait1, trait2);
  return json1;
};

const makeName = function (
  json1: OpenSeaMetadata,
  i: number,
  trait1: string,
  trait2: string
) {
  return (
    json1.attributes.filter((att) => att.trait_type === trait1)[0].value +
    " " +
    json1.attributes.filter((att) => att.trait_type === trait2)[0].value +
    " #" +
    i
  );
};

const nameImage = function (json1: OpenSeaMetadata, json0: { path: string }) {
  return "https://ipfs.io/ipfs/" + json0.path + "?filename=" + json0.path;
};
