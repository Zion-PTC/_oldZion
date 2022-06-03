import { FlattenSimpleInterpolation } from "styled-components";

type TFilter = {
  id?: string;
  dynamic?: FlattenSimpleInterpolation;
  backgroundColor?: string;
};
export class Filter implements TFilter {
  constructor(
    public id?: string,
    public dynamic?: FlattenSimpleInterpolation,
    public backgroundColor?: string
  ) {}
}
