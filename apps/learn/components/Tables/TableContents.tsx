import { DesignPatternResponse } from "../../pages/table";
import { TableContent } from "./TableContent";

export function TableContents(props: {
  data: DesignPatternResponse[];
}): JSX.Element {
  return (
    <>
      {props.data.map((pattern) => (
        <TableContent data={pattern} />
      ))}
    </>
  );
}
