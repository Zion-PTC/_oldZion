import {
  Database,
  DataByPath,
  DataType,
  Options,
  StaticProps,
} from "../../pages/api/types";

export async function getStaticPropsWithPath<
  Ds extends Database<D>,
  D extends DataType
>(props: StaticProps, args: Options) {
  const response = await fetch(args.URL);
  const body: Ds = await response.json();
  const newProps: DataByPath<D> = { data: undefined };
  newProps.data = body[props.params.id];
  return {
    props: newProps,
  };
}
