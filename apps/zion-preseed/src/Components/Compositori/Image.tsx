import { FlattenSimpleInterpolation } from "styled-components";

export type TImg = {
  src: string;
  alt?: string;
  id?: string;
  dynamic?: FlattenSimpleInterpolation;
};

export class Img implements TImg {
  constructor(
    public src: string,
    public alt?: string,
    public id?: string,
    public dynamic?: FlattenSimpleInterpolation
  ) {}
}
