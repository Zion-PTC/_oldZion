import { DataType } from "../../pages/api/types";
import { database, getStaticPropsOptions, IgetStaticProps } from "./types";

export const getStaticProps: IgetStaticProps = async function <
  D extends DataType,
  Ds extends database<D>
>(args: getStaticPropsOptions) {
  const response = await fetch(args.URL);
  const body: Ds = await response.json();
  let props: { data: D[] | undefined } = { data: undefined };
  props.data = [];
  for (let key in body) {
    props.data.push(body[key]);
  }
  if (!props.data) return;
  return props;
};
