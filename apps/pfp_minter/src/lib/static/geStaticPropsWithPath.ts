import { DataType } from "../../pages/api/types";
import {
  database,
  dataByPath,
  genericPaths,
  getStaticPropsOptions,
} from "./types";

export const getStaticPropsWithPath = async function <
  Ds extends database<D>,
  D extends DataType
>(
  props: genericPaths,
  args: getStaticPropsOptions
): Promise<{
  props: dataByPath<D>;
}> {
  const response = await fetch(args.URL);
  const body: Ds = await response.json();
  const newProps: dataByPath<D> = { data: undefined };
  newProps.data = body[props.params.id];
  return {
    props: newProps,
  };
};
