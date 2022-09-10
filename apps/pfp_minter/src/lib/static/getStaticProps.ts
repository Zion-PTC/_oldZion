import { Database, DataType, Options } from "../../pages/api/types";

export async function getStaticProps<
  D extends DataType,
  Ds extends Database<D>
>(args: Options) {
  const response = await fetch(args.URL);
  const body: Ds = await response.json();
  let props: { data: D[] | undefined } = { data: undefined };
  props.data = [];
  for (let key in body) {
    props.data.push(body[key]);
  }
  if (!props.data) return;
  return props;
}
