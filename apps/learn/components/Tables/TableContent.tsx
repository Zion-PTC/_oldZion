import { ChangeEventHandler, useState } from "react";
import { DesignPatternResponse } from "../../pages/table";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const li = (value: string, index: number, array: string[]) => (
  <li key={value + index.toString()}>{value}</li>
);

function tableDetails<
  T extends string | number | readonly string[] | undefined | boolean
>(value: T, callback: ChangeEventHandler<HTMLInputElement>) {
  let content;

  if (value !== true && value !== false)
    content = (
      <td>
        <input type="text" value={value} onChange={callback} />
      </td>
    );

  if (Array.isArray(value))
    content = (
      <td>
        <ul>{value.map(li)}</ul>
      </td>
    );

  if (value === true || value === false)
    content = (
      <td>
        <input type="checkbox" checked={value} onChange={callback}></input>
      </td>
    );
  return content;
}

export function TableContent(props: { data: DesignPatternResponse }) {
  const [nome, setNome] = useState(props.data.nome);
  const [categoria, setCat] = useState(props.data.categoria);
  const [ex, setEx] = useState(props.data.esempiTitoli);
  const [tutsTitoli, setTutsTitoli] = useState(props.data.tutorialsTitoli);
  const [sorgentiTitoli, setSorgentiTitoli] = useState(
    props.data.sorgentiTitoli
  );
  const [inCheatsheet, setInCheatSheet] = useState(props.data.isInCheatSheet);
  const [inTSCheatsheet, setInTSCheatSheet] = useState(
    props.data.isInTSCheatSheet
  );
  const [inBase, setInBase] = useState(props.data.isInBase);

  const nameOnChange = (event: ChangeEvent) => setNome(event.target.value);
  const catOnChange = (event: ChangeEvent) => setCat(event.target.value);
  const checkboxOnChange = () => setInCheatSheet(!inCheatsheet);
  const isTScheckboxOnChange = () => setInTSCheatSheet(!inTSCheatsheet);
  const isBasecheckboxOnChange = () => setInBase(!inBase);

  return (
    <tr key={props.data.nome}>
      {tableDetails(nome, nameOnChange)}
      {tableDetails(categoria, catOnChange)}
      {tableDetails(ex, () => {})}
      {tableDetails(tutsTitoli, () => {})}
      {tableDetails(sorgentiTitoli, () => {})}
      {tableDetails(inCheatsheet, checkboxOnChange)}
      {tableDetails(inTSCheatsheet, isTScheckboxOnChange)}
      {tableDetails(inBase, isBasecheckboxOnChange)}
    </tr>
  );
}
