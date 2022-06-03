import { FlattenSimpleInterpolation } from "styled-components";

type TOverflow = {
  id: string;
  dynamic?: FlattenSimpleInterpolation;
};
export class Overflow implements TOverflow {
  constructor(public id: string, public dynamic?: FlattenSimpleInterpolation) {}
}
