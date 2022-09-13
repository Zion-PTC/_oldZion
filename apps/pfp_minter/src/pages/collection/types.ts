import { Data, NftData } from "../api/types";

export type CollectionProps = Data<NftData> & {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  contentArea: React.MutableRefObject<HTMLDivElement>;
  columns: number;
};
