import {
  Data,
  Database,
  DataByPath,
  DataType,
  Options,
  StaticProps,
} from "../../pages/api/types";
import { getStaticPropsWithPath } from "./geStaticPropsWithPath";
import { getStaticProps } from "./getStaticProps";

/**
 * Handles the different types of call:
 * - getStaticProps: returns datas withour querying a
 *   specific item
 * - getStaticPropsWithPath: returns datas for a single item
 *   and it is called side by side with getStaticPaths
 * @param props this can be either an undefied value (in the
 * case the function handles the getStaticProps method), or
 * it can be an object with a params member
 * @param args this
 * @returns
 */
export const getStaticPropsHandler = async function <
  D extends DataType,
  Ds extends Database<D>
>(
  props?: StaticProps,
  args?: Options
): Promise<{ props: Data<D> | DataByPath<D> }> {
  let nuprops: Data<D> | DataByPath<D> = { data: undefined };

  if ("URL" in args && !("params" in args)) {
    nuprops = await getStaticProps<D, Ds>(args);
  }
  if (props && "params" in props) {
    nuprops = (await getStaticPropsWithPath<Ds, D>(props, args)).props;
  }
  return {
    props: nuprops,
  };
};
